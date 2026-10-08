import React, { useState, useEffect } from 'react';
import { Flame, Wine, Sparkles, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

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
    <div className="pt-28 pb-24 min-h-screen text-[#F4F0EA] bg-[#000000] relative">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-16">
        <span className="font-script-lujo text-3xl sm:text-4xl text-[#C4924A] block">
          Reserva Prioritaria Vía WhatsApp
        </span>
        <h1 className="font-serif-corp text-4xl sm:text-5xl font-bold text-[#F4F0EA]">
          RESERVAS <span className="text-[#C4924A]">PÚA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#F4F0EA]/70 font-light leading-relaxed">
          Garantiza tu mesa en la zona de tu preferencia. Al completar tu solicitud serás redirigido a WhatsApp para confirmación inmediata.
        </p>
        <div className="w-24 h-0.5 bg-[#C4924A] mx-auto pt-2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isSubmitted ? (
          <div className="glass-luxury-black p-12 rounded-3xl text-center space-y-6 border border-emerald-500/40 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h2 className="font-serif-corp text-3xl font-bold text-white">
              ¡SOLICITUD ENVIADA A WHATSAPP!
            </h2>
            
            <p className="text-xs sm:text-sm text-[#F4F0EA]/70 max-w-md mx-auto font-light leading-relaxed">
              Si tu aplicación de WhatsApp no se abrió automáticamente, presiona el botón inferior para confirmar tu mesa con nuestro hostess.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#121212] text-[#F4F0EA] border border-[#3D352E] hover:border-[#C4924A]"
              >
                Modificar Reserva
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitReservation} className="glass-luxury-black p-8 sm:p-12 rounded-3xl border border-[#3D352E] shadow-2xl space-y-10">
            
            {/* 1. SELECCIÓN DE ZONA */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C4924A] font-semibold mb-4 flex items-center gap-2 font-serif-corp">
                <span className="w-5 h-5 rounded-full bg-[#C4924A] text-black flex items-center justify-center text-[10px] font-bold font-sans">1</span>
                Selecciona la Zona de tu Preferencia
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
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                        isSel
                          ? 'bg-[#121212] border-[#C4924A] shadow-[0_0_20px_rgba(196,146,74,0.3)]'
                          : 'bg-[#000000] border-[#3D352E] hover:border-[#C4924A]/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isSel ? 'text-[#C4924A]' : 'text-[#F4F0EA]/40'}`} />
                      <div>
                        <h3 className="font-serif-corp text-sm font-bold text-[#F4F0EA]">
                          {zone.name}
                        </h3>
                        <p className="text-[11px] text-[#F4F0EA]/50 font-light mt-1">
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
              <label className="block text-xs uppercase tracking-widest text-[#C4924A] font-semibold mb-4 flex items-center gap-2 font-serif-corp">
                <span className="w-5 h-5 rounded-full bg-[#C4924A] text-black flex items-center justify-center text-[10px] font-bold font-sans">2</span>
                Detalles de tu Visita
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#F4F0EA]/60 mb-2">
                    Nº de Comensales
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
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
                  <label className="block text-[11px] uppercase tracking-wider text-[#F4F0EA]/60 mb-2">
                    Fecha
                  </label>
                  <input
                    type="date"
                    required
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#F4F0EA]/60 mb-2">
                    Horario Deseado
                  </label>
                  <select
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
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
              <label className="block text-xs uppercase tracking-widest text-[#C4924A] font-semibold mb-4 flex items-center gap-2 font-serif-corp">
                <span className="w-5 h-5 rounded-full bg-[#C4924A] text-black flex items-center justify-center text-[10px] font-bold font-sans">3</span>
                Datos del Titular de la Reserva
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#F4F0EA]/60 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Mendoza"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#F4F0EA]/60 mb-2">
                    Teléfono de Contacto (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 55 1234 5678"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                  />
                </div>
              </div>
            </div>

            {/* 4. OCASIÓN & NOTAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C4924A] font-semibold mb-2">
                  Ocasión Especial
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                >
                  <option value="ninguna">Cena / Comida Casual</option>
                  <option value="cumpleanios">Cumpleaños</option>
                  <option value="aniversario">Aniversario / Cita Romántica</option>
                  <option value="negocios">Reunión de Negocios</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C4924A] font-semibold mb-2">
                  Comentarios o Alergias
                </label>
                <input
                  type="text"
                  placeholder="Ej. Preferencia de mesa junto a la ventana..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-[#3D352E] text-[#F4F0EA] text-xs focus:outline-none focus:border-[#C4924A]"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-gold-luxury w-full py-4 rounded-xl text-xs flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                Confirmar y Enviar Reserva a WhatsApp
              </button>
              <p className="text-[11px] text-[#F4F0EA]/40 text-center mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                No cobramos comisión de reserva en línea. Confirmación prioritaria inmediata.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
