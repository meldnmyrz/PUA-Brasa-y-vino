import React, { useState, useEffect } from 'react';
import { MapPin, Clock, MessageSquare, Send, ArrowUpRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

export default function ContactPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Contacto & Google Maps";
  }, []);

  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSendWhatsAppContact = (e) => {
    e.preventDefault();
    const text = `*MENSAJE DESDE EL SITIO WEB DE PÚA BRASA Y VINO*\n\n` +
                 `• *Nombre:* ${contactName || 'Cliente PÚA'}\n` +
                 `• *Mensaje:* ${contactMessage}\n\n` +
                 `Quedo en espera de su amable respuesta.`;

    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const faqList = [
    {
      q: '¿Cuentan con servicio de Valet Parking?',
      a: 'Sí, disponemos de servicio seguro de Valet Parking en la entrada principal durante todos nuestros horarios de operación.'
    },
    {
      q: '¿Es obligatorio reservar antes de asistir?',
      a: 'Aunque aceptamos comensales sin reserva previa según disponibilidad del salón, recomendamos ampliamente reservar con anticipación especialmente para fines de semana.'
    },
    {
      q: '¿Puedo llevar mis propios vinos (descorche)?',
      a: 'Ofrecemos servicio de descorche para botellas especiales. Por favor consulta la tarifa de descorche directamente con nuestro equipo.'
    },
    {
      q: '¿Disponen de opciones vegetarianas o para niños?',
      a: 'Contamos con un delicioso Menú Infantil artesanal y ensaladas, entradas y pastas especiales a la brasa preparadas por nuestro chef.'
    }
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* HEADER BLOCK — DALA MONOLITHIC DISPLAY */}
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4 mb-20 relative z-10">
        <div className="iris-tag-pill mx-auto">ESTAMOS A TU SERVICIO</div>
        <h1 className="font-display-dala text-5xl sm:text-7xl md:text-8xl text-[#ffffff] uppercase tracking-tight">
          CONTACTO <span className="text-[#8052ff]">PÚA</span>
        </h1>
        <p className="font-body-ultralight max-w-2xl mx-auto text-[#bdbdbd]">
          Encuéntranos en Google Maps, comunícate directamente por WhatsApp o visítanos en nuestro salón de brasas y cava VIP.
        </p>
      </div>

      {/* CONTACT INFO & GOOGLE MAPS SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative z-10">
        
        {/* GOOGLE MAPS CARD LINK */}
        <div className="card-standard p-8 rounded-[24px] border border-[#3D352E] flex flex-col justify-between hover:border-[#8052ff] transition-all duration-300 shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[16px] bg-[#8052ff]/20 flex items-center justify-center text-[#8052ff]">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-condensed-bold text-xl text-white">
              Ficha en Google Maps
            </h2>
            <p className="font-body-ultralight text-xs text-[#9a9a9a]">
              Obtén la ruta más rápida con GPS, indicaciones de cómo llegar y reseñas oficiales en nuestra ficha de Google Maps.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-iris-pill w-full text-xs py-3.5"
            >
              Abrir Google Maps
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* WHATSAPP DIRECT CARD */}
        <div className="card-standard p-8 rounded-[24px] border border-[#3D352E] flex flex-col justify-between hover:border-[#8052ff] transition-all duration-300 shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[16px] bg-[#15846e]/20 flex items-center justify-center text-[#ffb829]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-condensed-bold text-xl text-white">
              Atención WhatsApp Directa
            </h2>
            <p className="font-body-ultralight text-xs text-[#9a9a9a]">
              Respuestas inmediatas a dudas sobre disponibilidad, menús especiales, reservas grupales o solicitudes del chef.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame-pill w-full text-xs py-3.5"
            >
              Chatear por WhatsApp
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* OPERATING HOURS */}
        <div className="card-standard p-8 rounded-[24px] border border-[#3D352E] flex flex-col justify-between shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[16px] bg-[#8052ff]/20 flex items-center justify-center text-[#8052ff]">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-condensed-bold text-xl text-white">
              Horarios de Operación
            </h2>
            <div className="space-y-2 pt-2">
              {restaurantInfo.hours.map((h, idx) => (
                <div key={idx} className="border-b border-[#2D2722] pb-2 flex justify-between items-center text-xs">
                  <span className="font-body-ultralight text-[#bdbdbd]">{h.days}</span>
                  <span className="font-mono-tag text-[#ffb829] font-bold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 font-body-ultralight text-[11px] text-[#9a9a9a] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8052ff]" />
            <span>Valet Parking disponible en la entrada.</span>
          </div>
        </div>

      </div>

      {/* QUICK MESSAGE FORM & FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* MESSAGE FORM */}
        <div className="card-standard p-8 sm:p-12 rounded-[24px] border border-[#3D352E]">
          <h2 className="font-display-dala text-2xl sm:text-3xl text-white mb-6">
            ENVÍANOS UN MENSAJE
          </h2>
          <form onSubmit={handleSendWhatsAppContact} className="space-y-5">
            <div>
              <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Sofía Mendoza"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-4 rounded-[24px] bg-[#090a0f] border border-[#2D2722] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
              />
            </div>
            <div>
              <label className="block font-mono-tag text-xs uppercase tracking-wider text-[#ffb829] mb-2">
                Mensaje o Consulta
              </label>
              <textarea
                rows={4}
                required
                placeholder="Escribe tu duda, felicitación o solicitud especial..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full px-4 py-4 rounded-[24px] bg-[#090a0f] border border-[#2D2722] text-[#ffffff] text-xs focus:outline-none focus:border-[#8052ff]"
              />
            </div>
            <button
              type="submit"
              className="btn-iris-pill w-full py-4 text-xs"
            >
              <Send className="w-4 h-4 text-white" />
              Enviar Mensaje vía WhatsApp
            </button>
          </form>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-6">
          <h2 className="font-display-dala text-2xl sm:text-3xl text-white flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#8052ff]" />
            PREGUNTAS FRECUENTES
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="card-standard p-6 rounded-[24px] border border-[#3D352E] space-y-2">
                <h3 className="font-condensed-bold text-sm text-[#ffb829]">
                  {faq.q}
                </h3>
                <p className="font-body-ultralight text-xs text-[#bdbdbd]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
