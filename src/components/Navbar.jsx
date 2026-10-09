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
      {/* STELLAR FLOATING NAV BAR (6px RADIUS AS SPECIFIED IN TOKENS) */}
      <div className="w-full max-w-[1200px] nav-pill-floating flex items-center justify-between px-6 py-3">
        
        {/* BRAND LOGO */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none py-1"
        >
          <PuaLogo color="#6a48f2" size="small" />
        </Link>

        {/* DESKTOP NAVIGATION LINKS — STELLAR SPEC: NEUE MONTREAL 15px WEIGHT 400 PLATINUM #dddddd, HOVER PAPER #ffffff */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-sans text-sm tracking-normal transition-colors py-1 ${
                  isActive 
                    ? 'text-white font-medium border-b border-[#6a48f2]' 
                    : 'text-[#dddddd] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON — STELLAR SPRINT VIOLET 50px PILL CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="btn-sprint-violet px-6 py-2.5 text-sm flex items-center gap-2"
          >
            Reservar Mesa
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#6a48f2] focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[84px] bg-[#171718]/98 backdrop-blur-2xl border border-[#2c2c2e] rounded-[10px] px-6 py-8 shadow-2xl flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-3 text-base transition-colors border-b border-[#2c2c2e] ${
                  isActive ? 'text-white font-medium pl-2 border-[#6a48f2]' : 'text-[#888888]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-4 w-full py-3.5 btn-sprint-violet text-sm flex items-center justify-center gap-2"
          >
            Reservar Mesa Ahora
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      )}
    </header>
  );
}
