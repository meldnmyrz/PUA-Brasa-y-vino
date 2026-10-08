import React, { useState } from 'react';
import { Sparkles, Wine, Users, Calendar, Award, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function ServicesPage({ setActivePage }) {
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
    <div className="pt-28 pb-24 min-h-screen text-amber-50 relative">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold block">
          Eventos & Experiencias Exclusivas
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-white">
          SERVICIOS <span className="text-gold-gradient">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-zinc-300 font-light leading-relaxed">
          Transformamos tus celebraciones corporativas y privadas en experiencias gastronómicas memorables.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto pt-2" />
      </div>

      {/* SERVICES LIST SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {servicesList.map((service, idx) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-luxury p-8 sm:p-12 rounded-3xl gold-border-glow ${
              idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Experiencia VIP
              </div>
              
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
                {service.title}
              </h2>
              <p className="text-xs text-amber-300/80 uppercase tracking-widest font-medium">
                {service.subtitle}
              </p>
              
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-xs text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-luxury p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative">
          <div className="text-center space-y-3 mb-8">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              Solicitar Cotización de Evento
            </h2>
            <p className="text-xs text-zinc-300 font-light">
              Completa el formulario y te enviaremos una propuesta personalizada vía WhatsApp en cuestión de minutos.
            </p>
          </div>

          <form onSubmit={handleQuoteWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  Tipo de Evento
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="corporativo">Evento Corporativo / Cena de Negocios</option>
                  <option value="cumpleanios">Cumpleaños o Celebración Social</option>
                  <option value="aniversario">Aniversario / Cena Romántica VIP</option>
                  <option value="cata-vino">Cata de Vinos & Maridaje</option>
                  <option value="catering">Servicio de Catering a Domicilio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                  Número Estimado de Invitados
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="2-6 personas">2 a 6 personas</option>
                  <option value="7-15 personas">7 a 15 personas</option>
                  <option value="16-30 personas">16 a 30 personas</option>
                  <option value="30+ personas">Más de 30 personas (Cierre de Área)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                Fecha Tentativa
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                Detalles o Peticiones Especiales
              </label>
              <textarea
                rows={3}
                placeholder="Indica cualquier preferencia alimenticia, presupuesto o requerimiento de espacio..."
                value={eventNotes}
                onChange={(e) => setEventNotes(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-200 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 text-black" />
              Enviar Cotización a WhatsApp
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
