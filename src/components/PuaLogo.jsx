import React from 'react';

/**
 * PuaLogo Component
 * Renders the official PÚA logo photo cleanly fitted inside the navigation & layout headers.
 *
 * @param {Object} props
 * @param {string} [props.size='small'] - 'small' | 'medium' | 'large'
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.showSubtitle=false] - Display extra text subtitle
 */
export default function PuaLogo({ size = 'small', className = '', showSubtitle = false }) {
  const sizeClasses = {
    small: 'h-8 sm:h-10 max-h-10 max-w-[130px]',
    medium: 'h-12 sm:h-14 max-h-14 max-w-[170px]',
    large: 'h-16 sm:h-20 max-h-20 max-w-[220px]'
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.small;

  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 ${className}`}>
      <img
        src="/assets/PUA LOGO.jpeg"
        alt="PÚA Brasa y Vino"
        className={`${currentSizeClass} w-auto object-contain rounded-md border border-[#C4924A]/40 shadow-md transition-all duration-300 hover:border-[#C4924A]`}
      />

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <span className="font-condensed-bold text-sm sm:text-base text-[#F4F0EA] tracking-wider leading-none uppercase">
            PÚA
          </span>
          <span className="font-condensed-bold text-[9px] sm:text-[10px] text-[#C4924A] tracking-[0.2em] leading-tight uppercase opacity-90">
            BRASA Y VINO
          </span>
        </div>
      )}
    </div>
  );
}
