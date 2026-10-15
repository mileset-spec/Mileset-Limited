import React, { useState } from 'react';
import { ProviderApplication } from '../types';
import { X, Wrench, Check, ShieldCheck } from 'lucide-react';

interface ProviderApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (app: ProviderApplication) => void;
}

export const ProviderApplicationModal: React.FC<ProviderApplicationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [trade, setTrade] = useState<ProviderApplication['trade']>('carpentry');
  const [location, setLocation] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('3-5 years');
  const [description, setDescription] = useState('');
  const [hasReferences, setHasReferences] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !location) return;

    const application: ProviderApplication = {
      id: `prov-${Date.now()}`,
      fullName,
      businessName,
      phone,
      email,
      trade,
      location,
      yearsOfExperience,
      description,
      hasReferences,
      createdAt: new Date().toISOString(),
    };

    onSubmit(application);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset fields
      setFullName('');
      setBusinessName('');
      setPhone('');
      setEmail('');
      setDescription('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl border border-neutral-200 p-6 sm:p-8 space-y-5"
        role="dialog"
        aria-modal="true"
        aria-labelledby="provider-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-[#173A5E] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h3 id="provider-modal-title" className="text-xl font-bold text-[#173A5E]">
              Join Mileset Home Services Network
            </h3>
            <p className="text-xs text-[#64748B]">
              For skilled carpenters, plumbers, welders, and maintenance technicians.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-[#E6F2E9] rounded-2xl border border-[#315D4B]/20">
            <div className="w-12 h-12 rounded-full bg-[#315D4B] text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#173A5E]">
              Application Received
            </h4>
            <p className="text-xs text-[#173A5E] max-w-md mx-auto leading-relaxed">
              Thank you for expressing interest in joining the Mileset Home Services network. Our operations team will contact you on <strong className="tabular-nums">{phone}</strong> for trade interview scheduling and credential assessment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 rounded-lg bg-[#FFFDF7] border border-neutral-200 text-xs text-[#64748B] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#315D4B] shrink-0 mt-0.5" />
              <span>
                <strong>Verification Standard:</strong> To protect homeowners and uphold high craftsmanship, all prospective network artisans undergo in-person verification and workmanship inspection.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Babatunde Alabi"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Business / Workshop Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Crown Woodworks"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Phone Number (WhatsApp Active) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 08012345678"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="provider@example.com"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Primary Trade *
                </label>
                <select
                  value={trade}
                  onChange={(e) => setTrade(e.target.value as ProviderApplication['trade'])}
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                >
                  <option value="carpentry">Carpentry & Cabinets</option>
                  <option value="plumbing">Plumbing & Pumps</option>
                  <option value="welding">Welding & Metalwork</option>
                  <option value="electrical">Electrical Diagnostics</option>
                  <option value="painting">Painting & Finishing</option>
                  <option value="general_maintenance">General Handyman</option>
                  <option value="other">Other Specialized Trade</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Operating Location *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Ikeja / Surulere / Lekki"
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                  Experience
                </label>
                <select
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                >
                  <option value="1-2 years">1–2 years</option>
                  <option value="3-5 years">3–5 years</option>
                  <option value="6-10 years">6–10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                Brief Description of Work / Recent Projects
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Types of tools owned, workshop setup, previous projects..."
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="references"
                checked={hasReferences}
                onChange={(e) => setHasReferences(e.target.checked)}
                className="rounded-sm text-[#315D4B] focus:ring-[#315D4B]"
              />
              <label htmlFor="references" className="text-xs text-[#173A5E]">
                I can provide at least 2 previous client references or workshop location for verification.
              </label>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#173A5E] hover:bg-neutral-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg shadow-xs"
              >
                Submit Provider Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
