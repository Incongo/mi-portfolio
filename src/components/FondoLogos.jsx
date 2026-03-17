// src/components/FondoLogos.jsx
import React, { useEffect, useState } from 'react';
import '../styles/FondoLogos.css';

function FondoLogos() {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        const logosList = [
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP', size: 45, speed: 18 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-plain.svg', alt: 'CakePHP', size: 50, speed: 22 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript', size: 40, speed: 15 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg', alt: 'Java', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg', alt: 'JSON', size: 35, speed: 17 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', alt: 'MySQL', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL', size: 45, speed: 21 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python', size: 45, speed: 23 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', alt: 'SQLite', size: 40, speed: 16 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg', alt: 'HTML5', size: 45, speed: 18 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', alt: 'CSS3', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind', size: 50, speed: 22 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js', size: 50, speed: 19 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', alt: 'Docker', size: 55, speed: 24 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', alt: 'VS Code', size: 40, speed: 15 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg', alt: 'IntelliJ', size: 45, speed: 18 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', alt: 'Laravel', size: 45, speed: 20 },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laraveljetstream/laraveljetstream-original.svg', alt: 'Jetstream', size: 50, speed: 22 },
        ];

        // Generar posiciones evitando superposición
        const generarPosicionUnica = (existentes, intentos = 0) => {
            if (intentos > 100) return null; // Seguridad para evitar bucle infinito

            const nuevaPos = {
                top: `${Math.random() * 90 + 5}%`, // Entre 5% y 95%
                left: `${Math.random() * 90 + 5}%`, // Entre 5% y 95%
            };

            // Verificar que no esté demasiado cerca de otras posiciones
            const muyCerca = existentes.some(logo => {
                const topDiff = Math.abs(parseFloat(nuevaPos.top) - parseFloat(logo.top));
                const leftDiff = Math.abs(parseFloat(nuevaPos.left) - parseFloat(logo.left));
                return topDiff < 8 && leftDiff < 8; // Separación mínima del 8%
            });

            if (muyCerca) {
                return generarPosicionUnica(existentes, intentos + 1);
            }

            return nuevaPos;
        };

        // Crear logos con posiciones únicas
        const logosConPosicion = [];
        logosList.forEach((logo, index) => {
            const posicion = generarPosicionUnica(logosConPosicion);
            if (posicion) {
                logosConPosicion.push({
                    ...logo,
                    id: `${logo.alt}-${index}-${Math.random()}`,
                    ...posicion,
                    animationDelay: `${Math.random() * 12}s`,
                    rotation: Math.random() * 360,
                    scale: 0.8 + Math.random() * 0.7,
                });
            }
        });

        // Añadir algunos duplicados pero con posiciones también únicas
        const duplicados = [...logosList.slice(0, 5)].forEach((logo, index) => {
            const posicion = generarPosicionUnica(logosConPosicion);
            if (posicion) {
                logosConPosicion.push({
                    ...logo,
                    id: `${logo.alt}-dup-${index}-${Math.random()}`,
                    ...posicion,
                    animationDelay: `${Math.random() * 12}s`,
                    rotation: Math.random() * 360,
                    scale: 0.8 + Math.random() * 0.7,
                });
            }
        });

        setLogos(logosConPosicion);
    }, []);

    return (
        <div className="fondo-logos">
            {logos.map((logo) => (
                <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-flotante"
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