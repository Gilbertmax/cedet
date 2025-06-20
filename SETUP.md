# 🚀 CONFIGURACIÓN RÁPIDA - CEDET HEZA

## ⚡ INSTALACIÓN Y EJECUCIÓN

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar email (IMPORTANTE)
Edita el archivo `server/config.js` y cambia:
```javascript
email: {
  auth: {
    user: 'tu-email-real@gmail.com',
    pass: 'tu-contraseña-de-aplicacion'  // No tu contraseña normal
  }
},
adminEmail: 'admin@tu-dominio.com'  // Email donde recibirás las notificaciones
```

### 3. Ejecutar todo junto
```bash
npm run dev
```

Esto ejecutará:
- ✅ Backend en http://localhost:5000
- ✅ Frontend en http://localhost:3000

## 📧 CONFIGURACIÓN DE EMAIL

### Para Gmail:
1. Ve a [Configuración de Google](https://myaccount.google.com/security)
2. Activa "Verificación en 2 pasos"
3. Genera una "Contraseña de aplicación"
4. Usa esa contraseña en `server/config.js`

### Para otros proveedores:
Cambia el `host` en `server/config.js`:
- **Outlook**: `smtp-mail.outlook.com`
- **Yahoo**: `smtp.mail.yahoo.com`
- **Otros**: Consulta la documentación de tu proveedor

## 📁 FUNCIONAMIENTO

### ✅ LO QUE YA FUNCIONA:
1. **Formulario de registro de estudiantes** (integrado en la sección About - súper visible y juvenil)
2. **Inscripciones a talleres** (página talleres con modal)

### 📂 DÓNDE SE GUARDAN LOS REGISTROS:
Los registros se guardan en archivos JSON en: `server/registros/`
- `estudiante-YYYY-MM-DD.json` (registro principal de estudiantes)
- `inscripcion-taller-YYYY-MM-DD.json` (inscripciones a talleres específicos)

### 📧 NOTIFICACIONES:
Cada registro envía un email automático al administrador con todos los datos.

## 🔧 COMANDOS DISPONIBLES

```bash
# Solo frontend
npm start

# Solo backend
npm run server

# Ambos juntos (RECOMENDADO)
npm run dev

# Compilar para producción
npm run build
```

## 🚨 SOLUCIÓN DE PROBLEMAS

### Error de conexión:
- Verifica que el backend esté ejecutándose en puerto 5000
- Revisa la consola del navegador para errores

### Emails no se envían:
- Verifica la configuración en `server/config.js`
- Asegúrate de usar contraseña de aplicación (no la normal)
- Revisa la consola del servidor para errores

### Puerto ocupado:
Si el puerto 5000 está ocupado, cambia el puerto en `server/config.js`

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

1. **Personalizar emails**: Edita las plantillas en `server/server.js`
2. **Cambiar estilos**: Modifica los archivos CSS de los componentes
3. **Agregar validaciones**: Añade más validaciones en los formularios
4. **Hosting**: Para producción, cambia la URL en `frontendUrl` del config

¡Todo listo para usar! 🎉 