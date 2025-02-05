'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna izquierda - Contenido de texto */}
                <motion.div 
                    className="space-y-6" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-white">Ponte en contacto</h1>
                    <p className="text-lg text-white">
                        Nos encantaría saber de ti. Por favor, rellena este formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                </motion.div>

                {/* Columna derecha - Formulario de contacto */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg p-6 space-y-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form className="space-y-6" action="https://formsubmit.co/nicolasgonzalezmoller@gmail.com" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black mb-2 ml-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input input-bordered flex items-center gap-2 w-full bg-white text-black"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 ml-2 text-black">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input input-bordered flex items-center gap-2 w-full  bg-white text-black"
                                placeholder="Tu email"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2 ml-2 text-black">Asunto</label>
                            <input type="text"
                                id="subject"
                                name="subject"
                                className="input input-bordered flex items-center gap-2 w-full  bg-white text-black"
                                placeholder="Asunto" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 ml-2 text-black">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="input input-bordered flex items-center gap-2 w-full  bg-white text-black"
                                placeholder="Tu mensaje"
                            ></textarea>
                            <input type="hidden" name="_next" value="https://webzait.cl/contacto" />
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-block text-white"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>

                    {/* Botón de WhatsApp */}
                    <motion.a
                        href="https://wa.me/981512691?text=¡Hola!%20Estoy%20interesado%20en%20sus%20productos."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M6.171,43.556c-0.175,0.106-0.362,0.142-0.547,0.099c-0.163-0.034-0.304-0.111-0.423-0.219C5.12,43.331,5.081,43.205,5.121,43.095L7.759,33.46c-2.139-2.976-2.296-7.013-0.735-10.134c2.07-4.617,9.163-7.042,13.342-3.804c0.626,0.633,0.861,1.568,0.619,2.426c-0.105,0.368-0.313,0.674-0.589,0.886c-1.07,0.813-2.602,0.557-3.575-0.387c-0.181-0.186-0.363-0.373-0.545-0.558c-1.6-1.617-3.932-1.758-5.84-0.456c-2.516,1.506-3.579,4.225-3.102,6.845c0.476,2.642,2.393,4.539,4.791,4.523l2.314,9.072C6.409,43.543,6.281,43.553,6.171,43.556z"></path>
                        </svg>
                        Contactanos por WhatsApp
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
