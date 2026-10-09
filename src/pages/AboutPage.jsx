import React, { useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import ParticleConstellation from '../components/ParticleConstellation';

export default function AboutPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Nosotros & Galería de Experiencias";
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
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* HEADER BLOCK — DALA MONOLITHIC HEADLINE */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4 mb-20 relative z-10">
        <div className="saffron-tag-pill mx-auto">NUESTRA HISTORIA & IDENTIDAD</div>
        <h1 className="font-display-dala text-5xl sm:text-7xl md:text-8xl text-[#ffffff] uppercase tracking-tight">
          NOSOTROS <span className="text-[#ffb829]">PÚA</span>
        </h1>
        <p className="font-body-ultralight max-w-2xl mx-auto text-[#bdbdbd]">
          Devoción constante por el fuego de encino, los mejores cortes prime y una cava curated de nivel internacional.
        </p>
      </div>

      {/* STORY & PHILOSOPHY GRID — TWO COLUMN RHYTHM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28 relative z-10">
        
        <div className="space-y-6">
          <div className="iris-tag-pill">ORIGEN Y DEVOCIÓN</div>
          <h2 className="font-display-dala text-3xl sm:text-5xl text-[#ffffff] leading-tight">
            EL RITUAL DEL FUEGO Y LA UVA
          </h2>
          <p className="font-body-ultralight text-[#bdbdbd]">
            PÚA Brasa y Vino nació de una pasión inquebrantable por los sabores auténticos del carbón de encino y mezquite. Creemos que una carne de calidad superior no necesita disfraz, sino la técnica exacta para sellar sus jugos y elevar sus aromas.
          </p>
          <p className="font-body-ultralight text-[#bdbdbd]">
            Nuestra cava ha sido curada detalladamente para ofrecer desde maridajes icónicos con vinos mexicanos de Parras, Coahuila (Casa Madero) hasta etiquetas de renombre mundial y champagnes de edición especial.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="card-standard p-6 rounded-[24px] text-center border border-[#3D352E]">
              <span className="font-display-dala text-3xl text-[#ffb829] block">100%</span>
              <span className="font-mono-tag text-[10px] text-[#9a9a9a] uppercase tracking-wider">Leña de Encino</span>
            </div>
            <div className="card-standard p-6 rounded-[24px] text-center border border-[#3D352E]">
              <span className="font-display-dala text-3xl text-[#8052ff] block">500+</span>
              <span className="font-mono-tag text-[10px] text-[#9a9a9a] uppercase tracking-wider">Etiquetas de Cava</span>
            </div>
          </div>
        </div>

        {/* Video Feature */}
        <div className="relative rounded-[24px] overflow-hidden border border-[#3D352E] shadow-2xl h-[480px]">
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
          <div className="absolute bottom-8 left-8 right-8 text-center border-t border-[#8052ff]/40 pt-4">
            <span className="font-script-lujo text-3xl text-[#ffb829] block">
              "Fuego, Tiempo y Devoción Gastronómica"
            </span>
          </div>
        </div>

      </div>

      {/* REAL GALLERY SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <div className="mint-tag-pill mx-auto">UNIVERSO VISUAL</div>
          <h2 className="font-display-dala text-3xl sm:text-5xl text-[#ffffff] flex items-center justify-center gap-3 tracking-tight">
            <ImageIcon className="w-6 h-6 text-[#ffb829]" />
            GALERÍA GASTRONÓMICA PÚA
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((imgUrl, i) => (
            <div
              key={i}
              className="relative h-64 overflow-hidden rounded-[24px] group border border-[#3D352E] hover:border-[#8052ff] transition-all shadow-xl"
            >
              <img
                src={imgUrl}
                alt={`Galería PÚA ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono-tag text-[10px] uppercase tracking-widest text-[#ffb829] font-bold">
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
