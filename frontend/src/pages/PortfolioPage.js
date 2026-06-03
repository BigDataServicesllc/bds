import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bdsLogo from '../assets/logos/bigdataservices.png';

const content = {
  es: {
    backToHome: 'Volver al Inicio',
    title: 'Nuestra Ingeniería.',
    subtitle: 'Arquitecturas complejas destiladas en experiencias de usuario simples y poderosas.',
    webShowcaseTitle: 'Plataformas Web B2B',
    aramareTitle: 'Aramare Café',
    aramareDesc: 'Plataforma de E-commerce y analítica comercial con integración de pagos en tiempo real.',
    webuildTitle: 'WeBuild Argentina',
    webuildDesc: 'Arquitectura de información corporativa y gestión de leads para el sector de la construcción.',
    tuturnoTitle: 'Tu Turno en Línea',
    tuturnoDesc: 'Agendamiento inteligente y flujos de trabajo automatizados para múltiples sucursales.',
    stack: 'Stack',
    cloud: 'Cloud',
    roi: 'Métrica',
    aramareStack: 'React, Node.js, Stripe',
    aramareCloud: 'AWS (ECS, RDS)',
    aramareRoi: '+40% Conversión',
    webuildStack: 'Next.js, Tailwind',
    webuildCloud: 'Vercel, AWS S3',
    webuildRoi: 'Optimización SEO 100/100',
    tuturnoStack: 'React, Express, PostgreSQL',
    tuturnoCloud: 'Google Cloud Platform',
    tuturnoRoi: '-60% Tiempos de espera',
    mobileTitle: 'Ingeniería Móvil',
    featuredApp: 'PRODUCTO DESTACADO',
    flowDesc: 'Ecosistema financiero nativo con biometría, pagos en tiempo real y arquitectura distribuida. Rendimiento 60fps constante.'
  },
  en: {
    backToHome: 'Back to Home',
    title: 'Our Engineering.',
    subtitle: 'Complex architectures distilled into simple, powerful user experiences.',
    webShowcaseTitle: 'B2B Web Platforms',
    aramareTitle: 'Aramare Café',
    aramareDesc: 'E-commerce platform and business analytics with real-time payment integration.',
    webuildTitle: 'WeBuild Argentina',
    webuildDesc: 'Corporate information architecture and lead management for the construction sector.',
    tuturnoTitle: 'Tu Turno en Línea',
    tuturnoDesc: 'Smart scheduling and automated workflows for multiple branch locations.',
    stack: 'Stack',
    cloud: 'Cloud',
    roi: 'Metric',
    aramareStack: 'React, Node.js, Stripe',
    aramareCloud: 'AWS (ECS, RDS)',
    aramareRoi: '+40% Conversion',
    webuildStack: 'Next.js, Tailwind',
    webuildCloud: 'Vercel, AWS S3',
    webuildRoi: '100/100 SEO Score',
    tuturnoStack: 'React, Express, PostgreSQL',
    tuturnoCloud: 'Google Cloud Platform',
    tuturnoRoi: '-60% Wait times',
    mobileTitle: 'Mobile Engineering',
    featuredApp: 'FEATURED PRODUCT',
    flowDesc: 'Native financial ecosystem with biometrics, real-time payments, and distributed architecture. Constant 60fps performance.'
  }
};

