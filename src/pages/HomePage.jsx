import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wine, Sparkles, Calendar, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { menuItems, restaurantInfo } from '../data/menuData';

export default function HomePage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Inicio - Alta Gastronomía al Carbón";
  }, []);

  const featuredDishes = menuItems.filter(item => item.badge).slice(0, 4);

  return (
    <div className="relative min-h-screen text-amber-50">
      
      {/* HERO SECTION WITH REAL VIDEO HEADER */}
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
          {/* Luxury Black Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Experiencia Gastronómica de Alta Gama
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            PÚA BRASA <span className="text-gold-gradient">&</span> VINO
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Donde el fuego del carbón seleccionado se funde con la elegancia de nuestra cava de autor y la mixología ritual más refinada.
          </p>

          {/* Action CTAs linked to independent subpages */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservas"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-200 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4" />
              Reservar Mesa Vía WhatsApp
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-amber-200 bg-zinc-900/80 hover:bg-zinc-800 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              Explorar Menú Completo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.3em] opacity-80 animate-float">
          <span>Desplazar</span>
          <div className="w-5 h-8 border border-amber-400/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ESSENCE & PHILOSOPHY SECTION */}
      <section className="py-24 bg-zinc-950 relative border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">
              El Arte de la Cocina al Fuego
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
              Cuatro Pilares de Excelencia en PÚA
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantInfo.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-luxury p-8 rounded-2xl gold-border-glow relative group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-900/40 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Flame className="w-6 h-6 text-amber-400" />}
                  {idx === 1 && <Wine className="w-6 h-6 text-rose-400" />}
                  {idx === 2 && <Sparkles className="w-6 h-6 text-amber-300" />}
                  {idx === 3 && <Award className="w-6 h-6 text-yellow-400" />}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative border-t border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold block mb-2">
                Selección del Sommelier & Chef
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
                Creaciones Insignia
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300 hover:text-amber-100 font-bold group"
            >
              Ver Menú Completo (50+ Platillos & Bebidas)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="glass-luxury rounded-2xl overflow-hidden group hover:border-amber-400/60 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    {dish.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-zinc-950/90 border border-amber-500/50 text-amber-300 font-serif-luxury font-bold text-sm px-3 py-1 rounded-lg">
                    ${dish.price.toLocaleString()} MXN
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                  <Link
                    to="/reservas"
                    className="w-full py-2.5 rounded-lg border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center block"
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
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">
              Ambiente & Cava Privada
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
              Una Atmósfera Diseñada para los Sentidos
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              En PÚA Brasa y Vino cada detalle cuenta: desde la música de fondo que acompaña el crujir de las brasas hasta la temperatura perfecta de nuestra cava de vinos.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-zinc-200">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Cortes Prime con certificación de origen e importación directa</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-200">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Mixología ritual con flameado directo en mesa</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/nosotros"
                className="px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/10 transition-all inline-block"
              >
                Conocer la Historia de PÚA
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden gold-border-glow shadow-2xl">
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
      <section className="py-20 bg-gradient-to-r from-zinc-950 via-rose-950/40 to-zinc-950 border-t border-amber-500/20 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-gold-gradient">
            Asegura tu Mesa en PÚA Brasa y Vino
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto font-light">
            Recibe confirmación prioritaria e inmediata a través de nuestro canal de WhatsApp.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/reservas"
              className="px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-200 transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-105 inline-block"
            >
              Reservar por WhatsApp Ahora
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
