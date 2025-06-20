import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "CEDET HEZA me permitió aplicar mis conocimientos en casos reales. La mentoría personalizada fue clave para mi desarrollo profesional.",
      author: "María González",
      role: "Estudiante Graduada - Contaduría Pública",
      category: "estudiante"
    },
    {
      text: "Los estudiantes de CEDET HEZA llegan a nuestras empresas con una preparación excepcional y conocimientos aplicados.",
      author: "Ing. Carlos Mendoza",
      role: "Director de RRHH - Corporativo Aliado",
      category: "aliado"
    },
    {
      text: "La colaboración con CEDET HEZA ha enriquecido significativamente la formación práctica de nuestros estudiantes.",
      author: "Dra. Ana Rodríguez",
      role: "Coordinadora Académica - Universidad Colaboradora",
      category: "universidad"
    },
    {
      text: "El programa me preparó no solo técnicamente, sino también en valores éticos fundamentales para la profesión contable.",
      author: "Luis Herrera",
      role: "Estudiante Graduado - Contaduría Pública",
      category: "estudiante"
    },
    {
      text: "Encontramos en CEDET HEZA el talento joven que necesitábamos, con una formación integral y orientación práctica.",
      author: "Lic. Patricia Vega",
      role: "Gerente General - Empresa Aliada",
      category: "aliado"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section">
      <div className="bg-geo-section floating">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="140" height="140" rx="40" fill="#92D050" opacity="0.10" />
          <circle cx="180" cy="60" r="30" fill="#009999" opacity="0.13" />
        </svg>
      </div>
      <div className="bg-geo-section-left floating">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,0 180,180 0,180" fill="#263D4F" opacity="0.10" />
          <circle cx="40" cy="140" r="25" fill="#A5A5A5" opacity="0.10" />
        </svg>
      </div>
      <div className="container">
        <h2 className="section-title">Historias que inspiran</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div className="testimonial-card fade-in-up">
            <p className="testimonial-text">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="testimonial-author">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="testimonial-role">
              {testimonials[currentTestimonial].role}
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <button 
              onClick={prevTestimonial}
              style={{
                background: 'var(--primary-teal)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
            >
              ←
            </button>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentTestimonial ? 'var(--primary-teal)' : 'var(--neutral-gray)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              style={{
                background: 'var(--primary-teal)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 