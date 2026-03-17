import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/BotonArriba.css';

function BotonArriba() {
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Muestra el botón cuando se ha scrolleado más de 300px
            setMostrar(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`boton-arriba ${mostrar ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Volver arriba"
        >
            <ArrowUp size={24} />
        </button>
    );
}

export default BotonArriba;