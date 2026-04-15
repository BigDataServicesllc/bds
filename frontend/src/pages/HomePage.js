// RUTA: frontend/src/pages/HomePage.js - VERSIÓN FINAL

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HomeSection from '../components/HomeSection';

const HomePage = () => {
  const { language } = useOutletContext();

  return (
    <>
      <HomeSection language={language} />

      {/* Placeholder para futuras secciones de Desarrollo Web y App Showcase */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'es'
                ? 'Aquí irán las secciones de Desarrollo Web y App Showcase'
                : 'The Web Development and App Showcase sections will be placed here.'}
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Esta zona se reserva para presentar los proyectos aramarecafe.com, webuildarg.com, Farmaboost, Tu Turno en Línea y la futura app de control financiero.'
                : 'This area is reserved to showcase the projects aramarecafe.com, webuildarg.com, Farmaboost, Tu Turno en Línea and the upcoming financial control app.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
