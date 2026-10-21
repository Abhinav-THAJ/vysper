import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, MapPin, CheckCircle2, Heart, ArrowUpRight } from 'lucide-react';
import { BRAND, FOUNDERS, PHILOSOPHY_PILLARS } from '@/lib/content';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'About Vesper | Why “Vesper”, Meet Neha & Adnan & Our Story',
  description:
    'Vesper is the evening star, a quiet constant light guiding you to your big day. Meet founders Neha & Adnan and discover how we hold every detail so you can focus on each other.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 bg-ivory text-charcoal">
      {/* ===================================================================
          1. WHY "VESPER"? — EDITORIAL HERO
      =================================================================== */}
      <section className="py-16 md:py-24 border-b border-champagne/30 relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-champagne/20 blur-[140px] pointer-events-none rounded-full" />

        <div className="vesper-container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-5">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>THE MEANING BEHIND OUR NAME</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy font-light leading-[1.12] mb-6">
            Why “Vesper”?
          </h1>

          <div className="w-16 h-[1px] bg-champagne-dark mx-auto mb-8" />

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-navy/90 font-light leading-relaxed mb-6 italic">
            &ldquo;Vesper is the evening star — the first light to appear as the sky turns dark.&rdquo;
          </p>

          <p className="text-charcoal-muted leading-relaxed text-base md:text-lg font-light max-w-3xl mx-auto">
            It doesn’t shout for attention. It simply shines, calm and steady, reminding you that you’re never lost. 
            We’ve always loved the stars, and that’s exactly what we hope to be for every couple we meet: 
            a quiet, constant light guiding you to your big day.
          </p>
        </div>
      </section>


      {/* ===================================================================
          2. MEET THE FOUNDERS: NEHA & ADNAN — EDITORIAL STORY & WEDDING PHOTOS
      =================================================================== */}
      <section className="py-20 md:py-32 relative bg-ivory-light">
        <div className="vesper-container">
          {/* Eyebrow & Main Founders Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-4">
              <Heart className="w-3.5 h-3.5 text-champagne-dark" />
              <span>THE HEARTS BEHIND VESPER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy font-light leading-[1.15] mb-4">
              Hi, we’re Neha & Adnan.
            </h2>
            <p className="text-eyebrow text-champagne-dark font-medium tracking-[0.2em]">
              NEWLYWEDS · CO-FOUNDERS & LEAD PLANNERS
            </p>
            <div className="w-12 h-[1px] bg-champagne-dark mx-auto mt-6" />
          </div>

          {/* Dual Photo Gallery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
            {/* Photo 1: Under the Veil (Intimate Portrait) */}
            <div className="md:col-span-6 lg:col-span-5 relative group">
              <div className="relative h-[440px] sm:h-[520px] md:h-[580px] rounded-xs overflow-hidden shadow-2xl border border-champagne/40 bg-navy/5">
                <Image
                  src={FOUNDERS.photos.veil}
                  alt="Neha and Adnan sharing an intimate smile under the bridal veil"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-champagne text-[0.68rem] uppercase tracking-[0.25em] mb-1 font-sans">
                    Neha & Adnan
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-light italic">
                    &ldquo;You focus on each other. We’ll hold everything else.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 2: The Spotlight Dance with Haze (The Defining Moment) */}
            <div className="md:col-span-6 lg:col-span-7 relative group md:mt-12 lg:mt-0">
              <div className="relative h-[440px] sm:h-[520px] md:h-[580px] rounded-xs overflow-hidden shadow-2xl border border-champagne/40 bg-navy/5">
                <Image
                  src={FOUNDERS.photos.dance}
                  alt="Neha and Adnan dancing under a single spotlight with soft smoke on their wedding day"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white max-w-lg">
                  <span className="inline-block px-2.5 py-1 bg-champagne text-navy text-[0.62rem] uppercase tracking-widest font-semibold rounded-xs mb-3">
                    The Moment We’ll Never Forget
                  </span>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-snug">
                    Under a single spotlight, with soft smoke drifting across the floor, we danced.
                  </p>
                  <p className="text-champagne/80 text-xs font-light mt-1">
                    Everything else disappeared. It was just the two of us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story Blocks — Editorial Layout */}
          <div className="max-w-4xl mx-auto space-y-12 bg-white/70 backdrop-blur-xs p-8 sm:p-12 md:p-16 border border-champagne/40 rounded-xs shadow-lg">
            {/* Act 1: The Eldest Children's Feeling */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-slate text-eyebrow">
                <span className="w-6 h-[1px] bg-champagne-dark" />
                <span>WHERE OUR JOURNEY BEGAN</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy font-light leading-snug">
                The Eldest Children in Our Families
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base font-light">
                {FOUNDERS.story.eldestParagraph}
              </p>
            </div>

            {/* Act 2: Planning Every Detail Alone */}
            <div className="space-y-4 border-t border-champagne/25 pt-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-navy font-light leading-snug">
                Carrying the Quiet Weight
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base font-light">
                {FOUNDERS.story.planningParagraph}
              </p>
            </div>

            {/* Act 3: The Moment That Changed Everything — Highlight Callout */}
            <div className="border-l-2 border-champagne-dark pl-6 sm:pl-8 py-4 my-8 bg-ivory/60 rounded-r-xs">
              <span className="text-eyebrow text-champagne-dark block mb-2">THE TURNING POINT</span>
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-navy leading-relaxed font-light mb-3">
                &ldquo;{FOUNDERS.story.danceParagraph}&rdquo;
              </p>
            </div>

            {/* Act 4: The Mission — Giving That Moment Back */}
            <div className="space-y-4 border-t border-champagne/25 pt-8">
              <div className="inline-flex items-center space-x-2 text-slate text-eyebrow">
                <span className="w-6 h-[1px] bg-champagne-dark" />
                <span>OUR PROMISE TO YOU</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy font-light leading-snug">
                That’s the Moment We Want to Give Back
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base font-light">
                {FOUNDERS.story.missionParagraph}
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm sm:text-base font-light">
                {FOUNDERS.story.closingPromise}
              </p>
            </div>

            {/* Act 5: Signature Tagline & Sign-off */}
            <div className="pt-8 border-t border-champagne/30 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-serif italic text-2xl sm:text-3xl text-navy">
                  &ldquo;{FOUNDERS.story.quote}&rdquo;
                </p>
                <p className="text-champagne-dark text-xs uppercase tracking-[0.25em] font-medium mt-2">
                  {FOUNDERS.story.signoff}
                </p>
              </div>

              <div className="shrink-0 text-center sm:text-right">
                <span className="font-serif text-xl text-navy font-light block">Neha & Adnan</span>
                <span className="text-[0.68rem] uppercase tracking-widest text-slate block mt-0.5">
                  Founders, Vesper Wedding Company
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          3. UAE CONTEXT & EDITORIAL CHAPTERS
      =================================================================== */}
      <section className="py-20 md:py-28 bg-ivory border-t border-champagne/30">
        <div className="vesper-container space-y-24">
          {/* Chapter 1: Where Cultures Meet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-eyebrow text-slate">Origins & Vision</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
                Where Cultures Meet & Celebrations Unfold
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-2" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                Vesper Wedding Company was created in the UAE — a place where traditions intertwine and celebrations 
                are as diverse as the couples who plan them. We saw that many couples love the idea of their wedding 
                but feel overwhelmed by dozens of disconnected suppliers, endless decisions, and the quiet worry that 
                something will slip on the day.
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                We act as your calm confidant and single point of contact, bringing together the region’s premier 
                venues, floral artisans, caterers, and lighting designers tailored strictly to your vision.
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

          {/* Chapter 2: The Dual Role (Planning & Luxe Prep) */}
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
              <span className="text-eyebrow text-slate">Caring for the Event & the Couple</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-light leading-snug">
                Never Forgotten in the Rush of Planning
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-2" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                In the rush of logistics, couples often forget to prepare themselves. That is why we built Vesper around both.
                Beyond master timelines and vendor handoffs, our Bridal Luxe Prep and Groom Luxe Prep programmes ensure 
                you arrive at every celebration rested, confident, and radiant.
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                We believe a wedding should feel like you, not like a template. That means listening deeply, 
                being honest about budgets and timelines, and honoring the emotional heartbeat of your celebration.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-navy font-medium border-b border-navy pb-1 hover:text-champagne-dark hover:border-champagne-dark transition-colors"
                >
                  <span>Explore Our Planning Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          4. THE FOUR PILLARS OF VESPER
      =================================================================== */}
      <section className="py-24 bg-navy text-ivory">
        <div className="vesper-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow text-champagne block mb-2">Our Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light">
              The Four Pillars of Vesper
            </h2>
            <p className="text-slate text-sm font-light mt-3">
              How Neha, Adnan, and our team safeguard your celebration with steady care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 bg-navy-dark/80 border border-champagne/20 rounded-xs space-y-4 hover:border-champagne/50 transition-colors duration-300"
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


      {/* ===================================================================
          5. UAE-WIDE COVERAGE
      =================================================================== */}
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
                Whether on the iconic coastline of Dubai, in royal palatial ballrooms in Abu Dhabi, 
                among the red desert dunes of Ras Al Khaimah, or at secluded seaside villas in Fujairah, 
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


      {/* ===================================================================
          6. CLOSING CONSULTATION CTA
      =================================================================== */}
      <ConsultationCTA
        variant="navy"
        title="Begin your journey with Vesper."
        subtitle="Schedule an introductory consultation with Neha & Adnan to discuss your celebration date, vision, and planning requirements."
      />
    </div>
  );
}
