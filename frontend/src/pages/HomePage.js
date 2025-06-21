// RUTA: frontend/src/pages/HomePage.js
// === CÓDIGO FINAL CON LA TÉCNICA DE APILAMIENTO CORRECTA ===

import React, { useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import LearningSection from '../components/LearningSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const { language, onNavigate } = useOutletContext();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); 
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    }
  }, []); 

  return (
    <>
      {/* 1. HomeSection genera el fondo de partículas. No la tocamos. */}
      <HomeSection language={language} onNavigate={onNavigate} id="home" />
      
      {/* 2. A CADA SECCIÓN SIGUIENTE, le añadimos 'relative z-10' para que se
             ponga en una capa superior y tape el fondo de partículas con su
             propio color de fondo. */}
      <ServicesSection language={language} className="bg-secondary-dark relative z-10" id="services" />
      <LearningSection language={language} className="bg-primary-dark relative z-10" id="learning" />
      <CallToActionSection language={language} onNavigate={onNavigate} className="bg-tertiary-dark relative z-10" />
      <ContactSection language={language} className="bg-primary-dark relative z-10" id="contact" />
    </>
  );
};

export default HomePage;