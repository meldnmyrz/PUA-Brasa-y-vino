import React, { useState, useEffect, useRef } from 'react';
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
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Inicio — Sabores de Brasa & Cava VIP";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Auto-play hero video with 100% opacity
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    attemptPlay();

    const handleFirstTouch = () => {
      attemptPlay();
      window.removeEventListener('touchstart', handleFirstTouch);
    };
    window.addEventListener('touchstart', handleFirstTouch, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleFirstTouch);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredDishes = [
    {
      id: "feat-1",
      name: "Tomahawk Angus Prime (45 Días de Maduración)",
      category: "cortes",
      price: 1350,
      description: "Corte grueso marmoleado con hueso, asado pacientemente al fuego de leña de encino y terminado con mantequilla de romero y sal marina ahumada.",
      image: "/assets/corte-filete-mignon.jpg",
      tags: ["Corte Insignia", "Maduración 45D"],
      pairing: "Gran Reserva Malbec / Cabernet Sauvignon",
      waitTime: "25 min"
    },
    {
      id: "feat-2",
      name: "Tuétanos a la Leña con Escamoles",
      category: "entradas",
      price: 420,
      description: "Canoas de tuétano rostizadas a fuego vivo de leña, montadas con escamoles a la mantequilla de epazote, perejil crocante y tortillas de comal.",
      image: "/assets/tuetanos-carne-brasas.jpg",
      tags: ["Especialidad del Fuego", "Tradición"],
      pairing: "Mezcal Espadín Ancestral / Tempranillo",
      waitTime: "15 min"
    },
    {
      id: "feat-3",
      name: "Tiradito de Atún Aleta Azul & Ponzu Trufado",
      category: "mariscos",
      price: 395,
      description: "Láminas frescas de atún aleta azul con emulsión de ponzu cítrico, aceite de ajonjolí tostado, trufa negra fresca y aguacate tatemado.",
      image: "/assets/tuna-sashimi-tiradito.jpg",
      tags: ["Especialidad del Mar", "Pesca del Día"],
      pairing: "Sauvignon Blanc Valle de Guadalupe",
      waitTime: "12 min"
    },
    {
      id: "feat-4",
      name: "Parrillada al Fuego de Encino (Master Grill)",
      category: "cortes",
      price: 1180,
      description: "Degustación selecta de cortes Prime asados a las brasas vivas, chistorra artesanal y guarnición de vegetales ahumados al sarmiento con chimichurri.",
      image: "/assets/parrillada-brasas.jpg",
      tags: ["Para Compartir", "Master Griller"],
      pairing: "Ribera del Duero Crianza",
      waitTime: "30 min"
    },
    {
      id: "feat-5",
      name: "Smoked Mezcalita Flameada de Autor",
      category: "mixologia",
      price: 260,
      description: "Destilado de agave artesanal infusionado con romero flameado al momento frente al comensal, licor de chile ancho y campana de humo de mezquite.",
      image: "/assets/mixologia-flameada-bar.jpg",
      tags: ["Mixología de Autor", "Flameado"],
      pairing: "Maridaje ideal para entradas y cortes a la leña",
      waitTime: "8 min"
    },
    {
      id: "feat-6",
      name: "Gran Cava Sommelier & Cosechas Privadas",
      category: "maridajes",
      price: 1450,
      description: "Selección curada de más de 500 etiquetas internacionales, servicio a temperatura controlada en cristalería Riedel y asesoría por nuestro sommelier.",
      image: "/assets/cava-vino-mesa.jpg",
      tags: ["Cava Privada", "Etiquetas VIP"],
      pairing: "Maridaje guiado en 5 tiempos de brasas",
      waitTime: "5 min"
    }
  ];

  return (
    <div className="pt-0 pb-28 min-h-screen text-[#f5f5f7] bg-[#000000] relative overflow-hidden font-sf-pro-text text-left">
      
      {/* ============================================================
          01 FULL-SCREEN VIDEO HERO STAGE (PUA BRAND OF A 100% OPACIDAD)
         ============================================================ */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center pt-24 pb-12 z-10 overflow-hidden">
        
        {/* FULL-BLEED VIDEO WITH 100% OPACITY */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className="w-full h-full object-cover opacity-100"
          >
            <source src="/assets/pua-brand-of.mp4" type="video/mp4" />
            <source src="/pua-brand-of.mp4" type="video/mp4" />
            <source src="/assets/PUA BRAND OF.mp4" type="video/mp4" />
            <source src="/PUA BRAND OF.mp4" type="video/mp4" />
          </video>
        </div>

        {/* HERO MAIN TEXT CONTENT */}
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sf-pro-display font-semibold tracking-[-1.2px] text-[#ffffff] drop-shadow-[0_4px_28px_rgba(0,0,0,0.98)] leading-[1.1]">
              EL RITUAL DEL <br />
              <span className="text-[#ffffff]">FUEGO & LA CAVA.</span>
            </h1>
            
            <p className="text-body-apple max-w-lg text-[#ffffff] font-medium text-sm sm:text-base md:text-lg drop-shadow-[0_2px_18px_rgba(0,0,0,0.98)]">
              Cortes Angus Prime madurados en seco durante 45 días, sellados al fuego directo de encino a 600°C. Acompañados por una cava de más de 500 etiquetas internacionales curadas por sommelier.
            </p>
          </div>

          {/* CLEAN PRIMARY CALL TO ACTION BUTTONS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link 
              to="/reservas" 
              className="btn-gold-luxury font-semibold !py-3.5 !px-8 !text-xs shadow-[0_4px_24px_rgba(196,146,74,0.4)]"
            >
              <span>Reservar Mesa VIP</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <a 
              href="https://menu-pua.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-white-outline !py-3.5 !px-8 !text-xs bg-black/60 backdrop-blur-md border-white/40 hover:bg-black/80 text-white flex items-center gap-2"
            >
              <span>Ver Carta Completa</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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
            <span className="text-[#1d1d1f] text-xs font-mono uppercase tracking-widest font-semibold block">
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
            <span className="text-xs font-mono text-[#c49a4a] uppercase tracking-widest block font-semibold mb-2">
              SELECCIÓN DEL CHEF & SOMMELIER
            </span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              PLATILLOS Y BEBIDAS DESTACADAS
            </h2>
          </div>
          <a 
            href="https://menu-pua.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-product-link text-sm font-semibold flex items-center gap-1.5"
          >
            <span>Ver Menú Completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
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

    </div>
  );
}
