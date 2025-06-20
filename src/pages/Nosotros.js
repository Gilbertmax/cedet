import React from 'react';
import { motion } from 'framer-motion';

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <div className="hero-section">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre CEDET HEZA y nuestra misión</p>
      </div>

      <div className="container">
        <div className="historia-section">
          <motion.div 
            className="historia-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Nuestra Historia</h2>
            <p>
              CEDET HEZA nació con la visión de crear un espacio de transformación y crecimiento
              para la comunidad. Desde nuestros inicios, nos hemos dedicado a proporcionar
              herramientas y conocimientos que empoderen a las personas para alcanzar su máximo
              potencial.
            </p>
            <p>
              A lo largo de los años, hemos impactado positivamente en la vida de cientos de
              personas, ayudándoles a descubrir y desarrollar sus habilidades innatas.
            </p>
          </motion.div>
          <motion.div 
            className="historia-imagen"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/nosotros/historia.jpg" alt="Historia de CEDET" />
          </motion.div>
        </div>

        <div className="mision-vision">
          <motion.div 
            className="mision"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Misión</h3>
            <p>
              Proporcionar herramientas y conocimientos que empoderen a las personas para
              alcanzar su máximo potencial, contribuyendo al desarrollo personal y profesional
              de nuestra comunidad.
            </p>
          </motion.div>

          <motion.div 
            className="vision"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Visión</h3>
            <p>
              Ser un referente en la transformación personal y profesional, creando un impacto
              positivo en la sociedad a través de programas innovadores y de calidad.
            </p>
          </motion.div>
        </div>

        <div className="valores-section">
          <h2>Nuestros Valores</h2>
          <div className="valores-grid">
            <motion.div 
              className="valor-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <i className="fas fa-heart"></i>
              <h4>Compromiso</h4>
              <p>Dedicación total a la excelencia en todo lo que hacemos</p>
            </motion.div>
            <motion.div 
              className="valor-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <i className="fas fa-handshake"></i>
              <h4>Integridad</h4>
              <p>Actuamos con honestidad y transparencia en todas nuestras acciones</p>
            </motion.div>
            <motion.div 
              className="valor-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <i className="fas fa-lightbulb"></i>
              <h4>Innovación</h4>
              <p>Buscamos constantemente nuevas formas de mejorar y crecer</p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nosotros-page {
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

        .historia-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
          align-items: center;
        }

        .historia-content h2 {
          color: var(--primary-dark);
          margin-bottom: 1.5rem;
        }

        .historia-imagen img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .mision-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .mision, .vision {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .mision h3, .vision h3 {
          color: var(--primary-teal);
          margin-bottom: 1rem;
        }

        .valores-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .valores-section h2 {
          color: var(--primary-dark);
          margin-bottom: 2rem;
        }

        .valores-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .valor-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .valor-card i {
          font-size: 2.5rem;
          color: var(--primary-teal);
          margin-bottom: 1rem;
        }

        .valor-card h4 {
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .historia-section,
          .mision-vision {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Nosotros; 