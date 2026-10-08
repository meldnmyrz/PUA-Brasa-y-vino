import React, { useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Nosotros & Galería de Experiencias";
  }, []);

  const galleryImages = [
    '/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM.jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.42 PM (1).jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.43 PM.jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.44 PM.jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.45 PM.jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.46 PM.jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM (2).jpeg',
    '/assets/WhatsApp Image 2026-10-08 at 3.07.42 PM.jpeg',
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-20">
        <div className="eyebrow-tag justify-center">NUESTRA HISTORIA & IDENTIDAD</div>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-light tracking-widest text-[#F4F0EA]">
          NOSOTROS <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Tradición al Carbón de Encino
        </span>
        <div className="w-16 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      {/* STORY & PHILOSOPHY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
        
        <div className="space-y-6">
          <div className="eyebrow-tag">ORIGEN Y DEVOCIÓN</div>
          <h2 className="font-serif-corp text-3xl sm:text-4xl font-light tracking-wider text-[#F4F0EA] leading-tight">
            EL RITUAL DEL FUEGO Y LA UVA
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
            PÚA Brasa y Vino nació de una pasión inquebrantable por los sabores auténticos del carbón de encino y mezquite. Creemos que una carne de calidad superior no necesita disfraz, sino la técnica exacta para sellar sus jugos y elevar sus aromas.
          </p>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
            Nuestra cava ha sido curada detalladamente para ofrecer desde maridajes icónicos con vinos mexicanos de Parras, Coahuila (Casa Madero) hasta etiquetas de renombre mundial y champagnes de edición especial.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="card-editorial p-6 rounded-none text-center">
              <span className="font-serif-corp text-3xl font-light text-[#C4924A] block">100%</span>
              <span className="text-[10px] text-[#F4F0EA]/50 uppercase tracking-[0.2em] font-sans">Leña de Encino</span>
            </div>
            <div className="card-editorial p-6 rounded-none text-center">
              <span className="font-serif-corp text-3xl font-light text-[#C4924A] block">50+</span>
              <span className="text-[10px] text-[#F4F0EA]/50 uppercase tracking-[0.2em] font-sans">Etiquetas de Cava</span>
            </div>
          </div>
        </div>

        {/* Video Feature */}
        <div className="relative rounded-none overflow-hidden border border-[#2D2722] shadow-2xl h-[480px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-90"
          >
            <source src="/assets/PUA VID 3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-8 left-8 right-8 text-center border-t border-[#C4924A]/40 pt-4">
            <span className="font-script-lujo text-2xl text-[#C4924A] block">
              "Fuego, Tiempo y Devoción Gastronómica"
            </span>
          </div>
        </div>

      </div>

      {/* REAL GALLERY SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow-tag justify-center">UNIVERSO VISUAL</div>
          <h2 className="font-serif-corp text-3xl font-light text-[#F4F0EA] flex items-center justify-center gap-3 tracking-widest">
            <ImageIcon className="w-5 h-5 text-[#C4924A]" />
            GALERÍA GASTRONÓMICA PÚA
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imgUrl, i) => (
            <div
              key={i}
              className="relative h-64 overflow-hidden group border border-[#2D2722] shadow-lg"
            >
              <img
                src={imgUrl}
                alt={`Galería PÚA ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C4924A] font-bold">
                  PÚA Brasa y Vino
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
