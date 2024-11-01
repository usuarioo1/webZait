export default function AplicacionesWeb() {
    const planes = [
        {
            nombre: "Aplicación Web Básica",
            precio: "$ Desde 1.500.000",
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
            ideas: [
                "Sitio web para pequeñas empresas",
                "Portafolio en línea",
                "Aplicación simple para gestión de tareas",
            ],
            ejemplos: [
                "Ejemplo de página de presentación",
                "Ejemplo de sitio de comercio electrónico básico",
                "Ejemplo de blog personal",
            ],
        },
        {
            nombre: "Aplicación Web Avanzada",
            precio: "Desde $ 3.000.000",
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
            ]
        },
    ];

    return (
        <div className="bg-gradient-to-b from-purple-100 to-purple-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-purple-900 text-center mb-8">Aplicaciones Web a Medida</h1>
                <p className="text-xl text-purple-800 text-center max-w-3xl mx-auto mb-12">
                    Este es el servicio más flexible, ya que implica desarrollos a medida con funcionalidades específicas que pueden incluir sistemas de usuarios, bases de datos complejas, y funcionalidades avanzadas. Este precio es más negociable y depende en gran medida de los requisitos específicos del cliente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {planes.map((plan) => (
                        <div key={plan.nombre} className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
                            <div className="px-6 py-8 sm:p-10 sm:pb-6 bg-gradient-to-r from-purple-500 to-indigo-600">
                                <h3 className="text-2xl leading-8 font-extrabold text-white sm:text-3xl sm:leading-9">
                                    {plan.nombre}
                                </h3>
                                <p className="mt-4 text-3xl leading-10 font-extrabold text-white">
                                    {plan.precio}
                                </p>
                            </div>
                            <div className="px-6 pt-6 pb-8 sm:px-10 sm:pt-6 sm:pb-8 flex-grow">
                                <ul className="space-y-4">
                                    {plan.caracteristicas.map((caracteristica, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base leading-6 text-gray-700">{caracteristica}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Botón fijo en la parte inferior de la tarjeta */}
                            <div className="px-6 pb-6">
                                <a
                                    href={`https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 border border-transparent rounded-md py-3 px-5 text-base leading-6 font-medium text-white hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                                >
                                    Solicitar Presupuesto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
