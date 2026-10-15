'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/content';
import { PortfolioItem } from '@/lib/types';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const selectedItem: PortfolioItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItemIndex]);

  return (
    <div className="relative">
      {/* Category Filter Tabs */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-xs transition-all duration-300 font-sans ${
                isActive
                  ? 'bg-navy text-champagne border border-champagne shadow-sm font-medium'
                  : 'bg-white/80 text-charcoal border border-champagne/30 hover:border-navy hover:text-navy'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Asymmetrical Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {filteredItems.map((item, index) => {
          // Asymmetric layout logic for editorial dynamism
          let colSpan = 'md:col-span-6';
          let height = 'h-[420px] md:h-[480px]';

          if (index % 5 === 0) {
            colSpan = 'md:col-span-7';
            height = 'h-[460px] md:h-[540px]';
          } else if (index % 5 === 1) {
            colSpan = 'md:col-span-5';
            height = 'h-[400px] md:h-[540px]';
          } else if (index % 5 === 2) {
            colSpan = 'md:col-span-4';
            height = 'h-[380px] md:h-[440px]';
          } else if (index % 5 === 3) {
            colSpan = 'md:col-span-4';
            height = 'h-[380px] md:h-[440px]';
          } else if (index % 5 === 4) {
            colSpan = 'md:col-span-4';
            height = 'h-[380px] md:h-[440px]';
          }

          return (
            <div
              key={item.id}
              className={`${colSpan} group cursor-pointer relative rounded-xs overflow-hidden bg-navy shadow-md transition-all duration-500 hover:shadow-xl`}
              onClick={() => setSelectedItemIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItemIndex(index);
                }
              }}
              aria-label={`Open photo view: ${item.title}`}
            >
              <div className={`relative w-full ${height} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Concept Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-navy/80 text-champagne text-[0.62rem] uppercase tracking-widest px-2.5 py-1 rounded-xs backdrop-blur-sm border border-champagne/30">
                    Design Concept
                  </span>
                </div>

                {/* Bottom Card Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-1.5 transform transition-transform duration-300">
                  <span className="text-[0.65rem] tracking-[0.24em] uppercase text-champagne block font-sans">
                    {item.conceptSubtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white group-hover:text-champagne transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory/80 line-clamp-2 font-light">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center space-x-1 text-champagne text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Expand Editorial View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible Full-Screen Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-navy-dark/98 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 text-ivory animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-champagne/20 pb-4 max-w-7xl w-full mx-auto">
            <div>
              <span className="text-eyebrow text-champagne">
                {selectedItem.categoryLabel} · Image {selectedItemIndex! + 1} of {filteredItems.length}
              </span>
              <p className="text-xs text-slate">{selectedItem.conceptSubtitle}</p>
            </div>

            <button
              onClick={handleClose}
              className="p-2 text-ivory hover:text-champagne hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-champagne"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image & Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 z-20 p-3 bg-navy/80 hover:bg-champagne hover:text-navy text-white rounded-full backdrop-blur-sm border border-champagne/30 transition-colors focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-[55vh] md:h-[68vh] rounded-xs overflow-hidden shadow-2xl">
              <Image
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 z-20 p-3 bg-navy/80 hover:bg-champagne hover:text-navy text-white rounded-full backdrop-blur-sm border border-champagne/30 transition-colors focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Action */}
          <div className="max-w-4xl w-full mx-auto border-t border-champagne/20 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-serif text-xl md:text-2xl text-white font-light">
                {selectedItem.title}
              </h2>
              <p className="text-xs md:text-sm text-slate leading-relaxed font-light">
                {selectedItem.description}
              </p>
              <p className="text-[0.68rem] text-champagne/80 uppercase tracking-widest pt-1">
                Atmosphere: {selectedItem.atmosphere}
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-3">
              <Link
                href={`/contact?vision=${encodeURIComponent(selectedItem.title)}`}
                onClick={handleClose}
                className="px-6 py-2.5 bg-champagne text-navy uppercase tracking-widest text-xs font-medium hover:bg-white transition-colors rounded-xs flex items-center space-x-1.5"
              >
                <span>Discuss Similar Celebration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
