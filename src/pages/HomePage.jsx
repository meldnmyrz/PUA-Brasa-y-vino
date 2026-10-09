import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat 
} from 'lucide-react';
import { menuItems } from '../data/menuData';
import GhostType from '../components/ui/ghost-type';
import ParticleConstellation from '../components/ParticleConstellation';

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

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

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
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 HERO SECTION — STELLAR GALLERY WALL AT MIDNIGHT STYLE */}
      <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden border-b border-[#2c2c2e]/60 z-10">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 opacity-35">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-50 contrast-125 scale-105"
          >
            <source src="/assets/PUA HEADER.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]" />
        </div>

        {/* Hero Content matching Stellar Specs */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center space-y-8 animate-slideInDown">
          
          {/* Eyebrow Label Tag Chip (6px radius) */}
          <div className="eyebrow-tag-violet">
            ★ EXPERIENCIA GASTRONÓMICA AL CARBÓN & CAVA DE AUTOR
          </div>

          <div className="py-2">
            <GhostType
              text="PÚA BRASA Y VINO"
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
              className="w-full text-center"
              textClassName="font-display-stellar text-5xl sm:text-7xl md:text-9xl tracking-tight text-[#ffffff] leading-none uppercase"
              ghostClassName="font-script-lujo text-3xl sm:text-5xl md:text-6xl text-[#6a48f2] normal-case tracking-normal py-1 block"
              as="h1"
            />
          </div>

          {/* Subtext Paragraph (18-19px Weight 400 Ash #888888) */}
          <p className="font-subtext-stellar max-w-2xl mx-auto text-[#888888]">
            Confluencia entre la devoción por el fuego de encino y la alta enología. Una atmósfera de penumbra elegante donde cada sabor flota con precisión magistral.
          </p>

          {/* LOCATION & PHONE METADATA LINE */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6 font-mono text-xs tracking-widest text-[#888888]">
            <div className="flex items-center gap-2 text-[#ffffff] uppercase">
              <MapPin className="w-4 h-4 text-[#6a48f2]" />
              <span>CIUDAD DE MÉXICO // ZONA POLANCO</span>
            </div>
            <div className="hidden sm:block text-[#6a48f2]">•</div>
            <div className="flex items-center gap-2 text-[#ffffff] uppercase">
              <Phone className="w-4 h-4 text-[#C4924A]" />
              <span>TEL: +52 55 1234 5678</span>
            </div>
          </div>

          {/* Stellar Action Buttons (50px Pill CTA) */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/reservas" className="btn-sprint-violet">
              <Calendar className="w-4 h-4 text-white" />
              Reservar Mesa Ahora
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <Link to="/menu" className="btn-ghost-border">
              Explorar Menú Completo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888888] text-[10px] uppercase tracking-[0.3em] z-10">
          <span>Desplazar</span>
          <div className="w-4 h-7 border border-[#2c2c2e] rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#6a48f2] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 02 ABOUT SECTION — STELLAR ASYMMETRIC OBSIDIAN PANEL */}
      <section className="py-24 bg-[#000000] relative border-b border-[#2c2c2e]/60 z-10">
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
      <section className="py-24 bg-[#000000] relative border-b border-[#2c2c2e]/60 z-10">
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
      <section className="py-24 bg-[#000000] relative border-b border-[#2c2c2e]/60 z-10">
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
