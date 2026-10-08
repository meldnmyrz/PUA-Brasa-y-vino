import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, ArrowUpRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function ContactPage({ setActivePage }) {
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
    <div className="pt-28 pb-24 min-h-screen text-amber-50 relative">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold block">
          Estamos a tu Servicio
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-white">
          CONTACTO <span className="text-gold-gradient">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-zinc-300 font-light leading-relaxed">
          Encuéntranos en Google Maps, comunícate directamente por WhatsApp o visítanos en nuestro salón de brasas y cava.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto pt-2" />
      </div>

      {/* CONTACT INFO & GOOGLE MAPS SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        
        {/* GOOGLE MAPS CARD LINK */}
        <div className="glass-luxury p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between hover:border-amber-400 transition-all duration-300 shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-300">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-serif-luxury text-xl font-bold text-white">
              Ficha en Google Maps
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Obtén la ruta más rápida con GPS, indicaciones de cómo llegar y reseñas oficiales en nuestra ficha de Google Maps.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={restaurantInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-200 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
            >
              Abrir Google Maps
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* WHATSAPP DIRECT CARD */}
        <div className="glass-luxury p-8 rounded-3xl border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-serif-luxury text-xl font-bold text-white">
              Atención WhatsApp Directa
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Respuestas inmediatas a dudas sobre disponibilidad, menús especiales, reservas grupales o solicitudes del chef.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
            >
              Chatear por WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* OPERATING HOURS */}
        <div className="glass-luxury p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between shadow-2xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-300">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-serif-luxury text-xl font-bold text-white">
              Horarios de Operación
            </h2>
            <div className="space-y-2 pt-2">
              {restaurantInfo.hours.map((h, idx) => (
                <div key={idx} className="border-b border-zinc-800 pb-2 flex justify-between items-center text-xs">
                  <span className="text-zinc-300 font-medium">{h.days}</span>
                  <span className="text-amber-300 font-bold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 text-[11px] text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Valet Parking disponible en la entrada.</span>
          </div>
        </div>

      </div>

      {/* QUICK MESSAGE FORM & FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* MESSAGE FORM */}
        <div className="glass-luxury p-8 sm:p-12 rounded-3xl border border-amber-500/30">
          <h2 className="font-serif-luxury text-2xl font-bold text-white mb-6">
            Envíanos un Mensaje
          </h2>
          <form onSubmit={handleSendWhatsAppContact} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Sofía Mendoza"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-amber-300 font-semibold mb-2">
                Mensaje o Consulta
              </label>
              <textarea
                rows={4}
                required
                placeholder="Escribe tu duda, felicitación o solicitud especial..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-black" />
              Enviar Mensaje vía WhatsApp
            </button>
          </form>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-6">
          <h2 className="font-serif-luxury text-2xl font-bold text-white flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="glass-luxury p-6 rounded-2xl border border-amber-500/20 space-y-2">
                <h3 className="font-serif-luxury text-sm font-bold text-amber-300">
                  {faq.q}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
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
