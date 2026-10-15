import React from 'react';
import type { Metadata } from 'next';
import { Sparkles, Info } from 'lucide-react';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Portfolio & Experiences | Curated Wedding Concepts & Ceremonies in UAE',
  description:
    'Explore Vesper Wedding Company curated portfolio of ceremonies, reception tablescapes, stage designs, and bridal editorial concepts across Dubai, Abu Dhabi, and the UAE.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-28 bg-ivory text-charcoal">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-16 md:py-24 border-b border-champagne/30">
        <div className="vesper-container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>PORTFOLIO & EXPERIENCES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy font-light leading-[1.12] mb-6">
            Curated Celebrations & Vision
          </h1>

          <div className="w-16 h-[1px] bg-champagne-dark mx-auto mb-8" />

          <p className="text-charcoal-muted text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-6">
            An immersive gallery of ceremonial arches, candlelit banquet tables, botanical compositions, 
            and private destination dinners across the United Arab Emirates.
          </p>

          {/* Integrity Notice Banner */}
          <div className="p-4 bg-white border border-champagne/40 rounded-xs text-xs text-charcoal-muted max-w-2xl mx-auto flex items-start space-x-2.5 text-left shadow-2xs">
            <Info className="w-4 h-4 text-champagne-dark shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-medium text-navy">Design Studio Note:</span> The featured gallery showcases 
              our studio&apos;s aesthetic direction and AI-assisted editorial concepts. To safeguard the private 
              sanctity of our couples, complete real wedding galleries and private retrospectives are presented 
              exclusively during scheduled personal consultations.
            </p>
          </div>
        </div>
      </section>


      {/* 2. GALLERY INTERACTIVE SECTION */}
      <section className="py-16 md:py-24 vesper-container">
        <PortfolioGallery />
      </section>


      {/* 3. CONSULTATION CALL TO ACTION */}
      <ConsultationCTA
        variant="navy"
        title="Envision your wedding with Vesper."
        subtitle="Bring your preferred aesthetics, color palettes, and cultural customs to our studio. We will curate a bespoke proposal tailored to your vision."
      />
    </div>
  );
}
