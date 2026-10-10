import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight, Thermometer, Droplets, ShieldCheck, Award
} from 'lucide-react';
import { menuItems, menuCategories, restaurantInfo } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import ParticleConstellation from '../components/ParticleConstellation';

import Features11 from '../components/Features11';

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
    <div className="pt-0 pb-28 min-h-screen text-[#f5f5f7] bg-[#000000] relative overflow-hidden font-sf-pro-text text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* ============================================================
          01 FULL-SCREEN HIGH-OPACITY VIDEO HERO STAGE (NAVBAR 100% TRANSPARENTE FLOTANTE SOBRE VIDEO)
         ============================================================ */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center pt-24 pb-12 z-10 overflow-hidden">
        
        {/* FULL-BLEED MAXIMUM OPACITY VIDEO PLAYER WITH NATURAL CONTAINED PROPORTION */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-right brightness-115 contrast-110 opacity-100 transition-all duration-700"
            style={{ 
              objectPosition: '85% center'
            }}
          >
            <source src="/assets/pua-head-of.mp4" type="video/mp4" />
            <source src="/assets/PUA HEAD OF.mp4" type="video/mp4" />
          </video>

          {/* ULTRA LIGHT GRADIENT SHADOW ONLY UNDER LEFT TEXT FOR MAXIMUM VIDEO VISIBILITY */}
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* HERO MAIN TEXT CONTENT ONLY */}
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="max-w-xl space-y-4">
            <h1 className="text-hero-display tracking-[-1.2px] text-[#ffffff] drop-shadow-[0_4px_28px_rgba(0,0,0,0.98)]">
              EL RITUAL DEL <br />
              <span className="text-[#ffffff]">FUEGO & LA CAVA.</span>
            </h1>
            
            <p className="text-body-apple max-w-lg text-[#ffffff] font-medium text-base sm:text-lg drop-shadow-[0_2px_16px_rgba(0,0,0,0.98)]">
              Cortes Angus Prime madurados en seco durante 45 días, sellados al fuego directo de encino a 600°C. Acompañados por una cava de más de 500 etiquetas internacionales curadas por sommelier.
            </p>
          </div>

          {/* CLEAN PRIMARY CALL TO ACTION BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-apple-blue font-semibold !py-3.5 !px-8 !text-xs text-white shadow-[0_4px_24px_rgba(0,113,227,0.5)]"
            >
              <span>Reservar Mesa VIP</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link 
              to="/menu" 
              className="btn-white-outline !py-3.5 !px-8 !text-xs bg-black/60 backdrop-blur-md border-white/50 hover:bg-black/80 text-white"
            >
              <span>Ver Carta Completa</span>
            </Link>
          </div>

        </div>

      </section>

      {/* ============================================================
          02 REACT BITS PRO FEATURES 11: SPLIT HEADLINE WITH 3 INDEXED CARDS
         ============================================================ */}
      <Features11 />

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
