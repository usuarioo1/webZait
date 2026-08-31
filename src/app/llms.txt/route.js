const llmsTxt = `# WebZait

WebZait (webzait.cl) es un servicio chileno de desarrollo web y marketing digital. Este sitio presenta sus servicios —diseño de sitios web, tiendas online (e-commerce), aplicaciones web a medida y campañas publicitarias en Meta (Facebook e Instagram)— con planes y precios de referencia en pesos chilenos, y su objetivo es convertir visitas en consultas de cotización por WhatsApp, formulario de contacto o Instagram. Servicios disponibles en todo Chile.

## About

WebZait crea presencia digital para negocios, emprendedores y empresas en Chile, con un enfoque personalizado y trato directo con quien construye el proyecto.

- Área de servicio: Chile. Idioma del sitio: español (es-CL). Moneda de los precios: pesos chilenos (CLP).
- Servicios: sitios web corporativos y personales, tiendas online, aplicaciones web a medida, construcción de APIs y campañas publicitarias en Meta.
- Stack tecnológico declarado en "Sobre nosotros": Next.js, Prisma, NestJS, React y Vue; bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB, Firebase).
- Filosofía declarada: aprendizaje continuo, exploración de nuevas tecnologías y soluciones que aporten valor real a cada proyecto.

## Main sections

- [Inicio](https://webzait.cl/): presentación de WebZait con su propuesta de valor, tarjetas resumen de los cuatro servicios y un glosario de conceptos web (landing page, SPA, e-commerce, SEO, responsive design, hosting, dominio, analítica web, entre otros).
- [Desarrollo Web](https://webzait.cl/desarrolloWeb): diseño y desarrollo de sitios web simples, rápidos y responsivos. Planes: Básico ($120.000 CLP, diseño de una página) y Estándar ($150.000 CLP, hasta 3 vistas y formulario de contacto). Todos los planes incluyen hosting y dominio por un año, certificado SSL, diseño personalizado, enlaces a redes sociales y diseño responsivo. La página incluye enlaces a ejemplos demo publicados (landing page, CV online y portafolio de fotografía).
- [E-commerce](https://webzait.cl/ecommerce): desarrollo de tiendas online con carrito de compras, panel de administración y pasarelas de pago. Planes: Tienda Básica ($450.000 CLP, hasta 50 productos), Tienda Avanzada ($850.000 CLP, hasta 200 productos y confirmación de venta por correo) y Tienda Premium ($1.250.000 CLP, productos ilimitados, sistema de usuarios, múltiples pasarelas de pago y soporte prioritario 24/7). Todos los planes incluyen las secciones "Sobre nosotros", Contacto y Productos.
- [Aplicaciones Web](https://webzait.cl/appweb): aplicaciones web a medida con funcionalidades específicas. Incluye aplicaciones web básicas (autenticación de usuarios, base de datos, panel de administración), aplicaciones web avanzadas (arquitectura escalable, roles y permisos, integración con sistemas empresariales ERP/CRM, análisis de datos) y construcción de APIs a medida (diseño RESTful, autenticación JWT/OAuth, documentación técnica). Cotización directa por WhatsApp.
- [Marketing Digital](https://webzait.cl/marketingDigital): configuración y gestión de campañas publicitarias en Meta (Facebook e Instagram). Servicios: Configuración Orgánica ($80.000 CLP), Campaña Reconocimiento ($150.000 CLP + inversión publicitaria), Campaña Tráfico Web ($180.000 CLP + inversión publicitaria), Campaña Conversiones ($220.000 CLP + inversión publicitaria) y Campaña Interacción ($120.000 CLP + inversión publicitaria). Los precios corresponden a la gestión y configuración; la inversión publicitaria se paga directamente a Meta. También ofrece consultoría estratégica, análisis de competencia, creación de contenido visual y gestión completa de redes sociales.
- [Sobre nosotros](https://webzait.cl/nosotros): quién está detrás de WebZait, su experiencia en desarrollo web full-stack, stack tecnológico y filosofía de trabajo.
- [Contacto y cotización](https://webzait.cl/contacto): formulario de contacto (nombre, correo, teléfono, asunto y mensaje) y canales directos para solicitar cotización de un proyecto.

## Contact

- WhatsApp: +56 9 8151 2691 (https://wa.me/56981512691), canal principal de contacto y cotización.
- Email: webzaitcl@gmail.com
- Instagram: @webzait.cl (https://www.instagram.com/webzait.cl)
- Formulario web: https://webzait.cl/contacto

## Additional information

- Propósito del sitio: presentar los servicios de WebZait y generar consultas de cotización. No existe tienda de autoservicio, área de clientes ni pagos en línea dentro de este sitio.
- Medios de pago declarados en el pie de página del sitio: criptomonedas (Bitcoin, Ethereum y Chainlink) y MercadoPago. Las tiendas online desarrolladas integran pasarelas de pago como MercadoPago y PayPal.
- Recursos técnicos para crawlers: sitemap en https://webzait.cl/sitemap.xml y robots.txt en https://webzait.cl/robots.txt.
`

export const dynamic = "force-static"

export async function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
