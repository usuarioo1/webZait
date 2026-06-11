import { Plus_Jakarta_Sans, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://webzait.cl"),
  title: {
    default: "Desarrollo Web en Chile | WebZait",
    template: "%s | WebZait",
  },
  description: "Especialistas en crear sitios web de alto rendimiento, tiendas online, y aplicaciones web personalizadas para negocios y emprendedores.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "WebZait",
    title: "Desarrollo Web en Chile | WebZait",
    description: "Sitios web, tiendas online y aplicaciones web personalizadas para negocios y emprendedores en Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web en Chile | WebZait",
    description: "Sitios web, tiendas online y aplicaciones web personalizadas para negocios y emprendedores en Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://webzait.cl/#business",
      "name": "WebZait",
      "url": "https://webzait.cl",
      "logo": "https://webzait.cl/favicon.ico",
      "image": "https://webzait.cl/opengraph-image",
      "description": "Desarrollo de sitios web, tiendas online y aplicaciones web personalizadas para negocios y emprendedores.",
      "email": "mailto:webzaitcl@gmail.com",
      "telephone": "+56981512691",
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "Chile"
      },
      "sameAs": [
        "https://www.instagram.com/webzait.cl"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://webzait.cl/#website",
      "url": "https://webzait.cl",
      "name": "WebZait",
      "inLanguage": "es-CL",
      "publisher": {
        "@id": "https://webzait.cl/#business"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE} />
        )}
      </body>
    </html>
  );
}
