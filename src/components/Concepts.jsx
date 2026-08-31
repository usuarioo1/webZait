'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaShoppingCart, FaBlog, FaSearch, FaMobileAlt, FaServer, FaGlobe, FaChartLine } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const glossaryTerms = [
    {
        title: "Landing Page",
        description:
            "Una Landing Page es una página web diseñada específicamente para captar la atención del usuario y guiarlo hacia una acción, como suscribirse o realizar una compra. Por ejemplo, este sitio web es una Landing Page",
        icon: <FaFileAlt />,
        useCase: "Ideal para campañas publicitarias o promociones específicas.",
    },
    {
        title: "SPA (Single Page Application)",
        description:
            "Una SPA es una aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido según la interacción del usuario, ofreciendo una experiencia rápida y fluida.",
        icon: <MdRefresh />,
        useCase: "Recomendado para aplicaciones interactivas como redes sociales o dashboards.",
    },
    {
        title: "E-commerce",
        description:
            "Un E-commerce es una tienda en línea que permite la venta de productos o servicios a través de Internet, con procesos de pago, inventario y gestión de usuarios.",
        icon: <FaShoppingCart />,
        useCase: "Perfecto para negocios que quieren vender productos o servicios en línea.",
    },
    {
        title: "Aplicación Web",
        description:
            "Una Aplicación Web es un software que funciona en el navegador y puede ofrecer funcionalidades complejas, como sistemas de gestión o plataformas de colaboración.",
        icon: <FaGlobe />,
        useCase: "Adecuado para empresas que necesitan soluciones personalizadas y complejas.",
    },
    {
        title: "Blog",
        description:
            "Un Blog es un sitio web donde se publican artículos y contenidos en orden cronológico, ideal para compartir conocimientos, noticias o actualizaciones.",
        icon: <FaBlog />,
        useCase: "Excelente para empresas que desean mejorar su visibilidad en buscadores y generar contenido de valor.",
    },
    {
        title: "SEO (Search Engine Optimization)",
        description:
            "El SEO es el proceso de optimizar un sitio web para que aparezca en los primeros resultados de búsqueda. Atrae tráfico orgánico y aumenta la visibilidad de la página.",
        icon: <FaSearch />,
        useCase: "Esencial para cualquier sitio web que quiera atraer visitas a través de Google.",
    },
    {
        title: "Responsive Design",
        description:
            "Un diseño responsivo permite que un sitio web se adapte y funcione correctamente en cualquier dispositivo, como computadoras, tablets o smartphones.",
        icon: <FaMobileAlt />,
        useCase: "Obligatorio para mejorar la experiencia de usuario en dispositivos móviles.",
    },
    {
        title: "Hosting",
        description:
            "El hosting es el servicio que proporciona el espacio en un servidor para almacenar un sitio web y hacerlo accesible en Internet.",
        icon: <FaServer />,
        useCase: "Necesario para cualquier sitio que quiera estar en línea.",
    },
    {
        title: "Dominio",
        description:
            `El dominio es la dirección única que se escribe en el navegador para acceder a un sitio web, como www.tuempresa.cl`,
        icon: <FaGlobe />,
        useCase: "Importante para tener una presencia profesional y fácil de recordar.",
    },
    {
        title: "Analítica Web",
        description:
            "La analítica web recopila datos sobre las visitas y el comportamiento de los usuarios en el sitio web. Es útil para optimizar la experiencia y la estrategia de marketing.",
        icon: <FaChartLine />,
        useCase: "Recomendado para monitorear y mejorar la efectividad del sitio web.",
    },
];

const Conceptos = () => {
    return (
        <section className="section-shell py-20 sm:py-24">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Conceptos Clave
            </motion.h2>
            <motion.div
                className="section-accent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {glossaryTerms.map((term, index) => (
                    <motion.div
                        key={index}
                        className="card-surface flex gap-5 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                    >
                        <div className="icon-tile">{term.icon}</div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{term.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-300">{term.description}</p>
                            <p className="mt-3 flex items-start gap-2 text-sm text-gray-300">
                                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-blue-400" />
                                <span>
                                    <strong className="font-semibold text-blue-300">Uso recomendado:</strong> {term.useCase}
                                </span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Conceptos;
