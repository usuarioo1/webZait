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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {planes.map((plan, index) => (
                    <motion.div
                        key={plan.nombre}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="p-6 bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-800">{plan.nombre}</h3>
                            <p className="text-3xl font-semibold text-gray-600 mt-2">{plan.precio}</p>
                        </div>
                        <div className="p-6 flex-grow">
                            <ul className="space-y-2 mb-4">
                                {plan.caracteristicas.map((caracteristica, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center text-gray-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    >
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className={caracteristicasComunes.includes(caracteristica) ? "" : "font-bold"}>
                                            {caracteristica}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 bg-gray-50">
                            <h4 className="text-lg font-semibold text-gray-800">Ideas</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                {plan.ideas.map((idea, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    >
                                        {idea}
                                    </motion.li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-9 w-full inline-flex justify-center items-center bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
                            >
                                Seleccionar Plan
                            </a>
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
