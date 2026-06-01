import React from 'react';
import { Link } from 'react-router-dom';
import bdsLogoLight from '../assets/logos/logo-white-sin-fondo.png';

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
    <footer id="contact" className="w-full">
      
      {/* Contact / Intake Section - Off-White Background */}
      <div className="bg-[#f5f5f7] py-32 border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-10 md:p-20 text-center relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1d1d1f] mb-6 relative z-10">{t.intakeTitle}</h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg mb-10 max-w-2xl mx-auto relative z-10">{t.intakeDesc}</p>
            <a href="mailto:info@bigdata-services.com" className="inline-flex items-center gap-4 bg-[#1d1d1f] text-white pl-8 pr-2 py-2 rounded-full font-medium hover:bg-black hover:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] relative z-10 shadow-xl shadow-black/5">
              <span className="text-xs tracking-widest uppercase">info@bigdata-services.com</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Actual Footer - Pure Black Background */}
      <div className="bg-[#000000] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-light tracking-wide">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <img src={bdsLogoLight} alt="Big Data Services Logo" className="h-6" />
              <span className="hidden md:inline text-slate-600">|</span>
              <span>&copy; {new Date().getFullYear()} {t.copyright}</span>
            </div>
            
            <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 md:border-r md:border-white/10 md:pr-8">
              <a href="https://www.linkedin.com/company/105134255/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://wa.me/5491159934145" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.001-2.64-1.02-5.119-2.887-6.986-1.866-1.867-4.346-2.889-6.985-2.889-5.448 0-9.893 4.444-9.892 9.892.001 2.052.54 3.961 1.545 5.617l-1.066 3.896 3.999-1.23zm8.397-5.748c-.461-.231-2.72-1.344-3.141-1.498-.421-.154-.728-.231-1.034.231s-1.189 1.498-1.458 1.806c-.269.308-.538.346-.999.115-2.03-.99-3.708-2.607-4.887-4.664-.236-.412.245-.386.697-1.288.154-.308.077-.577-.038-.808-.115-.231-1.034-2.498-1.417-3.421-.371-.893-.748-.772-1.034-.786-.269-.013-.577-.013-.884-.013-.308 0-.806.115-1.228.577-.421.462-1.611 1.576-1.611 3.844 0 2.268 1.649 4.458 1.88 4.766.231.308 3.24 4.954 7.848 6.945 1.097.475 1.954.759 2.622.971 1.101.35 2.102.3 2.894.182.89-.133 2.72-1.112 3.104-2.19.383-1.078.383-2.001.269-2.193-.115-.192-.422-.308-.883-.539z"/></svg>
              </a>
            </div>

            <div className="flex gap-8">
              <Link to="/terminos" className="hover:text-white transition-colors">{t.terms}</Link>
              <Link to="/privacidad" className="hover:text-white transition-colors">{t.privacy}</Link>
            </div>
          </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
