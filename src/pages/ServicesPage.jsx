import React, { useState, useEffect } from 'react';
import { Sparkles, Check, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

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
      image: '/assets/cava-vino-mesa.jpg',
      features: ['Cava Privada con capacidad hasta 25 personas', 'Menús ejecutivos maridados', 'Servicio dedicado de meseros y sommelier', 'Pantalla y audio discreto disponible']
    },
    {
      id: 'social',
      title: 'Celebraciones Sociales & Aniversarios',
      subtitle: 'Momentos inolvidables envueltos en fuego y elegancia',
      description: 'Celebra tu cumpleaños, aniversario o graduación con el ambiente cálido de nuestras brasas. Diseñamos experiencias de coctelería personalizada y pastelería fina de autor.',
      image: '/assets/coctel-negroni-rojo.jpg',
      features: ['Reservación de Terraza o Salón Principal', 'Decoración y montaje de mesa especial', 'Coctel de bienvenida de autor', 'Postre especial personalizado']
    },
    {
      id: 'catas',
      title: 'Catas Maridaje & Experiencias de Cava',
      subtitle: 'Guiadas por nuestro Sommelier certificado',
      description: 'Un recorrido sensorial guiado a través de nuestra selección de vinos de Casa Madero, champagnes y etiquetas de autor, acompañados de tabla de quesos finos y charcutería ahumada.',
      image: '/assets/copa-vino-tinto-lampara.jpg',
      features: ['Selección de 4 a 6 etiquetas por cata', 'Tabla de charcutería y bocadillos a la brasa', 'Explicación sensorial por el Sommelier', 'Diploma o souvenir para los asistentes']
    },
    {
      id: 'catering',
      title: 'Servicio de Parrilla & Catering a Domicilio',
      subtitle: 'Llevamos la experiencia PÚA a tu residencia u oficina',
      description: 'Nuestro equipo de parrilleros y meseros se desplaza hasta tu evento privado con nuestros asadores móviles para cocinar cortes prime y tacos de autor en vivo.',
      image: '/assets/parrillada-brasas.jpg',
      features: ['Chef parrillero y personal en sitio', 'Montaje de estación de brasas y mixología', 'Insumos y cristalería de lujo incluidos', 'Menú totalmente personalizable']
    }
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* HEADER BLOCK — DALA MONOLITHIC DISPLAY */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4 mb-20 relative z-10">
        <div className="iris-tag-pill mx-auto">EXPERIENCIAS EXCLUSIVAS VIP</div>
        <h1 className="font-display-dala text-5xl sm:text-7xl md:text-8xl text-[#ffffff] uppercase tracking-tight">
          SERVICIOS <span className="text-[#8052ff]">PÚA</span>
        </h1>
        <p className="font-body-ultralight max-w-2xl mx-auto text-[#bdbdbd]">
          Organización integral para banquetes corporativos, catas privadas de cava y servicios de parrilla gourmet a domicilio.
        </p>
      </div>

      {/* SERVICES LIST SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-28 relative z-10">
        {servicesList.map((service, idx) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center card-standard p-8 sm:p-12 border border-[#3D352E] rounded-[24px] ${
              idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="saffron-tag-pill">0{idx + 1} // EXPERIENCIA EXCLUSIVA</div>
              
              <h2 className="font-display-dala text-3xl sm:text-5xl text-[#ffffff] leading-tight">
                {service.title}
              </h2>
              <p className="font-mono-tag text-xs text-[#ffb829] uppercase tracking-wider">
                {service.subtitle}
              </p>
              
              <p className="font-body-ultralight text-sm text-[#bdbdbd]">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 font-body-ultralight text-xs text-[#ffffff]">
                    <Check className="w-4 h-4 text-[#8052ff]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative overflow-hidden border border-[#3D352E] rounded-[24px] shadow-2xl h-80 lg:h-96 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
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
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="card-standard p-8 sm:p-14 border border-[#3D352E] rounded-[24px] relative">
          <div className="text-center space-y-3 mb-10">
            <span className="iris-tag-pill mx-auto">
              ATENCIÓN PERSONALIZADA VIP
            </span>
            <h2 className="font-display-dala text-3xl sm:text-5xl text-[#ffffff] tracking-tight">
              SOLICITAR COTIZACIÓN DE EVENTO
            </h2>
            <p className="font-body-ultralight text-xs text-[#bdbdbd]">
              Completa el formulario y te enviaremos una propuesta personalizada vía WhatsApp.
            </p>
          </div>

          <form onSubmit={handleQuoteWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                  Tipo de Evento
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-4 bg-[#090a0f] border border-[#3D352E] rounded-[24px] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
                >
                  <option value="corporativo">Evento Corporativo / Cena de Negocios</option>
                  <option value="cumpleanios">Cumpleaños o Celebración Social</option>
                  <option value="aniversario">Aniversario / Cena Romántica VIP</option>
                  <option value="cata-vino">Cata de Vinos & Maridaje</option>
                  <option value="catering">Servicio de Catering a Domicilio</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                  Número Estimado de Invitados
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-4 py-4 bg-[#090a0f] border border-[#3D352E] rounded-[24px] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
                >
                  <option value="2-6 personas">2 a 6 personas</option>
                  <option value="7-15 personas">7 a 15 personas</option>
                  <option value="16-30 personas">16 a 30 personas</option>
                  <option value="30+ personas">Más de 30 personas (Cierre de Área)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                Fecha Tentativa
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-4 bg-[#090a0f] border border-[#3D352E] rounded-[24px] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
              />
            </div>

            <div>
              <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                Detalles o Peticiones Especiales
              </label>
              <textarea
                rows={3}
                placeholder="Indica cualquier preferencia alimenticia, presupuesto o requerimiento de espacio..."
                value={eventNotes}
                onChange={(e) => setEventNotes(e.target.value)}
                className="w-full px-4 py-4 bg-[#090a0f] border border-[#3D352E] rounded-[24px] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
              />
            </div>

            <button type="submit" className="btn-iris-pill w-full py-4 text-xs">
              <MessageSquare className="w-4 h-4 text-white" />
              Enviar Cotización a WhatsApp
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
