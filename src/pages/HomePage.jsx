import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat 
} from 'lucide-react';
import { menuItems } from '../data/menuData';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

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

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

  const heroCategories = [
    { id: '01 / 04', label: 'LA BRASA' },
    { id: '02 / 04', label: 'EL VINO' },
    { id: '03 / 04', label: 'LA EXPERIENCIA' },
    { id: '04 / 04', label: 'COCTELERÍA' }
  ];

  const servicesList = [
    {
      title: 'CORTES PRIME AL CARBÓN',
      desc: 'Selección exclusiva de cortes Ribeye, Tomahawk y New York asados a la leña de encino.',
      price: 'DESDE $580 MXN',
      icon: Flame
    },
    {
      title: 'CAVA DE AUTOR & SOMMELIER',
      desc: 'Más de 500 etiquetas internacionales y maridaje guiado por nuestros sommeliers de la casa.',
      price: 'SELECCIÓN VIP',
      icon: Wine
    },
    {
      title: 'MIXOLOGÍA RITUAL DE FUEGO',
      desc: 'Coctelería conceptual elaborada con ahumados en mesa, destilados premium y botanismos.',
      price: 'DESDE $220 MXN',
      icon: Sparkles
    },
    {
      title: 'EVENTOS CORPORATIVOS VIP',
      desc: 'Salones privados y atención personalizada para banquetes y cenas de negocios exclusivas.',
      price: 'COTIZACIÓN DIRECTA',
      icon: ChefHat
    }
  ];

  return (
    <div className="relative min-h-screen text-[#F4F0EA] bg-[#000000] overflow-hidden">
      
      {/* 00 FULL PAGE BACKGROUND VIDEO — PUA HEAD OF.MP4 WITH HIGH OPACITY AND SHIFTED UP FOR CENTERED PUA BRAND FOCUS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_15%] opacity-100 filter brightness-110 contrast-105 transform scale-105 -translate-y-6 lg:-translate-y-14 transition-all duration-700"
        >
          <source src="/assets/PUA HEAD OF.mp4" type="video/mp4" />
        </video>
        {/* Soft edge gradients to keep left text crystal clear while keeping video 100% vivid and unshadowed in center */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* 01 HERO SECTION — EXACT MATCH TO REFERENCE SCREENSHOT */}
      <section className="relative min-h-screen pt-32 pb-16 px-6 sm:px-12 lg:px-20 max-w-[1500px] mx-auto z-10 flex flex-col justify-between">
        
        {/* LEFT VERTICAL METADATA TEXT */}
        <div className="hidden lg:flex flex-col justify-between absolute left-6 top-36 bottom-24 z-20 pointer-events-none text-[10px] font-sans uppercase tracking-[0.3em] text-[#C8C3BC]/80 drop-shadow">
          <div className="rotate-180 [writing-mode:vertical-rl]">
            SÍGUENOS — IG / FB
          </div>
          <div className="rotate-180 [writing-mode:vertical-rl]">
            COORDENADAS / 35° NE
          </div>
        </div>

        {/* HERO MAIN TEXT CONTENT LEFT ALIGNED WITH HIGH CONTRAST DROP SHADOWS */}
        <div className="my-auto pt-8 pb-12 max-w-2xl text-left space-y-6 lg:pl-10 animate-fadeIn">
          
          {/* SERIF HEADLINE + LUXURY CURSIVE SCRIPT "y el vino" */}
          <div className="space-y-1">
            <h1 className="font-serif-lujo text-5xl sm:text-7xl lg:text-8xl text-[#F4F0EA] tracking-wide leading-[0.92] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              EL ARTE DE
            </h1>
            <h1 className="font-serif-lujo text-5xl sm:text-7xl lg:text-8xl text-[#F4F0EA] tracking-wide leading-[0.92] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              LA BRASA
            </h1>
            <div className="font-script-lujo text-4xl sm:text-6xl lg:text-7xl text-[#C4924A] tracking-normal py-1 block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] -mt-2">
              y el vino
            </div>
          </div>

          {/* SUBTITLE PARAGRAPH */}
          <p className="font-sans text-xs sm:text-sm text-[#F4F0EA] font-normal leading-relaxed max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Una experiencia gastronómica de fuego, tierra y tiempo en el corazón de la alta cocina. Descubre nuestra propuesta maridada con los mejores viñedos del mundo.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <Link 
              to="/reservas" 
              className="btn-gold-luxury shadow-2xl"
            >
              RESERVAR UNA MESA
            </Link>
            
            <Link 
              to="/menu" 
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F0EA] hover:text-[#C4924A] transition-colors flex items-center gap-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              VER LA CARTA
              <ArrowRight className="w-4 h-4 text-[#C4924A]" />
            </Link>
          </div>

        </div>

        {/* BOTTOM BAR: CATEGORY ROW + SCROLL INDICATOR */}
        <div className="relative z-20 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6 pt-6 border-t border-white/20 lg:pl-10">
          
          {/* LEFT CATEGORY DOT LIST */}
          <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] overflow-x-auto scrollbar-none py-1">
            {heroCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 transition-colors whitespace-nowrap drop-shadow ${
                  activeCategory === idx ? 'text-[#F4F0EA] font-semibold' : 'text-[#C8C3BC]/80 hover:text-white'
                }`}
              >
                {activeCategory === idx && <span className="text-[#C4924A]">{cat.id}</span>}
                <span className="text-[#C4924A]">•</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* SCROLL INDICATOR WITH VERTICAL GOLD LINE */}
          <div className="flex flex-col items-center gap-2 text-[10px] font-sans uppercase tracking-[0.3em] text-[#F4F0EA] mx-auto sm:mx-0 drop-shadow">
            <span>SCROLL</span>
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#C4924A] to-transparent animate-pulse" />
          </div>

        </div>

      </section>

      {/* 02 ABOUT SECTION — LUXURY BRASA & CAVA SHOWCASE */}
      <section className="py-28 bg-[#000000]/85 backdrop-blur-md relative border-b border-[#2D2722]/60 z-10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Column with Offset Experience Box */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden border border-[#3D352E] shadow-2xl h-[480px] w-full sm:w-5/6 bg-[#0a0a0d]">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
                  alt="PÚA Brasa Chef" 
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Offset Experience Box */}
              <div className="absolute -bottom-8 right-0 sm:right-6 bg-[#0d0e12] border-2 border-[#C4924A] p-8 rounded-2xl shadow-2xl max-w-[280px]">
                <h3 className="font-serif-lujo text-3xl sm:text-4xl text-[#C4924A] leading-none mb-1">
                  15 AÑOS
                </h3>
                <h4 className="font-sans text-xs text-white leading-tight uppercase font-semibold tracking-wider">
                  DE EXPERIENCIA EN BRASAS & CAVA
                </h4>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6 animate-slideInDown">
              <div className="inline-block bg-[#12141f] text-[#C4924A] font-sans font-semibold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
                Sobre Nosotros
              </div>

              <h2 className="font-serif-lujo text-4xl sm:text-6xl text-white leading-tight uppercase tracking-wide">
                MÁS QUE UN RESTAURANTE. ¡FILOSOFÍA DEL FUEGO!
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
                En PÚA Brasa y Vino elevamos el arte del carbón de encino a una categoría de culto gastronómico. Cada corte es madurado con precisión y preparado ante tus ojos con mixología ritual y etiqueta de autor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-serif-lujo text-xl text-white">DESDE 2010</h3>
                  <p className="font-sans text-xs text-[#F4F0EA]/60 font-light">
                    Trayectoria culinaria constante de alta cocina al carbón.
                  </p>
                </div>
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-serif-lujo text-xl text-white">+500 ETIQUETAS</h3>
                  <p className="font-sans text-xs text-[#F4F0EA]/60 font-light">
                    Cava de vinos seleccionada por sommeliers internacionales.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/nosotros" className="btn-gold-luxury">
                  Conocer Nuestra Historia
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 SERVICES SECTION */}
      <section className="py-28 bg-[#000000]/90 backdrop-blur-md relative border-b border-[#2D2722]/60 z-10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-fadeIn">
            <div className="inline-block bg-[#12141f] text-[#C4924A] font-sans font-semibold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
              Nuestros Servicios
            </div>
            <h2 className="font-serif-lujo text-4xl sm:text-6xl text-white tracking-wide uppercase">
              LO QUE OFRECEMOS EN PÚA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0d0e12] border border-[#2D2722] p-8 rounded-2xl relative flex flex-col justify-between h-84 hover:border-[#C4924A] transition-all duration-400 group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-black border border-[#C4924A]/50 rounded-xl flex items-center justify-center group-hover:bg-[#C4924A] transition-colors">
                      <IconComp className="w-7 h-7 text-[#C4924A] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif-lujo text-lg text-white mb-2 leading-tight uppercase group-hover:text-[#C4924A] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#F4F0EA]/60 leading-relaxed font-light">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2D2722] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C4924A] tracking-wider font-semibold">
                      {srv.price}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#1a1c2b] border border-[#C4924A]/40 flex items-center justify-center text-[#C4924A] group-hover:bg-[#C4924A] group-hover:text-black transition-all">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 04 CARTA SELECTION SHOWCASE */}
      <section className="py-28 bg-[#000000]/90 backdrop-blur-md relative border-b border-[#2D2722]/60 z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-block bg-[#12141f] text-[#C4924A] font-sans font-semibold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
              Carta de la Casa
            </div>
            <h2 className="font-serif-lujo text-4xl sm:text-6xl text-white tracking-wide uppercase">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
          </div>

          <div className="card-standard p-8 sm:p-14 border border-[#3D352E]/80 shadow-2xl space-y-10 rounded-2xl">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group pb-8 border-b border-[#2D2722]/80 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline flex-1 pr-4">
                    <h3 className="font-serif-lujo text-xl sm:text-2xl text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors whitespace-nowrap uppercase tracking-wider">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="font-mono text-sm text-[#C4924A] whitespace-nowrap bg-[#121115] px-4 py-1 rounded-full border border-[#C4924A]/30">
                    ${dish.price.toLocaleString()} MXN
                  </span>
                </div>
                <p className="text-xs text-[#F4F0EA]/70 font-light leading-relaxed mt-2 max-w-2xl">
                  {dish.description}
                </p>
              </div>
            ))}

            <div className="pt-8 text-center">
              <Link to="/menu" className="btn-gold-luxury">
                Ver Carta Completa de Platillos & Vinos
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C4924A] text-black rounded-xl flex items-center justify-center shadow-2xl hover:bg-[#E5C388] transition-all transform hover:scale-110 active:scale-95 border border-white/20"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
