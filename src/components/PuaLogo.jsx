import React from 'react';

/**
 * PuaLogo Component
 * Renders the official PÚA logo mark and title cleanly fitted for navigation & header bars.
 */
export default function PuaLogo({ size = 'small', className = '' }) {
  const logoHeights = {
    small: 'h-9 sm:h-10',
    medium: 'h-12 sm:h-14',
    large: 'h-16 sm:h-20'
  };

  const currentHeight = logoHeights[size] || logoHeights.small;

  return (
    <div className={`inline-flex items-center gap-3 select-none shrink-0 cursor-pointer ${className}`}>
      {/* Official Logo Image / Framed Mark */}
      <img
        src="/assets/PUA LOGO.jpeg"
        alt="PÚA Brasa y Vino"
        className={`${currentHeight} w-auto object-contain rounded-md border border-[#C4924A]/70 shadow-lg transition-all duration-300 hover:border-[#C4924A] hover:scale-105`}
      />
    </div>
  );
}
