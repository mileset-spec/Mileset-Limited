import React, { useState } from 'react';
import { DIVISIONS } from '../data/divisions';
import { Division, DivisionId } from '../types';
import { ArrowUpRight, Compass, Wrench, Building, Cpu, TrendingUp, Info } from 'lucide-react';

interface DivisionsSectionProps {
  onSelectDivision: (division: Division) => void;
  onInquire: (divisionId: DivisionId) => void;
  onApplyProvider: () => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  onSelectDivision,
  onInquire,
  onApplyProvider,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | DivisionId>('all');

  const getDivisionIcon = (id: DivisionId) => {
    switch (id) {
      case 'travel-immigration':
        return <Compass className="w-4 h-4 text-[#315D4B]" />;
      case 'home-services':
        return <Wrench className="w-4 h-4 text-[#315D4B]" />;
      case 'property':
        return <Building className="w-4 h-4 text-[#315D4B]" />;
      case 'ai-digital':
        return <Cpu className="w-4 h-4 text-[#315D4B]" />;
      case 'business-investments':
        return <TrendingUp className="w-4 h-4 text-[#315D4B]" />;
    }
  };

  const filteredDivisions = activeFilter === 'all' 
    ? DIVISIONS 
    : DIVISIONS.filter(d => d.id === activeFilter);

  return (
    <section id="divisions" className="py-16 sm:py-24 bg-[#FFFDF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
            <span>Our Core Structure</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-[#64748B]">One Unified Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173A5E] tracking-tight mt-2 text-balance">
            Five Business Divisions, One Standard of Excellence
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Mileset Limited operates across five distinct commercial divisions. Each division offers specialized capabilities while sharing our unified commitment to transparency, responsiveness, and genuine client value.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeFilter === 'all'
                ? 'bg-[#315D4B] text-white shadow-xs'
                : 'bg-white text-[#173A5E] hover:bg-[#E6F2E9] border border-neutral-200'
            }`}
          >
            All 5 Divisions
          </button>
          {DIVISIONS.map((div) => (
            <button
              key={div.id}
              onClick={() => setActiveFilter(div.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeFilter === div.id
                  ? 'bg-[#315D4B] text-white shadow-xs'
                  : 'bg-white text-[#173A5E] hover:bg-[#E6F2E9] border border-neutral-200'
              }`}
            >
              {getDivisionIcon(div.id)}
              <span>{div.shortName}</span>
            </button>
          ))}
        </div>

        {/* Divisions Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDivisions.map((division) => (
            <div
              key={division.id}
              className="group bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={division.image}
                  alt={division.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Clean unboxed tag in top corner */}
                <div className="absolute top-3 left-3 bg-[#FFFDF7]/95 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-semibold text-[#173A5E] border border-neutral-200/80 shadow-xs">
                  {division.badge}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#315D4B] font-semibold">
                    {getDivisionIcon(division.id)}
                    <span>Division {DIVISIONS.findIndex(d => d.id === division.id) + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#173A5E] mt-1 group-hover:text-[#315D4B] transition-colors">
                    {division.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {division.summary}
                  </p>

                  {/* Highlighted Services List */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#173A5E] block mb-1">
                      Key Offerings:
                    </span>
                    {division.services.slice(0, 3).map((svc, sIdx) => (
                      <div key={sIdx} className="text-xs text-[#173A5E] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#315D4B] shrink-0" />
                        <span className="truncate">{svc.title}</span>
                      </div>
                    ))}
                    {division.services.length > 3 && (
                      <div className="text-[11px] text-[#64748B] italic">
                        + {division.services.length - 3} more specialized service offerings
                      </div>
                    )}
                  </div>
                </div>

                {/* Honest Regulatory Compliance Note Snippet */}
                <div className="p-2.5 rounded-lg bg-[#E6F2E9]/40 border border-[#E6F2E9] text-[11px] text-[#173A5E] flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#315D4B] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">
                    {division.id === 'travel-immigration' && 'Decisions made by official embassies & visa authorities.'}
                    {division.id === 'home-services' && 'Independent tradespeople with verified background checks.'}
                    {division.id === 'property' && 'Due diligence guidance for verified titles & leasing.'}
                    {division.id === 'ai-digital' && 'Enterprise-grade automation, web platforms & SaaS.'}
                    {division.id === 'business-investments' && 'General business research; no speculative guarantees.'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDivision(division)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#173A5E] bg-[#FFFDF7] hover:bg-[#E6F2E9] border border-neutral-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#315D4B]" />
                  </button>

                  <button
                    onClick={() => onInquire(division.id)}
                    className="flex-1 inline-flex items-center justify-center py-2.5 px-3 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0"
                  >
                    <span>Inquire</span>
                  </button>
                </div>

                {/* Extra pathway for Home Services */}
                {division.id === 'home-services' && (
                  <button
                    onClick={onApplyProvider}
                    className="w-full text-center text-[11px] text-[#315D4B] hover:underline font-semibold pt-1"
                  >
                    Are you a skilled tradesperson? Apply to join network →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
