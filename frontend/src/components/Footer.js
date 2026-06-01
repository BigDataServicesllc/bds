import React from 'react';
import { Link } from 'react-router-dom';

const content = {
  es: {
    intakeTitle: 'Inicia tu Transformación.',
    intakeDesc: 'Déjanos tus requerimientos y nuestro equipo de arquitectos te contactará en las próximas 24 horas.',
    copyright: 'Big Data Services LLC. Todos los derechos reservados.',
    terms: 'Términos',
    privacy: 'Privacidad'
  },
  en: {
    intakeTitle: 'Start Your Transformation.',
    intakeDesc: 'Leave us your requirements and our architecture team will contact you within 24 hours.',
    copyright: 'Big Data Services LLC. All rights reserved.',
    terms: 'Terms',
    privacy: 'Privacy'
  }
};

const Footer = ({ language = 'es' }) => {
  const t = content[language];
  return (
    <footer id="contact" className="bg-[#f5f5f7] pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intake Node - Embedded B2B Inquiry Capture */}
        <div className="bg-white p-10 md:p-20 text-center mb-24 relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1d1d1f] mb-6 relative z-10">{t.intakeTitle}</h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg mb-10 max-w-2xl mx-auto relative z-10">{t.intakeDesc}</p>
          <a href="mailto:info@bigdata-services.com" className="inline-flex items-center gap-4 bg-[#1d1d1f] text-white pl-8 pr-2 py-2 rounded-full font-medium hover:bg-black hover:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] relative z-10 shadow-xl shadow-black/5">
            <span className="text-xs tracking-widest uppercase">info@bigdata-services.com</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/5 text-sm text-slate-500 font-light tracking-wide">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-[#1d1d1f] flex items-center justify-center">
              <span className="font-bold text-white text-[10px] tracking-tight">BDS</span>
            </div>
            <span>&copy; {new Date().getFullYear()} {t.copyright}</span>
          </div>
          
          <div className="flex gap-8">
            <Link to="/terminos" className="hover:text-[#1d1d1f] transition-colors">{t.terms}</Link>
            <Link to="/privacidad" className="hover:text-[#1d1d1f] transition-colors">{t.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
