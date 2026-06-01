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

      {/* Actual Footer - Floria Editorial Style */}
      <div className="bg-[#000000] pt-32 pb-10 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
        
        {/* Massive Background Text */}
        <div className="absolute top-0 left-0 w-full flex justify-center items-start pt-10 overflow-hidden pointer-events-none opacity-[0.02] select-none">
          <span className="text-[14vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap">BIG DATA SERVICES</span>
        </div>

        {/* Abstract Glow Effect */}
        <div className="absolute -bottom-1/4 -right-20 md:-right-64 w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-[120px] pointer-events-none mix-blend-screen"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32 mt-10">
            
            {/* Left Column: Brand & Mission */}
            <div className="md:col-span-5 flex flex-col text-zinc-50">
              <div className="flex flex-col mb-8">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2">BDS.</h2>
                <p className="text-xl md:text-2xl text-teal-600 font-serif italic opacity-90">
                  {language === 'es' ? 'Arquitectura de Software' : 'Software Architecture'}
                </p>
              </div>
              <p className="text-slate-400 max-w-[35ch] leading-relaxed text-lg font-light">
                {language === 'es' 
                  ? 'Estudio independiente de desarrollo B2B y diseño premium. Construimos plataformas escalables para el futuro.'
                  : 'Independent B2B development and premium design studio. We build scalable platforms for the future.'}
              </p>
            </div>

            {/* Right Columns: Links */}
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-zinc-50 font-semibold mb-6 flex items-center gap-2 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block"></span> 
                {language === 'es' ? 'Servicios' : 'Services'}
              </h4>
              <ul className="flex flex-col gap-4 text-slate-400 font-light text-sm tracking-wide">
                <li><a href="#portfolio" className="hover:text-white transition-colors">{language === 'es' ? 'Desarrollo Web' : 'Web Development'}</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#hero" className="hover:text-white transition-colors">{language === 'es' ? 'Arquitectura Cloud' : 'Cloud Architecture'}</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-zinc-50 font-semibold mb-6 flex items-center gap-2 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block"></span> 
                {language === 'es' ? 'Empresa' : 'Company'}
              </h4>
              <ul className="flex flex-col gap-4 text-slate-400 font-light text-sm tracking-wide">
                <li><a href="#contact" className="hover:text-white transition-colors">{language === 'es' ? 'Nosotros' : 'About Us'}</a></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">{t.terms}</Link></li>
                <li><Link to="/privacidad" className="hover:text-white transition-colors">{t.privacy}</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-zinc-50 font-semibold mb-6 flex items-center gap-2 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block"></span> 
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h4>
              <div className="flex flex-col gap-4 text-slate-400 font-light text-sm tracking-wide">
                <a href="mailto:info@bigdata-services.com" className="hover:text-white transition-colors">info@bigdata-services.com</a>
                <p className="hover:text-white transition-colors cursor-default">+54 9 11 5993-4145</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500 font-light tracking-wide">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <img src={bdsLogoLight} alt="Big Data Services Logo" className="h-6" />
              <span className="hidden md:inline text-slate-600">|</span>
              <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
            </div>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/105134255/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-semibold">LinkedIn</a>
              <a href="https://wa.me/5491159934145" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-semibold">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
