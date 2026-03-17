import React from 'react';
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-greeting">Hola, soy</span>
                    <span className="hero-name">[J. Pablo Pintor]</span>
                </h1>
                <h2 className="hero-subtitle">
                    Técnico en Audiovisual · Desarrollador Web Full Stack Junior
                </h2>
                <p className="hero-description">
                    Durante 7 años he documentado cientos de cirugías y casos clínicos para
                    distintas clínicas dentales. Ahora, desarrollo las herramientas web que el sector necesita.
                    Combino la precisión técnica del código con el ojo experto del fotógrafo
                    especializado para crear soluciones digitales únicas.
                </p>
                <div className="hero-buttons">
                    <a href="#contacto" className="btn btn-primary">Trabajemos juntos</a>
                    <a href="#experiencia" className="btn btn-secondary">Ver trayectoria</a>
                </div>
            </div>
            <div className="hero-scroll">
                <a href="#experiencia">
                    <ArrowDown size={24} />
                </a>
            </div>
        </section>
    );
}

export default Hero;