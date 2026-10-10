import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight
} from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Sabores de Brasa & Cava";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const signatureDishes = menuItems.filter(item => item.badge).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#F4F0EA] overflow-hidden font-sans">
      
      {/* 01 FULL-BLEED HERO PLATE — USING EXACT TYPOGRAPHY & STYLES FROM PHOTO 1 (NOSOTROS PAGE) */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-28 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        
        {/* Full-bleed background video plate */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85 filter brightness-105 contrast-105"
          >
            <source src="/assets/pua-head-of.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay for crystal clear text reading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/50 to-transparent pointer-events-none" />
        </div>

        {/* BOTTOM-LEFT OVERLAY CONTENT — EXACT FONTS FROM PHOTO 1 */}
        <div className="relative z-10 max-w-4xl space-y-6 text-left">
          
          {/* EYEBROW TAG PILL (PHOTO 1 FONT STYLE) */}
          <div className="inline-flex items-center gap-2 bg-[#171718]/90 border border-[#C4924A]/40 px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.25em] text-[#C4924A] shadow-md">
            <span>★ PÚA BRASA Y VINO — POLANCO, CDMX ★</span>
          </div>

          {/* DISPLAY HEADLINE (PHOTO 1 CORMORANT GARAMOND ELEGANT SERIF SIGNATURE) */}
          <h1 className="font-display-stellar text-5xl sm:text-7xl md:text-8xl text-white tracking-tight uppercase leading-[0.95] drop-shadow-2xl">
            EL ARTE DE LA BRASA Y EL VINO
          </h1>

          {/* SUBTEXT PARAGRAPH (PHOTO 1 INTER SANS-SERIF CLEAN STYLE) */}
          <p className="font-subtext-stellar text-sm sm:text-base text-[#dddddd] max-w-2xl leading-relaxed font-light drop-shadow-md">
            Una cocina de autor inspirada en la gastronomía mediterránea y las brasas de encino. Maduraciones artesanales, maridajes de cava internacional y mixología de humo en mesa.
          </p>

          {/* ACTION BUTTONS (PHOTO 1 LUXURY GOLD CTA + GHOST BORDER) */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-gold-luxury"
            >
              <span>RESERVAR MESA DE AUTOR</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </Link>
            
            <Link 
              to="/menu" 
              className="btn-ghost-border !border-white/40 text-white hover:!border-[#C4924A] hover:text-[#C4924A]"
            >
              <span>EXPLORAR CARTA COMPLETA</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 02 EDITORIAL SECTION BAND 1 — GOLD & BRASA SHOWCASE */}
      <section className="bg-[#12141a] text-[#F4F0EA] py-24 border-y border-[#2c2c2e]">
        <div className="max-w-[1200px] mx-auto text-center space-y-6 px-4">
          
          <div className="eyebrow-tag-pill mx-auto">SELECCIÓN DE BRASAS & MARIDAJE</div>

          <h2 className="font-display-stellar text-3xl sm:text-6xl text-white uppercase max-w-4xl mx-auto leading-tight">
            CORTES PRIME SELECCIONADOS A LA LEÑA DE ENCINO Y CAVA DE 500 ETIQUETAS
          </h2>

          <p className="font-subtext-stellar text-base text-[#888888] max-w-xl mx-auto leading-relaxed">
            Cada pieza se asa con fuego de madera seleccionada y sales artesanales. Una experiencia pensada para compartirse con los mejores tintos y blancos del mundo.
          </p>

          <div className="pt-4">
            <Link 
              to="/nosotros" 
              className="btn-gold-luxury"
            >
              <span>CONOCER NUESTRA HISTORIA</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>

        </div>
      </section>

      {/* 03 KEYWORD CLUSTER — RITUAL DE FUEGO */}
      <section className="py-20 bg-[#000000] border-b border-[#2c2c2e]">
        <div className="max-w-[1300px] mx-auto text-center px-4">
          
          <div className="eyebrow-tag-pill mx-auto mb-8">RITUAL DE FUEGO & TÉCNICAS DE LA CASA</div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-serif-lujo text-3xl sm:text-5xl md:text-6xl text-[#ffffff] uppercase">
            <span className="opacity-90">ASAR</span>
            <span className="opacity-60">AHUMAR</span>
            <span className="text-[#C4924A] font-bold border-b-2 border-[#C4924A] pb-1">SELLAR</span>
            <span className="opacity-90">MARIDAR</span>
            <span className="opacity-60">TRINCHAR</span>
            <span className="opacity-90">FLAMBEAR</span>
            <span className="opacity-80">MADURAR</span>
          </div>

        </div>
      </section>

      {/* 04 SPLIT FEATURE BLOCK */}
      <section className="py-24 max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6 text-left">
            <div className="eyebrow-tag-pill">CAVA & SOMMELIER</div>

            <h2 className="font-display-stellar text-3xl sm:text-5xl text-white">
              MÁS DE 500 ETIQUETAS DE VINOS INTERNACIONALES
            </h2>

            <p className="font-subtext-stellar text-sm sm:text-base text-[#888888] leading-relaxed">
              Nuestra cava reúne cosechas exclusivas de Europa y América Latina, curadas por nuestro equipo de sommeliers para acompañar cada corte de carne y creación de autor.
            </p>

            <div className="pt-2">
              <Link to="/menu" className="btn-ghost-border !pl-0 text-[#C4924A] hover:text-white">
                <span>EXPLORAR LA CAVA COMPLETA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-[10px] overflow-hidden border border-[#2c2c2e] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
              alt="Cortes Prime PÚA" 
              className="w-full h-[460px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* 05 PLATILLOS INSIGNIA DE PÚA */}
      <section className="py-24 bg-[#0d0e12] border-t border-[#2c2c2e]">
        <div className="max-w-[1300px] mx-auto space-y-12 px-6 sm:px-12">
          
          <div className="text-center space-y-3">
            <div className="eyebrow-tag-pill mx-auto">SELECCIÓN DEL CHEF</div>
            <h2 className="font-display-stellar text-3xl sm:text-5xl text-white">
              PLATILLOS INSIGNIA DE PÚA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <div key={dish.id} className="card-obsidian space-y-4 text-left group">
                <div className="overflow-hidden rounded-[8px] h-64">
                  <img 
                    src={dish.image || "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop"} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <div className="font-mono text-xs text-[#C4924A] uppercase tracking-wider">
                    Platillo de Autor · ${dish.price} MXN
                  </div>
                  <h3 className="font-serif-lujo text-2xl text-white">
                    {dish.name}
                  </h3>
                  <p className="font-subtext-stellar text-xs text-[#888888] line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                  
                  <div className="pt-2">
                    <Link to="/menu" className="btn-ghost-border !pl-0 text-xs text-white hover:text-[#C4924A]">
                      <span>ORDENAR EN MESA</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C4924A] text-black rounded-xl flex items-center justify-center shadow-2xl hover:bg-[#E5C388] transition-all transform hover:scale-110 border border-white/20"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
