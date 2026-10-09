import React from 'react';

/**
 * PuaLogo Component
 * Renders the official minimalist vector PÚA Brasa y Vino emblem.
 *
 * @param {Object} props
 * @param {string} [props.color='#C4924A'] - Primary stroke color
 * @param {string} [props.size='medium'] - 'small' | 'medium' | 'large'
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function PuaLogo({ color = '#C4924A', size = 'small', className = '' }) {
  const heightMap = {
    small: '32px',
    medium: '44px',
    large: '60px'
  };

  const currentHeight = heightMap[size] || heightMap.small;

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none cursor-pointer ${className}`}>
      <svg 
        viewBox="0 0 200 65" 
        style={{ height: currentHeight, width: 'auto' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimalist Rounded PÚA Logo Vector */}
        <g stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Letter 'p' */}
          <path d="M 32 12 V 52 M 32 20 C 44 20 54 26 54 36 C 54 46 44 52 32 52" />
          
          {/* Letter 'u' curve */}
          <path d="M 72 20 V 40 C 72 48 80 52 92 52 C 104 52 112 48 112 40 V 20 M 112 36 V 52" />
          
          {/* Letter 'a' */}
          <path d="M 160 20 C 146 20 134 28 134 38 C 134 48 146 52 160 52 C 168 52 172 48 172 44 V 20 M 172 32 V 52" />
        </g>
      </svg>
      <span 
        style={{ color: color, letterSpacing: '0.4em' }} 
        className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] -mt-1 opacity-90 pl-1"
      >
        BRASA Y VINO
      </span>
    </div>
  );
}
