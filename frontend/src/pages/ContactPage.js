// RUTA: frontend/src/pages/ContactPage.js

import React from 'react';
import SEO from '../components/SEO';
import { useOutletContext } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  const { language } = useOutletContext();

  return (
    <>
      <SEO 
        title={language === 'es' ? 'Contacto' : 'Contact Us'}
        description={language === 'es' 
          ? 'Contacta a Big Data Services para empezar con tu próximo proyecto de tecnología.' 
          : 'Contact Big Data Services to get started on your next tech project.'}
        keywords="Contact, Email, Phone, Tech Solutions, Support"
      />
      <ContactSection language={language} className="relative z-10" />
    </>
  );
};

export default ContactPage;
