import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Talleres = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);
  const [datosInscripcion, setDatosInscripcion] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });

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

  const abrirModal = (taller) => {
    setTallerSeleccionado(taller);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setTallerSeleccionado(null);
    setDatosInscripcion({
      nombre: '',
      email: '',
      telefono: ''
    });
  };

  const manejarCambio = (e) => {
    setDatosInscripcion({
      ...datosInscripcion,
      [e.target.name]: e.target.value
    });
  };

  const manejarInscripcion = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/inscripcion-taller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosInscripcion,
          taller_id: tallerSeleccionado.id,
          taller_nombre: tallerSeleccionado.titulo
        })
      });

      const result = await response.json();
      
      if (result.success) {
        alert(result.message);
        cerrarModal();
      } else {
        alert(result.message || 'Error al procesar la inscripción');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, intenta de nuevo.');
    }
  };

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
                <button 
                  className="btn-inscribirse"
                  onClick={() => abrirModal(taller)}
                >
                  Inscribirse
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Inscripción */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Inscribirse a: {tallerSeleccionado?.titulo}</h3>
              <button className="btn-cerrar" onClick={cerrarModal}>&times;</button>
            </div>
            
            <form onSubmit={manejarInscripcion} className="form-inscripcion">
              <div className="form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={datosInscripcion.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={datosInscripcion.email}
                  onChange={manejarCambio}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={datosInscripcion.telefono}
                  onChange={manejarCambio}
                  required
                />
              </div>
              
              <div className="modal-buttons">
                <button type="button" className="btn-cancelar" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-confirmar">
                  Confirmar Inscripción
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

        /* Estilos del Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 0;
          border-radius: 15px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
          background: var(--primary-teal);
          color: white;
          border-radius: 15px 15px 0 0;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .btn-cerrar {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .btn-cerrar:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .form-inscripcion {
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--primary-dark);
        }

        .form-group input {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #eee;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          border-color: var(--primary-teal);
          outline: none;
        }

        .modal-buttons {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn-cancelar {
          background: #ccc;
          color: #666;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-cancelar:hover {
          background: #bbb;
        }

        .btn-confirmar {
          background: var(--primary-teal);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .btn-confirmar:hover {
          background: var(--primary-dark);
        }

        @media (max-width: 768px) {
          .modal-content {
            width: 95%;
            margin: 1rem;
          }

          .form-inscripcion {
            padding: 1.5rem;
          }

          .modal-buttons {
            flex-direction: column;
          }

          .btn-cancelar,
          .btn-confirmar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Talleres; 