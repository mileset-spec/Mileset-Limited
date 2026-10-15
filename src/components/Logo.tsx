import React from 'react';

interface LogoProps {
  className?: string;
  symbolOnly?: boolean;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  symbolOnly = false,
  inverted = false,
  size = 'md',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  const subSize = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Authentic Multi-Sector Corporate Symbol */}
      <div
        className={`${iconDimensions} shrink-0 rounded-xl flex items-center justify-center transition-transform hover:scale-105 duration-200 shadow-xs overflow-hidden ${
          inverted ? 'bg-white/10 text-white' : 'bg-gradient-to-br from-[#173A5E] to-[#0D52BA] text-white'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
        >
          {/* Globe & Horizon Arc */}
          <circle cx="22" cy="18" r="11" stroke="#E6F2E9" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.4" />
          <path
            d="M9 25C13 21 28 20 35 25"
            stroke="#EAA023"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Flight Path & Airplane */}
          <path
            d="M26 14L34 8L33 11L36 12L31 15L30 18L28 16L27 18L26 14Z"
            fill="#EAA023"
          />
          {/* House & Structure Skyline Silhouette */}
          <path
            d="M13 36V28L18 24L23 28V36H13Z"
            fill={inverted ? '#FFFDF7' : '#FFFFFF'}
          />
          <path
            d="M24 36V26L29 22L34 26V36H24Z"
            fill={inverted ? '#E6F2E9' : '#E6F2E9'}
            opacity="0.9"
          />
          {/* Rising Chart Growth Arrow */}
          <path
            d="M16 32L19 29L22 31L25 27"
            stroke="#0D52BA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!symbolOnly && (
        <div className="flex flex-col leading-none">
          {/* Brand Name with Official Dual-Tone: MILE in Royal Blue, SET in Golden Amber */}
          <span
            className={`font-black tracking-tight font-sans whitespace-nowrap ${textSize} ${
              inverted ? 'text-white' : 'text-[#173A5E]'
            }`}
          >
            <span className={inverted ? 'text-white' : 'text-[#0D52BA]'}>MILE</span>
            <span className="text-[#EAA023]">SET</span>
          </span>

          {/* — LIMITED — Subtitle with flanking accents matching the official logo */}
          <div className="flex items-center gap-1 mt-1">
            <span className="w-3 h-[1.5px] bg-[#EAA023]" />
            <span
              className={`font-extrabold uppercase tracking-[0.22em] ${subSize} ${
                inverted ? 'text-slate-200' : 'text-[#173A5E]'
              }`}
            >
              LIMITED
            </span>
            <span className="w-3 h-[1.5px] bg-[#EAA023]" />
          </div>
        </div>
      )}
    </div>
  );
};
