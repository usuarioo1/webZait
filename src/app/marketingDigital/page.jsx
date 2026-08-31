'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import metaLogo from "@/assets/meta.png";
import { FaCheckCircle, FaBullseye, FaLightbulb, FaWhatsapp } from "react-icons/fa";

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
                "Instalación y configuración de Meta Pixel (sí hay sitio web)",
                "Creación de públicos personalizados",
                "Diseño de 4-6 piezas publicitarias",
                "Campaña optimizada para clics al sitio web",
                "Segmentación por intereses y comportamientos",
                "Retargeting de visitantes web",

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
        <div className="section-shell py-16 sm:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Marketing Digital - Campañas Publicitarias
                </h1>
                <div className="section-accent" />
                <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
                    Potencia tu presencia digital con campañas estratégicas en Meta (Facebook e Instagram)
                </p>
            </motion.div>

            {/* Logos de plataformas */}
            <motion.div
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2">
                    <InstagramIcon className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">Instagram</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2">
                    <FacebookIcon className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">Facebook</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                    <Image src={metaLogo} alt="Meta" className="h-5 w-auto object-contain" />
                    <span className="text-sm font-semibold text-gray-900">META</span>
                </div>
            </motion.div>

            {/* Nota sobre inversión publicitaria */}
            <motion.div
                className="mt-10 rounded-2xl border border-blue-500/30 bg-blue-950/30 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h2 className="text-xl font-semibold text-blue-300 sm:text-2xl">
                        Información Importante
                    </h2>
                    <div className="flex gap-2">
                        <div className="rounded-full bg-white p-1">
                            <MetaIcon className="w-4 h-4" />
                        </div>
                        <FacebookIcon className="w-4 h-4 text-blue-400" />
                        <InstagramIcon className="w-4 h-4 text-blue-400" />
                    </div>
                </div>
                <ul className="space-y-2.5 text-gray-300">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>Los precios mostrados son por el servicio de gestión y configuración</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>La inversión publicitaria en <strong className="text-blue-300">Meta</strong> se paga directamente a <strong className="text-blue-300">Facebook/Instagram</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>Recomendamos presupuestos mínimos de $50.000-$100.000 CLP mensuales para resultados óptimos</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>Todos los servicios incluyen capacitación y reportes detallados</span>
                    </li>
                </ul>
            </motion.div>

            {/* Servicios */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicios.map((servicio, index) => (
                    <motion.article
                        key={servicio.nombre}
                        className="card-surface card-surface-hover flex flex-col p-6"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                    >
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-white">{servicio.nombre}</h2>
                            <span className="mt-3 inline-block rounded-full bg-blue-600 px-4 py-1.5 text-base font-semibold text-white shadow-lg shadow-blue-950/40">
                                {servicio.precio}
                            </span>
                            <p className="mt-3 text-sm italic text-gray-400">
                                {servicio.descripcion}
                            </p>
                        </div>

                        <div className="mt-5 flex-grow">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                                    <FaCheckCircle className="text-sm text-blue-400" /> Incluye
                                </h3>
                                {(servicio.nombre.includes('Reconocimiento') || servicio.nombre.includes('Interacción')) && (
                                    <div className="flex gap-1.5">
                                        <InstagramIcon className="w-4 h-4 text-pink-400" />
                                        <FacebookIcon className="w-4 h-4 text-blue-400" />
                                    </div>
                                )}
                            </div>
                            <ul className="mt-3 space-y-2">
                                {servicio.caracteristicas.map((caracteristica, idx) => (
                                    caracteristica && (
                                        <li key={idx} className="check-item">
                                            <FaCheckCircle className="check-icon" />
                                            <span>{caracteristica}</span>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>

                        {servicio.objetivos && (
                            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                                <h3 className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                                    <FaBullseye className="text-purple-400" /> Objetivos
                                </h3>
                                <ul className="mt-2.5 space-y-1.5">
                                    {servicio.objetivos.map((objetivo, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                            <span className="mt-1 text-purple-400">→</span>
                                            {objetivo}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {servicio.buenasPracticas && (
                            <div className="mt-5 rounded-xl border border-green-700/40 bg-green-950/20 p-4">
                                <h3 className="flex items-center gap-2 text-sm font-semibold text-green-300">
                                    <FaLightbulb className="text-green-400" /> Buenas Prácticas
                                </h3>
                                <ul className="mt-2.5 space-y-1.5">
                                    {servicio.buenasPracticas.map((practica, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                                            <FaCheckCircle className="mt-0.5 shrink-0 text-[10px] text-green-400" />
                                            {practica}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>

            {/* Servicios adicionales */}
            <motion.div
                className="mt-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-blue-950/30 p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-white">
                    Servicios Adicionales Disponibles
                </h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {serviciosAdicionales.map((servicio, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                            <span className="mr-2 text-purple-400">+</span>
                            {servicio}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p className="text-lg font-semibold text-white">
                    ¿Listo para impulsar tu negocio en redes sociales?
                </p>
                <p className="mt-2 text-gray-400">
                    Contáctanos directamente y comienza a hacer crecer tu marca hoy mismo
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <a
                        href="https://wa.me/56981512691?text=Hola,%20me%20interesa%20contratar%20servicios%20de%20Marketing%20Digital%20en%20Meta%20(Facebook%20e%20Instagram)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:from-green-600 hover:to-green-700 hover:shadow-green-500/40"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span className="whitespace-nowrap">Escríbenos por WhatsApp</span>
                    </a>
                    <a
                        href="https://www.instagram.com/webzait.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/40"
                    >
                        <InstagramIcon className="text-2xl" />
                        <span className="whitespace-nowrap">Síguenos en Instagram</span>
                    </a>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    @webzait.cl - Respuesta inmediata en horario laboral
                </p>
            </motion.div>

            {/* Footer note */}
            <motion.div
                className="mt-12 text-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p>* Los resultados pueden variar según el sector, audiencia y presupuesto invertido</p>
                <p>* Servicios incluyen soporte durante la duración de la campaña</p>
            </motion.div>
        </div>
    );
}
