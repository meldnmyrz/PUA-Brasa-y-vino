import React, { useState, useEffect } from 'react';
import { MapPin, Clock, MessageSquare, Send, ArrowUpRight, HelpCircle, ShieldCheck, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

export default function ContactPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Contacto & Ubicación Google Maps";
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
      a: 'Aunque aceptamos comensales según disponibilidad del salón, recomendamos ampliamente reservar con anticipación para fines de semana.'
    },
    {
      q: '¿Puedo llevar mis propios vinos (descorche)?',
      a: 'Ofrecemos servicio de descorche para botellas especiales de colección. Consulta la tarifa directamente con nuestro Sommelier.'
    },
    {
      q: '¿Disponen de opciones vegetarianas o menú infantil?',
      a: 'Contamos con opciones vegetarianas a las brasas y un menú especial para los más pequeños.'
    }
  ];

  return (
    <div className="pt-24 pb-28 min-h-screen text-[#f5f5f7] bg-[#000000] relative overflow-hidden font-sf-pro-text text-left">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* 01 HERO PRODUCT STAGE */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 relative z-10">
        <div className="space-y-4 mb-12">
          <span className="badge-availability">
            SECCIÓN 05 // UBICACIÓN & ATENCIÓN
          </span>
          <h1 className="text-hero-display text-[#f5f5f7]">
            CONTACTO & <br />
            <span className="text-[#86868b]">UBICACIÓN POLANCO.</span>
          </h1>
          <p className="text-body-apple max-w-2xl text-[#86868b]">
            Encuéntranos en Google Maps, comunícate directamente por WhatsApp o visítanos en nuestro salón de brasas y cava VIP.
          </p>
        </div>
      </section>

      {/* 02 CONTACT INFO & GOOGLE MAPS CARDS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative z-10">
        
        {/* GOOGLE MAPS CARD */}
        <div className="module-charcoal-stage p-8 border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[980px] bg-[#333336] flex items-center justify-center text-[#0071e3]">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-card-heading text-white">
              Google Maps
            </h2>
            <p className="text-body-apple text-xs text-[#86868b]">
              Obtén la ruta GPS más rápida y consulta indicaciones oficiales en Google Maps.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white-outline w-full text-xs"
            >
              <span>Abrir Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* WHATSAPP DIRECT CARD */}
        <div className="module-charcoal-stage p-8 border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[980px] bg-[#333336] flex items-center justify-center text-[#00d959]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-card-heading text-white">
              WhatsApp Directo
            </h2>
            <p className="text-body-apple text-xs text-[#86868b]">
              Atención inmediata sobre disponibilidad, eventos especiales y reservaciones de grupo.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-blue w-full text-xs font-semibold"
            >
              <span>Chatear por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* OPERATING HOURS */}
        <div className="module-charcoal-stage p-8 border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-[980px] bg-[#333336] flex items-center justify-center text-[#ff791b]">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-card-heading text-white">
              Horarios
            </h2>
            <div className="space-y-2 pt-2">
              {restaurantInfo.hours.map((h, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2 flex justify-between items-center text-xs">
                  <span className="text-[#86868b]">{h.days}</span>
                  <span className="font-mono text-[#f5f5f7] font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 text-[11px] text-[#86868b] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00d959]" />
            <span>Valet Parking disponible en la entrada principal.</span>
          </div>
        </div>

      </section>

      {/* 03 MESSAGE FORM & FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* MESSAGE FORM (Pill Select Input styling) */}
        <div className="module-charcoal-stage p-8 sm:p-12 border border-white/10">
          <h2 className="text-card-heading text-white mb-6">
            ENVÍANOS UN MENSAJE
          </h2>
          <form onSubmit={handleSendWhatsAppContact} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#86868b] font-semibold mb-2">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Sofía Mendoza"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="pill-select-input w-full bg-[#000000]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#86868b] font-semibold mb-2">
                Mensaje o Consulta
              </label>
              <textarea
                rows={4}
                required
                placeholder="Escribe tu consulta o requerimiento..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="pill-select-input w-full bg-[#000000] !rounded-[20px] !py-3.5"
              />
            </div>
            <button
              type="submit"
              className="btn-apple-blue w-full py-4 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensaje vía WhatsApp</span>
            </button>
          </form>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-6">
          <h2 className="text-card-heading text-white flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#0071e3]" />
            PREGUNTAS FRECUENTES
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="module-charcoal-stage p-6 border border-white/10 space-y-2">
                <h3 className="text-sm font-semibold text-[#f5f5f7]">
                  {faq.q}
                </h3>
                <p className="text-body-apple text-xs text-[#86868b]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
