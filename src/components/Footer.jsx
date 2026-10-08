import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import PuaLogo from './PuaLogo';

export default function Footer() {
  const pagesList = [
    { path: '/', name: 'Inicio' },
    { path: '/menu', name: 'Menú' },
    { path: '/nosotros', name: 'Nosotros' },
    { path: '/servicios', name: 'Servicios' },
    { path: '/reservas', name: 'Reservas' }
  ];

  return (
    <footer className="relative bg-[#000000] border-t border-[#3D352E] text-[#F4F0EA]/70 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#C4924A]/10 via-[#C4924A]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN WITH BRAND LOGO */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <PuaLogo color="#C4924A" size="small" className="!items-start" />
            </Link>
            <p className="text-xs text-[#F4F0EA]/60 leading-relaxed pt-2 font-light">
              Sabor ahumado a la leña, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121212] border border-[#3D352E] flex items-center justify-center text-[#C4924A] hover:border-[#C4924A] hover:bg-[#C4924A] hover:text-black transition-all duration-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121212] border border-[#3D352E] flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 5 MAIN PAGES LINKS */}
          <div>
            <h4 className="font-serif-corp text-xs font-bold uppercase tracking-[0.25em] text-[#C4924A] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4924A]" />
              Navegación
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.2em] font-sans">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="hover:text-[#C4924A] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C4924A] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="font-serif-corp text-xs font-bold uppercase tracking-[0.25em] text-[#C4924A] mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C4924A]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs font-light">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-[#121212] pb-2">
                  <span className="text-[#F4F0EA] block font-medium">{h.days}</span>
                  <span className="text-[#C4924A] text-[11px] font-sans">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-serif-corp text-xs font-bold uppercase tracking-[0.25em] text-[#C4924A] mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C4924A]" />
              Ubicación & Cava
            </h4>
            <p className="text-xs text-[#F4F0EA]/60 mb-4 leading-relaxed font-light">
              Encuéntranos en Google Maps para indicaciones exactas y servicio de Valet Parking.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black bg-[#C4924A] px-4 py-2.5 rounded-full shadow-lg hover:bg-[#D6A85F] transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ficha en Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#121212] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F0EA]/50 font-light">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#C4924A]">
            <span>Sabores de Brasa & Vino</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
