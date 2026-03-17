import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiencia from './components/Experiencia';
import ProyectosDestacados from './components/ProyectosDestacados';
import Contacto from './components/Contacto';
import './styles/App.css';
import BotonArriba from './components/BotonArriba';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experiencia />
        <ProyectosDestacados />
        <Contacto />
        <BotonArriba />
      </main>
    </div>
  );
}

export default App;