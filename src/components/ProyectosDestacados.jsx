import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/ProyectosDestacados.css';
import form1 from '../assets/proyectos/form1.png';
import form2 from '../assets/proyectos/form2.png';
import form3 from '../assets/proyectos/form3.png';
import poke1 from '../assets/proyectos/poke1.png';
import poke2 from '../assets/proyectos/poke2.png';
import poke3 from '../assets/proyectos/poke3.png';
import hund1 from '../assets/proyectos/hund1.png';
import hund2 from '../assets/proyectos/hund2.png';
import hund3 from '../assets/proyectos/hund3.png';
import padel1 from '../assets/proyectos/padel1.png';
import padel2 from '../assets/proyectos/padel2.png';
import padel3 from '../assets/proyectos/padel3.png';
import ins1 from '../assets/proyectos/ins1.png';
import ins2 from '../assets/proyectos/ins2.png';
function ProyectosDestacados() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [imagenModal, setImagenModal] = useState('');
    const [tituloModal, setTituloModal] = useState('');

    const abrirModal = (imgSrc, titulo) => {
        setImagenModal(imgSrc);
        setTituloModal(titulo);
        setModalAbierto(true);
    };

    const proyectos = [
        {
            id: 1,
            nombre: 'PhotoStock - Gestor de Fotografías',
            descripcion: 'Gestor minimalista de fotografías construido con CakePHP. Permite la subida de archivos, organización por carpetas y etiquetado múltiple. Diseñado pensando en fotógrafos que necesitan clasificar grandes volúmenes de imágenes clínicas o artísticas.',
            tecnologias: ['CakePHP', 'TailwindCSS', 'JavaScript'],
            github: 'https://github.com/Incongo/photostock',
            demo: null,
            imagenes: null,
        },
        {
            id: 2,
            nombre: 'FormacomEmpleo - Portal de Empleo',
            descripcion: 'Plataforma completa de empleo desarrollada con Laravel que conecta empresas y candidatos. Gestiona ofertas, postulaciones, perfiles con roles diferenciados y subida de archivos. Ideal para entender flujos de trabajo complejos con autenticación y autorización.',
            tecnologias: ['Laravel', 'PHP', 'Blade'],
            github: 'https://github.com/Incongo/formacomempleo-laravel',
            demo: null,
            imagenes: [form1, form2, form3],
        },
        {
            id: 3,
            nombre: 'front-padel - Plataforma de Reservas Deportivas',
            descripcion: 'Aplicación full stack para la gestión de pistas, horarios y reservas de pádel. Incluye autenticación JWT, roles de usuario y administrador, panel de control completo y un frontend moderno con React.',
            tecnologias: ['React', 'Python', 'Flask'],
            github: 'https://github.com/Incongo/front-padel',
            demo: 'https://incongo.github.io/front-padel/',
            imagenes: [padel1, padel2, padel3],
        },
        {
            id: 4,
            nombre: 'Pokedex Interactiva',
            descripcion: 'Pokédex web interactiva que consume la PokeAPI para mostrar información detallada de los Pokémon. Incluye tarjetas con efectos visuales, gráficos de estadísticas con Chart.js y una interfaz moderna y responsive.',
            tecnologias: ['JavaScript', 'HTML5', 'CSS'],
            github: 'https://github.com/Incongo/pokedex',
            demo: null,
            imagenes: null,
            imagenes: [poke1, poke2, poke3],
        },
        {
            id: 5,
            nombre: 'Battleship Online  - Java',
            descripcion: 'Aplicación web multijugador del clásico Hundir la Flota. Permite registro de usuarios, creación de partidas públicas/privadas y juego en tiempo real con validación completa de reglas y turnos.',
            tecnologias: ['Java', 'Spring', 'Thymeleaf', 'WebSockets'],
            github: 'https://github.com/Incongo/HundiendoenJava',
            demo: null,
            imagenes: [hund3, hund1, hund2],
        },
        {
            id: 6,
            nombre: 'Incongogram - Red Social de Fotografías',
            descripcion: 'Red social centrada en la publicación y compartición de fotografías, desarrollada íntegramente en PHP nativo. Los usuarios pueden registrarse, subir imágenes, votar (con AJAX), comentar y gestionar su perfil personal.',
            tecnologias: ['PHP', 'JavaScript (AJAX)', 'CSS'],
            github: 'https://github.com/Incongo/formacombook',
            demo: null,
            imagenes: [ins1, ins2],
        }
    ];

    return (
        <>
            <section id="proyectos" className="proyectos">
                <h2 className="section-title">Proyectos Destacados</h2>
                <div className="proyectos-grid">
                    {proyectos.map((proyecto) => (
                        <div key={proyecto.id} className="proyecto-card">
                            {/* Imagen principal si existe */}
                            {proyecto.imagenes && proyecto.imagenes.length > 0 && (
                                <div className="proyecto-imagen-principal">
                                    <img
                                        src={proyecto.imagenes[0]}
                                        alt={proyecto.nombre}
                                        className="proyecto-imagen"
                                        onClick={() => abrirModal(proyecto.imagenes[0], proyecto.nombre)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            )}

                            <div className="proyecto-header">
                                <h3 className="proyecto-titulo">{proyecto.nombre}</h3>
                                <div className="proyecto-links">
                                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    {proyecto.demo && (
                                        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                            {/* Miniaturas de imágenes adicionales */}
                            {proyecto.imagenes && proyecto.imagenes.length > 1 && (
                                <div className="proyecto-miniaturas">
                                    {proyecto.imagenes.slice(1).map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${proyecto.nombre} - ${index + 2}`}
                                            className="proyecto-miniatura"
                                            onClick={() => abrirModal(img, `${proyecto.nombre} - Vista ${index + 2}`)}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="proyecto-tecnologias">
                                {proyecto.tecnologias.map(tech => (
                                    <span key={tech} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {modalAbierto && (
                <div className="modal" onClick={() => setModalAbierto(false)}>
                    <div className="modal-contenido" onClick={e => e.stopPropagation()}>
                        <span className="modal-cerrar" onClick={() => setModalAbierto(false)}>×</span>
                        <img src={imagenModal} alt={tituloModal} className="modal-imagen" />
                        <p className="modal-titulo">{tituloModal}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProyectosDestacados;