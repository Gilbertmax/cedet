# 🚀 CEDET HEZA - Centro de Desarrollo de Talento

> **Plataforma web moderna para conectar estudiantes de contaduría con experiencia laboral real**

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.0+-green.svg)
![Express](https://img.shields.io/badge/Express-4.18+-lightgrey.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📖 Sobre el Proyecto

CEDET HEZA es una plataforma diseñada específicamente para **estudiantes de contaduría pública** que buscan experiencia laboral real. Conectamos talento joven con empresas aliadas a través de:

- 💼 **Experiencia laboral real** - Proyectos con empresas reales
- 👥 **Mentores expertos** - Acompañamiento profesional personalizado
- 🏆 **Certificaciones** - 18 certificaciones en CONTPAQi disponibles
- 🎯 **Alto índice de empleabilidad** - 92% de egresados consiguen empleo

## ✨ Características

### 🎨 **Frontend Moderno**
- **React 19** con diseño juvenil y atractivo
- **Responsive Design** - Perfecto en móvil y desktop
- **Animaciones suaves** con Framer Motion
- **Formularios integrados** - Registro súper accesible
- **Diseño UX optimizado** para generación Z

### ⚡ **Backend Robusto**
- **Node.js + Express** - API REST simple y eficiente
- **Sistema de registros** - Guardado en archivos JSON
- **Notificaciones automáticas** - Email al administrador
- **Validación de datos** - Seguridad en todos los formularios
- **CORS configurado** - Comunicación segura frontend-backend

## 🛠️ Instalación y Uso

### **Requisitos Previos**
- Node.js 18.0+ 
- npm 8.0+
- Git

### **Instalación Rápida**
```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/cedet-heza.git
cd cedet-heza

# Instalar dependencias
npm install

# Configurar email (opcional)
cp server/config.example.js server/config.js
# Editar server/config.js con tus credenciales

# Ejecutar en desarrollo
npm run dev
```

### **Comandos Disponibles**
```bash
# Desarrollo completo (Backend + Frontend)
npm run dev

# Solo Frontend (React)
npm start

# Solo Backend (Express)
npm run server

# Build de producción
npm run build

# Probar build de producción
npm install -g serve
serve -s build
```

## 🌐 URLs del Proyecto

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Test API**: http://localhost:5000/api/test

## 📁 Estructura del Proyecto

```
cedet/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   └── index.html         # HTML principal
├── src/                   # Código fuente React
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   └── App.js            # Componente principal
├── server/               # Backend Node.js
│   ├── config.js         # Configuración del servidor
│   ├── server.js         # Servidor Express
│   └── registros/        # Registros guardados (JSON)
└── build/                # Build de producción
```

## 🎯 Funcionalidades

### ✅ **Implementadas**
- [x] **Formulario de registro de estudiantes** - Integrado en sección principal
- [x] **Inscripción a talleres** - Modal funcional con validación
- [x] **Sistema de guardado** - Archivos JSON organizados por fecha
- [x] **Notificaciones por email** - Automáticas al administrador
- [x] **Diseño responsive** - Optimizado para todos los dispositivos
- [x] **API REST** - Endpoints seguros y documentados

### 🎨 **Páginas Disponibles**
- **Inicio** - Hero + Formulario integrado + Información
- **Talleres** - Lista de talleres con inscripción modal
- **Nosotros** - Historia y misión de CEDET HEZA
- **Bitácora** - Blog y noticias
- **Conferencias** - Galería de eventos

## 🔧 Configuración

### **Email (Opcional)**
Para recibir notificaciones por email, edita `server/config.js`:

```javascript
module.exports = {
  email: {
    host: 'smtp.gmail.com',
    auth: {
      user: 'tu-email@gmail.com',
      pass: 'tu-contraseña-de-aplicacion'
    }
  },
  adminEmail: 'admin@cedet-heza.com'
};
```

### **Variables de Entorno (Producción)**
```bash
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://tu-dominio.com
```

## 📊 API Endpoints

### **Registro de Estudiantes**
```http
POST /api/registro-estudiante
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "telefono": "+52 33 1234 5678",
  "universidad": "Universidad de Guadalajara",
  "semestre": "7",
  "mensaje": "Quiero formar parte de HEZA"
}
```

### **Inscripción a Talleres**
```http
POST /api/inscripcion-taller
Content-Type: application/json

{
  "nombre": "María García",
  "email": "maria@email.com",
  "telefono": "+52 33 8765 4321",
  "taller_id": 1,
  "taller_nombre": "Taller de Declaraciones Anuales"
}
```

## 🚀 Despliegue

### **Frontend (Netlify/Vercel)**
```bash
npm run build
# Subir carpeta build/ a tu servicio preferido
```

### **Backend (Heroku/Railway)**
```bash
# Configurar variables de entorno
# Desplegar server/ con Node.js
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**CEDET HEZA** - Centro de Desarrollo de Talento

- 🌐 **Web**: [cedet-heza.com](https://cedet-heza.com)
- 📧 **Email**: contacto@cedet-heza.com
- 📱 **Instagram**: [@heza.cedet](https://www.instagram.com/heza.cedet/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado con ❤️ para la nueva generación de contadores**
