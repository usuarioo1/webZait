import React from 'react'

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/dpbpyzl96/image/upload/v1724809911/iWEB/hpf22m3h6kwnl7atadl0.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">WebZait</h1>
                    
                    <p className="mb-5 text-3xl text-white">
                    "Sitios web de alto rendimiento, totalmente personalizados para tu negocio. Diseñamos y desarrollamos soluciones digitales únicas, optimizadas para ofrecer la mejor experiencia a tus usuarios y llevar tu proyecto al siguiente nivel."
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    )
}

export default Hero
