import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import LearningSection from './components/LearningSection';
import ContactSection from './components/ContactSection';
 
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés
 
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
        top: section.offsetTop - 80, // Ajuste para el header fijo
        behavior: 'smooth',
      });
    }
  };
 
  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };
 
  return (
    <div className="font-sans antialiased text-gray-900">
      <LayoutHeader
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
        language={language}
      />
      <main>
        <HomeSection language={language} />
        <ServicesSection language={language} />
        <LearningSection language={language} />
        <ContactSection language={language} />
      </main>
    </div>
  );
};
 
export default App;

// DONE