import { NextRequest, NextResponse } from 'next/server';

interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate?: string;
  location?: string;
  guestCount?: string;
  budgetRange?: string;
  servicesOfInterest?: string[];
  message?: string;
  privacyConsent: boolean;
  honeypot?: string;
  timestamp?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();

    // 1. Spam protection: Honeypot check
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Bot detected, silently reject without throwing server error
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    const {
      fullName,
      email,
      phone,
      eventType,
      preferredDate,
      location,
      guestCount,
      budgetRange,
      servicesOfInterest,
      message,
      privacyConsent,
    } = body;

    const errors: Record<string, string> = {};

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!phone || phone.trim().length < 7) {
      errors.phone = 'Please provide a valid WhatsApp or telephone number.';
    }

    if (!eventType || eventType.trim() === '') {
      errors.eventType = 'Please select an event type.';
    }

    if (!privacyConsent) {
      errors.privacyConsent = 'You must agree to the privacy policy to submit an inquiry.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: 'Validation failed.' },
        { status: 422 }
      );
    }

    // 3. Genuine Enquiry Delivery Workflow
    // In production, configure environment variables:
    // RESEND_API_KEY, RESEND_FROM_EMAIL, STUDIO_NOTIFICATION_EMAIL
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.STUDIO_NOTIFICATION_EMAIL || 'hello@vesperweddingcompany.com';

    const enquiryRecord = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      eventType,
      preferredDate: preferredDate || 'Not specified',
      location: location || 'All UAE',
      guestCount: guestCount || 'Not specified',
      budgetRange: budgetRange || 'Flexible / To discuss',
      services: servicesOfInterest && servicesOfInterest.length > 0 ? servicesOfInterest : ['General Consultation'],
      message: message ? message.trim() : 'No additional message provided',
    };

    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Vesper Inquiries <onboarding@resend.dev>',
            to: [notificationEmail],
            reply_to: email,
            subject: `New Wedding Consultation: ${fullName} (${eventType})`,
            text: `
New Wedding Consultation Inquiry - Vesper Wedding Company
---------------------------------------------------------
Client Name: ${enquiryRecord.fullName}
Email: ${enquiryRecord.email}
Phone / WhatsApp: ${enquiryRecord.phone}
Event Type: ${enquiryRecord.eventType}
Preferred Date: ${enquiryRecord.preferredDate}
Location / Emirate: ${enquiryRecord.location}
Estimated Guests: ${enquiryRecord.guestCount}
Budget Range: ${enquiryRecord.budgetRange}
Services: ${enquiryRecord.services.join(', ')}

Client Message:
${enquiryRecord.message}
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errData = await emailResponse.json();
          console.error('[Vesper Enquiry Delivery Error]:', errData);
          return NextResponse.json(
            {
              success: false,
              message: 'Email service error. Please contact us directly via WhatsApp at +971562854779.',
            },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          mode: 'live_delivered',
          enquiryId: enquiryRecord.id,
          message: 'Your inquiry has been delivered directly to our senior planning team.',
        });
      } catch (err) {
        console.error('[Vesper Network Error during email delivery]:', err);
        return NextResponse.json(
          {
            success: false,
            message: 'Unable to deliver inquiry. Please reach out directly on WhatsApp at +971562854779.',
          },
          { status: 500 }
        );
      }
    }

    // Development / Pending Credentials Mode:
    // Safely log the structured inquiry and notify the client interface honestly
    console.info('[VESPER STUDIO ENQUIRY LOGGED - PENDING RESEND_API_KEY]:', JSON.stringify(enquiryRecord, null, 2));

    return NextResponse.json({
      success: true,
      mode: 'development_fallback',
      enquiryId: enquiryRecord.id,
      message: 'Your inquiry has been successfully received by the studio console. For immediate assistance, you may also connect directly with Adnan Ibn Zain on WhatsApp.',
      integrationNote: 'Email delivery is operating in development mode. Configure RESEND_API_KEY and STUDIO_NOTIFICATION_EMAIL in your production environment variables to enable live transactional dispatch.',
    });
  } catch (error) {
    console.error('[Vesper Enquiry Uncaught Exception]:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please contact us via WhatsApp.' },
      { status: 500 }
    );
  }
}
