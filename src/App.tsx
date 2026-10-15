import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DivisionsSection } from './components/DivisionsSection';
import { DivisionModal } from './components/DivisionModal';
import { AboutSection } from './components/AboutSection';
import { WhyMilesetSection } from './components/WhyMilesetSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ContactSection } from './components/ContactSection';
import { ProviderApplicationModal } from './components/ProviderApplicationModal';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { AdminHubModal } from './components/AdminHubModal';
import { Footer } from './components/Footer';

import { DIVISIONS } from './data/divisions';
import { INITIAL_OPPORTUNITIES } from './data/initialOpportunities';
import { Division, Opportunity, ContactInquiry, ProviderApplication, DivisionId } from './types';

export default function App() {
  // Modal & Selection States
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [contactInitialDivision, setContactInitialDivision] = useState<string>('general');
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [isAdminHubOpen, setIsAdminHubOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  // Persistent Opportunities state
  const [opportunities, setOpportunities] = useState<Opportunity[]>(() => {
    try {
      const saved = localStorage.getItem('mileset_opportunities');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load opportunities from localStorage', e);
    }
    return INITIAL_OPPORTUNITIES;
  });

  // Persistent Customer Inquiries state
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('mileset_inquiries');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load inquiries from localStorage', e);
    }
    return [
      {
        id: 'inq-sample-1',
        fullName: 'Folake Adeyemi',
        email: 'folake.a@example.com',
        phone: '+234 802 345 6789',
        divisionId: 'travel-immigration',
        inquiryType: 'Study Abroad / Visa Guidance',
        message: 'Looking for guidance regarding MSc Data Analytics programs in the UK and Ireland for September intake.',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        status: 'responded',
      },
      {
        id: 'inq-sample-2',
        fullName: 'Chinedu Okafor',
        email: 'chinedu.o@company.ng',
        phone: '+234 813 987 6543',
        divisionId: 'ai-digital',
        inquiryType: 'AI & Digital Project',
        message: 'Inquiring about automated WhatsApp customer support routing and invoice creation for our logistics company.',
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        status: 'new',
      }
    ];
  });

  // Persistent Provider Applications state
  const [providerApplications, setProviderApplications] = useState<ProviderApplication[]>(() => {
    try {
      const saved = localStorage.getItem('mileset_providers');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load provider applications from localStorage', e);
    }
    return [
      {
        id: 'prov-sample-1',
        fullName: 'Ganiyu Oladipo',
        businessName: 'Gani Precision Woodcraft',
        email: 'ganiyuwood@example.com',
        phone: '+234 803 111 2233',
        trade: 'carpentry',
        location: 'Ikeja & Magodo, Lagos',
        yearsOfExperience: '6-10 years',
        description: 'Specialized in modular kitchen cabinets, solid wood entrance doors, and wardrobe closets.',
        hasReferences: true,
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      }
    ];
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mileset_opportunities', JSON.stringify(opportunities));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [opportunities]);

  useEffect(() => {
    try {
      localStorage.setItem('mileset_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('mileset_providers', JSON.stringify(providerApplications));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [providerApplications]);

  // Handlers
  const handleScrollToContact = (divisionId?: string) => {
    if (divisionId) {
      setContactInitialDivision(divisionId);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDivisionById = (id: string) => {
    const div = DIVISIONS.find((d) => d.id === id);
    if (div) {
      setSelectedDivision(div);
    }
  };

  const handleAddOpportunity = (newOpp: Opportunity) => {
    setOpportunities((prev) => [newOpp, ...prev]);
  };

  const handleSubmitInquiry = (newInq: ContactInquiry) => {
    setInquiries((prev) => [newInq, ...prev]);
  };

  const handleSubmitProviderApp = (newApp: ProviderApplication) => {
    setProviderApplications((prev) => [newApp, ...prev]);
  };

  const handleUpdateInquiryStatus = (id: string, status: ContactInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#173A5E]">
      {/* 1. Header (Strict 3-zone contract) */}
      <Header onOpenInquiry={handleScrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={() => {
            const el = document.getElementById('divisions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onContactClick={() => handleScrollToContact('general')}
        />

        {/* 3. Five Business Divisions */}
        <DivisionsSection
          onSelectDivision={(div) => setSelectedDivision(div)}
          onInquire={(divId) => handleScrollToContact(divId)}
          onApplyProvider={() => setIsProviderModalOpen(true)}
        />

        {/* 4. About MILESET LIMITED */}
        <AboutSection />

        {/* 5. Why Choose Mileset */}
        <WhyMilesetSection />

        {/* 6. Opportunities & Resources */}
        <OpportunitiesSection
          opportunities={opportunities}
          onAddOpportunity={handleAddOpportunity}
          onInquireAboutOpportunity={(opp) => handleScrollToContact(opp.divisionId)}
        />

        {/* 7. Contact Us & Inquiries Form */}
        <ContactSection
          initialDivision={contactInitialDivision}
          onSubmitInquiry={handleSubmitInquiry}
          onOpenProviderModal={() => setIsProviderModalOpen(true)}
        />
      </main>

      {/* 8. Corporate Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenAdmin={() => setIsAdminHubOpen(true)}
        onSelectDivisionById={handleSelectDivisionById}
        onOpenInquiry={handleScrollToContact}
      />

      {/* Division Detail Deep-Dive Modal */}
      <DivisionModal
        division={selectedDivision}
        onClose={() => setSelectedDivision(null)}
        onInquire={(divId) => handleScrollToContact(divId)}
        onApplyProvider={() => setIsProviderModalOpen(true)}
      />

      {/* Skilled Service Provider Application Modal */}
      <ProviderApplicationModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
        onSubmit={handleSubmitProviderApp}
      />

      {/* Legal & Compliance Modals (Privacy, Terms, Regulatory Disclaimers) */}
      <LegalModals
        activeModal={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Operations Hub (Inquiries Inbox, Provider Network Intake & Deployment Setup) */}
      <AdminHubModal
        isOpen={isAdminHubOpen}
        onClose={() => setIsAdminHubOpen(false)}
        inquiries={inquiries}
        providerApplications={providerApplications}
        opportunities={opportunities}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
      />
    </div>
  );
}
