import React, { useState, useEffect } from 'react';

const ConferenciasSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const conferencias = [
    {
      id: 1,
      titulo: 'Conferencia Internacional de Contaduría',
      descripcion: 'Expertos internacionales compartieron las últimas tendencias en auditoría y regulaciones contables.',
      fecha: '15 Nov 2024',
      imagen: '/images/conferencias/conferencia-1.jpg'
    },
    {
      id: 2,
      titulo: 'Seminario de Ética Profesional',
      descripcion: 'Análisis profundo sobre los valores éticos fundamentales en la práctica contable moderna.',
      fecha: '28 Oct 2024',
      imagen: '/images/conferencias/conferencia-2.jpg'
    },
    {
      id: 3,
      titulo: 'Taller de Tecnología Financiera',
      descripcion: 'Capacitación en herramientas digitales y automatización de procesos contables.',
      fecha: '12 Oct 2024',
      imagen: '/images/conferencias/conferencia-3.jpg'
    },
    {
      id: 4,
      titulo: 'Mesa Redonda: Futuro de la Profesión',
      descripcion: 'Líderes de la industria debaten sobre las oportunidades y desafíos del sector contable.',
      fecha: '05 Oct 2024',
      imagen: '/images/conferencias/conferencia-4.jpg'
    },
    {
      id: 5,
      titulo: 'Conferencia de Casos de Éxito',
      descripcion: 'Egresados destacados comparten sus experiencias y logros profesionales.',
      fecha: '20 Sep 2024',
      imagen: '/images/conferencias/conferencia-5.jpg'
    },
    {
      id: 6,
      titulo: 'Simposio de Innovación Contable',
      descripcion: 'Presentación de nuevas metodologías y enfoques innovadores en contaduría.',
      fecha: '08 Sep 2024',
      imagen: '/images/conferencias/conferencia-6.jpg'
    },
    {
      id: 7,
      titulo: 'Conferencia de Liderazgo Financiero',
      descripcion: 'Desarrollo de habilidades de liderazgo para profesionales contables en puestos directivos.',
      fecha: '25 Ago 2024',
      imagen: '/images/conferencias/conferencia-7.jpg'
    },
    {
      id: 8,
      titulo: 'Taller de Auditoría Digital',
      descripcion: 'Capacitación en herramientas de auditoría digital y análisis de datos financieros.',
      fecha: '15 Ago 2024',
      imagen: '/images/conferencias/conferencia-8.jpg'
    },
    {
      id: 9,
      titulo: 'Seminario de Normas Internacionales',
      descripcion: 'Actualización en NIIF y estándares internacionales de contabilidad y auditoría.',
      fecha: '05 Ago 2024',
      imagen: '/images/conferencias/conferencia-9.jpg'
    },
    {
      id: 10,
      titulo: 'Congreso de Transformación Digital',
      descripcion: 'El impacto de la digitalización en los procesos contables y financieros empresariales.',
      fecha: '22 Jul 2024',
      imagen: '/images/conferencias/conferencia-10.jpg'
    },
    {
      id: 11,
      titulo: 'Workshop de Emprendimiento Contable',
      descripcion: 'Guía para contadores que desean iniciar su propio despacho o consultoría profesional.',
      fecha: '10 Jul 2024',
      imagen: '/images/conferencias/conferencia-11.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % conferencias.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + conferencias.length) % conferencias.length);
  };

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 segundos

    return () => clearInterval(interval);
  }, );

  return (
    <section className="section highlight-section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary-dark)' }}>
      {/* Fondo decorativo SVG */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <img 
          src="/logo-cedet_2.png" 
          alt="Logo CEDET HEZA marca de agua" 
          style={{
            position: 'absolute',
            right: '8%',
            top: '7%',
            width: '400px',
            maxWidth: '60vw',
            opacity: 0.70,
            filter: 'blur(1px)',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="200" rx="220" ry="80" fill="#009999" opacity="0.10" />
          <ellipse cx="1200" cy="500" rx="180" ry="60" fill="#92D050" opacity="0.13" />
          <polygon points="900,100 1200,400 600,400" fill="#263D4F" opacity="0.07" />
          <circle cx="700" cy="520" r="60" fill="#A5A5A5" opacity="0.08" />
        </svg>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Conferencias y Eventos</h2>
        
        <div style={{ 
          position: 'relative',
          maxWidth: '500px',
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          background: 'white'
        }}>
          {/* Imagen principal */}
          <div style={{ 
            position: 'relative',
            height: '600px',
            backgroundColor: 'var(--light-gray)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src={conferencias[currentSlide].imagen}
              alt={conferencias[currentSlide].titulo}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Fallback si no hay imagen */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-teal))',
              zIndex: -1
            }} />
          </div>
          
          {/* Información separada */}
          <div style={{ 
            padding: '2rem',
            background: 'white'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              {conferencias[currentSlide].titulo}
            </h3>
            <p style={{ 
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              color: 'var(--neutral-gray)',
              lineHeight: '1.6'
            }}>
              {conferencias[currentSlide].descripcion}
            </p>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ 
                background: 'var(--accent-green)',
                color: 'var(--primary-dark)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                {conferencias[currentSlide].fecha}
              </div>
              
              {/* Indicadores */}
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                {conferencias.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentSlide ? 'var(--primary-teal)' : 'var(--neutral-gray)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: index === currentSlide ? 1 : 0.5
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Controles de navegación - posición ajustada */}
          <div style={{
            position: 'absolute',
            top: '175px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: 'var(--primary-dark)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onClick={prevSlide}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}>
            ←
          </div>

          <div style={{
            position: 'absolute',
            top: '175px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: 'var(--primary-dark)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onClick={nextSlide}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}>
            →
          </div>
        </div>


      </div>
    </section>
  );
};

export default ConferenciasSection; 