// RUTA: frontend/src/pages/ServiceDetailPage.js
// CÓDIGO FINAL Y UNIFICADO

import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ServiceDetailPage = () => {
  // Obtenemos el idioma actual desde el contexto de App.js
  const { language } = useOutletContext();

  // Definimos todo nuestro contenido traducible en un solo lugar
  const pageContent = {
    backLink: { es: 'Volver a la página principal', en: 'Back to main page' },
    title: { es: 'Nuestros', en: 'Our' },
    titleHighlight: { es: 'Servicios', en: 'Services' },
    subtitle: { es: 'Un vistazo en profundidad a cómo podemos transformar tu negocio con el poder de los datos.', en: 'An in-depth look at how we can transform your business with the power of data.' },
    services: [
        { title: { es: 'Consultoría Estratégica', en: 'Strategic Consulting' }, description: { es: 'Analizamos tu modelo de negocio, tus objetivos y tus datos actuales para diseñar una hoja de ruta clara y alcanzable. No se trata solo de tecnología, sino de alinear tu estrategia de datos con tus metas comerciales para un impacto real y medible.', en: 'We analyze your business model, objectives, and current data to design a clear and achievable roadmap. It’s not just about technology, but aligning your data strategy with your business goals for a real and measurable impact.' } },
        { title: { es: 'Conector Oracle NetSuite', en: 'Oracle NetSuite Connector' }, description: { es: 'Nuestro conector especializado para Oracle NetSuite te permite romper los silos de información. Sincronizamos tus datos de ERP, CRM y finanzas con otras plataformas críticas como almacenes de datos, herramientas de BI o aplicaciones personalizadas, dándote una visión 360° de tu negocio en tiempo real.', en: 'Our specialized connector for Oracle NetSuite allows you to break down information silos. We synchronize your ERP, CRM, and finance data with other critical platforms like data warehouses, BI tools, or custom applications, giving you a 360° view of your business in real time.' } },
        { title: { es: 'Ingeniería de Datos', en: 'Data Engineering' }, description: { es: 'Diseñamos y construimos la columna vertebral de tu ecosistema de datos. Desde pipelines de ETL/ELT robustos y eficientes hasta la arquitectura de data lakes y data warehouses en la nube (AWS, Azure, GCP), nos aseguramos de que tus datos sean accesibles, fiables y estén listos para el análisis.', en: 'We design and build the backbone of your data ecosystem. From robust and efficient ETL/ELT pipelines to the architecture of data lakes and data warehouses in the cloud (AWS, Azure, GCP), we ensure your data is accessible, reliable, and ready for analysis.' } },
        { title: { es: 'Visualización de Datos', en: 'Data Visualization' }, description: { es: 'Convertimos hojas de cálculo y bases de datos complejas en dashboards interactivos e intuitivos (usando herramientas como Power BI, Tableau o Looker). Empoderamos a tus equipos para que exploren los datos, descubran insights y tomen decisiones más inteligentes sin necesidad de ser analistas expertos.', en: 'We turn complex spreadsheets and databases into interactive and intuitive dashboards (using tools like Power BI, Tableau, or Looker). We empower your teams to explore data, discover insights, and make smarter decisions without needing to be expert analysts.' } }
    ]
  };

  const techStack = {
    title: { es: 'Nuestro Stack Tecnológico', en: 'Our Tech Stack' },
    databases: {
        title: { es: 'Bases de Datos y Cloud', en: 'Databases & Cloud' },
        logos: [
            { name: 'Azure', svg: (props) => <svg {...props} viewBox="0 0 128 128"><path fill="#0078d4" d="M74.39 12.35l-44.7 93.31H5.16L74.39 12.35z"/><path fill="#3cc2f0" d="M80.11 12.35l-20.42 42.6L35.6 12.35h44.51z"/><path fill="#54a7e3" d="M74.39 12.35L35.6 12.35l24.09 50.19L74.39 12.35z"/><path fill="#0078d4" d="M80.11 12.35h42.53L59.69 62.79 80.11 12.35z"/></svg> },
            { name: 'Snowflake', svg: (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#29B5E8" d="M16.42 8.355l-4.41-2.545-4.41 2.545 4.41 2.55 4.41-2.55zm.802 3.322l2.366-1.366-6.776-3.91-6.776 3.91 2.368 1.365L12 14.222l5.222-2.545zM21.58 8.357l-2.368 1.365L12 14.222l-7.212-4.5-2.368-1.365 9.58-5.534 9.58 5.534zM16.42 15.645l-4.41-2.545-4.41 2.545 4.41 2.55 4.41-2.55zm.802 3.322l2.366-1.366-6.776-3.91-6.776 3.91 2.368 1.365L12 21.222l5.222-2.545zM21.58 15.647l-2.368 1.365L12 21.222l-7.212-4.5-2.368-1.365 9.58-5.534 9.58 5.534z"/></svg> },
            { name: 'AWS', svg: (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#FF9900" d="M14.93,19.34a.52.52,0,0,1-.43-.23L12.42,15a.55.55,0,0,1,0-.56l2.08-4.14a.5.5,0,0,1,.43-.27h0a.51.51,0,0,1,.45.3l.66,1.26a.54.54,0,0,0,.46.29h0a.52.52,0,0,0,.44-.29l.67-1.26a.5.5,0,0,1,.44-.3h0a.51.51,0,0,1,.44.27l2.08,4.14a.54.54,0,0,1,0,.56L18,19.11a.51.51,0,0,1-.44.23h0a.53.53,0,0,1-.45-.29l-.66-1.25a.51.51,0,0,0-.45-.29h0a.53.53,0,0,0-.45.29l-.66,1.25a.52.52,0,0,1-.45.29ZM4.71,19.34a.53.53,0,0,1-.45-.29l-.66-1.25a.51.51,0,0,0-.45-.29h0a.53.53,0,0,0-.45.29l-.66,1.25a.52.52,0,0,1-.45.29.51.51,0,0,1-.43-.23L0,15a.55.55,0,0,1,0-.56L2.09,10.28a.5.5,0,0,1,.43-.27h0a.51.51,0,0,1,.45.3l.66,1.26a.54.54,0,0,0,.46.29h0a.52.52,0,0,0,.44-.29l.67-1.26a.5.5,0,0,1,.44-.3h0a.51.51,0,0,1,.44.27l2.08,4.14a.54.54,0,0,1,0,.56L6.59,19.11A.51.51,0,0,1,6.15,19.34Z"/></svg> },
            { name: 'Google Cloud', svg: (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#4285F4" d="M13.2,18.7a8.2,8.2,0,0,1-8.1-6.1H1.9a11.5,11.5,0,0,0,11.3,8.1,10.9,10.9,0,0,0,10.7-9.8,11.1,11.1,0,0,0-9.2-10.7,11.4,11.4,0,0,0-12,8.2H8.8A8.2,8.2,0,0,1,13.2,5.3a8.1,8.1,0,0,1,8,7.3,8.1,8.1,0,0,1-8,6.1Z"/></svg> },
        ]
    },
    visualization: {
        title: { es: 'Herramientas de Visualización', en: 'Visualization Tools' },
        logos: [
            { name: 'Power BI', svg: (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#F2C811" d="M5 4h5v16H5V4zm6 6h5v10h-5V10zm0-6h5v4h-5V4z"/></svg> },
            { name: 'Tableau', svg: (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#E15759" d="M4 11h5v2H4zm0-6h5v2H4zm0 12h5v2H4zm6-12h5v2h-5zm0 6h5v2h-5zm0 6h5v2h-5zm6-12h5v2h-5zm0 6h5v2h-5zm0 6h5v2h-5z"/></svg> },
        ]
    }
  };

  return (
    <div className="bg-primary-dark text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        
        {/* --- SECCIÓN SUPERIOR: Botón de Volver y Título --- */}
        <div className="mb-12">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            {pageContent.backLink[language]}
          </Link>
        </div>
        <div className="mb-12">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {language === 'es' ? 'Volver a la página principal' : 'Back to main page'}
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
          {pageContent.title[language]} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{pageContent.titleHighlight[language]}</span>
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
          {pageContent.subtitle[language]}
        </p>
        
        {/* --- SECCIÓN DE SERVICIOS DETALLADOS --- */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {pageContent.services.map((service, index) => (
            <div key={index} className="bg-secondary-dark p-8 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-3">{service.title[language]}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description[language]}</p>
            </div>
          ))}
        </div>

        {/* --- SECCIÓN DE STACK TECNOLÓGICO --- */}
        <div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-gray-700/50">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{techStack.title[language]}</h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-lg font-semibold text-gray-400 text-center mb-6">{techStack.databases.title[language]}</h4>
              <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                {techStack.databases.logos.map(tech => {
                  const Logo = tech.svg;
                  return (
                    <div key={tech.name} className="flex flex-col items-center gap-2 text-center" title={tech.name}>
                      <Logo className="h-12 w-12 text-gray-400" />
                      <span className="text-xs text-gray-500">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-400 text-center mb-6">{techStack.visualization.title[language]}</h4>
              <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                {techStack.visualization.logos.map(tech => {
                  const Logo = tech.svg;
                  return (
                    <div key={tech.name} className="flex flex-col items-center gap-2 text-center" title={tech.name}>
                      <Logo className="h-12 w-12 text-gray-400" />
                      <span className="text-xs text-gray-500">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceDetailPage;