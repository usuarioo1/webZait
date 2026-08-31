"use client";
import { motion } from "framer-motion";
import { FaBolt, FaDatabase, FaPalette, FaRocket, FaLightbulb } from "react-icons/fa";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="section-shell py-16 sm:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                {/* Columna izquierda - Descripción de la empresa */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Foto Personal */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1767054733/me/IMG_20251229_213135_yigsqy.jpg"
                            alt="Desarrollador de WebZait"
                            width={224}
                            height={224}
                            sizes="(min-width: 768px) 224px, 192px"
                            className="h-48 w-48 rounded-full border-4 border-white/15 object-cover shadow-xl shadow-black/50 md:h-56 md:w-56"
                        />
                    </motion.div>

                    <motion.h1
                        className="text-center text-4xl font-bold tracking-tight text-white sm:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Desarrollo web con enfoque personalizado
                    </motion.h1>
                    <motion.p
                        className="text-lg leading-relaxed text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Mi curiosidad me impulsa a explorar constantemente nuevas herramientas, frameworks y tecnologías que me permitan crear soluciones innovadoras y eficientes.
                    </motion.p>
                    <motion.p
                        className="text-lg leading-relaxed text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Me especializo en el desarrollo web full-stack, trabajando tanto con librerías populares como experimentales para encontrar siempre la mejor solución para cada proyecto. Disfruto del diseño y de crear experiencias de usuario excepcionales que combinen estética y funcionalidad.
                    </motion.p>
                    <motion.p
                        className="text-lg leading-relaxed text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Actualmente estoy expandiendo mis conocimientos en desarrollo blockchain, porque creo firmemente en estar siempre un paso adelante y explorar las tecnologías del futuro.
                    </motion.p>
                </motion.div>

                {/* Columna derecha - Servicios y Enfoque */}
                <motion.div
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900 p-6 shadow-lg shadow-black/40 space-y-6 sm:p-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Mi Stack Tecnológico
                    </motion.h2>

                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div>
                            <h3 className="mb-2 flex items-center font-semibold text-white">
                                <FaBolt className="mr-2 text-yellow-500" /> Stack Principal
                            </h3>
                            <p className="leading-relaxed text-gray-300">
                                <span className="font-medium text-white">Next.js</span> para aplicaciones web modernas y escalables,
                                <span className="font-medium text-white"> Prisma</span> como ORM para gestión de bases de datos, y
                                <span className="font-medium text-white"> NestJS</span> para backends robustos. También desarrollo APIs desde cero cuando el proyecto lo requiere.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 flex items-center font-semibold text-white">
                                <FaDatabase className="mr-2 text-blue-500" /> Bases de Datos
                            </h3>
                            <p className="leading-relaxed text-gray-300">
                                Experiencia tanto en <span className="font-medium text-white">SQL</span> (PostgreSQL, MySQL) como <span className="font-medium text-white">NoSQL</span> (MongoDB, Firebase).
                                Selecciono la tecnología adecuada según los requerimientos específicos de cada proyecto.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 flex items-center font-semibold text-white">
                                <FaPalette className="mr-2 text-pink-500" /> Diseño & Frontend
                            </h3>
                            <p className="leading-relaxed text-gray-300">
                                Manejo de las librerías más populares como React, Vue, y herramientas experimentales que me permiten crear interfaces
                                únicas y atractivas. Siempre explorando nuevas tendencias en diseño web.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 flex items-center font-semibold text-white">
                                <FaRocket className="mr-2 text-purple-500" /> Actualmente Aprendiendo
                            </h3>
                            <p className="leading-relaxed text-gray-300">
                                <span className="font-medium text-white">Desarrollo Blockchain</span> - Expandiendo mis habilidades hacia las tecnologías descentralizadas
                                y contratos inteligentes para estar preparado para el futuro de la web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.p
                        className="flex items-start border-t border-white/10 pt-5 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <FaLightbulb className="mr-2 mt-1 shrink-0 text-yellow-500" />
                        <span><strong className="text-white">Mi filosofía:</strong> Aprender constantemente, experimentar con nuevas tecnologías y crear soluciones que realmente aporten valor.
                            Cuando trabajas conmigo, trabajas con alguien que se preocupa genuinamente por el éxito de tu proyecto.</span>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
