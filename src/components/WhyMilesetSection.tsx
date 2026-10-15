import React from 'react';
import { Layers, CheckCircle2, MessageCircle, Globe2, ShieldCheck, UserCheck } from 'lucide-react';

export const WhyMilesetSection: React.FC = () => {
  const differentiators = [
    {
      icon: <Layers className="w-5 h-5 text-[#315D4B]" />,
      title: 'Unified Multi-Sector Ecosystem',
      description: 'Instead of dealing with fragmented, unverified contacts for your travel plans, artisan repairs, property leases, web systems, and business ideas, Mileset Limited centralizes these diverse services with consistent accountability.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#315D4B]" />,
      title: 'Honest Advisory & Zero False Promises',
      description: 'We prioritize client protection over hollow sales pitches. In travel, we state clearly that visa decisions rest with sovereign embassies. In property and investments, we emphasize factual due diligence rather than speculative hype.'
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#315D4B]" />,
      title: 'Accessible & Responsive Channels',
      description: 'No frustrating bot loops or unanswered inquiries. You have direct access to our verified phone numbers, official WhatsApp chat, and designated corporate email with prompt follow-up.'
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#315D4B]" />,
      title: 'Nigerian Context with International Rigor',
      description: 'We understand the unique realities, challenges, and opportunities of doing business and living in Nigeria, while applying international benchmarks of operational discipline and software design.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FFFDF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
            <span>Corporate Philosophy</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-[#64748B]">Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173A5E] tracking-tight text-balance">
            Why Individuals and Businesses Choose Mileset
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We deliver the assurance of a dependable corporate partner with the agility and responsiveness your personal and business goals require.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-[#315D4B]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E6F2E9] flex items-center justify-center shrink-0 mb-5">
                  {diff.icon}
                </div>
                <h3 className="text-lg font-bold text-[#173A5E]">
                  {diff.title}
                </h3>
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#315D4B]">
                <CheckCircle2 className="w-4 h-4 text-[#315D4B]" />
                <span>Mileset Operating Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Assurance Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#E7F2FC]/40 border border-[#E7F2FC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#173A5E]">
              Ready to discuss your specific requirement?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Connect with our representatives directly on WhatsApp or schedule a telephone consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2349079274212?text=Hello%20Mileset%20Limited,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#315D4B] hover:bg-[#25493a] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
