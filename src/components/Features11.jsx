import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Thermometer, Wine, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Features11 Component (React Bits Pro Specification)
 * Split headline with three indexed cards for PÚA Brasa y Vino
 */
export default function Features11() {
  const cards = [
    {
      index: '01',
      icon: Flame,
      iconColor: 'text-[#ff3037]',
      metric: '600°C',
      title: 'Fuego Directo de Encino',
      desc: 'Sellado en parrilla a temperatura extrema que sella los jugos naturales y genera la costra caramelizada perfecta en cada corte Angus Prime.'
    },
    {
      index: '02',
      icon: Thermometer,
      iconColor: 'text-[#00d959]',
      metric: '45 DÍAS',
      title: 'Cámara de Maduración en Seco',
      desc: 'Ambiente estrictamente controlado a 85% de humedad relativa y flujo de aire constante para maximizar la concentración de sabor y ternura.'
    },
    {
      index: '03',
      icon: Wine,
      iconColor: 'text-[#0071e3]',
      metric: '500+',
      title: 'Cava VIP & Sommelier',
      desc: 'Curaduría internacional con cosechas de Valle de Guadalupe, Rioja, Burdeos, Napa Valley y Champagne listos para maridar cada tiempo.'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 my-28 z-10 relative text-left">
      
      {/* SPLIT HEADLINE (DIRECTLY ON FULL SCREEN CANVAS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-12 border-b border-white/10">
        
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ff3037]/10 border border-[#ff3037]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#ff3037] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTÁNDARES DE CALIDAD PÚA</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#f5f5f7] font-sf-pro-display leading-[1.12]">
            MÁXIMA PRECISIÓN EN CADA CORTE Y ETIQUETA.
          </h2>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <p className="text-body-apple text-[#86868b] text-base leading-relaxed">
            Evaluamos cada parámetro de maduración en seco y control de temperatura en la brasa para garantizar consistencia, ternura extrema y el sello ahumado característico de PÚA.
          </p>
          <Link to="/nosotros" className="inline-flex items-center gap-2 text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors group pt-2">
            <span>Conoce nuestra filosofía del fuego</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* THREE INDEXED COLUMNS (DIRECTLY ON FULL SCREEN CANVAS - NO CARD BOXES) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.index}
              className="space-y-6 group cursor-default"
            >
              {/* TOP INDEX & ICON ROW */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold tracking-widest text-[#ff3037]">
                  [{card.index}]
                </span>
                <div className={`p-2 rounded-xl bg-transparent ${card.iconColor}`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              {/* METRIC DISPLAY & TITLE */}
              <div className="space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white block font-sf-pro-display group-hover:text-[#0071e3] transition-colors">
                  {card.metric}
                </span>
                <h3 className="text-xl font-semibold text-[#f5f5f7] font-sf-pro-display">
                  {card.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
