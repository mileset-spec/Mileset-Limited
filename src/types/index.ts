export type DivisionId = 
  | 'travel-immigration'
  | 'home-services'
  | 'property'
  | 'ai-digital'
  | 'business-investments';

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
}

export interface Division {
  id: DivisionId;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  image: string;
  badge: string;
  services: ServiceItem[];
  benefits: string[];
  disclaimer: string;
  ctaText: string;
  secondaryCtaText?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  divisionId: DivisionId;
  category: string;
  summary: string;
  details: string;
  sourceName: string;
  sourceUrl?: string;
  publicationDate: string;
  verifiedDate: string;
  isOfficialSource: boolean;
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  divisionId: DivisionId | 'general';
  inquiryType: string;
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'responded';
}

export interface ProviderApplication {
  id: string;
  fullName: string;
  businessName?: string;
  email: string;
  phone: string;
  trade: 'carpentry' | 'plumbing' | 'welding' | 'electrical' | 'painting' | 'general_maintenance' | 'other';
  location: string;
  yearsOfExperience: string;
  description: string;
  hasReferences: boolean;
  createdAt: string;
}
