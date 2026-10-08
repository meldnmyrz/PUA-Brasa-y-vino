import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';
import PuaLogo from './PuaLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // EXACT NAVIGATION ORDER AS REQUESTED: INICIO, MENÚ, NOSOTROS, SERVICIOS, RESERVAS
  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/menu', label: 'Menú' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/reservas', label: 'Reservas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav-black py-3' : 'bg-gradient-to-b from-black via-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* BRAND LOGO VECTORED FROM BRAND IDENTITY BOARD */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none py-1"
        >
          <PuaLogo color="#C4924A" size="small" />
        </Link>

        {/* DESKTOP NAVIGATION IN EXACT ORDER */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-xs uppercase tracking-[0.25em] font-sans font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-[#C4924A] font-bold' 
                    : 'text-[#F4F0EA]/70 hover:text-[#F4F0EA]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#C4924A] shadow-[0_0_8px_#C4924A]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION RESERVATION BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-luxury-gold px-6 py-2.5 rounded-full text-[11px] flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-black" />
            Reservar Mesa
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#C4924A] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-black/98 backdrop-blur-2xl border-b border-[#3D352E] px-6 py-8 shadow-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-3 text-xs uppercase tracking-[0.3em] font-medium border-b border-[#121212] transition-colors ${
                  isActive ? 'text-[#C4924A] font-bold border-[#C4924A] pl-2' : 'text-[#F4F0EA]/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-4 w-full py-3.5 rounded-full btn-luxury-gold text-xs flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-black" />
            Reservar Mesa Ahora
          </Link>
        </div>
      )}
    </header>
  );
}
