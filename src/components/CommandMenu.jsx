import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Flame, Wine, Sparkles, ChevronRight, CornerDownLeft } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';

export default function CommandMenu({ isOpen, onClose, onSelectItem }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open modal
          if (onSelectItem) onSelectItem(null); // Signal open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectItem]);

  if (!isOpen) return null;

  const filteredDishes = menuItems.filter((item) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return item.name.toLowerCase().includes(q) ||
           item.description.toLowerCase().includes(q) ||
           (item.pairing && item.pairing.toLowerCase().includes(q)) ||
           item.tags.some(t => t.toLowerCase().includes(q));
  }).slice(0, 8);

  const filteredCategories = menuCategories.filter((cat) => {
    if (!query) return false;
    return cat.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleSelectDish = (dish) => {
    onClose();
    if (onSelectItem) {
      onSelectItem(dish);
    }
  };

  const handleSelectCategory = (catId) => {
    onClose();
    navigate(catId === 'todos' ? '/menu' : `/section/${catId}`);
  };

  return (
    <div 
      className="fixed inset-x-0 top-0 bottom-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#0b0e14] border border-[#232730] rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl space-y-0 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* INPUT HEADER */}
        <div className="p-4 border-b border-[#232730] flex items-center gap-3 relative bg-[#12141a]">
          <Search className="w-5 h-5 text-[#c89f53]" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por corte, ingrediente, trago o vino (ej. Ribeye, Chardonnay, Mezcal)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-[#848a96] text-sm focus:outline-none"
          />
          {query ? (
            <button onClick={() => setQuery('')} className="text-[#848a96] hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block bg-[#050505] border border-[#232730] text-[#848a96] text-[10px] font-mono px-2 py-0.5 rounded-md">
              ESC
            </kbd>
          )}
        </div>

        {/* RESULTS LIST */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 divide-y divide-[#232730]/50">
          
          {/* CATEGORIES MATCHES */}
          {filteredCategories.length > 0 && (
            <div className="space-y-2 pb-2">
              <span className="text-[10px] font-mono text-[#c89f53] uppercase tracking-wider block font-bold">
                Categorías del Menú
              </span>
              <div className="grid grid-cols-2 gap-2">
                {filteredCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="p-3 rounded-xl bg-[#12141a] border border-[#232730] hover:border-[#c89f53] text-left text-xs font-semibold text-white flex items-center justify-between group transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#c89f53] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DISHES LIST */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-[#848a96] uppercase tracking-wider block font-bold">
              Platillos & Bebidas ({filteredDishes.length})
            </span>
            {filteredDishes.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#848a96]">
                No se encontraron resultados para "{query}"
              </div>
            ) : (
              <div className="space-y-2">
                {filteredDishes.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => handleSelectDish(dish)}
                    className="p-3 rounded-xl bg-[#12141a] hover:bg-[#171a24] border border-[#232730] hover:border-[#c89f53] flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-12 h-12 rounded-lg object-cover border border-[#232730]"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-[#c89f53] transition-colors">
                          {dish.name}
                        </h4>
                        <span className="text-xs text-[#d4d3c9] line-clamp-1 font-light">
                          {dish.description}
                        </span>
                        {dish.pairing && (
                          <span className="text-[10px] text-[#a3e6b4] font-mono block mt-0.5">
                            🍷 {dish.pairing}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-bold text-[#c89f53]">
                        ${dish.price.toLocaleString()} MXN
                      </span>
                      <CornerDownLeft className="w-4 h-4 text-[#848a96] group-hover:text-[#c89f53]" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* FOOTER TIPS */}
        <div className="p-3 bg-[#050505] border-t border-[#232730] text-[11px] text-[#848a96] flex items-center justify-between px-6">
          <span>Consejo: Usa <kbd className="text-white">↑</kbd> <kbd className="text-white">↓</kbd> para navegar</span>
          <span className="text-[#c89f53] font-mono font-semibold">PÚA BRASA Y VINO ⌘K</span>
        </div>

      </div>
    </div>
  );
}
