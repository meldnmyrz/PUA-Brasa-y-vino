import React, { useState } from 'react';
import { Sun, Flame, Wine, Sparkles, Clock, ChevronRight } from 'lucide-react';

export default function Hero31SunArc({ onAtmosphereChange }) {
  const [activeHourIndex, setActiveHourIndex] = useState(0);

  const atmospheres = [
    {
      id: '14:00',
      time: '14:00 HRS',
      title: 'Fuego de Brasas & Cortes Prime',
      tagline: 'Cortes Angus madurados a la leña de encino',
      accentColor: '#c89f53',
      bgGlow: 'rgba(200, 159, 83, 0.25)',
      icon: Flame,
      quote: '"La paciencia del fuego de encino sella los jugos del Ribeye a 600°C."'
    },
    {
      id: '19:00',
      time: '19:00 HRS',
      title: 'Atardecer, Cava & Sommelier',
      tagline: 'Maridajes icónicos y cosechas seleccionadas',
      accentColor: '#987232',
      bgGlow: 'rgba(152, 114, 50, 0.3)',
      icon: Wine,
      quote: '"Más de 500 etiquetas internacionales recomendadas por nuestros sommeliers."'
    },
    {
      id: '22:00',
      time: '22:00 HRS',
      title: 'Mixología Nocturna & Coba',
      tagline: 'Ahumados rituales en mesa y destilados de autor',
      accentColor: '#a3e6b4',
      bgGlow: 'rgba(30, 53, 36, 0.4)',
      icon: Sparkles,
      quote: '"Coctelería sensorial con botanismos frescos y ahumados de madera sagrada."'
    }
  ];

  const handleSelect = (index) => {
    setActiveHourIndex(index);
    if (onAtmosphereChange) {
      onAtmosphereChange(atmospheres[index]);
    }
  };

  const currentAtmosphere = atmospheres[activeHourIndex];
  const IconComp = currentAtmosphere.icon;

  return (
    <div className="relative max-w-3xl mx-auto my-8 p-6 rounded-[24px] bg-[#0b0e14]/90 border border-[#232730] backdrop-blur-2xl shadow-2xl text-left space-y-6">
      
      {/* HEADER & TIME INDICATOR */}
      <div className="flex items-center justify-between border-b border-[#232730] pb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500"
            style={{ 
              backgroundColor: currentAtmosphere.bgGlow, 
              borderColor: currentAtmosphere.accentColor,
              color: currentAtmosphere.accentColor 
            }}
          >
            <IconComp className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#848a96] uppercase tracking-wider block">
              HERO 31 // CELESTIAL TIME-LAPSE ARC
            </span>
            <span className="font-garamond text-xl text-white font-semibold">
              {currentAtmosphere.title}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#12141a] border border-[#232730] px-3 py-1.5 rounded-full text-xs font-mono text-[#c89f53]">
          <Clock className="w-3.5 h-3.5" />
          <span>{currentAtmosphere.time}</span>
        </div>
      </div>

      {/* INTERACTIVE SUN & EMBER TIME ARC SLIDER */}
      <div className="relative py-4">
        {/* SVG Arc curve line */}
        <svg className="w-full h-16 overflow-visible" viewBox="0 0 400 60">
          <path
            d="M 20,50 Q 200,-10 380,50"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          {/* Active arc gradient highlight */}
          <path
            d="M 20,50 Q 200,-10 380,50"
            fill="none"
            stroke={currentAtmosphere.accentColor}
            strokeWidth="3"
            strokeDasharray="400"
            strokeDashoffset={380 - (activeHourIndex * 190)}
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* 3 Clickable Celestial Hour Nodes */}
        <div className="absolute inset-x-0 top-0 flex justify-between items-center px-4">
          {atmospheres.map((atm, idx) => {
            const isSelected = activeHourIndex === idx;
            return (
              <button
                key={atm.id}
                onClick={() => handleSelect(idx)}
                className={`relative group flex flex-col items-center gap-2 transition-all transform duration-300 focus:outline-none ${
                  isSelected ? 'scale-110' : 'hover:scale-105 opacity-70'
                }`}
              >
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-500 shadow-xl ${
                    isSelected ? 'ring-4 ring-[#c89f53]/30' : ''
                  }`}
                  style={{
                    backgroundColor: isSelected ? atm.accentColor : '#12141a',
                    borderColor: isSelected ? '#ffffff' : '#232730',
                    color: isSelected ? '#000000' : '#d4d3c9'
                  }}
                >
                  <Sun className={`w-4 h-4 ${isSelected ? 'animate-spin-slow' : ''}`} />
                </div>
                <span className={`text-[11px] font-mono tracking-wider uppercase font-bold ${
                  isSelected ? 'text-[#c89f53]' : 'text-[#848a96]'
                }`}>
                  {atm.time}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ATMOSPHERE QUOTE & HIGHLIGHT DETAILS */}
      <div className="p-4 rounded-xl bg-[#12141a] border border-[#232730] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-garamond italic text-sm text-[#d4d3c9] leading-relaxed">
          {currentAtmosphere.quote}
        </p>
        <span 
          className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md shrink-0"
          style={{ backgroundColor: 'rgba(200, 159, 83, 0.15)', color: currentAtmosphere.accentColor }}
        >
          {currentAtmosphere.tagline}
        </span>
      </div>

    </div>
  );
}
