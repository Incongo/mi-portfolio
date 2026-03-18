import React from 'react';
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-greeting">Hola mundo, soy</span>
                    <span className="hero-name">[J. Pablo Pintor]</span>
                </h1>
                <h2 className="hero-subtitle">
                    Técnico en Audiovisual · Desarrollador Web Full Stack asistido por IA
                </h2>
                <p className="hero-description">
                    Creador de contenido y desarrollo web asistido por IA. Soluciones digitales integrales, desde el concepto hasta la parte visual, combinando diseño estratégico con mi experiencia en audiovisual.
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