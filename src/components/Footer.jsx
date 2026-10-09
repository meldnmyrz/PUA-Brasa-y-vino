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
    <footer className="relative bg-[#000000] border-t border-[#3D352E] text-[#bdbdbd] pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#8052ff]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN WITH BRAND LOGO */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <PuaLogo color="#8052ff" size="small" className="!items-start" />
            </Link>
            <p className="font-body-ultralight text-xs text-[#9a9a9a]">
              Sabor ahumado a la leña, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#090a0f] border border-[#3D352E] flex items-center justify-center text-[#8052ff] hover:border-[#8052ff] hover:bg-[#8052ff] hover:text-white transition-all duration-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#090a0f] border border-[#3D352E] flex items-center justify-center text-[#ffb829] hover:border-[#ffb829] hover:bg-[#ffb829] hover:text-black transition-all duration-300"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 5 MAIN PAGES LINKS */}
          <div>
            <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8052ff]" />
              Navegación
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-mono-tag">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-[#9a9a9a] hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#8052ff] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8052ff]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-[#2D2722] pb-2">
                  <span className="font-body-ultralight text-[#ffffff] block">{h.days}</span>
                  <span className="font-mono-tag text-[#ffb829] text-[11px]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8052ff]" />
              Ubicación & Cava
            </h4>
            <p className="font-body-ultralight text-xs text-[#9a9a9a] mb-4">
              Encuéntranos en Google Maps para indicaciones exactas y servicio de Valet Parking.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-iris-pill text-[11px] py-2.5 px-4"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ficha en Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#2D2722] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body-ultralight text-[#9a9a9a]">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#ffb829] font-mono-tag">
            <span>Sabores de Brasa & Vino — Style: Dala Constellation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
