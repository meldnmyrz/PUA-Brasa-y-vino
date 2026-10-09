import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Flame, Wine, Sparkles, X, Eye, Calendar, Utensils } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import CarouselDemo from '../components/carousel-demo';
import ParticleConstellation from '../components/ParticleConstellation';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Catálogo Digital & Cava";
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
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* STELLAR DIGITAL SUB-WEBSITE HERO BANNER */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="card-obsidian p-8 sm:p-12 border border-[#2c2c2e] relative overflow-hidden text-center space-y-4 rounded-[10px]">
          <div className="eyebrow-tag-violet mx-auto">
            CATÁLOGO VISUAL DE ESPECIALIDADES & CAVA
          </div>
          <h1 className="font-display-stellar text-4xl sm:text-7xl text-[#ffffff] uppercase tracking-tight">
            PLATILLOS INSIGNIA & <span className="text-[#6a48f2]">CAVA VIP</span>
          </h1>
          <p className="font-subtext-stellar max-w-2xl mx-auto text-[#888888]">
            Explora la maestría de nuestros cortes asados a la leña de encino y la cuidada selección de etiquetas internacionales maridadas por nuestros sommeliers.
          </p>
        </div>
      </div>

      {/* 3D INTERACTIVE CAROUSEL INSIGNIA FEATURE */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 overflow-visible relative z-10">
        <div className="text-center mb-6">
          <span className="eyebrow-tag-pill">DESLIZA Y ROTACIÓN 3D</span>
        </div>
        <CarouselDemo />
      </div>

      {/* INTERACTIVE CONTROLS & CATEGORY TABS */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-16 pt-12 border-t border-[#2c2c2e] relative z-10">
        
        {/* Outlined Input Field (6px radius) */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-[#6a48f2]" />
          <input
            type="text"
            placeholder="Buscar por corte, ingrediente, trago o vino..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-[#171718] border border-[#2c2c2e] rounded-[6px] text-[#ffffff] placeholder-[#888888] text-sm focus:outline-none focus:border-[#6a48f2] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Selector Cards (6px radius tags) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-[6px] text-xs font-sans uppercase tracking-wider whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#6a48f2] text-white border-[#6a48f2] font-medium'
                    : 'bg-[#171718] text-[#888888] border-[#2c2c2e] hover:border-[#6a48f2] hover:text-[#ffffff]'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-[4px] ${
                  isActive ? 'bg-black text-[#ffffff]' : 'bg-[#2c2c2e] text-[#888888]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RICH VISUAL DISH CARDS GRID (10px RADIUS CARDS) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {filteredItems.length === 0 ? (
          <div className="card-obsidian p-12 rounded-[10px] text-center max-w-md mx-auto space-y-4 my-12 border border-[#2c2c2e]">
            <Utensils className="w-10 h-10 text-[#6a48f2] mx-auto" />
            <h3 className="font-sans font-medium text-lg text-[#ffffff]">
              No hay coincidencias en el catálogo
            </h3>
            <p className="font-subtext-stellar text-xs text-[#888888]">
              Prueba buscando por otro ingrediente o selecciona "Todo el Menú".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-sprint-violet"
            >
              Ver Todo el Catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveDishModal(item)}
                className="card-obsidian rounded-[10px] overflow-hidden group cursor-pointer border border-[#2c2c2e] hover:border-[#6a48f2] transition-all duration-300 flex flex-col justify-between p-0"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-64 overflow-hidden bg-black rounded-t-[10px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-4 left-4 eyebrow-tag-violet">
                        ★ {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 bg-[#171718] border border-[#2c2c2e] text-[#6a48f2] font-mono text-sm font-semibold px-3 py-1 rounded-[6px]">
                      ${item.price.toLocaleString()} MXN
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs">
                      <span className="btn-sprint-violet text-xs py-2 px-4 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-white" />
                        Ver Ficha Completa
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-sans font-medium text-lg text-[#ffffff] group-hover:text-[#6a48f2] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-subtext-stellar text-xs text-[#888888] line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#000000] border border-[#2c2c2e] text-[#888888] px-2.5 py-1 rounded-[4px] font-mono"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReserveDish(item.name);
                    }}
                    className="w-full btn-sprint-violet py-3 text-xs"
                  >
                    <Flame className="w-4 h-4" />
                    Reservar para Probar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* DEDICATED HD DISH DETAIL MODAL */}
      {activeDishModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
          onClick={() => setActiveDishModal(null)}
        >
          <div 
            className="card-obsidian max-w-3xl w-full border border-[#6a48f2]/60 overflow-hidden relative my-auto shadow-2xl rounded-[10px] p-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDishModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#171718] border border-[#2c2c2e] text-[#ffffff] hover:text-[#6a48f2] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Photo */}
              <div className="relative h-72 md:h-full bg-black min-h-[300px]">
                <img
                  src={activeDishModal.image}
                  alt={activeDishModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
              </div>

              {/* Detail Info */}
              <div className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {activeDishModal.badge && (
                    <span className="eyebrow-tag-violet">
                      ★ {activeDishModal.badge}
                    </span>
                  )}
                  
                  <h2 className="font-sans font-medium text-2xl text-[#ffffff] leading-tight">
                    {activeDishModal.name}
                  </h2>
                  
                  <div className="font-mono text-xl font-bold text-[#6a48f2]">
                    ${activeDishModal.price.toLocaleString()} MXN
                  </div>

                  <p className="font-subtext-stellar text-xs text-[#888888]">
                    {activeDishModal.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#6a48f2] block font-mono">
                      Notas del Sommelier & Chef:
                    </span>
                    <p className="font-subtext-stellar text-xs text-[#888888] italic">
                      "Recomendamos maridar esta preparación con nuestra selección de vinos tintos Casa Madero o una mixología ahumada en mesa."
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#2c2c2e] space-y-3">
                  <button
                    onClick={() => handleReserveDish(activeDishModal.name)}
                    className="btn-sprint-violet w-full py-3.5 text-xs"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    Reservar Mesa para Degustar Este Platillo
                  </button>
                  <button
                    onClick={() => setActiveDishModal(null)}
                    className="w-full py-2.5 text-xs text-[#888888] hover:text-white uppercase tracking-widest font-mono"
                  >
                    Cerrar Ficha
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
