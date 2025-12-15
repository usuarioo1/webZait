'use client'
import { motion } from "framer-motion";

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
        <div className="container mx-auto px-4 py-8">
            <motion.h1 
                className="mb-6 text-4xl font-bold text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Aplicaciones Web a Medida
            </motion.h1>
            <motion.p 
                className="text-center text-gray-300 mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Este es el servicio más flexible, ya que implica desarrollos a medida con funcionalidades específicas que pueden incluir sistemas de usuarios, bases de datos complejas, y funcionalidades avanzadas.
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
                            </div>

                            <div className="mb-4 flex-grow">
                                <h3 className="text-sm font-semibold text-blue-300 mb-2">
                                    ✓ Incluye:
                                </h3>
                                <ul className="space-y-1">
                                    {plan.caracteristicas.map((caracteristica, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                                            <span className="text-green-400 mr-2 text-xs">✓</span>
                                            <span>{caracteristica}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <a
                                    href={`https://wa.me/981512691?text=¡Hola!%20Quiero%20cotizar%20el%20servicio%20de%20${encodeURIComponent(plan.nombre)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Cotizar Servicio
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
