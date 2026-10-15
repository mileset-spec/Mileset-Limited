import React from 'react';
import { X, Shield, FileText, Scale } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'regulatory' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-neutral-200 p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-[#173A5E] transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-xl font-bold text-[#173A5E]">
                  Privacy Policy
                </h3>
                <p className="text-xs text-[#64748B]">
                  MILESET LIMITED · Effective Date: October 2026
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#173A5E] space-y-4 leading-relaxed">
              <p>
                At <strong>MILESET LIMITED</strong>, we are committed to safeguarding the privacy and personal data of our website visitors, clients, partners, and independent service providers in compliance with the Nigeria Data Protection Act (NDPA) and recognized international privacy benchmarks.
              </p>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">1. Information We Collect</h4>
                <p className="text-[#64748B]">
                  We collect information you explicitly submit through our contact forms, service inquiry workflows, and provider onboarding forms. This includes your full name, telephone number, email address, geographic area, and project specifications.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">2. Purpose of Processing</h4>
                <p className="text-[#64748B]">
                  Your data is utilized strictly to provide responsive customer support, assess study-abroad or service requirements, match homeowners with qualified tradespeople, and communicate regarding official inquiries. We do not sell or monetize personal customer records to third parties.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">3. Data Security & Storage</h4>
                <p className="text-[#64748B]">
                  We implement reasonable administrative, technical, and physical measures to guard your data against unauthorized access, loss, or alteration. Inquiries submitted via WhatsApp are subject to WhatsApp's end-to-end encryption.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">4. Data Subject Rights & Contact</h4>
                <p className="text-[#64748B]">
                  You have the right to request access, correction, or deletion of your personal records held by Mileset Limited at any time. Direct all data inquiries to: <span className="font-semibold text-[#315D4B]">info@milesetlimited.com</span>.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7F2FC] text-[#173A5E] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-xl font-bold text-[#173A5E]">
                  Terms of Service
                </h3>
                <p className="text-xs text-[#64748B]">
                  MILESET LIMITED · Corporate Terms & Conditions
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#173A5E] space-y-4 leading-relaxed">
              <p>
                Welcome to <strong>MILESET LIMITED</strong>. By accessing this website or utilizing our services across our five business divisions, you acknowledge and agree to these Terms of Service.
              </p>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">1. Scope of Services</h4>
                <p className="text-[#64748B]">
                  Mileset Limited provides administrative consulting, informational guidance, project coordination, and digital solutions across Travel & Immigration, Home Services, Property, AI & Digital, and Business & Investments.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">2. Client Obligations</h4>
                <p className="text-[#64748B]">
                  Clients agree to provide truthful, accurate, and non-fraudulent documentation and disclosures. Mileset Limited reserves the right to terminate assistance immediately without refund if fraudulent credentials, forged transcripts, or illegal activities are presented.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#173A5E] mb-1">3. Intellectual Property</h4>
                <p className="text-[#64748B]">
                  All logos, brand marks, written text, graphics, and custom digital software produced by Mileset Limited are proprietary to MILESET LIMITED and protected by applicable copyright and commercial trademark laws.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'regulatory' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5EBD7] text-[#315D4B] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-xl font-bold text-[#173A5E]">
                  Regulatory & Transparency Notice
                </h3>
                <p className="text-xs text-[#64748B]">
                  Multi-Division Governance & Consumer Protection
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#173A5E] space-y-4 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FFFDF7] border border-neutral-200">
                <h4 className="font-bold text-[#315D4B] mb-1">Division 1: Travel & Immigration Notice</h4>
                <p className="text-[#64748B]">
                  Mileset Limited is a private advisory enterprise. We are neither an embassy, diplomatic mission, nor a government border agency. Visa approvals, study permits, and travel clearances are evaluated solely by the sovereign authorities of the respective destination countries. Mileset Limited never promises or guarantees visa issuance or relocation outcomes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF7] border border-neutral-200">
                <h4 className="font-bold text-[#315D4B] mb-1">Division 2: Home Services & Network Notice</h4>
                <p className="text-[#64748B]">
                  Tradespeople in the Mileset Home Services network are independent practitioners who undergo initial identity and trade skill intake reviews. Formal quotations and project scopes are transparently defined before work begins.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF7] border border-neutral-200">
                <h4 className="font-bold text-[#315D4B] mb-1">Division 3: Property & Real Estate Notice</h4>
                <p className="text-[#64748B]">
                  Property guidance and short-let representations do not replace independent title verification or survey searches conducted through registered legal solicitors. Mileset Limited does not guarantee future rental yield projections or asset appreciation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF7] border border-neutral-200">
                <h4 className="font-bold text-[#315D4B] mb-1">Division 5: Business & Investments Notice</h4>
                <p className="text-[#64748B]">
                  General market research, business development guidance, and domain asset analysis do not constitute regulated financial, tax, or investment advice. Business ventures involve financial risk, and past performance is not indicative of future results.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
