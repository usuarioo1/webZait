'use client';
import { motion } from 'framer-motion';
import Link from "next/link";

export default function DesarrolloWeb() {
    const caracteristicasComunes = [
        "Enlaces a redes sociales",
        "Hosting y dominio por un año",
        "Certificado SSL",
        "Responsive design (se adapta a teléfonos y tablets)",
        "Diseño personalizado",
    ];

    const planes = [
        {
            nombre: "Básico",
            precio: "$ 120.000",
            caracteristicas: [
                "Diseño de una página",
                ...caracteristicasComunes
            ],
            ideas: [
                "Página personal para portafolio o CV",
                "Landing page de eventos o conferencias",
                "Página informativa para negocios pequeños"
            ],
        },
        {
            nombre: "Estándar",
            precio: "$ 150.000",
            caracteristicas: [
                "Hasta 3 vistas (rutas en la página)",
                ...caracteristicasComunes,
                "Formulario de contacto"
            ],
            ideas: [
                "Sitio para servicios profesionales con formulario de contacto",
                "Portafolio de proyectos con galerías",
                "Web de pequeños negocios con sección de servicios y contacto"
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                className="mb-6 text-4xl font-bold text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Desarrollo Web
            </motion.h1>
            <motion.p
                className="mb-8 text-lg text-center max-w-3xl mx-auto text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Son sitios simples y directos, normalmente de una sola página, con un diseño limpio y lo esencial: como enlaces a tus redes sociales. Botones de contacto directo. Perfectos para pequeños negocios o proyectos personales que buscan tener presencia online sin complicaciones.
            </motion.p>


            <motion.h2
                className="mb-6 text-3xl font-semibold text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Nuestros Planes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {planes.map((plan, index) => (
                    <motion.div
                        key={plan.nombre}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="text-center mb-4">
                                <h2 className="text-xl font-bold text-white mb-2">
                                    {plan.nombre}
                                </h2>
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold inline-block">
                                    {plan.precio}
                                </span>
                            </div>

                            <div className="mb-4 flex-grow">
                                <h3 className="text-sm font-semibold text-blue-300 mb-2">
                                    ✓ Incluye:
                                </h3>
                                <ul className="space-y-1">
                                    {plan.caracteristicas.map((caracteristica, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                                            <span className="text-green-400 mr-2 text-xs">✓</span>
                                            <span className={caracteristicasComunes.includes(caracteristica) ? "" : "font-bold"}>
                                                {caracteristica}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {plan.ideas && (
                                <div className="mt-4 bg-gray-800/50 rounded-lg p-3">
                                    <h3 className="text-sm font-semibold text-purple-300 mb-2">
                                        💡 Ideas:
                                    </h3>
                                    <ul className="space-y-1">
                                        {plan.ideas.map((idea, idx) => (
                                            <li key={idx} className="text-gray-300 text-xs flex items-start">
                                                <span className="text-purple-400 mr-2">→</span>
                                                {idea}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-4">
                                <a
                                    href={`https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Seleccionar Plan
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="flex justify-center text-white text-4xl font-bold mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                Ejemplos
            </motion.div>

            <motion.ul
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
            >
                <motion.li className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.6 }}>
                    <Link className="btn glass text-2xl text-white" href='https://landing-ejemplo-chocolateria.vercel.app/'>
                        Landing Page ejemplo
                    </Link>
                </motion.li>
                <motion.li className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.8 }}>
                    <Link className="btn glass text-2xl text-white mt-4" href='https://cv-test-two.vercel.app/'>
                        Cv Online
                    </Link>
                </motion.li>
                <motion.li className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 2 }}>
                    <Link className="btn glass text-2xl text-white mt-4" href='https://gallery-photography.vercel.app/'>
                        Portafolio Fotografía
                    </Link>
                </motion.li>
            </motion.ul>
        </div>
    );
}
