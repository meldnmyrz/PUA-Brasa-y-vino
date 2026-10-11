import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * About10 Component (React Bits Pro Specification)
 * Portrait collage around a brand statement
 * Adapted for PÚA Brasa y Vino with dark Apple-luxe design tokens
 */
export default function About10() {
  const portraits = [
    {
      id: 'grill',
      title: 'Maestro Parrillero',
      subtitle: 'Fuego directo a 600°C con encino',
      image: '/assets/parrillada-brasas.jpg',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-3',
      position: 'top-left'
    },
    {
      id: 'cava',
      title: 'Cava & Sommelier',
      subtitle: '+500 etiquetas internacionales',
      image: '/assets/cava-vino-mesa.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      position: 'top-right'
    },
    {
      id: 'corte',
      title: 'Cámara de Maduración',
      subtitle: '45 días de concentración y ternura',
      image: '/assets/corte-filete-mignon.jpg',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-3',
      position: 'bottom-left'
    },
    {
      id: 'coctel',
      title: 'Coctelería de Autor',
      subtitle: 'Ahumados botánicos y destilados finos',
      image: '/assets/coctel-negroni-rojo.jpg',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-3',
      position: 'bottom-right'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 my-28 z-10 relative text-left">
      
      {/* SECTION HEADER */}
      <div className="mb-14">
        <span className="text-xs font-semibold text-[#c49a4a] tracking-widest uppercase font-mono block mb-2">
          MANIFESTO & IDENTIDAD
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#f8f9fa] font-sf-pro-display">
          EL RITUAL QUE DEFINE CADA MESA.
        </h2>
      </div>

      {/* PORTRAIT COLLAGE WRAPPING AROUND BRAND STATEMENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* PORTRAIT 1 (LEFT TOP) */}
        <div className="lg:col-span-3 group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 bg-[#0d0d0e]">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={portraits[0].image} 
              alt={portraits[0].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] font-mono text-[#c49a4a] uppercase tracking-wider block font-semibold">
              {portraits[0].title}
            </span>
            <p className="text-xs text-[#c4c2b9] font-light mt-0.5">
              {portraits[0].subtitle}
            </p>
          </div>
        </div>

        {/* CENTRAL BRAND STATEMENT (THE CORE PROCLAMATION) */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 text-center space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c49a4a] font-semibold block">
            PÚA BRASA Y VINO — POLANCO
          </span>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-sf-pro-display leading-[1.25]">
            “El fuego exige paciencia, la maduración otorga nobleza, y la cava conserva la memoria.”
          </blockquote>

          <p className="text-sm sm:text-base text-[#c4c2b9] leading-relaxed max-w-lg mx-auto font-light">
            No concebimos atajos ni fuegos apresurados. Cada corte Prime madurado en seco y cada etiqueta descorchada responden al mismo principio: devoción absoluta por el ritual de la brasa.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/reservas" 
              className="py-3 px-6 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all shadow-lg"
            >
              <span>Vivir la Experiencia VIP</span>
            </Link>
            <a 
              href="https://menu-pua.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full text-xs font-semibold bg-transparent hover:bg-white/5 border border-white/10 text-[#c4c2b9] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Ver Nuestra Cava & Cortes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* PORTRAIT 2 (RIGHT TOP) */}
        <div className="lg:col-span-3 group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 bg-[#0d0d0e]">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={portraits[1].image} 
              alt={portraits[1].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] font-mono text-[#c49a4a] uppercase tracking-wider block font-semibold">
              {portraits[1].title}
            </span>
            <p className="text-xs text-[#c4c2b9] font-light mt-0.5">
              {portraits[1].subtitle}
            </p>
          </div>
        </div>

        {/* PORTRAIT 3 (LEFT BOTTOM) */}
        <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 bg-[#0d0d0e]">
          <div className="h-64 sm:h-72 overflow-hidden">
            <img 
              src={portraits[2].image} 
              alt={portraits[2].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span className="text-xs font-mono text-[#c49a4a] uppercase tracking-wider block font-semibold">
              {portraits[2].title}
            </span>
            <p className="text-sm text-[#f8f9fa] font-medium mt-1">
              {portraits[2].subtitle}
            </p>
          </div>
        </div>

        {/* PORTRAIT 4 (RIGHT BOTTOM) */}
        <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 bg-[#0d0d0e]">
          <div className="h-64 sm:h-72 overflow-hidden">
            <img 
              src={portraits[3].image} 
              alt={portraits[3].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span className="text-xs font-mono text-[#c49a4a] uppercase tracking-wider block font-semibold">
              {portraits[3].title}
            </span>
            <p className="text-sm text-[#f8f9fa] font-medium mt-1">
              {portraits[3].subtitle}
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
