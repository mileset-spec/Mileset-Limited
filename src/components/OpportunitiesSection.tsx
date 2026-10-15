import React, { useState } from 'react';
import { Opportunity, DivisionId } from '../types';
import { DIVISIONS } from '../data/divisions';
import { Search, ExternalLink, Calendar, ShieldCheck, Plus, Filter, BookOpen, X, Check } from 'lucide-react';

interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
  onAddOpportunity: (opportunity: Opportunity) => void;
  onInquireAboutOpportunity: (opp: Opportunity) => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  opportunities,
  onAddOpportunity,
  onInquireAboutOpportunity,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<'all' | DivisionId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Opportunity Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDivision, setNewDivision] = useState<DivisionId>('travel-immigration');
  const [newCategory, setNewCategory] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [newSourceName, setNewSourceName] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const filteredOpportunities = opportunities.filter((item) => {
    const matchesDivision = selectedDivision === 'all' || item.divisionId === selectedDivision;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  const handleCreateOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary || !newSourceName) return;

    const today = new Date().toISOString().split('T')[0];
    const created: Opportunity = {
      id: `opp-${Date.now()}`,
      title: newTitle,
      divisionId: newDivision,
      category: newCategory || 'Verified Resource',
      summary: newSummary,
      details: newDetails || newSummary,
      sourceName: newSourceName,
      sourceUrl: newSourceUrl || '#contact',
      publicationDate: today,
      verifiedDate: today,
      isOfficialSource: true,
    };

    onAddOpportunity(created);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowAddModal(false);
      // Reset form
      setNewTitle('');
      setNewCategory('');
      setNewSummary('');
      setNewDetails('');
      setNewSourceName('');
      setNewSourceUrl('');
    }, 1200);
  };

  const getDivisionName = (id: DivisionId) => {
    return DIVISIONS.find((d) => d.id === id)?.shortName || id;
  };

  return (
    <section id="opportunities" className="py-16 sm:py-24 bg-[#FFFDF7] scroll-mt-20 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200/80">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#315D4B]">
              <span>Knowledge & Insights</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#64748B]">Updated Briefings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#173A5E] tracking-tight">
              Opportunities & Resources
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Curated guides, verified announcements, and official informational updates across all five divisions. Every resource includes publication and verification dates.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#173A5E] bg-white hover:bg-[#E6F2E9] border border-neutral-300 rounded-xl transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <Plus className="w-3.5 h-3.5 text-[#315D4B]" />
              <span>Publish Resource</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Division Filter Tabs */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedDivision('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedDivision === 'all'
                  ? 'bg-[#315D4B] text-white shadow-xs'
                  : 'bg-white text-[#173A5E] hover:bg-[#E6F2E9] border border-neutral-200'
              }`}
            >
              All Categories
            </button>
            {DIVISIONS.map((div) => (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedDivision === div.id
                    ? 'bg-[#315D4B] text-white shadow-xs'
                    : 'bg-white text-[#173A5E] hover:bg-[#E6F2E9] border border-neutral-200'
                }`}
              >
                {div.shortName}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides & opportunities..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B] focus:ring-1 focus:ring-[#315D4B] transition-colors"
            />
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opp) => (
              <article
                key={opp.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Category & Verified Date */}
                  <div className="flex items-center justify-between text-[11px] text-[#64748B]">
                    <span className="font-semibold text-[#315D4B]">
                      {getDivisionName(opp.divisionId)}
                    </span>
                    <span className="tabular-nums">Verified: {opp.verifiedDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#173A5E] leading-snug">
                    {opp.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {opp.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-3">
                  {/* Source indicator */}
                  <div className="text-[11px] text-[#173A5E] flex items-center gap-1.5 truncate">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#315D4B] shrink-0" />
                    <span className="truncate">Source: {opp.sourceName}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedOpportunity(opp)}
                      className="text-xs font-semibold text-[#173A5E] hover:text-[#315D4B] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Briefing</span>
                      <BookOpen className="w-3.5 h-3.5" />
                    </button>

                    {opp.sourceUrl && opp.sourceUrl.startsWith('http') ? (
                      <a
                        href={opp.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#315D4B] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Official Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onInquireAboutOpportunity(opp)}
                        className="text-xs font-semibold text-[#315D4B] hover:underline"
                      >
                        Inquire With Us →
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-neutral-200 p-8 space-y-3">
              <BookOpen className="w-8 h-8 text-[#64748B] mx-auto" />
              <h4 className="text-base font-bold text-[#173A5E]">No matching resources found</h4>
              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                Try searching for different keywords or clear the category filters to browse all publications.
              </p>
              <button
                onClick={() => {
                  setSelectedDivision('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-[#315D4B] bg-[#E6F2E9] rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Opportunity Detail Reader Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-neutral-200 p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedOpportunity(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-[#173A5E] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs text-[#315D4B] font-semibold">
                <span>{getDivisionName(selectedOpportunity.divisionId)}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#64748B]">{selectedOpportunity.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#173A5E] mt-2">
                {selectedOpportunity.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B] mt-2 pt-2 border-t border-neutral-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="tabular-nums">Published: {selectedOpportunity.publicationDate}</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#315D4B]" />
                  <span className="tabular-nums">Verified: {selectedOpportunity.verifiedDate}</span>
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#173A5E] leading-relaxed bg-[#FFFDF7] p-5 rounded-xl border border-neutral-200">
              <p>{selectedOpportunity.details}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#E6F2E9]/40 border border-[#E6F2E9] space-y-1">
              <span className="text-xs font-semibold text-[#315D4B] block">Official Verification & Attribution:</span>
              <p className="text-xs text-[#173A5E]">
                Source: <strong>{selectedOpportunity.sourceName}</strong>. 
                {selectedOpportunity.isOfficialSource && ' Mileset Limited periodically verifies that third-party requirements reflect prevailing official regulatory policies.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-100">
              {selectedOpportunity.sourceUrl && selectedOpportunity.sourceUrl.startsWith('http') ? (
                <a
                  href={selectedOpportunity.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#173A5E] hover:bg-[#0f2740] rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Visit Primary Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="text-xs text-[#64748B]">Internal publication by Mileset Limited</div>
              )}

              <button
                onClick={() => {
                  const opp = selectedOpportunity;
                  setSelectedOpportunity(null);
                  onInquireAboutOpportunity(opp);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-xl transition-colors whitespace-nowrap"
              >
                Inquire on this Topic
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Opportunity / Publishing Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl border border-neutral-200 p-6 sm:p-8 space-y-5">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-[#173A5E] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-[#173A5E]">
                Publish New Verified Resource
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Add an official update, opportunity, or advisory guide across the five business divisions.
              </p>
            </div>

            {formSuccess ? (
              <div className="p-6 text-center space-y-2 bg-[#E6F2E9] rounded-xl">
                <Check className="w-8 h-8 text-[#315D4B] mx-auto" />
                <h4 className="text-base font-bold text-[#173A5E]">Resource Published Successfully</h4>
                <p className="text-xs text-[#64748B]">
                  Your new resource is now visible in the Opportunities directory.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateOpportunity} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                    Resource / Opportunity Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Ireland Post-Study Work Permit Checklist"
                    className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                      Business Division *
                    </label>
                    <select
                      value={newDivision}
                      onChange={(e) => setNewDivision(e.target.value as DivisionId)}
                      className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                    >
                      {DIVISIONS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                      Category Tag
                    </label>
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="e.g. Visa Advisory / Grant Guide"
                      className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                    >
                    </input>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                    Short Summary (1–2 sentences) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder="Key takeaway and eligibility points..."
                    className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                    Detailed Notes & Guidance
                  </label>
                  <textarea
                    rows={3}
                    value={newDetails}
                    onChange={(e) => setNewDetails(e.target.value)}
                    placeholder="Full step-by-step guidance, timelines, and required credentials..."
                    className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                      Source Name or Agency *
                    </label>
                    <input
                      type="text"
                      required
                      value={newSourceName}
                      onChange={(e) => setNewSourceName(e.target.value)}
                      placeholder="e.g. Irish Naturalisation and Immigration Service"
                      className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173A5E] mb-1">
                      Official Source URL
                    </label>
                    <input
                      type="url"
                      value={newSourceUrl}
                      onChange={(e) => setNewSourceUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-hidden focus:border-[#315D4B]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-medium text-[#173A5E] hover:bg-neutral-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg shadow-xs"
                  >
                    Publish Opportunity
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
