import React, { useEffect } from 'react';
import { Sparkles, Check, ArrowRight, Calendar, Users, Wine } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleConstellation from '../components/ParticleConstellation';

export default function ServicesPage() {
  useEffect(() => {
    document.title = "PÚA Brasa y Vino | Servicios VIP — Eventos Privados & Catering";
  }, []);

  const servicesList = [
    {
      id: 'corporativo',
      title: 'Eventos Corporativos & Cenas de Negocios',
      subtitle: 'Salón VIP Cava con servicio de Sommelier dedicado',
      description: 'Cierres de negocios, cenas ejecutivas y lanzamientos de marca en nuestra Cava Privada subterránea con menú degustación pre-diseñado a tres o cinco tiempos.',
      image: '/assets/cava-vino-mesa.jpg',
      features: ['Cava Privada para hasta 25 comensales', 'Menús ejecutivos maridados', 'Servicio dedicado de meseros y sommelier', 'Pantalla y audio discreto disponible']
    },
    {
      id: 'social',
      title: 'Celebraciones Sociales & Aniversarios VIP',
      subtitle: 'Espacios cálidos envueltos en fuego y elegancia',
      description: 'Celebra tu cumpleaños, aniversario o graduación con la calidez de nuestras brasas. Diseñamos experiencias de coctelería personalizada y pastelería fina de autor.',
      image: '/assets/coctel-negroni-rojo.jpg',
      features: ['Reserva de Terraza o Salón Principal', 'Montaje de mesa y flores de temporada', 'Coctel de bienvenida de autor', 'Postre especial personalizado']
    },
    {
      id: 'catas',
      title: 'Catas Maridaje & Experiencias de Cava',
      subtitle: 'Guiadas por nuestro Sommelier certificado',
      description: 'Un recorrido sensorial a través de nuestra selección de vinos de Casa Madero, champagnes y cosechas de autor, acompañados de tabla de quesos artesanos y charcutería a la brasa.',
      image: '/assets/copa-vino-tinto-lampara.jpg',
      features: ['Selección de 4 a 6 etiquetas por cata', 'Tabla de charcutería y bocadillos ahumados', 'Explicación sensorial guiada', 'Souvenir de cava para asistentes']
    },
    {
      id: 'catering',
      title: 'Servicio de Parrilla & Catering a Domicilio',
      subtitle: 'Llevamos la experiencia PÚA a tu residencia u oficina',
      description: 'Nuestro equipo de parrilleros y meseros se desplaza hasta tu evento privado con nuestros asadores móviles para cocinar cortes prime y tacos de autor en vivo.',
      image: '/assets/parrillada-brasas.jpg',
      features: ['Chef parrillero y personal en sitio', 'Montaje de estación de brasas y mixología', 'Cristalería y loza de lujo incluida', 'Menú 100% personalizable']
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
            SECCIÓN 04 // EVENTOS & CATERING
          </span>
          <h1 className="text-hero-display text-[#f5f5f7]">
            SERVICIOS VIP. <br />
            <span className="text-[#86868b]">EXPERIENCIAS A LA MEDIDA.</span>
          </h1>
          <p className="text-body-apple max-w-2xl text-[#86868b]">
            Organización integral para banquetes corporativos, catas privadas de cava y servicios de parrilla gourmet a domicilio.
          </p>
        </div>
      </section>

      {/* 02 SERVICES CARDS SHOWCASE */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20 relative z-10">
        {servicesList.map((service, idx) => (
          <div
            key={service.id}
            className="module-charcoal-stage p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-availability">
                EXPERIENCIA 0{idx + 1}
              </span>
              
              <h2 className="text-section-heading text-white">
                {service.title}
              </h2>
              <p className="text-xs text-[#ff791b] font-semibold uppercase tracking-wider">
                {service.subtitle}
              </p>
              
              <p className="text-body-apple text-sm text-[#86868b]">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#f5f5f7]">
                    <Check className="w-4 h-4 text-[#00d959] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link to="/reservas" className="btn-apple-blue font-semibold text-xs">
                  <span>Reservar este Servicio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-black-media relative h-80 overflow-hidden border border-white/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
