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
      className="card-obsidian overflow-hidden group cursor-pointer border border-[#2c2c2e] hover:border-[#C4924A] transition-all duration-300 flex flex-col justify-between p-0 bg-[#0d0e12] text-left rounded-[10px]"
    >
      <div>
        {/* Photo Container */}
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

          {item.waitTime && (
            <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[#888888] border border-[#2c2c2e] text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C4924A]" />
              15 min
            </span>
          )}

          {/* Price Badge */}
          <span className="absolute bottom-3 right-3 bg-[#000000]/90 border border-[#C4924A]/50 text-[#C4924A] font-mono text-sm font-bold px-3 py-1 rounded-full backdrop-blur-md">
            ${item.price.toLocaleString()} MXN
          </span>
        </div>

        {/* Details */}
        <div className="p-5 space-y-2.5">
          <h3 className="font-display-stellar text-2xl text-white group-hover:text-[#C4924A] transition-colors leading-snug">
            {item.name}
          </h3>
          
          <p className="font-subtext-stellar text-xs text-[#888888] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Wine Pairing Pill */}
          {item.pairing && (
            <div className="mt-3 p-2 rounded-lg bg-[#171718] border border-[#C4924A]/30 flex items-center gap-2 text-xs text-[#C4924A]">
              <WineIcon className="w-3.5 h-3.5 shrink-0 text-[#C4924A]" />
              <span className="truncate text-[11px] font-medium text-white">Maridaje: {item.pairing}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Tags & Actions */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-[#2c2c2e] mt-3">
        <div className="flex flex-wrap gap-1.5 pt-3">
          {item.tags && item.tags.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-[#171718] border border-[#2c2c2e] text-[#888888] px-2 py-0.5 rounded-md font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

        <button
          onClick={handleQuickAdd}
          className="mt-3 btn-gold-luxury !py-1.5 !px-3.5 !text-xs font-bold text-black rounded-full flex items-center gap-1"
        >
          <Plus className="w-3.5 h-3.5 text-black stroke-[3]" />
          <span>Mesa</span>
        </button>
      </div>
    </div>
  );
}
