import React, { useState } from 'react';
import { ContactInquiry, ProviderApplication, Opportunity } from '../types';
import { X, Inbox, Users, BookOpen, Settings, CheckCircle2, Copy, Check, ExternalLink, Globe, Mail } from 'lucide-react';

interface AdminHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: ContactInquiry[];
  providerApplications: ProviderApplication[];
  opportunities: Opportunity[];
  onUpdateInquiryStatus: (id: string, status: ContactInquiry['status']) => void;
  onClearTestData?: () => void;
}

export const AdminHubModal: React.FC<AdminHubModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  providerApplications,
  opportunities,
  onUpdateInquiryStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'providers' | 'setup'>('inquiries');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hub-modal-title"
      >
        {/* Hub Header */}
        <div className="bg-[#173A5E] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#315D4B] text-white flex items-center justify-center font-bold">
              M
            </div>
            <div>
              <h3 id="hub-modal-title" className="text-xl font-bold">
                MILESET LIMITED — Corporate Operations Hub
              </h3>
              <p className="text-xs text-slate-300">
                Inquiries Inbox, Provider Network Intake & Domain Launch Guide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close Operations Hub"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-200 bg-[#FFFDF7] px-6">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'inquiries'
                ? 'border-[#315D4B] text-[#315D4B]'
                : 'border-transparent text-[#64748B] hover:text-[#173A5E]'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Customer Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('providers')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'providers'
                ? 'border-[#315D4B] text-[#315D4B]'
                : 'border-transparent text-[#64748B] hover:text-[#173A5E]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Home Services Artisans ({providerApplications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'setup'
                ? 'border-[#315D4B] text-[#315D4B]'
                : 'border-transparent text-[#64748B] hover:text-[#173A5E]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Domain, Email & Hosting Setup</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {/* TAB 1: Inquiries Inbox */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#64748B]">
                  Live inquiries submitted via the website contact forms. All entries are recorded locally in the database.
                </p>
              </div>

              {inquiries.length === 0 ? (
                <div className="text-center py-12 bg-[#FFFDF7] rounded-xl border border-neutral-200 p-6 space-y-2">
                  <Inbox className="w-8 h-8 text-[#64748B] mx-auto" />
                  <h4 className="text-sm font-bold text-[#173A5E]">No Inquiries Yet</h4>
                  <p className="text-xs text-[#64748B]">
                    When visitors submit the contact form, their inquiries will appear here instantly.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#315D4B]/30 shadow-xs space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#173A5E]">{inq.fullName}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E6F2E9] text-[#315D4B] font-medium">
                            {inq.divisionId}
                          </span>
                          <span className="text-[11px] text-[#64748B] font-mono">
                            {new Date(inq.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateInquiryStatus(
                                inq.id,
                                inq.status === 'responded' ? 'reviewed' : 'responded'
                              )
                            }
                            className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                              inq.status === 'responded'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                          >
                            Status: {inq.status}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#64748B]">
                        <div>
                          Email:{' '}
                          <a
                            href={`mailto:${inq.email}`}
                            className="text-[#173A5E] font-medium hover:underline"
                          >
                            {inq.email}
                          </a>
                        </div>
                        <div>
                          Phone:{' '}
                          <a
                            href={`tel:${inq.phone}`}
                            className="text-[#173A5E] font-medium hover:underline tabular-nums"
                          >
                            {inq.phone}
                          </a>
                        </div>
                      </div>

                      <div className="p-3 bg-[#FFFDF7] rounded-lg border border-neutral-200 text-xs text-slate-800">
                        <span className="font-semibold block text-[11px] text-[#315D4B] mb-0.5">
                          Inquiry Type: {inq.inquiryType}
                        </span>
                        {inq.message}
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                            inq.fullName
                          )},%20this%20is%20MILESET%20LIMITED%20following%20up%20on%20your%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-[#315D4B] hover:underline"
                        >
                          Reply on WhatsApp →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Provider Applications */}
          {activeTab === 'providers' && (
            <div className="space-y-4">
              <p className="text-xs text-[#64748B]">
                Applications from skilled carpenters, plumbers, welders, and artisans seeking to join the Mileset Home Services vetted network.
              </p>

              {providerApplications.length === 0 ? (
                <div className="text-center py-12 bg-[#FFFDF7] rounded-xl border border-neutral-200 p-6 space-y-2">
                  <Users className="w-8 h-8 text-[#64748B] mx-auto" />
                  <h4 className="text-sm font-bold text-[#173A5E]">No Provider Applications Yet</h4>
                  <p className="text-xs text-[#64748B]">
                    Artisans who submit the "Apply as Service Provider" form will be catalogued here for background review.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {providerApplications.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#315D4B]/30 shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#173A5E]">{app.fullName}</span>
                          {app.businessName && (
                            <span className="text-xs text-[#64748B]">({app.businessName})</span>
                          )}
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E6F2E9] text-[#315D4B] font-medium uppercase">
                            {app.trade}
                          </span>
                        </div>
                        <span className="text-xs text-[#64748B] font-mono">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#64748B]">
                        <div>
                          Phone:{' '}
                          <strong className="text-[#173A5E] tabular-nums">{app.phone}</strong>
                        </div>
                        <div>
                          Location: <strong className="text-[#173A5E]">{app.location}</strong>
                        </div>
                        <div>
                          Experience: <strong className="text-[#173A5E]">{app.yearsOfExperience}</strong>
                        </div>
                      </div>

                      {app.description && (
                        <div className="p-2.5 bg-[#FFFDF7] rounded border border-neutral-200 text-xs text-slate-700">
                          {app.description}
                        </div>
                      )}

                      <div className="text-[11px] text-[#315D4B] font-medium">
                        References Available: {app.hasReferences ? 'Yes' : 'To be provided'} · Ready for trade interview
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Setup Guide (Vercel, Domain & Email) */}
          {activeTab === 'setup' && (
            <div className="space-y-6 text-xs text-[#173A5E] leading-relaxed">
              {/* Vercel Deployment Section */}
              <div className="p-5 rounded-xl bg-[#E6F2E9]/70 border border-[#315D4B]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#315D4B]">
                    <Globe className="w-4 h-4" />
                    <span>Connecting MILESET LIMITED to Vercel</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#315D4B] text-white">
                    Vercel Ready
                  </span>
                </div>

                <p className="text-[#173A5E]">
                  A pre-configured <code>vercel.json</code> file has been placed in your project root with SPA rewrite rules and asset caching headers. Follow these simple steps to deploy:
                </p>

                {/* Option A: GitHub to Vercel */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-[#173A5E] flex items-center justify-between">
                    <span>Option A: Deploy via GitHub (Recommended for automatic updates)</span>
                  </h5>
                  <ol className="list-decimal list-inside space-y-1.5 text-[#64748B]">
                    <li>Push this project repository to your GitHub account (e.g. <code>github.com/your-username/mileset-limited</code>).</li>
                    <li>Visit <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-[#315D4B] underline font-semibold">vercel.com/new</a> and select <strong>Import Git Repository</strong>.</li>
                    <li>Vercel will auto-detect <strong>Vite</strong>. Verify the preset settings:
                      <div className="mt-1.5 p-2 bg-[#FFFDF7] rounded border border-neutral-200 font-mono text-[11px] text-slate-700 space-y-0.5">
                        <div>Framework Preset: <strong>Vite</strong></div>
                        <div>Build Command: <strong>npm run build</strong></div>
                        <div>Output Directory: <strong>dist</strong></div>
                        <div>Install Command: <strong>npm install</strong></div>
                      </div>
                    </li>
                    <li>Click <strong>Deploy</strong>. Your site will build and go live in seconds with an SSL-secured <code>.vercel.app</code> URL.</li>
                  </ol>
                </div>

                {/* Option B: Vercel CLI */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-[#173A5E]">
                    Option B: Deploy via Vercel CLI (Direct from terminal)
                  </h5>
                  <p className="text-[#64748B]">
                    If you prefer deploying directly from your machine:
                  </p>
                  <div className="flex items-center justify-between bg-neutral-900 text-slate-100 p-2.5 rounded-lg font-mono text-[11px]">
                    <code>npx vercel --prod</code>
                    <button
                      onClick={() => copyToClipboard('npx vercel --prod', 'cli')}
                      className="text-xs text-[#E6F2E9] hover:text-white px-2 py-0.5 rounded bg-white/10 transition-colors"
                    >
                      {copiedText === 'cli' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Connecting Custom Domain on Vercel */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-[#173A5E]">
                    Connecting your custom domain (milesetlimited.com) on Vercel
                  </h5>
                  <p className="text-[#64748B]">
                    In your Vercel Dashboard, navigate to <strong>Project Settings → Domains</strong>, enter <code>milesetlimited.com</code>, and add the DNS records at your domain registrar:
                  </p>

                  <div className="p-3 bg-[#FFFDF7] rounded-lg border border-neutral-200 font-mono text-[11px] space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[#315D4B] font-bold">Record 1 (Apex Domain):</span><br />
                        Type: <strong>A</strong> &nbsp;|&nbsp; Name: <strong>@</strong> &nbsp;|&nbsp; Value: <strong>76.76.21.21</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('76.76.21.21', 'apex')}
                        className="text-xs text-[#315D4B] hover:underline"
                      >
                        {copiedText === 'apex' ? 'Copied!' : 'Copy IP'}
                      </button>
                    </div>

                    <div className="border-t border-neutral-200 pt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[#315D4B] font-bold">Record 2 (WWW Subdomain):</span><br />
                        Type: <strong>CNAME</strong> &nbsp;|&nbsp; Name: <strong>www</strong> &nbsp;|&nbsp; Value: <strong>cname.vercel-dns.com</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('cname.vercel-dns.com', 'cname')}
                        className="text-xs text-[#315D4B] hover:underline"
                      >
                        {copiedText === 'cname' ? 'Copied!' : 'Copy CNAME'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Setup Guide */}
              <div className="p-4 rounded-xl bg-[#FFFDF7] border border-neutral-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#173A5E]">
                  <Mail className="w-4 h-4 text-[#315D4B]" />
                  <span>Corporate Email Configuration (`info@milesetlimited.com`)</span>
                </div>
                <p className="text-[#64748B]">
                  To receive inquiries sent to <strong>info@milesetlimited.com</strong>:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-[#64748B]">
                  <li>Log in to your domain registrar DNS panel (e.g., Namecheap, GoDaddy, Whogohost, or Google Workspace).</li>
                  <li>Configure MX records pointing to Google Workspace, Zoho Mail, or your cPanel mail server.</li>
                  <li>Alternatively, set up a free email forwarder directing <code>info@milesetlimited.com</code> directly to your primary inbox (<code>teslimbadmus3@gmail.com</code>).</li>
                </ol>
              </div>

              {/* Lead Capture Backup */}
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                <h4 className="font-bold text-sm text-[#173A5E]">
                  Form Submissions & Backup Dispatch
                </h4>
                <p className="text-[#64748B]">
                  In addition to the database record, users can click "Send to WhatsApp" on form submission to immediately forward the filled inquiry with one tap to your direct line (+234 907 927 4212), ensuring zero lost leads even when offline.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FFFDF7] border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg transition-colors"
          >
            Close Hub
          </button>
        </div>
      </div>
    </div>
  );
};
