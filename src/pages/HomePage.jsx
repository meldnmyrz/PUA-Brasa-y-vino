import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight, Wine as WineIcon
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import Hero31SunArc from '../components/Hero31SunArc';
import MenuItemCard from '../components/MenuItemCard';

export default function HomePage({ onOpenItemModal, onAddToCart }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [heroAtmosphere, setHeroAtmosphere] = useState({
    title: 'Fuego de Brasas & Cortes Prime',
    tagline: 'Cortes Angus madurados a la leña de encino',
    accentColor: '#C4924A',
    quote: '"La paciencia del fuego de encino sella los jugos del Ribeye a 600°C."'
  });

  const navigate = useNavigate();

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

  const featuredDishes = menuItems.filter(item => item.tags && item.tags.length > 0).slice(0, 6);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#F4F0EA] overflow-hidden font-sans">
      
      {/* 01 HERO SECTION — SLEEK GOOGLE FLOW 28px CONTAINER WITH HD VIDEO & HERO 31 ARC */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto z-10">
        <div className="relative rounded-[28px] overflow-hidden border border-[#232730] bg-[#090a0f] min-h-[640px] flex flex-col justify-between shadow-2xl">
          
          {/* HD BACKGROUND VIDEO — HIGH CONTRAST FOR 3D PUA LOGO EMBLEM */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 filter brightness-110 contrast-105"
            >
              <source src="/assets/pua-head-of.mp4" type="video/mp4" />
            </video>

            {/* Dark gradient overlay fading left-to-right for readable text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 sm:via-[#000000]/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/40" />
          </div>

          {/* TOP FLOATING TAG */}
          <div className="relative z-20 flex justify-between items-center p-6 sm:p-8">
            <div className="badge-gold-pill">
              ★ PÚA BRASA Y VINO // POLANCO, CDMX
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#aaaaaa] bg-black/50 backdrop-blur-md border border-[#232730] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>MESA VIP DISPONIBLE</span>
            </div>
          </div>

          {/* MIDDLE CONTENT & HERO 31 TIME-LAPSE ARC */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-1">
                <h1 className="font-serif-lujo text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[0.95] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  EL ARTE DE
                </h1>
                <h1 className="font-serif-lujo text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[0.95] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  LA BRASA
                </h1>
                <div className="font-script-lujo text-3xl sm:text-5xl lg:text-6xl text-[#C4924A] py-1 block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] -mt-2">
                  y el vino
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#dddddd] max-w-xl leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                {heroAtmosphere.tagline}. Una propuesta gastronómica de fuego, tierra y tiempo maridada con más de 500 etiquetas seleccionadas.
              </p>

              {/* HERO 31 CELESTIAL TIME-LAPSE ARC */}
              <Hero31SunArc onAtmosphereChange={(atm) => setHeroAtmosphere(atm)} />

              {/* ACTION BUTTONS */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  to="/reservas" 
                  className="btn-gold-luxury"
                >
                  <span>Reservar Mesa VIP</span>
                  <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                </Link>
                
                <Link 
                  to="/menu" 
                  className="btn-ghost-luxury"
                >
                  <span>Explorar Menú Completo</span>
                </Link>
              </div>

            </div>

            {/* VISUAL RIGHT COLUMN FOCUSING ON 3D LOGO VIDEO */}
            <div className="hidden lg:block lg:col-span-4 relative h-64 pointer-events-none" />

          </div>

          {/* BOTTOM BAR: FLOATING OVERLAY CARD */}
          <div className="relative z-20 px-6 sm:px-12 py-5 flex items-center justify-between border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="flex items-center gap-3 text-xs font-sans text-white">
              <Flame className="w-4 h-4 text-[#C4924A]" />
              <span>Cocina de Brasa a la Leña de Encino</span>
            </div>

            <Link 
              to="/reservas"
              className="flex items-center gap-2 text-[#C4924A] hover:text-white text-xs font-sans font-semibold transition-colors"
            >
              <span>+ Reservar Experiencia VIP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 02 CLASIFICACIONES INDEPENDIENTES DEL MENÚ */}
      <section className="py-20 bg-[#090a0f] border-y border-[#232730]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-12 text-left">
          
          <div className="text-center space-y-2 mb-12">
            <span className="badge-gold-pill mx-auto">CLASIFICACIONES DEL MENÚ</span>
            <h2 className="font-serif-lujo text-3xl sm:text-5xl text-white">
              EXPLORA NUESTRAS SECCIONES GASTRONÓMICAS
            </h2>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.filter(c => c.id !== 'todos').map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/section/${cat.id}`)}
                className="card-lujo-obsidian p-6 rounded-2xl border border-[#232730] hover:border-[#C4924A] text-left space-y-3 group bg-[#000000]/60 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d0e12] border border-[#C4924A]/30 flex items-center justify-center text-[#C4924A] group-hover:bg-[#C4924A] group-hover:text-black transition-colors">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-serif-lujo text-xl text-white group-hover:text-[#C4924A] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <span className="text-[10px] font-mono text-[#aaaaaa] block uppercase tracking-wider">
                  Ver Sección →
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 03 SIGNATURE DISHES & SOMMELIER PAIRINGS */}
      <section className="py-24 max-w-[1360px] mx-auto px-6 sm:px-12 text-left">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="badge-wine-pill mx-auto">
              🍷 MARIDAJES CURADOS POR SOMMELIER
            </span>
            <h2 className="font-serif-lujo text-3xl sm:text-5xl text-white">
              SELECCIÓN DEL CHEF & SOMMELIER
            </h2>
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

          <div className="pt-6 text-center">
            <Link to="/menu" className="btn-gold-luxury">
              <span>Ver Carta Completa de Platillos & Vinos</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C4924A] text-black rounded-xl flex items-center justify-center shadow-2xl hover:bg-[#E5C388] transition-all transform hover:scale-110 border border-white/20"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
