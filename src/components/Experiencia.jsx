import React, { useEffect, useRef } from 'react';
import '../styles/Experiencia.css';

function Experiencia() {
    const itemsRef = useRef([]);

    const experiencia = [
        // CAPÍTULO 1: LA BASE AUDIOVISUAL
        {
            id: 1,
            tipo: 'educacion',
            titulo: 'Técnico superior en Audiovisuales',
            entidad: 'IES Audiovisual de Vigo',
            fecha: '2014 - 2018',
            descripcion: 'Ciclo medio en Video Disk Jockey y Sonido // Ciclo Superior en Iluminación, Captación y Tratamiento de la Imagen'
        },
        {
            id: 2,
            tipo: 'proyecto',
            titulo: 'Marca personal como fotógrafo profesional "Incongo Art"',
            entidad: 'Freelance',
            fecha: '2014 - Actualidad',
            descripcion: 'Experiencia en la creación de contenido audiovisual en múltiples sectores.'
        },
        {
            id: 3,
            tipo: 'proyecto',
            titulo: 'Especialización en Fotografía Dental',
            entidad: 'Formación continua con referentes del sector',
            fecha: '2018 - Actualidad',
            descripcion: 'Especialización en fotografía quirúrgica, implantología y periodoncia. Dominio de técnicas de captura intraoral y extraoral, protocolos de documentación clínica y emisión en directo de cirugías.'
        },

        // CAPÍTULO 2: EL SALTO AL DESARROLLO
        {
            id: 4, // Cambiado de 3 a 4 (estaba duplicado)
            tipo: 'educacion',
            titulo: 'Desarrollo de Aplicaciones con Tecnologías Web',
            entidad: 'Formación intensiva Full Stack',
            fecha: '2025 - 2026',
            descripcion: 'Formación en desarrollo de aplicaciones web con enfoque full stack. He adquirido conocimientos en tecnologías de frontend como HTML, CSS, JavaScript y React, así como en desarrollo backend con PHP, Laravel, Node.js, Python (Flask), Java (Spring) y CakePHP. Además, he trabajado con bases de datos mediante SQL, consumo e integración de APIs, y conceptos de arquitecturas web modernas. También he aprendido a utilizar herramientas de contenedorización como Docker y a realizar despliegue de aplicaciones.'
        },

        // CAPÍTULO 3: PROYECTOS QUE UNEN AMBOS MUNDOS (puedes añadirlos después)
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Limpiar refs anteriores y observar los nuevos
        const currentRefs = itemsRef.current;

        currentRefs.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            // Limpiar observadores al desmontar
            currentRefs.forEach((item) => {
                if (item) observer.unobserve(item);
            });
            observer.disconnect();
        };
    }, [experiencia]); // Dependencia de experiencia por si cambia

    return (
        <section id="experiencia" className="experiencia">
            <h2 className="section-title">Mi Trayectoria</h2>
            <div className="timeline">
                {experiencia.map((item, index) => (
                    <div
                        key={item.id}
                        className={`timeline-item ${item.tipo}`}
                        ref={(el) => (itemsRef.current[index] = el)}
                    >
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