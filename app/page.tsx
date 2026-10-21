import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, PLANNING_JOURNEY, PHILOSOPHY_PILLARS, PORTFOLIO_ITEMS } from '@/lib/content';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export default function HomePage() {
  // Select signature services for the homepage
  const signatureServices = [
    SERVICES.find(s => s.id === 'full-wedding-planning')!,
    SERVICES.find(s => s.id === 'partial-planning')!,
    SERVICES.find(s => s.id === 'wedding-day-coordination')!,
    SERVICES.find(s => s.id === 'bridal-luxe-prep')!,
  ].filter(Boolean);

  // Selected portfolio celebrations
  const featuredCelebrations = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy text-white pt-24 pb-16">
        {/* Full-bleed background cinematic photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/vesper-blue-hour-reception.jpg"
            alt="Luxury candlelit wedding reception in palatial UAE courtyard at blue hour"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
          {/* Subtle gradient vignette overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-navy/60 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="vesper-container relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4 mt-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-champagne text-eyebrow border-b border-champagne/30 pb-2 mb-8 tracking-[0.26em]">
            <Sparkles className="w-3 h-3 text-champagne" />
            <span>{BRAND.eyebrow}</span>
          </div>

          {/* Vesper Official Brand Logo */}
          <h1 className="sr-only">{BRAND.name} — Luxury Wedding Planning & Design in UAE</h1>
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/brand/vesper-logo.png"
              alt="VESPER WEDDING COMPANY"
              width={360}
              height={284}
              priority
              className="h-28 sm:h-36 md:h-44 w-auto object-contain brightness-0 invert drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Main Editorial Headline */}
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-champagne font-light leading-snug max-w-3xl mb-6">
            &ldquo;{BRAND.tagline}&rdquo;
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-ivory/90 font-light leading-relaxed max-w-2xl mb-10">
            A bespoke wedding planning and coordination studio based in the UAE. 
            We bring together trusted venues, floral designers, master caterers, photographers, 
            and artists to compose a celebration that feels entirely yours.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 bg-champagne text-navy uppercase tracking-[0.2em] text-xs font-medium hover:bg-white transition-all duration-300 rounded-xs shadow-xl flex items-center justify-center space-x-2 group"
            >
              <span>Begin Your Story</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-9 py-4 border border-white/40 text-white uppercase tracking-[0.2em] text-xs font-medium hover:border-champagne hover:bg-white/10 hover:text-champagne transition-all duration-300 rounded-xs flex items-center justify-center space-x-2"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>

          {/* Subtle Scroll Indicator */}
          <div className="mt-16 sm:mt-20 flex flex-col items-center text-champagne/70 animate-bounce">
            <span className="text-[0.62rem] uppercase tracking-[0.3em] font-sans mb-1 text-champagne/60">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </section>


      {/* 2. BRAND INTRODUCTION SECTION */}
      <section className="py-24 md:py-36 bg-ivory text-charcoal relative">
        <div className="vesper-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-eyebrow text-slate block tracking-[0.22em]">The Vesper Ethos</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.18] text-navy font-light">
                A celebration that feels entirely yours.
              </h2>
              <div className="w-12 h-[1px] bg-champagne-dark my-4" />
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                Every wedding has a moment when the day softens: the light turns golden, the guests gather, 
                and everything you planned comes together. That moment is what we name ourselves after.
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                In a region known for grand scale, we believe true luxury lies in thoughtful curation, genuine listening, 
                and composed execution. You deserve one dedicated confidant who guides every decision, coordinates every detail, 
                and ensures that you arrive at your wedding day calm, radiant, and present.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-navy font-medium border-b border-navy pb-1 hover:text-champagne-dark hover:border-champagne-dark transition-colors"
                >
                  <span>Read the Vesper Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Overlapping Asymmetric Imagery */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-7 relative h-[420px] md:h-[500px] shadow-2xl rounded-xs overflow-hidden">
                  <Image
                    src="/images/weddings/reception-tablescape-candlelight.jpg"
                    alt="Restrained luxury tablescape styling with candlelight"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-5 -ml-6 md:-ml-12 mt-12 relative h-[320px] md:h-[380px] shadow-2xl rounded-xs overflow-hidden border-4 border-ivory z-10">
                  <Image
                    src="/images/details/white-ranunculus-garden-rose.jpg"
                    alt="Close-up macro of organic white wedding florals"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-[0.68rem] tracking-widest uppercase text-slate">
                  Curated Design Concept · Tactile Tablescape Artistry
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. SIGNATURE SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-ivory-dark/60 text-charcoal border-t border-champagne/30">
        <div className="vesper-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-champagne/30">
            <div>
              <span className="text-eyebrow text-slate block mb-2">Our Signature Offerings</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
                Tailored Guidance for Every Stage
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-navy hover:text-champagne-dark transition-colors font-medium"
            >
              <span>View All 15+ Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Editorial Alternating Layout */}
          <div className="space-y-16 lg:space-y-24">
            {signatureServices.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-xs overflow-hidden shadow-lg group ${isEven ? 'lg:order-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {service.badge && (
                      <span className="absolute top-4 left-4 bg-navy/90 text-champagne text-[0.68rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-xs backdrop-blur-sm border border-champagne/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <span className="text-eyebrow text-slate">0{index + 1} · {service.categoryLabel}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-navy font-light">
                      {service.name}
                    </h3>
                    <p className="text-charcoal-muted leading-relaxed text-sm md:text-base font-light">
                      {service.fullDescription}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wider text-navy font-medium mb-3">Key Elements:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-muted">
                        {service.features.slice(0, 4).map((f, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-champagne-dark mt-0.5">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.name)}`}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-6 py-3 bg-navy text-ivory hover:bg-champagne hover:text-navy transition-all duration-300 rounded-xs shadow-sm font-medium"
                      >
                        <span>Consult on {service.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 4. SELECTED CELEBRATIONS GALLERY */}
      <section className="py-24 md:py-36 bg-ivory text-charcoal">
        <div className="vesper-container">
          <div className="max-w-2xl mb-14">
            <span className="text-eyebrow text-slate block mb-2">Portfolio & Experience</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
              Atmospheric Editorial Visions
            </h2>
            <p className="text-charcoal-muted text-sm mt-3 leading-relaxed">
              Every celebration is art-directed to reflect the individual couple. Below is a curated selection 
              of design concepts, ceremonies, and dining experiences set across the UAE.
            </p>
          </div>

          {/* Asymmetrical Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {featuredCelebrations.map((item, idx) => {
              const colSpan = idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';
              const heightClass = idx === 0 || idx === 3 ? 'h-[440px] md:h-[500px]' : 'h-[380px] md:h-[500px]';

              return (
                <div
                  key={item.id}
                  className={`${colSpan} group relative overflow-hidden rounded-xs bg-navy shadow-md`}
                >
                  <div className={`relative w-full ${heightClass}`}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-2">
                      <span className="text-[0.65rem] tracking-[0.24em] uppercase text-champagne block">
                        {item.conceptSubtitle}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white group-hover:text-champagne transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-ivory/80 line-clamp-2 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-3.5 border border-navy text-navy uppercase tracking-[0.2em] text-xs font-medium hover:bg-navy hover:text-ivory transition-all duration-300 rounded-xs"
            >
              <span>Explore Full Portfolio Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* 5. THE VESPER PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-navy text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E9D9C2_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="vesper-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-eyebrow text-champagne block mb-2">Our Guiding Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light">
              The Vesper Philosophy
            </h2>
            <p className="text-slate text-sm md:text-base mt-4 leading-relaxed font-light">
              We believe a wedding should feel like you, not like a template. That means listening closely, 
              being honest about budgets and timelines, and giving every celebration the same composed devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHILOSOPHY_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="bg-navy-dark/70 border border-champagne/15 p-8 rounded-xs space-y-4 hover:border-champagne/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne text-xs font-serif">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-xl text-white font-medium">
                  {pillar.title}
                </h3>
                <p className="text-eyebrow text-champagne/70 text-[0.68rem]">
                  {pillar.subtitle}
                </p>
                <p className="text-slate text-xs leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. LUXE PREP SHOWCASE */}
      <section className="py-24 md:py-36 bg-ivory text-charcoal">
        <div className="vesper-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[440px] md:h-[520px] rounded-xs overflow-hidden shadow-2xl">
              <Image
                src="/images/details/bridal-groom-luxe-prep.jpg"
                alt="Bridal & Groom Luxe Prep - pre-wedding wellness, skincare, styling, and composure consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_15%]"
                priority
              />
              <div className="absolute top-4 left-4 bg-navy text-champagne text-[0.68rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-xs">
                Vesper Exclusive Programme
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-eyebrow text-slate block">Pre-Wedding Wellness & Composure</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light leading-tight">
                Bridal & Groom Luxe Prep
              </h2>
              <p className="text-charcoal-muted text-sm md:text-base leading-relaxed font-light">
                In the rush of logistics, couples often forget to prepare themselves. We created Luxe Prep 
                as a guided three-part pre-wedding consultation programme so you arrive at every celebration feeling 
                confident, comfortable, and completely yourself.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-ivory-dark/70 border-l-2 border-champagne-dark rounded-r-xs">
                  <h4 className="font-serif text-lg text-navy font-medium">1. Skincare Consultation</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed mt-1">
                    A personalized routine to nurture your skin in the months before the wedding, focusing on hydration, natural glow, and calm skin health.
                  </p>
                </div>

                <div className="p-4 bg-ivory-dark/70 border-l-2 border-champagne-dark rounded-r-xs">
                  <h4 className="font-serif text-lg text-navy font-medium">2. Styling Consultation</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed mt-1">
                    Complete outfit and look guidance for every celebration, from engagement ceremonies to the reception gown or tailored groom tuxedo.
                  </p>
                </div>

                <div className="p-4 bg-ivory-dark/70 border-l-2 border-champagne-dark rounded-r-xs">
                  <h4 className="font-serif text-lg text-navy font-medium">3. Fitness & Posture Consultation</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed mt-1">
                    A realistic, balanced plan to build poise, energy, and strength without exhausting schedules.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[0.72rem] text-slate italic">
                * Note: Consultations provide aesthetic guidance and lifestyle recommendations; they do not constitute medical advice or guaranteed outcomes.
              </div>

              <div className="pt-2">
                <Link
                  href="/services#luxe-prep"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-navy text-ivory uppercase tracking-[0.2em] text-xs font-medium hover:bg-champagne hover:text-navy transition-all duration-300 rounded-xs"
                >
                  <span>Explore Luxe Prep Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. PLANNING JOURNEY */}
      <section className="py-24 md:py-32 bg-ivory-dark/40 text-charcoal border-t border-champagne/30">
        <div className="vesper-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow text-slate block mb-2">Our Collaborative Flow</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
              The Planning Journey
            </h2>
            <p className="text-charcoal-muted text-sm mt-3">
              A calm, structured sequence that turns an overwhelming checklist into a joyful, composed journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLANNING_JOURNEY.map((journey, idx) => (
              <div
                key={journey.step}
                className="relative bg-white p-8 rounded-xs shadow-sm border border-champagne/30 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-champagne/20 pb-4 mb-4">
                    <span className="font-serif text-2xl text-champagne-dark font-light">{journey.step}</span>
                    <span className="text-eyebrow text-navy font-semibold">{journey.phase}</span>
                  </div>
                  <h3 className="font-serif text-xl text-navy font-medium mb-2">
                    {journey.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {journey.description}
                  </p>
                </div>

                <div className="pt-4 text-right">
                  <span className="text-[0.62rem] uppercase tracking-widest text-slate">Phase {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. TESTIMONIALS PLACEHOLDER (INTEGRITY RULE COMPLIANT) */}
      <section className="py-20 bg-ivory text-charcoal border-t border-champagne/20">
        <div className="vesper-container text-center max-w-3xl mx-auto">
          <span className="text-eyebrow text-slate block mb-2">Couple Reflections</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy font-light mb-4">
            A Commitment to Private Confidentiality
          </h2>
          <div className="p-6 bg-white border border-champagne/40 rounded-xs shadow-sm text-xs md:text-sm text-charcoal-muted leading-relaxed space-y-3">
            <p>
              At Vesper Wedding Company, we hold our couples&apos; privacy in the highest regard. 
              Verified reviews and private retrospective journals are presented exclusively during 
              one-on-one consultations upon mutual consent.
            </p>
            <p className="text-[0.75rem] text-slate font-medium">
              We never publish fabricated testimonials or private guest disclosures.
            </p>
          </div>
        </div>
      </section>


      {/* 9. FINAL CONSULTATION CTA */}
      <ConsultationCTA
        variant="navy"
        title="Let's create something unforgettable."
        subtitle="Speak directly with Neha & Adnan to explore dates, venues, and bespoke coordination across Dubai, Abu Dhabi, and all seven Emirates."
      />
    </div>
  );
}
