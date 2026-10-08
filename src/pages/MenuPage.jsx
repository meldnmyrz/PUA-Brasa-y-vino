import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Utensils, X } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Carta & Menú Oficial";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER TITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Carta Oficial Gastronómica
        </span>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-bold text-[#F4F0EA]">
          MENÚ <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
          Cortes Prime al carbón, hamburguesas de autor, tacos de especialidad, mixología ahumada y nuestra selección exclusiva de cava y destilados.
        </p>
        <div className="w-24 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      {/* SEARCH BAR & CATEGORY SELECTOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-12">
        
        <div className="max-w-xl mx-auto relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#C4924A]" />
          <input
            type="text"
            placeholder="Buscar platillo, trago, vino o ingrediente..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#121212] border border-[#3D352E] text-[#F4F0EA] placeholder-[#F4F0EA]/40 text-xs sm:text-sm focus:outline-none focus:border-[#C4924A] transition-all shadow-inner"
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

        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#C4924A] text-black border-[#C4924A] font-bold shadow-[0_0_15px_rgba(196,146,74,0.4)] scale-105'
                    : 'bg-[#121212] text-[#F4F0EA]/70 border-[#3D352E] hover:border-[#C4924A] hover:text-[#F4F0EA]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* DISHES & BEVERAGES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredItems.length === 0 ? (
          <div className="glass-luxury-black p-12 rounded-3xl text-center max-w-md mx-auto space-y-4 my-12 border border-[#3D352E]">
            <Utensils className="w-12 h-12 text-[#C4924A]/50 mx-auto" />
            <h3 className="font-serif-corp text-xl font-bold text-[#F4F0EA]">
              No encontramos coincidencia
            </h3>
            <p className="text-xs text-[#F4F0EA]/60 font-light">
              Prueba buscando con otro nombre o borra el filtro de búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-gold-luxury px-6 py-2.5 rounded-full text-xs"
            >
              Ver Todo el Menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-luxury-black rounded-2xl overflow-hidden group border border-[#3D352E] hover:border-[#C4924A] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#C4924A] text-black text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                        {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 bg-black/90 border border-[#3D352E] text-[#C4924A] font-serif-corp text-base font-bold px-3.5 py-1 rounded-lg shadow-xl">
                      ${item.price.toLocaleString()} MXN
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-corp text-base font-bold text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#F4F0EA]/60 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#121212] border border-[#3D352E] text-[#F4F0EA]/50 px-2.5 py-0.5 rounded-full"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/reservas"
                    className="w-full py-3 rounded-xl border border-[#3D352E] text-[#C4924A] hover:bg-[#C4924A] hover:text-black font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Flame className="w-4 h-4" />
                    Reservar para Probar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
