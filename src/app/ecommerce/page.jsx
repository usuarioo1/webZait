'use client';
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Ecommerce() {
    const planes = [
        {
            nombre: "Tienda Básica",
            precio: "$ 450.000",
            caracteristicas: [
                "Hasta 50 productos",
                "Diseño responsivo",
                "Diseño personalizado",
                "Carrito de compras",
                "Integración con redes sociales",
                "Panel de administración",
                "Capacitación uso de Panel A.",
                "Certificado SSL",
                "Hosting y dominio por un año",
            ],
        },
        {
            nombre: "Tienda Avanzada",
            precio: "$ 850.000",
            caracteristicas: [
                "**Hasta 200 productos**",
                "Diseño responsivo",
                "Diseño personalizado",
                "Carrito de compras avanzado",
                "Integración con redes sociales",
                "Panel de administración",
                "Capacitación uso de Panel A.",
                "Confirmación de venta por Correo",
                "Certificado SSL",
                "Hosting y dominio por un año",
                "Soporte por correo",
            ],
        },
        {
            nombre: "Tienda Premium",
            precio: "$ 1.250.000",
            caracteristicas: [
                "**Productos ilimitados**",
                "Diseño responsivo",
                "Diseño personalizado",
                "Carrito de compras avanzado",
                "Integración con redes sociales",
                "Panel de administración",
                "Capacitación uso de Panel A.",
                "Confirmación de venta por Correo",
                "Certificado SSL",
                "Hosting y dominio por un año",
                "**Sistema de usuarios**",
                "**Múltiples pasarelas de pago**",
                "**Soporte prioritario 24/7**",
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
                <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Soluciones E-commerce
                </h1>
                <div className="section-accent" />
                <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
                    Este tipo de sitio incluye más funcionalidades, como la integración de carritos de compra, pasarelas de pago, y administración de productos.
                    El precio puede variar dependiendo del número de productos, la personalización del diseño, y las integraciones necesarias.
                    Todos los planes incluyen las secciones de <strong className="text-white">Sobre nosotros</strong>, <strong className="text-white">Contacto y Productos</strong>.
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
                                        <span className={caracteristica.startsWith("**") ? "font-semibold text-white" : ""}>
                                            {caracteristica.replace(/\*\*/g, "")}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

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
        </div>
    );
}
