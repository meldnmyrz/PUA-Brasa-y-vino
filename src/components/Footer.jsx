import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, ArrowUpRight, Flame } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import PuaLogo from './PuaLogo';

export default function Footer() {
  const pagesList = [
    { path: '/', name: 'INICIO' },
    { path: '/nosotros', name: 'NOSOTROS' },
    { path: '/menu', name: 'MENÚ' },
    { path: '/servicios', name: 'SERVICIOS' },
    { path: '/contacto', name: 'CONTACTO' }
  ];

  return (
    <footer className="relative bg-[#000000] border-t border-white/10 text-[#86868b] pt-16 pb-12 overflow-hidden z-10 font-sf-pro-text">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <PuaLogo color="#f5f5f7" size="small" />
              <span className="font-sf-pro-display text-2xl text-white font-semibold">
                PÚA <span className="font-normal text-[#86868b] text-base">Brasa y Vino</span>
              </span>
            </Link>
            <p className="text-xs text-[#86868b] leading-relaxed">
              Sabor ahumado a la leña de encino, cortes de carne Angus Prime seleccionados, mixología contemporánea y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[980px] bg-[#333336] flex items-center justify-center text-[#f5f5f7] hover:bg-[#0071e3] transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[980px] bg-[#333336] flex items-center justify-center text-[#f5f5f7] hover:bg-[#0071e3] transition-colors"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN - 5 SECCIONES */}
          <div>
            <h4 className="font-sf-pro-display text-sm text-white mb-6 uppercase tracking-wider font-semibold">
              SECCIONES PRINCIPALES
            </h4>
            <ul className="space-y-3 text-xs">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-[#86868b] hover:text-[#0071e3] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="font-sf-pro-display text-sm text-white mb-6 uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Clock className="w-4 h-4 text-[#86868b]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-white/5 pb-2">
                  <span className="text-white block font-medium">{h.days}</span>
                  <span className="text-[#86868b] text-[11px] font-mono">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-sf-pro-display text-sm text-white mb-6 uppercase tracking-wider flex items-center gap-2 font-semibold">
              <MapPin className="w-4 h-4 text-[#86868b]" />
              Ubicación & Cava
            </h4>
            <p className="text-xs text-[#86868b] mb-4">
              Av. Presidente Masaryk, Polanco, CDMX. Servicio de Valet Parking y cava privada.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white-outline text-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#86868b]">
            <span>PÚA Brasa y Vino · Polanco CDMX</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
