import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BRAND, ABOUT_COPY, PHILOSOPHY_PILLARS } from '@/lib/content';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'About Vesper | The Meaning of the Evening Star & Our Philosophy',
  description:
    'Vesper is named after the evening star, the first light of night marking a new chapter. Discover our approach to wedding planning and Luxe Prep across all seven Emirates.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 bg-ivory text-charcoal">
      {/* 1. EDITORIAL HEADER & OPENING */}
      <section className="py-16 md:py-24 border-b border-champagne/30">
        <div className="vesper-container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>THE MEANING BEHIND OUR NAME</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy font-light leading-[1.12] mb-8">
            The Evening Star & A New Chapter
          </h1>

          <div className="w-16 h-[1px] bg-champagne-dark mx-auto mb-10" />

          {/* Large Editorial Opening Statement */}
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-charcoal leading-relaxed max-w-4xl mx-auto font-light">
            &ldquo;{ABOUT_COPY.opening}&rdquo;
          </blockquote>
        </div>
      </section>


      {/* 2. ATMOSPHERIC IMAGE HERO */}
      <section className="vesper-container py-12 md:py-16">
        <div className="relative h-[400px] md:h-[580px] rounded-xs overflow-hidden shadow-2xl">
          <Image
            src="/images/hero/vesper-blue-hour-reception.jpg"
            alt="Atmospheric UAE wedding reception in courtyard at blue hour dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-lg">
            <p className="text-eyebrow text-champagne mb-1">Twilight in the Emirates</p>
            <p className="font-serif text-xl md:text-2xl font-light">
              &ldquo;Where the light turns golden and everything comes together.&rdquo;
            </p>
          </div>
        </div>
      </section>


      {/* 3. ALTERNATING STORY & PHOTOGRAPHY */}
      <section className="py-16 md:py-24">
        <div className="vesper-container space-y-24">
          {/* Story Chapter 1: The UAE Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-eyebrow text-slate">Origins & Vision</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
                Where Cultures Meet & Celebrations Unfold
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-2" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                {ABOUT_COPY.paragraphs[0]}
              </p>
            </div>

            <div className="lg:col-span-6 relative h-[380px] md:h-[460px] rounded-xs overflow-hidden shadow-xl">
              <Image
                src="/images/weddings/cultural-celebration-stage.jpg"
                alt="Multicultural celebration stage in the UAE with architectural arches"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Story Chapter 2: The Dual Role (Planning & Luxe Prep) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:col-span-6 relative h-[380px] md:h-[460px] rounded-xs overflow-hidden shadow-xl lg:order-2">
              <Image
                src="/images/bridal/bridal-editorial-portrait.jpg"
                alt="Refined bridal editorial portrait in soft natural light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 lg:order-1">
              <span className="text-eyebrow text-slate">A Dual Focus</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
                Caring for the Event and the Couple
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-2" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                {ABOUT_COPY.paragraphs[1]}
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                {ABOUT_COPY.paragraphs[2]}
              </p>
            </div>
          </div>

          {/* Story Chapter 3: Listening & Honesty */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-eyebrow text-slate">Our Commitment</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
                No Templates. Genuine Attention.
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-2" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                {ABOUT_COPY.paragraphs[3]}
              </p>
              <div className="p-6 bg-white border border-champagne/40 rounded-xs shadow-sm">
                <p className="font-serif italic text-xl md:text-2xl text-navy">
                  &ldquo;{ABOUT_COPY.paragraphs[4]}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-widest text-slate mt-2">
                  — The Vesper Wedding Company Promise
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] md:h-[460px] rounded-xs overflow-hidden shadow-xl">
              <Image
                src="/images/weddings/ceremony-floral-arch.jpg"
                alt="Editorial ceremony setup in the UAE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 4. THE VESPER PHILOSOPHY PILLARS */}
      <section className="py-24 bg-navy text-ivory">
        <div className="vesper-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow text-champagne block mb-2">How We Work</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light">
              The Four Pillars of Vesper
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 bg-navy-dark/80 border border-champagne/20 rounded-xs space-y-4"
              >
                <div className="w-9 h-9 rounded-full border border-champagne/30 text-champagne font-serif flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-xl text-white">{pillar.title}</h3>
                <p className="text-eyebrow text-champagne/80 text-[0.68rem]">{pillar.subtitle}</p>
                <p className="text-slate text-xs leading-relaxed font-light">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. UAE-WIDE SERVICE COVERAGE */}
      <section className="py-24 bg-ivory-dark/40 border-t border-champagne/30">
        <div className="vesper-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-eyebrow text-slate">
                <MapPin className="w-4 h-4 text-champagne-dark" />
                <span>GEOGRAPHIC REACH</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
                Across All Seven Emirates
              </h2>
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                Whether on the iconic coastline of Dubai, in the royal palatial ballrooms of Abu Dhabi, 
                among the peaceful red desert dunes of Ras Al Khaimah, or at private coastal villas in Fujairah, 
                our studio provides full coordination and on-site production anywhere in the UAE.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {BRAND.emirates.map((emirate) => (
                  <div
                    key={emirate}
                    className="p-3 bg-white border border-champagne/30 rounded-xs flex items-center space-x-2 text-xs font-medium text-navy shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                    <span>{emirate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] md:h-[460px] rounded-xs overflow-hidden shadow-2xl">
              <Image
                src="/images/destinations/uae-desert-twilight-dinner.jpg"
                alt="Desert wedding dinner under the evening sky in the UAE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-champagne uppercase tracking-widest text-[0.68rem] block mb-1">
                  Destination & Outdoor Settings
                </span>
                <span>From intimate desert dunes to secluded private coastal coves across the Emirates.</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. CLOSING CONSULTATION CTA */}
      <ConsultationCTA
        variant="navy"
        title="Begin your journey with Vesper."
        subtitle="Schedule an introductory consultation with Adnan Ibn Zain to discuss your celebration date, vision, and planning requirements."
      />
    </div>
  );
}
