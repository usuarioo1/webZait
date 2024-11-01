export default function AboutUsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Columna izquierda - Descripción de la empresa */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-white">Sobre Nosotros</h1>
                    <p className="text-lg text-gray-600">
                        Somos una empresa dedicada al desarrollo web y a crear soluciones tecnológicas de vanguardia. Nuestro enfoque está en proporcionar una excelente experiencia de usuario y desarrollar sitios de alto rendimiento adaptados a las necesidades de nuestros clientes.
                    </p>
                    <p className="text-lg text-gray-600">
                        Ofrecemos servicios de creación de sitios web corporativos, plataformas para empresas, sitios personales, ecommerce (tiendas en línea), páginas informativas, y mucho más. Nos aseguramos de que cada solución esté optimizada para brindar la mejor experiencia posible.
                    </p>
                </div>

                {/* Columna derecha - Servicios y Enfoque */}
                <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Nuestros Servicios</h2>
                    <ul className="space-y-4 text-gray-600">
                        <li>✅ Desarrollo de sitios web corporativos y portales empresariales</li>
                        <li>✅ Creación de tiendas online (ecommerce)</li>
                        <li>✅ Diseño y desarrollo de páginas personales y portafolios profesionales</li>
                        <li>✅ Desarrollo de blogs y plataformas de contenido</li>
                        <li>✅ Implementación de páginas informativas con interfaces intuitivas</li>
                        <li>✅ Creación de aplicaciones web interactivas y dinámicas</li>
                        <li>✅ Optimización y mejora de la experiencia de usuario en plataformas existentes</li>
                    </ul>
                    <p className="text-gray-600">
                        Nuestro objetivo es potenciar tu presencia digital mediante soluciones eficientes y de alto rendimiento, asegurando que cada sitio web se adapte a las necesidades específicas de cada cliente.
                    </p>
                </div>
            </div>
        </div>
    );
}
