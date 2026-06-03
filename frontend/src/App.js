import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ServicesBento from './sections/ServicesBento';
import AppShowcase from './sections/AppShowcase';
import PortfolioSection from './sections/PortfolioSection';
import AcademySection from './sections/AcademySection';
import Footer from './components/Footer';

const App = () => {
  const [language, setLanguage] = useState('es');

  return (
    <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased min-h-[100dvh] overflow-x-hidden w-full max-w-full">
      <Navigation language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <ServicesBento language={language} />
        <AppShowcase language={language} />
        <PortfolioSection language={language} />
        <AcademySection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;