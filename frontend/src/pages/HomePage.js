// RUTA: frontend/src/pages/HomePage.js
// CÓDIGO FINAL Y CORRECTO

import React from 'react';
import { useOutletContext } from 'react-router-dom';

// Importamos todos los componentes necesarios
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import LearningSection from '../components/LearningSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  // Recibimos el contexto correctamente desde App.js
  const { language, onNavigate } = useOutletContext();

  return (
    <>
      {/* CADA LÍNEA USA EL COMPONENTE CORRECTO CON SUS PROPS CORRECTAS */}
      
      {/* Sección 1: Home */}
      <HomeSection language={language} onNavigate={onNavigate} />
      
      {/* Sección 2: Services */}
      <ServicesSection language={language} className="bg-secondary-dark" />
      
      {/* Sección 3: Learning */}
      <LearningSection language={language} className="bg-primary-dark" />
      
      {/* Sección 4: Call To Action */}
      <CallToActionSection language={language} onNavigate={onNavigate} className="bg-tertiary-dark" />
      
      {/* Sección 5: Contact */}
      <ContactSection language={language} className="bg-primary-dark" />
    </>
  );
};

export default HomePage;