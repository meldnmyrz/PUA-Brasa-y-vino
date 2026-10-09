import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import PuaLogo from './PuaLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { path: '/', label: 'Inicio' },
    { path: '/menu', label: 'Menú' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/reservas', label: 'Reservas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 flex justify-center ${
        isScrolled ? 'px-2 sm:px-6' : 'px-4 sm:px-8'
      }`}
    >
      {/* FLOATING NAV PILL (48px RADIUS AS SPECIFIED IN STYLE TOKENS) */}
      <div className="w-full max-w-7xl nav-pill-floating flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none py-1"
        >
          <PuaLogo color="#C4924A" size="small" />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-condensed-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 py-1 ${
                  isActive 
                    ? 'text-[#C4924A] border-b-2 border-[#C4924A]' 
                    : 'text-[#F4F0EA]/80 hover:text-[#C4924A]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON (8px RADIUS FILLED DARK CTA AS SPECIFIED IN TOKENS) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-filled-dark px-6 py-2.5 text-xs font-condensed-bold flex items-center gap-2"
          >
            Reservar Mesa
            <ArrowRight className="w-4 h-4 text-black" />
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
        <div className="md:hidden fixed inset-x-4 top-[84px] bg-[#0b0c12]/98 backdrop-blur-2xl border border-[#3D352E] rounded-3xl px-6 py-8 shadow-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-3 font-condensed-bold text-base uppercase tracking-[0.2em] transition-colors border-b border-[#1f1e26] ${
                  isActive ? 'text-[#C4924A] pl-2 border-[#C4924A]' : 'text-[#F4F0EA]/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-4 w-full py-4 btn-filled-dark text-sm flex items-center justify-center gap-2"
          >
            Reservar Mesa Ahora
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      )}
    </header>
  );
}
