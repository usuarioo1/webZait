import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
                    <div>
                        <h2 className="mb-6 text-2xl font-semibold text-white">Sobre Nosotros</h2>
                        <p className="text-gray-400">
                            Somos una empresa de tecnología moderna dedicada a crear soluciones innovadoras para empresas e individuos.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img 
                            src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1727738308/apweb/uaon8rdv9yujayialvro.png" 
                            alt="logo Mercado Pago" 
                            className="h-26" // Ajusta la altura si es necesario
                        />
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} WebZait. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
