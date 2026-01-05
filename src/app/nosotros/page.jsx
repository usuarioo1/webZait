"use client";
import { motion } from "framer-motion";
import { FaBolt, FaDatabase, FaPalette, FaRocket, FaLightbulb } from "react-icons/fa";

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
                    {/* Foto Personal */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img 
                            src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1767054733/me/IMG_20251229_213135_yigsqy.jpg"
                            alt="Mi foto personal"
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl "
                        />
                    </motion.div>
                    
                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-white text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        ¡Hola! 
                    </motion.h1>
                    <motion.p
                        className="text-lg text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Mi curiosidad me impulsa a explorar constantemente nuevas herramientas, frameworks y tecnologías que me permitan crear soluciones innovadoras y eficientes.
                    </motion.p>
                    <motion.p
                        className="text-lg text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Me especializo en el desarrollo web full-stack, trabajando tanto con librerías populares como experimentales para encontrar siempre la mejor solución para cada proyecto. Disfruto del diseño y de crear experiencias de usuario excepcionales que combinen estética y funcionalidad.
                    </motion.p>
                    <motion.p
                        className="text-lg text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Actualmente estoy expandiendo mis conocimientos en desarrollo blockchain, porque creo firmemente en estar siempre un paso adelante y explorar las tecnologías del futuro.
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
                        Mi Stack Tecnológico
                    </motion.h2>
                    
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                                <FaBolt className="text-yellow-500 mr-2" /> Stack Principal
                            </h3>
                            <p className="text-gray-600">
                                <span className="font-medium">Next.js</span> para aplicaciones web modernas y escalables, 
                                <span className="font-medium"> Prisma</span> como ORM para gestión de bases de datos, y 
                                <span className="font-medium"> NestJS</span> para backends robustos. También desarrollo APIs desde cero cuando el proyecto lo requiere.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                                <FaDatabase className="text-blue-500 mr-2" /> Bases de Datos
                            </h3>
                            <p className="text-gray-600">
                                Experiencia tanto en <span className="font-medium">SQL</span> (PostgreSQL, MySQL) como <span className="font-medium">NoSQL</span> (MongoDB, Firebase). 
                                Selecciono la tecnología adecuada según los requerimientos específicos de cada proyecto.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                                <FaPalette className="text-pink-500 mr-2" /> Diseño & Frontend
                            </h3>
                            <p className="text-gray-600">
                                Manejo de las librerías más populares como React, Vue, y herramientas experimentales que me permiten crear interfaces 
                                únicas y atractivas. Siempre explorando nuevas tendencias en diseño web.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                                <FaRocket className="text-purple-500 mr-2" /> Actualmente Aprendiendo
                            </h3>
                            <p className="text-gray-600">
                                <span className="font-medium">Desarrollo Blockchain</span> - Expandiendo mis habilidades hacia las tecnologías descentralizadas 
                                y contratos inteligentes para estar preparado para el futuro de la web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-gray-600 pt-4 border-t border-gray-200 flex items-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <FaLightbulb className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Mi filosofía:</strong> Aprender constantemente, experimentar con nuevas tecnologías y crear soluciones que realmente aporten valor. 
                        Cuando trabajas conmigo, trabajas con alguien que se preocupa genuinamente por el éxito de tu proyecto.</span>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
