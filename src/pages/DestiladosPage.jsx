import React, { useEffect } from 'react';
import { Wine, Sparkles, GlassWater, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import DestiladosTable from '../components/DestiladosTable';
import ParticleConstellation from '../components/ParticleConstellation';

export default function DestiladosPage({ onAddToCart }) {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Cava & Destilados VIP";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#000000] text-[#ffffff] font-subtext-stellar text-left relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* BREADCRUMBS BAR */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-8 relative z-10">
        <nav className="flex items-center gap-2 text-xs font-mono text-[#888888]">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#C4924A] font-semibold">Cava & Destilados</span>
        </nav>
      </div>

      {/* HEADER */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-10 relative z-10">
        <div className="card-obsidian p-8 sm:p-12 border border-[#2c2c2e] space-y-4 rounded-[10px] bg-[#0d0e12] relative overflow-hidden">
          <div className="eyebrow-tag-pill">
            CAVA DE AUTOR & DESTILADOS VIP
          </div>
          
          <h1 className="font-display-stellar text-4xl sm:text-6xl text-white uppercase">
            TABLA DE DESTILADOS & COPA VS BOTELLA
          </h1>

          <p className="font-subtext-stellar text-sm sm:text-base text-[#888888] max-w-2xl leading-relaxed">
            Explora nuestra cava de más de 500 etiquetas internacionales y destilados premium. Consulta precios por copa individual o botella completa para tu mesa.
          </p>
        </div>
      </div>

      {/* DESTILADOS TABLE */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        <DestiladosTable onAddToCart={onAddToCart} />
      </div>

    </div>
  );
}
