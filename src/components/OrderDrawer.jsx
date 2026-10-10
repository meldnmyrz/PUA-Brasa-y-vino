import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, CheckCircle2, Utensils } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [tableNumber, setTableNumber] = useState('5');
  const [tipPercent, setTipPercent] = useState(15);
  const [orderSent, setOrderSent] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tipAmount = Math.round(subtotal * (tipPercent / 100));
  const total = subtotal + tipAmount;

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `*ORDEN PÚA BRASA Y VINO*\n`;
    message += `📍 Mesa #: ${tableNumber}\n`;
    message += `------------------------------\n`;

    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* x${item.quantity} - $${(item.price * item.quantity).toLocaleString()} MXN\n`;
      if (item.term) message += `   • Término: ${item.term}\n`;
      if (item.instructions) message += `   • Notas: ${item.instructions}\n`;
    });

    message += `------------------------------\n`;
    message += `Subtotal: $${subtotal.toLocaleString()} MXN\n`;
    message += `Propina (${tipPercent}%): $${tipAmount.toLocaleString()} MXN\n`;
    message += `*TOTAL ESTIMADO: $${total.toLocaleString()} MXN*\n\n`;
    message += `¡Solicito la comanda para mi mesa!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${encodedMsg}`, '_blank');

    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      onClearCart();
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b0e14] border-l border-[#232730] flex flex-col justify-between shadow-2xl text-left">
          
          {/* HEADER */}
          <div className="p-6 border-b border-[#232730] flex items-center justify-between bg-[#12141a]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#987232] text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-garamond text-2xl text-white font-semibold">
                  Mi Mesa & Comanda
                </h3>
                <span className="text-[11px] font-mono text-[#c89f53]">
                  {cartItems.length} PLATILLOS AGREGADOS
                </span>
              </div>
            </div>
            
            <button onClick={onClose} className="p-2 rounded-full text-[#848a96] hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* TABLE NUMBER INPUT */}
            <div className="p-4 rounded-xl bg-[#12141a] border border-[#232730] space-y-2">
              <label className="text-xs font-mono text-[#c89f53] uppercase tracking-wider block font-bold">
                Número de Mesa:
              </label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Ej. Mesa 5 o Terraza 2"
                className="w-full p-2.5 bg-[#050505] border border-[#232730] rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#c89f53]"
              />
            </div>

            {/* ITEMS LIST */}
            {cartItems.length === 0 ? (
              <div className="p-12 text-center text-xs text-[#848a96] space-y-3">
                <Utensils className="w-8 h-8 text-[#987232] mx-auto opacity-50" />
                <p>Tu mesa aún no tiene platillos agregados.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-[#12141a] border border-[#232730] flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      {item.term && (
                        <span className="text-[10px] text-[#c89f53] font-mono block">
                          Término: {item.term}
                        </span>
                      )}
                      {item.instructions && (
                        <span className="text-[10px] text-[#848a96] block italic">
                          "{item.instructions}"
                        </span>
                      )}
                      <span className="font-mono text-xs font-bold text-[#c89f53] block pt-1">
                        ${(item.price * item.quantity).toLocaleString()} MXN
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button 
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#848a96] hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2 bg-[#050505] border border-[#232730] px-2 py-1 rounded-full">
                        <button 
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="text-[#848a96] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="text-[#848a96] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TIP SELECTOR */}
            {cartItems.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#232730]">
                <label className="text-xs font-mono text-[#848a96] uppercase tracking-wider block font-bold">
                  Sugerencia de Propina:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[10, 15, 20].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setTipPercent(pct)}
                      className={`py-2 rounded-lg text-xs font-mono font-bold border ${
                        tipPercent === pct
                          ? 'bg-[#987232] text-white border-[#c89f53]'
                          : 'bg-[#12141a] text-[#848a96] border-[#232730]'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* FOOTER TOTAL & WHATSAPP SUBMIT */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#232730] bg-[#12141a] space-y-4">
              <div className="space-y-1.5 font-mono text-xs text-[#848a96]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white">${subtotal.toLocaleString()} MXN</span>
                </div>
                <div className="flex justify-between">
                  <span>Propina ({tipPercent}%):</span>
                  <span className="text-white">${tipAmount.toLocaleString()} MXN</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#c89f53] pt-2 border-t border-[#232730]">
                  <span>Total Estimado:</span>
                  <span>${total.toLocaleString()} MXN</span>
                </div>
              </div>

              <button
                onClick={handleSendWhatsApp}
                disabled={orderSent}
                className={`w-full btn-caramel-amber py-4 font-bold ${
                  orderSent ? '!bg-emerald-600' : ''
                }`}
              >
                {orderSent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>¡Comanda Enviada al Mesero!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Comanda al Mesero por WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
