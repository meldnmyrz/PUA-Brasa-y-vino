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
      {/* DALA FLOATING NAV PILL */}
      <div className="w-full max-w-7xl nav-pill-floating flex items-center justify-between px-6 py-3">
        
        {/* BRAND LOGO */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none py-1"
        >
          <PuaLogo color="#8052ff" size="small" />
        </Link>

        {/* DESKTOP NAVIGATION LINKS — DALA SPEC: PPNEUEMONTREAL 14px UPPERCASE, 0.025em TRACKING, INACTIVE #9a9a9a, ACTIVE #ffffff */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-mono-tag text-xs uppercase tracking-wider transition-all duration-300 py-1 ${
                  isActive 
                    ? 'text-white font-semibold border-b-2 border-[#8052ff]' 
                    : 'text-[#9a9a9a] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON — DALA FILLED VIOLET PILL */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-iris-pill px-6 py-2.5 text-xs flex items-center gap-2"
          >
            Reservar Mesa
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#8052ff] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[84px] bg-[#090a0f]/98 backdrop-blur-2xl border border-[#3D352E] rounded-[24px] px-6 py-8 shadow-2xl flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-3 font-mono-tag text-sm uppercase tracking-wider transition-colors border-b border-[#2D2722] ${
                  isActive ? 'text-white font-bold pl-2 border-[#8052ff]' : 'text-[#9a9a9a]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-4 w-full py-4 btn-iris-pill text-xs flex items-center justify-center gap-2"
          >
            Reservar Mesa Ahora
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      )}
    </header>
  );
}
