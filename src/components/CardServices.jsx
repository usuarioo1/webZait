'use client'
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
    {
        title: "Marketing Digital",
        description:
            "Campañas publicitarias en Meta (Facebook e Instagram)",
        icon: "📢",
        link: 'marketingDigital',
        details: [
            "Configuración profesional de Facebook e Instagram",
            "Creación de campañas publicitarias para diferentes objetivos.",
            "Configuración de Meta Business Suite y Meta Pixel.",
            "Segmentación avanzada y retargeting."
        ]
    },
];


const ServiceCards = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-64">
            <motion.h2 
                className="text-white text-center text-6xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                servicios
            </motion.h2>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 flex flex-col h-full mt-14"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="text-center mb-4">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h1 className="text-2xl font-bold mb-2 text-white">{service.title}</h1>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                            </div>
                            
                            {/* Lista de detalles específicos */}
                            <div className="mb-4 flex-grow">
                                <h3 className="text-sm font-semibold text-blue-300 mb-2">
                                    ✓ Incluye:
                                </h3>
                                <ul className="text-left space-y-2 mb-4">
                                    {service.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start text-gray-300 text-sm">
                                            <span className="text-green-400 mr-2 text-xs">✓</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
            
                            <div className="mt-auto">
                                <Link href={`/${service.link}`}>
                                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                                        Más información
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
