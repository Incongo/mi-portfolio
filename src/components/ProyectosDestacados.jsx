import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/ProyectosDestacados.css';

function ProyectosDestacados() {
    // Por ahora datos quemados (luego puedes conectarlos a GitHub API)
    const proyectos = [
        {
            id: 1,
            nombre: 'photostock',
            descripcion: 'Gestor de archivos fotográficos. Organización de imágenes clínicas.',
            tecnologias: ['PHP'],
            github: 'https://github.com/Incongo/photostock',
            demo: null
        },
        {
            id: 2,
            nombre: 'formacomempleo-laravel',
            descripcion: 'Plataforma de empleopara empresas y candidatos con Laravel.',
            tecnologias: ['Laravel', 'Blade', 'PHP'],
            github: 'https://github.com/Incongo/formacomempleo-laravel',
            demo: null
        },
        {
            id: 3,
            nombre: 'pokeapilocal',
            descripcion: 'Cliente web que consume la API de Pokémon.',
            tecnologias: ['JavaScript', 'API REST'],
            github: 'https://github.com/Incongo/pokeapilocal',
            demo: null
        },
        {
            id: 4,
            nombre: 'front-padel',
            descripcion: 'Aplicación frontend para gestión de pistas de pádel.',
            tecnologias: ['JavaScript'],
            github: 'https://github.com/Incongo/front-padel',
            demo: null
        },
        {
            id: 5,
            nombre: 'Hundiendo la flota en Java',
            descripcion: 'Aplicación en Java para creacion de partidas online de hundir la flota.',
            tecnologias: ['Java'],
            github: 'https://github.com/Incongo/HundiendoenJava',
            demo: null
        }
    ];

    return (
        <section id="proyectos" className="proyectos">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="proyectos-grid">
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="proyecto-card">
                        <div className="proyecto-header">
                            <h3 className="proyecto-titulo">{proyecto.nombre}</h3>
                            <div className="proyecto-links">
                                <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                        <div className="proyecto-tecnologias">
                            {proyecto.tecnologias.map(tech => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProyectosDestacados;