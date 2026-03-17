import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-logo">
                    <a href="#hero">[Incongo Art]</a>
                </div>
                <ul className="nav-menu">
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <div className="nav-social">
                    <a href="https://github.com/Incongo" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/jpablopintor" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/incongo_art" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:incongoart@gmail.com">
                        <Mail size={20} />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;