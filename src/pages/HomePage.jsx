import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wine, Calendar, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { menuItems, restaurantInfo } from '../data/menuData';
import GhostType from '../components/ui/ghost-type';

export default function HomePage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Sabores de Brasa & Cava";
  }, []);

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

  return (
    <div className="relative min-h-screen text-[#F4F0EA] bg-[#000000] overflow-hidden">
      
      {/* 01 HERO SECTION - EDITORIAL HIGH FASHION LOOK WITH CODEX & APPLE STYLING */}
      <section className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden border-b border-[#2D2722]/50">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-75 contrast-125 scale-105"
          >
            <source src="/assets/PUA HEADER.mp4" type="video/mp4" />
          </video>
          {/* Editorial Vignette & Glass Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        {/* Hero Content with Codex Slide Animations */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20 animate-slideInDown">
          
          {/* Pill Badge */}
          <div className="eyebrow-tag justify-center shadow-lg animate-fadeIn">
            EXPERIENCIA GASTRONÓMICA DE ALTA GAMA
          </div>

          <div className="py-2 animate-zoomIn">
            <GhostType
              text="PÚA BRASA Y VINO"
              completions={[
                'Sinfonía & Temporada',
                'Cava de Autor & Mixología',
                'Cortes Prime de Autor',
                'El Ritual del Fuego'
              ]}
              typeBase={false}
              streamSpeed={35}
              thinkDelay={500}
              holdDelay={2600}
              accentColor="#C4924A"
              ghostOpacity={1}
              className="w-full text-center"
              textClassName="font-serif-corp text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.12em] text-[#F4F0EA] leading-none uppercase drop-shadow-2xl"
              ghostClassName="font-script-lujo text-3xl sm:text-5xl md:text-6xl text-[#C4924A] normal-case tracking-normal py-1 drop-shadow-[0_4px_12px_rgba(196,146,74,0.5)]"
              as="h1"
            />
          </div>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#F4F0EA]/80 font-light leading-relaxed tracking-wide font-sans animate-fadeIn">
            Donde la nobleza del carbón de encino se fusiona con la elegancia de nuestra cava de autor y la mixología ritual más refinada.
          </p>

          {/* Apple Style Rounded Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5 animate-slideInUp">
            <Link to="/reservas" className="btn-apple-gold w-full sm:w-auto shadow-2xl">
              <Calendar className="w-4 h-4 text-black" />
              Reservar Mesa Vía WhatsApp
            </Link>
            <Link to="/menu" className="btn-apple-outline w-full sm:w-auto">
              Explorar Menú Completo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F4F0EA]/40 text-[9px] uppercase tracking-[0.3em] animate-fadeIn">
          <span>Desplazar</span>
          <div className="w-4 h-7 border border-[#3D352E] rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#C4924A] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 02 EDITORIAL BRAND PILLARS (HTML CODEX STYLE CARDS & APPLE CORNERS) */}
      <section className="py-28 bg-[#000000] relative border-b border-[#2D2722]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2D2722]/60 gap-6 animate-fadeIn">
            <div>
              <div className="eyebrow-tag mb-3">LA FILOSOFÍA DEL FUEGO</div>
              <h2 className="font-serif-corp text-3xl sm:text-4xl font-light tracking-widest text-[#F4F0EA]">
                PILARES DE EXCELENCIA
              </h2>
            </div>
            <span className="font-script-lujo text-3xl text-[#C4924A]">
              PÚA Brasa & Vino
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantInfo.features.map((feat, idx) => (
              <div
                key={idx}
                className="card-editorial p-8 rounded-3xl relative flex flex-col justify-between h-80 border border-[#3D352E]/70 hover:border-[#C4924A]/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-corp text-3xl font-light text-[#C4924A]/50 group-hover:text-[#C4924A] transition-colors">
                      0{idx + 1}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#C4924A]/40 group-hover:text-[#C4924A] transition-colors" />
                  </div>
                  <h3 className="font-serif-corp text-lg font-medium tracking-wider text-[#F4F0EA] mb-3 group-hover:text-[#C4924A] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#F4F0EA]/70 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2D2722]/60 flex items-center justify-between text-[11px] text-[#C4924A] font-semibold uppercase tracking-widest">
                  <span>Sello PÚA</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03 PHYSICAL MENU SHOWCASE (CODEX CARD LAYOUT & APPLE BUTTONS) */}
      <section className="py-28 bg-[#0a0a0c] relative border-b border-[#2D2722]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-fadeIn">
            <div className="eyebrow-tag justify-center">CARTA DE LA CASA</div>
            <h2 className="font-serif-corp text-3xl sm:text-5xl font-light tracking-widest text-[#F4F0EA]">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
            <span className="font-script-lujo text-3xl text-[#C4924A] block">
              Especialidades al Carbón
            </span>
          </div>

          {/* Physical Restaurant Menu Display with Apple Rounded Corners */}
          <div className="card-editorial p-8 sm:p-14 rounded-3xl border border-[#3D352E]/80 shadow-2xl space-y-10">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group pb-8 border-b border-[#2D2722]/80 last:border-0 last:pb-0 transition-colors">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline flex-1 pr-4">
                    <h3 className="font-serif-corp text-lg sm:text-xl font-medium tracking-wide text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors whitespace-nowrap">
                      {dish.name}
                    </h3>
                    <div className="menu-dots hidden sm:block" />
                  </div>
                  <span className="font-serif-corp text-lg font-bold text-[#C4924A] whitespace-nowrap bg-[#121115] px-3 py-1 rounded-full border border-[#C4924A]/30">
                    ${dish.price.toLocaleString()} MXN
                  </span>
                </div>
                <p className="text-xs text-[#F4F0EA]/70 font-light leading-relaxed mt-2 max-w-2xl">
                  {dish.description}
                </p>
              </div>
            ))}

            <div className="pt-8 text-center">
              <Link to="/menu" className="btn-apple-gold shadow-2xl">
                Ver Carta Completa de Platillos & Vinos
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 04 EDITORIAL VIDEO & EXPERIENCE */}
      <section className="py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="eyebrow-tag">ATMÓSFERA & CAVA</div>
            <h2 className="font-serif-corp text-3xl sm:text-5xl font-light tracking-wider text-[#F4F0EA] leading-tight">
              EL RITUAL DEL FUEGO Y LA LUZ
            </h2>
            <span className="font-script-lujo text-3xl text-[#C4924A] block">
              Memorias alrededor de las brasas
            </span>
            <p className="text-xs sm:text-sm text-[#F4F0EA]/70 leading-relaxed font-light">
              En PÚA Brasa y Vino cada detalle cuenta: desde la música de fondo que acompaña el crujir de las brasas hasta la temperatura exacta de nuestra cava de vinos.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#F4F0EA]/90 font-light">
                <ShieldCheck className="w-4 h-4 text-[#C4924A]" />
                <span>Cortes Prime con certificación de origen e importación directa</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#F4F0EA]/90 font-light">
                <ShieldCheck className="w-4 h-4 text-[#C4924A]" />
                <span>Mixología ritual con flameado directo en mesa</span>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/nosotros" className="btn-apple-outline">
                Conocer la Historia de PÚA
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#3D352E] shadow-2xl h-[480px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter brightness-90 scale-105 hover:scale-100 transition-transform duration-700"
            >
              <source src="/assets/PUA VID 2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-8 left-8 right-8 text-center border-t border-[#C4924A]/40 pt-4">
              <span className="font-script-lujo text-2xl text-[#C4924A] block">
                "La madera adecuada, la temperatura exacta"
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA RESERVATION BANNER WITH APPLE ROUNDED BUTTONS */}
      <section className="py-24 bg-[#08080a] border-t border-[#2D2722] text-center relative">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="font-script-lujo text-4xl text-[#C4924A] block">
            Reserva Prioritaria
          </span>
          <h2 className="font-serif-corp text-3xl sm:text-4xl font-light tracking-widest text-[#F4F0EA]">
            ASEGURA TU MESA EN PÚA BRASA Y VINO
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/60 max-w-xl mx-auto font-light leading-relaxed">
            Recibe confirmación prioritaria e inmediata a través de nuestro canal directo de WhatsApp.
          </p>
          <div className="pt-6 flex justify-center">
            <Link to="/reservas" className="btn-apple-gold shadow-2xl">
              Reservar por WhatsApp Ahora
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
