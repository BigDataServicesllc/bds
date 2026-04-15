// RUTA: frontend/src/pages/ServicesPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import CallToActionSection from '../components/CallToActionSection';

const ServicesPage = () => {
  const { language, onNavigate } = useOutletContext();

  return (
    <>
      <ServicesSection language={language} className="bds-section-services relative z-10" />
      <CallToActionSection language={language} onNavigate={onNavigate} className="bds-section-cta relative z-10" />
    </>
  );
};

export default ServicesPage;
