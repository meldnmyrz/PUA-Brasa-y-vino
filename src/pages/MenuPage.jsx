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

      {/* DALA DIGITAL SUB-WEBSITE HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="card-standard p-8 sm:p-14 border border-[#3D352E] relative overflow-hidden text-center space-y-4 rounded-[24px]">
          <div className="saffron-tag-pill mx-auto">
            CATÁLOGO VISUAL DE ESPECIALIDADES & CAVA
          </div>
          <h1 className="font-display-dala text-4xl sm:text-7xl text-[#ffffff] uppercase tracking-tight">
            PLATILLOS INSIGNIA & <span className="text-[#ffb829]">CAVA VIP</span>
          </h1>
          <p className="font-body-ultralight max-w-2xl mx-auto text-[#bdbdbd]">
            Explora la maestría de nuestros cortes asados a la leña de encino y la cuidada selección de etiquetas internacionales maridadas por nuestros sommeliers.
          </p>
        </div>
      </div>

      {/* 3D INTERACTIVE CAROUSEL INSIGNIA FEATURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 overflow-visible relative z-10">
        <div className="text-center mb-6">
          <span className="iris-tag-pill">DESLIZA Y ROTACIÓN 3D</span>
        </div>
        <CarouselDemo />
      </div>

      {/* INTERACTIVE CONTROLS & CATEGORY TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-16 pt-12 border-t border-[#2D2722] relative z-10">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-[#8052ff]" />
          <input
            type="text"
            placeholder="Buscar por corte, ingrediente, trago o vino..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 bg-[#090a0f] border border-[#3D352E] rounded-[24px] text-[#ffffff] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#8052ff] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9a9a9a] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Selector Cards */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-xs font-mono-tag uppercase tracking-wider whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#8052ff] text-white border-[#8052ff] font-semibold shadow-[0_0_25px_rgba(128,82,255,0.5)] scale-105'
                    : 'bg-[#090a0f] text-[#9a9a9a] border-[#3D352E] hover:border-[#8052ff] hover:text-[#ffffff]'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-black text-[#ffb829]' : 'bg-[#2D2722] text-[#bdbdbd]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RICH VISUAL DISH CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {filteredItems.length === 0 ? (
          <div className="card-standard p-12 rounded-[24px] text-center max-w-md mx-auto space-y-4 my-12 border border-[#3D352E]">
            <Utensils className="w-10 h-10 text-[#8052ff] mx-auto" />
            <h3 className="font-condensed-bold text-xl text-[#ffffff]">
              No hay coincidencias en el catálogo
            </h3>
            <p className="font-body-ultralight text-xs text-[#9a9a9a]">
              Prueba buscando por otro ingrediente o selecciona "Todo el Menú".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-iris-pill"
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
                className="card-standard rounded-[24px] overflow-hidden group cursor-pointer border border-[#3D352E] hover:border-[#8052ff] transition-all duration-500 flex flex-col justify-between p-0"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-64 overflow-hidden bg-black rounded-t-[24px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-4 left-4 saffron-tag-pill shadow-lg">
                        ★ {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 bg-black/90 border border-[#8052ff]/40 text-[#ffb829] font-mono-tag text-sm font-semibold px-4 py-1 rounded-full">
                      ${item.price.toLocaleString()} MXN
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                      <span className="btn-iris-pill text-xs py-2 px-5 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-white" />
                        Ver Ficha Completa
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-condensed-bold text-xl text-[#ffffff] group-hover:text-[#ffb829] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-body-ultralight text-xs text-[#bdbdbd] line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#000000] border border-[#2D2722] text-[#9a9a9a] px-3 py-1 rounded-full font-mono-tag"
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
                    className="w-full btn-iris-pill py-3 text-xs"
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
            className="card-standard max-w-3xl w-full border border-[#8052ff]/60 overflow-hidden relative my-auto shadow-2xl rounded-[24px] p-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDishModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-[#3D352E] text-[#ffffff] hover:text-[#8052ff] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
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
                    <span className="saffron-tag-pill">
                      ★ {activeDishModal.badge}
                    </span>
                  )}
                  
                  <h2 className="font-condensed-bold text-2xl text-[#ffffff] leading-tight">
                    {activeDishModal.name}
                  </h2>
                  
                  <div className="font-mono-tag text-2xl font-bold text-[#ffb829]">
                    ${activeDishModal.price.toLocaleString()} MXN
                  </div>

                  <p className="font-body-ultralight text-xs text-[#bdbdbd]">
                    {activeDishModal.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#ffb829] block font-mono-tag">
                      Notas del Sommelier & Chef:
                    </span>
                    <p className="font-body-ultralight text-xs text-[#9a9a9a] italic">
                      "Recomendamos maridar esta preparación con nuestra selección de vinos tintos Casa Madero o una mixología ahumada en mesa."
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#2D2722] space-y-3">
                  <button
                    onClick={() => handleReserveDish(activeDishModal.name)}
                    className="btn-iris-pill w-full py-4 text-xs"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    Reservar Mesa para Degustar Este Platillo
                  </button>
                  <button
                    onClick={() => setActiveDishModal(null)}
                    className="w-full py-2.5 text-xs text-[#9a9a9a] hover:text-white uppercase tracking-widest font-mono-tag"
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
