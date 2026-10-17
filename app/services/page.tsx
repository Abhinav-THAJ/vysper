import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { SERVICES } from '@/lib/content';
import ConsultationCTA from '@/components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Services & Luxe Prep | Comprehensive Wedding Planning & Styling in UAE',
  description:
    'Explore Vesper Wedding Company bespoke services: Full Planning, Day-of Coordination, Stage & Floral Design, Destination Weddings, and our exclusive Bridal & Groom Luxe Prep programme.',
};

export default function ServicesPage() {
  const planningServices = SERVICES.filter(s => s.category === 'planning');
  const designServices = SERVICES.filter(s => s.category === 'design');
  const celebrationServices = SERVICES.filter(s => s.category === 'celebrations');
  const creativeServices = SERVICES.filter(s => s.category === 'creative');

  return (
    <div className="pt-24 md:pt-28 bg-ivory text-charcoal">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-16 md:py-24 border-b border-champagne/30">
        <div className="vesper-container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-slate text-eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>BESPOKE EVENT SERVICES & PREPARATION</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy font-light leading-[1.12] mb-6">
            Services & Luxe Prep
          </h1>
          <div className="w-16 h-[1px] bg-champagne-dark mx-auto mb-8" />
          <p className="text-charcoal-muted text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From complete wedding orchestration to bespoke stage design and personal pre-wedding care, 
            every offering is tailored to your unique celebration across the United Arab Emirates.
          </p>
        </div>
      </section>


      {/* 2. CATEGORY A: WEDDING PLANNING */}
      <section id="planning" className="py-20 md:py-28 vesper-container">
        <div className="max-w-2xl mb-12">
          <span className="text-eyebrow text-slate block mb-1">Category A</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
            Wedding Planning
          </h2>
          <p className="text-charcoal-muted text-sm mt-2 leading-relaxed">
            Your single point of contact across every supplier, budget tier, and timeline milestone in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {planningServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-champagne/30 rounded-xs overflow-hidden shadow-sm flex flex-col justify-between group hover:border-champagne-dark transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {service.badge && (
                  <span className="absolute top-4 left-4 bg-navy/90 text-champagne text-[0.68rem] tracking-[0.2em] uppercase px-3 py-1 rounded-xs backdrop-blur-sm border border-champagne/30">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-navy font-medium mb-3">
                    {service.name}
                  </h3>
                  <p className="text-charcoal-muted text-xs md:text-sm leading-relaxed mb-6 font-light">
                    {service.fullDescription}
                  </p>

                  <div className="border-t border-champagne/20 pt-4 space-y-2">
                    <p className="text-eyebrow text-slate text-[0.68rem]">Key Deliverables</p>
                    <ul className="space-y-1.5 text-xs text-charcoal-muted">
                      {service.features.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-champagne/20">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="w-full inline-flex items-center justify-between py-3 px-4 bg-ivory hover:bg-navy hover:text-white text-navy border border-champagne/40 text-xs uppercase tracking-widest transition-all duration-300 rounded-xs font-medium"
                  >
                    <span>Inquire for {service.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. CATEGORY B: DESIGN AND STYLING */}
      <section id="design" className="py-20 md:py-28 bg-ivory-dark/40 border-t border-champagne/30">
        <div className="vesper-container">
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-slate block mb-1">Category B</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
              Design & Styling
            </h2>
            <p className="text-charcoal-muted text-sm mt-2 leading-relaxed">
              Sculptural botanicals, bespoke Kosha and stage scenography, and atmospheric tablescapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-champagne/30 rounded-xs overflow-hidden shadow-sm flex flex-col justify-between group hover:border-champagne-dark transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-navy font-medium mb-2">
                      {service.name}
                    </h3>
                    <p className="text-charcoal-muted text-xs leading-relaxed mb-4 font-light">
                      {service.fullDescription}
                    </p>

                    <div className="border-t border-champagne/20 pt-3 space-y-1.5">
                      <p className="text-eyebrow text-slate text-[0.65rem]">Art Direction Scope</p>
                      <ul className="space-y-1 text-xs text-charcoal-muted">
                        {service.features.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <span className="text-champagne-dark mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-champagne/20">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="w-full inline-flex items-center justify-between py-2.5 px-3 bg-ivory hover:bg-navy hover:text-white text-navy border border-champagne/40 text-[0.72rem] uppercase tracking-wider transition-all duration-300 rounded-xs font-medium"
                    >
                      <span>Inquire Design</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. CATEGORY C: WEDDING CELEBRATIONS */}
      <section id="celebrations" className="py-20 md:py-28 vesper-container">
        <div className="max-w-2xl mb-12">
          <span className="text-eyebrow text-slate block mb-1">Category C</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
            Wedding Celebrations
          </h2>
          <p className="text-charcoal-muted text-sm mt-2 leading-relaxed">
            From pre-wedding cultural rituals to destination celebrations across the Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {celebrationServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-champagne/30 rounded-xs p-6 flex flex-col justify-between hover:border-champagne-dark transition-all duration-300 shadow-2xs group"
            >
              <div className="space-y-4">
                <div className="relative h-44 w-full rounded-xs overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-navy font-medium">
                  {service.name}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  {service.shortDescription}
                </p>
                <ul className="space-y-1 text-[0.72rem] text-charcoal-muted pt-2 border-t border-champagne/20">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-champagne-dark">▪</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-champagne/20 mt-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center space-x-1.5 text-navy hover:text-champagne-dark text-[0.72rem] uppercase tracking-wider font-medium transition-colors"
                >
                  <span>Discuss This Celebration</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. CATEGORY D: CREATIVE AND EVENT SERVICES */}
      <section id="creative" className="py-20 md:py-28 bg-ivory-dark/40 border-t border-champagne/30">
        <div className="vesper-container">
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-slate block mb-1">Category D</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-light">
              Creative & Event Services
            </h2>
            <p className="text-charcoal-muted text-sm mt-2 leading-relaxed">
              Fine art editorial photography curation, live acoustic performances, and corporate galas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creativeServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-champagne/30 rounded-xs p-6 flex flex-col justify-between hover:border-champagne-dark transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-xs overflow-hidden mb-3">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-navy font-medium">
                    {service.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne/20 mt-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center space-x-1.5 text-navy hover:text-champagne-dark text-[0.72rem] uppercase tracking-wider font-medium transition-colors"
                  >
                    <span>Inquire Creative Service</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. CATEGORY E: LUXE PREP PROGRAMME (SPOTLIGHT) */}
      <section id="luxe-prep" className="py-24 md:py-36 bg-navy text-ivory relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="vesper-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eyebrow text-champagne block mb-2">Category E · Signature Pre-Wedding Care</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light">
              Bridal & Groom Luxe Prep
            </h2>
            <div className="w-16 h-[1px] bg-champagne mx-auto my-6" />
            <p className="text-slate text-sm md:text-base leading-relaxed font-light">
              Wedding planning often focuses on the guests and the décor, while the couple is left exhausted. 
              Through Bridal Luxe Prep and Groom Luxe Prep, we prepare you as well. In the months before your celebration, 
              our three consultations help you arrive at every event feeling confident, comfortable, and completely yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Bridal Luxe Prep Card */}
            <div className="bg-navy-dark/90 border border-champagne/30 p-8 md:p-10 rounded-xs flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="relative h-64 w-full rounded-xs overflow-hidden border border-champagne/20">
                  <Image
                    src="/images/details/bridal-luxe-prep.jpg"
                    alt="Indian Bridal Luxe Prep pre-wedding skincare, styling and composure portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_20%]"
                  />
                  <span className="absolute top-3 left-3 bg-champagne text-navy text-[0.62rem] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-xs">
                    For The Bride
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                  Bridal Luxe Prep
                </h3>
                <p className="text-slate text-xs md:text-sm leading-relaxed font-light">
                  A guided pre-wedding programme designed to help the bride look and feel her best across every celebration. 
                  It combines three consultations:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">1. Skincare Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      A personalized routine to prepare the skin in the months before the wedding, focusing on hydration and radiant, calm skin.
                    </p>
                  </div>
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">2. Styling Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      Outfit and look guidance for every event, from the engagement to the final celebration, ensuring seamless cohesion.
                    </p>
                  </div>
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">3. Fitness & Poise Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      A realistic plan to build strength, posture, and poise ahead of the wedding without overwhelming schedules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-champagne/20">
                <Link
                  href="/contact?service=Bridal%20Luxe%20Prep"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-champagne text-navy uppercase tracking-[0.2em] text-xs font-medium hover:bg-white transition-colors rounded-xs shadow-md"
                >
                  <span>Book Bridal Luxe Prep Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Groom Luxe Prep Card */}
            <div className="bg-navy-dark/90 border border-champagne/30 p-8 md:p-10 rounded-xs flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="relative h-64 w-full rounded-xs overflow-hidden border border-champagne/20">
                  <Image
                    src="/images/bridal/groom-tailored-tuxedo.jpg"
                    alt="Groom Luxe Prep tailored navy tuxedo study"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-champagne text-navy text-[0.62rem] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-xs">
                    For The Groom
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                  Groom Luxe Prep
                </h3>
                <p className="text-slate text-xs md:text-sm leading-relaxed font-light">
                  The same three-part programme, tailored for the groom to ensure effortless composure, sharp tailoring, and calm confidence:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">1. Skincare & Grooming Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      Practical skincare and grooming guidance, beard sculpting or clean-shave timing, and scalp wellness.
                    </p>
                  </div>
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">2. Styling & Dressing Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      Bespoke tailoring, lapel styles, cufflinks, shoe curation, and traditional regional dress guidance for each event.
                    </p>
                  </div>
                  <div className="p-4 bg-navy-light/40 border-l-2 border-champagne rounded-r-xs">
                    <h4 className="font-serif text-base text-champagne font-medium">3. Fitness Consultation</h4>
                    <p className="text-xs text-slate mt-1 leading-relaxed">
                      A realistic conditioning and physical stamina plan that fits comfortably into a demanding executive schedule.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-champagne/20">
                <Link
                  href="/contact?service=Groom%20Luxe%20Prep"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-champagne text-navy uppercase tracking-[0.2em] text-xs font-medium hover:bg-white transition-colors rounded-xs shadow-md"
                >
                  <span>Book Groom Luxe Prep Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mandatory Integrity & Non-Medical Notice */}
          <div className="mt-12 text-center text-xs text-slate/80 max-w-2xl mx-auto italic border-t border-champagne/10 pt-6">
            Important Note: Luxe Prep consultations provide aesthetic guidance, styling curation, and lifestyle wellness recommendations. They do not constitute medical treatment, dermatological diagnoses, or guaranteed physiological results.
          </div>
        </div>
      </section>


      {/* 7. CLOSING CTA */}
      <ConsultationCTA
        variant="ivory"
        title="Every celebration is individually designed."
        subtitle="Because we do not use cookie-cutter packages, pricing and supplier scope are structured honestly around your vision, guest count, and preferred Emirate."
      />
    </div>
  );
}
