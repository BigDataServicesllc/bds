import React from 'react';
import { useOutletContext } from 'react-router-dom'; // 1. Importamos el hook

// Importamos los componentes
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import LearningSection from '../components/LearningSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const { language, onNavigate } = useOutletContext();

  return (
    <>
      {/* Sección 1: Sin clase, usa el fondo por defecto de App.js (primary-dark) */}
      <HomeSection language={language} onNavigate={onNavigate} />
      
      {/* Sección 2: Color secundario */}
      <ServicesSection language={language} className="bg-primary-dark" />
      
      {/* Sección 3: Vuelve al primario (lo ponemos explícitamente para claridad) */}
      <LearningSection language={language} className="bg-secondary-dark" />
      
      {/* Sección 4 (CTA): ¡Usamos nuestro nuevo color terciario para destacar! */}
      <CallToActionSection language={language} onNavigate={onNavigate} className="bg-tertiary-dark" />
      
      {/* Sección 5 (Contacto): Vuelve al primario */}
      <ContactSection language={language} className="bg-primary-dark" />
    </>
  );
};

export default HomePage;