// RUTA: frontend/src/pages/ContactPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  const { language } = useOutletContext();

  return (
    <>
      <ContactSection language={language} className="relative z-10" />
    </>
  );
};

export default ContactPage;
