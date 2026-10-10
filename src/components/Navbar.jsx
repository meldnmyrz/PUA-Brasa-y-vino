import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ShoppingBag, Menu, X, Calendar, Flame, Sparkles, Utensils } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import PuaLogo from './PuaLogo';

export default function Navbar({ onOpenSearch, onOpenOrderDrawer, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('ES');
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryCount = (catId) => {
    if (catId === 'todos') return menuItems.length;
    return menuItems.filter(i => i.category === catId).length;
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8 flex justify-center pointer-events-none">
      
      {/* NAVBAR 12 SINGLE CAPSULE CONTAINER (GLASSMORPHISM + LIFT ON SCROLL) */}
      <div 
        className={`w-full max-w-[1340px] nav-capsule-glass px-5 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 transform ${
          isScrolled ? '-translate-y-1 shadow-[0_15px_45px_rgba(0,0,0,0.9)] border-[#c89f53]/40' : ''
        }`}
      >
        
        {/* LOGO & BRAND */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <PuaLogo color="#c89f53" size="small" />
          <div className="flex flex-col text-left">
            <span className="font-garamond text-xl sm:text-2xl text-white group-hover:text-[#c89f53] transition-colors uppercase leading-none font-semibold">
              PÚA BRASA Y VINO
            </span>
            <span className="font-jakarta text-[9px] text-[#848a96] tracking-widest uppercase font-bold mt-0.5">
              POLANCO · CDMX
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-jakarta uppercase font-semibold">
          
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors py-1 ${isActive ? 'text-[#c89f53] font-bold' : 'text-[#d4d3c9] hover:text-[#c89f53]'}`
            }
          >
            INICIO
          </NavLink>

          {/* MENÚ DESPLEGABLE INTERACTIVO (CATEGORÍAS CON DICH COUNTS) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
              className="flex items-center gap-1.5 text-[#d4d3c9] hover:text-[#c89f53] py-1 transition-colors uppercase font-semibold focus:outline-none"
            >
              <span>MENÚ GASTRONÓMICO</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${menuDropdownOpen ? 'rotate-180 text-[#c89f53]' : ''}`} />
            </button>

            {/* DROPDOWN PREVIEW PANEL */}
            {menuDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#0b0e14] border border-[#232730] rounded-[20px] p-4 shadow-2xl space-y-2 animate-fadeIn z-50">
                <div className="text-[10px] font-mono text-[#c89f53] uppercase tracking-wider font-bold px-3 py-1 border-b border-[#232730]">
                  CLASIFICACIONES DEL MENÚ
                </div>
                
                <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                  {menuCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setMenuDropdownOpen(false);
                        navigate(cat.id === 'todos' ? '/menu' : `/section/${cat.id}`);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl bg-[#12141a] hover:bg-[#171a24] border border-transparent hover:border-[#c89f53] text-xs font-jakarta text-white flex items-center justify-between group transition-all"
                    >
                      <span className="group-hover:text-[#c89f53]">{cat.name}</span>
                      <span className="text-[10px] font-mono text-[#848a96] bg-[#050505] px-2 py-0.5 rounded-full">
                        {getCategoryCount(cat.id)}
                      </span>
                    </button>
                  ))}
                </div>

                <Link
                  to="/menu"
                  onClick={() => setMenuDropdownOpen(false)}
                  className="block text-center text-xs font-bold text-[#c89f53] hover:underline pt-2"
                >
                  Ver Menú Completo (118 Platillos) →
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `transition-colors py-1 ${isActive ? 'text-[#c89f53] font-bold' : 'text-[#d4d3c9] hover:text-[#c89f53]'}`
            }
          >
            NOSOTROS
          </NavLink>

          <NavLink
            to="/cava-destilados"
            className={({ isActive }) =>
              `transition-colors py-1 ${isActive ? 'text-[#c89f53] font-bold' : 'text-[#d4d3c9] hover:text-[#c89f53]'}`
            }
          >
            CAVA & DESTILADOS
          </NavLink>

          <NavLink
            to="/reservas"
            className={({ isActive }) =>
              `transition-colors py-1 ${isActive ? 'text-[#c89f53] font-bold' : 'text-[#d4d3c9] hover:text-[#c89f53]'}`
            }
          >
            RESERVAS
          </NavLink>

        </nav>

        {/* RIGHT CONTROLS: COMMAND MENU (⌘K), LANGUAGE, CART & CTA */}
        <div className="flex items-center gap-3">
          
          {/* SEARCH TRIGGER BUTTON (⌘K) */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:inline-flex items-center gap-2 bg-[#12141a] border border-[#232730] hover:border-[#c89f53] text-[#848a96] hover:text-white px-3.5 py-1.5 rounded-full text-xs font-mono transition-all"
            title="Buscar en el Menú (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#c89f53]" />
            <span>Buscar...</span>
            <kbd className="bg-[#050505] border border-[#232730] text-[10px] px-1.5 py-0.5 rounded text-[#848a96]">⌘K</kbd>
          </button>

          {/* LANGUAGE SELECTOR */}
          <div className="hidden md:flex items-center gap-1 text-[11px] font-mono text-[#848a96] bg-[#12141a] border border-[#232730] px-2.5 py-1 rounded-full">
            <button
              onClick={() => setLang('ES')}
              className={lang === 'ES' ? 'text-[#c89f53] font-bold' : 'hover:text-white'}
            >
              ES
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => setLang('EN')}
              className={lang === 'EN' ? 'text-[#c89f53] font-bold' : 'hover:text-white'}
            >
              EN
            </button>
          </div>

          {/* ORDER DRAWER (MI MESA) BUTTON */}
          <button
            onClick={onOpenOrderDrawer}
            className="relative p-2 rounded-full bg-[#12141a] border border-[#232730] text-[#c89f53] hover:border-[#c89f53] transition-all"
            title="Mi Mesa & Comanda"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#987232] text-white font-mono text-[10px] font-bold flex items-center justify-center border border-[#050505] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#c89f53] focus:outline-none"
            aria-label="Menu Toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#0b0e14] border border-[#232730] rounded-[24px] p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto z-50">
          
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#12141a] border border-[#232730] text-xs text-[#848a96]"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#c89f53]" />
              Buscar platillo o vino...
            </span>
            <kbd className="bg-[#050505] text-[10px] px-2 py-0.5 rounded text-white">⌘K</kbd>
          </button>

          <div className="space-y-1 pt-2 border-t border-[#232730]">
            <Link to="/" className="block py-2.5 text-left text-xs font-jakarta text-white font-semibold border-b border-[#232730]/50">
              INICIO
            </Link>

            <div className="py-2.5">
              <span className="text-[10px] font-mono text-[#c89f53] uppercase tracking-wider block font-bold mb-2">
                CLASIFICACIONES
              </span>
              <div className="grid grid-cols-2 gap-2">
                {menuCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.id === 'todos' ? '/menu' : `/section/${cat.id}`}
                    className="p-2.5 rounded-lg bg-[#12141a] border border-[#232730] text-[11px] text-white font-medium text-left truncate"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/nosotros" className="block py-2.5 text-left text-xs font-jakarta text-white font-semibold border-b border-[#232730]/50">
              NOSOTROS
            </Link>
            <Link to="/cava-destilados" className="block py-2.5 text-left text-xs font-jakarta text-white font-semibold border-b border-[#232730]/50">
              CAVA & DESTILADOS
            </Link>
            <Link to="/reservas" className="block py-2.5 text-left text-xs font-jakarta text-white font-semibold">
              RESERVAS
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}
