import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ScrollRevealStatement() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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
    <section 
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-[#c49a4a] selection:text-black z-10"
      style={{ height: '170vh' }}
    >
      {/* STICKY FULL-SCREEN CENTERED STAGE */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 sm:px-12 md:px-16 text-center">
        
        {/* SUBTLE AMBIENT RADIAL EMBER GLOW */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #c49a4a 0%, #ff791b 40%, transparent 70%)' }}
        />

        {/* WATERMARK LOGO BEHIND TEXT ("púa BRASA Y VINO") */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-20 sm:opacity-25">
          <span className="text-[26vw] sm:text-[20vw] md:text-[16vw] font-bold tracking-tight text-white/15 font-sf-pro-display lowercase leading-none">
            púa
          </span>
          <span className="text-[4vw] sm:text-[3vw] md:text-[2.2vw] tracking-[0.45em] text-white/20 uppercase font-mono font-semibold -mt-2 sm:-mt-4">
            BRASA Y VINO
          </span>
        </div>

        {/* CENTERED STATEMENT WITH WORD-BY-WORD SCROLL REVEAL */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-semibold tracking-[-0.03em] leading-[1.3] sm:leading-[1.25] text-center max-w-3xl">
            {words.map((word, idx) => {
              const startThreshold = idx / words.length;
              const endThreshold = (idx + 0.85) / words.length;

              let isRevealed = scrollProgress >= endThreshold;
              let isTransitioning = scrollProgress > startThreshold && scrollProgress < endThreshold;

              let wordOpacity = 0.2;
              if (isRevealed) {
                wordOpacity = 1;
              } else if (isTransitioning) {
                wordOpacity = 0.2 + ((scrollProgress - startThreshold) / (endThreshold - startThreshold)) * 0.8;
              }

              const isFullyActive = wordOpacity > 0.85;

              return (
                <span
                  key={idx}
                  style={{ opacity: wordOpacity }}
                  className={`inline-block mx-1 sm:mx-2 transition-opacity duration-200 select-none ${
                    isFullyActive
                      ? 'text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.7)]'
                      : 'text-[#6e6e73]'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>

          {/* CALL TO ACTION BUTTON TO OPEN MENU */}
          <div 
            className="pt-2 flex items-center justify-center transition-all duration-500"
            style={{ 
              opacity: Math.min(Math.max((scrollProgress - 0.4) * 2.5, 0), 1),
              transform: `translateY(${Math.max((1 - scrollProgress) * 15, 0)}px)`
            }}
          >
            <a
              href="https://menu-pua.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-blue inline-flex items-center gap-2 !py-3 !px-7 text-xs sm:text-sm font-semibold rounded-full shadow-[0_4px_24px_rgba(0,113,227,0.5)] hover:scale-[1.04] transition-transform"
            >
              <span>Ver Menú Digital</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
