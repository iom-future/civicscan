import React from 'react';

export default function CivicScanLogo({
  variant = 'dark',
  className = '',
  showText = true,
}) {
  const isLightText = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect
          width="36"
          height="36"
          rx="6"
          fill={isLightText ? '#16263B' : '#101C2C'}
          stroke={isLightText ? '#2A405E' : '#101C2C'}
          strokeWidth="1"
        />
        {/* Corner observation brackets */}
        <path
          d="M9.5 14V11C9.5 10.1716 10.1716 9.5 11 9.5H14"
          stroke="#3978E8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 9.5H25C25.8284 9.5 26.5 10.1716 26.5 11V14"
          stroke="#3978E8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26.5 22V25C26.5 25.8284 25.8284 26.5 25 26.5H22"
          stroke="#3978E8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 26.5H11C10.1716 26.5 9.5 25.8284 9.5 25V22"
          stroke="#3978E8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Urban road intersection crosshairs */}
        <line
          x1="18"
          y1="8.5"
          x2="18"
          y2="14"
          stroke="#6B9CFF"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="22"
          x2="18"
          y2="27.5"
          stroke="#6B9CFF"
          strokeWidth="1.5"
        />
        <line
          x1="8.5"
          y1="18"
          x2="14"
          y2="18"
          stroke="#6B9CFF"
          strokeWidth="1.5"
        />
        <line
          x1="22"
          y1="18"
          x2="27.5"
          y2="18"
          stroke="#6B9CFF"
          strokeWidth="1.5"
        />
        {/* Central geolocation & AI node */}
        <circle cx="18" cy="18" r="3.75" fill="#55D3BD" />
        <circle cx="18" cy="18" r="1.4" fill="#101C2C" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading text-lg font-bold tracking-tight leading-none ${
              isLightText ? 'text-white' : 'text-[#101C2C]'
            }`}
          >
            Civic<span className="text-[#3978E8]">Scan</span>
          </span>
          <span
            className={`mt-0.5 font-mono text-[9px] tracking-[0.16em] uppercase ${
              isLightText ? 'text-slate-400' : 'text-[#68788D]'
            }`}
          >
            Urban Intelligence
          </span>
        </div>
      )}
    </div>
  );
}

