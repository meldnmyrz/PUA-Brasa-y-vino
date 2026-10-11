import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, Utensils } from 'lucide-react';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Menú Digital — Carta Oficial";
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sf-pro-text flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
      
      <div className="max-w-xl w-full mx-auto space-y-8 animate-fadeIn">
        
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <Utensils className="w-3.5 h-3.5 text-[#c49a4a]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#c49a4a] font-semibold">
            CARTA DIGITAL OFICIAL
          </span>
        </div>

        {/* HEADINGS */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-sf-pro-display font-semibold tracking-[-0.03em] text-white">
            MENÚ GASTRONÓMICO & CAVA
          </h1>
          <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed max-w-md mx-auto">
            Explora nuestra carta digital completa con cortes Angus Prime a las brasas de encino, maridajes de autor y mixología contemporánea.
          </p>
        </div>

        {/* PRIMARY CTA BUTTON */}
        <div className="pt-2 flex flex-col items-center gap-4">
          <a
            href="https://menu-pua.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple-blue inline-flex items-center justify-center gap-3 !py-4.5 !px-10 text-sm font-semibold rounded-full shadow-[0_4px_30px_rgba(0,113,227,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4" />
            <span>Abrir Menú Digital Oficial</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <Link
            to="/reservas"
            className="btn-white-outline !py-3.5 !px-8 !text-xs bg-white/[0.04] border-white/20 hover:bg-white/[0.1] text-white rounded-full w-full sm:w-auto"
          >
            <span>Reservar Mesa VIP</span>
          </Link>
        </div>

        {/* REDIRECT NOTICE */}
        <p className="text-[11px] text-[#6e6e73] font-mono">
          Plataforma oficial: <span className="text-[#c49a4a]">menu-pua.vercel.app</span>
        </p>

        <div className="pt-4">
          <Link to="/" className="inline-product-link text-xs font-semibold text-[#86868b] hover:text-white transition-colors">
            ← Volver al Inicio
          </Link>
        </div>

      </div>

    </div>
  );
}
