import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experiencia />
        <Contacto />
      </main>
    </div>
  );
}

export default App;