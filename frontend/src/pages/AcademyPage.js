// RUTA: frontend/src/pages/AcademyPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import LearningSection from '../components/LearningSection';

const AcademyPage = () => {
  const { language } = useOutletContext();

  return (
    <>
      <LearningSection language={language} className="bds-section-learning relative z-10" />
    </>
  );
};

export default AcademyPage;
