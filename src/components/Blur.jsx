'use client'
import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
    text = 'Sitios web de alto rendimiento, totalmente personalizados para tu negocio. Diseñamos y desarrollamos soluciones digitales únicas, optimizadas para ofrecer la mejor experiencia a tus usuarios y llevar tu proyecto al siguiente nivel.',
    delay = 50,
    className = 'text-white text-4xl text-center',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = 'easeOutCubic',
    onAnimationComplete,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = [
        {
            filter: 'blur(5px)',
            opacity: 0.5,
            transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
        },
        { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        elements.length,
        elements.map((_, i) => ({
            from: animationFrom || defaultFrom,
            to: inView
                ? async (next) => {
                    for (const step of (animationTo || defaultTo)) {
                        await next(step);
                    }
                    animatedCount.current += 1;
                    if (animatedCount.current === elements.length && onAnimationComplete) {
                        onAnimationComplete();
                    }
                }
                : animationFrom || defaultFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <div className="flex justify-center items-center px-6 mt-20">
            <div className="border-x-4 border-white px-6 py-4 max-w-6xl text-center">
                <p ref={ref} className={`blur-text ${className} flex flex-wrap justify-center`}>
                    {springs.map((props, index) => (
                        <animated.span
                            key={index}
                            style={props}
                            className="inline-block transition-transform will-change-[transform,filter,opacity]"
                        >
                            {elements[index] === ' ' ? '\u00A0' : elements[index]}
                            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                        </animated.span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default BlurText;
