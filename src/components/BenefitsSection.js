import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Habilidades',
      description: 'Desarrollo de competencias técnicas y blandas esenciales para el éxito profesional en contaduría'
    },
    {
      icon: '📈',
      title: 'Casos reales',
      description: 'Resolución de desafíos contables actuales con empresas reales y situaciones del mercado'
    },
    {
      icon: '👤',
      title: 'Mentoría personal',
      description: 'Acompañamiento individualizado de profesionales en activo con experiencia comprobada'
    },
    {
      icon: '◆',
      title: 'Certificaciones',
      description: 'Contpaqi contabilidad.'
    }
  ];

  return (
    <section id="beneficios" className="section">
      <div className="bg-geo-section floating">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="140" height="140" rx="40" fill="#009999" opacity="0.10" />
          <circle cx="180" cy="60" r="30" fill="#92D050" opacity="0.13" />
        </svg>
      </div>
      <div className="bg-geo-section-left floating">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,0 180,180 0,180" fill="#263D4F" opacity="0.10" />
          <circle cx="40" cy="140" r="25" fill="#A5A5A5" opacity="0.10" />
        </svg>
      </div>
      <div className="container">
        <h2 className="section-title">Tu crecimiento profesional comienza aquí</h2>
        <div className="grid grid-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-icon">
                {benefit.icon}
              </div>
              <h3 className="card-title">{benefit.title}</h3>
              <p className="card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 