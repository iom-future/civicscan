import React from 'react';

export default function SectionLabel({ children, dark = false, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase ${
        dark ? 'text-[#55D3BD]' : 'text-[#3978E8]'
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-none ${
          dark ? 'bg-[#55D3BD]' : 'bg-[#3978E8]'
        }`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}

