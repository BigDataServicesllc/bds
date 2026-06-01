import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bdsLogo from '../assets/logos/bigdataservices.png';

const content = {
  es: {
    backToHome: 'Volver al Inicio',
    termsTitle: 'Términos de Servicio',
    termsLastUpdated: 'Última actualización: 1 de Junio, 2026',
    termsP1: 'Bienvenido a Big Data Services LLC. Al acceder o utilizar nuestro sitio web y servicios asociados, usted acepta estar sujeto a estos Términos de Servicio.',
    termsH1: '1. Uso de Nuestros Servicios',
    termsP2: 'Nuestros servicios de ingeniería de datos, desarrollo de software y consultoría están destinados a uso B2B. Usted acepta utilizar nuestros servicios solo para fines lícitos y de acuerdo con estos Términos.',
    termsH2: '2. Propiedad Intelectual',
    termsP3: 'Todo el contenido, marcas comerciales, código fuente, arquitecturas de software y datos proporcionados en el transcurso de nuestros servicios siguen siendo propiedad intelectual de Big Data Services LLC, a menos que se estipule lo contrario en un contrato específico.',
    termsH3: '3. Limitación de Responsabilidad',
    termsP4: 'En ningún caso Big Data Services LLC será responsable por daños indirectos, incidentales o consecuentes que surjan del uso o la incapacidad de uso de nuestros servicios.'
  },
  en: {
    backToHome: 'Back to Home',
    termsTitle: 'Terms of Service',
    termsLastUpdated: 'Last updated: June 1, 2026',
    termsP1: 'Welcome to Big Data Services LLC. By accessing or using our website and associated services, you agree to be bound by these Terms of Service.',
    termsH1: '1. Use of Our Services',
    termsP2: 'Our data engineering, software development, and consulting services are intended for B2B use. You agree to use our services only for lawful purposes and in accordance with these Terms.',
    termsH2: '2. Intellectual Property',
    termsP3: 'All content, trademarks, source code, software architectures, and data provided in the course of our services remain the intellectual property of Big Data Services LLC, unless otherwise stipulated in a specific contract.',
    termsH3: '3. Limitation of Liability',
    termsP4: 'In no event shall Big Data Services LLC be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services.'
  }
};

const TermsPage = () => {
  const [language, setLanguage] = useState('es');
  const t = content[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-screen text-slate-900 font-sans selection:bg-slate-200">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-16 flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full flex justify-between items-center">
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
              {t.backToHome}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-6 max-w-3xl mx-auto font-serif">
        <h1 className="text-5xl font-light tracking-tight text-slate-950 mb-12 pb-6 border-b border-slate-200" style={{fontFamily: "'Lyon Text', 'Playfair Display', serif"}}>{t.termsTitle}</h1>
        <div className="text-slate-600 font-light leading-[1.8] space-y-8 text-lg" style={{fontFamily: "'Lyon Text', 'Playfair Display', serif"}}>
          <p className="text-sm uppercase tracking-widest text-slate-400 font-sans">{t.termsLastUpdated}</p>
          <p>{t.termsP1}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.termsH1}</h2>
          <p>{t.termsP2}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.termsH2}</h2>
          <p>{t.termsP3}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.termsH3}</h2>
          <p>{t.termsP4}</p>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default TermsPage;
