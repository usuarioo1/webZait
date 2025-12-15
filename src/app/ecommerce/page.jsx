'use client';
import { motion } from "framer-motion";

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
        <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1 
                    className="text-4xl font-extrabold text-white text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Soluciones E-commerce
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Este tipo de sitio incluye más funcionalidades, como la integración de carritos de compra, pasarelas de pago, y administración de productos. 
                    El precio puede variar dependiendo del número de productos, la personalización del diseño, y las integraciones necesarias.
                    Todos los planes incluyen las secciones de <strong className="text-white">Sobre nosotros</strong>, <strong className="text-white">Contacto y Productos</strong>.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                                                <span className={caracteristica.startsWith("**") ? "font-bold" : ""}>
                                                    {caracteristica.replace(/\*\*/g, "")}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

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
            </div>
        </div>
    );
}
