import React from 'react';

const FormativeModelSection = () => {
  return (
    <section id="modelo" className="section highlight-section">
      <div className="bg-geo-section floating">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="60" width="100" height="100" rx="30" fill="#263D4F" opacity="0.10" />
          <circle cx="180" cy="60" r="30" fill="#009999" opacity="0.13" />
        </svg>
      </div>
      <div className="bg-geo-section-left floating">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,0 180,180 0,180" fill="#92D050" opacity="0.10" />
          <circle cx="40" cy="140" r="25" fill="#A5A5A5" opacity="0.10" />
        </svg>
      </div>
      <div className="container">
        <h2 className="section-title">Educación con propósito</h2>
        <div className="grid grid-2">
          <div className="card fade-in-up">
            <h3 style={{
              fontSize: '1.5rem',
              color: 'var(--primary-teal)',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Modelo Escuela-Empresa
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1.1rem',
              lineHeight: '2'
            }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Integración laboral real
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Proyectos con empresas aliadas
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Mentores profesionales activos
              </li>
            </ul>
          </div>

          <div className="card fade-in-up">
            <h3 style={{
              fontSize: '1.5rem',
              color: 'var(--primary-teal)',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Modelo por Competencias
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '1.1rem',
              lineHeight: '2'
            }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Enfoque en habilidades clave
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Evaluación práctica continua
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{
                  color: 'var(--accent-green)',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem'
                }}>•</span>
                Desarrollo progresivo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormativeModelSection; 