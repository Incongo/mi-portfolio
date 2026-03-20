import React, { useEffect, useState } from 'react';
import '../styles/FondoLogos.css';

function FondoLogos() {
    const [logos, setLogos] = useState([]);
    const [mostrarLogos, setMostrarLogos] = useState(false);

    useEffect(() => {
        // Lista de logos 
        const logosList = [
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP', size: 45, speed: 18 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-plain.svg', alt: 'CakePHP', size: 50, speed: 22 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript', size: 40, speed: 15 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg', alt: 'Java', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python', size: 45, speed: 23 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg', alt: 'HTML5', size: 45, speed: 18 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', alt: 'CSS3', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind', size: 50, speed: 22 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', alt: 'Docker', size: 55, speed: 24 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', alt: 'Laravel', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg', alt: 'Illustrator', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg', alt: 'Premiere Pro', size: 50, speed: 25 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', alt: 'Photoshop', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React', size: 45, speed: 18 },
        ];

        const generarPosicionUnica = (existentes, intentos = 0) => {
            if (intentos > 100) return null;
            const nuevaPos = {
                top: `${Math.random() * 90 + 5}%`,
                left: `${Math.random() * 90 + 5}%`,
            };
            const muyCerca = existentes.some(logo => {
                const topDiff = Math.abs(parseFloat(nuevaPos.top) - parseFloat(logo.top));
                const leftDiff = Math.abs(parseFloat(nuevaPos.left) - parseFloat(logo.left));
                return topDiff < 8 && leftDiff < 8;
            });
            if (muyCerca) return generarPosicionUnica(existentes, intentos + 1);
            return nuevaPos;
        };

        const logosConPosicion = [];
        logosList.forEach((logo, index) => {
            const posicion = generarPosicionUnica(logosConPosicion);
            if (posicion) {
                logosConPosicion.push({
                    ...logo,
                    id: `${logo.alt}-${index}-${Math.random()}`,
                    ...posicion,
                    animationDelay: `${Math.random() * 12}s`,
                    rotation: (Math.random() * 30) - 15, // -15° a +15°
                    scale: 0.7 + Math.random() * 0.6, // Ajustado para mejor variedad
                });
            }
        });

        setLogos(logosConPosicion);

        // 🎯 Pequeño retraso para que React termine de renderizar
        requestAnimationFrame(() => {
            const timer = setTimeout(() => {
                setMostrarLogos(true);
            }, 1000); // 1 segundo de retraso
            return () => clearTimeout(timer);
        });
    }, []);

    return (
        <div className={`fondo-logos ${mostrarLogos ? 'visible' : ''}`}>
            {logos.map((logo) => (
                <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-flotante"
                    loading="lazy" // ← Añadido para mejorar rendimiento
                    style={{
                        top: logo.top,
                        left: logo.left,
                        width: `${logo.size}px`,
                        height: 'auto',
                        animationDelay: logo.animationDelay,
                        animationDuration: `${logo.speed}s`,
                        transform: `rotate(${logo.rotation}deg) scale(${logo.scale})`,
                    }}
                />
            ))}
        </div>
    );
}

export default FondoLogos;