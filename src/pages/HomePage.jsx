import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  ChevronRight, Utensils, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import Hero31SunArc from '../components/Hero31SunArc';
import MenuItemCard from '../components/MenuItemCard';

export default function HomePage({ onOpenItemModal, onAddToCart }) {
  const [heroAtmosphere, setHeroAtmosphere] = useState({
    title: 'Fuego de Brasas & Cortes Prime',
    tagline: 'Cortes Angus madurados a la leña de encino',
    accentColor: '#c89f53',
    quote: '"La paciencia del fuego de encino sella los jugos del Ribeye a 600°C."'
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PÚA Brasa y Vino — Experiencia Gastronómica de Lujo";
  }, []);

  const signatureDishes = menuItems.filter(item => item.tags && item.tags.length > 0).slice(0, 6);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f7f5] font-jakarta overflow-hidden">
      
      {/* 01 HERO SECTION (FULL SCREEN HD VIDEO + HERO 31 TIME-LAPSE ARC) */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        
        {/* Full-Screen HD Background Video Plate */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85 filter brightness-105 contrast-105"
          >
            <source src="/assets/pua-head-of.mp4" type="video/mp4" />
          </video>

          {/* Vignette Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
        </div>

        {/* HERO CONTENT OVERLAY */}
        <div className="relative z-10 max-w-5xl space-y-6 text-left">
          
          <div className="badge-amber-tag">
            ★ PÚA BRASA Y VINO — POLANCO, CDMX ★
          </div>

          <h1 className="text-title-lujo text-white tracking-tight uppercase drop-shadow-2xl">
            EL ARTE DE LA BRASA Y <span style={{ color: heroAtmosphere.accentColor }}>EL VINO</span>
          </h1>

          <p className="font-jakarta text-sm sm:text-base text-[#d4d3c9] max-w-2xl leading-relaxed font-light drop-shadow-md">
            {heroAtmosphere.tagline}. Una cocina de autor inspirada en la alta gastronomía, maridajes de cava internacional y mixología contemporánea.
          </p>

          {/* HERO 31 SUN & EMBER TIME-LAPSE ARC COMPONENT */}
          <Hero31SunArc onAtmosphereChange={(atm) => setHeroAtmosphere(atm)} />

          {/* ACTION BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-caramel-amber"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>RESERVAR MESA VIP</span>
            </Link>
            
            <Link 
              to="/menu" 
              className="btn-outline-amber"
            >
              <span>EXPLORAR MENÚ COMPLETO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 02 CLASIFICACIONES INDEPENDIENTES DEL MENÚ (SECTION CARDS) */}
      <section className="py-20 bg-[#0b0e14] border-y border-[#232730]">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-12">
          
          <div className="text-center space-y-2 mb-12">
            <span className="badge-amber-tag mx-auto">CLASIFICACIONES INDEPENDIENTES</span>
            <h2 className="text-section-title text-white">
              EXPLORA NUESTRO MENÚ POR SECCIONES
            </h2>
          </div>

          {/* Category Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.filter(c => c.id !== 'todos').map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/section/${cat.id}`)}
                className="card-lujo-obsidian p-6 rounded-[20px] border border-[#232730] hover:border-[#c89f53] text-center space-y-3 group bg-[#050505]/60 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#12141a] border border-[#c89f53]/30 flex items-center justify-center text-[#c89f53] mx-auto group-hover:bg-[#987232] group-hover:text-white transition-colors">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-garamond text-2xl text-white group-hover:text-[#c89f53] transition-colors leading-tight text-center">
                  {cat.name}
                </h3>
                <span className="text-[10px] font-mono text-[#848a96] block text-center uppercase tracking-wider">
                  Ver Sección →
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 03 SIGNATURE DISHES GRID WITH SOMMELIER WINE PAIRINGS */}
      <section className="py-24 max-w-[1300px] mx-auto px-6 sm:px-12">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="badge-sommelier-wine mx-auto">
              🍷 MARIDAJES CURADOS POR SOMMELIER
            </span>
            <h2 className="text-section-title text-white">
              ESPECIALIDADES DESTACADAS DE LA CASA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((dish) => (
              <MenuItemCard
                key={dish.id}
                item={dish}
                onClick={onOpenItemModal}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link to="/menu" className="btn-caramel-amber">
              <span>EXPLORAR MENÚ COMPLETO (118 PLATILLOS)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
