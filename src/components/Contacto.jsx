import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import '../styles/Contacto.css';

function Contacto() {
    return (
        <section id="contacto" className="contacto">
            <h2 className="section-title">Contacto</h2>
            <div className="contacto-content">
                <p className="contacto-text">
                    ¿Hablamos? Cuéntame tu idea o proyecto. Estaré encantado de escucharte y ver cómo puedo ayudarte.
                </p>
                <div className="contacto-links">
                    <a href="mailto:incongoart@gmail.com" className="contacto-link">
                        <Mail size={24} />
                        <span>incongoart@gmail.com</span>
                    </a>
                    <a href="https://github.com/Incongo" target="_blank" rel="noopener noreferrer" className="contacto-link">
                        <Github size={24} />
                        <span>github.com/Incongo</span>
                    </a>
                    <a href="https://linkedin.com/in/jpablopintor" target="_blank" rel="noopener noreferrer" className="contacto-link">
                        <Linkedin size={24} />
                        <span>linkedin.com/in/jpablopintor</span>
                    </a>
                    <a href="https://www.instagram.com/incongo_art" target="_blank" rel="noopener noreferrer" className="contacto-link">
                        <Instagram size={24} />
                        <span>@incongo_art</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacto;