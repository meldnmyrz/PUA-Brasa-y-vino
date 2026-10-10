import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import PuaLogo from './PuaLogo';

export default function Footer() {
  const pagesList = [
    { path: '/', name: 'INICIO' },
    { path: '/nosotros', name: 'EL ARTE DE LA BRASA' },
    { path: '/menu', name: 'LA CARTA' },
    { path: '/servicios', name: 'CANTINA & COCTELERÍA' },
    { path: '/reservas', name: 'EL LUGAR & RESERVAS' }
  ];

  return (
    <footer className="relative bg-[#000000] border-t border-[#232730] text-[#aaaaaa] pt-16 pb-12 overflow-hidden z-10 font-sans">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <PuaLogo color="#C4924A" size="small" />
              <span className="font-serif-lujo text-2xl text-white">
                PÚA BRASA Y VINO
              </span>
            </Link>
            <p className="font-sans text-xs text-[#aaaaaa] leading-relaxed font-light">
              Sabor ahumado a la leña de encino, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d0e12] border border-[#232730] flex items-center justify-center text-[#C4924A] hover:bg-[#C4924A] hover:text-black transition-all"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d0e12] border border-[#232730] flex items-center justify-center text-[#C4924A] hover:bg-[#C4924A] hover:text-black transition-all"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="font-serif-lujo text-xl text-[#C4924A] mb-6 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-[#dddddd] hover:text-[#C4924A] transition-colors flex items-center gap-2 group"
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
            <h4 className="font-serif-lujo text-xl text-[#C4924A] mb-6 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C4924A]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs font-sans">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-[#232730] pb-2">
                  <span className="text-white block font-medium">{h.days}</span>
                  <span className="text-[#E5C388] text-[11px] font-mono">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-serif-lujo text-xl text-[#C4924A] mb-6 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C4924A]" />
              Ubicación & Cava
            </h4>
            <p className="font-sans text-xs text-[#aaaaaa] mb-4 font-light">
              Av. Presidente Masaryk, Polanco, CDMX. Servicio de Valet Parking y cava privada.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-luxury text-xs py-2.5 px-4"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#232730] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#888888]">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#C4924A] font-mono">
            <span>PÚA Brasa y Vino · Sabores de Brasa & Cava</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
