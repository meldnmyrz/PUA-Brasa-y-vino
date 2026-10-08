import React, { useState, useEffect } from 'react';
import { Sparkles, Check, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function ServicesPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Servicios & Eventos Privados";
  }, []);

  const [eventType, setEventType] = useState('corporativo');
  const [guestsCount, setGuestsCount] = useState('15-30');
  const [eventDate, setEventDate] = useState('');
  const [eventNotes, setEventNotes] = useState('');

  const handleQuoteWhatsApp = (e) => {
    e.preventDefault();
    const message = `*SOLICITUD DE COTIZACIÓN DE EVENTO EN PÚA BRASA Y VINO*\n\n` +
                    `• *Tipo de Evento:* ${eventType.toUpperCase()}\n` +
                    `• *Número estimado de Invitados:* ${guestsCount}\n` +
                    `• *Fecha tentativa:* ${eventDate || 'Por definir'}\n` +
                    `• *Detalles adicionales:* ${eventNotes || 'Sin notas suplementarias'}\n\n` +
                    `Por favor contáctenme para propuestas de menú y cotización de espacios.`;

    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const servicesList = [
    {
      id: 'corporativo',
      title: 'Eventos Corporativos & Cenas de Negocios',
      subtitle: 'Espacios discretos con servicio de sommelier y cortes prime',
      description: 'Ideal para cierres de negocios, cenas ejecutivas y lanzamientos de marca. Ofrecemos área reservada en nuestra Cava VIP con menú maridaje pre-diseñado a tres o cinco tiempos.',
      image: '/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM (2).jpeg',
      features: ['Cava Privada con capacidad hasta 25 personas', 'Menús ejecutivos maridados', 'Servicio dedicado de meseros y sommelier', 'Pantalla y audio discreto disponible']
    },
    {
      id: 'social',
      title: 'Celebraciones Sociales & Aniversarios',
      subtitle: 'Momentos inolvidables envueltos en fuego y elegancia',
      description: 'Celebra tu cumpleaños, aniversario o graduación con el ambiente cálido de nuestras brasas. Diseñamos experiencias de coctelería personalizada y pastelería fina de autor.',
      image: '/assets/WhatsApp Image 2026-10-08 at 3.07.42 PM (1).jpeg',
      features: ['Reservación de Terraza o Salón Principal', 'Decoración y montaje de mesa especial', 'Coctel de bienvenida de autor', 'Postre especial personalizado']
    },
    {
      id: 'catas',
      title: 'Catas Maridaje & Experiencias de Cava',
      subtitle: 'Guiadas por nuestro Sommelier certificado',
      description: 'Un recorrido sensorial guiado a través de nuestra selección de vinos de Casa Madero, champagnes y etiquetas de autor, acompañados de tabla de quesos finos y charcutería ahumada.',
      image: '/assets/WhatsApp Image 2026-10-08 at 3.07.43 PM (2).jpeg',
      features: ['Selección de 4 a 6 etiquetas por cata', 'Tabla de charcutería y bocadillos a la brasa', 'Explicación sensorial por el Sommelier', 'Diploma o souvenir para los asistentes']
    },
    {
      id: 'catering',
      title: 'Servicio de Parrilla & Catering a Domicilio',
      subtitle: 'Llevamos la experiencia PÚA a tu residencia u oficina',
      description: 'Nuestro equipo de parrilleros y meseros se desplaza hasta tu evento privado con nuestros asadores móviles para cocinar cortes prime y tacos de autor en vivo.',
      image: '/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM.jpeg',
      features: ['Chef parrillero y personal en sitio', 'Montaje de estación de brasas y mixología', 'Insumos y cristalería de lujo incluidos', 'Menú totalmente personalizable']
    }
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-20">
        <div className="eyebrow-tag justify-center">EXPERIENCIAS EXCLUSIVAS</div>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-light tracking-widest text-[#F4F0EA]">
          SERVICIOS <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Eventos Privados & Catering
        </span>
        <div className="w-16 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      {/* SERVICES LIST SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-28">
        {servicesList.map((service, idx) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center card-editorial p-8 sm:p-12 border border-[#2D2722] ${
              idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="eyebrow-tag">0{idx + 1} // EXPERIENCIA VIP</div>
              
              <h2 className="font-serif-corp text-2xl sm:text-3xl font-light tracking-wider text-[#F4F0EA] leading-tight">
                {service.title}
              </h2>
              <p className="text-xs text-[#C4924A] uppercase tracking-[0.2em] font-medium font-sans">
                {service.subtitle}
              </p>
              
              <p className="text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-xs text-[#F4F0EA]/90 font-light">
                    <Check className="w-4 h-4 text-[#C4924A]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative overflow-hidden border border-[#2D2722] shadow-2xl h-80 lg:h-96 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* EVENT QUOTE FORM */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="card-editorial p-8 sm:p-14 border border-[#2D2722] shadow-2xl relative">
          <div className="text-center space-y-2 mb-10">
            <span className="font-script-lujo text-3xl text-[#C4924A] block">
              Atención Personalizada
            </span>
            <h2 className="font-serif-corp text-2xl sm:text-3xl font-light tracking-widest text-[#F4F0EA]">
              SOLICITAR COTIZACIÓN DE EVENTO
            </h2>
            <p className="text-xs text-[#F4F0EA]/60 font-light">
              Completa el formulario y te enviaremos una propuesta personalizada vía WhatsApp.
            </p>
          </div>

          <form onSubmit={handleQuoteWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#C4924A] font-medium mb-2">
                  Tipo de Evento
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#000000] border border-[#2D2722] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                >
                  <option value="corporativo">Evento Corporativo / Cena de Negocios</option>
                  <option value="cumpleanios">Cumpleaños o Celebración Social</option>
                  <option value="aniversario">Aniversario / Cena Romántica VIP</option>
                  <option value="cata-vino">Cata de Vinos & Maridaje</option>
                  <option value="catering">Servicio de Catering a Domicilio</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#C4924A] font-medium mb-2">
                  Número Estimado de Invitados
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#000000] border border-[#2D2722] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                >
                  <option value="2-6 personas">2 a 6 personas</option>
                  <option value="7-15 personas">7 a 15 personas</option>
                  <option value="16-30 personas">16 a 30 personas</option>
                  <option value="30+ personas">Más de 30 personas (Cierre de Área)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-[#C4924A] font-medium mb-2">
                Fecha Tentativa
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#000000] border border-[#2D2722] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-[#C4924A] font-medium mb-2">
                Detalles o Peticiones Especiales
              </label>
              <textarea
                rows={3}
                placeholder="Indica cualquier preferencia alimenticia, presupuesto o requerimiento de espacio..."
                value={eventNotes}
                onChange={(e) => setEventNotes(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#000000] border border-[#2D2722] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
              />
            </div>

            <button type="submit" className="btn-luxury-gold w-full py-4 text-xs">
              <MessageSquare className="w-4 h-4 text-black" />
              Enviar Cotización a WhatsApp
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
