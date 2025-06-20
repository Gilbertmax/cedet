import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
        form.current,
        'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key de EmailJS
      );

      if (result.text === 'OK') {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        form.current.reset();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>contacto@heza.com.mx</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+52 (33) 1234 5678</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Av. Chapultepec Sur 123, Col. Americana, Guadalajara, Jalisco</p>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="user_phone"
                placeholder="Teléfono"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensaje"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={status.loading}
            >
              {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status.message && (
              <div className={`status-message ${status.success ? 'success' : status.error ? 'error' : ''}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-top: 2rem;
        }

        .contact-info {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-info h3 {
          color: var(--primary-dark);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .info-item i {
          color: var(--primary-teal);
          font-size: 1.2rem;
          margin-right: 1rem;
          width: 20px;
        }

        .info-item p {
          color: var(--primary-dark);
          margin: 0;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #eee;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary-teal);
          outline: none;
        }

        .form-group textarea {
          height: 150px;
          resize: vertical;
        }

        .submit-button {
          background: var(--primary-teal);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          width: 100%;
        }

        .submit-button:hover {
          background: var(--primary-dark);
        }

        .submit-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .status-message.success {
          background: #e6f4ea;
          color: #1e7e34;
        }

        .status-message.error {
          background: #fde7e7;
          color: #d32f2f;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info,
          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection; 