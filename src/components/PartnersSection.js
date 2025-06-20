import React from 'react';

const InvolucradosSection = () => {
  const involucrados = [
    {
      id: 0,
      nombre: 'Mtro. Ángel Hernández',
      cargo: 'Presidente de consejo',
      descripcion: 'Socio fundador de Heza Consultoría Integral, S.C.',
      imagen: '/images/involucrados/involucrado-0.jpg'
    },
    {
      id: 1,
      nombre: 'Mtra. Ilse Corona',
      cargo: 'Directora General',
      descripcion: 'Directora General de Heza Consultoría Integral, S.C y fundadora de CEDET Heza.',
      imagen: '/images/involucrados/involucrado-1.jpg'
    },
    {
      id: 2,
      nombre: 'Lic. Adalberto Rosas',
      cargo: 'Profesor CEDET - CUCEA Universidad Heza',
      descripcion: 'Experto en desarrollo de talento y acompañamiento profesional personalizado.',
      imagen: '/images/involucrados/involucrado-2.jpg'
    },
    {
      id: 3,
      nombre: 'Lic. Uriel Ibarra',
      cargo: 'Profesor Escuela Empresa Universidad Heza',
      descripcion: 'Enlace estratégico con empresas para oportunidades de experiencia laboral.',
      imagen: '/images/involucrados/involucrado-3.jpg'
    },
    {
      id: 4,
      nombre: 'Lic. Cristina Esparza',
      cargo: 'Responsable de Desarrollo y Capacitación - Universidad Heza',
      descripcion: 'Líder en formación de valores éticos y responsabilidad profesional.',
      imagen: '/images/involucrados/involucrado-4.jpg'
    }
  ];

  const stats = [
    { number: '92%', label: 'Egresados empleados' },
    { number: '18', label: 'Certificaciones en CONTPAQi' },
    { number: '10', label: 'Empresas socias' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Nuestro Equipo</h2>
        
        {/* Cifras clave */}
        <div className="grid grid-4" style={{ marginBottom: '4rem' }}>
          {stats.map((stat, index) => (
            <div key={index} className="card fade-in-up" style={{ 
              textAlign: 'center',
              animationDelay: `${index * 0.1}s`
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700',
                color: 'var(--primary-teal)',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <p style={{ 
                color: 'var(--primary-dark)',
                fontWeight: '600'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Diagrama organizacional */}
        <div className="organigrama">
          {/* Nivel 1 - Presidente */}
          <div className="nivel-1">
            <div className="card involucrado-card">
              <div className="involucrado-imagen" style={{
                '--bg-image': `url(${involucrados[0].imagen})`
              }}>
                <div className="fallback">
                  {involucrados[0].nombre.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3>{involucrados[0].nombre}</h3>
              <div className="cargo">{involucrados[0].cargo}</div>
              <p>{involucrados[0].descripcion}</p>
            </div>
            
            <div className="card involucrado-card">
              <div className="involucrado-imagen" style={{
                '--bg-image': `url(${involucrados[1].imagen})`
              }}>
                <div className="fallback">
                  {involucrados[1].nombre.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3>{involucrados[1].nombre}</h3>
              <div className="cargo">{involucrados[1].cargo}</div>
              <p>{involucrados[1].descripcion}</p>
            </div>
          </div>

          <div className="nivel-3">
            <div className="profesores-grid">
              {/* Profesor 1 */}
              <div className="card involucrado-card">
                <div className="involucrado-imagen" style={{
                  '--bg-image': `url(${involucrados[2].imagen})`
                }}>
                  <div className="fallback">
                    {involucrados[2].nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{involucrados[2].nombre}</h3>
                <div className="cargo">{involucrados[2].cargo}</div>
                <p>{involucrados[2].descripcion}</p>
              </div>

              {/* Profesor 2 */}
              <div className="card involucrado-card">
                <div className="involucrado-imagen" style={{
                  '--bg-image': `url(${involucrados[3].imagen})`
                }}>
                  <div className="fallback">
                    {involucrados[3].nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{involucrados[3].nombre}</h3>
                <div className="cargo">{involucrados[3].cargo}</div>
                <p>{involucrados[3].descripcion}</p>
              </div>
              <div className="card involucrado-card">
                <div className="involucrado-imagen" style={{
                  '--bg-image': `url(${involucrados[4].imagen})`
                }}>
                  <div className="fallback">
                    {involucrados[4].nombre.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{involucrados[4].nombre}</h3>
                <div className="cargo">{involucrados[4].cargo}</div>
                <p>{involucrados[4].descripcion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de contacto del equipo */}
        <div style={{ 
          marginTop: '4rem',
          textAlign: 'center',
          background: 'var(--light-gray)',
          padding: '3rem',
          borderRadius: '20px'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: 'var(--primary-dark)',
            marginBottom: '1rem'
          }}>
            ¿Quieres conocer más sobre nuestro equipo?
          </h3>
          <p style={{
            color: 'var(--neutral-gray)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Nuestro equipo de expertos está comprometido con tu desarrollo profesional. 
            Cada miembro aporta años de experiencia y pasión por la formación contable.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Solicitar reunión con el equipo
          </button>
        </div>

        <style jsx>{`
          .organigrama {
            position: relative;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .nivel-1, .nivel-2, .nivel-3, .nivel-4 {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .profesores-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            width: 100%;
            max-width: 1000px;
          }

          /* Ajuste de posición para los profesores */
          .nivel-3 .profesores-grid {
            display: flex;
            justify-content: space-between;
            max-width: 800px;
            margin: 0 auto;
          }

          .nivel-3 .profesores-grid .involucrado-card:first-child {
            margin-right: 2rem;
          }

          .nivel-3 .profesores-grid .involucrado-card:last-child {
            margin-left: 2rem;
          }

          /* Ajuste de las líneas conectoras */
          .conector-horizontal {
            position: absolute;
            top: 50%;
            left: 20%;
            right: 20%;
            height: 2px;
            background: var(--primary-teal);
          }

          .involucrado-card {
            background: white;
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
          }

          .involucrado-imagen {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            background-size: cover;
            background-position: center;
            border: 4px solid var(--accent-green);
            position: relative;
            overflow: hidden;
          }

          .fallback {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, var(--primary-teal), var(--accent-green));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            z-index: 1;
          }

          .involucrado-imagen::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: var(--bg-image);
            background-size: cover;
            background-position: center;
            z-index: 2;
          }

          .conector-vertical {
            width: 2px;
            height: 50px;
            background: var(--primary-teal);
            margin: 0 auto;
          }

          .conector-vertical-2 {
            width: 2px;
            height: 50px;
            background: var(--primary-teal);
            margin: 0 auto;
          }

          .cargo {
            background: var(--primary-teal);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            display: inline-block;
            font-weight: 600;
            font-size: 0.9rem;
            margin: 0.5rem 0;
          }

          h3 {
            color: var(--primary-dark);
            margin: 0.5rem 0;
            font-size: 1.2rem;
          }

          p {
            color: var(--neutral-gray);
            font-size: 0.9rem;
            line-height: 1.4;
          }

          @media (max-width: 768px) {
            .profesores-grid {
              flex-direction: column;
              align-items: center;
            }

            .nivel-3 .profesores-grid .involucrado-card:first-child,
            .nivel-3 .profesores-grid .involucrado-card:last-child {
              margin: 1rem 0;
            }

            .conector-horizontal {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default InvolucradosSection; 