import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Calendar, ShoppingBag, Flame } from 'lucide-react';
import PuaLogo from './PuaLogo';

export default function Navbar({ onOpenSearch, onOpenOrderDrawer, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('ES');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // The 5 independent requested sections: Inicio, Nosotros, Menú, Servicios, Contacto
  const navLinks = [
    { path: '/', label: 'INICIO' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/menu', label: 'MENÚ' },
    { path: '/servicios', label: 'SERVICIOS' },
    { path: '/contacto', label: 'CONTACTO' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col w-full">
      
      {/* 01 GLOBAL NAVIGATION BAR — 44px #111111 BAR */}
      <div className="w-full h-[44px] bg-[#111111] border-b border-white/10 px-4 sm:px-8 flex items-center justify-between text-xs text-[#86868b]">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-[#f5f5f7] hover:opacity-80 transition-opacity">
            <Flame className="w-3.5 h-3.5 text-[#ff3037]" />
            <span className="font-semibold text-xs tracking-tight">PÚA — BRASA & CAVA</span>
          </Link>
          <span className="hidden md:inline-block text-[11px] text-[#6e6e73]">
            Polanco, Ciudad de México · Cocina a la Leña de Encino
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* SEARCH BAR BUTTON */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 bg-[#333336] text-[#f5f5f7] hover:bg-[#3d3d42] px-3 py-1 rounded-[980px] text-[11px] transition-colors"
            >
              <Search className="w-3 h-3 text-[#86868b]" />
              <span>Buscar</span>
              <kbd className="bg-[#111111] text-[9px] px-1 rounded text-[#86868b] border border-white/10">⌘K</kbd>
            </button>
          )}

          {/* LANGUAGE SELECTOR */}
          <div className="hidden sm:flex items-center gap-1 text-[11px]">
            <button
              onClick={() => setLang('ES')}
              className={lang === 'ES' ? 'text-[#f5f5f7] font-semibold' : 'text-[#86868b] hover:text-[#f5f5f7]'}
            >
              ES
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('EN')}
              className={lang === 'EN' ? 'text-[#f5f5f7] font-semibold' : 'text-[#86868b] hover:text-[#f5f5f7]'}
            >
              EN
            </button>
          </div>

          {/* ORDER DRAWER TRIGGER */}
          {onOpenOrderDrawer && (
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-1.5 text-[#f5f5f7] hover:text-white transition-colors"
              title="Mi Mesa"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0071e3] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 02 LOCAL PRODUCT NAVIGATION BAR — 52px GALLERY BLACK BAR WITH APPLE BLUE PILL */}
      <div 
        className={`w-full h-[52px] bg-[#000000]/90 backdrop-blur-md border-b border-white/5 px-4 sm:px-8 flex items-center justify-between transition-all ${
          isScrolled ? 'bg-[#000000]/95 border-white/10 shadow-2xl' : ''
        }`}
      >
        {/* BRAND IDENTITY */}
        <Link to="/" className="flex items-center gap-2.5">
          <PuaLogo color="#f5f5f7" size="small" />
          <span className="text-[#f5f5f7] font-semibold text-sm sm:text-base tracking-tight font-sf-pro-display">
            PÚA <span className="font-normal text-[#86868b] text-xs">Brasa y Vino</span>
          </span>
        </Link>

        {/* 5 INDEPENDENT NAVIGATION LINKS (DESKTOP) */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-normal tracking-[-0.12px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive 
                    ? 'text-[#f5f5f7] font-semibold border-b-2 border-[#0071e3]' 
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION: APPLE BLUE RESERVATION PILL */}
        <div className="flex items-center gap-3">
          <Link
            to="/reservas"
            className="btn-apple-blue font-normal"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVAR MESA</span>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#f5f5f7] hover:text-white"
            aria-label="Menu Toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2 font-sf-pro-text text-sm transition-colors border-b border-white/5 ${
                  isActive ? 'text-[#0071e3] font-semibold pl-2' : 'text-[#86868b]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

    </header>
  );
}
