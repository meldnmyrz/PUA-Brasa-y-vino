import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function Footer() {
  const pagesList = [
    { path: '/', name: 'Inicio' },
    { path: '/menu', name: 'Menú' },
    { path: '/servicios', name: 'Servicios' },
    { path: '/nosotros', name: 'Nosotros' },
    { path: '/contacto', name: 'Contacto' },
    { path: '/reservas', name: 'Reservas' }
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-amber-500/20 text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Glow ambient background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COL */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/PUA LOGO.jpeg" 
                alt="PÚA Logo" 
                className="w-12 h-12 rounded-full border border-amber-400/40 object-cover shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
              />
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-widest text-gold-gradient block">
                  PÚA
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-amber-300/60 block">
                  Brasa & Vino
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed pt-2">
              Sabor ahumado a la leña, cortes de carne prime seleccionados, mixología ritual de autor y la mejor cava para tus celebraciones más memorables.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-amber-500/30 flex items-center justify-center text-amber-300 hover:bg-amber-500 hover:text-black transition-all duration-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-amber-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300"
                title="WhatsApp Directo"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS TO INDIVIDUAL PAGES */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold uppercase tracking-widest text-amber-300 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Páginas del Sitio
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider">
              {pagesList.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIOS */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold uppercase tracking-widest text-amber-300 mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              Horarios de Brasa
            </h4>
            <div className="space-y-3 text-xs">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-zinc-800/80 pb-2">
                  <span className="text-zinc-200 block font-medium">{h.days}</span>
                  <span className="text-amber-400/90 text-[11px]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UBICACIÓN & CONTACTO */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold uppercase tracking-widest text-amber-300 mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              Ubicación & Cava
            </h4>
            <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
              Encuéntranos en Google Maps para indicaciones exactas y disponibilidad de estacionamiento con Valet Parking.
            </p>
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 to-amber-500 px-4 py-2.5 rounded-lg shadow-lg hover:from-amber-400 hover:to-amber-200 transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Ver Ficha en Google Maps
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} PÚA Brasa y Vino. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-[11px] text-amber-300/60">
            <span>Sitio Web Multi-Página Luxury</span>
            <span>•</span>
            <span>Cultura al Carbón</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
