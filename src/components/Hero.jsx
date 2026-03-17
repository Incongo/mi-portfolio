import React from 'react';
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-greeting">Hola, soy</span>
                    <span className="hero-name">[J Pablo Pintor]</span>
                </h1>
                <h2 className="hero-subtitle">
                    Desarrollador Full Stack + Creativo Audiovisual
                </h2>
                <p className="hero-description">
                    Combino la precisión técnica del código con la sensibilidad artística
                    del mundo audiovisual. Creo experiencias digitales que cuentan historias.
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