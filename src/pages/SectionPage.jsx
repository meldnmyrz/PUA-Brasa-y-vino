import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Flame, Wine, Utensils, Sparkles } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import ParticleConstellation from '../components/ParticleConstellation';

export default function SectionPage({ onOpenItemModal, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentCatId = id || 'cortes';

  const categoryIndex = menuCategories.findIndex(c => c.id === currentCatId);
  const currentCategory = menuCategories[categoryIndex] || menuCategories[1];

  // Prev & Next Category for bottom navigation
  const prevCat = menuCategories[categoryIndex > 0 ? categoryIndex - 1 : menuCategories.length - 1];
  const nextCat = menuCategories[categoryIndex < menuCategories.length - 1 ? categoryIndex + 1 : 0];

  const sectionDishes = menuItems.filter(item => item.category === currentCatId);

  useEffect(() => {
    document.title = `PÚA Brasa y Vino | ${currentCategory.name}`;
    window.scrollTo(0, 0);
  }, [currentCatId, currentCategory.name]);

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#000000] text-[#ffffff] font-subtext-stellar text-left relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* BREADCRUMBS BAR */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-8 relative z-10">
        <nav className="flex items-center gap-2 text-xs font-mono text-[#888888]">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/menu" className="hover:text-white transition-colors">Menú</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#C4924A] font-semibold">{currentCategory.name}</span>
        </nav>
      </div>

      {/* SECTION HERO HEADER */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-12 relative z-10">
        <div className="card-obsidian p-8 sm:p-12 border border-[#2c2c2e] space-y-4 rounded-[10px] bg-[#0d0e12] relative overflow-hidden">
          <div className="eyebrow-tag-pill">
            CLASIFICACIÓN DEL MENÚ
          </div>
          
          <h1 className="font-display-stellar text-4xl sm:text-6xl text-white uppercase">
            {currentCategory.name}
          </h1>

          <p className="font-subtext-stellar text-sm sm:text-base text-[#888888] max-w-2xl leading-relaxed">
            Explora nuestra propuesta exclusiva en {currentCategory.name.toLowerCase()}. Elaborada con los más altos estándares de alta cocina al carbón de encino y maridajes recomendados.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#888888]">
            <span>{sectionDishes.length} Platillos disponibles</span>
            <span>•</span>
            <span className="text-[#C4924A]">🍷 Maridajes de Sommelier Incluidos</span>
          </div>
        </div>
      </div>

      {/* DISHES GRID FOR THIS SECTION */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 mb-16 relative z-10">
        {sectionDishes.length === 0 ? (
          <div className="p-12 text-center text-xs text-[#888888] card-obsidian border border-[#2c2c2e] rounded-[10px]">
            No se encontraron platillos en esta clasificación.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionDishes.map((dish) => (
              <MenuItemCard
                key={dish.id}
                item={dish}
                onClick={onOpenItemModal}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM SECTION NAVIGATION (PÁGINA ANTERIOR / SIGUIENTE PÁGINA) */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 pt-8 border-t border-[#2c2c2e] relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <Link
            to={prevCat.id === 'todos' ? '/menu' : `/section/${prevCat.id}`}
            className="w-full sm:w-auto btn-ghost-border flex items-center justify-center gap-2 py-3 px-6 text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Clasificación Anterior: {prevCat.name}</span>
          </Link>

          <Link
            to={nextCat.id === 'todos' ? '/menu' : `/section/${nextCat.id}`}
            className="w-full sm:w-auto btn-gold-luxury flex items-center justify-center gap-2 py-3 px-6 text-xs text-black font-bold"
          >
            <span>Siguiente Clasificación: {nextCat.name}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>

        </div>
      </div>

    </div>
  );
}
