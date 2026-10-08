import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wine, Sparkles, Calendar, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { menuItems, restaurantInfo } from '../data/menuData';

export default function HomePage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Sabores de Brasa & Cava";
  }, []);

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

  return (
    <div className="relative min-h-screen text-[#F4F0EA] bg-[#000000]">
      
      {/* HERO SECTION WITH VIDEO & SCRIPT ACCENT */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-125"
          >
            <source src="/assets/PUA HEADER.mp4" type="video/mp4" />
          </video>
          {/* Black Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-[#000000]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20">
          
          <div className="space-y-1">
            <span className="font-script-lujo text-3xl sm:text-5xl text-[#C4924A] block">
              Sinfonía & Temporada
            </span>
            <h1 className="font-serif-corp text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-[#F4F0EA] leading-tight uppercase">
              SABORES DE <span className="text-[#C4924A]">BRASA Y VINO</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#F4F0EA]/80 font-light leading-relaxed font-sans">
            Donde el fuego del carbón seleccionado se funde con la elegancia de nuestra cava de autor y la mixología ritual más refinada.
          </p>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservas"
              className="btn-gold-luxury w-full sm:w-auto px-8 py-4 rounded-full text-xs flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4 text-black" />
              Reservar Mesa Vía WhatsApp
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] text-[#F4F0EA] bg-[#121212]/90 hover:bg-[#121212] border border-[#3D352E] hover:border-[#C4924A] transition-all flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 text-[#C4924A]" />
              Explorar Menú Completo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F4F0EA]/40 text-[10px] uppercase tracking-[0.3em] opacity-80 animate-subtle-float">
          <span>Desplazar</span>
          <div className="w-5 h-8 border border-[#3D352E] rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C4924A] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ESSENCE & PHILOSOPHY SECTION */}
      <section className="py-24 bg-[#000000] relative border-t border-[#3D352E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
              El Fuego & La Brasa
            </span>
            <h2 className="font-serif-corp text-3xl sm:text-4xl font-bold text-[#F4F0EA]">
              CUATRO PILARES DE EXCELENCIA
            </h2>
            <div className="w-16 h-0.5 bg-[#C4924A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantInfo.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-luxury-black p-8 rounded-2xl gold-glow-hover relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#121212] border border-[#3D352E] flex items-center justify-center text-[#C4924A] mb-6 group-hover:border-[#C4924A] transition-colors">
                    {idx === 0 && <Flame className="w-6 h-6 text-[#C4924A]" />}
                    {idx === 1 && <Wine className="w-6 h-6 text-rose-400" />}
                    {idx === 2 && <Sparkles className="w-6 h-6 text-[#C4924A]" />}
                    {idx === 3 && <Award className="w-6 h-6 text-[#C4924A]" />}
                  </div>
                  <h3 className="font-serif-corp text-base font-bold text-[#F4F0EA] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#F4F0EA]/60 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24 bg-[#121212] relative border-t border-b border-[#3D352E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
                Selección de Cava & Sommelier
              </span>
              <h2 className="font-serif-corp text-3xl sm:text-4xl font-bold text-[#F4F0EA]">
                CREACIONES INSIGNIA
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C4924A] hover:text-[#F4F0EA] font-bold group"
            >
              Ver Menú Completo (50+ Platillos & Bebidas)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="glass-luxury-black rounded-2xl overflow-hidden group border border-[#3D352E] hover:border-[#C4924A] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-black">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-[#3D352E] text-[#C4924A] text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                      {dish.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/90 border border-[#3D352E] text-[#C4924A] font-serif-corp font-bold text-sm px-3 py-1 rounded-lg">
                      ${dish.price.toLocaleString()} MXN
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-corp text-base font-bold text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#F4F0EA]/60 line-clamp-3 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/reservas"
                    className="w-full py-2.5 rounded-lg border border-[#3D352E] text-[#C4924A] hover:bg-[#C4924A] hover:text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-all text-center block"
                  >
                    Reservar para Probar
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AMBIANCE SECTION */}
      <section className="py-24 bg-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
              Ambiente & Cava Privada
            </span>
            <h2 className="font-serif-corp text-3xl sm:text-5xl font-bold text-[#F4F0EA] leading-tight">
              UNA ATMÓSFERA PARA LOS SENTIDOS
            </h2>
            <p className="text-xs sm:text-sm text-[#F4F0EA]/70 leading-relaxed font-light">
              En PÚA Brasa y Vino cada detalle cuenta: desde la música de fondo que acompaña el crujir de las brasas hasta la temperatura perfecta de nuestra cava de vinos.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#F4F0EA]/90">
                <ShieldCheck className="w-5 h-5 text-[#C4924A]" />
                <span>Cortes Prime con certificación de origen e importación directa</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#F4F0EA]/90">
                <ShieldCheck className="w-5 h-5 text-[#C4924A]" />
                <span>Mixología ritual con flameado directo en mesa</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/nosotros"
                className="px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-[#C4924A] border border-[#3D352E] hover:border-[#C4924A] transition-all inline-block"
              >
                Conocer la Historia de PÚA
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#3D352E] shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[450px] object-cover"
            >
              <source src="/assets/PUA VID 2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>

        </div>
      </section>

      {/* CTA RESERVATION BANNER */}
      <section className="py-20 bg-[#121212] border-t border-[#3D352E] text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
            Reserva Prioritaria
          </span>
          <h2 className="font-serif-corp text-3xl sm:text-4xl font-bold text-[#F4F0EA]">
            ASEGURA TU MESA EN PÚA BRASA Y VINO
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/70 max-w-xl mx-auto font-light">
            Recibe confirmación prioritaria e inmediata a través de nuestro canal de WhatsApp.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/reservas"
              className="btn-gold-luxury px-10 py-4 rounded-full text-xs inline-block"
            >
              Reservar por WhatsApp Ahora
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
