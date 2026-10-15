import React from 'react';
import { Division } from '../types';
import { X, Check, ArrowRight, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';

interface DivisionModalProps {
  division: Division | null;
  onClose: () => void;
  onInquire: (divisionId: string) => void;
  onApplyProvider?: () => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  division,
  onClose,
  onInquire,
  onApplyProvider
}) => {
  if (!division) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="division-modal-title"
      >
        {/* Header with image banner */}
        <div className="relative h-56 sm:h-72 w-full bg-[#173A5E] overflow-hidden">
          <img
            src={division.image}
            alt={division.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A5E] via-[#173A5E]/60 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#E6F2E9]">
              MILESET LIMITED · {division.badge}
            </span>
            <h2 id="division-modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {division.name}
            </h2>
            <p className="text-sm text-slate-200 mt-1 max-w-2xl">
              {division.tagline}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview text */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#315D4B]">
              Division Overview
            </h3>
            <p className="text-sm sm:text-base text-[#173A5E] leading-relaxed">
              {division.description}
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#315D4B]">
              Core Capabilities & Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {division.services.map((svc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FFFDF7] border border-neutral-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-[#173A5E]">
                      {svc.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                    <span className="text-[11px] font-semibold text-[#315D4B] uppercase tracking-wider block">
                      Scope of Support:
                    </span>
                    {svc.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#173A5E]">
                        <Check className="w-3.5 h-3.5 text-[#315D4B] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages / Why Choose this division */}
          <div className="p-5 rounded-xl bg-[#E6F2E9]/50 border border-[#315D4B]/20 space-y-3">
            <h3 className="text-sm font-bold text-[#315D4B] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#315D4B]" />
              <span>Key Advantages with Mileset Limited</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#173A5E]">
              {division.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#315D4B] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Transparency & Regulatory Disclaimer */}
          <div className="p-4 rounded-xl bg-[#F5EBD7]/40 border border-[#F5EBD7] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#315D4B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#173A5E] leading-relaxed">
              <span className="font-semibold block mb-0.5 text-[#315D4B]">Compliance & Standards Notice:</span>
              {division.disclaimer}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#FFFDF7] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#64748B] text-center sm:text-left">
            Have questions about this division? Our team responds within 24 business hours.
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {division.id === 'home-services' && onApplyProvider && (
              <button
                onClick={() => {
                  onClose();
                  onApplyProvider();
                }}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#315D4B] bg-[#E6F2E9] hover:bg-[#d8edd9] border border-[#315D4B]/30 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                Apply as Service Provider
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(division.id);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#315D4B] hover:bg-[#25493a] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <span>{division.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
