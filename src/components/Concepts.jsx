import React from "react";



const glossaryTerms = [
    {
        title: "Landing Page",
        description:
            "Una Landing Page es una página web diseñada específicamente para captar la atención del usuario y guiarlo hacia una acción, como suscribirse o realizar una compra. Por ejemplo, este sitio web es una Landing Page",
        icon: "📄",
        useCase: "Ideal para campañas publicitarias o promociones específicas.",
    },
    {
        title: "SPA (Single Page Application)",
        description:
            "Una SPA es una aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido según la interacción del usuario, ofreciendo una experiencia rápida y fluida.",
        icon: "🔄",
        useCase: "Recomendado para aplicaciones interactivas como redes sociales o dashboards.",
    },
    {
        title: "E-commerce",
        description:
            "Un E-commerce es una tienda en línea que permite la venta de productos o servicios a través de Internet, con procesos de pago, inventario y gestión de usuarios.",
        icon: "🛍️",
        useCase: "Perfecto para negocios que quieren vender productos o servicios en línea.",
    },
    {
        title: "Aplicación Web",
        description:
            "Una Aplicación Web es un software que funciona en el navegador y puede ofrecer funcionalidades complejas, como sistemas de gestión o plataformas de colaboración.",
        icon: "🌐",
        useCase: "Adecuado para empresas que necesitan soluciones personalizadas y complejas.",
    },
    {
        title: "Blog",
        description:
            "Un Blog es un sitio web donde se publican artículos y contenidos en orden cronológico, ideal para compartir conocimientos, noticias o actualizaciones.",
        icon: "📝",
        useCase: "Excelente para empresas que desean mejorar su visibilidad en buscadores y generar contenido de valor.",
    },
    {
        title: "SEO (Search Engine Optimization)",
        description:
            "El SEO es el proceso de optimizar un sitio web para que aparezca en los primeros resultados de búsqueda. Atrae tráfico orgánico y aumenta la visibilidad de la página.",
        icon: "🔍",
        useCase: "Esencial para cualquier sitio web que quiera atraer visitas a través de Google.",
    },
    {
        title: "Responsive Design",
        description:
            "Un diseño responsivo permite que un sitio web se adapte y funcione correctamente en cualquier dispositivo, como computadoras, tablets o smartphones.",
        icon: "📱",
        useCase: "Obligatorio para mejorar la experiencia de usuario en dispositivos móviles.",
    },
    {
        title: "Hosting",
        description:
            "El hosting es el servicio que proporciona el espacio en un servidor para almacenar un sitio web y hacerlo accesible en Internet.",
        icon: "💾",
        useCase: "Necesario para cualquier sitio que quiera estar en línea.",
    },
    {
        title: "Dominio",
        description:
            `El dominio es la dirección única que se escribe en el navegador para acceder a un sitio web, como www.tuempresa.cl`,
        icon: "🌐",
        useCase: "Importante para tener una presencia profesional y fácil de recordar.",
    },
    {
        title: "Analítica Web",
        description:
            "La analítica web recopila datos sobre las visitas y el comportamiento de los usuarios en el sitio web. Es útil para optimizar la experiencia y la estrategia de marketing.",
        icon: "📊",
        useCase: "Recomendado para monitorear y mejorar la efectividad del sitio web.",
    },
];

const Conceptos = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-center mb-8 text-white">
                Conceptos Clave
            </h2>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20">
                {glossaryTerms.map((term, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-200 transform hover:scale-105 flex flex-col h-full"
                    >
                        <div className="text-4xl mb-4">{term.icon}</div>
                        <h1 className="text-2xl font-bold mb-2 text-black">{term.title}</h1>
                        <p className="text-gray-600 mb-4">{term.description}</p>

                        {/* Caso de uso */}
                        <p className="text-left text-gray-700 font-semibold">
                            📌 Uso recomendado: {term.useCase}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Conceptos;

