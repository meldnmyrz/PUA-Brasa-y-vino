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
    <div className="pt-28 pb-24 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-16">
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Nuestra Identidad & Pasión
        </span>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-bold text-[#F4F0EA]">
          NOSOTROS <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
          La historia detrás de la brasa perfecta, la obsesión por el detalle y el homenaje a la alta cocina mexicana al carbón.
        </p>
        <div className="w-24 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      {/* STORY & PHILOSOPHY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        
        <div className="space-y-6">
          <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
            Origen y Tradición
          </span>
          <h2 className="font-serif-corp text-3xl sm:text-4xl font-bold text-[#F4F0EA] leading-tight">
            EL RITUAL DEL FUEGO Y LA UVA
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
            PÚA Brasa y Vino nació de una pasión inquebrantable por los sabores auténticos del carbón de encino y mezquite. Creemos que una carne de calidad superior no necesita disfraz, sino la técnica exacta para sellar sus jugos y elevar sus aromas.
          </p>
          <p className="text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
            Nuestra cava ha sido curada detalladamente para ofrecer desde maridajes icónicos con vinos mexicanos de Parras, Coahuila (Casa Madero) hasta etiquetas de renombre mundial y champagnes de edición especial.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass-luxury-black p-4 rounded-xl border border-[#3D352E] text-center">
              <span className="font-serif-corp text-3xl font-bold text-[#C4924A] block">100%</span>
              <span className="text-[10px] text-[#F4F0EA]/50 uppercase tracking-widest">Leña de Encino</span>
            </div>
            <div className="glass-luxury-black p-4 rounded-xl border border-[#3D352E] text-center">
              <span className="font-serif-corp text-3xl font-bold text-[#C4924A] block">50+</span>
              <span className="text-[10px] text-[#F4F0EA]/50 uppercase tracking-widest">Etiquetas de Cava</span>
            </div>
          </div>
        </div>

        {/* Video Feature */}
        <div className="relative rounded-3xl overflow-hidden border border-[#3D352E] shadow-2xl h-[450px]">
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
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <span className="font-serif-corp text-sm text-[#C4924A] uppercase tracking-widest block font-bold">
              "Fuego, Tiempo y Devoción Gastronómica"
            </span>
          </div>
        </div>

      </div>

      {/* REAL GALLERY SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div className="text-center space-y-3 mb-12">
          <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
            Universo Visual
          </span>
          <h2 className="font-serif-corp text-3xl font-bold text-[#F4F0EA] flex items-center justify-center gap-3">
            <ImageIcon className="w-6 h-6 text-[#C4924A]" />
            GALERÍA GASTRONÓMICA PÚA
          </h2>
          <p className="text-xs text-[#F4F0EA]/60 font-light">
            Una mirada a nuestras instalaciones, mixología de autor y cortes prime recién salidos de la brasa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imgUrl, i) => (
            <div
              key={i}
              className="relative h-64 rounded-2xl overflow-hidden group border border-[#3D352E] shadow-lg"
            >
              <img
                src={imgUrl}
                alt={`Galería PÚA ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C4924A] font-bold">
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
