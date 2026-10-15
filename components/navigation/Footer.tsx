import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/content';
import { ArrowUpRight, MessageSquare, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy text-ivory relative overflow-hidden border-t border-champagne/20" role="contentinfo">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-champagne/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="vesper-container pt-20 pb-12 relative z-10">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-champagne/15 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-champagne text-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>{BRAND.eyebrow}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl leading-[1.15] text-white font-light max-w-2xl">
              &ldquo;{BRAND.tagline}&rdquo;
            </h2>
            <p className="text-slate text-sm md:text-base font-light leading-relaxed max-w-xl">
              Vesper refers to the evening star — that quiet moment at dusk when daylight softens, 
              everything comes together, and a new chapter begins. We bring together trusted venues, 
              designers, and artisans across the United Arab Emirates.
            </p>
          </div>

          <div className="lg:col-span-5 bg-navy-dark/60 border border-champagne/20 p-8 rounded-xs space-y-6">
            <div>
              <p className="text-eyebrow text-champagne mb-1">Direct Inquiries</p>
              <h3 className="font-serif text-2xl text-white">Speak with Our Studio</h3>
              <p className="text-slate text-xs mt-1">Lead Contact: {BRAND.contactPerson}</p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-champagne/10 hover:bg-champagne hover:text-navy border border-champagne/30 text-ivory transition-all duration-300 rounded-xs group"
              >
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-champagne group-hover:text-navy" />
                  <span className="text-xs uppercase tracking-widest font-sans font-medium">
                    WhatsApp: {BRAND.phoneDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-champagne group-hover:text-navy" />
              </a>

              <a
                href={`mailto:${BRAND.emailClientSupplied}`}
                className="flex items-center justify-between p-3.5 bg-navy-light/40 hover:bg-champagne hover:text-navy border border-white/10 text-ivory/90 transition-all duration-300 rounded-xs group"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-slate group-hover:text-navy" />
                  <span className="text-xs uppercase tracking-widest font-sans font-medium">
                    Email: {BRAND.emailClientSupplied}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate group-hover:text-navy" />
              </a>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate pt-2 border-t border-white/5">
              <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>Service coverage: All over the United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16 border-b border-champagne/15 text-sm">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 space-y-4 pr-4">
            <Link href="/" className="inline-block group" aria-label="Vesper Wedding Company - Home">
              <Image
                src="/images/brand/vesper-logo.png"
                alt="VESPER WEDDING COMPANY"
                width={200}
                height={157}
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate text-xs leading-relaxed max-w-sm">
              A bespoke wedding planning and coordination studio based in the UAE. 
              Personal, attentive, and composed wedding production for couples who cherish beauty and peace of mind.
            </p>
            <div className="pt-2 text-xs text-slate">
              <p className="text-champagne font-medium uppercase tracking-wider text-[0.68rem] mb-1">
                Seven Emirates Coverage
              </p>
              <p className="text-[0.72rem] leading-relaxed text-slate">
                Dubai · Abu Dhabi · Sharjah · Ras Al Khaimah · Ajman · Fujairah · Umm Al-Quwain
              </p>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <p className="text-eyebrow text-champagne">Exploration</p>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link href="/" className="text-slate hover:text-champagne transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate hover:text-champagne transition-colors">About Vesper</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate hover:text-champagne transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate hover:text-champagne transition-colors">Portfolio & Vision</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate hover:text-champagne transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Planning & Styling Services */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <p className="text-eyebrow text-champagne">Core Offerings</p>
            <ul className="space-y-2 text-xs text-slate leading-relaxed">
              <li>Full Wedding Planning</li>
              <li>Partial Planning & Styling</li>
              <li>Wedding-Day Coordination</li>
              <li>Wedding Stage & Kosha Design</li>
              <li>Floral Decoration & Installations</li>
              <li>Destination UAE Celebrations</li>
              <li>Multicultural Wedding Functions</li>
            </ul>
          </div>

          {/* Luxe Prep Programme */}
          <div className="col-span-2 lg:col-span-3 space-y-4 bg-navy-dark/40 p-5 rounded-xs border border-champagne/10">
            <p className="text-eyebrow text-champagne">The Vesper Difference</p>
            <h4 className="font-serif text-lg text-white font-normal">Luxe Prep Programme</h4>
            <p className="text-slate text-xs leading-relaxed">
              Comprehensive skincare, personal styling, and realistic conditioning consultations for both bride and groom in the months leading up to the celebration.
            </p>
            <Link
              href="/services#luxe-prep"
              className="inline-flex items-center space-x-1.5 text-champagne hover:text-white text-xs uppercase tracking-wider transition-colors pt-1"
            >
              <span>Explore Programme</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Credits & Integrity */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate space-y-4 md:space-y-0">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="text-center md:text-right text-[0.72rem] text-slate/80">
            United Arab Emirates · Contact: {BRAND.contactPerson} · WhatsApp: {BRAND.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
