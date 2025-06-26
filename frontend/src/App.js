// frontend/src/App.js - SOLUCIÓN FINAL CON BLOQUEO Y NAVEGACIÓN CORRECTA

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('es');
  const location = useLocation();
  const isScrollingProgrammatically = useRef(false);
  
  const handleNavigate = useCallback((pageId) => {
    const section = document.getElementById(pageId);
    if (section) {
      isScrollingProgrammatically.current = true;
      setCurrentPage(pageId);
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;
      
      if (location.pathname !== '/') {
        setCurrentPage(null);
        return;
      }
      const sections = ['home', 'services', 'learning', 'blog', 'contact'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 90;
          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      }
      setCurrentPage(currentSection);
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
 
  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="bg-primary-dark text-gray-100 font-sans antialiased">
      <ScrollToTop />
      <LayoutHeader
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
        language={language}
      />
      <main>
        <Outlet context={{ language, onNavigate: handleNavigate }} /> 
      </main>
      <LayoutFooter language={language} className="bg-secondary-dark" />
    </div>
  );
};

export default App;