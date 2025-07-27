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
    name: "Multiformas Cali",
    slogan: "Muebles que innovan tu hogar",
    logo: "/images/logo.png", // Coloca el logo en public/images/logo.png
    phone: "315 5611943",
    email: "info@multiformascali.com",
    address: "Tv. 29 #24B-43, Santa Monica Popular, Cali, Valle del Cauca",
    whatsapp: "+573155611943"
  },
  
  colors: {
    primary: "#e6a34d",      // Color dorado/amarillo
    secondary: "#f70200",    // Color rojo
    accent: "#d4912a",       // Dorado más oscuro
    primaryDark: "#c8862a",  // Dorado oscuro
    primaryLight: "#f4c076"  // Dorado claro
  },
  
  seo: {
    title: "Multiformas Cali - Muebles que innovan tu hogar",
    description: "Carpintería profesional en Cali. Diseñamos y fabricamos muebles a medida, cocinas integrales, closets y más. Calidad garantizada.",
    keywords: "carpintería cali, muebles a medida cali, cocinas integrales, closets, muebles personalizados, multiformas cali"
  },
  
  social: {
    facebook: "https://facebook.com/multiformascali",
    instagram: "https://www.instagram.com/multiformas_cali/",
    pinterest: "https://pinterest.com/multiformascali"
  },
  
  category: 'carpentry'
};