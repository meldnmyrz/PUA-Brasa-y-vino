import React from 'react';
import { MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent('Hola PÚA Brasa y Vino, me gustaría consultar disponibilidad e información.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-black/40 hover:bg-white/15 backdrop-blur-xl border border-white/20 text-white px-4 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105"
      aria-label="Atención por WhatsApp"
    >
      <MessageSquare className="w-5 h-5 text-[#c49a4a] group-hover:text-white transition-colors" />
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-white/90 group-hover:text-white pr-1 font-sf-pro-text">
        WhatsApp PÚA
      </span>
    </a>
  );
}
