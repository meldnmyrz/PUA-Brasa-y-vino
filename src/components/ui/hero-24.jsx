import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Flame, Wine, ShieldCheck } from 'lucide-react';
import GlowingFilaments from './glowing-filaments';

export default function Hero24({
  badgeText = "★ PÚA BRASA Y VINO // POLANCO",
  title = "EL ARTE DE LA BRASA",
  subtitle = "y el vino",
  description = "Una experiencia gastronómica de fuego, tierra y tiempo en el corazón de la alta cocina. Descubre nuestra propuesta maridada con los mejores viñedos del mundo.",
  primaryCtaText = "Reservar Mesa VIP",
  primaryCtaLink = "/reservas",
  secondaryCtaText = "Explorar Carta & Cava",
  secondaryCtaLink = "/menu",
  videoSrc = "/assets/pua-head-of.mp4",
  stats = [
    { label: "Cortes Prime", val: "A las brasas" },
    { label: "Cava Seleccionada", val: "+500 Etiquetas" },
    { label: "Experiencia VIP", val: "Sommelier en mesa" }
  ]
}) {
  return (
    <div className="relative rounded-[28px] overflow-hidden border border-[#2c2c2e] bg-[#090a0f] min-h-[600px] lg:min-h-[660px] flex flex-col justify-between shadow-2xl transition-all duration-500">
      
      {/* BACKGROUND GLOWING FILAMENTS CANVAS LAYER */}
      <GlowingFilaments 
        color="#C4924A" 
        secondaryColor="#E5C388" 
        filamentCount={16} 
        speed={0.007} 
      />

      {/* OPTIONAL BACKGROUND VIDEO LAYER (High Opacity for PUA 3D Emblem) */}
      {videoSrc && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-right lg:object-center opacity-85 filter brightness-110 contrast-105"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Left-to-Right gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 sm:via-[#000000]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50" />
        </div>
      )}

      {/* TOP BAR: BADGE & LIVE STATUS */}
      <div className="relative z-20 flex justify-between items-center p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 bg-[#171718]/90 backdrop-blur-md border border-[#C4924A]/40 px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] text-[#C4924A] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C4924A] animate-pulse" />
          <span>{badgeText}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#aaaaaa] bg-black/50 backdrop-blur-md border border-[#2c2c2e] px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>MESA DE AUTOR DISPONIBLE</span>
        </div>
      </div>

      {/* MIDDLE CONTENT: LEFT-ALIGNED HERO 24 TYPOGRAPHY & BUTTONS */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN (Left-aligned hero content) */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          {/* Main Title & Script Subtitle */}
          <div className="space-y-1">
            <h1 className="font-serif-lujo text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[0.95] uppercase drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]">
              {title}
            </h1>
            {subtitle && (
              <div className="font-script-lujo text-3xl sm:text-5xl lg:text-6xl text-[#C4924A] tracking-normal py-1 block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] -mt-2">
                {subtitle}
              </div>
            )}
          </div>

          {/* Subtitle / Description */}
          <p className="font-sans text-xs sm:text-sm text-[#dddddd] max-w-xl leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {description}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              to={primaryCtaLink} 
              className="bg-[#C4924A] hover:bg-[#E5C388] text-black font-sans font-semibold text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(196,146,74,0.4)] flex items-center gap-2.5 transform hover:scale-105"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </Link>
            
            <Link 
              to={secondaryCtaLink} 
              className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-[#C4924A]/40 hover:border-[#C4924A] font-sans text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Wine className="w-4 h-4 text-[#C4924A]" />
              <span>{secondaryCtaText}</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN (Visual focus on Video 3D Pua Logo) */}
        <div className="hidden lg:block lg:col-span-4 relative h-64 pointer-events-none" />

      </div>

      {/* BOTTOM STATS & HIGHLIGHT BAR */}
      <div className="relative z-20 px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 bg-black/60 backdrop-blur-md">
        
        {/* STATS ITEMS */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full sm:w-auto">
          {stats.map((st, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-serif-lujo text-sm sm:text-base text-white font-bold tracking-wide">
                {st.val}
              </div>
              <div className="font-sans text-[10px] sm:text-xs text-[#999999] uppercase tracking-wider">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* LUXURY BADGE CHIP */}
        <div className="flex items-center gap-3 bg-[#171718]/90 backdrop-blur-xl border border-[#C4924A]/30 p-2.5 px-4 rounded-[16px] shadow-xl">
          <Flame className="w-4 h-4 text-[#C4924A]" />
          <span className="text-white text-xs font-sans font-medium">Cocina de Brasa a la Leña de Encino</span>
        </div>

      </div>

    </div>
  );
}
