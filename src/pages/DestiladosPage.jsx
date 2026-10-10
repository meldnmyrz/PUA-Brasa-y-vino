import React, { useEffect } from 'react';
import { Wine, Sparkles, GlassWater, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import DestiladosTable from '../components/DestiladosTable';

export default function DestiladosPage({ onAddToCart }) {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Cava & Destilados VIP";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#050505] text-[#f5f7f5] font-jakarta text-left">
      
      {/* BREADCRUMBS BAR */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-8">
        <nav className="flex items-center gap-2 text-xs font-mono text-[#848a96]">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c89f53] font-semibold">Cava & Destilados</span>
        </nav>
      </div>

      {/* HEADER */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-10">
        <div className="card-lujo-obsidian p-8 sm:p-12 border border-[#232730] space-y-4 rounded-[24px] bg-[#0b0e14] relative overflow-hidden">
          <div className="badge-amber-tag">
            ★ CAVA DE AUTOR & DESTILADOS VIP ★
          </div>
          
          <h1 className="text-section-title text-white font-garamond">
            TABLA DE DESTILADOS & COPA VS BOTELLA
          </h1>

          <p className="font-jakarta text-sm sm:text-base text-[#d4d3c9] max-w-2xl leading-relaxed font-light">
            Explora nuestra cava de más de 500 etiquetas internacionales y destilados premium. Consulta precios por copa individual o botella completa para tu mesa.
          </p>
        </div>
      </div>

      {/* DESTILADOS TABLE */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12">
        <DestiladosTable onAddToCart={onAddToCart} />
      </div>

    </div>
  );
}
