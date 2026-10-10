import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight, Wine as WineIcon
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "PÚA Brasa y Vino — Menú Gastronómico Oficial";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const signatureDishes = menuItems.filter(item => item.tags && item.tags.length > 0).slice(0, 6);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f4f4f5] overflow-hidden font-sans-pua">
      
      {/* 01 FULL-BLEED HERO SECTION — MATCHING MENU-PUA.VERCEL.APP */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pt-28 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        
        {/* Full-bleed background video plate */}
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
          {/* Dark gradient overlay for crystal clear readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
        </div>

        {/* HERO CONTENT OVERLAY */}
        <div className="relative z-10 max-w-4xl space-y-6 text-left">
          
          {/* LIME BADGE TAG */}
          <div className="badge-lime-pua shadow-md">
            <span>★ PÚA BRASA Y VINO — POLANCO, CDMX ★</span>
          </div>

          {/* DISPLAY HEADLINE IN CORMORANT GARAMOND */}
          <h1 className="text-title-display text-white tracking-tight uppercase drop-shadow-2xl">
            EL ARTE DE LA BRASA Y <span className="text-[#e6ff55]">EL VINO</span>
          </h1>

          {/* SUBTITLE */}
          <p className="font-sans-pua text-sm sm:text-base text-[#9a9a9a] max-w-2xl leading-relaxed font-light drop-shadow-md">
            Cortes de carne Angus prime asados a la leña de encino, maridajes exclusivos curados por sommeliers de la casa, cocina de mar y mixología de autor.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-lime-pua shadow-[0_0_25px_rgba(230,255,85,0.35)]"
            >
              <Calendar className="w-4 h-4 stroke-[2.5]" />
              <span>RESERVAR MESA VIP</span>
            </Link>
            
            <Link 
              to="/menu" 
              className="btn-outline-pua"
            >
              <span>EXPLORAR MENÚ OFICIAL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 02 CATEGORY QUICK ACCESS SECTION */}
      <section className="py-16 bg-[#0e0f14] border-y border-[#1f2128]">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-12">
          
          <div className="text-center space-y-2 mb-10">
            <div className="badge-gold-pua mx-auto">CATEGORÍAS DE LA CASA</div>
            <h2 className="font-serif-pua text-3xl sm:text-5xl text-white">
              EXPLORA NUESTRO MENÚ GASTRONÓMICO
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuCategories.filter(c => c.id !== 'todos').map((cat) => (
              <Link
                key={cat.id}
                to="/menu"
                className="card-menu-pua p-6 rounded-2xl border border-[#1f2128] hover:border-[#e6ff55] text-center space-y-3 group bg-[#050505]/60"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141620] border border-[#e6ff55]/30 flex items-center justify-center text-[#e6ff55] mx-auto group-hover:bg-[#e6ff55] group-hover:text-black transition-colors">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-serif-pua text-xl text-white group-hover:text-[#e6ff55] transition-colors leading-tight">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 03 SIGNATURE DISHES & WINE PAIRINGS SHOWCASE */}
      <section className="py-24 max-w-[1300px] mx-auto px-6 sm:px-12">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <div className="badge-lime-pua mx-auto">SELECCIÓN DEL CHEF & SOMMELIER</div>
            <h2 className="font-serif-pua text-3xl sm:text-5xl text-white">
              PLATILLOS DESTACADOS CON MARIDAJE
            </h2>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((item) => (
              <div 
                key={item.id}
                className="card-menu-pua rounded-[20px] overflow-hidden group border border-[#1f2128] hover:border-[#e6ff55] transition-all p-0 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-black">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 right-3 bg-[#050505]/90 border border-[#e6ff55]/40 text-[#e6ff55] font-mono text-sm font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      ${item.price.toLocaleString()} MXN
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif-pua text-2xl text-white group-hover:text-[#e6ff55] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-sans-pua text-xs text-[#9a9a9a] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {item.pairing && (
                      <div className="mt-3 p-2.5 rounded-xl bg-[#141620] border border-[#e6ff55]/20 flex items-center gap-2 text-xs">
                        <WineIcon className="w-4 h-4 text-[#e6ff55] shrink-0" />
                        <div className="truncate">
                          <span className="text-[10px] text-[#e6ff55] block font-bold uppercase tracking-wider">Maridaje Sugerido</span>
                          <span className="text-white font-medium truncate">{item.pairing}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link 
                    to="/menu" 
                    className="w-full btn-outline-pua py-2.5 text-xs text-[#e6ff55] hover:bg-[#e6ff55] hover:text-black mt-2"
                  >
                    <span>Ver Ficha Completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link to="/menu" className="btn-lime-pua">
              <span>EXPLORAR MENÚ COMPLETO (118 PLATILLOS)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#e6ff55] text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-[#f1ff7a] transition-all transform hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
