// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('es');

  // DEVOLVEMOS ESTA LÓGICA PARA EL SCROLL SUAVE Y EL HIGHLIGHT DEL MENÚ
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'learning', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
 
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setCurrentPage(sectionId);
            break;
          }
        }
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    const section = document.getElementById(pageId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // -80 para compensar la altura del header
        behavior: 'smooth',
      });
    }
  };
 
  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="bg-primary-dark text-gray-100 font-sans antialiased">
      {/* 2. AÑADIMOS EL COMPONENTE AQUÍ */}
      {/* No renderiza nada visible, pero arreglará el scroll en cada cambio de página */}
      <ScrollToTop />
      {/* AHORA SÍ LE PASAMOS LAS PROPS NECESARIAS AL HEADER */}
      <LayoutHeader
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
        language={language}
      />
      <main>
        {/* Pasamos 'handleNavigate' a través del contexto para que
            botones internos (como el de HomeSection) también puedan navegar */}
        <Outlet context={{ language, onNavigate: handleNavigate }} /> 
      </main>
      <LayoutFooter language={language} className="bg-secondary-dark" />
    </div>
  );
};

export default App;