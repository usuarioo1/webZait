"use client";
import { motion } from "framer-motion";

export default function AboutUsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Columna izquierda - Descripción de la empresa */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Sobre Nosotros
                    </motion.h1>
                    <motion.p
                        className="text-lg text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Somos una empresa dedicada al desarrollo web y a crear soluciones tecnológicas de vanguardia. Nuestro enfoque está en proporcionar una excelente experiencia de usuario y desarrollar sitios de alto rendimiento adaptados a las necesidades de nuestros clientes.
                    </motion.p>
                    <motion.p
                        className="text-lg text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Ofrecemos servicios de creación de sitios web corporativos, plataformas para empresas, sitios personales, ecommerce (tiendas en línea), páginas informativas, y mucho más. Nos aseguramos de que cada solución esté optimizada para brindar la mejor experiencia posible.
                    </motion.p>
                </motion.div>

                {/* Columna derecha - Servicios y Enfoque */}
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.ul
                        className="space-y-4 text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>✅ Desarrollo de sitios web corporativos y portales empresariales</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>✅ Creación de tiendas online (ecommerce)</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>✅ Diseño y desarrollo de páginas personales y portafolios profesionales</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>✅ Desarrollo de blogs y plataformas de contenido</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>✅ Implementación de páginas informativas con interfaces intuitivas</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>✅ Creación de aplicaciones web interactivas y dinámicas</motion.li>
                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>✅ Optimización y mejora de la experiencia de usuario en plataformas existentes</motion.li>
                    </motion.ul>
                    <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        Nuestro objetivo es potenciar tu presencia digital mediante soluciones eficientes y de alto rendimiento, asegurando que cada sitio web se adapte a las necesidades específicas de cada cliente.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
