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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {planes.map((plan, index) => (
                        <motion.div
                        key={plan.nombre}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                    
                            <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
                                <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                                    {plan.nombre}
                                </h3>
                                <p className="mt-4 text-3xl leading-10 font-extrabold text-indigo-600">
                                    {plan.precio}
                                </p>
                                <ul className="space-y-4 mt-6">
                                    {plan.caracteristicas.map((caracteristica, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className={`ml-3 text-base leading-6 text-gray-700 ${caracteristica.startsWith("**") ? "font-bold" : ""}`}>
                                                {caracteristica.replace(/\*\*/g, "")}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-auto px-6 pb-6 sm:px-10">
                                <motion.a
                                    href={`https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-base leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-75 ease-in-out"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Seleccionar Plan
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
