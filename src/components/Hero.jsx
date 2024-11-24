import React from 'react';

const Hero = () => {
    return (
        <section
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/dpbpyzl96/image/upload/v1732489927/portafolio-fotografia/ng3r4k10zdxglklaosa1.jpg)`,
            }}
            aria-label="Hero section for WebZait, specializing in high-performance web design and development."
        >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white" aria-label="WebZait - sitios web de alto rendimiento">WebZait</h1>

                    <p className="mb-5 text-3xl text-white" aria-label="paginas web personzalizadas para cada necesidad">
                        Sitios web de alto rendimiento, totalmente personalizados para tu negocio. Diseñamos y desarrollamos soluciones digitales únicas, optimizadas para ofrecer la mejor experiencia a tus usuarios y llevar tu proyecto al siguiente nivel.
                    </p>

                    {/* Botón comentado para activarse en el futuro si es necesario */}
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
