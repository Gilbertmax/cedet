import React, { useState } from 'react';

const CTASection = () => {
  const [activeForm, setActiveForm] = useState('estudiante');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    universidad: '',
    semestre: '',
    empresa: '',
    cargo: '',
    sector: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert(`¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.`);
  };

  return (
    <section id="contacto" className="section" style={{ 
      background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-teal) 100%)',
      color: 'var(--white)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'var(--white)'
          }}>
            Construyamos futuro juntos
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Únete a la comunidad CEDET HEZA y transforma tu carrera profesional
          </p>
        </div>

        {/* Selector de formulario */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            padding: '0.5rem',
            display: 'flex'
          }}>
            <button
              onClick={() => setActiveForm('estudiante')}
              style={{
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '50px',
                background: activeForm === 'estudiante' ? 'var(--white)' : 'transparent',
                color: activeForm === 'estudiante' ? 'var(--primary-dark)' : 'var(--white)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Quiero ser estudiante HEZA
            </button>
          </div>
        </div>

        {/* Formulario */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="grid grid-2">
              <div className="form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>

            {activeForm === 'estudiante' ? (
              <>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label>Universidad</label>
                    <input
                      type="text"
                      name="universidad"
                      value={formData.universidad}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Semestre actual</label>
                    <select
                      name="semestre"
                      value={formData.semestre}
                      onChange={handleInputChange}
                    >
                      <option value="">Selecciona...</option>
                      <option value="6">6° Semestre</option>
                      <option value="7">7° Semestre</option>
                      <option value="8">8° Semestre</option>
                      <option value="9">9° Semestre</option>
                      <option value="egresado">Egresado</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <>
                
              </>
            )}

            <div className="form-group">
              <label>Mensaje adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows="4"
                placeholder="Cuéntanos más sobre tus expectativas..."
              ></textarea>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {activeForm === 'estudiante' ? 'Solicitar información' : 'Iniciar colaboración'}
              </button>
              <div className="security-badge">
                Tus datos están seguros con nosotros
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 