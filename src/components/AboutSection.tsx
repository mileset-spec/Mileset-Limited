import React from 'react';
import { Target, Compass, Award, Shield, Users, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-5 h-5 text-[#315D4B]" />,
      title: 'Uncompromising Transparency',
      description: 'We believe real trust begins with clarity. We share accurate requirements, explain real procedural constraints, and never mislead clients with false guarantees or speculative outcomes.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#315D4B]" />,
      title: 'Customer-Centric Care',
      description: 'Whether you are an individual applying for postgraduate study abroad, a homeowner with a pipe emergency, or a business deploying AI automation, our team treats your objectives with personalized attention.'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#315D4B]" />,
      title: 'Practical Innovation',
      description: 'We embrace modern technology, digital systems, and automation where they bring tangible operational efficiency and convenience to our everyday lives and businesses.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#315D4B]" />,
      title: 'Long-Term Growth Focus',
      description: 'Mileset Limited is structured for durable value. We build lasting relationships with customers, vetted tradespeople, and enterprise partners, rather than pursuing short-sighted transactional gains.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#E6F2E9]/35 border-y border-neutral-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
              <span>About Mileset Limited</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#64748B]">Our Identity</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#173A5E] tracking-tight text-balance">
              Building a Unified Corporate Platform for Real Progress
            </h2>

            <p className="text-base text-[#173A5E] leading-relaxed">
              <strong>MILESET LIMITED</strong> was founded on a simple yet transformative conviction: individuals, homeowners, entrepreneurs, and expanding enterprises achieve greater momentum when trusted essential services are unified under one dependable corporate roof.
            </p>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-xs space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#315D4B] block">
                Official Company Tagline
              </span>
              <p className="text-lg font-bold text-[#173A5E] italic">
                “Connecting Opportunities. Building Futures.”
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Reflecting our role as a bridge linking ambition with structured solutions, from local artisan crafts in Nigeria to international academic and commercial horizons.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Mission Statement Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#315D4B]">
                <Target className="w-4 h-4" />
                <span>Our Corporate Mission</span>
              </div>
              <p className="text-base sm:text-lg font-medium text-[#173A5E] leading-relaxed">
                To connect people and enterprises with legitimate services, credible opportunities, and modern digital capabilities across travel, property, home maintenance, AI, and strategic business investments—grounded in integrity and responsive communication.
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E6F2E9] flex items-center justify-center shrink-0 mb-3">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#173A5E]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Ethical Operating Standard */}
            <div className="p-4 rounded-xl bg-[#FFFDF7] border border-neutral-200 text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#173A5E]">Corporate Integrity Standard:</strong> Mileset Limited is committed to honest communication. We do not manufacture artificial histories or exaggerated metrics. Every engagement is rooted in authentic capabilities, clear contracts, and verified milestones.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
