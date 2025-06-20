import React, { useState } from 'react';

const AboutSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    universidad: '',
    semestre: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/registro-estudiante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        alert('🎉 ' + result.message);
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          universidad: '',
          semestre: '',
          mensaje: ''
        });
      } else {
        alert('❌ ' + (result.message || 'Error al enviar el formulario'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error de conexión. ¡Inténtalo de nuevo!');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="sobre-nosotros" className="section" style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <div className="container">
        <div className="about-hero">
          {/* Lado izquierdo - Información */}
          <div className="info-side">
            <div className="info-content">
              <h2 className="titulo-juvenil">
                🚀 ¡Tu futuro contable empieza aquí!
              </h2>
              <p className="descripcion-atractiva">
                CEDET HEZA conecta a <strong>estudiantes ambiciosos</strong> con experiencia laboral real. 
                Trabajarás en proyectos reales, con mentores expertos y empresas que buscan talento joven como tú.
              </p>
              
              <div className="beneficios-rapidos">
                <div className="benefit-item">
                  <span className="benefit-icon">💼</span>
                  <span>Experiencia laboral real</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">👥</span>
                  <span>Mentores expertos</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🏆</span>
                  <span>Certificaciones profesionales</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Empleo garantizado</span>
                </div>
              </div>

              <div className="stats-juveniles">
                <div className="stat">
                  <div className="stat-number">92%</div>
                  <div className="stat-label">Consiguen empleo</div>
                </div>
                <div className="stat">
                  <div className="stat-number">18</div>
                  <div className="stat-label">Certificaciones</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10</div>
                  <div className="stat-label">Empresas aliadas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="form-side">
            <div className="form-container-juvenil">
              <div className="form-header">
                <h3>¡Únete ahora! 🎉</h3>
                <p>Es <strong>GRATIS</strong> y solo toma 2 minutos</p>
              </div>

              <form onSubmit={handleSubmit} className="form-rapido">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">  
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="WhatsApp / Teléfono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="semestre"
                      value={formData.semestre}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">¿En qué semestre estás?</option>
                      <option value="6">6° Semestre</option>
                      <option value="7">7° Semestre</option>
                      <option value="8">8° Semestre</option>
                      <option value="9">9° Semestre</option>
                      <option value="egresado">Ya me gradué</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="universidad"
                    placeholder="¿De qué universidad eres?"
                    value={formData.universidad}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tus expectativas... (opcional)"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-juvenil"
                  disabled={enviando}
                >
                  {enviando ? '⏳ Enviando...' : '🚀 ¡Quiero ser parte de HEZA!'}
                </button>

                <div className="security-note">
                  🔒 Tus datos están seguros • Sin spam • Respuesta en 24hrs
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 80vh;
        }

        .info-side {
          padding: 2rem 0;
        }

        .titulo-juvenil {
          font-size: 2.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-teal), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .descripcion-atractiva {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--primary-dark);
          margin-bottom: 2rem;
        }

        .beneficios-rapidos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem;
          background: rgba(0, 153, 153, 0.1);
          border-radius: 10px;
          border-left: 4px solid var(--primary-teal);
        }

        .benefit-icon {
          font-size: 1.5rem;
        }

        .stats-juveniles {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
          padding: 1rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 4px solid var(--accent-green);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-teal);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--primary-dark);
          font-weight: 600;
        }

        .form-side {
          position: relative;
        }

        .form-container-juvenil {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-teal) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 2rem;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-header h3 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        .form-rapido {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid transparent;
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--accent-green);
          background: white;
          outline: none;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-juvenil {
          background: var(--accent-green);
          color: white;
          border: none;
          padding: 1.2rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: none;
          margin-top: 1rem;
        }

        .btn-juvenil:hover:not(:disabled) {
          background: #7CB342;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(146, 208, 80, 0.4);
        }

        .btn-juvenil:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
        }

        .security-note {
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 1rem;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .about-hero {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .titulo-juvenil {
            font-size: 2.2rem;
          }

          .beneficios-rapidos {
            grid-template-columns: 1fr;
          }

          .stats-juveniles {
            justify-content: center;
          }

          .form-container-juvenil {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .stats-juveniles {
            flex-direction: column;
            align-items: center;
          }

          .about-hero {
            gap: 2rem;
          }

          .form-container-juvenil {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 