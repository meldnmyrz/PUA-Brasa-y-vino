import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Flame, Wine, Sparkles, X, ChevronRight, Eye, Calendar, Utensils } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import CarouselDemo from '../components/carousel-demo';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Sub-Experiencia Digital de Menú & Cava";
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
    <div className="pt-32 pb-28 min-h-screen text-[#F4F0EA] bg-[#000000] relative overflow-hidden">
      
      {/* DIGITAL SUB-WEBSITE HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="card-editorial p-8 sm:p-12 border border-[#3D352E] relative overflow-hidden text-center space-y-3">
          <div className="eyebrow-tag justify-center">
            SUB-EXPERIENCIA DIGITAL // CARTA PÚA
          </div>
          <h1 className="font-serif-corp text-4xl sm:text-6xl font-light tracking-widest text-[#F4F0EA]">
            CATÁLOGO VISUAL <span className="text-[#C4924A]">&</span> CAVA
          </h1>
          <span className="font-script-lujo text-3xl sm:text-5xl text-[#C4924A] block">
            Especialidades Insignias en 3D
          </span>
        </div>
      </div>

      {/* 3D INTERACTIVE CAROUSEL INSIGNIA FEATURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 overflow-visible">
        <div className="text-center mb-6">
          <span className="eyebrow-tag justify-center">DESLIZA & ROTACIÓN 3D</span>
        </div>
        <CarouselDemo />
      </div>

      {/* INTERACTIVE CONTROLS & CATEGORY TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-16 pt-12 border-t border-[#2D2722]">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#C4924A]" />
          <input
            type="text"
            placeholder="Buscar por corte, ingrediente, trago o vino..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-[#101012] border border-[#3D352E] text-[#F4F0EA] placeholder-[#F4F0EA]/40 text-xs focus:outline-none focus:border-[#C4924A] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F4F0EA]/50 hover:text-white"
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
                className={`px-5 py-3 rounded-full text-xs font-sans uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C4924A] text-black border-[#C4924A] font-bold shadow-[0_0_20px_rgba(196,146,74,0.4)] scale-105'
                    : 'bg-[#101012] text-[#F4F0EA]/70 border-[#3D352E] hover:border-[#C4924A] hover:text-[#F4F0EA]'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-black text-[#C4924A]' : 'bg-[#2D2722] text-[#F4F0EA]/70'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RICH VISUAL DISH CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredItems.length === 0 ? (
          <div className="card-editorial p-12 rounded-none text-center max-w-md mx-auto space-y-4 my-12 border border-[#3D352E]">
            <Utensils className="w-10 h-10 text-[#C4924A]/50 mx-auto" />
            <h3 className="font-serif-corp text-lg font-normal text-[#F4F0EA]">
              No hay coincidencias en el catálogo
            </h3>
            <p className="text-xs text-[#F4F0EA]/60 font-light">
              Prueba buscando por otro ingrediente o selecciona "Todo el Menú".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-luxury-gold"
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
                className="card-editorial rounded-none overflow-hidden group cursor-pointer border border-[#3D352E] hover:border-[#C4924A] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-64 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#C4924A] text-black text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                        ★ {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 bg-black/90 border border-[#3D352E] text-[#C4924A] font-serif-corp text-base font-bold px-3.5 py-1 rounded-lg">
                      ${item.price.toLocaleString()} MXN
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="btn-luxury-gold text-[10px] py-2 px-4 flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-black" />
                        Ver Ficha Completa
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-corp text-lg font-bold text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#F4F0EA]/60 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-[#101012] border border-[#2D2722] text-[#F4F0EA]/50 px-2.5 py-0.5 rounded-full"
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
                    className="w-full py-3 border border-[#3D352E] text-[#C4924A] hover:bg-[#C4924A] hover:text-black font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 text-center"
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
            className="card-editorial max-w-3xl w-full border border-[#C4924A]/60 overflow-hidden relative my-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDishModal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-[#3D352E] text-[#F4F0EA] hover:text-[#C4924A] flex items-center justify-center transition-colors"
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
                    <span className="eyebrow-tag">
                      ★ {activeDishModal.badge}
                    </span>
                  )}
                  
                  <h2 className="font-serif-corp text-2xl font-bold text-[#F4F0EA] leading-tight">
                    {activeDishModal.name}
                  </h2>
                  
                  <div className="font-serif-corp text-2xl font-bold text-[#C4924A]">
                    ${activeDishModal.price.toLocaleString()} MXN
                  </div>

                  <p className="text-xs text-[#F4F0EA]/80 font-light leading-relaxed">
                    {activeDishModal.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C4924A] block font-bold">
                      Notas del Sommelier & Chef:
                    </span>
                    <p className="text-[11px] text-[#F4F0EA]/60 font-light italic">
                      "Recomendamos maridar esta preparación con nuestra selección de vinos tintos Casa Madero o una mixología ahumada en mesa."
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#2D2722] space-y-3">
                  <button
                    onClick={() => handleReserveDish(activeDishModal.name)}
                    className="btn-luxury-gold w-full py-3.5 text-xs flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    Reservar Mesa para Degustar Este Platillo
                  </button>
                  <button
                    onClick={() => setActiveDishModal(null)}
                    className="w-full py-2.5 text-xs text-[#F4F0EA]/50 hover:text-white uppercase tracking-widest"
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
