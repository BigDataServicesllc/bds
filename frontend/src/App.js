// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import LearningSection from './components/LearningSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';
import CallToActionSection from './components/CallToActionSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('es');

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
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
 
  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };
 
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <LayoutHeader
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
        language={language}
      />
      <main>
        <HomeSection language={language} onNavigate={handleNavigate} />
        <ServicesSection language={language} />
        <LearningSection language={language} onNavigate={handleNavigate} />
        <ContactSection language={language} />
      </main>
      <CallToActionSection language={language} onNavigate={handleNavigate} />
      <LayoutFooter language={language} />
    </div>
  );
};
 
export default App;