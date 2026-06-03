import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bdsLogo from '../assets/logos/bigdataservices.png';

const content = {
  es: {
    backToHome: 'Volver al Inicio',
    privacyTitle: 'Política de Privacidad',
    privacyLastUpdated: 'Última actualización: 1 de Junio, 2026',
    privacyP1: 'En Big Data Services LLC, nos tomamos muy en serio la privacidad y la seguridad de sus datos corporativos. Esta política describe cómo recopilamos, utilizamos y protegemos la información.',
    privacyH1: '1. Recopilación de Datos',
    privacyP2: 'Recopilamos información estrictamente necesaria para la prestación de nuestros servicios B2B, incluyendo datos de contacto corporativo, requerimientos técnicos y métricas operativas compartidas voluntariamente.',
    privacyH2: '2. Uso de la Información',
    privacyP3: 'Utilizamos los datos exclusivamente para diseñar, implementar y mantener las arquitecturas cloud y automatizaciones acordadas. No vendemos ni cedemos datos a terceros.',
    privacyH3: '3. Seguridad y AWS',
    privacyP4: 'Toda la información es procesada bajo estrictos estándares de seguridad y encriptación. Utilizamos infraestructura de Amazon Web Services (AWS) con certificaciones SOC 2 e ISO 27001 para garantizar la integridad de los flujos de datos.'
  },
  en: {
    backToHome: 'Back to Home',
    privacyTitle: 'Privacy Policy',
    privacyLastUpdated: 'Last updated: June 1, 2026',
    privacyP1: 'At Big Data Services LLC, we take the privacy and security of your corporate data very seriously. This policy describes how we collect, use, and protect information.',
    privacyH1: '1. Data Collection',
    privacyP2: 'We collect information strictly necessary for the provision of our B2B services, including corporate contact data, technical requirements, and operational metrics shared voluntarily.',
    privacyH2: '2. Use of Information',
    privacyP3: 'We use the data exclusively to design, implement, and maintain the agreed cloud architectures and automations. We do not sell or transfer data to third parties.',
    privacyH3: '3. Security and AWS',
    privacyP4: 'All information is processed under strict security and encryption standards. We use Amazon Web Services (AWS) infrastructure with SOC 2 and ISO 27001 certifications to ensure the integrity of data flows.'
  }
};

const PrivacyPage = () => {
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
        <h1 className="text-5xl font-light tracking-tight text-slate-950 mb-12 pb-6 border-b border-slate-200" style={{fontFamily: "'Lyon Text', 'Playfair Display', serif"}}>{t.privacyTitle}</h1>
        <div className="text-slate-600 font-light leading-[1.8] space-y-8 text-lg" style={{fontFamily: "'Lyon Text', 'Playfair Display', serif"}}>
          <p className="text-sm uppercase tracking-widest text-slate-400 font-sans">{t.privacyLastUpdated}</p>
          <p>{t.privacyP1}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.privacyH1}</h2>
          <p>{t.privacyP2}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.privacyH2}</h2>
          <p>{t.privacyP3}</p>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-12 mb-6">{t.privacyH3}</h2>
          <p>{t.privacyP4}</p>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default PrivacyPage;
