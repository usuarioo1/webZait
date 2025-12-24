import { Plus_Jakarta_Sans, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

// 🚀 Combo "Innovación Geométrica"
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-code',
  display: 'swap',
});

export const metadata = {
  title: "WebZait.cl | Desarrollo y Diseño de Páginas y Aplicaciones Web",
  description: "Especialistas en crear sitios web de alto rendimiento, tiendas online, y aplicaciones web personalizadas para negocios y emprendedores.",
  keywords: [
    "desarrollo web profesional",
    "diseño de páginas web modernas",
    "creación de ecommerces personalizados",
    "aplicaciones web a medida",
    "páginas web optimizadas",
    "sitios web responsivos y rápidos",
    "tiendas online efectivas",
    "landing pages atractivas",
    "web corporativa para empresas",
    "diseño de tiendas virtuales",
    "soluciones digitales innovadoras",
    "optimización de sitios web",
    "servicios de desarrollo web",
    "web profesional para negocios",
    "experiencia digital única"
  ]
};


const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WebZait",
  "url": "https://webzait.cl",
  "logo": "./favicon.ico",
  "description": "Sitios Web de alto rendimiento, tiendas online y aplicaciones web personalizadas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Ejemplo 123",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "postalCode": "8910090",
    "addressCountry": "CL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+56-981512691",
    "contactType": "Customer Service"
  }
  // "sameAs": [
  //   "https://www.facebook.com/WebZait",
  //   "https://www.twitter.com/WebZait",
  //   "https://www.instagram.com/WebZait"
  // ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href="https://webzait.cl" />
        {/* Script JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE} />
    </html>
  );
}
