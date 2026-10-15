import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: (divisionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Divisions', href: '#divisions' },
    { label: 'Why Mileset', href: '#why-us' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar Announcement & Quick Connect */}
      <div className="bg-[#173A5E] text-[#FFFDF7] text-xs py-2 px-4 sm:px-8 border-b border-[#173A5E]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="font-semibold text-[#E6F2E9]">MILESET LIMITED:</span>
            <span className="text-slate-200">Connecting Opportunities. Building Futures.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:+2349079274212"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E6F2E9]" />
              <span className="tabular-nums">+234 907 927 4212</span>
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a
              href="https://wa.me/2349079274212?text=Hello%20Mileset%20Limited,%20I%20would%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E6F2E9] hover:text-white transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Bar (Compliant with 3-Zone Contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-neutral-200/80 shadow-xs'
            : 'bg-[#FFFDF7] border-neutral-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark Element */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315D4B] rounded-lg"
            aria-label="MILESET LIMITED Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#173A5E]"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap shrink-0 hover:text-[#315D4B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#315D4B] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#315D4B] hover:bg-[#25493a] active:bg-[#1d3a2e] rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315D4B] focus-visible:ring-offset-2"
            >
              Inquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#173A5E] hover:text-[#315D4B] hover:bg-[#E6F2E9]/50 rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315D4B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#173A5E] hover:bg-[#E6F2E9] hover:text-[#315D4B] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full text-center py-3 text-sm font-semibold text-white bg-[#315D4B] hover:bg-[#25493a] rounded-lg shadow-xs transition-colors"
                >
                  Inquire Now
                </button>
                <a
                  href="https://wa.me/2349079274212?text=Hello%20Mileset%20Limited,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-sm font-medium text-[#315D4B] bg-[#E6F2E9] hover:bg-[#d8edd9] rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
