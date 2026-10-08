import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReservationsPage from './pages/ReservationsPage';

export default function App() {
  const [activePage, setActivePage] = useState('inicio');

  return (
    <div className="min-h-screen bg-zinc-950 text-amber-50 selection:bg-amber-500 selection:text-black font-sans flex flex-col justify-between">
      
      {/* GLOBAL NAVBAR */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* DYNAMIC SECTION ROUTER */}
      <main className="flex-grow">
        {activePage === 'inicio' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'menu' && <MenuPage setActivePage={setActivePage} />}
        {activePage === 'servicios' && <ServicesPage setActivePage={setActivePage} />}
        {activePage === 'nosotros' && <AboutPage setActivePage={setActivePage} />}
        {activePage === 'contacto' && <ContactPage setActivePage={setActivePage} />}
        {activePage === 'reservas' && <ReservationsPage />}
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* GLOBAL FOOTER */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}
