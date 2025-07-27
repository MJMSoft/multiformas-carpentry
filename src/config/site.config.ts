export interface SiteConfig {
  // Información de la empresa
  company: {
    name: string;
    slogan?: string;
    logo: string; // Ruta al logo
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
  
  // Colores del tema (se mapearán a variables CSS)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    // Colores adicionales opcionales
    primaryDark?: string;
    primaryLight?: string;
  };
  
  // Metadatos SEO
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  
  // Redes sociales (opcional)
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  
  // Categoría del sitio (plumbing, carpentry, etc.)
  category: 'plumbing' | 'carpentry' | 'cleaning' | 'automotive' | 'fitness' | 'restaurant' | 'healthcare' | 'education' | 'legal' | 'real-estate';
}

// Configuración por defecto - PERSONALIZA ESTOS VALORES PARA CADA CLIENTE
export const siteConfig: SiteConfig = {
  company: {
    name: "LOGO",
    slogan: "Tu Slogan Aquí",
    logo: "/images/logo.png", // Coloca el logo en public/images/logo.png
    phone: "555-123-4567",
    email: "info@tuempresa.com",
    address: "Tu Dirección, Ciudad, País",
    whatsapp: "+1234567890"
  },
  
  colors: {
    primary: "#92400e",      // amber-800
    secondary: "#451a03",    // amber-950
    accent: "#f59e0b",       // amber-500
    primaryDark: "#451a03",  // amber-950
    primaryLight: "#d97706"  // amber-600
  },
  
  seo: {
    title: "LOGO - Tu Título SEO Aquí",
    description: "Descripción de tu empresa y servicios para los motores de búsqueda.",
    keywords: "palabras, clave, de, tu, negocio"
  },
  
  social: {
    facebook: "https://facebook.com/tuempresa",
    instagram: "https://instagram.com/tuempresa",
    pinterest: "https://pinterest.com/tuempresa"
  },
  
  category: 'carpentry'
};