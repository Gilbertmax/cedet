import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-geo-footer">
        <svg width="100%" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="1200" cy="60" rx="180" ry="60" fill="#009999" opacity="0.10" />
          <ellipse cx="200" cy="100" rx="120" ry="40" fill="#92D050" opacity="0.13" />
          <polygon points="700,120 800,20 900,120" fill="#263D4F" opacity="0.08" />
        </svg>
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CEDET HEZA</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Centro de Desarrollo de Talento HEZA - Transformando futuros contables con ética y excelencia.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com/hezaconsultoriaintegral" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #1877F2, #0E4E99)',
                color: 'var(--white)',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(24, 119, 242, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.3)';
              }}>f</a>
              
              <a href="https://www.instagram.com/heza.cedet/" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #E4405F, #C13584, #833AB4)',
                color: 'var(--white)',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(228, 64, 95, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(228, 64, 95, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(228, 64, 95, 0.3)';
              }}>@</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Navegación</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#inicio">Inicio</a>
              <a href="#sobre-nosotros">Nosotros</a>
              <a href="#beneficios">Beneficios</a>
              <a href="#modelo">Modelo Formativo</a>
              <a href="#testimonios">Testimonios</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>▸</span>+52 (33) 3167-4762</p>
              <p><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>▸</span>contacto@heza.com.mx</p>
              <p><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>▸</span>Guadalajara, Jalisco, México</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Recursos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--white)', 
                textAlign: 'left', 
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none'
              }} onClick={() => alert('Próximamente: descarga del PDF')}><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>◆</span>Modelo Educativo HEZA (PDF)</button>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--white)', 
                textAlign: 'left', 
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none'
              }} onClick={() => alert('Próximamente: infografía interactiva')}><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>◆</span>Ruta del Estudiante</button>
              <a href="/privacy-policy"><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>◆</span>Políticas de Privacidad</a>
              <a href="/terms-conditions"><span style={{ color: 'var(--accent-green)', marginRight: '8px' }}>◆</span>Términos y Condiciones</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CEDET HEZA. Todos los derechos reservados.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Comprometidos con la formación ética y el desarrollo profesional integral
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 