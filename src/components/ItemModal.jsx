import React, { useState } from 'react';
import { X, Wine as WineIcon, Plus, Minus, Check, Clock, Utensils, MessageSquare } from 'lucide-react';

export default function ItemModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedTerm, setSelectedTerm] = useState('Término Medio');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const isMeat = dish.category === 'cortes' || dish.name.toLowerCase().includes('rib eye') || dish.name.toLowerCase().includes('tomahawk') || dish.name.toLowerCase().includes('picaña');

  const handleAdd = () => {
    const orderItem = {
      ...dish,
      quantity,
      term: isMeat ? selectedTerm : null,
      instructions: specialInstructions
    };
    if (onAddToCart) {
      onAddToCart(orderItem);
    }
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-black/75 backdrop-blur-3xl border border-white/15 rounded-[24px] max-w-2xl w-full overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] relative space-y-0 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PHOTO HEADER */}
        <div className="relative h-72 bg-black">
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#c49a4a] transition-colors backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 bg-black/60 border border-[#c49a4a]/50 text-[#c49a4a] font-mono text-lg font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
            ${dish.price.toLocaleString()} MXN
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
          
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#8c672b]/20 text-[#c49a4a] border border-[#8c672b]/30">PÚA BRASA Y VINO</span>
            <h2 className="font-sf-pro-display text-3xl sm:text-4xl text-white font-semibold pt-1">
              {dish.name}
            </h2>
          </div>

          <p className="font-sf-pro-text text-xs sm:text-sm text-[#c4c2b9] leading-relaxed">
            {dish.description}
          </p>

          {/* SOMMELIER WINE PAIRING BOX */}
          {dish.pairing && (
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#8c672b]/20 text-[#c49a4a] border border-[#8c672b]/30 flex items-center justify-center shrink-0">
                <WineIcon className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] text-[#c49a4a] font-bold uppercase tracking-wider block font-mono">
                  Maridaje Sugerido por Sommelier
                </span>
                <span className="text-sm text-white font-semibold font-sf-pro-display">{dish.pairing}</span>
              </div>
            </div>
          )}

          {/* MEAT TERM SELECTION IF MEAT DISH */}
          {isMeat && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="text-xs font-mono text-[#c49a4a] uppercase tracking-wider block font-bold">
                Término de la Carne:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Término Medio', 'Tres Cuartos', 'Bien Cocido'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSelectedTerm(term)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedTerm === term
                        ? 'bg-[#8c672b] text-white border-[#c49a4a] shadow-lg'
                        : 'bg-white/[0.04] text-[#c4c2b9] border-white/15 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SPECIAL INSTRUCTIONS */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <label className="text-xs font-mono text-[#c4c2b9] uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#c49a4a]" />
              Instrucciones Especiales para Cocina:
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Sin sal adicional, salsa aparte, extra limón..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full p-3 bg-black/50 border border-white/15 rounded-xl text-white text-xs placeholder-[#c4c2b9]/60 focus:outline-none focus:border-[#c49a4a] font-sf-pro-text transition-all"
            />
          </div>

          {/* QUANTITY & ADD TO TABLE ACTION */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-white/10">
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-black/40 border border-white/15 p-1.5 rounded-full">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#8c672b] transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono text-sm font-bold w-6 text-center text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#8c672b] transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`flex-1 w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                addedSuccess 
                  ? 'bg-emerald-600/90 text-white' 
                  : 'bg-white/15 hover:bg-white/25 border border-white/25 text-white backdrop-blur-md shadow-lg'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado a Mi Mesa!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-[#c49a4a]" />
                  <span>Agregar a Orden — ${(dish.price * quantity).toLocaleString()} MXN</span>
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
