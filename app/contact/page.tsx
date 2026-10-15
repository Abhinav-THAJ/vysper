import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Sparkles, MessageSquare, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BRAND } from '@/lib/content';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact & Consultation | Connect with Vesper Wedding Company',
  description:
    'Schedule a bespoke wedding planning consultation with Adnan Ibn Zain at Vesper Wedding Company. Direct inquiries via WhatsApp (+971562854779) or our confidential consultation form across the UAE.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 bg-ivory text-charcoal">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-16 md:py-20 border-b border-champagne/30">
        <div className="vesper-container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>COMMENCE YOUR CELEBRATION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy font-light leading-[1.12] mb-6">
            Contact & Consultation
          </h1>

          <div className="w-16 h-[1px] bg-champagne-dark mx-auto mb-8" />

          <p className="text-charcoal-muted text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every memorable evening begins with a quiet conversation. Tell us about your desired celebration, 
            and let us orchestrate every detail with calm, attentive care across the United Arab Emirates.
          </p>
        </div>
      </section>


      {/* 2. MAIN CONTACT & FORM SECTION */}
      <section className="py-16 md:py-24 vesper-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Channels */}
          <div className="lg:col-span-4 space-y-8">
            {/* Primary WhatsApp Card */}
            <div className="bg-navy text-ivory p-8 rounded-xs shadow-xl border border-champagne/30 space-y-6">
              <div>
                <span className="text-eyebrow text-champagne block mb-1">Direct Liaison</span>
                <h2 className="font-serif text-2xl text-white font-medium">
                  Speak Directly
                </h2>
                <p className="text-slate text-xs mt-1">
                  Lead Coordinator: <span className="text-champagne">{BRAND.contactPerson}</span>
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 bg-champagne text-navy hover:bg-white transition-all duration-300 rounded-xs font-sans shadow-md"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-wider block font-semibold">
                      WhatsApp Instant Chat
                    </span>
                    <span className="text-xs font-mono font-medium">{BRAND.phoneDisplay}</span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center space-x-3.5 p-3.5 bg-navy-light/60 text-ivory hover:bg-champagne hover:text-navy border border-champagne/20 transition-all duration-300 rounded-xs font-sans"
                >
                  <Phone className="w-4 h-4 text-champagne" />
                  <div>
                    <span className="text-[0.65rem] uppercase tracking-wider block text-slate">
                      Telephone
                    </span>
                    <span className="text-xs font-mono">{BRAND.phoneDisplay}</span>
                  </div>
                </a>

                {/* Email as supplied by client */}
                <div className="p-3.5 bg-navy-dark/70 border border-champagne/15 rounded-xs space-y-1">
                  <span className="text-[0.65rem] uppercase tracking-wider block text-slate flex items-center space-x-1.5">
                    <Mail className="w-3 h-3 text-champagne" />
                    <span>Client-Supplied Studio Email</span>
                  </span>
                  <a
                    href={`mailto:${BRAND.emailClientSupplied}`}
                    className="text-xs font-mono text-champagne hover:underline block break-all"
                  >
                    {BRAND.emailClientSupplied}
                  </a>
                  <p className="text-[0.65rem] text-slate/75 italic pt-1">
                    * Official studio inbox registered per client specification.
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="pt-4 border-t border-champagne/20 space-y-2 text-xs">
                <div className="flex items-start space-x-2 text-slate">
                  <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ivory font-medium">Service Coverage</p>
                    <p className="text-[0.75rem] text-slate leading-relaxed">
                      All over the United Arab Emirates (Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Fujairah, Umm Al-Quwain).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Privacy & Protocol Pledge */}
            <div className="bg-white border border-champagne/40 p-6 rounded-xs shadow-sm space-y-3 text-xs text-charcoal-muted leading-relaxed">
              <div className="flex items-center space-x-2 text-navy font-serif text-base">
                <ShieldCheck className="w-4 h-4 text-champagne-dark" />
                <span>Confidentiality Guarantee</span>
              </div>
              <p>
                We handle high-profile, VIP, and private family celebrations across the UAE with strict discretion. 
                Your contact details, dates, and wedding logistics are never disclosed without your consent.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-center text-xs text-slate">Loading consultation form...</div>}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
