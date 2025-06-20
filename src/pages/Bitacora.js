import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bitacora = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'noticias', nombre: 'Noticias' },
    { id: 'eventos', nombre: 'Eventos' },
    { id: 'testimonios', nombre: 'Testimonios' }
  ];

  const entradas = [
    {
      id: 1,
      titulo: "Nuevo Taller de Liderazgo",
      categoria: "eventos",
      fecha: "15 de Marzo, 2024",
      imagen: "/bitacora/taller-liderazgo.jpg",
      resumen: "Iniciamos un nuevo ciclo de talleres enfocados en el desarrollo de habilidades de liderazgo...",
      autor: "Equipo CEDET"
    },
    {
      id: 2,
      titulo: "Testimonio: Transformación Personal",
      categoria: "testimonios",
      fecha: "10 de Marzo, 2024",
      imagen: "/bitacora/testimonio.jpg",
      resumen: "María comparte su experiencia de transformación personal a través de nuestros programas...",
      autor: "María González"
    },
    // Agregar más entradas según sea necesario
  ];

  const entradasFiltradas = selectedCategory === 'todos' 
    ? entradas 
    : entradas.filter(entrada => entrada.categoria === selectedCategory);

  return (
    <div className="bitacora-page">
      <div className="hero-section">
        <h1>Bitácora</h1>
        <p>Noticias, eventos y testimonios de nuestra comunidad</p>
      </div>

      <div className="container">
        <div className="categorias">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              className={`categoria-btn ${selectedCategory === categoria.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(categoria.id)}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        <div className="entradas-grid">
          {entradasFiltradas.map((entrada) => (
            <motion.article
              key={entrada.id}
              className="entrada-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="entrada-imagen">
                <img src={entrada.imagen} alt={entrada.titulo} />
                <span className="categoria-badge">{entrada.categoria}</span>
              </div>
              <div className="entrada-contenido">
                <div className="entrada-meta">
                  <span className="fecha">{entrada.fecha}</span>
                  <span className="autor">{entrada.autor}</span>
                </div>
                <h3>{entrada.titulo}</h3>
                <p>{entrada.resumen}</p>
                <button className="btn-leer-mas">Leer más</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bitacora-page {
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

        .categorias {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .categoria-btn {
          background: white;
          border: 2px solid var(--primary-teal);
          color: var(--primary-teal);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .categoria-btn.active,
        .categoria-btn:hover {
          background: var(--primary-teal);
          color: white;
        }

        .entradas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .entrada-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .entrada-card:hover {
          transform: translateY(-5px);
        }

        .entrada-imagen {
          position: relative;
          height: 200px;
        }

        .entrada-imagen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .categoria-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary-teal);
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          text-transform: capitalize;
        }

        .entrada-contenido {
          padding: 1.5rem;
        }

        .entrada-meta {
          display: flex;
          justify-content: space-between;
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .entrada-contenido h3 {
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .btn-leer-mas {
          background: var(--primary-teal);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          width: 100%;
          margin-top: 1rem;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .btn-leer-mas:hover {
          background: var(--primary-dark);
        }
      `}</style>
    </div>
  );
};

export default Bitacora; 