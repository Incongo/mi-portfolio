import React from 'react';
import '../styles/Experiencia.css';

function Experiencia() {
    // Datos quemados por ahora (luego los moveremos a un archivo aparte)
    const experiencia = [
        {
            id: 1,
            tipo: 'educacion',
            titulo: 'Desarrollo de Aplicaciones con Tecnologías Web',
            entidad: '[Nombre del Curso/Institución]',
            fecha: '2024',
            descripcion: 'Formación intensiva en desarrollo full stack con React, PHP y tecnologías web modernas.'
        },
        {
            id: 2,
            tipo: 'educacion',
            titulo: 'Estudios en Audiovisual',
            entidad: '[Nombre de la Institución]',
            fecha: '2022-2024',
            descripcion: 'Formación en narrativa visual, edición, producción y dirección audiovisual.'
        },
        {
            id: 3,
            tipo: 'proyecto',
            titulo: 'Proyecto Destacado 1',
            entidad: 'GitHub',
            fecha: '2024',
            descripcion: 'Breve descripción del proyecto y tecnologías utilizadas.'
        },
        {
            id: 3,
            tipo: 'proyecto',
            titulo: 'photostock - Gestor de Archivos Fotográficos',
            entidad: 'PHP · Subida de archivos',
            fecha: '2024',
            descripcion: 'Aplicación para organizar imágenes en carpetas. Une mi formación audiovisual con el desarrollo backend en PHP.'
        },
        {
            id: 4,
            tipo: 'proyecto',
            titulo: 'formacomempleo-laravel',
            entidad: 'Laravel · Blade',
            fecha: '2024',
            descripcion: 'Plataforma de empleo y formación construida con Laravel, demostrando el uso de frameworks PHP modernos y MVC.'
        },
        {
            id: 5,
            tipo: 'proyecto',
            titulo: 'pokeapilocal',
            entidad: 'JavaScript · API REST',
            fecha: '2024',
            descripcion: 'Cliente web que consume la API de Pokémon. Muestra mi capacidad para trabajar con APIs externas y manejar datos asíncronos.'
        },
        {
            id: 6,
            tipo: 'proyecto',
            titulo: 'gestor-imagenes',
            entidad: 'PHP',
            fecha: '2026',
            descripcion: 'Herramienta reciente para la gestión de imágenes, reforzando mi perfil en desarrollo de utilidades audiovisuales.'
        }
    ];

    return (
        <section id="experiencia" className="experiencia">
            <h2 className="section-title">Trayectoria</h2>
            <div className="timeline">
                {experiencia.map((item) => (
                    <div key={item.id} className={`timeline-item ${item.tipo}`}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-title">{item.titulo}</h3>
                                <span className="timeline-date">{item.fecha}</span>
                            </div>
                            <h4 className="timeline-entity">{item.entidad}</h4>
                            <p className="timeline-description">{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experiencia;