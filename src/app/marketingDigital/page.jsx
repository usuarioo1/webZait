'use client';
import { motion } from "framer-motion";
import Link from "next/link";

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
                className="text-center text-gray-300 mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Potencia tu presencia digital con campañas estratégicas en Meta (Facebook e Instagram)
            </motion.p>

            {/* Nota sobre inversión publicitaria */}
            <motion.div
                className="bg-blue-900/30 border border-blue-500 rounded-lg p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                     Información Importante
                </h3>
                <ul className="text-gray-300 space-y-2">
                    <li>• Los precios mostrados son por el servicio de gestión y configuración</li>
                    <li>• La inversión publicitaria en Meta se paga directamente a Facebook/Instagram</li>
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
                                <h3 className="text-sm font-semibold text-blue-300 mb-2">
                                     Incluye:
                                </h3>
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
