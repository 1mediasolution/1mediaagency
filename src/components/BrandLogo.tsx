import React from 'react';

interface BrandLogoProps {
  variant?: 'color' | 'white' | 'dark';
  showTagline?: boolean;
  iconOnly?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandIcon: React.FC<{
  variant?: 'color' | 'white' | 'dark';
  className?: string;
  size?: number;
}> = ({ variant = 'color', className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="media1Gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="45%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Main triangular base with rounded corners */}
      <path
        d="M12 16 C12 7.5 21.5 2.5 28.5 7 L89.5 46.5 C96.5 51 96.5 61 89.5 65.5 L28.5 105 C21.5 109.5 12 104.5 12 96 Z"
        fill={
          variant === 'color'
            ? 'url(#media1Gradient)'
            : variant === 'white'
            ? '#FFFFFF'
            : '#0F172A'
        }
      />

      {/* Negative space stylized "1" cut-out */}
      <path
        d="M -2 86 L 42 42 L 48 29 L 48 88 L 42 88 L 42 43 L 3 86 Z"
        fill={variant === 'white' ? '#0F172A' : '#FFFFFF'}
      />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'color',
  showTagline = true,
  iconOnly = false,
  className = '',
  size = 'md',
}) => {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 44 : 32;
  const mainTextSize =
    size === 'sm'
      ? 'text-base tracking-tight'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl tracking-tight'
      : 'text-xl sm:text-[22px] tracking-tight';

  const taglineSize =
    size === 'sm'
      ? 'text-[8px] tracking-[0.24em]'
      : size === 'lg'
      ? 'text-[11px] tracking-[0.32em]'
      : 'text-[9.5px] tracking-[0.28em]';

  const textColor =
    variant === 'white' ? 'text-white' : 'text-slate-950 font-extrabold';
  const tagColor =
    variant === 'white' ? 'text-slate-300' : 'text-slate-800 font-medium';

  if (iconOnly) {
    return <BrandIcon variant={variant} size={iconSize} className={className} />;
  }

  return (
    <div className={`inline-flex flex-col select-none font-sans ${className}`}>
      <div className={`flex items-center gap-1.5 font-bold leading-none ${textColor} ${mainTextSize} tracking-tight`}>
        <span className="font-extrabold tracking-tight">1 ME</span>
        <BrandIcon variant={variant} size={iconSize} className="-mx-0.5" />
        <span className="font-extrabold tracking-tight">IA SOLUTION</span>
      </div>

      {showTagline && (
        <span
          className={`uppercase font-sans mt-1.5 font-medium ${taglineSize} ${tagColor} transition-colors`}
        >
          Crafting Digital Brilliance
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
