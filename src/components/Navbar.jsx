'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const detailsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el clic fue fuera del navbar, cerrar el dropdown de detalles
            if (detailsRef.current && !detailsRef.current.contains(event.target)) {
                // Cerrar el details
                const detailsElement = detailsRef.current.querySelector('details[open]');
                if (detailsElement) {
                    detailsElement.removeAttribute('open');
                }
            }
        };

        // Agregar el event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const linkClass = "text-base font-medium text-white/80 transition-colors duration-200 hover:text-white";

    return (
        <nav className="navbar sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md" ref={detailsRef} aria-label="Navegación principal">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Abrir menú">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 rounded-box border border-white/10 bg-gray-900/95 p-2 shadow-xl backdrop-blur-md">
                        <li><Link href='/' className='text-white'>Inicio</Link></li>
                        <li>
                            <span className="text-white">Servicios</span>
                            <ul className="p-2">
                                <li><Link href='/desarrolloWeb' className='text-white'>Sitios Web</Link></li>
                                <li><Link href='/ecommerce' className='text-white'>E-commerce</Link></li>
                                <li><Link href='/appweb' className='text-white'>Aplicaciones Web</Link></li>
                                <li><Link href='/marketingDigital' className='text-white'>Marketing Digital</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/nosotros'>Sobre nosotros</Link></li>
                        <li><Link href='/contacto'>Contacto</Link></li>
                    </ul>
                </div>
                <Link href='/' className="flex items-center space-x-2.5">
                    <Image
                        src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1732492473/iWEB/h6yxpbcsbxg36wsbdrwq.ico"
                        alt="WebZait Logo"
                        width={40}
                        height={40}
                        priority
                        className="h-10 w-10 rounded-full"
                    />
                    {/* Texto visible solo en pantallas grandes */}
                    <span className="hidden font-heading text-xl font-bold tracking-tight text-white lg:block">WebZait</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                    <li><Link href='/' className={linkClass}>Inicio</Link></li>
                    <li>
                        <details>
                            <summary className={linkClass}>Servicios</summary>
                            <ul className="mt-2 w-48 rounded-box border border-white/10 bg-gray-900/95 p-2 shadow-xl backdrop-blur-md">
                                <li><Link href='/desarrolloWeb' className='text-white/80 hover:text-white'>Sitios Web</Link></li>
                                <li><Link href='/ecommerce' className='text-white/80 hover:text-white'>E-commerce</Link></li>
                                <li><Link href='/appweb' className='text-white/80 hover:text-white'>Aplicaciones Web</Link></li>
                                <li><Link href='/marketingDigital' className='text-white/80 hover:text-white'>Marketing Digital</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href='/nosotros' className={linkClass}>Sobre Nosotros</Link></li>
                    <li><Link href='/contacto' className={linkClass}>Contacto</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/contacto" className="btn-primary hidden px-5 py-2 text-sm lg:inline-flex">
                    Cotizar proyecto
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
