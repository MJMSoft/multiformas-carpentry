# Guía de Personalización - Sitios Web en Español

Esta guía explica cómo personalizar los sitios web generados. Todos los sitios vienen completamente en español con el marcador "LOGO" donde debe ir tu información.

## 🚀 Pasos para Personalizar un Sitio

### 1. Configuración Principal

Edita el archivo `src/config/site.config.ts` con la información del cliente:

```typescript
export const siteConfig: SiteConfig = {
  company: {
    name: "LOGO",  // ← Cambiar por el nombre de tu empresa
    slogan: "Tu Slogan Aquí",
    logo: "/images/logo.png", // Ruta al logo
    phone: "555-123-4567",
    email: "info@tuempresa.com",
    address: "Tu Dirección, Ciudad, País",
    whatsapp: "+1234567890"
  },
  
  colors: {
    primary: "#92400e",      // Color principal
    secondary: "#451a03",    // Color secundario
    accent: "#f59e0b",       // Color de acento
    primaryDark: "#451a03",  // Variante oscura
    primaryLight: "#d97706"  // Variante clara
  },
  
  seo: {
    title: "LOGO - Tu Título SEO Aquí",  // ← Cambiar LOGO
    description: "Descripción de tu empresa y servicios para los motores de búsqueda.",
    keywords: "palabras, clave, de, tu, negocio"
  },
  
  social: {
    facebook: "https://facebook.com/tuempresa",
    instagram: "https://instagram.com/tuempresa",
    // Agrega las redes sociales que necesites
  },
  
  category: 'carpentry' // Categoría del sitio
};
```

### 2. Agregar el Logo

1. Coloca el logo del cliente en la carpeta `public/images/`
2. Nombre recomendado: `logo.png` o `logo.svg`
3. Asegúrate de que la ruta en `site.config.ts` coincida

### 3. Personalizar Colores

Los colores se definen en el archivo de configuración y se aplican automáticamente en todo el sitio mediante variables CSS:

- `primary`: Color principal de la marca
- `secondary`: Color secundario
- `accent`: Color de acento para botones y elementos destacados

Puedes usar cualquier formato de color CSS válido (#HEX, rgb, hsl, etc.)

### 4. Contenido en Español

Todos los sitios generados incluyen:
- ✅ Navegación en español
- ✅ Formulario de contacto con campos en español
- ✅ Placeholders traducidos ("Tu Nombre", "tu@correo.com", etc.)
- ✅ Footer con "Todos los derechos reservados"
- ✅ Botón "Cotiza aquí" en la navegación
- ✅ Horarios de atención en español

### 5. Categorías Disponibles

- `plumbing` - Plomería
- `carpentry` - Carpintería
- `cleaning` - Limpieza
- `automotive` - Automotriz
- `fitness` - Gimnasio/Fitness
- `restaurant` - Restaurante
- `healthcare` - Salud
- `education` - Educación
- `legal` - Legal
- `real-estate` - Bienes Raíces

## 📦 Despliegue

### Opción 1: Build Estático

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/` listos para subir a cualquier hosting.

### Opción 2: Múltiples Clientes

Para manejar múltiples clientes, puedes:

1. **Duplicar el proyecto** para cada cliente
2. **Usar ramas Git** para cada cliente
3. **Crear múltiples archivos de configuración** y cambiarlos según necesites

## 🎨 Personalización Avanzada

### Cambiar Fuentes

En `src/layouts/BaseLayout.astro`, modifica el enlace de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Modificar Componentes

Todos los componentes principales usan la configuración centralizada:
- `Navigation.astro` - Usa el logo y nombre de la empresa
- `Contact.astro` - Usa la información de contacto
- `Footer.astro` - Usa las redes sociales

### Variables CSS Disponibles

```css
--color-primary
--color-secondary
--color-accent
--color-primary-dark
--color-primary-light
--gradient-primary
--gradient-accent
```

## 💡 Tips

1. **Imágenes**: Optimiza las imágenes antes de subirlas (WebP es recomendado)
2. **SEO**: Personaliza título y descripción para cada página si es necesario
3. **Performance**: El sitio ya está optimizado, pero revisa el tamaño de las imágenes
4. **Responsive**: Todos los componentes son responsive por defecto

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📝 Checklist de Personalización

- [ ] Reemplazar "LOGO" en `site.config.ts` con el nombre real
- [ ] Actualizar información de contacto (teléfono, email, dirección)
- [ ] Agregar logo en `public/images/logo.png`
- [ ] Personalizar colores si lo deseas (opcional, ya vienen por industria)
- [ ] Configurar redes sociales
- [ ] Actualizar SEO (reemplazar "LOGO" en el título)
- [ ] Probar en móvil y desktop
- [ ] Build y deploy

## ❓ Preguntas Frecuentes

**¿Dónde está el texto "LOGO"?**
- En la navegación (arriba)
- En el archivo `site.config.ts`
- En el título SEO

**¿Necesito traducir algo?**
No, todo ya está en español. Solo necesitas personalizar la información de tu empresa.

**¿Puedo cambiar los textos?**
Sí, todos los componentes son editables. Los principales están en:
- `src/pages/index.astro` (o la página de tu categoría)
- `src/components/` (para cambios en componentes específicos)