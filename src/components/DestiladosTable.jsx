import React, { useState } from 'react';
import { Wine, GlassWater, Sparkles, Plus } from 'lucide-react';

export default function DestiladosTable({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('tequila');

  const tabs = [
    { id: 'tequila', label: 'Tequila' },
    { id: 'mezcal', label: 'Mezcal' },
    { id: 'whisky', label: 'Whisky & Bourbon' },
    { id: 'ginebra', label: 'Ginebra & Ron' },
    { id: 'vinos', label: 'Cava de Vinos' }
  ];

  const destiladosData = {
    tequila: [
      { id: 't-1', name: 'Don Julio 70 Añejo Cristalino', origin: 'Jalisco, México · Cítrico y vainilla', copa: 280, botella: 3200 },
      { id: 't-2', name: 'Clase Azul Reposado', origin: 'Jalisco, México · Notas de avellana y toffee', copa: 550, botella: 7500 },
      { id: 't-3', name: 'Casa Dragones Blanco', origin: 'San Miguel de Allende · Notas florales y agaves agrios', copa: 340, botella: 4100 },
      { id: 't-4', name: 'Herradura Ultra', origin: 'Amatitán, Jalisco · Filtrado suave de agave horneado', copa: 240, botella: 2700 }
    ],
    mezcal: [
      { id: 'm-1', name: '400 Conejos Espadín', origin: 'Oaxaca, México · Humo suave y notas de hierbas', copa: 210, botella: 2300 },
      { id: 'm-2', name: 'Montelobos Ensamble', origin: 'Santiago Matatlán · Agave maguey papalote ahumado', copa: 260, botella: 2900 },
      { id: 'm-3', name: 'Ojo de Tigre Tobalá', origin: 'Oaxaca / Puebla · Perfumado con cítricos silvestres', copa: 230, botella: 2500 },
      { id: 'm-4', name: 'Amores Logia Tobalá', origin: 'Oaxaca · Cosecha silvestre de alta complejidad', copa: 380, botella: 4500 }
    ],
    whisky: [
      { id: 'w-1', name: 'Macallan 12 Years Double Cask', origin: 'Escocia · Roble americano y jerez', copa: 360, botella: 4200 },
      { id: 'w-2', name: 'Woodford Reserve Bourbon', origin: 'Kentucky, USA · Maíz dulce, canela y madera', copa: 290, botella: 3300 },
      { id: 'w-3', name: 'Glenfiddich 15 Years Single Malt', origin: 'Speyside, Escocia · Miel silvestre y frutos secos', copa: 420, botella: 4900 },
      { id: 'w-4', name: 'Hibiki Japanese Harmony', origin: 'Japón · Mezcla sutil de maltas y flores', copa: 680, botella: 8500 }
    ],
    ginebra: [
      { id: 'g-1', name: "Hendrick's Gin", origin: 'Escocia · Infusión de pepino y pétalos de rosa', copa: 260, botella: 2900 },
      { id: 'g-2', name: 'Monkey 47 Schwarzwald', origin: 'Selva Negra, Alemania · 47 botánicos complejos', copa: 420, botella: 4800 },
      { id: 'g-3', name: 'Zacapa 23 Solera Gran Reserva', origin: 'Guatemala · Ron de miel virgen de caña', copa: 320, botella: 3800 },
      { id: 'g-4', name: 'Flor de Caña 18 Años', origin: 'Nicaragua · Seco con cuerpo rico de roble', copa: 270, botella: 3100 }
    ],
    vinos: [
      { id: 'v-1', name: 'Casa Madero 3V Cabernet / Merlot / Tempranillo', origin: 'Parras, Coahuila · Crianza en roble', copa: 260, botella: 1250 },
      { id: 'v-2', name: 'Casa Madero 2V Chardonnay / Chenin Blanc', origin: 'Parras, Coahuila · Notas clementinas', copa: 240, botella: 1150 },
      { id: 'v-3', name: 'Vega Sicilia Valbuena 5°', origin: 'Ribera del Duero, España · Tinto de leyenda', copa: 1400, botella: 12500 },
      { id: 'v-4', name: 'Moët & Chandon Brut Impérial', origin: 'Champagne, Francia · Burbuja fina elegante', copa: 580, botella: 4200 }
    ]
  };

  const currentList = destiladosData[activeTab] || [];

  const handleAddOption = (item, type) => {
    const isCopa = type === 'copa';
    const orderItem = {
      id: `${item.id}-${type}`,
      name: `${item.name} (${isCopa ? 'Copa 1.5oz' : 'Botella 750ml'})`,
      price: isCopa ? item.copa : item.botella,
      category: 'destilados',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
      description: item.origin,
      quantity: 1
    };
    if (onAddToCart) {
      onAddToCart(orderItem);
    }
  };

  return (
    <div className="space-y-6 text-left my-8 font-subtext-stellar">
      
      {/* TABS SELECTOR */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#2c2c2e]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#C4924A] via-[#E5C388] to-[#A67531] text-black border border-[#C4924A] shadow-[0_0_15px_rgba(196,146,74,0.4)]'
                : 'bg-[#171718] text-[#888888] border border-[#2c2c2e] hover:text-white hover:border-[#C4924A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* RESPONSIVE TABLE */}
      <div className="overflow-x-auto rounded-[10px] border border-[#2c2c2e] bg-[#0d0e12]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#2c2c2e] bg-[#171718] text-[11px] font-mono uppercase tracking-wider text-[#C4924A]">
              <th className="p-4">Etiqueta / Destilado</th>
              <th className="p-4 hidden sm:table-cell">Origen & Notas</th>
              <th className="p-4 text-right">Precio Copa</th>
              <th className="p-4 text-right">Precio Botella</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2c2c2e] text-xs">
            {currentList.map((item) => (
              <tr key={item.id} className="hover:bg-[#171718]/80 transition-colors">
                
                <td className="p-4">
                  <div className="font-semibold text-white text-sm">{item.name}</div>
                  <div className="text-[11px] text-[#888888] sm:hidden mt-0.5">{item.origin}</div>
                </td>

                <td className="p-4 text-[#888888] hidden sm:table-cell font-light">
                  {item.origin}
                </td>

                <td className="p-4 text-right whitespace-nowrap">
                  <button
                    onClick={() => handleAddOption(item, 'copa')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171718] border border-[#2c2c2e] hover:border-[#C4924A] text-[#C4924A] font-mono font-bold transition-all text-xs"
                  >
                    <span>${item.copa.toLocaleString()}</span>
                    <Plus className="w-3 h-3 text-white" />
                  </button>
                </td>

                <td className="p-4 text-right whitespace-nowrap">
                  <button
                    onClick={() => handleAddOption(item, 'botella')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C4924A]/20 border border-[#C4924A]/60 hover:bg-[#C4924A] hover:text-black text-white font-mono font-bold transition-all text-xs"
                  >
                    <span>${item.botella.toLocaleString()}</span>
                    <Plus className="w-3 h-3 text-white" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
