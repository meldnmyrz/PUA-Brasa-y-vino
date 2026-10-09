import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, ShieldCheck, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, Clock, Award, ChefHat 
} from 'lucide-react';
import { menuItems, restaurantInfo } from '../data/menuData';
import GhostType from '../components/ui/ghost-type';

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
    <div className="relative min-h-screen text-[#F4F0EA] bg-[#000000] overflow-hidden">
      
      {/* 01 HERO SECTION - EXACT HTML CODEX 2315 OSWALD CONDENSED HERO STYLE */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden border-b border-[#2D2722]/60">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-70 contrast-125 scale-105"
          >
            <source src="/assets/PUA HEADER.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        {/* Hero Content matching HTML Codex 2315 */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20 animate-slideInDown">
          
          <div className="inline-block bg-[#12141f] text-[#C4924A] font-condensed-bold text-xs uppercase tracking-[0.25em] px-5 py-2 border border-[#C4924A]/40 shadow-xl">
            01 // EXPERIENCIA GASTRONÓMICA DE ALTA GAMA
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
              accentColor="#C4924A"
              ghostOpacity={1}
              className="w-full text-center"
              textClassName="font-condensed-bold text-4xl sm:text-6xl md:text-8xl tracking-wide text-[#F4F0EA] leading-tight uppercase drop-shadow-2xl"
              ghostClassName="font-script-lujo text-3xl sm:text-5xl md:text-6xl text-[#C4924A] normal-case tracking-normal py-1 block"
              as="h1"
            />
          </div>

          {/* HTML CODEX 2315 LOCATION & PHONE HERO METADATA LINE */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6 font-condensed-bold text-sm sm:text-base tracking-widest text-[#F4F0EA]">
            <div className="flex items-center gap-2 text-white uppercase">
              <MapPin className="w-5 h-5 text-[#C4924A]" />
              <span>CIUDAD DE MÉXICO // ZONA POLANCO</span>
            </div>
            <div className="hidden sm:block text-[#C4924A]">•</div>
            <div className="flex items-center gap-2 text-white uppercase">
              <Phone className="w-5 h-5 text-[#C4924A]" />
              <span>TEL: +52 55 1234 5678</span>
            </div>
          </div>

          {/* Apple & Codex Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5 animate-slideInUp">
            <Link to="/reservas" className="btn-codex-action px-8 py-4 text-sm font-condensed-bold flex items-center gap-2 shadow-2xl">
              <Calendar className="w-4 h-4 text-black" />
              Reservar Mesa Ahora
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
            <Link to="/menu" className="btn-apple-outline px-8 py-4 text-xs font-condensed-bold">
              Explorar Menú Completo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F4F0EA]/40 text-[9px] uppercase tracking-[0.3em]">
          <span>Desplazar</span>
          <div className="w-4 h-7 border border-[#3D352E] rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#C4924A] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 02 ABOUT SECTION - EXACT HTML CODEX 2315 SCREENSHOT 1 LOOK & EXPERIENCE BADGE */}
      <section className="py-28 bg-[#07080b] relative border-b border-[#2D2722]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Column with Offset Experience Box */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden border border-[#3D352E] shadow-2xl h-[450px] w-full sm:w-5/6">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
                  alt="PÚA Brasa Chef" 
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>

              {/* Offset Experience Box matching Codex 2315 screenshot */}
              <div className="absolute -bottom-8 right-0 sm:right-6 bg-[#12141f] border-2 border-[#C4924A] p-8 rounded-2xl shadow-2xl max-w-[280px]">
                <h3 className="font-condensed-bold text-3xl sm:text-4xl text-[#C4924A] leading-none mb-1">
                  15 AÑOS
                </h3>
                <h4 className="font-condensed-bold text-lg text-white leading-tight uppercase">
                  DE EXPERIENCIA EN BRASAS
                </h4>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6 animate-slideInDown">
              <div className="inline-block bg-[#12141f] text-[#C4924A] font-condensed-bold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
                Sobre Nosotros
              </div>

              <h2 className="font-condensed-bold text-3xl sm:text-5xl text-white leading-tight uppercase tracking-wide">
                MÁS QUE UN RESTAURANTE. ¡CONOCE NUESTRA FILOSOFÍA DEL FUEGO!
              </h2>

              <p className="text-xs sm:text-sm text-[#F4F0EA]/70 leading-relaxed font-light">
                En PÚA Brasa y Vino elevamos el arte del carbón de encino a una categoría de culto gastronómico. Cada corte es madurado con precisión y preparado ante tus ojos con mixología ritual y etiqueta de autor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">DESDE 2010</h3>
                  <p className="text-xs text-[#F4F0EA]/60 font-light">
                    Trayectoria culinaria constante de alta cocina al carbón.
                  </p>
                </div>
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">+500 ETIQUETAS</h3>
                  <p className="text-xs text-[#F4F0EA]/60 font-light">
                    Cava de vinos seleccionada por sommeliers internacionales.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/nosotros" className="btn-codex-action">
                  Conocer Nuestra Historia
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 SERVICES SECTION - EXACT HTML CODEX 2315 SCREENSHOT 2 GRID CARDS */}
      <section className="py-28 bg-[#000000] relative border-b border-[#2D2722]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-fadeIn">
            <div className="inline-block bg-[#12141f] text-[#C4924A] font-condensed-bold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
              Nuestros Servicios
            </div>
            <h2 className="font-condensed-bold text-3xl sm:text-5xl text-white tracking-wide uppercase">
              LO QUE OFRECEMOS EN PÚA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#12141f] border border-[#2D2722] p-8 rounded-2xl relative flex flex-col justify-between h-80 hover:border-[#C4924A] transition-all duration-400 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-black border border-[#C4924A]/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C4924A] transition-colors">
                      <IconComp className="w-7 h-7 text-[#C4924A] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-condensed-bold text-lg text-white mb-2 leading-tight uppercase group-hover:text-[#C4924A] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#F4F0EA]/60 leading-relaxed font-light">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2D2722] flex items-center justify-between">
                    <span className="font-condensed-bold text-xs text-[#C4924A] tracking-wider">
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
      <section className="py-28 bg-[#08080a] relative border-b border-[#2D2722]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-block bg-[#12141f] text-[#C4924A] font-condensed-bold text-xs uppercase tracking-[0.25em] px-4 py-1.5 border border-[#C4924A]/30">
              Carta de la Casa
            </div>
            <h2 className="font-condensed-bold text-3xl sm:text-5xl text-white tracking-wide uppercase">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
          </div>

          <div className="card-editorial p-8 sm:p-14 rounded-3xl border border-[#3D352E]/80 shadow-2xl space-y-10">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group pb-8 border-b border-[#2D2722]/80 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline flex-1 pr-4">
                    <h3 className="font-condensed-bold text-lg sm:text-xl text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors whitespace-nowrap uppercase tracking-wider">
                      {dish.name}
                    </h3>
                    <div className="menu-dots hidden sm:block" />
                  </div>
                  <span className="font-condensed-bold text-lg text-[#C4924A] whitespace-nowrap bg-[#121115] px-3.5 py-1 rounded-full border border-[#C4924A]/30">
                    ${dish.price.toLocaleString()} MXN
                  </span>
                </div>
                <p className="text-xs text-[#F4F0EA]/70 font-light leading-relaxed mt-2 max-w-2xl">
                  {dish.description}
                </p>
              </div>
            ))}

            <div className="pt-8 text-center">
              <Link to="/menu" className="btn-codex-action shadow-2xl">
                Ver Carta Completa de Platillos & Vinos
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON MATCHING HTML CODEX 2315 SCREENSHOT */}
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
