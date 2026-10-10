import React from 'react';

/**
 * PuaLogo Component
 * Renders the official PÚA Brasa y Vino logo with transparent background.
 *
 * @param {Object} props
 * @param {string} [props.size='small'] - 'small' | 'medium' | 'large'
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function PuaLogo({ size = 'small', className = '' }) {
  const heightMap = {
    small: 'h-8 sm:h-9',
    medium: 'h-11 sm:h-12',
    large: 'h-16 sm:h-20'
  };

  const currentHeightClass = heightMap[size] || heightMap.small;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img 
        src="/pua-logo-transparent.png" 
        alt="PÚA Brasa y Vino" 
        className={`${currentHeightClass} w-auto object-contain filter brightness-120 drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]`}
      />
    </div>
  );
}
