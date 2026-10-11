import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

export default function MenuPage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Menú — Carta de Platillos & Cava";

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) {
        setScrollProgress(1);
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sentence = "Explora nuestra propuesta gastronómica, la intensidad de la brasa, cortes de alta gama y vinos excepcionales";
  const words = sentence.split(" ");

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-[#c49a4a] selection:text-black"
      style={{ height: '240vh' }}
    >
      {/* ============================================================
          STICKY FULL-SCREEN STAGE
         ============================================================ */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-12 text-center">
        
        {/* ============================================================
            BACKGROUND VIDEO (DESKTOP: PUA FLAMES | MOBILE: PUA BRAND OF)
           ============================================================ */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* DESKTOP FLAMES VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover brightness-[0.45] contrast-125 filter transition-opacity duration-700"
            src="/assets/pua-header.mp4"
          />

          {/* MOBILE PUA BRAND OF VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block md:hidden w-full h-full object-cover brightness-[0.45] contrast-125 filter transition-opacity duration-700"
            src="/assets/pua-head-of.mp4"
          />

          {/* LUXURY RADIAL & VERTICAL GRADIENT OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />
        </div>

        {/* ============================================================
            WATERMARK LOGO IN BACKGROUND ("púa BRASA Y VINO")
           ============================================================ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-1 overflow-hidden opacity-20 md:opacity-25">
          <span className="text-[22vw] sm:text-[18vw] md:text-[15vw] font-bold tracking-tight text-white/20 font-sf-pro-display lowercase leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            púa
          </span>
          <span className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] tracking-[0.45em] text-white/30 uppercase font-mono font-semibold -mt-2 sm:-mt-4">
            BRASA Y VINO
          </span>
        </div>

        {/* ============================================================
            CENTERED MAIN CONTENT WITH WORD-BY-WORD SCROLL REVEAL
           ============================================================ */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12">
          
          {/* STATEMENT WITH PROGRESSIVE SCROLL ILLUMINATION */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-semibold tracking-[-0.03em] leading-[1.3] sm:leading-[1.25] text-center max-w-4xl px-2">
            {words.map((word, idx) => {
              // Word illumination thresholds
              const startThreshold = idx / words.length;
              const endThreshold = (idx + 0.85) / words.length;
              
              let isRevealed = scrollProgress >= endThreshold;
              let isTransitioning = scrollProgress > startThreshold && scrollProgress < endThreshold;

              let wordOpacity = 0.22;
              if (isRevealed) {
                wordOpacity = 1;
              } else if (isTransitioning) {
                wordOpacity = 0.22 + ((scrollProgress - startThreshold) / (endThreshold - startThreshold)) * 0.78;
              }

              const isFullyActive = wordOpacity > 0.85;

              return (
                <span
                  key={idx}
                  style={{ opacity: wordOpacity }}
                  className={`inline-block mx-1.5 sm:mx-2.5 transition-opacity duration-200 select-none ${
                    isFullyActive
                      ? 'text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.7)]'
                      : 'text-[#88888b]'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h1>

          {/* ============================================================
              CALL TO ACTION BUTTON TO OPEN https://menu-pua.vercel.app/
             ============================================================ */}
          <div className="pt-2 sm:pt-4 flex flex-col items-center gap-3">
            <a
              href="https://menu-pua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-blue inline-flex items-center gap-3 !py-4 !px-8 sm:!py-4.5 sm:!px-10 text-xs sm:text-sm font-semibold rounded-full shadow-[0_4px_30px_rgba(0,113,227,0.55)] hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Abrir Menú Digital Oficial</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <span className="text-[11px] font-mono text-[#86868b] tracking-wider uppercase">
              menu-pua.vercel.app
            </span>
          </div>

        </div>

        {/* ============================================================
            SUBTLE SCROLL INDICATOR (FADES OUT AS USER SCROLLS)
           ============================================================ */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#86868b] pointer-events-none transition-opacity duration-500"
          style={{ opacity: Math.max(1 - scrollProgress * 3.5, 0) }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Desliza para revelar
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c49a4a]" />
        </div>

      </div>
    </div>
  );
}
