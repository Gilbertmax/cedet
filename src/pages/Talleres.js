import React from 'react';
import { motion } from 'framer-motion';

const Talleres = () => {
  const talleres = [
    {
      id: 1,
      titulo: "Taller de pagos provisionales personas morales",
      imagen: "/talleres/Taller_morales.jpg",
      descripcion: "Un espacio para el crecimiento personal y profesional, donde los participantes desarrollan habilidades esenciales para su vida diaria.",

    },
    {
      id: 2,
      titulo: "Taller de declaraciones anuales",
      imagen: "/talleres/declaraciones.jpg",
      descripcion: "Aprende las técnicas fundamentales del liderazgo efectivo y cómo aplicarlas en diferentes contextos.",

    },
  ];

  return (
    <div className="talleres-page">
      <div className="hero-section">
        <h1>Nuestros Talleres</h1>
        <p>Espacios de aprendizaje y crecimiento para toda la comunidad</p>
      </div>

      <div className="container">
        <div className="talleres-grid">
          {talleres.map((taller) => (
            <motion.div
              key={taller.id}
              className="taller-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="taller-imagen">
                <img src={taller.imagen} alt={taller.titulo} />
              </div>
              <div className="taller-contenido">
                <h3>{taller.titulo}</h3>
                <p>{taller.descripcion}</p>
                <div className="taller-info">
                  <span><i className="fas fa-calendar"></i> {taller.fecha}</span>
                  <span><i className="fas fa-clock"></i> {taller.horario}</span>
                </div>
                <button className="btn-inscribirse">Inscribirse</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .talleres-page {
          padding-top: 80px;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-teal) 100%);
          color: white;
          text-align: center;
          padding: 60px 20px;
          margin-bottom: 40px;
        }

        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .talleres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .taller-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .taller-card:hover {
          transform: translateY(-5px);
        }

        .taller-imagen {
          height: 200px;
          overflow: hidden;
        }

        .taller-imagen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .taller-contenido {
          padding: 1.5rem;
        }

        .taller-contenido h3 {
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .taller-info {
          display: flex;
          justify-content: space-between;
          margin: 1rem 0;
          color: #666;
        }

        .btn-inscribirse {
          background: var(--primary-teal);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .btn-inscribirse:hover {
          background: var(--primary-dark);
        }
      `}</style>
    </div>
  );
};

export default Talleres; 