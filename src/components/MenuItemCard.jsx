import React, { useState, useEffect } from 'react';
import { Wine as WineIcon, Clock, Plus, Eye, ChevronRight } from 'lucide-react';

export default function MenuItemCard({ item, onClick, onAddToCart }) {
  const [imgSrc, setImgSrc] = useState(item.image || '/assets/corte-filete-mignon.jpg');

  useEffect(() => {
    if (item.image) {
      setImgSrc(item.image);
    }
  }, [item.image]);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({ ...item, quantity: 1 });
    }
  };

  const handleImageError = () => {
    // Fallback based on category
    if (item.category === 'cortes') setImgSrc('/assets/corte-filete-mignon.jpg');
    else if (item.category === 'mariscos') setImgSrc('/assets/tuna-sashimi-tiradito.jpg');
    else if (item.category === 'mixologia') setImgSrc('/assets/mixologia-flameada-bar.jpg');
    else if (item.category === 'maridajes') setImgSrc('/assets/cava-vino-mesa.jpg');
    else if (item.category === 'postres') setImgSrc('/assets/postre-crocante-helado.jpg');
    else setImgSrc('/assets/parrillada-brasas.jpg');
  };

  return (
    <div
      onClick={() => onClick ? onClick(item) : null}
      className="card-black-media group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between p-0 bg-[#000000] text-left"
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-60 overflow-hidden bg-[#111111]">
          <img
            src={imgSrc}
            alt={item.name}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
          
          {item.tags && item.tags.length > 0 && (
            <span className="absolute top-4 left-4 badge-availability">
              {item.tags[0]}
            </span>
          )}

          {item.waitTime && (
            <span className="absolute top-4 right-4 bg-[#333336]/90 backdrop-blur-md text-[#86868b] border border-white/10 text-[11px] font-mono px-2.5 py-1 rounded-[980px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#ff791b]" />
              15 min
            </span>
          )}

          {/* Price Badge */}
          <span className="absolute bottom-4 right-4 bg-[#333336]/90 border border-white/10 text-[#f5f5f7] font-mono text-sm font-semibold px-3 py-1 rounded-[980px] backdrop-blur-md">
            ${item.price.toLocaleString()} MXN
          </span>
        </div>

        {/* Details */}
        <div className="p-6 space-y-3">
          <h3 className="text-card-heading text-white group-hover:text-[#0071e3] transition-colors leading-snug">
            {item.name}
          </h3>
          
          <p className="text-body-apple text-xs text-[#86868b] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Wine Pairing Pill */}
          {item.pairing && (
            <div className="mt-3 p-2.5 rounded-2xl bg-[#111111] border border-white/5 flex items-center gap-2 text-xs">
              <WineIcon className="w-3.5 h-3.5 shrink-0 text-[#ff791b]" />
              <span className="truncate text-[11px] font-medium text-white">Maridaje: {item.pairing}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Tags & Actions */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
        <div className="flex flex-wrap gap-1.5 pt-3">
          {item.tags && item.tags.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-[#111111] border border-white/5 text-[#86868b] px-2 py-0.5 rounded-[5px] font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

        <button
          onClick={handleQuickAdd}
          className="mt-3 btn-apple-blue !py-1.5 !px-3.5 !text-xs font-semibold rounded-[980px] flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          <span>Mesa</span>
        </button>
      </div>
    </div>
  );
}
