# 🚀 Guía de Despliegue - CEDET HEZA

## 📋 Pre-requisitos

### 1. **Instalar Git**
- Descargar desde: https://git-scm.com/download/win
- Instalar con configuración por defecto
- Reiniciar terminal después de la instalación

### 2. **Cuenta de GitHub**
- Crear cuenta en: https://github.com
- Crear nuevo repositorio: "cedet-heza"

## 🔧 Configuración para GitHub

### **Paso 1: Inicializar Git**
```bash
# Inicializar repositorio local
git init

# Configurar usuario (solo la primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@gmail.com"

# Agregar archivos
git add .

# Primer commit
git commit -m "🎉 Initial commit: CEDET HEZA platform ready"
```

### **Paso 2: Conectar con GitHub**
```bash
# Agregar origen remoto (cambiar URL por la tuya)
git remote add origin https://github.com/tuusuario/cedet-heza.git

# Subir al repositorio
git branch -M main
git push -u origin main
```

### **Paso 3: Configurar Repository Settings**
En GitHub, ve a tu repositorio > Settings:

1. **General**
   - Description: "Plataforma web moderna para conectar estudiantes de contaduría con experiencia laboral real"
   - Website: `https://cedet-heza.com`
   - Topics: `react`, `node`, `education`, `accounting`, `students`

2. **Pages** (opcional)
   - Source: Deploy from branch `main`
   - Folder: `/build`

## 🌐 Despliegue en Producción

### **Frontend (Vercel - RECOMENDADO)**

1. **Conectar con GitHub**
   ```bash
   # En vercel.com
   - Import Git Repository
   - Seleccionar tu repo cedet-heza
   - Framework: Create React App
   - Build Command: npm run build
   - Output Directory: build
   ```

2. **Variables de Entorno en Vercel**
   ```
   REACT_APP_API_URL=https://tu-backend.herokuapp.com
   ```

### **Backend (Railway - RECOMENDADO)**

1. **Conectar con GitHub**
   ```bash
   # En railway.app
   - New Project > Deploy from GitHub
   - Seleccionar cedet-heza
   - Root Directory: server/
   - Start Command: node server.js
   ```

2. **Variables de Entorno en Railway**
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://tu-frontend.vercel.app
   EMAIL_HOST=smtp.gmail.com
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-app
   ADMIN_EMAIL=admin@cedet-heza.com
   ```

### **Alternativa: Netlify + Heroku**

**Frontend en Netlify:**
```bash
# En netlify.com
- New site from Git
- GitHub > cedet-heza
- Build command: npm run build
- Publish directory: build
```

**Backend en Heroku:**
```bash
# Instalar Heroku CLI
npm install -g heroku

# Login y crear app
heroku login
heroku create cedet-heza-api

# Variables de entorno
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=tu-email@gmail.com
heroku config:set EMAIL_PASS=tu-contraseña-app
heroku config:set ADMIN_EMAIL=admin@cedet-heza.com

# Desplegar
git subtree push --prefix server heroku main
```

## 🔐 Configuración de Seguridad

### **Variables de Entorno Locales**
Crear archivo `.env.local` (ya ignorado por git):
```bash
REACT_APP_API_URL=http://localhost:5000
```

### **Variables de Entorno del Servidor**
Crear archivo `.env` en `/server/` (ya ignorado por git):
```bash
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-app
ADMIN_EMAIL=admin@cedet-heza.com
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 🚀 Scripts de Despliegue

### **Desarrollo**
```bash
npm run dev          # Backend + Frontend
npm start           # Solo Frontend
npm run server      # Solo Backend
```

### **Producción**
```bash
npm run build       # Build de React
npm run start:prod  # Backend en modo producción
npm run preview     # Preview del build
```

## 📊 Monitoreo y Mantenimiento

### **Logs del Backend**
- Railway: Dashboard > Logs
- Heroku: `heroku logs --tail`

### **Analytics del Frontend**
- Vercel: Dashboard > Analytics
- Netlify: Dashboard > Analytics

### **Registros de Usuarios**
Los registros se guardan en archivos JSON en el servidor:
- `server/registros/estudiante-YYYY-MM-DD.json`
- `server/registros/inscripcion-taller-YYYY-MM-DD.json`

## 🔧 Solución de Problemas

### **Error de CORS**
```javascript
// En server/config.js
frontendUrl: 'https://tu-dominio-real.vercel.app'
```

### **Error de Email**
1. Verificar credenciales en variables de entorno
2. Usar contraseña de aplicación de Gmail
3. Revisar logs del servidor

### **Build Fallido**
```bash
# Limpiar cache
npm ci
rm -rf build/
npm run build
```

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisar logs del servicio de hosting
2. Verificar variables de entorno
3. Comprobar URLs de producción
4. Contactar al desarrollador

---

**¡Tu plataforma CEDET HEZA estará lista para recibir estudiantes! 🎓** 