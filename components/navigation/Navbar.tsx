'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '@/lib/content';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Vesper' },
  { href: '/services', label: 'Services & Luxe Prep' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Determine navbar appearance based on page and scroll
  const navBackground = isScrolled
    ? 'bg-ivory/90 backdrop-blur-md border-b border-champagne/40 shadow-sm py-4 text-navy'
    : isHome
    ? 'bg-gradient-to-b from-navy/80 via-navy/40 to-transparent py-6 text-white'
    : 'bg-ivory/95 backdrop-blur-sm border-b border-champagne/30 py-5 text-navy';

  const linkActiveColor = isScrolled || !isHome
    ? 'text-navy font-medium after:w-full'
    : 'text-champagne font-medium after:w-full';

  const linkInactiveColor = isScrolled || !isHome
    ? 'text-charcoal hover:text-navy'
    : 'text-white/85 hover:text-champagne';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground}`}
      role="banner"
    >
      <div className="vesper-container flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none focus:ring-1 focus:ring-champagne rounded-xs py-0.5"
          aria-label="Vesper Wedding Company - Home"
        >
          <Image
            src="/images/brand/vesper-logo.png"
            alt="VESPER WEDDING COMPANY"
            width={180}
            height={142}
            priority
            className={`h-11 sm:h-12 md:h-13 w-auto object-contain transition-all duration-300 ${
              isScrolled || !isHome
                ? 'filter-none group-hover:opacity-85'
                : 'brightness-0 invert drop-shadow-sm group-hover:brightness-95'
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[0.82rem] tracking-[0.16em] uppercase font-sans"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-champagne-dark after:transition-all after:duration-300 ${
                  isActive
                    ? linkActiveColor
                    : `${linkInactiveColor} after:w-0 hover:after:w-full`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/contact"
            className={`px-5 py-2.5 text-[0.78rem] tracking-[0.18em] uppercase transition-all duration-300 border flex items-center space-x-2 rounded-xs ${
              isScrolled || !isHome
                ? 'border-navy text-navy hover:bg-navy hover:text-ivory'
                : 'border-champagne text-white hover:bg-champagne hover:text-navy'
            }`}
          >
            <span>Begin Your Story</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded focus:outline-none focus:ring-1 focus:ring-champagne transition-colors ${
            isScrolled || !isHome ? 'text-navy hover:text-charcoal' : 'text-white hover:text-champagne'
          }`}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-navy-dark/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-8 text-ivory border-t border-champagne/20 transition-all duration-300 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-6 pt-2">
            <div className="flex justify-center pb-4 border-b border-champagne/20">
              <Image
                src="/images/brand/vesper-logo.png"
                alt="VESPER WEDDING COMPANY"
                width={160}
                height={126}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-eyebrow text-champagne/70 border-b border-champagne/10 pb-2">
              Navigation
            </p>
            <div className="flex flex-col space-y-5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wide flex items-center justify-between py-1 transition-colors ${
                      isActive ? 'text-champagne italic pl-2' : 'text-ivory hover:text-champagne'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-10 pb-6 border-t border-champagne/20 space-y-5">
            <div>
              <p className="text-eyebrow text-champagne/70 mb-2">Direct Contact</p>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans tracking-wider text-ivory/90 hover:text-champagne flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>{BRAND.phoneDisplay}</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3.5 px-6 bg-champagne text-navy text-[0.8rem] tracking-[0.2em] uppercase font-sans font-medium hover:bg-white transition-colors rounded-xs shadow-md"
            >
              Begin Your Story
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
