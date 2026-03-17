import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/ProyectosDestacados.css';

function ProyectosDestacados() {
    // Por ahora datos quemados (luego puedes conectarlos a GitHub API)
    const proyectos = [
        {
            id: 1,
            nombre: 'PhotoStock - Gestor de Fotografías',
            descripcion: 'Gestor minimalista de fotografías construido con CakePHP. Permite la subida de archivos, organización por carpetas y etiquetado múltiple. Diseñado pensando en fotógrafos que necesitan clasificar grandes volúmenes de imágenes clínicas o artísticas.',
            tecnologias: ['CakePHP', 'TailwindCSS', 'JavaScript'],
            github: 'https://github.com/Incongo/photostock',
            demo: null,
            caracteristicas: [
                'Subida de imágenes con renombrado único y validación básica',
                'Sistema de etiquetado múltiple (many-to-many) para clasificación',
                'CRUD completo para fotos y etiquetas',
                'Arquitectura MVC limpia con CakePHP',
                'Interfaz minimalista con TailwindCSS',
                'Migraciones de base de datos para despliegue reproducible'
            ]
        },
        {
            id: 2, // Ajusta según el orden final
            nombre: 'FormacomEmpleo - Portal de Empleo',
            descripcion: 'Plataforma completa de empleo desarrollada con Laravel que conecta empresas y candidatos. Gestiona ofertas, postulaciones, perfiles con roles diferenciados y subida de archivos. Ideal para entender flujos de trabajo complejos con autenticación y autorización.',
            tecnologias: ['Laravel', 'PHP', 'Blade'],
            github: 'https://github.com/Incongo/formacomempleo-laravel',
            demo: null,
            caracteristicas: [
                'Tres roles de usuario: Administrador, Empresa y Candidato, cada uno con su propio dashboard y permisos',
                'Registro diferenciado para empresas y candidatos',
                'Gestión completa de ofertas (CRUD) para empresas',
                'Sistema de postulaciones con mensajes y gestión de estados (pendiente/aceptada/rechazada)',
                'Filtros avanzados por estado, fecha y palabras clave',
                'Subida de fotos y CVs con almacenamiento público',
                'Middleware personalizado para control de acceso por roles'
            ]
        },
        {
            id: 3,
            nombre: 'front-padel - Plataforma de Reservas Deportivas',
            descripcion: 'Aplicación full stack para la gestión de pistas, horarios y reservas de pádel. Incluye autenticación JWT, roles de usuario y administrador, panel de control completo y un frontend moderno con React.',
            tecnologias: ['React', 'Python', 'Flask'],
            github: 'https://github.com/Incongo/front-padel',
            demo: 'https://incongo.github.io/front-padel/',
            caracteristicas: [
                'Frontend con React 19 y Vite para un desarrollo rápido y moderno',
                'Backend en Python con Flask, SQLAlchemy y autenticación JWT',
                'Sistema de roles: usuarios y administradores con diferentes permisos',
                'Panel de administración completo con CRUD de usuarios, pistas y horarios',
                'Filtrado de disponibilidad por fecha y franja horaria',
                'Selección de slots consecutivos para reservas flexibles',
                'Historial de reservas para cada usuario',
                'Despliegue del frontend en GitHub Pages (demo funcional)'
            ]
        },
        {
            id: 4,
            nombre: 'Pokedex Interactiva',
            descripcion: 'Pokédex web interactiva que consume la PokeAPI para mostrar información detallada de los Pokémon. Incluye tarjetas con efectos visuales, gráficos de estadísticas con Chart.js y una interfaz moderna y responsive.',
            tecnologias: ['JavaScript', 'HTML5', 'CSS'],
            github: 'https://github.com/Incongo/pokedex',
            demo: null,
            caracteristicas: [
                'Consumo completo de la PokeAPI para obtener datos en tiempo real',
                'Tarjetas interactivas con efectos "carta" y reflejos dinámicos (CSS avanzado)',
                'Gráficos de radar con Chart.js para visualizar estadísticas base',
                'Vistas diferenciadas: listado general y detalle individual',
                'Arquitectura modular con archivos JS separados por funcionalidad',
                'Diseño responsive y componentes reutilizables (header/footer)'
            ]
        },
        {
            id: 5,
            nombre: 'Battleship Online  - Java',
            descripcion: 'Aplicación web multijugador del clásico Hundir la Flota. Permite registro de usuarios, creación de partidas públicas/privadas y juego en tiempo real con validación completa de reglas y turnos.',
            tecnologias: ['Java', 'Spring', 'Thymeleaf', 'WebSockets'],
            github: 'https://github.com/Incongo/HundiendoenJava',
            demo: null,
            caracteristicas: [
                'Tablero 10x10 con 5 tipos de barcos',
                'Sistema de turnos y detección automática de fin de partida',
                'Registro/login de usuarios y estadísticas',
                'Salas de espera en tiempo real',
                'Arquitectura MVC con Spring Boot'
            ]
        },
        {
            id: 6,
            nombre: 'Incongogram - Red Social de Fotografías',
            descripcion: 'Red social centrada en la publicación y compartición de fotografías, desarrollada íntegramente en PHP nativo. Los usuarios pueden registrarse, subir imágenes, votar (con AJAX), comentar y gestionar su perfil personal.',
            tecnologias: ['PHP', 'JavaScript (AJAX)', 'CSS'],
            github: 'https://github.com/Incongo/formacombook',
            demo: null,
            caracteristicas: [
                'Sistema completo de autenticación: registro, login y edición de perfil',
                'Subida de imágenes con almacenamiento en servidor',
                'Sistema de votos (me gusta) implementado con AJAX para actualización asíncrona',
                'Comentarios y respuestas anidadas en cada fotografía',
                'CRUD completo para que los usuarios gestionen sus propias fotos (editar/eliminar)',
                'Arquitectura organizada con includes reutilizables y separación de lógica',
                'Base de datos MySQL con estructura relacional para usuarios, fotos, votos y comentarios'
            ]
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