// EJEMPLO DE CONFIGURACIÓN - CEDET HEZA
// Copia este archivo como 'config.js' y cambia los valores

module.exports = {
    // Configuración del email
    email: {
      host: 'mail.heza.com.mx', // Para Gmail
      // host: 'smtp-mail.outlook.com', // Para Outlook
      // host: 'smtp.mail.yahoo.com', // Para Yahoo
      port: 465,
      secure: true,
      auth: {
        user: 'gilberto_gonzalez@heza.com.mx', // TU EMAIL REAL AQUÍ
        pass: 'HcI*357159$@'  // CONTRASEÑA DE APLICACIÓN AQUÍ (NO tu contraseña normal)
      }
    },
    
    // Email donde recibirás las notificaciones de registros
    adminEmail: 'admin@cedet-heza.com', // CAMBIAR POR TU EMAIL DE ADMINISTRADOR
    
    // Puerto del servidor
    port: process.env.PORT || 5000,
    
    // URLs permitidas (CORS)
    frontendUrl: process.env.NODE_ENV === 'production' 
      ? 'https://cedet.heza.com.mx' // Cambiar cuando subas a producción
      : 'http://localhost:3000'     // Para desarrollo local
  }; 