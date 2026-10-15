export interface ServiceItem {
  id: string;
  name: string;
  category: 'planning' | 'design' | 'celebrations' | 'creative' | 'luxe-prep';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  imageAlt: string;
  badge?: string;
  consultationFocus?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'ceremonies' | 'tablescapes' | 'stage-floral' | 'bridal' | 'destination' | 'intimate' | 'groom' | 'cultural';
  categoryLabel: string;
  conceptSubtitle: string;
  image: string;
  imageAlt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  atmosphere: string;
  locationContext: string;
  palette: string[];
  description: string;
  isConceptEditorial: true;
}

export interface TestimonialItem {
  quote: string;
  couple: string;
  location: string;
  celebrationType: string;
  year?: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  location: string;
  guestCount: string;
  budgetRange: string;
  servicesOfInterest: string[];
  message: string;
  privacyConsent: boolean;
  honeypot?: string;
}
