import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import AboutSection from '../sections/AboutSection';
import bdsLogo from '../assets/logos/bigdataservices.png';

const AboutPage = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-slate-200">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={bdsLogo} alt="Big Data Services Logo" className="h-6 w-auto object-contain" />
            <span className="font-light text-slate-900 tracking-tight text-base">Big Data Services</span>
          </Link>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLanguage(l => l === 'en' ? 'es' : 'en')}
              className="text-[10px] font-medium tracking-widest text-slate-400 hover:text-slate-900 border border-slate-200 rounded-full px-3 py-1 transition-colors"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors text-xs font-medium tracking-wide uppercase">
              {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <AboutSection language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default AboutPage;
