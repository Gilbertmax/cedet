import React from 'react';

const HeroSection = () => {
  const scrollToBenefits = () => {
    const element = document.getElementById('beneficios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="bg-geo-hero">
        <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <ellipse cx="200" cy="120" rx="180" ry="80" fill="#009999" opacity="0.10" />
          <ellipse cx="1300" cy="400" rx="160" ry="60" fill="#92D050" opacity="0.13" />
          <polygon points="900,100 1000,250 800,250" fill="#263D4F" opacity="0.08" />
          <circle cx="700" cy="420" r="60" fill="#A5A5A5" opacity="0.10" />
        </svg>
        <img 
          src="/logo-cedet.png" 
          alt="Logo CEDET HEZA marca de agua" 
          style={{
            position: 'absolute',
            right: '-6%',
            top: '-15%',
            width: '900px',
            maxWidth: '60vw',
            opacity: 0.70,
            filter: 'blur(0.5px)',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      </div>
      <div className="container">
        <div className="hero-content fade-in-up" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title">
            Preparamos profesionales éticos y capaces.
          </h1>
          <p className="hero-subtitle">
            Sembramos conocimiento aplicado para cultivar trayectorias profesionales sólidas y humanas
          </p>
          <button 
            className="btn btn-primary"
            onClick={scrollToBenefits}
          >
            Descubre lo que puedes lograr
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 