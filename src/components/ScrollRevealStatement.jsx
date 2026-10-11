import React from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScrollRevealStatement() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-20 sm:py-28 px-6 sm:px-12 md:px-16 overflow-hidden text-center z-10 border-t border-b border-white/5">
      {/* AMBIENT RADIAL EMBER GLOW */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #c49a4a 0%, #ff791b 35%, transparent 70%)' }}
      />

      {/* WATERMARK LOGO BEHIND TEXT ("púa BRASA Y VINO") */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-10">
        <span className="text-[26vw] sm:text-[18vw] font-bold tracking-tight text-white font-sf-pro-display lowercase leading-none">
          púa
        </span>
        <span className="text-[4vw] sm:text-[2.2vw] tracking-[0.45em] text-[#c49a4a] uppercase font-mono font-semibold -mt-2 sm:-mt-4">
          BRASA Y VINO
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* EYEBROW BADGE */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#c49a4a]/40 text-[#c49a4a] text-xs font-mono uppercase tracking-widest shadow-sm">
          <Flame className="w-3.5 h-3.5 text-[#c49a4a]" />
          <span>ALTA GASTRONOMÍA AL FUEGO</span>
        </div>

        {/* MAIN IMPACT STATEMENT - ILLUMINATED AND HIGH CONTRAST */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-sf-pro-display font-semibold tracking-[-0.02em] leading-[1.3] sm:leading-[1.25] text-center text-[#f5f5f7]">
          Explora nuestra propuesta gastronómica, la{' '}
          <span className="text-[#c49a4a] font-bold">intensidad de la brasa</span>, cortes de{' '}
          <span className="text-white font-bold underline decoration-[#c49a4a]/50 underline-offset-4">alta gama</span> y{' '}
          <span className="text-[#c49a4a] font-bold">vinos excepcionales</span>.
        </h2>

        {/* SUBTITLE */}
        <p className="text-sm sm:text-base text-[#d4d3c9] max-w-2xl leading-relaxed">
          Cada preparación es un tributo al fuego de encino a 600°C, las maduraciones pacientes de 45 días y una curaduría vitivinícola internacional de más de 500 etiquetas.
        </p>

        {/* CTA BUTTON */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="btn-gold-luxury inline-flex items-center gap-2 !py-3 !px-7 text-xs sm:text-sm font-semibold rounded-full shadow-[0_4px_24px_rgba(196,146,74,0.3)] hover:scale-[1.03] transition-transform"
          >
            <span>Explorar La Carta</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link
            to="/reservas"
            className="btn-white-outline inline-flex items-center gap-2 !py-3 !px-7 text-xs sm:text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            <span>Reservar Mesa</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
