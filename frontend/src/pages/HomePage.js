// RUTA: frontend/src/pages/HomePage.js - VERSIÓN FINAL

import React, { useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';

import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import LearningSection from '../components/LearningSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';
import LatestPostsSection from '../components/LatestPostsSection';

const HomePage = () => {
  const { language, onNavigate } = useOutletContext();
  const location = useLocation();

  useEffect(() => {
    // Si la URL tiene un hash (ej: /#services), hacemos scroll a esa sección
    if (location.hash) {
      const id = location.hash.substring(1); 
      // El timeout le da tiempo al DOM a pintarse antes de intentar el scroll
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    }
  }, [location.hash, onNavigate]); // Dependemos del hash y de la función onNavigate

  return (
    <>
      <HomeSection language={language} onNavigate={onNavigate} id="home" />
      <ServicesSection language={language} className="bg-secondary-dark relative z-10" id="services" />
      <LearningSection language={language} className="bg-primary-dark relative z-10" id="learning" />
      <LatestPostsSection language={language} className="bg-secondary-dark relative z-10" id="blog" />
      <CallToActionSection language={language} onNavigate={onNavigate} className="bg-tertiary-dark relative z-10" />
      <ContactSection language={language} className="bg-primary-dark relative z-10" id="contact" />
    </>
  );
};

export default HomePage;