import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, ArrowRight } from 'lucide-react';
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
      
      {/* 01 HEADER HERO STAGE */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono text-[#c49a4a] tracking-widest uppercase block font-semibold">
            SECCIÓN 02 // HISTORIA & IDENTIDAD
          </span>
          <h1 className="text-hero-display text-[#f5f5f7]">
            NOSOTROS. <br />
            <span className="text-[#86868b]">EL RITUAL DEL FUEGO.</span>
          </h1>
          <p className="text-body-apple max-w-2xl text-[#86868b]">
            PÚA Brasa y Vino nace de una veneración constante por las brasas de encino, los mejores cortes Prime madurados en seco y una cava internacional curada al milímetro.
          </p>
        </div>

        {/* HERO CTA BUTTONS */}
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/menu" className="btn-apple-blue font-semibold">
            <span>Explorar Nuestra Carta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/servicios" className="btn-white-outline">
            <span>Ver Servicios VIP</span>
          </Link>
        </div>
      </section>

      {/* 02 REACT BITS PRO ABOUT 10: PORTRAIT COLLAGE AROUND A BRAND STATEMENT */}
      <About10 />

      {/* 03 BLACK FEATURE MEDIA CARD STORY & METRICS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT 6 COLUMNS: PHILOSOPHY */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#c49a4a] tracking-widest uppercase block font-semibold">DEVOCIÓN GASTRONÓMICA</span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              FUEGO, TIEMPO Y DEVOCIÓN.
            </h2>
            <p className="text-body-apple text-[#86868b]">
              En PÚA, el fuego no es solo un método de cocción: es un ingrediente esencial. Seleccionamos leña de encino y mezquite nacional para crear brazas parejas a 600°C que sellan la carne sin deshidratarla.
            </p>
            <p className="text-body-apple text-[#86868b]">
              En conjunto con nuestro Sommelier Principal, cada platillo cuenta con una propuesta de maridaje diseñada para equilibrar los taninos, la acidez y la untuosidad de las brasas.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div className="border-l-2 border-[#0071e3] pl-4">
                <span className="text-xl font-bold text-[#f5f5f7] block font-sf-pro-display">
                  100% Leña de Encino
                </span>
                <span className="text-xs text-[#86868b]">Sabor ahumado natural sin químicos</span>
              </div>
              <div className="border-l-2 border-[#00d959] pl-4">
                <span className="text-xl font-bold text-[#f5f5f7] block font-sf-pro-display">
                  +500 Etiquetas
                </span>
                <span className="text-xs text-[#86868b]">Cava internacional de autor</span>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: BLACK FEATURE MEDIA CARD WITH LIVE VIDEO & READOUTS */}
          <div className="lg:col-span-6">
            <div className="card-black-media relative h-[480px] w-full border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-90"
              >
                <source src="/assets/pua-vid-3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <Thermometer className="w-3.5 h-3.5 text-[#ff3037]" />
                  <span className="text-xs font-bold text-[#ff3037] font-mono">600°C BRASA</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-center border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-[#f5f5f7] italic font-sf-pro-display">
                  "El fuego exige paciencia; el vino, memoria."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 03 CHARCOAL STAGE UPGRADE COMPARISON MODULE (#111111 CHARCOAL STAGE WITH 3 METRIC TILES) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-20 z-10 relative">
        <div className="module-charcoal-stage p-8 sm:p-14">
          
          <div className="max-w-2xl space-y-4 mb-12">
            <span className="text-xs font-mono text-[#c49a4a] tracking-widest uppercase block font-semibold">
              TÉCNICA & MADURACIÓN EN CAVA
            </span>
            <h2 className="text-section-heading text-[#f5f5f7]">
              LOS TRES PILARES DE PÚA.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                MADURACIÓN EN SECO
              </span>
              <span className="text-metric-display text-[#00d959] block">
                45 DÍAS
              </span>
              <p className="text-xs text-[#86868b]">
                Cámara frigorífica de sal marina del Himalaya para concentrar sabor y desmoronar fibras.
              </p>
            </div>

            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                SELLADO DE CORTEZA
              </span>
              <span className="text-metric-display text-[#ff3037] block">
                600°C
              </span>
              <p className="text-xs text-[#86868b]">
                Reacción de Maillard instantánea a fuego directo que retiene la jugosidad original.
              </p>
            </div>

            <div className="tile-feature-metric space-y-3">
              <span className="text-xs text-[#86868b] uppercase tracking-wider block font-semibold">
                MARIDAJE DE CAVA
              </span>
              <span className="text-metric-display text-[#f5f5f7] block">
                100%
              </span>
              <p className="text-xs text-[#86868b]">
                Recomendaciones personalizadas para cada corte por nuestro Sommelier certificado.
              </p>
            </div>

          </div>

        </div>
      </section>

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
