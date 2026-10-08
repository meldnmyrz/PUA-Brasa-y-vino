import React, { useState } from 'react';
import { Search, Flame, Wine, Utensils, Sparkles, Filter, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDishModal, setSelectedDishModal] = useState(null);

  // Filter items based on category and search query
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen text-amber-50 relative">
      
      {/* HEADER TITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold block">
          Carta Oficial Gastronómica
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-white">
          MENÚ <span className="text-gold-gradient">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-zinc-300 font-light leading-relaxed">
          Cortes Prime al carbón, hamburguesas de autor, tacos de especialidad, mixología ahumada y nuestra selección exclusiva de cava y destilados.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto pt-2" />
      </div>

      {/* SEARCH BAR & CATEGORY SELECTOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-12">
        
        {/* Search Bar Input */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
          <input
            type="text"
            placeholder="Buscar platillo, trago, vino o ingrediente..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-amber-500/50 hover:text-amber-200'
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
          <div className="glass-luxury p-12 rounded-3xl text-center max-w-md mx-auto space-y-4 my-12 border border-amber-500/20">
            <Utensils className="w-12 h-12 text-amber-500/50 mx-auto" />
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              No encontramos coincidencia
            </h3>
            <p className="text-xs text-zinc-400">
              Prueba buscando con otro nombre o borra el filtro de búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider"
            >
              Ver Todo el Menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-luxury rounded-2xl overflow-hidden group hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {item.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-md border border-amber-400/60 text-amber-300 font-serif-luxury text-lg font-bold px-3.5 py-1 rounded-lg shadow-xl">
                      ${item.price.toLocaleString()} MXN
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-0.5 rounded-full"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActivePage('reservas')}
                    className="w-full py-3 rounded-xl border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
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
    </div>
  );
}
