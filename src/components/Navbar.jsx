'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='text-white'><Link href='/'>Inicio</Link></li>
                        <li>
                            <a>Servicios</a>
                            <ul className="p-2">
                                <li className='text-white'><Link href='desarrolloWeb'>Sitios Web</Link></li>
                                <li className='text-white'><Link href='ecommerce'>E-commerce</Link></li>
                                <li className='text-white'><Link href='appweb'>Aplicaciones Web</Link></li>
                            </ul>
                        </li>
                        <li className='text-white' ><Link href='nosotros'>Sobre nosotros</Link></li>
                        <li className='text-white'><Link href='contacto'>Contacto</Link></li>
                    </ul>
                </div>
                <Link href='/' className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1732492473/iWEB/h6yxpbcsbxg36wsbdrwq.ico"
                        alt="WebZait Logo"
                        width={32}
                        height={32}
                        className="h-20 w-24 rounded-full"
                    />
                    {/* Texto visible solo en pantallas grandes */}
                    <span className="hidden lg:block text-2xl text-white">WebZait</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link href='/'>
                        <li><p className='text-2xl text-white'>Inicio</p></li>
                    </Link>
                    <li>
                        <details>
                            <summary className='text-2xl text-white'>Servicios</summary>
                            <ul className="p-2 bg-black w-36">
                                <li className='text-white'><Link href='desarrolloWeb'>Sitios Web</Link></li>
                                <li className='text-white'><Link href='ecommerce'>E-commerce</Link></li>
                                <li className='text-white'><Link href='appweb'>Aplicaciones Web</Link></li>
                            </ul>
                        </details>
                    </li>
                    <Link href={'nosotros'}><li><p className='text-2xl text-white '>Sobre Nosotros</p></li></Link>
                    <Link href='contacto'><li><p className='text-2xl text-white'>Contacto</p></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    )
}

export default Navbar
