import React, { useState, useEffect } from 'react';
import { ContactInquiry, DivisionId } from '../types';
import { DIVISIONS } from '../data/divisions';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface ContactSectionProps {
  initialDivision?: string;
  onSubmitInquiry: (inquiry: ContactInquiry) => void;
  onOpenProviderModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialDivision,
  onSubmitInquiry,
  onOpenProviderModal,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [divisionId, setDivisionId] = useState<DivisionId | 'general'>('general');
  const [inquiryType, setInquiryType] = useState('Service Consultation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ContactInquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialDivision) {
      if (DIVISIONS.some((d) => d.id === initialDivision)) {
        setDivisionId(initialDivision as DivisionId);
      }
    }
  }, [initialDivision]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please enter your telephone or WhatsApp number.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please provide a short message describing your requirement (minimum 10 characters).');
      return;
    }

    setIsSubmitting(true);

    const inquiry: ContactInquiry = {
      id: `inq-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      divisionId,
      inquiryType,
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    setTimeout(() => {
      onSubmitInquiry(inquiry);
      setSubmittedInquiry(inquiry);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setDivisionId('general');
    setInquiryType('Service Consultation');
  };

  const generateWhatsAppUrl = (inq?: ContactInquiry | null) => {
    const text = inq
      ? `Hello Mileset Limited, my name is ${inq.fullName}. I submitted an inquiry regarding ${inq.divisionId} (${inq.inquiryType}): "${inq.message}". Phone: ${inq.phone}, Email: ${inq.email}.`
      : `Hello Mileset Limited, I would like to make an inquiry regarding your services.`;
    return `https://wa.me/2349079274212?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF7] scroll-mt-20 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
            <span>Direct Inquiries & Connect</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-[#64748B]">Official Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173A5E] tracking-tight mt-2 text-balance">
            Connect With MILESET LIMITED
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Reach out directly to our team. We respond promptly via official corporate email, direct telephone, and responsive WhatsApp messaging.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Details Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Corporate Email
                  </span>
                  <h4 className="text-sm font-bold text-[#173A5E]">
                    Official Correspondence
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                For formal proposals, inquiries across all five divisions, and documentation submissions:
              </p>
              <a
                href="mailto:info@milesetlimited.com"
                className="inline-block text-sm font-semibold text-[#315D4B] hover:text-[#173A5E] hover:underline transition-colors break-all"
              >
                info@milesetlimited.com
              </a>
            </div>

            {/* Telephone Lines Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E7F2FC] text-[#173A5E] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Telephone Lines
                  </span>
                  <h4 className="text-sm font-bold text-[#173A5E]">
                    Direct Phone Support
                  </h4>
                </div>
              </div>
              
              <div className="space-y-2 pt-1 border-t border-neutral-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Primary Line:</span>
                  <a
                    href="tel:+2349079274212"
                    className="font-bold text-[#173A5E] hover:text-[#315D4B] transition-colors tabular-nums"
                  >
                    +234 907 927 4212
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Secondary Line:</span>
                  <a
                    href="tel:+2348147011433"
                    className="font-bold text-[#173A5E] hover:text-[#315D4B] transition-colors tabular-nums"
                  >
                    +234 814 701 1433
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-[#64748B] flex items-center gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#315D4B]" />
                <span>Lines open Monday – Saturday (8:00 AM – 6:00 PM WAT)</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-[#E6F2E9]/60 border border-[#315D4B]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#315D4B] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#315D4B]">
                    Instant Messaging
                  </span>
                  <h4 className="text-sm font-bold text-[#173A5E]">
                    Chat with Us on WhatsApp
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#173A5E] leading-relaxed">
                Need a rapid response regarding a study program, urgent home service, or project quote? Chat directly with our desk on WhatsApp.
              </p>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-xl shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch WhatsApp (+234 907 927 4212)</span>
              </a>
            </div>

            {/* Provider Application Notice Box */}
            <div className="p-5 rounded-2xl bg-[#F5EBD7]/40 border border-[#F5EBD7] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#315D4B] block">
                Trade Practitioners & Contractors
              </span>
              <p className="text-xs text-[#173A5E] leading-relaxed">
                Are you an experienced carpenter, plumber, or welder looking for verified project assignments through Mileset Home Services?
              </p>
              <button
                onClick={onOpenProviderModal}
                className="text-xs font-bold text-[#315D4B] hover:underline block pt-1"
              >
                Submit Trade Provider Expression of Interest →
              </button>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 shadow-md p-6 sm:p-10">
            {submittedInquiry ? (
              /* Success Confirmation Screen */
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-[#E6F2E9] text-[#315D4B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#173A5E]">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you, <strong className="text-[#173A5E]">{submittedInquiry.fullName}</strong>. Your inquiry has been registered in the Mileset Limited system and routed to our executive desk.
                  </p>
                </div>

                {/* Submission Receipt Box */}
                <div className="p-5 rounded-xl bg-[#FFFDF7] border border-neutral-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-[#64748B]">Division:</span>
                    <span className="font-semibold text-[#173A5E]">
                      {submittedInquiry.divisionId === 'general' ? 'General Corporate' : submittedInquiry.divisionId}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-[#64748B]">Contact Email:</span>
                    <span className="font-semibold text-[#173A5E]">{submittedInquiry.email}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-[#64748B]">Telephone:</span>
                    <span className="font-semibold text-[#173A5E] tabular-nums">{submittedInquiry.phone}</span>
                  </div>
                  <div className="py-1">
                    <span className="text-[#64748B] block mb-1">Message Preview:</span>
                    <p className="text-slate-700 italic bg-white p-2.5 rounded border border-neutral-200">
                      "{submittedInquiry.message}"
                    </p>
                  </div>
                </div>

                {/* Instant WhatsApp Hand-off option */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-[#64748B]">
                    Want an even faster response? Continue this exact conversation directly on WhatsApp:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl(submittedInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-xl shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#173A5E] bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Contact Form Input Interface */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-100 pb-4">
                  <h3 className="text-xl font-bold text-[#173A5E]">
                    Inquiry Submission Form
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Complete the form below to receive dedicated consultation from our division specialists.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Adebayo Johnson"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="adebayo@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                      Telephone or WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                      Division of Interest *
                    </label>
                    <select
                      value={divisionId}
                      onChange={(e) => setDivisionId(e.target.value as DivisionId | 'general')}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                    >
                      <option value="general">General Corporate Inquiry</option>
                      {DIVISIONS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                    Type of Inquiry
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                  >
                    <option value="Service Consultation">Service Consultation & Assessment</option>
                    <option value="Cost Estimate / Quote">Cost Estimate & Project Quotation</option>
                    <option value="Study Abroad / Visa Guidance">Study Abroad & Visa Documentation Advisory</option>
                    <option value="Home Service Booking">Home Service Repair Booking</option>
                    <option value="Property Leasing / Short-Let">Property Lease / Short-Let Reservation</option>
                    <option value="AI & Digital Project">Website, AI Automation or Software Development</option>
                    <option value="Domain Name / Business Partnership">Domain Trading & Commercial Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173A5E] mb-1.5">
                    Detailed Message or Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your specific requirements, timeline, target location, or questions..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#315D4B] shrink-0" />
                  <span>Your contact information is strictly handled in accordance with our Privacy Policy. No spam.</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#315D4B] hover:bg-[#25493a] active:bg-[#1d3a2e] rounded-xl shadow-xs transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
