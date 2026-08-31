'use client'
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function AplicacionesWeb() {
    const planes = [
        {
            nombre: "Aplicación Web Básica",
            caracteristicas: [
                "Diseño personalizado",
                "Funciones Personalizadas",
                "Responsive para todos los dispositivos",
                "Sistema de autenticación de usuarios",
                "Base de datos simple",
                "Panel de administración básico",
                "Integración con APIs externas",
                "Alojamiento y dominio por 1 año",
                "Soporte técnico por 3 meses",
            ],
        },
        {
            nombre: "Aplicación Web Avanzada",
            caracteristicas: [
                "Todo lo incluido en el plan básico",
                "Arquitectura escalable",
                "Base de datos compleja y optimizada",
                "Sistema de roles y permisos avanzado",
                "Funcionalidades personalizadas complejas",
                "Integración con sistemas empresariales (ERP, CRM)",
                "Análisis de datos y reportes avanzados",
                "Optimización de rendimiento",
                "Testing exhaustivo y control de calidad",
                "Soporte técnico prioritario por 1 año",
            ],
        },
        {
            nombre: "Construcción de APIs",
            caracteristicas: [
                "Diseño y arquitectura RESTful",
                "Desarrollo de APIs a medida",
                "Documentación técnica completa",
                "Autenticación y seguridad (JWT, OAuth)",
                "Endpoints personalizados según necesidades",
                "Integración con bases de datos",
                "Versionado de API",
                "Pruebas unitarias y de integración",
                "Optimización de rendimiento y caching",
                "Soporte técnico y mantenimiento",
            ],
        },
    ];

    return (
        <div className="section-shell py-16 sm:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Aplicaciones Web a Medida
                </h1>
                <div className="section-accent" />
                <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
                    Este es el servicio más flexible, ya que implica desarrollos a medida con funcionalidades específicas que pueden incluir sistemas de usuarios, bases de datos complejas, y funcionalidades avanzadas.
                </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {planes.map((plan, index) => (
                    <motion.article
                        key={plan.nombre}
                        className="card-surface card-surface-hover flex flex-col p-6 sm:p-7"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-white">{plan.nombre}</h2>
                        </div>

                        <div className="mt-6 flex-grow">
                            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                                <FaCheckCircle className="text-sm text-blue-400" /> Incluye
                            </h3>
                            <ul className="mt-3 space-y-2.5">
                                {plan.caracteristicas.map((caracteristica, idx) => (
                                    <li key={idx} className="check-item">
                                        <FaCheckCircle className="check-icon" />
                                        <span>{caracteristica}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a
                                href={`https://wa.me/56981512691?text=¡Hola!%20Quiero%20cotizar%20el%20servicio%20de%20${encodeURIComponent(plan.nombre)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full"
                            >
                                Cotizar Servicio
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
