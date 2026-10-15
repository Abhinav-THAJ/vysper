import React from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/content';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

interface ConsultationCTAProps {
  variant?: 'navy' | 'ivory';
  title?: string;
  subtitle?: string;
}

export default function ConsultationCTA({
  variant = 'navy',
  title = "Let's create something unforgettable.",
  subtitle = "Whether you are envisioning a monumental celebration in an iconic ballroom or an intimate dinner under the desert stars, we are here to guide every step with calm precision."
}: ConsultationCTAProps) {
  const isNavy = variant === 'navy';

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${isNavy ? 'bg-navy text-ivory' : 'bg-ivory-dark text-charcoal'}`}>
      {/* Decorative ambient elements */}
      {isNavy && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-champagne/10 blur-[130px] rounded-full" />
        </div>
      )}

      <div className="vesper-container relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-champagne text-eyebrow mb-6">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span>YOUR CELEBRATION ACROSS THE UAE</span>
        </div>

        <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 ${isNavy ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>

        <p className={`text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 ${isNavy ? 'text-slate' : 'text-charcoal-muted'}`}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-champagne text-navy uppercase tracking-[0.2em] text-xs font-medium hover:bg-white transition-all duration-300 rounded-xs flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Begin Your Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-8 py-4 border uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300 rounded-xs flex items-center justify-center space-x-2 ${
              isNavy
                ? 'border-champagne/40 text-ivory hover:border-champagne hover:bg-champagne/10'
                : 'border-navy/40 text-navy hover:border-navy hover:bg-navy/5'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-champagne" />
            <span>Speak on WhatsApp</span>
          </a>
        </div>

        <p className={`mt-8 text-xs tracking-wider uppercase ${isNavy ? 'text-slate/80' : 'text-slate'}`}>
          Direct inquiries with {BRAND.contactPerson} · All seven Emirates
        </p>
      </div>
    </section>
  );
}
