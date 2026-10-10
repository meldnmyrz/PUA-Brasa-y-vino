import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Flame, Wine, Sparkles, X, Eye, Calendar, Utensils, 
  Wine as WineIcon, Clock, CheckCircle2, ChevronRight, Tag
} from 'lucide-react';
import { menuCategories, menuItems, restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino — Menú Gastronómico Oficial";
  }, []);

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDishModal, setActiveDishModal] = useState(null);

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

  const handleReserveDish = (dishName) => {
    setActiveDishModal(null);
    navigate('/reservas', { state: { preferredDish: dishName } });
  };

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#000000] text-[#ffffff] font-subtext-stellar relative overflow-hidden text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 OFFICIAL MENU HERO BANNER */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <div className="card-obsidian p-8 sm:p-12 border border-[#2c2c2e] relative overflow-hidden space-y-4 rounded-[10px]">
          <div className="eyebrow-tag-pill mx-auto">
            MENÚ GASTRONÓMICO PÚA
          </div>
          <h1 className="font-display-stellar text-4xl sm:text-6xl md:text-7xl text-[#ffffff] uppercase tracking-tight">
            GASTRONOMÍA A LAS BRASAS & <span className="text-[#C4924A]">CAVA DE AUTOR</span>
          </h1>
          <p className="font-subtext-stellar max-w-2xl mx-auto text-[#888888] text-sm sm:text-base leading-relaxed">
            Cortes Angus prime asados a la leña de encino, maridajes exclusivos curados por sommeliers de la casa, entradas gourmet y mixología contemporánea.
          </p>
        </div>
      </div>

      {/* 02 CONTROLS: SEARCH BAR & CATEGORY TABS */}
      <div className="sticky top-[68px] z-40 bg-[#000000]/95 backdrop-blur-xl border-y border-[#2c2c2e] py-4 px-4 sm:px-6 mb-12 shadow-2xl relative">
        <div className="max-w-[1300px] mx-auto space-y-4">
          
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#C4924A]" />
            <input
              type="text"
              placeholder="Buscar por corte, vino, ingrediente o maridaje (ej. Rib Eye, Chardonnay)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-[#171718] border border-[#2c2c2e] rounded-full text-white placeholder-[#888888] text-xs sm:text-sm focus:outline-none focus:border-[#C4924A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sticky Category Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C4924A] via-[#E5C388] to-[#A67531] text-black font-bold shadow-[0_0_15px_rgba(196,146,74,0.4)]'
                      : 'bg-[#171718] text-[#888888] border border-[#2c2c2e] hover:border-[#C4924A] hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-black text-[#C4924A]' : 'bg-[#222224] text-[#888888]'
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
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {filteredItems.length === 0 ? (
          <div className="card-obsidian p-12 text-center max-w-md mx-auto space-y-4 my-12 border border-[#2c2c2e] rounded-[10px]">
            <Utensils className="w-10 h-10 text-[#C4924A] mx-auto" />
            <h3 className="font-display-stellar text-2xl text-white">
              No hay coincidencias en el menú
            </h3>
            <p className="text-xs text-[#888888]">
              Intenta buscar por otro término o selecciona "Todo el Menú".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-gold-luxury text-xs py-2.5 px-6"
            >
              Ver Todo el Menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveDishModal(item)}
                className="card-obsidian rounded-[10px] overflow-hidden group cursor-pointer border border-[#2c2c2e] hover:border-[#C4924A] transition-all duration-300 flex flex-col justify-between p-0 bg-[#0d0e12]"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-90" />
                    
                    {item.tags && item.tags.length > 0 && (
                      <span className="absolute top-3 left-3 eyebrow-tag-pill !py-1 !px-2.5 text-[10px]">
                        ★ {item.tags[0]}
                      </span>
                    )}

                    {/* Price Tag */}
                    <span className="absolute bottom-3 right-3 bg-[#000000]/90 border border-[#C4924A]/50 text-[#C4924A] font-mono text-sm font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      ${item.price.toLocaleString()} MXN
                    </span>

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs">
                      <span className="btn-gold-luxury text-xs py-2 px-4 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-black" />
                        <span>Ver Platillo & Maridaje</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="font-display-stellar text-2xl text-white group-hover:text-[#C4924A] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    
                    <p className="font-subtext-stellar text-xs text-[#888888] line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Wine Pairing Bar if Available */}
                    {item.pairing && (
                      <div className="mt-3 p-2.5 rounded-lg bg-[#171718] border border-[#C4924A]/30 flex items-center gap-2 text-xs">
                        <WineIcon className="w-4 h-4 text-[#C4924A] shrink-0" />
                        <div className="truncate">
                          <span className="text-[10px] text-[#C4924A] block font-bold uppercase tracking-wider">Maridaje Sugerido</span>
                          <span className="text-white font-medium truncate">{item.pairing}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Tags & Action */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#2c2c2e] mt-3">
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#171718] border border-[#2c2c2e] text-[#888888] px-2 py-0.5 rounded-md font-mono"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs text-[#C4924A] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 pt-3">
                    Detalles
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 04 DISH DETAIL MODAL DRAWER */}
      {activeDishModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveDishModal(null)}
        >
          <div 
            className="bg-[#0d0e12] border border-[#C4924A]/50 rounded-[10px] max-w-2xl w-full overflow-hidden shadow-2xl relative space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-72 bg-black">
              <img 
                src={activeDishModal.image} 
                alt={activeDishModal.name} 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveDishModal(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#C4924A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 bg-[#000000]/90 border border-[#C4924A] text-[#C4924A] font-mono text-lg font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
                ${activeDishModal.price.toLocaleString()} MXN
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5 text-left">
              <div className="space-y-1">
                <span className="eyebrow-tag-pill mb-1">PÚA BRASA Y VINO</span>
                <h2 className="font-display-stellar text-3xl sm:text-4xl text-white">
                  {activeDishModal.name}
                </h2>
              </div>

              <p className="font-subtext-stellar text-xs sm:text-sm text-[#888888] leading-relaxed">
                {activeDishModal.description}
              </p>

              {/* Sommelier Wine Pairing Card */}
              {activeDishModal.pairing && (
                <div className="p-4 rounded-lg bg-[#171718] border border-[#C4924A]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#C4924A] via-[#E5C388] to-[#A67531] text-black flex items-center justify-center shrink-0">
                    <WineIcon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#C4924A] font-bold uppercase tracking-wider">Recomendación de Maridaje por Sommelier</h4>
                    <p className="text-sm text-white font-medium mt-0.5">{activeDishModal.pairing}</p>
                  </div>
                </div>
              )}

              {/* Modal Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleReserveDish(activeDishModal.name)}
                  className="w-full sm:flex-1 btn-gold-luxury py-3.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>Reservar Mesa con este Platillo</span>
                </button>
                <button
                  onClick={() => setActiveDishModal(null)}
                  className="w-full sm:w-auto btn-ghost-border py-3.5 px-6"
                >
                  Cerrar Ficha
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
