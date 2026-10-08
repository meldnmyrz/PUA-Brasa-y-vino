import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/menu', label: 'Menú' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/reservas', label: 'Reservas' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-3' : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO & BRAND LINK TO HOME */}
        <Link 
          to="/" 
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-700 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/assets/PUA LOGO.jpeg" 
              alt="PÚA Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest text-gold-gradient block leading-tight">
              PÚA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-amber-200/70 block font-light">
              Brasa & Vino
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION WITH REAL PAGE ROUTES */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-xs lg:text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-amber-300 font-semibold' 
                    : 'text-zinc-300 hover:text-amber-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 shadow-[0_0_8px_#D4AF37]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON LINK TO RESERVAS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/reservas"
            className="group relative px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-200 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-black" />
            Reservar Mesa
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-amber-300 hover:text-amber-100 focus:outline-none"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-zinc-950/98 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-8 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-3 text-sm uppercase tracking-widest font-medium border-b border-zinc-800/60 transition-colors ${
                  isActive ? 'text-amber-300 font-bold border-amber-500/50 pl-2' : 'text-zinc-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/reservas"
            className="mt-4 w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <Calendar className="w-4 h-4" />
            Reservar Mesa Ahora
          </Link>
        </div>
      )}
    </header>
  );
}
