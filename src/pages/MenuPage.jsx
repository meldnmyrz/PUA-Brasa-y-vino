import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Flame, Wine, Sparkles, X, Eye, Calendar, Utensils, 
  Wine as WineIcon, Clock, CheckCircle2, ChevronRight, Tag, ArrowRight
} from 'lucide-react';
import { menuCategories, menuItems, restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

export default function MenuPage({ onOpenItemModal, onAddToCart }) {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Menú — Carta de Platillos & Cava";
  }, []);

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on category and search query
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.pairing && item.pairing.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId) => {
    if (catId === 'todos') return menuItems.length;
    return menuItems.filter(i => i.category === catId).length;
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#000000] text-[#f5f5f7] font-sf-pro-text relative overflow-hidden text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 HERO PRODUCT STAGE */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative z-10">
        <div className="space-y-4 mb-10">
          <span className="badge-availability">
            SECCIÓN 03 // LA CARTA & VINO
          </span>
          <h1 className="text-hero-display text-[#f5f5f7]">
            EL MENÚ. <br />
            <span className="text-[#86868b]">BRASAS & CAVA DE AUTOR.</span>
          </h1>
          <p className="text-body-apple max-w-2xl text-[#86868b]">
            Cortes Angus Prime madurados asados a la leña de encino, maridajes exclusivos curados por sommeliers de la casa, entradas del mar y coctelería contemporánea.
          </p>
        </div>
      </section>

      {/* 02 CONTROLS: SEARCH BAR & CATEGORY TABS */}
      <div className="sticky top-[96px] z-40 bg-[#000000]/95 backdrop-blur-xl border-y border-white/10 py-5 px-4 sm:px-6 mb-12 shadow-2xl relative">
        <div className="max-w-[1360px] mx-auto space-y-4">
          
          {/* Search Input Bar (Pill Select Input styling) */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-6 top-1/2 -translate-y-1/2 text-[#86868b]" />
            <input
              type="text"
              placeholder="Buscar por corte, vino, ingrediente o maridaje..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pill-select-input w-full pl-12 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sticky Category Tabs (Apple Blue active pills) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-[980px] text-xs transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0071e3] text-white font-semibold'
                      : 'bg-[#333336] text-[#86868b] hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#111111] text-[#86868b]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 03 DISHES GRID */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {filteredItems.length === 0 ? (
          <div className="module-charcoal-stage p-12 text-center max-w-md mx-auto space-y-4 my-12">
            <Utensils className="w-10 h-10 text-[#86868b] mx-auto" />
            <h3 className="text-card-heading text-white">
              No hay platillos coincidentes
            </h3>
            <p className="text-xs text-[#86868b]">
              Prueba buscar otro término o vuelve a la pestaña "Todos".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-apple-blue text-xs"
            >
              Ver Todo el Menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenItemModal ? onOpenItemModal(item) : null}
                className="card-black-media group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between p-0 bg-[#000000]"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-[#111111]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    
                    {item.tags && item.tags.length > 0 && (
                      <span className="absolute top-4 left-4 badge-availability">
                        {item.tags[0]}
                      </span>
                    )}

                    {/* Price Tag */}
                    <span className="absolute bottom-4 right-4 bg-[#333336]/90 border border-white/10 text-[#f5f5f7] font-mono text-sm font-semibold px-3 py-1 rounded-[980px]">
                      ${item.price.toLocaleString()} MXN
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-card-heading text-white group-hover:text-[#0071e3] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    
                    <p className="text-body-apple text-xs text-[#86868b] line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Wine Pairing Bar */}
                    {item.pairing && (
                      <div className="mt-3 p-3 rounded-2xl bg-[#111111] border border-white/5 flex items-center gap-2.5 text-xs">
                        <WineIcon className="w-4 h-4 text-[#ff791b] shrink-0" />
                        <div className="truncate">
                          <span className="text-[10px] text-[#86868b] block font-semibold uppercase">Maridaje Sommelier</span>
                          <span className="text-white font-medium truncate">{item.pairing}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
                  <span className="text-xs text-[#86868b]">PÚA Brasa y Vino</span>
                  <span className="btn-apple-blue !py-1.5 !px-3.5 !text-[11px] font-semibold">
                    Ver platillo →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
}
