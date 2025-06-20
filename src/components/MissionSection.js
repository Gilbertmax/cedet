import React from 'react';

const MissionSection = () => {
  return (
    <section className="section highlight-section">
      <div className="container">
      <img
            alt="Logo CEDET HEZA marca de agua"
            src="../images/conferencias/PRIMERA_GENERACION.jpg"
            style={{
              position: 'absolute',
              top: '-30%',
              left: '-30%',
              width: '160%',
              height: '160%',
              objectFit: 'cover',
              filter: 'blur(1px)',
              zIndex: 0,
              pointerEvents: 'none',
              userSelect: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.width = '150%';
              e.target.style.height = '150%';
              e.target.style.top = '-25%';
              e.target.style.left = '-25%';
            }}
            onMouseLeave={(e) => {
              e.target.style.width = '160%';
              e.target.style.height = '160%';
              e.target.style.top = '-30%';
              e.target.style.left = '-30%';
            }}
          />
        <div className="mission-card fade-in-up">
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--primary-teal)', 
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            Nuestra Misión
          </h2>
          <p className="mission-text">
            "Contribuir al desarrollo integral de futuros contadores mediante prácticas profesionales guiadas, 
            capacitación aplicada y promoción de aprendizaje continuo, ética y trabajo colaborativo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 