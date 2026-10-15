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
  size = 'md'
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Distinctive M-inspired Symbol */}
      <div
        className={`${iconDimensions} shrink-0 rounded-lg flex items-center justify-center transition-transform hover:scale-105 duration-200 shadow-sm ${
          inverted
            ? 'bg-[#FFFDF7] text-[#315D4B]'
            : 'bg-[#315D4B] text-[#FFFDF7]'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Architectural Modern 'M' Motif */}
          <path
            d="M7 27V9L14.5 20.5L18 15L21.5 20.5L29 9V27H24.5V16.5L19.8 23.8H16.2L11.5 16.5V27H7Z"
            fill="currentColor"
          />
          {/* Subtle Golden Horizon Accent Point */}
          <circle
            cx="28"
            cy="27"
            r="2"
            fill={inverted ? '#315D4B' : '#F5EBD7'}
          />
        </svg>
      </div>

      {!symbolOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight font-sans whitespace-nowrap ${textSize} ${
              inverted ? 'text-white' : 'text-[#173A5E]'
            }`}
          >
            MILESET <span className={inverted ? 'text-[#E6F2E9]' : 'text-[#315D4B]'}>LIMITED</span>
          </span>
          <span
            className={`text-[9.5px] uppercase tracking-[0.16em] font-medium mt-1 ${
              inverted ? 'text-slate-300' : 'text-[#64748B]'
            }`}
          >
            Connecting Opportunities
          </span>
        </div>
      )}
    </div>
  );
};
