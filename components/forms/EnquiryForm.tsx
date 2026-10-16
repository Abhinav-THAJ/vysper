'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Loader2, ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import { BRAND } from '@/lib/content';

const EVENT_TYPES = [
  'Wedding Ceremony & Reception',
  'Intimate Micro-Wedding',
  'UAE Destination Wedding',
  'Engagement Celebration',
  'Haldi / Mehendi / Sangeet Cultural Functions',
  'Bridal Luxe Prep Programme',
  'Groom Luxe Prep Programme',
  'Private Anniversary or Dinner',
  'Corporate Luxury Event',
];

const EVENT_COUNTS = [
  '1 Event (Single Celebration / Reception)',
  '2 Events (e.g. Ceremony & Reception)',
  '3 Events (e.g. Pre-Wedding, Sangeet & Reception)',
  '4+ Events (Multi-Day Cultural Festivities)',
  'Intimate Milestone Gathering',
];

const EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ras Al Khaimah',
  'Ajman',
  'Fujairah',
  'Umm Al-Quwain',
  'Multiple Emirates / Venue Scouting',
];

const GUEST_COUNTS = [
  'Intimate (Under 50 guests)',
  '50 – 150 guests',
  '150 – 300 guests',
  '300 – 600 guests',
  'Grand Scale (600+ guests)',
  'To be determined',
];

const BUDGET_RANGES = [
  'Less than AED 150,000',
  'AED 150,000 – AED 300,000',
  'AED 300,000 – AED 600,000',
  'AED 600,000 – AED 1,000,000',
  'AED 1,000,000+',
  'Prefer to discuss during consultation',
];

const AVAILABLE_SERVICES = [
  'Full Wedding Planning',
  'Partial Planning & Styling',
  'Wedding-Day Coordination',
  'Wedding Stage & Kosha Design',
  'Floral Decoration & Art Direction',
  'Bridal Luxe Prep',
  'Groom Luxe Prep',
  'Destination Logistics & Concierge',
  'Fine Art Photography & Video Curation',
];

interface LuxurySelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}

function LuxurySelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option...',
  required = false,
  error,
}: LuxurySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-4 py-3 text-sm bg-ivory/50 hover:bg-ivory border rounded-xs text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
          error
            ? 'border-red-400'
            : isOpen
            ? 'border-navy ring-1 ring-navy/20'
            : 'border-champagne/40 hover:border-champagne-dark'
        }`}
      >
        <span className={`truncate mr-2 ${value ? 'text-charcoal font-normal' : 'text-slate font-light'}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-champagne-dark shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-navy' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute z-40 left-0 right-0 mt-1.5 bg-white border border-champagne/50 rounded-xs shadow-xl max-h-60 overflow-y-auto py-1 animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = value === option;
            return (
              <button
                type="button"
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-champagne/20 text-navy font-medium'
                    : 'text-charcoal hover:bg-ivory hover:text-navy'
                }`}
              >
                <span className="truncate pr-2">{option}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
      {error && <p className="mt-1 text-[0.72rem] text-red-600">{error}</p>}
    </div>
  );
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');
  const preselectedVision = searchParams.get('vision');

  const [formData, setFormData] = useState(() => ({
    fullName: '',
    email: '',
    phone: '',
    eventType: preselectedService
      ? (preselectedService.includes('Luxe Prep') ? preselectedService : 'Wedding Ceremony & Reception')
      : '',
    numberOfEvents: '1 Event (Single Celebration / Reception)',
    preferredDate: '',
    location: 'Dubai',
    guestCount: '150 – 300 guests',
    budgetRange: 'Less than AED 150,000',
    servicesOfInterest: preselectedService ? [preselectedService] : ([] as string[]),
    message: preselectedVision ? `Inquiring regarding aesthetic vision: ${preselectedVision}` : '',
    privacyConsent: false,
    honeypot: '', // Spam bot protection
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    enquiryId?: string;
    mode?: string;
  } | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid WhatsApp or telephone number.';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select your celebration type.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please acknowledge that you agree to be contacted regarding this celebration.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (serviceName: string) => {
    setFormData(prev => {
      const exists = prev.servicesOfInterest.includes(serviceName);
      if (exists) {
        return {
          ...prev,
          servicesOfInterest: prev.servicesOfInterest.filter(s => s !== serviceName)
        };
      } else {
        return {
          ...prev,
          servicesOfInterest: [...prev.servicesOfInterest, serviceName]
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          message: data.message,
          enquiryId: data.enquiryId,
          mode: data.mode,
        });
        // Reset form fields
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: '',
          numberOfEvents: '1 Event (Single Celebration / Reception)',
          preferredDate: '',
          location: 'Dubai',
          guestCount: '150 – 300 guests',
          budgetRange: 'Less than AED 150,000',
          servicesOfInterest: [],
          message: '',
          privacyConsent: false,
          honeypot: '',
        });
        setErrors({});
      } else {
        setSubmissionResult({
          success: false,
          message: data.message || 'There was a problem submitting your inquiry. Please contact us via WhatsApp.',
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmissionResult({
        success: false,
        message: 'A network error occurred. Please contact our team directly at +971 56 285 4779.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-champagne/40 rounded-xs shadow-xl p-8 md:p-12">
      {/* Submission Status Message */}
      {submissionResult && (
        <div
          className={`mb-8 p-6 rounded-xs border ${
            submissionResult.success
              ? 'bg-ivory border-champagne-dark text-navy'
              : 'bg-red-50 border-red-200 text-red-900'
          }`}
          role="alert"
        >
          <div className="flex items-start space-x-3">
            {submissionResult.success ? (
              <CheckCircle2 className="w-6 h-6 text-champagne-dark shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            )}
            <div>
              <h3 className="font-serif text-xl font-medium mb-1">
                {submissionResult.success ? 'Inquiry Received with Care' : 'Submission Note'}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed mb-3">
                {submissionResult.message}
              </p>
              {submissionResult.enquiryId && (
                <p className="text-[0.72rem] text-slate font-mono uppercase tracking-wider">
                  Reference ID: {submissionResult.enquiryId}
                </p>
              )}
              {submissionResult.success && (
                <div className="mt-4 pt-4 border-t border-champagne/30 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs text-charcoal">
                    Prefer an immediate conversational response?
                  </span>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-navy font-medium underline hover:text-champagne-dark"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Spam Prevention Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave this blank</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Section 1: Contact Essentials */}
        <div>
          <h3 className="font-serif text-xl text-navy font-light pb-2 border-b border-champagne/20 mb-6">
            1. Your Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Layla & Zaid"
                className={`w-full px-4 py-3 text-sm bg-ivory/50 border rounded-xs focus:outline-none focus:ring-1 focus:ring-navy transition-colors ${
                  errors.fullName ? 'border-red-400' : 'border-champagne/40'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-[0.72rem] text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@domain.com"
                className={`w-full px-4 py-3 text-sm bg-ivory/50 border rounded-xs focus:outline-none focus:ring-1 focus:ring-navy transition-colors ${
                  errors.email ? 'border-red-400' : 'border-champagne/40'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[0.72rem] text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Telephone / WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                WhatsApp / Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 123 4567"
                className={`w-full px-4 py-3 text-sm bg-ivory/50 border rounded-xs focus:outline-none focus:ring-1 focus:ring-navy transition-colors ${
                  errors.phone ? 'border-red-400' : 'border-champagne/40'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-[0.72rem] text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Celebration Details */}
        <div>
          <h3 className="font-serif text-xl text-navy font-light pb-2 border-b border-champagne/20 mb-6">
            2. The Celebration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event Type */}
            <LuxurySelect
              id="eventType"
              label="Event Type"
              required
              value={formData.eventType}
              onChange={(val) => setFormData({ ...formData, eventType: val })}
              options={EVENT_TYPES}
              placeholder="Select celebration type..."
              error={errors.eventType}
            />

            {/* Preferred Date */}
            <div>
              <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Target Celebration Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-ivory/50 border border-champagne/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-navy transition-colors"
              />
            </div>

            {/* Emirate / Location */}
            <LuxurySelect
              id="location"
              label="Emirate / Location"
              value={formData.location}
              onChange={(val) => setFormData({ ...formData, location: val })}
              options={EMIRATES}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Number of Planned Events (Item 8) */}
            <LuxurySelect
              id="numberOfEvents"
              label="No. of Events Planning"
              value={formData.numberOfEvents}
              onChange={(val) => setFormData({ ...formData, numberOfEvents: val })}
              options={EVENT_COUNTS}
            />

            {/* Estimated Guest Count */}
            <LuxurySelect
              id="guestCount"
              label="Estimated Guest Count"
              value={formData.guestCount}
              onChange={(val) => setFormData({ ...formData, guestCount: val })}
              options={GUEST_COUNTS}
            />

            {/* Optional Budget Range (Item 7: with Less than 150,000) */}
            <LuxurySelect
              id="budgetRange"
              label="Budget Framework"
              value={formData.budgetRange}
              onChange={(val) => setFormData({ ...formData, budgetRange: val })}
              options={BUDGET_RANGES}
            />
          </div>
        </div>

        {/* Section 3: Services of Interest Multi-select */}
        <div>
          <h3 className="font-serif text-xl text-navy font-light pb-2 border-b border-champagne/20 mb-4">
            3. Services of Interest
          </h3>
          <p className="text-xs text-charcoal-muted mb-4">
            Select all elements you would like us to coordinate or design:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {AVAILABLE_SERVICES.map((serviceName) => {
              const isChecked = formData.servicesOfInterest.includes(serviceName);
              return (
                <button
                  type="button"
                  key={serviceName}
                  onClick={() => handleServiceToggle(serviceName)}
                  className={`text-left p-3 text-xs rounded-xs border transition-all flex items-center justify-between ${
                    isChecked
                      ? 'bg-navy text-champagne border-navy shadow-xs font-medium'
                      : 'bg-ivory/60 text-charcoal border-champagne/30 hover:border-navy/60'
                  }`}
                >
                  <span>{serviceName}</span>
                  <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[0.6rem] ${
                    isChecked ? 'border-champagne bg-champagne text-navy font-bold' : 'border-slate/40'
                  }`}>
                    {isChecked ? '✓' : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 4: Personal Message */}
        <div>
          <h3 className="font-serif text-xl text-navy font-light pb-2 border-b border-champagne/20 mb-4">
            4. Your Vision & Notes
          </h3>
          <label htmlFor="message" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
            Share Any Thoughts, Preferred Venues, or Specific Traditions
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about the atmosphere you envision, whether you already have a venue held, or any cultural customs we should weave into your celebration..."
            className="w-full px-4 py-3 text-sm bg-ivory/50 border border-champagne/40 rounded-xs focus:outline-none focus:ring-1 focus:ring-navy transition-colors resize-y"
          />
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded-xs border-champagne-dark text-navy focus:ring-navy"
            />
            <span className="text-xs text-charcoal-muted leading-relaxed">
              I consent to Vesper Wedding Company contacting me regarding this celebration inquiry. 
              We respect your absolute privacy and never share information with third parties.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1 text-[0.72rem] text-red-600 pl-7">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 bg-navy hover:bg-champagne hover:text-navy text-ivory uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300 rounded-xs shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-champagne" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Celebration Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-champagne group-hover:text-navy transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          <p className="text-center text-[0.72rem] text-slate mt-4">
            Directly received by lead coordinator {BRAND.contactPerson} · All over the UAE
          </p>
        </div>
      </form>
    </div>
  );
}
