'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '@/lib/content';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none">
      {/* Quick popup tooltip/card */}
      {isOpen && (
        <div
          className="mb-3 w-72 bg-navy text-ivory p-4 rounded-sm shadow-2xl border border-champagne/30 text-xs transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
          role="dialog"
          aria-label="Direct WhatsApp Inquiries"
        >
          <div className="flex items-center justify-between border-b border-champagne/20 pb-2 mb-2">
            <span className="font-serif text-base text-champagne font-medium">
              Vesper Concierge
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate hover:text-white p-0.5"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate leading-relaxed mb-3 text-[0.75rem]">
            Planning a celebration in the UAE? Speak directly with {BRAND.contactPerson} on WhatsApp.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 px-3 bg-champagne text-navy uppercase tracking-widest text-[0.68rem] font-medium hover:bg-white transition-colors rounded-xs shadow-sm"
          >
            Open WhatsApp Chat
          </a>
        </div>
      )}

      {/* Main floating action button */}
      <div className="flex items-center space-x-2">
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 md:p-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2"
          aria-label="Chat with Vesper Wedding Company on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out text-xs font-medium tracking-wide pl-0 group-hover:pl-2">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
