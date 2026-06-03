import React, { useState, useEffect } from 'react';
import bdsLogoDark from '../assets/logos/bigdataservices.png';
import bdsLogoLight from '../assets/logos/logo-white-sin-fondo.png';

const content = {
  es: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    academy: 'Academia',
    flowfinanzas: 'FlowFinanzas',
    bookConsultation: 'Contacto'
  },
  en: {
    services: 'Services',
    portfolio: 'Portfolio',
    academy: 'Academy',
    flowfinanzas: 'FlowFinanzas',
    bookConsultation: 'Contact'
  }
};

const Navigation = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] top-0 pt-6 px-4">
      <div 
        className={`mx-auto w-max max-w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? 'bg-white/80 backdrop-blur-2xl border border-black/[0.04] shadow-sm py-3 px-8' : 'bg-transparent border border-transparent py-4 px-6'
        } flex items-center justify-between gap-12`}
      >
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <img src={scrolled ? bdsLogoDark : bdsLogoLight} alt="Big Data Services Logo" className="h-6 w-auto object-contain" />
          <span className={`font-light tracking-tight text-base transition-colors ${scrolled ? 'text-[#1d1d1f] group-hover:text-teal-600' : 'text-white group-hover:text-slate-300'}`}>Big Data Services</span>
        </div>
        
        <div className={`hidden md:flex items-center gap-8 text-xs font-medium ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
          <button onClick={() => scrollToSection('services')} className={`transition-colors tracking-wide ${scrolled ? 'hover:text-[#1d1d1f]' : 'hover:text-white'}`}>{t.services.toUpperCase()}</button>
          <button onClick={() => scrollToSection('portfolio')} className={`transition-colors tracking-wide ${scrolled ? 'hover:text-[#1d1d1f]' : 'hover:text-white'}`}>{t.portfolio.toUpperCase()}</button>
          <button onClick={() => scrollToSection('academy')} className={`transition-colors tracking-wide ${scrolled ? 'hover:text-[#1d1d1f]' : 'hover:text-white'}`}>{t.academy.toUpperCase()}</button>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className={`text-[10px] font-medium tracking-widest border rounded-full px-3 py-1 transition-colors ${
              scrolled ? 'text-slate-500 hover:text-[#1d1d1f] border-black/10 hover:bg-black/5' : 'text-slate-300 hover:text-white border-white/20 hover:bg-white/10'
            }`}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => scrollToSection('contact')} className={`hidden md:flex px-6 py-2 rounded-full text-xs font-medium transition-transform duration-300 hover:scale-[0.98] ${
            scrolled ? 'bg-[#1d1d1f] text-white hover:bg-black' : 'bg-white text-black hover:bg-slate-200'
          }`}>
            {t.bookConsultation}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
