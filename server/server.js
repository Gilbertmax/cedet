const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs-extra');
const path = require('path');
const config = require('./config');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Crear transportador de email
const transporter = nodemailer.createTransport(config.email);

// Función para guardar registro en archivo JSON
async function guardarRegistro(tipo, datos) {
  const registrosDir = path.join(__dirname, 'registros');
  await fs.ensureDir(registrosDir);
  
  const fecha = new Date().toISOString().split('T')[0];
  const archivo = path.join(registrosDir, `${tipo}-${fecha}.json`);
  
  let registros = [];
  if (await fs.pathExists(archivo)) {
    registros = await fs.readJson(archivo);
  }
  
  registros.push({
    ...datos,
    timestamp: new Date().toISOString(),
    id: Date.now()
  });
  
  await fs.writeJson(archivo, registros, { spaces: 2 });
  return registros.length;
}

// Función para enviar email de notificación
async function enviarNotificacion(tipo, datos) {
  const asunto = `Nuevo registro: ${tipo.toUpperCase()} - CEDET HEZA`;
  
  let contenido = `
    <h2>Nuevo ${tipo} registrado</h2>
    <h3>Datos del registro:</h3>
    <ul>
  `;
  
  Object.entries(datos).forEach(([key, value]) => {
    if(value) {
      contenido += `<li><strong>${key}:</strong> ${value}</li>`;
    }
  });
  
  contenido += `
    </ul>
    <p><em>Registro realizado el: ${new Date().toLocaleString()}</em></p>
  `;

  try {
    await transporter.sendMail({
      from: config.email.auth.user,
      to: config.adminEmail,
      subject: asunto,
      html: contenido
    });
    return true;
  } catch (error) {
    console.error('Error enviando email:', error);
    return false;
  }
}

// RUTAS DEL API

// Registro de estudiantes (desde CTASection)
app.post('/api/registro-estudiante', async (req, res) => {
  try {
    const { nombre, email, telefono, universidad, semestre, mensaje } = req.body;
    
    // Validación básica
    if (!nombre || !email || !telefono) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nombre, email y teléfono son obligatorios' 
      });
    }

    const datosRegistro = {
      nombre,
      email,
      telefono,
      universidad: universidad || 'No especificado',
      semestre: semestre || 'No especificado',
      mensaje: mensaje || 'Sin mensaje'
    };

    // Guardar en archivo
    await guardarRegistro('estudiante', datosRegistro);
    
    // Enviar notificación por email
    await enviarNotificacion('estudiante', datosRegistro);
    
    res.json({ 
      success: true, 
      message: '¡Registro exitoso! Nos pondremos en contacto contigo pronto.' 
    });

  } catch (error) {
    console.error('Error en registro de estudiante:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
});


// Inscripción a talleres
app.post('/api/inscripcion-taller', async (req, res) => {
  try {
    const { nombre, email, telefono, taller_id, taller_nombre } = req.body;
    
    // Validación básica
    if (!nombre || !email || !telefono || !taller_id) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son obligatorios' 
      });
    }

    const datosInscripcion = {
      nombre,
      email,
      telefono,
      taller_id,
      taller_nombre: taller_nombre || `Taller ${taller_id}`
    };

    // Guardar en archivo
    await guardarRegistro('inscripcion-taller', datosInscripcion);
    
    // Enviar notificación por email
    await enviarNotificacion('inscripción a taller', datosInscripcion);
    
    res.json({ 
      success: true, 
      message: `¡Inscripción exitosa al ${taller_nombre}! Te contactaremos con los detalles.` 
    });

  } catch (error) {
    console.error('Error en inscripción a taller:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend CEDET HEZA funcionando correctamente!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor CEDET HEZA ejecutándose en puerto ${PORT}`);
  console.log(`📧 Configuración de email: ${config.email.host}`);
  console.log(`📁 Registros se guardarán en: ${path.join(__dirname, 'registros')}`);
  console.log(`🌐 Frontend URL permitida: ${config.frontendUrl}`);
}); 