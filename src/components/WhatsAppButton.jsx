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
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-3 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
      aria-label="Atención por WhatsApp"
    >
      <MessageSquare className="w-6 h-6 animate-bounce" />
      <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
        WhatsApp PÚA
      </span>
    </a>
  );
}
