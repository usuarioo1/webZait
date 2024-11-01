export default function DesarrolloWeb() {
    const planes = [
        {
            nombre: "Básico",
            precio: "$ 100.000",
            caracteristicas: [
                "Diseño de una página",
                "Responsive design (se adapta a teléfonos y tablets)",
                "Hosting y dominio por un año",
                "Enlaces a redes sociales",
                "Certificado SSL"
            ],
            ideas: [
                "Página personal para portafolio o CV",
                "Landing page de eventos o conferencias",
                "Página informativa para negocios pequeños"
            ],
            ejemplos: [
                "Ejemplo de blog personal",
                "Ejemplo de landing page para eventos",
                "Ejemplo de sitio de presentación para productos"
            ]
        },
        {
            nombre: "Estándar",
            precio: "$ 150.000",
            caracteristicas: [
                "Hasta 3 vistas (rutas en la página)",
                "Diseño personalizado",
                "Enlaces a redes sociales",
                "Hosting y dominio por un año",
                "Formulario de contacto",
                "Certificado SSL"
            ],
            ideas: [
                "Sitio para servicios profesionales con formulario de contacto",
                "Portafolio de proyectos con galerías",
                "Web de pequeños negocios con sección de servicios y contacto"
            ],
            ejemplos: [
                "Ejemplo de sitio para fotógrafo",
                "Ejemplo de web de agencia de marketing",
                "Ejemplo de página de restaurante con menú en línea"
            ]
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-4xl font-bold text-center text-white">Desarrollo Web</h1>
            <p className="mb-8 text-lg text-center max-w-3xl mx-auto text-gray-200">
                Estos son sitios más sencillos, generalmente de una sola página, con un diseño básico y funcionalidad mínima, como enlaces a redes sociales. Son ideales para pequeñas empresas o proyectos personales que buscan una presencia básica en línea.
            </p>

            <h2 className="mb-6 text-3xl font-semibold text-center text-white">Nuestros Planes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {planes.map((plan) => (
                    <div key={plan.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <div className="p-6 bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-800">{plan.nombre}</h3>
                            <p className="text-3xl font-semibold text-gray-600 mt-2">{plan.precio}</p>
                        </div>
                        <div className="p-6 flex-grow">
                            <ul className="space-y-2 mb-4">
                                {plan.caracteristicas.map((caracteristica, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
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
                                        {caracteristica}
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-lg font-semibold text-gray-800 mt-4">Ideas</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                {plan.ideas.map((idea, index) => (
                                    <li key={index}>{idea}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto p-6 bg-gray-50">
                            <a
                                href={`https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20el%20plan%20${encodeURIComponent(plan.nombre)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex justify-center items-center bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300"
                            >
                                Seleccionar Plan
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
