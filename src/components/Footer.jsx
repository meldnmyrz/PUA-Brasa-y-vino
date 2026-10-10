import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import PuaLogo from './PuaLogo';

export default function Footer() {
  const pagesList = [
    { path: '/', name: 'Inicio' },
    { path: '/menu', name: 'La Carta' },
    { path: '/nosotros', name: 'El Arte de la Brasa' },
    { path: '/servicios', name: 'Cantina & Coctelería' },
    { path: '/reservas', name: 'Reservar Mesa' }
  ];

  return (
    <footer className="relative bg-[#090a0f] border-t border-[#F4F0EA]/10 text-[#F4F0EA]/70 pt-16 pb-12 overflow-hidden font-typewriter z-10">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <PuaLogo color="#9eef80" size="small" />
              <span className="font-garamond-condensed text-2xl tracking-tight text-[#F4F0EA]">
                PÚA BRASA Y VINO
              </span>
            </Link>
            <p className="font-typewriter text-xs text-[#F4F0EA]/70 leading-relaxed font-light">
              Sabor ahumado a la leña de encino, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava de vinos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#14171f] border border-[#F4F0EA]/20 flex items-center justify-center text-[#9eef80] hover:bg-[#9eef80] hover:text-[#090a0f] transition-all"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#14171f] border border-[#F4F0EA]/20 flex items-center justify-center text-[#9eef80] hover:bg-[#9eef80] hover:text-[#090a0f] transition-all"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="font-garamond-condensed text-xl text-[#9eef80] mb-6 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs font-typewriter">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-[#F4F0EA]/80 hover:text-[#9eef80] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#9eef80] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS DE FUEGO */}
          <div>
            <h4 className="font-garamond-condensed text-xl text-[#9eef80] mb-6 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9eef80]" />
              Horarios de Fuego
            </h4>
            <div className="space-y-3 text-xs font-typewriter">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-[#F4F0EA]/10 pb-2">
                  <span className="text-[#F4F0EA] block font-medium">{h.days}</span>
                  <span className="text-[#fbd535] text-[11px] font-mono">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & MAPS */}
          <div>
            <h4 className="font-garamond-condensed text-xl text-[#9eef80] mb-6 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9eef80]" />
              Ubicación & Cava
            </h4>
            <p className="font-typewriter text-xs text-[#F4F0EA]/70 mb-4 font-light">
              Encuéntranos en Polanco, CDMX. Servicio de Valet Parking y cava privada.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-graza !bg-[#9eef80] !text-[#090a0f] !border-[#9eef80] font-bold text-xs uppercase tracking-wider"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ver en Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#F4F0EA]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-typewriter text-[#F4F0EA]/60">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-[#9eef80]">
            <span>PÚA Brasa y Vino — Style: Graza Mediterranean Deli (Dark Edition)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
