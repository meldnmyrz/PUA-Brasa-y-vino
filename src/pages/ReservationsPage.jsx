import React, { useState, useEffect } from 'react';
import { Flame, Wine, Sparkles, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';
import ParticleConstellation from '../components/ParticleConstellation';

export default function ReservationsPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Reservas de Mesa Prioritarias";
  }, []);

  const [selectedZone, setSelectedZone] = useState('salon');
  const [guestCount, setGuestCount] = useState(2);
  const [resDate, setResDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [resTime, setResTime] = useState('20:00');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [occasion, setOccasion] = useState('ninguna');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const zones = [
    {
      id: 'salon',
      name: 'Salón Principal de Brasas',
      desc: 'Ambiente cálido junto a la parrilla abierta.',
      icon: Flame
    },
    {
      id: 'terraza',
      name: 'Terraza al Aire Libre',
      desc: 'Espacio fresco rodeado de vegetación nocturna.',
      icon: Sparkles
    },
    {
      id: 'cava',
      name: 'Cava Privada VIP',
      desc: 'Exclusividad rodeada de nuestras mejores etiquetas.',
      icon: Wine
    }
  ];

  const timeSlots = [
    '13:30', '14:00', '14:30', '15:00', '15:30', '16:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const handleSubmitReservation = (e) => {
    e.preventDefault();

    const zoneObj = zones.find(z => z.id === selectedZone);
    const text = `*SOLICITUD DE RESERVA DE MESA - PÚA BRASA Y VINO*\n\n` +
                 `• *Nombre del Titular:* ${guestName}\n` +
                 `• *Teléfono:* ${guestPhone}\n` +
                 `• *Fecha:* ${resDate}\n` +
                 `• *Hora:* ${resTime} hrs\n` +
                 `• *Número de Comensales:* ${guestCount} personas\n` +
                 `• *Zona Elegida:* ${zoneObj ? zoneObj.name : selectedZone}\n` +
                 `• *Ocasión Especial:* ${occasion.toUpperCase()}\n` +
                 `• *Comentarios:* ${specialRequests || 'Sin notas especiales'}\n\n` +
                 `Solicito confirmación de disponibilidad para mi reserva. ¡Muchas gracias!`;

    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    
    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 pb-28 min-h-screen text-[#ffffff] bg-[#000000] relative overflow-hidden">
      
      {/* AMBIENT CONSTELLATION PARTICLES BACKGROUND */}
      <ParticleConstellation />

      {/* HEADER BLOCK — STELLAR DISPLAY HEADLINE */}
      <div className="max-w-[1200px] mx-auto px-4 text-center space-y-4 mb-16 animate-slideInDown relative z-10">
        <div className="eyebrow-tag-pill mx-auto">RESERVA PRIORITARIA VÍA WHATSAPP</div>
        <h1 className="font-display-stellar text-5xl sm:text-7xl md:text-8xl text-[#ffffff] uppercase tracking-tight">
          RESERVAS <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <p className="font-subtext-stellar max-w-xl mx-auto text-[#888888]">
          Garantiza tu experiencia en nuestro salón de brasas al carbón de encino o en la Cava Privada VIP.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 animate-fadeIn relative z-10">
        
        {isSubmitted ? (
          <div className="card-obsidian p-12 rounded-[10px] text-center space-y-6 border border-[#C4924A]/30 shadow-none">
            <div className="w-14 h-14 rounded-full bg-[#C4924A]/10 text-[#C4924A] border border-[#C4924A]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h2 className="font-display-stellar text-3xl sm:text-4xl text-white">
              ¡SOLICITUD ENVIADA A WHATSAPP!
            </h2>
            
            <p className="font-subtext-stellar text-sm text-[#888888] max-w-md mx-auto">
              Si tu aplicación de WhatsApp no se abrió automáticamente, presiona el botón inferior para confirmar tu mesa con nuestro hostess.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-ghost-border"
              >
                Modificar Reserva
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitReservation} className="card-obsidian p-8 sm:p-12 rounded-[10px] border border-[#2c2c2e] shadow-none space-y-10">
            
            {/* 1. SELECCIÓN DE ZONA */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#C4924A] mb-4 flex items-center gap-2">
                <span className="font-bold text-[#C4924A]">01 //</span>
                SELECCIONA LA ZONA DE TU PREFERENCIA
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {zones.map((zone) => {
                  const Icon = zone.icon;
                  const isSel = selectedZone === zone.id;
                  return (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedZone(zone.id)}
                      className={`p-5 rounded-[10px] border text-left transition-all duration-300 flex flex-col justify-between space-y-4 ${
                        isSel
                          ? 'bg-[#171718] border-[#C4924A]'
                          : 'bg-[#000000] border-[#2c2c2e] hover:border-[#C4924A]/50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSel ? 'text-[#C4924A]' : 'text-[#888888]'}`} />
                      <div>
                        <h3 className="font-sans font-medium text-sm text-[#ffffff]">
                          {zone.name}
                        </h3>
                        <p className="font-subtext-stellar text-[11px] text-[#888888] mt-1">
                          {zone.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. DATOS DE FECHA, HORA Y PERSONAS */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#C4924A] mb-4 flex items-center gap-2">
                <span className="font-bold text-[#C4924A]">02 //</span>
                DETALLES DE TU VISITA
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                    Nº de Comensales
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Persona' : 'Personas'}
                      </option>
                    ))}
                    <option value={13}>Más de 12 personas</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                    Fecha
                  </label>
                  <input
                    type="date"
                    required
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                    Horario Deseado
                  </label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} hrs
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. DATOS DE TITULAR */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#C4924A] mb-4 flex items-center gap-2">
                <span className="font-bold text-[#C4924A]">03 //</span>
                DATOS DEL TITULAR DE LA RESERVA
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Mendoza"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#888888] mb-2">
                    Teléfono de Contacto (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 55 1234 5678"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 4. OCASIÓN & NOTAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#C4924A] mb-2">
                  Ocasión Especial
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                >
                  <option value="ninguna">Cena / Comida Casual</option>
                  <option value="cumpleanios">Cumpleaños</option>
                  <option value="aniversario">Aniversario / Cita Romántica</option>
                  <option value="negocios">Reunión de Negocios</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#C4924A] mb-2">
                  Comentarios o Alergias
                </label>
                <input
                  type="text"
                  placeholder="Ej. Preferencia de mesa junto a la ventana..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-[6px] bg-[#171718] border border-[#2c2c2e] text-[#ffffff] text-xs focus:outline-none focus:border-[#C4924A] transition-all"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button type="submit" className="btn-gold-luxury w-full py-4 text-xs shadow-none">
                <MessageSquare className="w-4 h-4" />
                Confirmar y Enviar Reserva a WhatsApp
              </button>
              <p className="font-subtext-stellar text-[11px] text-[#888888] text-center mt-4 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C4924A]" />
                Sin comisión de reserva en línea. Confirmación prioritaria inmediata.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
