'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import metaLogo from "@/assets/meta.png";

// Componentes de iconos de redes sociales
const InstagramIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const MetaIcon = ({ className = "w-6 h-6" }) => (
    <div className={className}>
        <Image src={metaLogo} alt="Meta" className="w-full h-full object-contain" />
    </div>
);

export default function MarketingDigital() {
    const servicios = [
        {
            nombre: "Configuración Orgánica",
            precio: "$ 80.000",
            descripcion: "Optimización completa de tus perfiles para alcance orgánico",
            caracteristicas: [
                "Configuración profesional de página de Facebook",
                "Optimización de perfil de Instagram Business",
                "Integración entre Facebook e Instagram",
                "Configuración de información de contacto y horarios",
                "Optimización de biografías y descripciones",
                "Vinculación con Meta Business Suite",
                "Capacitación básica de uso",
                "Guía de buenas prácticas",
            ],
            buenasPracticas: [
                "Publicar contenido regularmente (3-5 veces por semana)",
                "Usar historias diarias para mayor visibilidad",
                "Responder comentarios y mensajes en menos de 1 hora",
                "Usar hashtags relevantes (10-15 por publicación)",
                "Publicar en horarios de mayor actividad de tu audiencia"
            ]
        },
        {
            nombre: "Campaña Reconocimiento",
            precio: "$ 150.000 + inversión publicitaria",
            descripcion: "Ideal para dar a conocer tu marca o negocio",
            caracteristicas: [
                "Configuración de Meta Business Manager",
                "Creación de públicos personalizados",
                "Diseño de 3-5 piezas publicitarias",
                "Campaña optimizada para alcance",
                "Segmentación demográfica y geográfica",
                "Monitoreo diario de resultados",
                "Reporte semanal de métricas",
                "Optimización continua durante el mes",
                "Duración: 1 mes",
            ],
            objetivos: [
                "Aumentar el reconocimiento de marca",
                "Llegar a nuevas audiencias potenciales",
                "Generar recordación de marca",
                "Aumentar seguidores orgánicos"
            ]
        },
        {
            nombre: "Campaña Tráfico Web",
            precio: "$ 180.000 + inversión publicitaria",
            descripcion: "Dirige visitantes calificados a tu sitio web",
            caracteristicas: [
                "Configuración de Meta Business Manager",
                "Instalación y configuración de Meta Pixel",
                "Creación de públicos personalizados",
                "Diseño de 4-6 piezas publicitarias",
                "Campaña optimizada para clics al sitio web",
                "Segmentación por intereses y comportamientos",
                "Retargeting de visitantes web",
                "Monitoreo diario de resultados",
                "Reporte semanal de métricas",
                "Optimización continua durante el mes",
                "Duración: 1 mes",
            ],
            objetivos: [
                "Aumentar visitas al sitio web",
                "Generar tráfico calificado",
                "Crear audiencias de retargeting",
                "Mejorar posicionamiento SEO indirecto"
            ]
        },
        {
            nombre: "Campaña Conversiones",
            precio: "$ 220.000 + inversión publicitaria",
            descripcion: "Para generar ventas, leads o acciones específicas",
            caracteristicas: [
                "Configuración avanzada de Meta Business Manager",
                "Instalación y configuración de Meta Pixel completo",
                "Configuración de eventos de conversión",
                "Creación de públicos personalizados y similares",
                "Diseño de 5-8 piezas publicitarias (A/B testing)",
                "Campaña optimizada para conversiones",
                "Segmentación avanzada por intención de compra",
                "Retargeting avanzado (carrito abandonado, etc.)",
                "Monitoreo diario de resultados",
                "Reporte semanal detallado de métricas y ROI",
                "Optimización continua durante el mes",
                "Duración: 1 mes",
            ],
            objetivos: [
                "Generar ventas directas",
                "Captar leads calificados",
                "Aumentar conversiones específicas",
                "Maximizar el retorno de inversión (ROI)"
            ]
        },
        {
            nombre: "Campaña Interacción",
            precio: "$ 120.000 + inversión publicitaria",
            descripcion: "Aumenta la interacción con tu contenido y comunidad",
            caracteristicas: [
                "Configuración de Meta Business Manager",
                "Creación de públicos personalizados",
                "Diseño de 3-5 piezas publicitarias",
                "Campaña optimizada para interacción",
                "Segmentación de audiencias activas",
                "Monitoreo diario de resultados",
                "Estrategia de contenido interactivo",
                "Reporte semanal de métricas de engagement",
                "Duración: 1 mes",
            ],
            objetivos: [
                "Aumentar likes, comentarios y compartidos",
                "Generar comunidad activa",
                "Mejorar el engagement rate",
                "Crear contenido viral"
            ]
        },
    ];

    const serviciosAdicionales = [
        "Consultoría estratégica de marketing digital",
        "Análisis de competencia",
        "Creación de contenido visual profesional",
        "Gestión completa de redes sociales",
        "Informes personalizados avanzados",
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                className="mb-6 text-4xl font-bold text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Marketing Digital - Campañas Publicitarias
            </motion.h1>

            <motion.p
                className="text-center text-gray-300 mb-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Potencia tu presencia digital con campañas estratégicas en Meta (Facebook e Instagram)
            </motion.p>

            {/* Logos de plataformas */}
            <motion.div
                className="flex justify-center items-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
                    <InstagramIcon className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">Instagram</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
                    <FacebookIcon className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">Facebook</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg"> 
                    <Image src={metaLogo} alt="Meta" className="h-6 w-auto object-contain" />
                    <span className="text-gray-900 font-semibold">META</span>
                </div>
            </motion.div>

            {/* Nota sobre inversión publicitaria */}
            <motion.div
                className="bg-blue-900/30 border border-blue-500 rounded-lg p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-blue-300">
                        Información Importante
                    </h3>
                    <div className="flex gap-2">
                        <div className="bg-white rounded-full p-1">
                            <MetaIcon className="w-5 h-5" />
                        </div>
                        <FacebookIcon className="w-5 h-5 text-blue-400" />
                        <InstagramIcon className="w-5 h-5 text-blue-400" />
                    </div>
                </div>
                <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Los precios mostrados son por el servicio de gestión y configuración</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="bg-white rounded-full p-1 flex-shrink-0 mt-0.5">
                            <MetaIcon className="w-5 h-5" />
                        </div>
                        <span>La inversión publicitaria en <strong className="text-blue-300">Meta</strong> se paga directamente a <strong className="text-blue-300">Facebook/Instagram</strong></span>
                    </li>
                    <li>• Recomendamos presupuestos mínimos de $50.000-$100.000 COP mensuales para resultados óptimos</li>
                    <li>• Todos los servicios incluyen capacitación y reportes detallados</li>
                </ul>
            </motion.div>

            {/* Servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {servicios.map((servicio, index) => (
                    <motion.div
                        key={servicio.nombre}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="text-center mb-4">
                                <h2 className="text-xl font-bold text-white mb-2">
                                    {servicio.nombre}
                                </h2>
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold inline-block">
                                    {servicio.precio}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-4 text-sm italic text-center">
                                {servicio.descripcion}
                            </p>

                            <div className="mb-4 flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-sm font-semibold text-blue-300">
                                        Incluye:
                                    </h3>
                                    {(servicio.nombre.includes('Reconocimiento') || servicio.nombre.includes('Interacción')) && (
                                        <div className="flex gap-1">
                                            <InstagramIcon className="w-4 h-4 text-pink-400" />
                                            <FacebookIcon className="w-4 h-4 text-blue-400" />
                                        </div>
                                    )}
                                </div>
                                <ul className="space-y-1">
                                    {servicio.caracteristicas.map((caracteristica, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-gray-300 text-sm"
                                        >
                                            <span className="text-green-400 mr-2 text-xs">✓</span>
                                            <span>{caracteristica}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {servicio.objetivos && (
                                <div className="mt-4 bg-gray-800/50 rounded-lg p-3">
                                    <h3 className="text-sm font-semibold text-purple-300 mb-2">
                                        🎯 Objetivos:
                                    </h3>
                                    <ul className="space-y-1">
                                        {servicio.objetivos.map((objetivo, idx) => (
                                            <li key={idx} className="text-gray-300 text-xs flex items-start">
                                                <span className="text-purple-400 mr-2">→</span>
                                                {objetivo}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {servicio.buenasPracticas && (
                                <div className="mt-4 bg-green-900/20 rounded-lg p-3 border border-green-700">
                                    <h3 className="text-sm font-semibold text-green-300 mb-2">
                                        💡 Buenas Prácticas:
                                    </h3>
                                    <ul className="space-y-1">
                                        {servicio.buenasPracticas.map((practica, idx) => (
                                            <li key={idx} className="text-gray-300 text-xs flex items-start">
                                                <span className="text-green-400 mr-2">✓</span>
                                                {practica}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Servicios adicionales */}
            <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-6 mb-8 border border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-2xl font-bold text-white mb-4">
                    Servicios Adicionales Disponibles
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviciosAdicionales.map((servicio, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                            <span className="text-purple-400 mr-2">+</span>
                            {servicio}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <p className="text-gray-300 mb-4 text-lg">
                    ¿Listo para impulsar tu negocio en redes sociales?
                </p>
                <Link
                    href="/contacto"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                    Solicitar Cotización Personalizada
                </Link>
            </motion.div>

            {/* Footer note */}
            <motion.div
                className="mt-12 text-center text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <p>* Los resultados pueden variar según el sector, audiencia y presupuesto invertido</p>
                <p>* Servicios incluyen soporte durante la duración de la campaña</p>
            </motion.div>
        </div>
    );
}
