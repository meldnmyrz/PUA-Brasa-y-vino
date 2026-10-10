import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight, Thermometer, Droplets, ShieldCheck, Award
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import ParticleConstellation from '../components/ParticleConstellation';

export default function HomePage({ onOpenItemModal, onAddToCart }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Inicio — Sabores de Brasa & Cava VIP";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredDishes = menuItems.filter(item => item.tags && item.tags.length > 0).slice(0, 6);

  return (
    <div className="pt-24 pb-28 min-h-screen text-[#f5f5f7] bg-[#000000] relative overflow-hidden font-sf-pro-text text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 HERO PRODUCT STAGE — FULL-BLEED GALLERY BLACK (#000000) */}
      <section className="relative min-h-[85vh] flex flex-col justify-between max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 z-10">
        
        {/* AVAILABILITY BADGE */}
        <div className="flex items-center gap-3">
          <span className="badge-availability">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff791b] animate-ping" />
            RESERVA VIP DISPONIBLE · POLANCO CDMX
          </span>
          <span className="text-xs text-[#86868b] hidden sm:inline-block">
            Maduración en Cava & Leña de Encino
          </span>
        </div>

        {/* HERO MAIN GRID: MONUMENTAL 80px DISPLAY HEADLINE & FLOATING HARDWARE/GASTRONOMY STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-12">
          
          {/* LEFT 7 COLUMNS: MONUMENTAL STATEMENT */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-hero-display tracking-[-1.2px] text-[#f5f5f7]">
              EL ARTE DE <br />
              <span className="text-[#f5f5f7]">LA BRASA.</span>
            </h1>
            
            <p className="text-body-apple max-w-xl text-[#86868b]">
              Cortes Angus Prime madurados en seco durante 45 días, sellados al fuego directo de encino a 600°C. Acompañados por una cava de más de 500 etiquetas internacionales curadas por sommelier.
            </p>

            {/* FLOATING DARK UTILITY CAPSULE (#333336, 36px radius) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="dark-utility-capsule max-w-md w-full sm:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#f5f5f7] leading-tight">
                    Experiencia Gastronómica desde $680 MXN
                  </span>
                  <span className="text-[11px] text-[#86868b]">
                    Incluye Maridaje de Cava & Degustación
                  </span>
                </div>
                <Link to="/reservas" className="btn-apple-blue font-semibold shrink-0">
                  <span>Reservar Mesa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <Link to="/menu" className="btn-white-outline">
                <span>Ver Carta Completa</span>
              </Link>
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: BRONZE SENSOR / EMBERS VISUAL MEDIA CARD */}
          <div className="lg:col-span-5 relative">
            <div className="card-black-media relative h-[440px] w-full group overflow-hidden border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/assets/pua-head-of.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* LIVE METRIC OVERLAYS IN PULSE RED & VITAL GREEN */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <Thermometer className="w-3.5 h-3.5 text-[#ff3037]" />
                  <span className="text-xs font-bold text-[#ff3037] font-mono">600°C EMBERS</span>
                </div>
                <div className="bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <Droplets className="w-3.5 h-3.5 text-[#00d959]" />
                  <span className="text-xs font-bold text-[#00d959] font-mono">85% HUMIDITY</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold mb-1">
                  SELLO DE ASADO A LA LEÑA
                </span>
                <p className="text-lg font-semibold text-[#f5f5f7] font-sf-pro-display">
                  Técnica ancestral con fuego de encino & mezquite.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5 CONNECTED SECTIONS NAV QUICK LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-center">
          <Link to="/nosotros" className="py-3 px-4 rounded-2xl bg-[#111111] hover:bg-[#1d1d1f] transition-colors border border-white/5 group">
            <span className="text-xs font-semibold text-[#f5f5f7] group-hover:text-[#0071e3] block">01. NOSOTROS</span>
            <span className="text-[11px] text-[#86868b]">Historia & Filosofía</span>
          </Link>
          <Link to="/menu" className="py-3 px-4 rounded-2xl bg-[#111111] hover:bg-[#1d1d1f] transition-colors border border-white/5 group">
            <span className="text-xs font-semibold text-[#f5f5f7] group-hover:text-[#0071e3] block">02. MENÚ</span>
            <span className="text-[11px] text-[#86868b]">Carta & Maridajes</span>
          </Link>
          <Link to="/servicios" className="py-3 px-4 rounded-2xl bg-[#111111] hover:bg-[#1d1d1f] transition-colors border border-white/5 group">
            <span className="text-xs font-semibold text-[#f5f5f7] group-hover:text-[#0071e3] block">03. SERVICIOS</span>
            <span className="text-[11px] text-[#86868b]">Eventos & Cava VIP</span>
          </Link>
          <Link to="/contacto" className="py-3 px-4 rounded-2xl bg-[#111111] hover:bg-[#1d1d1f] transition-colors border border-white/5 group">
            <span className="text-xs font-semibold text-[#f5f5f7] group-hover:text-[#0071e3] block">04. CONTACTO</span>
            <span className="text-[11px] text-[#86868b]">Ubicación & Reservas</span>
          </Link>
        </div>

      </section>

      {/* 02 UPGRADE COMPARISON MODULE (#111111 CHARCOAL STAGE WITH 3-COLUMN METRIC TILES) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-20 z-10 relative">
        <div className="module-charcoal-stage p-8 sm:p-14">
          
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="badge-availability">
              ESTÁNDARES DE CALIDAD PÚA
            </span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              MÁXIMA PRECISIÓN EN CADA CORTE Y ETIQUETA.
            </h2>
            <p className="text-body-apple text-[#86868b]">
              Evaluamos cada parámetro de maduración en seco y control de temperatura en la brasa para garantizar la consistencia, ternura y aroma ahumado distintivo.
            </p>
          </div>

          {/* THREE COLUMN GRID OF 28px METRIC TILES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                FUEGO DE ENCINO
              </span>
              <span className="text-metric-display text-[#ff3037] block">
                600°C
              </span>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Sellado rápido que sella los jugos naturales y crea la corteza caramelizada perfecta.
              </p>
            </div>

            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                CÁMARA DE MADURACIÓN
              </span>
              <span className="text-metric-display text-[#00d959] block">
                45 DÍAS
              </span>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Maduración en ambiente controlado a 85% de humedad relativa para maximizar la concentración de sabor.
              </p>
            </div>

            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                SELECCIÓN DE CAVA
              </span>
              <span className="text-metric-display text-[#f5f5f7] block">
                500+
              </span>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Etiquetas internacionales de Valle de Guadalupe, Rioja, Burdeos, Napa Valley y champagne.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 WHITE MERCHANDISING CARD (#ffffff PAPER CANVAS WITH INK #1d1d1f TEXT) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-20 z-10 relative">
        <div className="card-white-merchandising p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-[#1d1d1f] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              EXPERIENCIA EXCLUSIVA DEL CHEF
            </span>
            <h2 className="text-card-heading sm:text-4xl text-[#1d1d1f] font-sf-pro-display font-semibold">
              Menú Degustación & Omakase de Brasas
            </h2>
            <p className="text-[#6e6e73] text-sm leading-relaxed max-w-xl">
              Disfruta de un recorrido guiado de 5 tiempos preparado frente a tus ojos por nuestro Master Griller, maridado paso a paso con cosechas exclusivas de nuestra cava subterránea.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/reservas" className="btn-apple-blue font-semibold">
                <span>Reservar Omakase VIP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/servicios" className="inline-product-link text-xs font-semibold">
                Saber más sobre eventos privados →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed] h-72">
              <img 
                src="/assets/corte-filete-mignon.jpg" 
                alt="Omakase de Brasas Púa" 
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 04 SIGNATURE DISHES SHOWCASE & INTERACTIVE MENU DISH CARDS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-20 z-10 relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="badge-availability mb-3 inline-flex">
              SELECCIÓN DEL SOMMELIER & CHEF
            </span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              PLATILLOS DESTACADOS
            </h2>
          </div>
          <Link to="/menu" className="inline-product-link text-sm font-semibold">
            Ver Menú Completo →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <MenuItemCard
              key={dish.id}
              item={dish}
              onClick={onOpenItemModal}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#0071e3] text-white rounded-full flex items-center justify-center hover:bg-[#0077ed] transition-all border border-white/20"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
