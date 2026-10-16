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

          <div className="lg:col-span-5 bg-navy-dark/70 border border-champagne/25 p-7 md:p-8 rounded-xs space-y-5 shadow-lg">
            <div>
              <p className="text-eyebrow text-champagne mb-1.5 tracking-[0.2em]">Direct Studio Inquiries</p>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-light">Speak with Our Studio</h3>
              <p className="text-slate text-xs mt-1 font-light tracking-wide">
                Lead Coordinator & Director: <span className="text-champagne font-normal">{BRAND.contactPerson}</span>
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-champagne/10 hover:bg-champagne hover:text-navy border border-champagne/30 text-ivory transition-all duration-300 rounded-xs group"
              >
                <div>
                  <span className="text-[0.68rem] tracking-[0.16em] uppercase block text-champagne/80 group-hover:text-navy/80 font-sans">
                    WhatsApp Concierge
                  </span>
                  <span className="font-serif text-lg md:text-xl font-normal tracking-wide block mt-0.5 group-hover:text-navy">
                    {BRAND.phoneDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-champagne group-hover:text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`mailto:${BRAND.emailClientSupplied}`}
                className="flex items-center justify-between p-4 bg-navy-light/35 hover:bg-champagne hover:text-navy border border-champagne/15 text-ivory/95 transition-all duration-300 rounded-xs group"
              >
                <div>
                  <span className="text-[0.68rem] tracking-[0.16em] uppercase block text-slate group-hover:text-navy/80 font-sans">
                    Studio Correspondence
                  </span>
                  <span className="font-serif text-base md:text-lg font-normal tracking-wide block mt-0.5 group-hover:text-navy">
                    {BRAND.emailClientSupplied}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate group-hover:text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="flex items-center space-x-2.5 text-xs text-slate/90 pt-2 border-t border-white/5 font-light">
              <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
              <span>Service coverage: Across all seven Emirates of the UAE</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16 border-b border-champagne/15 text-sm">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 space-y-5 pr-4">
            <Link href="/" className="inline-block group" aria-label="Vesper Wedding Company - Home">
              <Image
                src="/images/brand/vesper-logo.png"
                alt="VESPER WEDDING COMPANY"
                width={200}
                height={157}
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate text-xs font-light leading-relaxed max-w-sm">
              A bespoke wedding planning and coordination studio based in the UAE. 
              Personal, attentive, and composed wedding production for couples who cherish beauty and peace of mind.
            </p>

            {/* Socials on footer */}
            <div className="pt-2 space-y-2">
              <p className="text-eyebrow text-champagne text-[0.68rem] tracking-[0.2em]">Connect & Socials</p>
              <div className="flex items-center space-x-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center text-slate hover:text-champagne hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
                  aria-label="Follow Vesper Wedding Company on Instagram"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center text-slate hover:text-champagne hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
                  aria-label="View Vesper Wedding Company Inspiration on Pinterest"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.33 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center text-slate hover:text-champagne hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
                  aria-label="Connect with Vesper Wedding Company on LinkedIn"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-1 text-xs text-slate font-light">
              <p className="text-champagne font-medium uppercase tracking-wider text-[0.68rem] mb-1">
                Seven Emirates Coverage
              </p>
              <p className="text-[0.72rem] leading-relaxed text-slate/85">
                Dubai · Abu Dhabi · Sharjah · Ras Al Khaimah · Ajman · Fujairah · Umm Al-Quwain
              </p>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <p className="text-eyebrow text-champagne">Exploration</p>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-light">
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
                <Link href="/contact" className="text-slate hover:text-champagne transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Planning & Styling Services */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <p className="text-eyebrow text-champagne">Core Offerings</p>
            <ul className="space-y-2 text-xs text-slate font-light leading-relaxed">
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
            <p className="text-slate text-xs font-light leading-relaxed">
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate/90 space-y-4 md:space-y-0 font-light">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="text-center md:text-right text-[0.78rem] text-slate/85 font-light">
            United Arab Emirates · Lead Planner: <span className="text-champagne">{BRAND.contactPerson}</span> · WhatsApp: <span className="text-champagne">{BRAND.phoneDisplay}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
