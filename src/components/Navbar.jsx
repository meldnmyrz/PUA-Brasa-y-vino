import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ShoppingBag } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 sm:px-12 flex justify-center border-b border-[#F4F0EA]/10 bg-[#090a0f]/85 backdrop-blur-md ${
        isScrolled ? 'bg-[#090a0f]/95 py-3.5 shadow-none' : ''
      }`}
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        
        {/* BRAND WORDMARK — GRAZA GARAMOND CONDENSED STYLE */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <PuaLogo color="#C4924A" size="small" />
          <span className="font-garamond-condensed text-2xl tracking-tight text-[#F4F0EA] group-hover:text-[#9eef80] transition-colors hidden sm:inline-block">
            PÚA BRASA Y VINO
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS — TYPEWRITER SERIF STYLE */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-typewriter text-xs uppercase tracking-[0.15em] transition-all py-1 font-medium ${
                  isActive 
                    ? 'text-[#9eef80] border-b-2 border-[#9eef80]' 
                    : 'text-[#F4F0EA]/80 hover:text-[#9eef80]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTONS — GRAZA PILL BUTTONS (9999px RADIUS) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-pill-graza !bg-[#9eef80] !text-[#090a0f] !border-[#9eef80] hover:!bg-[#fbd535] hover:!border-[#fbd535] font-bold text-xs uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVAR MESA</span>
          </Link>

          {/* LANGUAGE TOGGLE PILL */}
          <div className="btn-pill-graza text-xs font-mono">
            <button
              onClick={() => setLang('ES')}
              className={lang === 'ES' ? 'text-[#9eef80] font-bold' : 'hover:text-white'}
            >
              ES
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => setLang('EN')}
              className={lang === 'EN' ? 'text-[#9eef80] font-bold' : 'hover:text-white'}
            >
              EN
            </button>
          </div>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-md text-[#9eef80] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-[80px] bg-[#090a0f] border border-[#F4F0EA]/20 rounded-2xl px-6 py-8 flex flex-col gap-5 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2.5 font-typewriter text-xs uppercase tracking-[0.15em] transition-colors border-b border-[#F4F0EA]/10 ${
                  isActive ? 'text-[#9eef80] font-bold pl-2 border-[#9eef80]' : 'text-[#F4F0EA]/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-2 w-full py-3.5 bg-[#9eef80] text-[#090a0f] font-typewriter font-bold text-xs uppercase tracking-widest text-center rounded-[10px]"
          >
            RESERVAR MESA VIP
          </Link>
        </div>
      )}
    </header>
  );
}
