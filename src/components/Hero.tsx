import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, PhoneCall, Building2, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7] to-[#E6F2E9]/30 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/70">
      {/* Subtle architectural ambient background elements */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#E7F2FC]/50 rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#F5EBD7]/40 rounded-full blur-2xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Split: Editorial & Media Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
              <span className="w-2 h-2 rounded-full bg-[#315D4B]" aria-hidden="true" />
              <span>Official Corporate Gateway</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#64748B] font-medium">Lagos, Nigeria & Global Reach</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#173A5E] tracking-tight leading-[1.12] text-balance">
              Welcome to <span className="text-[#315D4B]">MILESET LIMITED</span>
            </h1>

            {/* Tagline Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-[#315D4B] tracking-tight">
              Connecting Opportunities. Building Futures.
            </p>

            {/* Supporting Value Message */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
              We bring together trusted services across <strong className="text-[#173A5E] font-medium">travel and immigration</strong>, <strong className="text-[#173A5E] font-medium">home services</strong>, <strong className="text-[#173A5E] font-medium">property</strong>, <strong className="text-[#173A5E] font-medium">AI and digital solutions</strong>, and <strong className="text-[#173A5E] font-medium">business and investments</strong> to help individuals and businesses move forward.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] active:bg-[#1d3a2e] rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315D4B] focus-visible:ring-offset-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#173A5E] bg-white hover:bg-[#FFFDF7] active:bg-[#E6F2E9]/40 border border-neutral-300/80 rounded-xl shadow-xs hover:border-[#315D4B] transition-all whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173A5E] focus-visible:ring-offset-2"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Trust Badges Strip (Unboxed clean text with typographic separators) */}
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#64748B]">
              <span className="font-semibold text-[#173A5E]">Key Assurances:</span>
              <span>5 Distinct Divisions</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Direct WhatsApp & Call Response</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Transparent & Compliant Guidance</span>
            </div>
          </div>

          {/* Right Column: Visual Montage Asset with Fallback (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md bg-white">
              {!imageError ? (
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[480px] w-full relative">
                  <img
                    src="/src/assets/images/hero_corporate_montage_1791997540237.jpg"
                    alt="Mileset Limited multi-sector corporate enterprise connecting global travel, property, technology, and business"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  {/* Subtle contrast gradient at the bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173A5E]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#E6F2E9] font-semibold">
                      One Unified Company
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      Five Dedicated Divisions for Growth
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                      Serving Nigerian homeowners, global travelers, entrepreneurs, property seekers, and forward-looking enterprises.
                    </p>
                  </div>
                </div>
              ) : (
                /* Fallback Container complying with Zero-Broken-Image Policy */
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[480px] w-full bg-gradient-to-br from-[#E6F2E9] via-[#FFFDF7] to-[#E7F2FC] p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#315D4B] text-white flex items-center justify-center font-bold text-xl">
                      M
                    </div>
                    <span className="text-xs font-semibold text-[#315D4B] uppercase tracking-wider">
                      Mileset Limited
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#173A5E]">
                      Connecting Opportunities. Building Futures.
                    </h3>
                    <p className="text-sm text-[#64748B]">
                      Travel & Immigration · Home Services · Property · AI & Digital · Business & Investments
                    </p>
                  </div>
                  <div className="text-xs text-[#315D4B] font-medium">
                    Corporate Gateway · Lagos, Nigeria
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4-Item Full-Width Row Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-neutral-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-[#173A5E]">5 Business Divisions</h2>
            </div>
            <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
              Equally committed to travel mobility, reliable home trades, property, AI software, and commercial investments.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E7F2FC] text-[#173A5E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-[#173A5E]">Transparent Advisory</h2>
            </div>
            <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
              Clear facts without exaggerated claims. Visa decisions rest with embassies; investments carry risk disclosure.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F5EBD7] text-[#315D4B] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-[#173A5E]">Direct Communication</h2>
            </div>
            <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
              Accessible via dedicated direct phone lines, responsive WhatsApp, and official corporate email correspondence.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-sm font-bold text-[#173A5E]">Long-Term Growth</h2>
            </div>
            <p className="mt-3 text-xs text-[#64748B] leading-relaxed">
              Structured to expand sustainably, onboarding verified local craftsmen and delivering modern enterprise systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
