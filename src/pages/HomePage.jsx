import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, X
} from 'lucide-react';
import { menuItems } from '../data/menuData';
import GhostType from '../components/ui/ghost-type';
import ParticleConstellation from '../components/ParticleConstellation';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Sabores de Brasa & Cava";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

  const heroSlides = [
    {
      title: "MÁS DE 500 ETIQUETAS DE CAVA.",
      subtitle: "Maridaje exclusivo por sommeliers internacionales con etiquetas icónicas y colecciones VIP.",
      tag: "CORTES PRIME AL CARBÓN"
    },
    {
      title: "SABOR DE BRASA, CAVA & HISTORIA.",
      subtitle: "Elevamos los cortes prime al carbón de encino y la enología de autor a una experiencia sensorial inolvidable.",
      tag: "PÚA POLANCO // CDMX"
    },
    {
      title: "CORTES PRIME A LA LEÑA DE ENCINO.",
      subtitle: "Tomahawk, Ribeye y New York madurados y asados a fuego directo con precisión artesanal.",
      tag: "PARRILLA & AUTOR"
    },
    {
      title: "MIXOLOGÍA RITUAL Y AHUMADOS.",
      subtitle: "Coctelería conceptual elaborada en mesa con destilados premium e infusiones botánicas.",
      tag: "RITUAL DE FUEGO"
    }
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
    <div className="relative min-h-screen text-[#ffffff] bg-[#000000] overflow-hidden">
      
      {/* 00 FULL PAGE BACKGROUND VIDEO — PUA HEAD OF.MP4 AT 100% OPACITY (NO LOW OPACITY) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-100 filter contrast-105 brightness-100"
        >
          <source src="/assets/PUA HEAD OF.mp4" type="video/mp4" />
        </video>
        {/* Soft left vignette shadow for readable text while leaving video 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      </div>

      {/* AMBIENT CONSTELLATION PARTICLES OVERLAY */}
      <ParticleConstellation className="!opacity-40" />

      {/* 01 HERO SECTION — FULL BLEED GOOGLE FLOW / OMNI STYLE WITH FULL VIDEO BACKGROUND */}
      <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto z-10 flex flex-col justify-between">
        
        {/* TOP METADATA TAG */}
        <div className="flex justify-between items-center">
          <div className="eyebrow-tag-violet bg-black/50 backdrop-blur-md border border-[#6a48f2]/40">
            ★ {heroSlides[activeSlide].tag}
          </div>
        </div>

        {/* MAIN DISPLAY CONTENT LEFT ALIGNED OVER FULL-PAGE VIDEO */}
        <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: DISPLAY TYPOGRAPHY + SUBTITLE + CTA BUTTONS */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            <div className="py-1">
              <GhostType
                text={heroSlides[activeSlide].title}
                completions={[
                  'SINFONÍA & TEMPORADA',
                  'CAVA DE AUTOR & MIXOLOGÍA',
                  'CORTES PRIME AL CARBÓN',
                  'EL RITUAL DEL FUEGO'
                ]}
                typeBase={false}
                streamSpeed={35}
                thinkDelay={500}
                holdDelay={2600}
                accentColor="#6a48f2"
                ghostOpacity={1}
                className="w-full text-left"
                textClassName="font-display-stellar text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#ffffff] leading-[1.05] uppercase drop-shadow-lg"
                ghostClassName="font-script-lujo text-2xl sm:text-4xl text-[#6a48f2] normal-case tracking-normal py-1 block"
                as="h1"
              />
            </div>

            {/* Subtext Paragraph */}
            <p className="font-subtext-stellar text-sm sm:text-lg text-[#dddddd] max-w-xl leading-relaxed drop-shadow-md">
              {heroSlides[activeSlide].subtitle}
            </p>

            {/* Action Buttons: White Pill CTA ("Get started" style) + Ghost Link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/reservas" 
                className="bg-white hover:bg-[#e9e9e9] text-black font-sans font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-2xl flex items-center gap-2 transform hover:scale-105"
              >
                Get started — Reservar Mesa
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
              
              <Link 
                to="/menu" 
                className="btn-ghost-border !border-white/40 text-white hover:!border-white text-sm backdrop-blur-md bg-black/30"
              >
                Explorar Menú Completo
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4" />

        </div>

        {/* BOTTOM BAR: SEGMENTED SLIDER INDICATOR + FLOATING TRANSLUCENT OVERLAY CARD */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          
          {/* SEGMENTED PROGRESS BARS */}
          <div className="flex items-center gap-2 w-full sm:w-auto max-w-md">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 flex-1 ${
                  activeSlide === idx 
                    ? 'bg-white w-12' 
                    : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* FLOATING TRANSLUCENT ACTION CARD OVERLAY */}
          <div className="flex items-center gap-4 bg-[#171718]/90 backdrop-blur-xl border border-[#2c2c2e] p-3 sm:p-4 rounded-[20px] shadow-2xl">
            <Link 
              to="/reservas"
              className="flex items-center gap-3 text-white text-xs sm:text-sm font-sans font-medium hover:text-[#6a48f2] transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#6a48f2] text-white flex items-center justify-center shadow-lg">
                <Plus className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span>+ Reservar Experiencia VIP</span>
            </Link>
          </div>

        </div>

      </section>

      {/* 02 ABOUT SECTION — STELLAR ASYMMETRIC OBSIDIAN PANEL */}
      <section className="py-24 bg-[#000000]/80 backdrop-blur-md relative border-b border-[#2c2c2e]/60 z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Column with 10px Radius Card */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-[10px] overflow-hidden border border-[#2c2c2e] shadow-none h-[450px] w-full sm:w-5/6 bg-[#171718]">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
                  alt="PÚA Brasa Chef" 
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>

              {/* Offset Experience Box with 10px Radius */}
              <div className="absolute -bottom-8 right-0 sm:right-6 bg-[#171718] border border-[#6a48f2]/60 p-8 rounded-[10px] max-w-[280px]">
                <h3 className="font-condensed-bold text-3xl sm:text-4xl text-[#6a48f2] leading-none mb-1">
                  15 AÑOS
                </h3>
                <h4 className="font-sans text-sm text-white leading-tight uppercase font-medium">
                  DE EXPERIENCIA EN BRASAS & CAVA
                </h4>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6 animate-slideInDown">
              <div className="eyebrow-tag-pill">
                SOBRE NOSOTROS
              </div>

              <h2 className="font-display-stellar text-4xl sm:text-6xl text-white leading-tight uppercase tracking-tight">
                MÁS QUE UN RESTAURANTE. ¡FILOSOFÍA DEL FUEGO!
              </h2>

              <p className="font-subtext-stellar text-[#888888]">
                En PÚA Brasa y Vino elevamos el arte del carbón de encino a una categoría de culto gastronómico. Cada corte es madurado con precisión y preparado ante tus ojos con mixología ritual y etiqueta de autor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#6a48f2] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">DESDE 2010</h3>
                  <p className="font-subtext-stellar text-sm text-[#888888]">
                    Trayectoria culinaria constante de alta cocina al carbón.
                  </p>
                </div>
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">+500 ETIQUETAS</h3>
                  <p className="font-subtext-stellar text-sm text-[#888888]">
                    Cava de vinos seleccionada por sommeliers internacionales.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/nosotros" className="btn-sprint-violet">
                  Conocer Nuestra Historia
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 SERVICES SECTION — STELLAR OBSIDIAN CARDS (10px RADIUS, NO SHADOWS) */}
      <section className="py-24 bg-[#000000]/90 backdrop-blur-md relative border-b border-[#2c2c2e]/60 z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fadeIn">
            <div className="eyebrow-tag-violet">
              NUESTROS SERVICIOS
            </div>
            <h2 className="font-display-stellar text-4xl sm:text-6xl text-white tracking-tight uppercase">
              LO QUE OFRECEMOS EN PÚA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="card-obsidian rounded-[10px] relative flex flex-col justify-between h-84 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#000000] border border-[#2c2c2e] rounded-[6px] flex items-center justify-center group-hover:border-[#6a48f2] transition-colors">
                      <IconComp className="w-6 h-6 text-[#6a48f2] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-base text-white mb-2 leading-tight uppercase group-hover:text-[#6a48f2] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="font-subtext-stellar text-xs text-[#888888] leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2c2c2e] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#6a48f2] tracking-wider">
                      {srv.price}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#000000] border border-[#2c2c2e] flex items-center justify-center text-[#6a48f2] group-hover:bg-[#6a48f2] group-hover:text-white transition-all">
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
      <section className="py-24 bg-[#000000]/90 backdrop-blur-md relative border-b border-[#2c2c2e]/60 z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="eyebrow-tag-pill">
              CARTA DE LA CASA
            </div>
            <h2 className="font-display-stellar text-4xl sm:text-6xl text-white tracking-tight uppercase">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
          </div>

          <div className="card-obsidian p-8 sm:p-12 border border-[#2c2c2e] space-y-10 rounded-[10px]">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group pb-8 border-b border-[#2c2c2e] last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline flex-1 pr-4">
                    <h3 className="font-sans font-medium text-lg sm:text-xl text-[#ffffff] group-hover:text-[#6a48f2] transition-colors whitespace-nowrap uppercase tracking-wider">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="font-mono text-sm text-[#6a48f2] whitespace-nowrap bg-[#000000] px-4 py-1 rounded-[6px] border border-[#2c2c2e]">
                    ${dish.price.toLocaleString()} MXN
                  </span>
                </div>
                <p className="font-subtext-stellar text-xs text-[#888888] mt-2 max-w-2xl">
                  {dish.description}
                </p>
              </div>
            ))}

            <div className="pt-8 text-center">
              <Link to="/menu" className="btn-sprint-violet">
                Ver Carta Completa de Platillos & Vinos
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#6a48f2] text-white rounded-full flex items-center justify-center hover:bg-[#7b5cf7] transition-all transform hover:scale-105 active:scale-95 border border-white/20"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
