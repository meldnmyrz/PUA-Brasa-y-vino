import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, ArrowRight, ArrowUpRight } from 'lucide-react';
import About10 from '../components/About10';

export default function AboutPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Nosotros — Filosofía del Fuego & Cava";
  }, []);

  const galleryImages = [
    '/assets/corte-filete-mignon.jpg',
    '/assets/parrillada-brasas.jpg',
    '/assets/coctel-tiki-maracuya.jpg',
    '/assets/postre-crocante-helado.jpg',
    '/assets/tuna-sashimi-tiradito.jpg',
    '/assets/coctel-negroni-rojo.jpg',
    '/assets/cava-vino-mesa.jpg',
    '/assets/terraza-jardin-pua.jpg',
  ];

  return (
    <div className="pt-24 pb-28 min-h-screen text-[#f5f5f7] bg-[#000000] relative overflow-hidden font-sf-pro-text text-left">
      
      {/* ============================================================
          01 SECCIÓN FOTO UNO: FUEGO, TIEMPO Y DEVOCIÓN
         ============================================================ */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 my-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT 6 COLUMNS: PHILOSOPHY */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#c49a4a] tracking-widest uppercase block font-semibold">
              DEVOCIÓN GASTRONÓMICA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#f5f5f7] font-sf-pro-display leading-[1.1]">
              FUEGO, TIEMPO Y <br />DEVOCIÓN.
            </h1>
            <p className="text-body-apple text-[#c4c2b9] text-base leading-relaxed">
              En PÚA, el fuego no es solo un método de cocción: es un ingrediente esencial. Seleccionamos leña de encino y mezquite nacional para crear brazas parejas a 600°C que sellan la carne sin deshidratarla.
            </p>
            <p className="text-body-apple text-[#c4c2b9] text-base leading-relaxed">
              En conjunto con nuestro Sommelier Principal, cada platillo cuenta con una propuesta de maridaje diseñada para equilibrar los taninos, la acidez y la untuosidad de las brasas.
            </p>

            <div className="pt-2 flex items-center gap-8">
              <div className="border-l-2 border-[#8c672b] pl-4">
                <span className="text-xl font-bold text-[#f5f5f7] block font-sf-pro-display">
                  100% Leña de Encino
                </span>
                <span className="text-xs text-[#c4c2b9]">Sabor ahumado natural sin químicos</span>
              </div>
              <div className="border-l-2 border-[#c49a4a] pl-4">
                <span className="text-xl font-bold text-[#f5f5f7] block font-sf-pro-display">
                  +500 Etiquetas
                </span>
                <span className="text-xs text-[#c4c2b9]">Cava internacional de autor</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="https://menu-pua.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-apple-blue font-semibold !py-3 !px-6 !text-xs flex items-center gap-2"
              >
                <span>Explorar Nuestra Carta</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
              <Link to="/servicios" className="btn-white-outline !py-3 !px-6 !text-xs">
                <span>Ver Servicios VIP</span>
              </Link>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: BLACK FEATURE MEDIA CARD WITH LIVE VIDEO & READOUTS */}
          <div className="lg:col-span-6">
            <div className="card-black-media relative h-[440px] sm:h-[480px] w-full border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-black">
              {/* VIDEO FILLING ENTIRE COMPONENT 100% */}
              <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                className="w-full h-full object-cover filter brightness-95"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  minWidth: '100%',
                  minHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              >
                <source src="/assets/pua-vid-3.mp4" type="video/mp4" />
                <source src="/pua-vid-3.mp4" type="video/mp4" />
                <source src="/assets/PUA VID 3.mp4" type="video/mp4" />
                <source src="/PUA VID 3.mp4" type="video/mp4" />
              </video>
              
              {/* SUBTLE GRADIENT OVERLAY ONLY FOR READABILITY OF BADGE & QUOTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none" />
              
              <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                <div className="bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
                  <Thermometer className="w-3.5 h-3.5 text-[#c49a4a]" />
                  <span className="text-xs font-bold text-[#c49a4a] font-mono">600°C BRASA</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-10 text-center border-t border-white/15 pt-4">
                <p className="text-sm font-semibold text-[#f5f5f7] italic font-sf-pro-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  "El fuego exige paciencia; el vino, memoria."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          02 SECCIÓN FOTO DOS: REACT BITS PRO ABOUT 10 (PORTRAIT COLLAGE AROUND BRAND STATEMENT)
         ============================================================ */}
      <About10 />

      {/* 04 VISUAL GALLERY SHOWCASE (28px MASKED MEDIA CARDS) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-20 z-10 relative">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-[#c49a4a] tracking-widest uppercase block font-semibold mb-2">UNIVERSO VISUAL</span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              GALERÍA DE LA EXPERIENCIA
            </h2>
          </div>
          <Link to="/contacto" className="inline-product-link text-sm font-semibold">
            Visítanos en Polanco →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((imgUrl, i) => (
            <div
              key={i}
              className="card-black-media relative h-64 group border border-white/10 overflow-hidden"
            >
              <img
                src={imgUrl}
                alt={`Galería PÚA ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-[#f5f5f7] uppercase tracking-wider">
                  PÚA Brasa y Vino
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
