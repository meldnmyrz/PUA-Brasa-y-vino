import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ReservationsPage from './pages/ReservationsPage';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000] text-[#F4F0EA] selection:bg-[#C4924A] selection:text-black font-sans flex flex-col justify-between">
        
        {/* GLOBAL NAVBAR WITH BRAND LOGO AND 5 EXACT SECTIONS */}
        <Navbar />

        {/* 5 MAIN INDIVIDUAL PAGE ROUTES: INICIO, MENÚ, NOSOTROS, SERVICIOS, RESERVAS */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/reservas" element={<ReservationsPage />} />
            <Route path="/contacto" element={<AboutPage />} />
          </Routes>
        </main>

        {/* FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton />

        {/* GLOBAL FOOTER */}
        <Footer />

      </div>
    </Router>
  );
}
