import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Calendar, ShoppingBag } from 'lucide-react';
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

  const navLinks = [
    { path: '/', label: 'INICIO' },
    { path: '/nosotros', label: 'EL ARTE DE LA BRASA' },
    { path: '/menu', label: 'LA CARTA' },
    { path: '/servicios', label: 'CANTINA & COCTELERÍA' },
    { path: '/contacto', label: 'EL LUGAR' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8 flex justify-center pointer-events-none">
      
      {/* FLOATING CAPSULE CONTAINER */}
      <div 
        className={`w-full max-w-[1360px] nav-pill-floating px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 transform ${
          isScrolled ? '-translate-y-1 shadow-2xl border-[#C4924A]/40' : ''
        }`}
      >
        
        {/* BRAND LOGO & NAME */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <PuaLogo color="#C4924A" size="small" />
          <div className="flex flex-col text-left">
            <span className="font-serif-lujo text-xl sm:text-2xl text-white group-hover:text-[#C4924A] transition-colors uppercase leading-none font-normal">
              PÚA BRASA Y VINO
            </span>
            <span className="font-sans text-[9px] text-[#888888] tracking-widest uppercase font-semibold mt-0.5">
              POLANCO · CDMX
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden xl:flex items-center gap-8 text-xs font-sans uppercase font-medium tracking-[0.18em]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive 
                    ? 'text-white border-b border-[#C4924A] font-semibold' 
                    : 'text-[#aaaaaa] hover:text-[#C4924A]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          
          {/* SEARCH BUTTON */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="hidden sm:inline-flex items-center gap-2 bg-black/40 border border-[#232730] hover:border-[#C4924A] text-[#aaaaaa] hover:text-white px-3.5 py-1.5 rounded-full text-xs font-mono transition-all"
            >
              <Search className="w-3.5 h-3.5 text-[#C4924A]" />
              <span>Buscar...</span>
              <kbd className="bg-[#12141a] border border-[#232730] text-[10px] px-1.5 py-0.5 rounded text-[#aaaaaa]">⌘K</kbd>
            </button>
          )}

          {/* RESERVAS CTA */}
          <Link
            to="/reservas"
            className="btn-gold-luxury !py-2.5 !px-5 !text-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVAS</span>
          </Link>

          {/* LANGUAGE TOGGLE */}
          <div className="hidden md:flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-[#aaaaaa]">
            <button
              onClick={() => setLang('ES')}
              className={lang === 'ES' ? 'text-white font-bold' : 'hover:text-white'}
            >
              ES
            </button>
            <span>|</span>
            <button
              onClick={() => setLang('EN')}
              className={lang === 'EN' ? 'text-white font-bold' : 'hover:text-white'}
            >
              EN
            </button>
          </div>

          {/* ORDER CART BUTTON IF INCLUDED */}
          {onOpenOrderDrawer && (
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2 rounded-full bg-black/40 border border-[#232730] text-[#C4924A] hover:border-[#C4924A] transition-all"
              title="Mi Mesa"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C4924A] text-black font-mono text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full text-[#C4924A] focus:outline-none"
            aria-label="Menu Toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-20 bg-[#0d0e12] border border-[#C4924A]/40 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2.5 font-sans text-xs uppercase tracking-[0.2em] transition-colors border-b border-white/10 ${
                  isActive ? 'text-[#C4924A] font-bold pl-2 border-[#C4924A]' : 'text-[#aaaaaa]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-2 w-full py-3.5 btn-gold-luxury text-center"
          >
            RESERVAR MESA VIP
          </Link>
        </div>
      )}
    </header>
  );
}
