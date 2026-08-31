import Link from "next/link"
import Image from "next/image"
import { FaBitcoin, FaEthereum } from "react-icons/fa"
import { SiChainlink } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-gray-950/60">
            <div className="section-shell py-14">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div>
                        <h2 className="font-heading text-xl font-bold tracking-tight text-white">WebZait</h2>
                        <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
                            Somos una empresa de tecnología moderna dedicada a crear soluciones innovadoras para empresas e
                            individuos.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">Aceptamos las siguientes criptomonedas</h2>
                        <div className="mt-5">
                            <Image
                                src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1727738308/apweb/uaon8rdv9yujayialvro.png"
                                alt="logo Mercado Pago"
                                width={220}
                                height={80}
                                sizes="220px"
                                className="h-auto w-44"
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap gap-6">
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaBitcoin className="text-2xl text-[#F7931A]" />
                                <span>Bitcoin</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaEthereum className="text-2xl text-[#627EEA]" />
                                <span>Ethereum</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <SiChainlink className="text-2xl text-[#2A5ADA]" />
                                <span>Chainlink</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">Contacto</h2>
                        <ul className="mt-5 space-y-3 text-gray-300">
                            <li>
                                <Link href="/contacto" className="transition-colors duration-200 hover:text-white">
                                    Solicitar cotización
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:webzaitcl@gmail.com" className="transition-colors duration-200 hover:text-white">
                                    webzaitcl@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/webzait.cl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-200 hover:text-white"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="text-sm text-gray-500">Servicios disponibles en Chile</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} WebZait. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
