import Link from "next/link";
import React from "react";

const services = [
    {
        title: "Desarrollo Web",
        description:
            "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
        icon: "💻",
        link: 'desarrolloWeb',
        details: [
            "Desarrollo de sitios web corporativos y personales.",
            "Diseño de interfaces intuitivas y optimizadas.",
            "Integración de formularios de contacto, redes sociales, blogs y galerías.",
            "Optimización para SEO y rendimiento.",
            "Compatibilidad con dispositivos móviles."
        ]
    },
    {
        title: "E-commerce",
        description:
            "Diseñamos tiendas Online eficientes y escalables",
        icon: "🛒",
        link: 'ecommerce',
        details: [
            "Creación de tiendas online con procesos de compra simplificados.",
            "Integración de pasarelas de pago seguras (MercadoPago, PayPal, etc.)",
            "Gestión de inventario y control de stock.",
            "Desarrollo de perfiles de usuario y paneles de administración.",
            "Optimización de conversiones y experiencia de usuario."
        ]
    },
    {
        title: "Apps Web",
        description:
            "Aplicaciones web personalizadas",
        icon: "🚀",
        link: 'appweb',
        details: [
            "Desarrollo de aplicaciones web interactivas y a medida.",
            "Integración con APIs y servicios externos.",
            "Funcionalidades avanzadas como sistemas de chat, notificaciones en tiempo real.",
            "Optimización para rendimiento y escalabilidad.",
            "Diseño de backend y base de datos para manejo de datos complejo"
        ]
    },
];


const ServiceCards = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-64">
            <h2 className="text-white text-center text-6xl font-bold mb-8">servicios</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-200 transform hover:scale-105 flex flex-col h-full mt-14"
                >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h1 className="text-2xl font-bold mb-2 text-black">{service.title}</h1>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {/* Lista de detalles específicos */}
                    <ul className="text-left text-gray-700 space-y-2 mb-4">
                        {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>✅ {detail}</li>
                        ))}
                    </ul>
    
                    <div className="mt-auto">
                        <Link href={`/${service.link}`}>
                            <button className="w-full px-4 py-2 bg-black text-white rounded-md">
                                Más información
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default ServiceCards;
