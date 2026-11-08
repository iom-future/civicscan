import React from 'react';
import SectionLabel from '../ui/SectionLabel';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`${
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <SectionLabel dark={dark}>{eyebrow}</SectionLabel>
        </div>
      )}
      <h2
        className={`font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.14] ${
          dark ? 'text-white' : 'text-[#142235]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg sm:leading-[1.65] ${
            dark ? 'text-slate-300' : 'text-[#68788D]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

