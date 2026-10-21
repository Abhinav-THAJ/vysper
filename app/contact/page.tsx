import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Sparkles, MessageSquare, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BRAND } from '@/lib/content';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us & Consultation | Connect with Vesper Wedding Company',
  description:
    'Schedule a bespoke wedding planning consultation with Neha & Adnan at Vesper Wedding Company. Direct inquiries via WhatsApp (+971 56 285 4779) or our confidential consultation form across the UAE.',
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
            Contact Us & Consultation
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
                <span className="text-eyebrow text-champagne block mb-1 tracking-[0.2em]">Direct Studio Liaison</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
                  Speak Directly
                </h2>
                <p className="text-slate text-xs mt-1.5 font-light">
                  Lead Coordinator: <span className="text-champagne font-normal">{BRAND.contactPerson}</span>
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* WhatsApp rendered as elegant typography/font styling */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-navy-light/40 hover:bg-champagne/15 border border-champagne/30 hover:border-champagne transition-all duration-300 rounded-xs group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg tracking-wide text-champagne group-hover:text-champagne-light">
                      WhatsApp Concierge
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-champagne/70 group-hover:text-champagne border border-champagne/30 px-2 py-0.5 rounded-xs">
                      Instant Chat
                    </span>
                  </div>
                  <div className="mt-2 font-serif text-2xl text-white font-light tracking-wide group-hover:text-champagne transition-colors">
                    {BRAND.phoneDisplay}
                  </div>
                  <p className="text-[0.72rem] text-slate mt-1 font-light">
                    Direct line for discreet event inquiries & availability
                  </p>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${BRAND.phone}`}
                  className="block p-4 bg-navy-dark/60 hover:bg-navy-light/50 border border-white/10 hover:border-champagne/30 transition-all duration-300 rounded-xs group"
                >
                  <span className="font-serif text-base text-slate group-hover:text-champagne tracking-wide block">
                    Direct Telephone
                  </span>
                  <span className="font-serif text-xl text-ivory font-light tracking-wide block mt-1">
                    {BRAND.phoneDisplay}
                  </span>
                </a>

                {/* Email as supplied by client */}
                <div className="p-4 bg-navy-dark/60 border border-white/10 rounded-xs space-y-1.5">
                  <span className="font-serif text-base text-slate tracking-wide block">
                    Studio Correspondence
                  </span>
                  <a
                    href={`mailto:${BRAND.emailClientSupplied}`}
                    className="font-serif text-lg text-champagne hover:underline block break-all font-light tracking-wide"
                  >
                    {BRAND.emailClientSupplied}
                  </a>
                  <p className="text-[0.68rem] text-slate/80 italic font-light pt-0.5">
                    * Official studio inbox registered per client specification.
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="pt-4 border-t border-champagne/20 space-y-2 text-xs">
                <div className="flex items-start space-x-2 text-slate font-light">
                  <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ivory font-normal font-serif text-sm">Service Coverage</p>
                    <p className="text-[0.78rem] text-slate/90 leading-relaxed pt-0.5">
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
