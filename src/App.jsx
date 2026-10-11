import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import CommandMenu from './components/CommandMenu';
import ItemModal from './components/ItemModal';
import OrderDrawer from './components/OrderDrawer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import SectionPage from './pages/SectionPage';
import DestiladosPage from './pages/DestiladosPage';
import AboutPage from './pages/AboutPage';
import ReservationsPage from './pages/ReservationsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [activeItemModal, setActiveItemModal] = useState(null);

  const handleAddToCart = (orderItem) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(i => i.id === orderItem.id && i.term === orderItem.term);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += orderItem.quantity;
        return updated;
      }
      return [...prev, orderItem];
    });
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <div className="min-h-screen bg-[#050505] text-[#f5f7f5] font-jakarta flex flex-col justify-between selection:bg-[#c89f53] selection:text-black">
          
          {/* NAVBAR 12 SINGLE FLOATING CAPSULE */}
          <Navbar 
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
            cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
          />

          {/* MAIN PAGE ROUTES */}
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onOpenItemModal={(dish) => setActiveItemModal(dish)}
                    onAddToCart={handleAddToCart}
                  />
                } 
              />
              <Route 
                path="/menu" 
                element={
                  <MenuPage 
                    onOpenItemModal={(dish) => setActiveItemModal(dish)}
                    onAddToCart={handleAddToCart}
                  />
                } 
              />
              <Route 
                path="/section/:id" 
                element={
                  <SectionPage 
                    onOpenItemModal={(dish) => setActiveItemModal(dish)}
                    onAddToCart={handleAddToCart}
                  />
                } 
              />
              <Route 
                path="/cava-destilados" 
                element={<DestiladosPage onAddToCart={handleAddToCart} />} 
              />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/reservas" element={<ReservationsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<HomePage onOpenItemModal={(dish) => setActiveItemModal(dish)} onAddToCart={handleAddToCart} />} />
            </Routes>
          </main>

          {/* COMMAND MENU 6 (⌘K SEARCH POPOVER) */}
          <CommandMenu 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectItem={(dish) => {
              if (dish) setActiveItemModal(dish);
              else setIsSearchOpen(true);
            }}
          />

          {/* DSIH DETAIL MODAL */}
          <ItemModal 
            dish={activeItemModal}
            onClose={() => setActiveItemModal(null)}
            onAddToCart={handleAddToCart}
          />

          {/* ORDER DRAWER (MI MESA) */}
          <OrderDrawer 
            isOpen={isOrderDrawerOpen}
            onClose={() => setIsOrderDrawerOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />

          {/* GLOBAL FOOTER */}
          <Footer />

        </div>
      </ErrorBoundary>
    </Router>
  );
}
