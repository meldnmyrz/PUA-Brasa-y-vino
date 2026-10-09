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

      {/* 01 HERO SECTION — DALA CONSTELLATION FLOATING STYLE */}
      <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden border-b border-[#2D2722]/50 z-10">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-50 contrast-125 scale-105"
          >
            <source src="/assets/PUA HEADER.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-[#000000]" />
        </div>

        {/* Hero Content matching Dala Specs */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8 animate-slideInDown">
          
          {/* Saffron Spark Accent Tag Pill */}
          <div className="saffron-tag-pill shadow-xl">
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
              accentColor="#ffb829"
              ghostOpacity={1}
              className="w-full text-center"
              textClassName="font-condensed-bold text-5xl sm:text-7xl md:text-9xl tracking-tight text-[#ffffff] leading-none uppercase drop-shadow-2xl"
              ghostClassName="font-script-lujo text-3xl sm:text-5xl md:text-6xl text-[#ffb829] normal-case tracking-normal py-1 block"
              as="h1"
            />
          </div>

          {/* Body Copy Ultra Light */}
          <p className="font-body-ultralight max-w-2xl mx-auto text-[#bdbdbd]">
            Confluencia entre la devoción por el fuego de encino y la alta enología. Una atmósfera de penumbra elegante donde cada sabor flota con precisión magistral.
          </p>

          {/* LOCATION & PHONE METADATA LINE */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6 font-mono-tag text-xs tracking-widest text-[#9a9a9a]">
            <div className="flex items-center gap-2 text-[#ffffff] uppercase">
              <MapPin className="w-4 h-4 text-[#8052ff]" />
              <span>CIUDAD DE MÉXICO // ZONA POLANCO</span>
            </div>
            <div className="hidden sm:block text-[#ffb829]">•</div>
            <div className="flex items-center gap-2 text-[#ffffff] uppercase">
              <Phone className="w-4 h-4 text-[#C4924A]" />
              <span>TEL: +52 55 1234 5678</span>
            </div>
          </div>

          {/* Dala Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/reservas" className="btn-iris-pill">
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9a9a9a] text-[10px] uppercase tracking-[0.3em] z-10">
          <span>Desplazar</span>
          <div className="w-4 h-7 border border-[#3D352E] rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#8052ff] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 02 ABOUT SECTION — DALA ASYMMETRIC TWO-COLUMN BLOCK */}
      <section className="py-28 bg-[#000000] relative border-b border-[#2D2722]/50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Column with Offset Experience Box */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-[24px] overflow-hidden border border-[#3D352E] shadow-2xl h-[450px] w-full sm:w-5/6">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
                  alt="PÚA Brasa Chef" 
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>

              {/* Offset Experience Box */}
              <div className="absolute -bottom-8 right-0 sm:right-6 bg-[#090a0f] border border-[#8052ff]/60 p-8 rounded-[24px] shadow-2xl max-w-[280px]">
                <h3 className="font-condensed-bold text-3xl sm:text-4xl text-[#ffb829] leading-none mb-1">
                  15 AÑOS
                </h3>
                <h4 className="font-condensed-bold text-base text-white leading-tight uppercase">
                  DE EXPERIENCIA EN BRASAS & CAVA
                </h4>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6 animate-slideInDown">
              <div className="saffron-tag-pill">
                SOBRE NOSOTROS
              </div>

              <h2 className="font-display-dala text-4xl sm:text-6xl text-white leading-tight uppercase tracking-tight">
                MÁS QUE UN RESTAURANTE. ¡FILOSOFÍA DEL FUEGO!
              </h2>

              <p className="font-body-ultralight text-[#bdbdbd]">
                En PÚA Brasa y Vino elevamos el arte del carbón de encino a una categoría de culto gastronómico. Cada corte es madurado con precisión y preparado ante tus ojos con mixología ritual y etiqueta de autor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#8052ff] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">DESDE 2010</h3>
                  <p className="font-body-ultralight text-sm text-[#9a9a9a]">
                    Trayectoria culinaria constante de alta cocina al carbón.
                  </p>
                </div>
                <div className="border-l-2 border-[#C4924A] pl-4 space-y-1">
                  <h3 className="font-condensed-bold text-xl text-white">+500 ETIQUETAS</h3>
                  <p className="font-body-ultralight text-sm text-[#9a9a9a]">
                    Cava de vinos seleccionada por sommeliers internacionales.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/nosotros" className="btn-iris-pill">
                  Conocer Nuestra Historia
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 SERVICES SECTION — DALA FLOATING CARDS */}
      <section className="py-28 bg-[#000000] relative border-b border-[#2D2722]/50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fadeIn">
            <div className="iris-tag-pill">
              NUESTROS SERVICIOS
            </div>
            <h2 className="font-display-dala text-4xl sm:text-6xl text-white tracking-tight uppercase">
              LO QUE OFRECEMOS EN PÚA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="card-standard rounded-[24px] relative flex flex-col justify-between h-84 group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-[#000000] border border-[#8052ff]/50 rounded-[16px] flex items-center justify-center group-hover:bg-[#8052ff] transition-colors">
                      <IconComp className="w-7 h-7 text-[#8052ff] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-condensed-bold text-lg text-white mb-2 leading-tight uppercase group-hover:text-[#ffb829] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="font-body-ultralight text-xs text-[#9a9a9a] leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2D2722] flex items-center justify-between">
                    <span className="font-mono-tag text-xs text-[#ffb829] tracking-wider">
                      {srv.price}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#12141f] border border-[#8052ff]/40 flex items-center justify-center text-[#8052ff] group-hover:bg-[#8052ff] group-hover:text-white transition-all">
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
      <section className="py-28 bg-[#000000] relative border-b border-[#2D2722]/50 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flame-tag-pill">
              CARTA DE LA CASA
            </div>
            <h2 className="font-display-dala text-4xl sm:text-6xl text-white tracking-tight uppercase">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
          </div>

          <div className="card-standard p-8 sm:p-14 border border-[#3D352E] shadow-2xl space-y-10 rounded-[24px]">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group pb-8 border-b border-[#2D2722] last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline flex-1 pr-4">
                    <h3 className="font-condensed-bold text-lg sm:text-2xl text-[#ffffff] group-hover:text-[#ffb829] transition-colors whitespace-nowrap uppercase tracking-wider">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="font-mono-tag text-base text-[#ffb829] whitespace-nowrap bg-[#121115] px-4 py-1 rounded-full border border-[#ffb829]/30">
                    ${dish.price.toLocaleString()} MXN
                  </span>
                </div>
                <p className="font-body-ultralight text-sm text-[#bdbdbd] mt-2 max-w-2xl">
                  {dish.description}
                </p>
              </div>
            ))}

            <div className="pt-8 text-center">
              <Link to="/menu" className="btn-flame-pill">
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
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#8052ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#9368ff] transition-all transform hover:scale-110 active:scale-95 border border-white/20"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
