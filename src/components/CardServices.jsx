'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaRocket, FaBullhorn, FaCheckCircle } from "react-icons/fa";

const services = [
    {
        title: "Desarrollo Web",
        description:
            "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
        icon: <FaLaptopCode />,
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
        icon: <FaShoppingCart />,
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
        icon: <FaRocket />,
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
        icon: <FaBullhorn />,
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
        <section id="servicios" className="section-shell scroll-mt-24 py-20 sm:py-24">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Servicios
            </motion.h2>
            <motion.div
                className="section-accent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-400">
                Desde tu primer sitio web hasta aplicaciones a medida y campañas en Meta.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {services.map((service, index) => (
                    <motion.article
                        key={index}
                        className="card-surface card-surface-hover flex flex-col p-6 sm:p-8"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="icon-tile">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white sm:text-2xl">{service.title}</h3>
                        </div>
                        <p className="mt-4 text-gray-300">{service.description}</p>

                        <h4 className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                            <FaCheckCircle className="text-sm text-blue-400" /> Incluye
                        </h4>
                        <ul className="mt-3 space-y-2.5">
                            {service.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="check-item">
                                    <FaCheckCircle className="check-icon" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8">
                            <Link
                                href={`/${service.link}`}
                                className="btn-primary w-full"
                            >
                                Más información
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default ServiceCards;
