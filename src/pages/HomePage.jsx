import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, Wine, Calendar, ArrowRight, Sparkles, 
  MapPin, Phone, Plus, ChevronUp, ChefHat, ArrowUpRight, Wine as WineIcon, Eye
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import ParticleConstellation from '../components/ParticleConstellation';

export default function HomePage({ onOpenItemModal, onAddToCart }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
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
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden font-subtext-stellar text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 HEADER HERO BLOCK — MATCHING NOSOTROS STELLAR STYLE */}
      <div className="max-w-[1200px] mx-auto px-4 text-center space-y-5 mb-20 relative z-10">
        <div className="eyebrow-tag-pill mx-auto">
          GASTRONOMÍA A LAS BRASAS & CAVA DE AUTOR
        </div>
        
        <h1 className="font-display-stellar text-5xl sm:text-7xl md:text-8xl text-[#ffffff] uppercase tracking-tight leading-[0.95]">
          EL ARTE DE LA BRASA <br className="hidden sm:block" />
          <span className="text-[#C4924A]">Y EL VINO</span>
        </h1>
        
        <p className="font-subtext-stellar max-w-2xl mx-auto text-[#888888] text-sm sm:text-base leading-relaxed">
          Cortes Angus prime madurados asados a la leña de encino, maridajes de autor curados por sommeliers de la casa y alta cocina contemporánea.
        </p>

        {/* HERO CTA BUTTONS */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link 
            to="/reservas" 
            className="btn-gold-luxury px-8 py-3.5 flex items-center gap-2 text-xs font-bold text-black"
          >
            <span>Reservar Mesa VIP</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </Link>
          
          <Link 
            to="/menu" 
            className="btn-ghost-border px-8 py-3.5 flex items-center gap-2 text-xs"
          >
            <span>Explorar Menú Completo</span>
          </Link>
        </div>
      </div>

      {/* 02 FEATURED STORY GRID — TWO COLUMN RHYTHM (MATCHING NOSOTROS PAGE) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28 relative z-10">
        
        {/* Left Column Text */}
        <div className="space-y-6">
          <div className="eyebrow-tag-pill">FUEGO & TRADICIÓN</div>
          
          <h2 className="font-display-stellar text-3xl sm:text-5xl text-[#ffffff] leading-tight">
            EL RITUAL DEL FUEGO DE ENCINO
          </h2>
          
          <p className="font-subtext-stellar text-[#888888] text-sm leading-relaxed">
            En PÚA Brasa y Vino, cada corte se cocina respetando la paciencia del fuego. La leña de encino y mezquite aporta un sello ahumado inconfundible a 600°C, sellando los jugos y la textura de nuestras carnes Angus Prime.
          </p>
          
          <p className="font-subtext-stellar text-[#888888] text-sm leading-relaxed">
            Acompaña la experiencia con nuestra selección de más de 500 etiquetas internacionales, guías de sommelier y mixología de autor diseñada para potenciar cada platillo.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="card-obsidian p-6 rounded-[10px] text-center border border-[#2c2c2e]">
              <span className="font-display-stellar text-3xl text-[#C4924A] block">600°C</span>
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">Sellado a la Leña</span>
            </div>
            <div className="card-obsidian p-6 rounded-[10px] text-center border border-[#2c2c2e]">
              <span className="font-display-stellar text-3xl text-[#C4924A] block">500+</span>
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">Etiquetas de Cava</span>
            </div>
          </div>
        </div>

        {/* Right Column Video Card (Matching Nosotros Video Showcase) */}
        <div className="relative rounded-[10px] overflow-hidden border border-[#2c2c2e] shadow-none h-[480px] bg-[#171718]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-90"
          >
            <source src="/assets/pua-head-of.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
          <div className="absolute bottom-8 left-8 right-8 text-center border-t border-[#C4924A]/40 pt-4">
            <span className="font-script-lujo text-3xl text-[#C4924A] block">
              "Fuego, Tiempo y Devoción Gastronómica"
            </span>
          </div>
        </div>

      </div>

      {/* 03 CLASIFICACIONES INDEPENDIENTES DEL MENÚ */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <div className="eyebrow-tag-pill mx-auto">CLASIFICACIONES DEL MENÚ</div>
          <h2 className="font-display-stellar text-3xl sm:text-5xl text-[#ffffff] tracking-tight">
            EXPLORA NUESTRAS SECCIONES GASTRONÓMICAS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {menuCategories.filter(c => c.id !== 'todos').map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/section/${cat.id}`)}
              className="card-obsidian p-6 rounded-[10px] border border-[#2c2c2e] hover:border-[#C4924A] text-left space-y-3 group bg-[#0d0e12] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#171718] border border-[#C4924A]/30 flex items-center justify-center text-[#C4924A] group-hover:bg-gradient-to-r group-hover:from-[#C4924A] group-hover:to-[#E5C388] group-hover:text-black transition-colors">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-display-stellar text-xl text-white group-hover:text-[#C4924A] transition-colors leading-tight">
                {cat.name}
              </h3>
              <span className="text-[10px] font-mono text-[#888888] block uppercase tracking-wider group-hover:text-white transition-colors">
                Ver Sección →
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* 04 SIGNATURE DISHES & SOMMELIER PAIRINGS */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <div className="eyebrow-tag-pill mx-auto">🍷 MARIDAJES CURADOS POR SOMMELIER</div>
          <h2 className="font-display-stellar text-3xl sm:text-5xl text-[#ffffff] tracking-tight">
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

        <div className="pt-12 text-center">
          <Link 
            to="/menu" 
            className="btn-gold-luxury inline-flex items-center gap-2 text-xs font-bold text-black px-8 py-3.5"
          >
            <span>Ver Carta Completa de Platillos & Vinos</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </Link>
        </div>

      </div>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C4924A] text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-[#E5C388] transition-all transform hover:scale-110 border border-white/20"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

    </div>
  );
}
