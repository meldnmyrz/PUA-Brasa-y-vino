import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Search, Menu, X, ShoppingBag, ChevronDown, ArrowRight, ArrowUpRight 
} from 'lucide-react';
import PuaLogo from './PuaLogo';

export default function Navbar({ onOpenSearch, onOpenOrderDrawer, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'menu' | 'servicios' | 'nosotros' | null
  const location = useLocation();
  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Structural links definition with mega menu keys
  const navLinks = [
    { path: '/', label: 'Inicio', megaKey: null },
    { path: '/nosotros', label: 'Nosotros', megaKey: 'nosotros' },
    { path: '/menu', label: 'Menú', megaKey: 'menu' },
    { path: '/servicios', label: 'Servicios', megaKey: 'servicios' },
    { path: '/contacto', label: 'Contacto', megaKey: null },
  ];

  // Mega Menu structured content with link columns
  const megaMenuData = {
    menu: {
      title: 'MENÚ GASTRO-BAR & CAVA',
      badge: '165+ SELECCIONES',
      columns: [
        {
          heading: 'CORTES & BRASA DIRECTA',
          items: [
            { name: 'Tomahawk Angus Prime (45 Días)', desc: '1.2 kg sellado a 600°C con leña de encino', path: '/menu?cat=Cortes%20Prime' },
            { name: 'Ribeye Dry Aged (400g)', desc: 'Madurado en seco con mantequilla de trufa', path: '/menu?cat=Cortes%20Prime' },
            { name: 'Filete Mignon al Romero', desc: 'Centro de filete en reducción de oporto', path: '/menu?cat=Cortes%20Prime' },
            { name: 'Pulpo a la Brasa de Encino', desc: 'Con alioli de chile manzano y papas cambray', path: '/menu?cat=Entradas' }
          ]
        },
        {
          heading: 'LA CAVA & SOMMELIER',
          items: [
            { name: 'Tintos de Guarde & Burdeos', desc: 'Gran Reserva Rioja, Ribera del Duero y Napa', path: '/menu?cat=Cava%20%26%20Vinos' },
            { name: 'Vinos de Autor del Valle', desc: 'Curaduría exclusiva de Valle de Guadalupe', path: '/menu?cat=Cava%20%26%20Vinos' },
            { name: 'Champagne & Espumosos', desc: 'Dom Pérignon, Veuve Clicquot y Cava VIP', path: '/menu?cat=Cava%20%26%20Vinos' },
            { name: 'Coctelería de Autor con Ahumados', desc: 'Smoked Mezcalita, Carajillo Púa y Gin', path: '/menu?cat=Cocteler%C3%ADa' }
          ]
        },
        {
          heading: 'ENTRADAS & COMPLEMENTOS',
          items: [
            { name: 'Tuétano a la Brasa con Esquites', desc: 'Servido en hueso canoa con chile de árbol', path: '/menu?cat=Entradas' },
            { name: 'Carpaccio de Res Trufado', desc: 'Láminas finas con alcaparras y parmesano', path: '/menu?cat=Entradas' },
            { name: 'Empanadas de Picaña & Queso', desc: 'Horneadas al carbón con chimichurri casero', path: '/menu?cat=Entradas' },
            { name: 'Postres Artesanales de Fuego', desc: 'Volcán de dulce de leche y tarta ahumada', path: '/menu?cat=Postres' }
          ]
        }
      ],
      featured: {
        title: 'Menú Degustación 5 Tiempos',
        desc: 'Maridaje guiado por nuestro sommelier en la cava subterránea.',
        linkText: 'Explorar Carta Completa →',
        path: '/menu'
      }
    },
    servicios: {
      title: 'SERVICIOS & EXPERIENCIAS EXCLUSIVAS',
      badge: 'EVENTOS VIP',
      columns: [
        {
          heading: 'EXPERIENCIAS GASTRONÓMICAS',
          items: [
            { name: 'Omakase de Brasas (5 Tiempos)', desc: 'Cena privada frente al fogón principal', path: '/servicios' },
            { name: 'Cata Privada en Cava Subterránea', desc: 'Maridaje de 6 etiquetas curadas por sommelier', path: '/servicios' },
            { name: 'Mesa del Chef VIP', desc: 'Atención personalizada directa de nuestro Master Griller', path: '/servicios' }
          ]
        },
        {
          heading: 'EVENTOS CORPORATIVOS & PRIVADOS',
          items: [
            { name: 'Salón Privado Cava (Hasta 40 personas)', desc: 'Equipado para reuniones ejecutivas y cenas de gala', path: '/servicios' },
            { name: 'Catering Premium a Domicilio', desc: 'Llevamos el ritual del fuego a tu residencia u oficina', path: '/servicios' },
            { name: 'Celebraciones & Cenas Románticas', desc: 'Decoración especial y menú personalizado de tiempos', path: '/servicios' }
          ]
        }
      ],
      featured: {
        title: 'Reservaciones & Cenas VIP',
        desc: 'Cotiza tu evento corporativo o reunión privada en Polanco.',
        linkText: 'Solicitar Información VIP →',
        path: '/contacto'
      }
    },
    nosotros: {
      title: 'NUESTRA HISTORIA & FILOSOFÍA',
      badge: 'CONOCE PÚA',
      columns: [
        {
          heading: 'EL RITUAL DEL FUEGO',
          items: [
            { name: 'Cocina de Encino & Carbón', desc: 'Sellado a 600°C preservando la jugosidad natural', path: '/nosotros' },
            { name: 'Cámara de Maduración Propia', desc: 'Control continuo de humedad al 85% por 45 días', path: '/nosotros' },
            { name: 'Ingredientes de Origen Certificado', desc: 'Cortes Angus Prime seleccionados a mano', path: '/nosotros' }
          ]
        },
        {
          heading: 'ESPACIOS & UBICACIÓN',
          items: [
            { name: 'Salón Principal & Cava', desc: 'Diseño arquitectónico en piedra, madera y cristal', path: '/nosotros' },
            { name: 'Terraza Polanco', desc: 'Ambiente exclusivo con calefacción y audio de alta fidelidad', path: '/nosotros' },
            { name: 'Ubicación en Polanco, CDMX', desc: 'Av. Emilio Castelar, Polanco III Sección', path: '/contacto' }
          ]
        }
      ],
      featured: {
        title: 'Visítanos en Polanco',
        desc: 'Reserva tu mesa en el corazón gastronómico de CDMX.',
        linkText: 'Ver Ubicación & Horarios →',
        path: '/contacto'
      }
    }
  };

  return (
    <header ref={megaMenuRef} className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      
      {/* FLOATING MINIMALIST TRANSPARENT NAVBAR (MOONMAN AGENCY STYLE) */}
      <div 
        className={`w-full px-6 sm:px-12 flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#000000]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' 
            : 'py-6 sm:py-8 bg-transparent border-b border-transparent'
        }`}
      >
        {/* LEFT GROUP: BRAND EMBLEM LOGO & LEFT-ALIGNED NAVIGATION LINKS */}
        <div className="flex items-center gap-8 sm:gap-12">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <PuaLogo size="small" />
          </Link>

          {/* LEFT-ALIGNED NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const hasMega = Boolean(link.megaKey);
              const isMegaActive = activeMegaMenu === link.megaKey;

              return (
                <div 
                  key={link.path}
                  className="relative py-2 group"
                  onMouseEnter={() => hasMega && setActiveMegaMenu(link.megaKey)}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => !hasMega && setActiveMegaMenu(null)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-[13px] font-medium tracking-tight transition-all duration-200 ${
                        isActive || isMegaActive
                          ? 'text-white font-semibold' 
                          : 'text-white/75 hover:text-white'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    {hasMega && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 opacity-60 group-hover:opacity-100 ${isMegaActive ? 'rotate-180 text-white' : ''}`} />
                    )}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>

        {/* RIGHT: MINIMALIST CTA LINK & ACTIONS */}
        <div className="flex items-center gap-5 sm:gap-8">
          
          {/* SEARCH BUTTON */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="text-white/80 hover:text-white transition-colors p-1"
              title="Buscar"
            >
              <Search className="w-4.5 h-4.5" />
            </button>
          )}

          {/* CART / ORDER DRAWER */}
          {onOpenOrderDrawer && (
            <button
              onClick={onOpenOrderDrawer}
              className="relative text-white/80 hover:text-white transition-colors p-1"
              title="Mi Mesa"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#ff3037] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* RIGHT CTA LINK matching reference image style */}
          <Link
            to="/reservas"
            className="text-xs sm:text-sm font-semibold text-white hover:text-[#ff3037] transition-all flex items-center gap-1.5 tracking-tight group"
          >
            <span>Reservar mesa</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white/80 group-hover:text-[#ff3037]" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/90 hover:text-white p-1"
            aria-label="Menu Toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ============================================================
          MEGA MENU FLOATING DROPDOWN PANEL
         ============================================================ */}
      {activeMegaMenu && megaMenuData[activeMegaMenu] && (
        <div 
          className="hidden lg:block absolute top-full inset-x-0 bg-[#0d0d0e]/98 backdrop-blur-2xl border-b border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.95)] z-50 animate-fadeIn"
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-[1360px] mx-auto px-8 py-8">
            
            {/* MEGA MENU HEADER BADGE & TITLE */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="badge-availability !bg-[#ff3037]/20 !text-[#ff3037] !border-[#ff3037]/30">
                  {megaMenuData[activeMegaMenu].badge}
                </span>
                <h3 className="text-sm font-semibold tracking-wider text-[#f5f5f7] uppercase font-sf-pro-display">
                  {megaMenuData[activeMegaMenu].title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveMegaMenu(null)}
                className="text-xs text-[#86868b] hover:text-white transition-colors"
              >
                Cerrar ✕
              </button>
            </div>

            {/* MULTI-COLUMN LINK GRID */}
            <div className="grid grid-cols-12 gap-8">
              
              {/* LINK COLUMNS (8 OR 9 COLS) */}
              <div className={`grid gap-8 ${megaMenuData[activeMegaMenu].columns.length === 3 ? 'col-span-9 grid-cols-3' : 'col-span-8 grid-cols-2'}`}>
                {megaMenuData[activeMegaMenu].columns.map((col, cIdx) => (
                  <div key={cIdx} className="space-y-4">
                    <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b] border-b border-white/5 pb-2">
                      {col.heading}
                    </h4>
                    <ul className="space-y-3">
                      {col.items.map((item, iIdx) => (
                        <li key={iIdx}>
                          <Link
                            to={item.path}
                            onClick={() => setActiveMegaMenu(null)}
                            className="group block space-y-0.5 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-all"
                          >
                            <div className="flex items-center justify-between text-xs font-semibold text-[#f5f5f7] group-hover:text-[#ff3037] transition-colors">
                              <span>{item.name}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff3037]" />
                            </div>
                            <p className="text-[11px] text-[#86868b] leading-tight font-normal line-clamp-1">
                              {item.desc}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* FEATURED CARD COLUMN (3 OR 4 COLS) */}
              <div className={`${megaMenuData[activeMegaMenu].columns.length === 3 ? 'col-span-3' : 'col-span-4'}`}>
                <div className="bg-[#161618] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full space-y-4 hover:border-white/20 transition-all">
                  <div className="space-y-2">
                    <span className="text-[10px] text-[#ff3037] font-semibold uppercase tracking-wider block">
                      RECOMENDACIÓN DESTACADA
                    </span>
                    <h5 className="text-sm font-semibold text-white">
                      {megaMenuData[activeMegaMenu].featured.title}
                    </h5>
                    <p className="text-xs text-[#86868b] leading-relaxed">
                      {megaMenuData[activeMegaMenu].featured.desc}
                    </p>
                  </div>
                  <Link
                    to={megaMenuData[activeMegaMenu].featured.path}
                    onClick={() => setActiveMegaMenu(null)}
                    className="btn-apple-blue !py-2.5 !px-4 !text-xs font-semibold text-center w-full justify-center !bg-[#ff3037] hover:!bg-[#e0282f]"
                  >
                    <span>{megaMenuData[activeMegaMenu].featured.linkText}</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-left py-2 font-sf-pro-text text-sm transition-colors border-b border-white/5 ${
                  isActive ? 'text-[#ff3037] font-semibold pl-2' : 'text-[#86868b]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

    </header>
  );
}

