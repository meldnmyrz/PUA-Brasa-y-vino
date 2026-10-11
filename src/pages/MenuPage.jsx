import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Flame, Wine, Sparkles, BookOpen } from 'lucide-react';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Menú Digital — Carta Oficial";
  }, []);

  const handleOpenMenu = () => {
    window.open("https://menu-pua.vercel.app/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 pb-32 min-h-screen bg-[#000000] text-[#f5f5f7] font-sf-pro-text relative overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
      
      {/* AMBIENT RADIAL GLOW */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #c49a4a 0%, #ff791b 40%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-8 animate-fadeIn">
        
        {/* SUBTLE PILL BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#c49a4a]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#c49a4a] font-semibold">
            CARTA GASTRONÓMICA OFICIAL
          </span>
        </div>

        {/* MAIN HEADINGS */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-sf-pro-display font-semibold tracking-[-0.03em] text-white">
            EL MENÚ DIGITAL. <br />
            <span className="text-[#86868b]">FUEGO DE ENCINO & CAVA VIP.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a1a1a6] max-w-xl mx-auto leading-relaxed">
            Explora nuestra carta digital completa con cortes Angus Prime madurados en seco, especialidades de brasa directa, maridajes de autor y coctelería contemporánea.
          </p>
        </div>

        {/* INTERACTIVE PREVIEW CARD */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] max-w-xl mx-auto space-y-6">
          
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl overflow-hidden h-24 border border-white/10 bg-[#111111]">
              <img 
                src="/assets/corte-filete-mignon.jpg" 
                alt="Cortes Prime" 
                className="w-full h-full object-cover filter brightness-90 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-24 border border-white/10 bg-[#111111]">
              <img 
                src="/assets/tuetanos-carne-brasas.jpg" 
                alt="Tuétanos a la Leña" 
                className="w-full h-full object-cover filter brightness-90 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-24 border border-white/10 bg-[#111111]">
              <img 
                src="/assets/mixologia-flameada-bar.jpg" 
                alt="Mixología Flameada" 
                className="w-full h-full object-cover filter brightness-90 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* PRIMARY REDIRECT BUTTON */}
            <a
              href="https://menu-pua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-blue !py-4 !px-8 !text-sm font-semibold w-full sm:w-auto shadow-[0_4px_24px_rgba(0,113,227,0.5)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <BookOpen className="w-4 h-4" />
              <span>Abrir Menú Digital Oficial</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* SECONDARY RESERVATION BUTTON */}
            <Link
              to="/reservas"
              className="btn-white-outline !py-4 !px-6 !text-xs bg-white/[0.04] border-white/20 hover:bg-white/[0.1] text-white w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Reservar Mesa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-[11px] text-[#6e6e73] font-mono">
            Redirección directa a: <span className="text-[#c49a4a]">menu-pua.vercel.app</span>
          </p>

        </div>

        {/* BOTTOM QUICK LINK TO RETURN HOME */}
        <div className="pt-4">
          <Link to="/" className="inline-product-link text-xs font-semibold text-[#86868b] hover:text-white transition-colors">
            ← Volver a la página de inicio
          </Link>
        </div>

      </div>

    </div>
  );
}
