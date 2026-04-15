// RUTA: frontend/src/pages/AcademyPage.js

import React from 'react';
import SEO from '../components/SEO';
import { useOutletContext } from 'react-router-dom';
import LearningSection from '../components/LearningSection';

const AcademyPage = () => {
  const { language } = useOutletContext();

  return (
    <>
      <SEO 
        title={language === 'es' ? 'Academia de Datos' : 'Data Academy'}
        description={language === 'es' 
          ? 'Formación práctica en análisis de datos, con certificación disponible. Aprende Machine Learning, Power BI y más.' 
          : 'Hands-on training in data analytics with certification available. Learn Machine Learning, Power BI and more.'}
        keywords="Data Academy, Courses, Power BI, Machine Learning, Training"
      />
      <LearningSection language={language} className="relative z-10" />
    </>
  );
};

export default AcademyPage;
