import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PuaLogo from './PuaLogo';

export default function Navbar() {
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 px-6 sm:px-12 flex justify-center border-b border-white/10 ${
        isScrolled ? 'bg-black/85 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        
        {/* BRAND LOGO — PÚA BRASA Y VINO */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <PuaLogo color="#C4924A" size="small" />
        </Link>

        {/* DESKTOP NAVIGATION LINKS MATCHING REFERENCE SCREENSHOT */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-sans text-xs uppercase tracking-[0.2em] transition-all py-1 font-medium ${
                  isActive 
                    ? 'text-white border-b border-[#C4924A]' 
                    : 'text-[#C8C3BC] hover:text-[#C4924A]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTONS: GOLD OUTLINED RESERVAS + ES | EN TOGGLE */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/reservas"
            className="border border-[#C4924A]/80 text-[#F4F0EA] hover:bg-[#C4924A] hover:text-black transition-all duration-300 px-6 py-2 text-xs font-sans uppercase tracking-[0.2em] rounded-sm font-semibold"
          >
            RESERVAS
          </Link>

          {/* LANGUAGE TOGGLE */}
          <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-[#9a9a9a]">
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
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-md text-[#C4924A] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-[80px] bg-[#0b0c10]/98 backdrop-blur-2xl border border-[#C4924A]/30 rounded-2xl px-6 py-8 shadow-2xl flex flex-col gap-5 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2.5 font-sans text-xs uppercase tracking-[0.2em] transition-colors border-b border-white/10 ${
                  isActive ? 'text-[#C4924A] font-bold pl-2 border-[#C4924A]' : 'text-[#C8C3BC]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-2 w-full py-3.5 border border-[#C4924A] text-[#C4924A] hover:bg-[#C4924A] hover:text-black font-bold text-xs uppercase tracking-[0.2em] text-center transition-all"
          >
            RESERVAR UNA MESA
          </Link>
        </div>
      )}
    </header>
  );
}
