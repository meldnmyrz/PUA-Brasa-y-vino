import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Utensils } from 'lucide-react';
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
    { path: '/', label: 'INICIO' },
    { path: '/menu', label: 'MENÚ COMPLETO' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/servicios', label: 'EXPERIENCIAS' },
    { path: '/contacto', label: 'UBICACIÓN' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-8 flex justify-center border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl ${
        isScrolled ? 'bg-[#050505]/98 py-3 border-white/15' : ''
      }`}
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        
        {/* BRAND LOGO & TITLE */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <PuaLogo color="#e6ff55" size="small" />
          <div className="flex flex-col text-left">
            <span className="font-serif-pua text-xl sm:text-2xl tracking-tight text-[#ffffff] group-hover:text-[#e6ff55] transition-colors leading-none uppercase">
              PÚA BRASA Y VINO
            </span>
            <span className="font-sans-pua text-[10px] text-[#9a9a9a] tracking-wider uppercase font-medium mt-0.5">
              MENÚ GASTRONÓMICO OFICIAL
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-sans-pua text-xs uppercase tracking-[0.12em] transition-all py-1 font-semibold ${
                  isActive 
                    ? 'text-[#e6ff55] border-b-2 border-[#e6ff55]' 
                    : 'text-[#f4f4f5]/80 hover:text-[#e6ff55]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON — LIME PILL CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-lime-pua shadow-[0_0_20px_rgba(230,255,85,0.25)]"
          >
            <Calendar className="w-4 h-4 stroke-[2.5]" />
            <span>RESERVAR MESA</span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-md text-[#e6ff55] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-[75px] bg-[#0e0f14] border border-[#e6ff55]/30 rounded-2xl px-6 py-6 flex flex-col gap-4 z-50 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2.5 font-sans-pua text-xs uppercase tracking-[0.12em] transition-colors border-b border-white/10 ${
                  isActive ? 'text-[#e6ff55] font-bold pl-2 border-[#e6ff55]' : 'text-[#f4f4f5]/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-2 w-full py-3.5 bg-[#e6ff55] text-black font-sans-pua font-bold text-xs uppercase tracking-widest text-center rounded-full flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVAR MESA VIP</span>
          </Link>
        </div>
      )}
    </header>
  );
}
