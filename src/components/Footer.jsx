import Link from "next/link"
import Image from "next/image"
import { FaBitcoin, FaEthereum } from "react-icons/fa"
import { SiChainlink } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold text-white">Sobre Nosotros</h2>
                        <p className="text-gray-400">
                            Somos una empresa de tecnología moderna dedicada a crear soluciones innovadoras para empresas e
                            individuos.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1727738308/apweb/uaon8rdv9yujayialvro.png"
                            alt="logo Mercado Pago"
                            width={220}
                            height={80}
                            sizes="220px"
                            className="h-auto w-52"
                        />
                    </div>
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <h2 className="mb-6 text-2xl font-semibold text-white ml-28">Aceptamos las siguientes criptomonedas</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center">
                                <FaBitcoin className="text-4xl text-[#F7931A] mr-2" />
                                <span>Bitcoin</span>
                            </div>
                            <div className="flex items-center">
                                <FaEthereum className="text-4xl text-[#627EEA] mr-2" />
                                <span>Ethereum</span>
                            </div>
                            <div className="flex items-center">
                                <SiChainlink className="text-4xl text-[#2A5ADA] mr-2" />
                                <span>Chainlink</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/contacto" className="hover:text-white">Solicitar cotización</Link>
                    <a href="mailto:webzaitcl@gmail.com" className="hover:text-white">webzaitcl@gmail.com</a>
                    <a
                        href="https://www.instagram.com/webzait.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        Instagram
                    </a>
                    <span>Servicios disponibles en Chile</span>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} WebZait. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
