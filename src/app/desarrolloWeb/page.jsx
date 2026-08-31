'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExternalLinkAlt, FaLightbulb, FaArrowRight } from "react-icons/fa";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

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

    const ejemplos = [
        { label: "Landing Page ejemplo", href: "https://landing-ejemplo-chocolateria.vercel.app/" },
        { label: "Cv Online", href: "https://cv-test-two.vercel.app/" },
        { label: "Portafolio Fotografía", href: "https://gallery-photography.vercel.app/" },
    ];

    return (
        <div className="section-shell py-16 sm:py-20">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Desarrollo Web
                </h1>
                <div className="section-accent" />
                <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
                    Son sitios simples y directos, normalmente de una sola página, con un diseño limpio y lo esencial: como enlaces a tus redes sociales. Botones de contacto directo. Perfectos para pequeños negocios o proyectos personales que buscan tener presencia online sin complicaciones.
                </p>
            </motion.div>

            <motion.h2
                className="mt-16 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
                {...fadeUp}
                transition={{ duration: 0.6 }}
            >
                Nuestros Planes
            </motion.h2>
            <motion.div className="section-accent" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {planes.map((plan, index) => (
                    <motion.article
                        key={plan.nombre}
                        className="card-surface card-surface-hover flex flex-col p-6 sm:p-8"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-white">{plan.nombre}</h2>
                            <span className="mt-3 inline-block rounded-full bg-blue-600 px-5 py-1.5 text-lg font-semibold text-white shadow-lg shadow-blue-950/40">
                                {plan.precio}
                            </span>
                        </div>

                        <div className="mt-6 flex-grow">
                            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                                <FaCheckCircle className="text-sm text-blue-400" /> Incluye
                            </h3>
                            <ul className="mt-3 space-y-2.5">
                                {plan.caracteristicas.map((caracteristica, idx) => (
                                    <li key={idx} className="check-item">
                                        <FaCheckCircle className="check-icon" />
                                        <span className={caracteristicasComunes.includes(caracteristica) ? "" : "font-semibold text-white"}>
                                            {caracteristica}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {plan.ideas && (
                            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                                <h3 className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                                    <FaLightbulb className="text-purple-400" /> Ideas
                                </h3>
                                <ul className="mt-2.5 space-y-2">
                                    {plan.ideas.map((idea, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <FaArrowRight className="mt-1 shrink-0 text-[10px] text-purple-400" />
                                            {idea}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-8">
                            <a
                                href={`https://wa.me/56981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full"
                            >
                                Seleccionar Plan
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.h2
                className="mt-20 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
                {...fadeUp}
                transition={{ duration: 0.6 }}
            >
                Ejemplos
            </motion.h2>
            <motion.div className="section-accent" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {ejemplos.map((ejemplo, index) => (
                    <motion.a
                        key={ejemplo.label}
                        href={ejemplo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-surface card-surface-hover flex items-center justify-between gap-3 px-6 py-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                        <span className="font-semibold text-white">{ejemplo.label}</span>
                        <FaExternalLinkAlt className="shrink-0 text-sm text-blue-400" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
