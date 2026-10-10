import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Flame, Wine, Sparkles, X, Eye, Calendar, Utensils, 
  Wine as WineIcon, Clock, CheckCircle2, ChevronRight, Tag
} from 'lucide-react';
import { menuCategories, menuItems, restaurantInfo } from '../data/menuData';

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
    <div className="pt-28 pb-24 min-h-screen bg-[#050505] text-[#f4f4f5] font-sans-pua relative">
      
      {/* 01 OFFICIAL MENU HERO BANNER */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="card-menu-pua p-8 sm:p-12 border border-[#1f2128] relative overflow-hidden space-y-4 rounded-[20px] bg-[#0e0f14]/90">
          <div className="badge-lime-pua mx-auto">
            ★ MENÚ OFICIAL — PÚA BRASA Y VINO ★
          </div>
          <h1 className="text-title-display text-white uppercase tracking-tight">
            GASTRONOMÍA A LAS BRASAS & <span className="text-[#e6ff55]">CAVA DE AUTOR</span>
          </h1>
          <p className="font-sans-pua max-w-2xl mx-auto text-[#9a9a9a] text-sm sm:text-base leading-relaxed">
            Cortes Angus prime asados a la leña de encino, maridajes exclusivos curados por sommeliers de la casa, entradas gourmet y mixología contemporánea.
          </p>
        </div>
      </div>

      {/* 02 CONTROLS: SEARCH BAR & CATEGORY TABS */}
      <div className="sticky top-[68px] z-40 bg-[#050505]/95 backdrop-blur-xl border-y border-[#1f2128] py-4 px-4 sm:px-6 mb-12 shadow-2xl">
        <div className="max-w-[1300px] mx-auto space-y-4">
          
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#e6ff55]" />
            <input
              type="text"
              placeholder="Buscar por corte, vino, ingrediente o maridaje (ej. Rib Eye, Chardonnay)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-[#0e0f14] border border-[#1f2128] rounded-full text-white placeholder-[#9a9a9a] text-xs sm:text-sm focus:outline-none focus:border-[#e6ff55] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a9a9a] hover:text-white"
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
                  className={`px-4 py-2 rounded-full text-xs font-sans-pua uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#e6ff55] text-black font-bold shadow-[0_0_15px_rgba(230,255,85,0.3)]'
                      : 'bg-[#0e0f14] text-[#9a9a9a] border border-[#1f2128] hover:border-[#e6ff55] hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-black text-[#e6ff55]' : 'bg-[#1a1c26] text-[#9a9a9a]'
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
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredItems.length === 0 ? (
          <div className="card-menu-pua p-12 text-center max-w-md mx-auto space-y-4 my-12 border border-[#1f2128] rounded-[20px]">
            <Utensils className="w-10 h-10 text-[#e6ff55] mx-auto" />
            <h3 className="font-serif-pua text-2xl text-white">
              No hay coincidencias en el menú
            </h3>
            <p className="text-xs text-[#9a9a9a]">
              Intenta buscar por otro término o selecciona "Todo el Menú".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-lime-pua"
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
                className="card-menu-pua rounded-[20px] overflow-hidden group cursor-pointer border border-[#1f2128] hover:border-[#e6ff55] transition-all duration-300 flex flex-col justify-between p-0 bg-[#0e0f14]"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-transparent to-transparent opacity-90" />
                    
                    {item.tags && item.tags.length > 0 && (
                      <span className="absolute top-3 left-3 badge-lime-pua">
                        ★ {item.tags[0]}
                      </span>
                    )}

                    {/* Price Tag */}
                    <span className="absolute bottom-3 right-3 bg-[#050505]/90 border border-[#e6ff55]/40 text-[#e6ff55] font-mono text-sm font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      ${item.price.toLocaleString()} MXN
                    </span>

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                      <span className="btn-lime-pua text-xs py-2 px-4 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Ver Platillo & Maridaje
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="font-serif-pua text-2xl text-white group-hover:text-[#e6ff55] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    
                    <p className="font-sans-pua text-xs text-[#9a9a9a] line-clamp-3 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Wine Pairing Bar if Available */}
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

                {/* Footer Tags & Action */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#050505] border border-[#1f2128] text-[#9a9a9a] px-2 py-0.5 rounded-md font-mono"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs text-[#e6ff55] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 pt-3">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveDishModal(null)}
        >
          <div 
            className="bg-[#0e0f14] border border-[#e6ff55]/40 rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl relative space-y-0"
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
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#e6ff55] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 bg-[#050505]/90 border border-[#e6ff55] text-[#e6ff55] font-mono text-lg font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
                ${activeDishModal.price.toLocaleString()} MXN
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5 text-left">
              <div className="space-y-1">
                <span className="badge-lime-pua mb-1">PÚA BRASA Y VINO</span>
                <h2 className="font-serif-pua text-3xl sm:text-4xl text-white">
                  {activeDishModal.name}
                </h2>
              </div>

              <p className="font-sans-pua text-xs sm:text-sm text-[#9a9a9a] leading-relaxed">
                {activeDishModal.description}
              </p>

              {/* Sommelier Wine Pairing Card */}
              {activeDishModal.pairing && (
                <div className="p-4 rounded-2xl bg-[#141620] border border-[#e6ff55]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e6ff55] text-black flex items-center justify-center shrink-0">
                    <WineIcon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#e6ff55] font-bold uppercase tracking-wider">Recomendación de Maridaje por Sommelier</h4>
                    <p className="text-sm text-white font-medium mt-0.5">{activeDishModal.pairing}</p>
                  </div>
                </div>
              )}

              {/* Modal Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleReserveDish(activeDishModal.name)}
                  className="w-full sm:flex-1 btn-lime-pua py-3.5"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>Reservar Mesa con este Platillo</span>
                </button>
                <button
                  onClick={() => setActiveDishModal(null)}
                  className="w-full sm:w-auto btn-outline-pua py-3.5 px-6"
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
