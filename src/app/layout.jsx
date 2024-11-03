import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebZait | Páginas y aplicaciones Web ",
  description: "Sitios Web de alto rendimiento",
  keywords: [
    "desarrollo web",
    "diseño de páginas web",
    "creación de ecommerces",
    "aplicaciones web",
    "páginas web personalizadas",
    "sitios web de alto rendimiento",
    "tiendas online",
    "landing pages",
    "web corporativa",
    "diseño de tiendas online",
    "soluciones digitales",
    "sitios responsivos",
    "optimización web",
    "desarrollo de aplicaciones",
    "web profesional"
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
    <html lang="es">
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
