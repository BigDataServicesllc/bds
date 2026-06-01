import React, { useState, useEffect } from 'react';

const content = {
  es: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    academy: 'Academia',
    flowfinanzas: 'FlowFinanzas',
    bookConsultation: 'Agendar Demo'
  },
  en: {
    services: 'Services',
    portfolio: 'Portfolio',
    academy: 'Academy',
    flowfinanzas: 'FlowFinanzas',
    bookConsultation: 'Request Demo'
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
          <div className="w-6 h-6 rounded-md bg-[#1d1d1f] flex items-center justify-center">
            <span className="font-bold text-white text-[10px] tracking-tight">BDS</span>
          </div>
          <span className="font-light text-[#1d1d1f] tracking-tight text-base group-hover:text-teal-600 transition-colors">AETERNA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-500">
          <button onClick={() => scrollToSection('services')} className="hover:text-[#1d1d1f] transition-colors tracking-wide">{t.services.toUpperCase()}</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#1d1d1f] transition-colors tracking-wide">{t.portfolio.toUpperCase()}</button>
          <button onClick={() => scrollToSection('academy')} className="hover:text-[#1d1d1f] transition-colors tracking-wide">{t.academy.toUpperCase()}</button>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-medium tracking-widest text-slate-500 hover:text-[#1d1d1f] border border-black/10 rounded-full px-3 py-1 transition-colors hover:bg-black/5"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => scrollToSection('contact')} className="hidden md:flex bg-[#1d1d1f] text-white px-6 py-2 rounded-full text-xs font-medium hover:scale-[0.98] hover:bg-black transition-transform duration-300">
            {t.bookConsultation}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
