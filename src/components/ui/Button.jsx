import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2 disabled:opacity-55 disabled:pointer-events-none cursor-pointer select-none rounded-md';

  const variants = {
    primary:
      'bg-[#3978E8] text-white hover:bg-[#2963CE] active:bg-[#1E52B3] shadow-xs',
    navy:
      'bg-[#101C2C] text-white hover:bg-[#1A2D45] active:bg-[#101C2C] border border-[#22354E]',
    secondary:
      'bg-white text-[#142235] border border-slate-300 hover:border-[#142235] hover:bg-[#F4F7FA] active:bg-slate-100',
    outlineDark:
      'bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/5 active:bg-white/10',
    teal:
      'bg-[#55D3BD] text-[#101C2C] font-semibold hover:bg-[#43C2AC] active:bg-[#36B09B]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-sm sm:text-base',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`group ${combinedClasses}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </button>
  );
}

