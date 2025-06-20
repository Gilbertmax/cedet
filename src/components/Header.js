import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="bg-geo-header">
        <svg width="100%" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="60" r="60" fill="#009999" opacity="0.18" />
          <rect x="1300" y="10" width="100" height="100" rx="30" fill="#92D050" opacity="0.13" />
          <polygon points="700,0 750,80 650,80" fill="#263D4F" opacity="0.10" />
        </svg>
      </div>
      <div className="container">
        <div className="header-content" style={{ padding: '0.5rem 0' }}>
          <div className="logo">
            <Link to="/">
              <img 
                src="/logo-cedet.png" 
                alt="CEDET HEZA" 
                style={{ 
                  height: '80px', 
                  width: 'auto',
                  marginTop: '10px',
                  marginLeft: '10px',
                  marginRight: '10px',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>
          </div>
          
          <nav>
            <ul className="nav-menu">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/talleres">Talleres</Link></li>
              <li><Link to="/bitacora">Bitácora</Link></li>
              <li><Link to="/conferencias">Conferencias</Link></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Contacto</a></li>            </ul>
          </nav>
          
          <div className="certification-badge">
            Programa Certificado
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 