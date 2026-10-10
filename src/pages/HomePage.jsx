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
    <div className="relative min-h-screen bg-[#090a0f] text-[#F4F0EA] overflow-hidden font-typewriter">
      
      {/* 01 FULL-BLEED HERO PLATE (GRAZA HERO MODEL) */}
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
          {/* Subtle gradient vignette bottom-left for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/50 to-transparent pointer-events-none" />
        </div>

        {/* BOTTOM-LEFT OVERLAY CONTENT */}
        <div className="relative z-10 max-w-4xl space-y-6 text-left">
          
          {/* APER CU STATUS BADGE FLANKED BY ASTERISKS */}
          <div className="inline-flex items-center gap-2 text-[#9eef80] badge-apercu">
            <span>✱</span>
            <span>PÚA BRASA Y VINO — POLANCO, CDMX</span>
            <span>✱</span>
          </div>

          {/* DISPLAY HEADLINE IN ITC GARAMOND CONDENSED (120px TRACKING SIGNATURE) */}
          <h1 className="text-display-graza text-[#F4F0EA] tracking-tight drop-shadow-md">
            EL ARTE DE LA BRASA Y EL VINO
          </h1>

          {/* TYPEWRITER SERIF BODY PARAGRAPH */}
          <p className="font-typewriter text-sm sm:text-base text-[#F4F0EA]/80 max-w-2xl leading-relaxed font-light">
            Una cocina de autor inspirada en la gastronomía mediterránea y las brasas de encino. Maduraciones artesanales, maridajes de cava internacional y mixología de humo en mesa.
          </p>

          {/* ACTION BUTTONS (GRAZA FILLED CTA + OUTLINE GHOST) */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-primary-graza"
            >
              <span>RESERVAR MESA DE AUTOR</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            
            <Link 
              to="/menu" 
              className="btn-outline-graza"
            >
              <span>VER CARTA COMPLETA</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 02 FULL-BLEED EDITORIAL BAND 1 — MUSTARD SUN (#fbd535) ACCENT BAND */}
      <section className="band-full-bleed bg-[#fbd535] text-[#3c422e] py-24 my-12">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">
          
          {/* APERCU BADGE */}
          <div className="badge-apercu text-[#3c422e] uppercase font-semibold">
            ✱ SELECCIÓN DE BRASAS & MARIDAJE ✱
          </div>

          {/* GARAMOND CONDENSED HEADLINE (102px) */}
          <h2 className="text-heading-graza text-[#3c422e] font-normal max-w-4xl mx-auto">
            CORTES PRIME SELECCIONADOS A LA LEÑA DE ENCINO Y CAVA DE 500 ETIQUETAS
          </h2>

          {/* TYPEWRITER BODY */}
          <p className="font-typewriter text-base text-[#3c422e]/90 max-w-xl mx-auto leading-relaxed">
            Cada pieza se asa con fuego de madera seleccionada y sales artesanales. Una experiencia pensada para compartirse con los mejores tintos y blancos del mundo.
          </p>

          {/* OUTLINE GHOST BUTTON IN OLIVE INK */}
          <div className="pt-4">
            <Link 
              to="/nosotros" 
              className="inline-flex items-center gap-2 border border-[#3c422e] text-[#3c422e] hover:bg-[#3c422e] hover:text-[#fbd535] font-typewriter text-sm font-bold px-8 py-3.5 rounded-[10px] transition-all"
            >
              <span>CONOCER NUESTRA HISTORIA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 03 SCATTERED KEYWORD CLUSTER — SQUEEZE BOTTLE GREEN BAND (#9eef80) */}
      <section className="band-full-bleed bg-[#9eef80] text-[#3c422e] py-20 my-16 overflow-hidden">
        <div className="max-w-[1300px] mx-auto relative px-4">
          
          <div className="text-center mb-8 badge-apercu text-[#3c422e]">
            ✱ RITUAL DE FUEGO & TÉCNICAS DE LA CASA ✱
          </div>

          {/* ASYMMETRIC KEYWORD CLOUD IN GARAMOND CONDENSED */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-garamond-condensed text-4xl sm:text-6xl md:text-7xl text-[#3c422e] uppercase py-6">
            <span className="opacity-90">ASAR</span>
            <span className="opacity-75">AHUMAR</span>
            {/* CIRCLED ANNOTATED WORD */}
            <span className="oval-annotation text-[#3c422e] font-bold">SELLAR</span>
            <span className="opacity-90">MARIDAR</span>
            <span className="opacity-75">TRINCHAR</span>
            <span className="opacity-90">FLAMBEAR</span>
            <span className="opacity-80">MADURAR</span>
          </div>

        </div>
      </section>

      {/* 04 SPLIT FEATURE BLOCK (50/50 EDITORIAL LAYOUT) */}
      <section className="py-24 max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="space-y-6 text-left">
            <div className="badge-apercu text-[#9eef80]">
              ✱ CAVA & SOMMELIER ✱
            </div>

            <h2 className="text-heading-graza text-[#F4F0EA]">
              MÁS DE 500 ETIQUETAS DE VINOS INTERNACIONALES
            </h2>

            <p className="font-typewriter text-sm sm:text-base text-[#F4F0EA]/70 leading-relaxed font-light">
              Nuestra cava reúne cosechas exclusivas de Europa y América Latina, curadas por nuestro equipo de sommeliers para acompañar cada corte de carne y creación de autor.
            </p>

            <div className="pt-2">
              <Link to="/menu" className="link-editorial-graza text-[#9eef80]">
                <span>EXPLORAR LA CAVA COMPLETA</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT / FOOD IMAGE WITH 20px RADIUS AND NO SHADOW */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
              alt="Cortes Prime PÚA" 
              className="w-full h-[460px] img-graza-radius"
            />
          </div>

        </div>
      </section>

      {/* 05 INLINE RECIPE / SIGNATURE DISH CARDS (GRAZA PRODUCT CARDS) */}
      <section className="py-24 bg-[#14171f] my-12 band-full-bleed">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <div className="badge-apercu text-[#fbd535]">
              ✱ SELECCIÓN DEL CHEF ✱
            </div>
            <h2 className="text-heading-graza text-[#F4F0EA]">
              PLATILLOS INSIGNIA DE PÚA
            </h2>
          </div>

          {/* 3 PRODUCT CARDS WITH 20px RADIUS PHOTOS & TYPEWRITER CAPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, idx) => (
              <div key={dish.id} className="space-y-4 text-left group">
                <div className="overflow-hidden rounded-[20px]">
                  <img 
                    src={dish.image || "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop"} 
                    alt={dish.name}
                    className="w-full h-72 img-graza-radius group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <div className="font-typewriter text-xs text-[#9eef80] uppercase tracking-wider">
                    Platillo de Autor · ${dish.price} MXN
                  </div>
                  <h3 className="font-garamond-condensed text-3xl text-[#F4F0EA] leading-tight">
                    {dish.name}
                  </h3>
                  <p className="font-typewriter text-xs text-[#F4F0EA]/70 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                  
                  <div className="pt-2">
                    <Link to="/menu" className="link-editorial-graza text-xs text-[#F4F0EA]">
                      <span>ORDENAR EN MESA</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 ATMOSPHERIC CLOSING IMAGE — FOOTER OLIVE / BRASA BRANCH PHOTO */}
      <section className="relative h-80 band-full-bleed overflow-hidden my-8">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop" 
          alt="PÚA Brasa & Vino Atmosphere" 
          className="w-full h-full object-cover filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="font-garamond-condensed text-4xl sm:text-6xl text-[#F4F0EA] tracking-widest uppercase text-center px-4">
            PÚA BRASA Y VINO · POLANCO
          </span>
        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#9eef80] text-[#090a0f] rounded-full flex items-center justify-center hover:bg-[#fbd535] transition-all transform hover:scale-110 border border-[#090a0f]"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
