import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, X, Utensils } from 'lucide-react';
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
    <div className="pt-32 pb-28 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER TITLE */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-16">
        <div className="eyebrow-tag justify-center">CARTA GOURMET OFICIAL</div>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-light tracking-widest text-[#F4F0EA]">
          MENÚ <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Cortes Prime, Mixología & Cava
        </span>
        <div className="w-16 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      {/* SEARCH BAR & CATEGORY SELECTOR */}
      <div className="max-w-5xl mx-auto px-4 space-y-8 mb-16">
        
        {/* Search Input */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#C4924A]" />
          <input
            type="text"
            placeholder="Buscar platillo, corte, vino o ingrediente..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 rounded-full bg-[#101012] border border-[#2D2722] text-[#F4F0EA] placeholder-[#F4F0EA]/40 text-xs focus:outline-none focus:border-[#C4924A] transition-all"
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

        {/* Minimalist Underline Categories Selector */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center border-b border-[#2D2722]/60">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 text-xs font-serif-corp uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#C4924A] font-bold'
                    : 'text-[#F4F0EA]/60 hover:text-[#F4F0EA]'
                }`}
              >
                {cat.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4924A]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DISHES PHYSICAL MENU DISPLAY */}
      <div className="max-w-5xl mx-auto px-4">
        
        {filteredItems.length === 0 ? (
          <div className="card-editorial p-12 rounded-none text-center max-w-md mx-auto space-y-4 my-12 border border-[#2D2722]">
            <Utensils className="w-10 h-10 text-[#C4924A]/50 mx-auto" />
            <h3 className="font-serif-corp text-lg font-normal text-[#F4F0EA]">
              Sin resultados para la búsqueda
            </h3>
            <p className="text-xs text-[#F4F0EA]/60 font-light">
              Intenta buscando otra categoría o limpia el buscador.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="btn-luxury-gold"
            >
              Ver Menú Completo
            </button>
          </div>
        ) : (
          <div className="card-editorial p-8 sm:p-14 rounded-none border border-[#2D2722] space-y-12">
            
            <div className="grid grid-cols-1 gap-10">
              {filteredItems.map((item) => (
                <div key={item.id} className="group pb-8 border-b border-[#2D2722] last:border-0 last:pb-0">
                  
                  {/* Top Line: Name + Leader Dots + Price */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline flex-1 pr-4 min-w-0">
                      <h3 className="font-serif-corp text-base sm:text-lg font-medium tracking-wide text-[#F4F0EA] group-hover:text-[#C4924A] transition-colors truncate">
                        {item.name}
                      </h3>
                      <div className="menu-dots hidden sm:block" />
                    </div>
                    
                    <span className="font-serif-corp text-base font-bold text-[#C4924A] whitespace-nowrap">
                      ${item.price.toLocaleString()} MXN
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#F4F0EA]/60 font-light leading-relaxed mt-2 max-w-3xl">
                    {item.description}
                  </p>

                  {/* Badges & Action */}
                  <div className="flex items-center justify-between pt-3 gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.badge && (
                        <span className="text-[9px] uppercase tracking-widest text-[#C4924A] border border-[#C4924A]/40 px-2.5 py-0.5 rounded-full font-bold">
                          ★ {item.badge}
                        </span>
                      )}
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="text-[9px] uppercase tracking-wider text-[#F4F0EA]/40">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/reservas"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C4924A] hover:text-[#F4F0EA] transition-colors flex items-center gap-1"
                    >
                      Reservar <Flame className="w-3 h-3 text-[#C4924A]" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
