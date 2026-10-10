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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#0b0e14] border border-[#232730] rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl relative space-y-0 text-left"
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
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#c89f53] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 bg-[#050505]/90 border border-[#c89f53] text-[#c89f53] font-mono text-lg font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
            ${dish.price.toLocaleString()} MXN
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
          
          <div className="space-y-1">
            <span className="badge-amber-tag">PÚA BRASA Y VINO</span>
            <h2 className="font-garamond text-3xl sm:text-4xl text-white font-semibold">
              {dish.name}
            </h2>
          </div>

          <p className="font-jakarta text-xs sm:text-sm text-[#d4d3c9] leading-relaxed">
            {dish.description}
          </p>

          {/* SOMMELIER WINE PAIRING BOX */}
          {dish.pairing && (
            <div className="p-4 rounded-xl bg-[#1e3524] border border-[#2d4e36] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2d4e36] text-[#a3e6b4] flex items-center justify-center shrink-0">
                <WineIcon className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] text-[#a3e6b4] font-bold uppercase tracking-wider block">
                  Maridaje Sugerido por Sommelier
                </span>
                <span className="text-sm text-white font-semibold">{dish.pairing}</span>
              </div>
            </div>
          )}

          {/* MEAT TERM SELECTION IF MEAT DISH */}
          {isMeat && (
            <div className="space-y-2 pt-2 border-t border-[#232730]">
              <label className="text-xs font-mono text-[#c89f53] uppercase tracking-wider block font-bold">
                Término de la Carne:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Término Medio', 'Tres Cuartos', 'Bien Cocido'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSelectedTerm(term)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                      selectedTerm === term
                        ? 'bg-[#987232] text-white border-[#c89f53]'
                        : 'bg-[#12141a] text-[#848a96] border-[#232730] hover:border-[#c89f53] hover:text-white'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SPECIAL INSTRUCTIONS */}
          <div className="space-y-2 pt-2 border-t border-[#232730]">
            <label className="text-xs font-mono text-[#848a96] uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#c89f53]" />
              Instrucciones Especiales para Cocina:
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Sin sal adicional, salsa aparte, extra limón..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full p-3 bg-[#12141a] border border-[#232730] rounded-xl text-white text-xs placeholder-[#848a96] focus:outline-none focus:border-[#c89f53]"
            />
          </div>

          {/* QUANTITY & ADD TO TABLE ACTION */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-[#232730]">
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-[#12141a] border border-[#232730] p-1.5 rounded-full">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-[#050505] text-white flex items-center justify-center hover:bg-[#987232] transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono text-sm font-bold w-6 text-center text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-[#050505] text-white flex items-center justify-center hover:bg-[#987232] transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`flex-1 w-full btn-caramel-amber py-3.5 rounded-full ${
                addedSuccess ? '!bg-emerald-600' : ''
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado a Mi Mesa!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
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
