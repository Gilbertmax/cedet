import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Conferencias = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const conferencias = [
    {
      id: 1,
      imagen: '/images/conferencias/conferencia-1.jpg',
      titulo: 'Conferencia de Innovación',
      fecha: '15 Marzo 2024',
      descripcion: 'Explorando nuevas tendencias en tecnología y desarrollo profesional.'
    },
    {
      id: 2,
      imagen: '/images/conferencias/conferencia-2.jpg',
      titulo: 'Taller de Liderazgo',
      fecha: '10 Marzo 2024',
      descripcion: 'Desarrollando habilidades de liderazgo para el éxito profesional.'
    },
    {
      id: 3,
      imagen: '/images/conferencias/conferencia-3.jpg',
      titulo: 'Networking Empresarial',
      fecha: '5 Marzo 2024',
      descripcion: 'Conectando profesionales y creando oportunidades de negocio.'
    },
    {
      id: 4,
      imagen: '/images/conferencias/conferencia-4.jpg',
      titulo: 'Mentoría Profesional',
      fecha: '1 Marzo 2024',
      descripcion: 'Sesiones personalizadas de mentoría para el desarrollo profesional.'
    },
    {
      id: 5,
      imagen: '/images/conferencias/conferencia-5.jpg',
      titulo: 'Workshop de Emprendimiento',
      fecha: '25 Febrero 2024',
      descripcion: 'Aprende a transformar tus ideas en proyectos exitosos.'
    },
    {
      id: 6,
      imagen: '/images/conferencias/conferencia-6.jpg',
      titulo: 'Panel de Expertos',
      fecha: '20 Febrero 2024',
      descripcion: 'Discusión sobre las últimas tendencias en el mercado laboral.'
    },
    {
      id: 7,
      imagen: '/images/conferencias/conferencia-7.jpg',
      titulo: 'Conferencia de Innovación',
      fecha: '15 Marzo 2024',
      descripcion: 'Explorando nuevas tendencias en tecnología y desarrollo profesional.'
    },
    {
      id: 8,
      imagen: '/images/conferencias/conferencia-8.jpg',
      titulo: 'Taller de Liderazgo',
      fecha: '10 Marzo 2024',
      descripcion: 'Desarrollando habilidades de liderazgo para el éxito profesional.'
    },
    {
      id: 9,
      imagen: '/images/conferencias/conferencia-9.jpg',
      titulo: 'Networking Empresarial',
      fecha: '5 Marzo 2024',
      descripcion: 'Conectando profesionales y creando oportunidades de negocio.'
    },
    {
      id: 10,
      imagen: '/images/conferencias/conferencia-10.jpg',
      titulo: 'Mentoría Profesional',
      fecha: '1 Marzo 2024',
      descripcion: 'Sesiones personalizadas de mentoría para el desarrollo profesional.'
    },
    {
      id: 11,
      imagen: '/images/conferencias/conferencia-11.jpg',
      titulo: 'Workshop de Emprendimiento',
      fecha: '25 Febrero 2024',
      descripcion: 'Aprende a transformar tus ideas en proyectos exitosos.'
    },
    {
      id: 12,
      imagen: '/images/conferencias/conferencia-12.jpg',
      titulo: 'Panel de Expertos',
      fecha: '20 Febrero 2024',
      descripcion: 'Discusión sobre las últimas tendencias en el mercado laboral.'
    },
    {
      id: 13,
      imagen: '/images/conferencias/conferencia-13.jpg',
      titulo: 'Conferencia de Innovación',
      fecha: '15 Marzo 2024',
      descripcion: 'Explorando nuevas tendencias en tecnología y desarrollo profesional.'
    },
    {
      id: 14,
      imagen: '/images/conferencias/conferencia-14.jpg',
      titulo: 'Taller de Liderazgo',
      fecha: '10 Marzo 2024',
      descripcion: 'Desarrollando habilidades de liderazgo para el éxito profesional.'
    },
    {
      id: 15,
      imagen: '/images/conferencias/conferencia-15.jpg',
      titulo: 'Networking Empresarial',
      fecha: '5 Marzo 2024',
      descripcion: 'Conectando profesionales y creando oportunidades de negocio.'
    },
    {
      id: 16,
      imagen: '/images/conferencias/conferencia-16.jpg',
      titulo: 'Mentoría Profesional',
      fecha: '1 Marzo 2024',
      descripcion: 'Sesiones personalizadas de mentoría para el desarrollo profesional.'
    },
    {
      id: 17,
      imagen: '/images/conferencias/conferencia-17.jpg',
      titulo: 'Workshop de Emprendimiento',
      fecha: '25 Febrero 2024',
      descripcion: 'Aprende a transformar tus ideas en proyectos exitosos.'
    },
    {
      id: 18,
      imagen: '/images/conferencias/conferencia-18.jpg',
      titulo: 'Panel de Expertos',
      fecha: '20 Febrero 2024',
      descripcion: 'Discusión sobre las últimas tendencias en el mercado laboral.'
    },
    {
      id: 19,
      imagen: '/images/conferencias/conferencia-19.jpg',
      titulo: 'Workshop de Emprendimiento',
      fecha: '25 Febrero 2024',
      descripcion: 'Aprende a transformar tus ideas en proyectos exitosos.'
    },
    {
      id: 20,
      imagen: '/images/conferencias/conferencia-20.jpg',
      titulo: 'Panel de Expertos',
      fecha: '20 Febrero 2024',
      descripcion: 'Discusión sobre las últimas tendencias en el mercado laboral.'
    }
  ];

  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="conferencias-page">
      <div className="container">
        <h1 className="page-title">Conferencias y Eventos</h1>
        
        <div className="gallery-grid">
          {conferencias.map((conferencia) => (
            <motion.div
              key={conferencia.id}
              className="gallery-item"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(conferencia)}
            >
              <div className="image-container">
                <img src={conferencia.imagen} alt={conferencia.titulo} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="instagram-section">
          <p>Síguenos en Instagram para ver más contenido</p>
          <a 
            href="https://www.instagram.com/heza.cedet/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <i className="fab fa-instagram"></i>
            @cedet
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage.imagen} alt={selectedImage.titulo} />
              <div className="modal-info">
                <h2>{selectedImage.titulo}</h2>
                <p className="fecha">{selectedImage.fecha}</p>
                <p className="descripcion">{selectedImage.descripcion}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .conferencias-page {
          padding: 2rem 0;
          background: #fafafa;
        }

        .page-title {
          text-align: center;
          color: var(--primary-dark);
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }

        .gallery-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .image-container {
          position: relative;
          padding-top: 100%;
          overflow: hidden;
        }

        .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .stats {
          color: white;
          display: flex;
          gap: 1rem;
          font-size: 1.1rem;
        }

        .instagram-section {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .instagram-section p {
          color: var(--primary-dark);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .instagram-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .instagram-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .instagram-button i {
          font-size: 1.5rem;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 800px;
          width: 90%;
          position: relative;
          overflow: hidden;
        }

        .modal-content img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .modal-info {
          padding: 2rem;
        }

        .modal-info h2 {
          color: var(--primary-dark);
          margin: 0 0 1rem;
        }

        .modal-stats {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          font-size: 1.2rem;
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 0.5rem;
          }

          .modal-content {
            width: 95%;
          }

          .modal-content img {
            height: 300px;
          }

          .modal-info {
            padding: 1.5rem;
          }

          .instagram-section {
            margin: 2rem 1rem;
            padding: 1.5rem;
          }

          .instagram-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Conferencias; 