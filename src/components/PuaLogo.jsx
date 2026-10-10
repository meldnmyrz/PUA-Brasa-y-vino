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
  const heightPx = size === 'large' ? 48 : size === 'medium' ? 38 : 30;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img 
        src="/pua-logo-transparent.png" 
        alt="PÚA Brasa y Vino" 
        style={{ height: `${heightPx}px`, maxHeight: `${heightPx}px`, width: 'auto' }}
        className="object-contain filter brightness-120 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
      />
    </div>
  );
}
