// RUTA: src/sections/PortfolioSection.js
import React from 'react';

const webProjects = [
  { title: 'Aramare Café', url: 'www.aramarecafe.com', link: 'https://www.aramarecafe.com/', img: '/images/aramare.png' },
  { title: 'WeBuild Argentina', url: 'www.webuildarg.com', link: 'https://www.webuildarg.com/', img: '/images/webuild.png' },
  { title: 'Tu Turno en Línea', url: 'www.tuturnoenlinea.com', link: 'https://tuturnoenlinea.com/', img: '/images/tuturno.png' },
  { title: 'Alquirate', url: 'www.alquirate.com', link: 'https://www.alquirate.com/', img: '/images/alquirate.png' }
];

const mobileApps = [
  { title: 'FlowFinanzas', link: '#', img: '/images/flowfinanzas.png' },
  { title: 'Farmaboost', link: 'https://apps.apple.com/ar/app/farmaboost/id6748421015', img: '/images/farmaboost.png' },
  { title: 'Tu Turno en Línea App', link: 'https://apps.apple.com/us/app/tu-turno-en-l%C3%ADnea-reservas/id6757831348', img: '/images/tuturno_app.png' }
];

const PortfolioSection = ({ language = 'es' }) => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Sección Web */}
        <div className="mb-32">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            {language === 'es' ? 'Desarrollo Web y Landing Pages' : 'Web Development & Landing Pages'}
          </h2>
          <p className="text-slate-500 mb-12 max-w-lg">
            {language === 'es' 
              ? 'Creamos sitios web de alto impacto diseñados para convertir visitantes en clientes.' 
              : 'We create high-impact websites designed to turn visitors into clients.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {webProjects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" className="block group">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 mb-4 group-hover:shadow-md transition-all">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-medium text-slate-900">{p.title}</h3>
                <span className="text-xs text-teal-600">{p.url}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sección Apps */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            {language === 'es' ? 'Desarrollo de Aplicaciones Móviles' : 'Mobile App Development'}
          </h2>
          <p className="text-slate-500 mb-12 max-w-lg">
            {language === 'es' 
              ? 'Soluciones móviles escalables que optimizan la gestión y el acceso a tus servicios.' 
              : 'Scalable mobile solutions that optimize management and access to your services.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileApps.map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-500 transition-all">
                <div className="w-16 h-16 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{a.title}</h3>
                  <span className="text-xs text-teal-600 block mt-1">
                    {language === 'es' ? 'Ver detalles' : 'View details'} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;