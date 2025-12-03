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

<ServicesSection
  language={language}
  id="services"
  className="bds-section-services relative z-10"
/>

<LearningSection
  language={language}
  id="learning"
  className="bds-section-learning relative z-10"
/>

<LatestPostsSection
  language={language}
  id="blog"
  className="bds-section-blog relative z-10"
/>

<CallToActionSection
  language={language}
  onNavigate={onNavigate}
  className="bds-section-cta relative z-10"
/>

<ContactSection
  language={language}
  id="contact"
  className="bds-section-contact relative z-10"
/>

    </>
  );
};

export default HomePage;