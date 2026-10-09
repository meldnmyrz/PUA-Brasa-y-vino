import React from 'react';

/**
 * PuaLogo Component
 * Renders the official PÚA logo photo from MATERIAL PUA (PUA LOGO.jpeg).
 *
 * @param {Object} props
 * @param {string} [props.size='medium'] - 'small' | 'medium' | 'large'
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.showSubtitle=true] - Display "BRASA Y VINO" subtitle
 */
export default function PuaLogo({ size = 'medium', className = '', showSubtitle = true }) {
  const heightMap = {
    small: 'h-10 sm:h-12',
    medium: 'h-14 sm:h-16',
    large: 'h-20 sm:h-24'
  };

  const currentHeightClass = heightMap[size] || heightMap.medium;

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official PÚA Logo Image from MATERIAL PUA */}
      <img
        src="/assets/PUA LOGO.jpeg"
        alt="PÚA Brasa y Vino"
        className={`${currentHeightClass} w-auto object-contain rounded-lg border border-[#C4924A]/40 shadow-lg group-hover:border-[#C4924A] transition-all duration-300`}
      />

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <span className="font-condensed-bold text-lg sm:text-xl text-[#F4F0EA] tracking-wider leading-none uppercase group-hover:text-[#C4924A] transition-colors">
            PÚA
          </span>
          <span className="font-condensed-bold text-[10px] sm:text-xs text-[#C4924A] tracking-[0.25em] leading-tight uppercase opacity-90">
            BRASA Y VINO
          </span>
        </div>
      )}
    </div>
  );
}
