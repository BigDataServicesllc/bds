// RUTA: frontend/src/pages/ServicesPage.js

import React from 'react';
import SEO from '../components/SEO';
import { useOutletContext } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import CallToActionSection from '../components/CallToActionSection';

const ServicesPage = () => {
  const { language, onNavigate } = useOutletContext();

  return (
    <>
      <SEO 
        title={language === 'es' ? 'Servicios de Datos y Software' : 'Data and Software Services'}
        description={language === 'es' 
          ? 'Descubre nuestros servicios en análisis avanzado de datos, ingeniería de datos, desarrollo de software web y móvil para empresas.' 
          : 'Discover our advanced data analytics, data engineering, and web/mobile software development services for enterprises.'}
        keywords="Services, Software Development, App Development, Big Data, Cloud Architecture"
      />
      <ServicesSection language={language} className="bds-section-services relative z-10" />
      <CallToActionSection language={language} onNavigate={onNavigate} className="bds-section-cta relative z-10" />
    </>
  );
};

export default ServicesPage;
