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
    <footer className="relative bg-[#000000] border-t border-[#2c2c2e] text-[#888888] pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#6a48f2]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN WITH BRAND LOGO */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <PuaLogo color="#6a48f2" size="small" className="!items-start" />
            </Link>
            <p className="font-subtext-stellar text-xs text-[#888888]">
              Sabor ahumado a la leña, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#171718] border border-[#2c2c2e] flex items-center justify-center text-[#6a48f2] hover:border-[#6a48f2] hover:bg-[#6a48f2] hover:text-white transition-all duration-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#171718] border border-[#2c2c2e] flex items-center justify-center text-[#6a48f2] hover:border-[#6a48f2] hover:bg-[#6a48f2] hover:text-white transition-all duration-300"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 5 MAIN PAGES LINKS */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#6a48f2] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6a48f2]" />
              Navegación
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-[#dddddd] hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#6a48f2] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#6a48f2] mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#6a48f2]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-[#2c2c2e] pb-2">
                  <span className="font-subtext-stellar text-[#ffffff] block">{h.days}</span>
                  <span className="font-mono text-[#6a48f2] text-[11px]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#6a48f2] mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#6a48f2]" />
              Ubicación & Cava
            </h4>
            <p className="font-subtext-stellar text-xs text-[#888888] mb-4">
              Encuéntranos en Google Maps para indicaciones exactas y servicio de Valet Parking.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sprint-violet text-[11px] py-2.5 px-4"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ficha en Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#2c2c2e] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-subtext-stellar text-[#888888]">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#6a48f2] font-mono">
            <span>Sabores de Brasa & Vino — Style: Stellar Dark Midnight Gallery</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
