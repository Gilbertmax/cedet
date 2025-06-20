import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import BenefitsSection from './components/BenefitsSection';
import FormativeModelSection from './components/FormativeModelSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConferenciasSection from './components/BlogSection';
import InvolucradosSection from './components/PartnersSection';

import Header from './components/Header';
import Footer from './components/Footer';
import Talleres from './pages/Talleres';
import Nosotros from './pages/Nosotros';
import Bitacora from './pages/Bitacora';
import Conferencias from './pages/Conferencias';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <BenefitsSection />
      <FormativeModelSection />
      <TestimonialsSection />
      <ConferenciasSection />
      <InvolucradosSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Fondo geométrico global */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}>
          <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100vw', height: '100vh' }}>
            <ellipse cx="300" cy="200" rx="320" ry="120" fill="#009999" opacity="0.07" />
            <ellipse cx="1700" cy="900" rx="260" ry="100" fill="#92D050" opacity="0.09" />
            <polygon points="1200,0 1600,400 800,400" fill="#263D4F" opacity="0.06" />
            <circle cx="900" cy="1000" r="180" fill="#A5A5A5" opacity="0.06" />
          </svg>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/conferencias" element={<Conferencias />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
