import React from 'react';
import { Wine as WineIcon, Clock, Plus, Eye, ChevronRight } from 'lucide-react';

export default function MenuItemCard({ item, onClick, onAddToCart }) {
  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({ ...item, quantity: 1 });
    }
  };

  return (
    <div
      onClick={() => onClick(item)}
      className="card-lujo-obsidian overflow-hidden group cursor-pointer border border-[#232730] hover:border-[#c89f53] transition-all duration-300 flex flex-col justify-between p-0 bg-[#0b0e14] text-left"
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-60 overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-90" />
          
          {item.tags && item.tags.length > 0 && (
            <span className="absolute top-3 left-3 badge-amber-tag">
              ★ {item.tags[0]}
            </span>
          )}

          {item.waitTime && (
            <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[#848a96] border border-[#232730] text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#c89f53]" />
              15 min
            </span>
          )}

          {/* Price Badge */}
          <span className="absolute bottom-3 right-3 bg-[#050505]/90 border border-[#c89f53]/50 text-[#c89f53] font-mono text-sm font-bold px-3 py-1 rounded-full backdrop-blur-md">
            ${item.price.toLocaleString()} MXN
          </span>
        </div>

        {/* Details */}
        <div className="p-5 space-y-2.5">
          <h3 className="font-garamond text-2xl text-white group-hover:text-[#c89f53] transition-colors leading-snug">
            {item.name}
          </h3>
          
          <p className="font-jakarta text-xs text-[#d4d3c9] line-clamp-2 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Wine Pairing Pill in Forest Green */}
          {item.pairing && (
            <div className="mt-3 badge-sommelier-wine w-full justify-start truncate">
              <WineIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Maridaje: {item.pairing}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Tags & Actions */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-[#232730]/60 mt-3">
        <div className="flex flex-wrap gap-1.5 pt-3">
          {item.tags && item.tags.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-[#12141a] border border-[#232730] text-[#848a96] px-2 py-0.5 rounded-md font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

        <button
          onClick={handleQuickAdd}
          className="mt-3 btn-caramel-amber !py-1.5 !px-3 !text-xs rounded-full shadow-none"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Mesa</span>
        </button>
      </div>
    </div>
  );
}
