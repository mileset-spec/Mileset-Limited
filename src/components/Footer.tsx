import React from 'react';
import { Logo } from './Logo';
import { DIVISIONS } from '../data/divisions';
import { LegalModalType } from './LegalModals';
import { Phone, Mail, MessageSquare, ArrowUp, Lock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onOpenAdmin: () => void;
  onSelectDivisionById: (id: string) => void;
  onOpenInquiry: (divisionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenAdmin,
  onSelectDivisionById,
  onOpenInquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173A5E] text-[#FFFDF7] pt-16 pb-12 border-t border-[#173A5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Corporate Summary (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo inverted size="md" />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              MILESET LIMITED is a unified corporate enterprise connecting trusted solutions across travel, craftsmanship, property, digital innovation, and business opportunities.
            </p>
            <div className="text-xs text-[#E6F2E9] font-medium pt-1">
              “Connecting Opportunities. Building Futures.”
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/2349079274212?text=Hello%20Mileset%20Limited"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#173A5E] bg-[#E6F2E9] hover:bg-white rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg transition-colors"
              >
                <span>Direct Inquiry</span>
              </button>
            </div>
          </div>

          {/* Business Divisions (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6F2E9]">
              Our Five Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button
                    onClick={() => onSelectDivisionById(div.id)}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {div.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Legal (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6F2E9]">
              Company & Policies
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Mileset
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-white transition-colors">
                  Opportunities & Guides
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('regulatory')}
                  className="hover:text-white transition-colors text-left"
                >
                  Regulatory Disclaimers
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact Info (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6F2E9]">
              Official Headquarters Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E6F2E9] shrink-0 mt-0.5" />
                <a
                  href="mailto:info@milesetlimited.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@milesetlimited.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E6F2E9] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 tabular-nums">
                  <a href="tel:+2349079274212" className="hover:text-white transition-colors">
                    +234 907 927 4212
                  </a>
                  <a href="tel:+2348147011433" className="hover:text-white transition-colors">
                    +234 814 701 1433
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                Operating Hours: Mon – Sat, 8:00 AM – 6:00 PM WAT
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E6F2E9]" />
                  <span>RC Registered Corporate Entity · Nigeria</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Admin Hub Link, and Back-to-Top */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MILESET LIMITED. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {/* Discreet Operations & Inquiries Hub */}
            <button
              onClick={onOpenAdmin}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-slate-400 text-[11px]"
              title="View customer inquiries and publishing instructions"
            >
              <Lock className="w-3 h-3 text-[#E6F2E9]" />
              <span>Operations Hub & Setup</span>
            </button>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center gap-1 text-[11px]"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