const PortfolioPage = () => {
  const [language, setLanguage] = useState('es');
  const t = content[language];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#1d1d1f] font-sans selection:bg-slate-200">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={bdsLogo} alt="Big Data Services Logo" className="h-6 w-auto object-contain" />
            <span className="font-light text-[#1d1d1f] tracking-tight text-base group-hover:text-teal-600 transition-colors">Big Data Services</span>
          </Link>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLanguage(l => l === 'en' ? 'es' : 'en')}
              className="text-[10px] font-medium tracking-widest text-slate-500 hover:text-[#1d1d1f] border border-black/10 rounded-full px-3 py-1 transition-colors"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <Link to="/" className="text-slate-500 hover:text-[#1d1d1f] transition-colors text-xs font-medium tracking-wide uppercase">
              {t.backToHome}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 px-6 max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1d1d1f] mb-6 leading-none">{t.title}</h1>
          <p className="text-slate-500 font-light leading-relaxed text-xl max-w-3xl mx-auto tracking-tight">
            {t.subtitle}
          </p>
        </div>

        <section className="mb-32">
          <h2 className="text-3xl font-light tracking-tight text-[#1d1d1f] mb-16 border-b border-black/5 pb-4">{t.webShowcaseTitle}</h2>
          
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="mac-window">
                  <div className="mac-header">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="bg-slate-50 aspect-video flex items-center justify-center p-8 relative overflow-hidden border-t border-black/5">
                    <img src="/images/web_desing_01.png" alt={t.aramareTitle} className="w-full h-full object-cover rounded shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <h3 className="text-3xl font-light tracking-tight text-[#1d1d1f] mb-4">{t.aramareTitle}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{t.aramareDesc}</p>
                <div className="space-y-4 text-sm font-light">
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.stack}</span><span className="text-slate-800">{t.aramareStack}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.cloud}</span><span className="text-slate-800">{t.aramareCloud}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.roi}</span><span className="text-teal-700 font-medium">{t.aramareRoi}</span></div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="mac-window">
                  <div className="mac-header">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="bg-slate-50 aspect-video flex items-center justify-center p-8 relative overflow-hidden border-t border-black/5">
                    <img src="/images/web_desing_02.png" alt={t.webuildTitle} className="w-full h-full object-cover rounded shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <h3 className="text-3xl font-light tracking-tight text-[#1d1d1f] mb-4">{t.webuildTitle}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{t.webuildDesc}</p>
                <div className="space-y-4 text-sm font-light">
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.stack}</span><span className="text-slate-800">{t.webuildStack}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.cloud}</span><span className="text-slate-800">{t.webuildCloud}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.roi}</span><span className="text-teal-700 font-medium">{t.webuildRoi}</span></div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="mac-window">
                  <div className="mac-header">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="bg-slate-50 aspect-video flex items-center justify-center p-8 relative overflow-hidden border-t border-black/5">
                    <img src="/images/web_desing_03.png" alt={t.tuturnoTitle} className="w-full h-full object-cover rounded shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <h3 className="text-3xl font-light tracking-tight text-[#1d1d1f] mb-4">{t.tuturnoTitle}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{t.tuturnoDesc}</p>
                <div className="space-y-4 text-sm font-light">
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.stack}</span><span className="text-slate-800">{t.tuturnoStack}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.cloud}</span><span className="text-slate-800">{t.tuturnoCloud}</span></div>
                  <div className="flex justify-between border-b border-black/5 pb-3"><span className="text-slate-400">{t.roi}</span><span className="text-teal-700 font-medium">{t.tuturnoRoi}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Visual Break Exception: FlowFinanzas remains dark to create tridimensional depth */}
      <section className="bg-[#000000] py-32 mt-32 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light tracking-tight text-white mb-16 border-b border-white/10 pb-4">{t.mobileTitle}</h2>
          <div className="bg-[#09090b] rounded-[2rem] border border-white/5 p-12 md:p-20 relative overflow-hidden">
            {/* Dark Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/flowfinanzas_mobile_mockup.png" alt="FlowFinanzas Mobile" className="h-[500px] object-contain drop-shadow-2xl" />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium tracking-widest uppercase mb-6">
                  {t.featuredApp}
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">FlowFinanzas.</h3>
                <p className="text-slate-400 font-light mb-10 leading-relaxed text-lg">
                  {t.flowDesc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-light text-xs tracking-wide">React Native</span>
                  <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-light text-xs tracking-wide">Firebase</span>
                  <span className="px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 font-light text-xs tracking-wide">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default PortfolioPage;
