import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="section">
      <div className="container">
        <div className="about-content">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="section-title">Transformando futuros contables</h2>
            <div className="grid grid-2">
              <div className="card fade-in-up">
                <div className="card-content">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                    CEDET HEZA (Centro de Desarrollo de Talento HEZA) impulsa el crecimiento profesional de estudiantes de contaduría pública. Conectamos a jóvenes con experiencia laboral real mediante proyectos prácticos guiados por mentores expertos.
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <div style={{ 
                background: 'var(--light-gray)', 
                padding: '2rem', 
                borderRadius: '15px',
                border: '3px solid var(--accent-green)',
                display: 'inline-block',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'var(--accent-green)',
                  color: 'var(--white)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                  Ética Profesional
                </h3>
                <p style={{ color: 'var(--primary-teal)', fontWeight: '600' }}>
                  Compromiso con la integridad y excelencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          position: relative;
          overflow: hidden;
        }

        .about-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 