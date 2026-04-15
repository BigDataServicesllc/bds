import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { useNavigate, useOutletContext, Link } from 'react-router-dom';
import HomeSection from '../components/HomeSection';

// Importar imágenes
import Dashboard from '../assets/images/Dashboard.png';
import Dashboard3 from '../assets/images/Dashboard3.png';
import WebDesign01 from '../assets/images/web_desing_01.png';
import WebDesign02 from '../assets/images/web_desing_02.png';
import WebDesign03 from '../assets/images/web_desing_03.png';

// Importar logos de stores
import AppStoreBadge from '../assets/stores/app_store_badge.svg.png';
import GooglePlayBadge from '../assets/stores/google_play_badge.png';

const courseCards = [
  {
    title: {
      es: 'Cursos Especializados',
      en: 'Specialized Courses',
    },
    description: {
      es: 'Programas enfocados en BI, análisis avanzado y automatización para equipos que quieren decidir con datos.',
      en: 'Programs focused on BI, advanced analytics and automation for teams that want to decide with data.',
    },
  },
  {
    title: {
      es: 'Capacitaciones Personalizadas',
      en: 'Personalized Training',
    },
    description: {
      es: 'Formaciones diseñadas para tu industria, desde finanzas hasta retail y operación comercial.',
      en: 'Training designed for your industry, from finance to retail and commercial operations.',
    },
  },
  {
    title: {
      es: 'Certificado Udemy Disponible',
      en: 'Udemy Certificate Available',
    },
    description: {
      es: 'Acompañamos tu aprendizaje con certificación reconocida para potenciar el perfil profesional.',
      en: 'We support your learning with recognized certification to boost your professional profile.',
    },
    highlight: true,
  },
];

const expertiseCards = [
  {
    title: {
      es: 'Análisis Avanzado',
      en: 'Advanced Analytics',
    },
    description: {
      es: 'Modelos, dashboards y métricas que conectan datos con decisiones estratégicas.',
      en: 'Models, dashboards and metrics that connect data with strategic decisions.',
    },
  },
  {
    title: {
      es: 'Ingeniería de Datos',
      en: 'Data Engineering',
    },
    description: {
      es: 'Arquitecturas limpias, pipelines confiables y datos disponibles en tiempo real.',
      en: 'Clean architectures, reliable pipelines and data available in real time.',
    },
  },
  {
    title: {
      es: 'Estrategia de Negocios',
      en: 'Business Strategy',
    },
    description: {
      es: 'Transformamos desafíos complejos en iniciativas medibles con impacto real.',
      en: 'We turn complex challenges into measurable initiatives with real impact.',
    },
  },
];

const HomePage = () => {
  const { language } = useOutletContext();
  const navigate = useNavigate();

  const coursesTitle =
    language === 'es'
      ? 'Formación 100% Práctica'
      : '100% Hands-On Training';
  const teamTitle =
    language === 'es'
      ? 'Un Equipo de Expertos Dedicado a tu Negocio'
      : 'A Team of Experts Dedicated to Your Business';

  return (
    <>
      <SEO 
        title={language === 'es' ? 'Inicio' : 'Home'}
        description={language === 'es' 
          ? 'Big Data Services ofrece soluciones avanzadas en análisis de datos, desarrollo de aplicaciones móviles y web, y estrategia de negocios. Transforma tus datos en decisiones estratégicas.' 
          : 'Big Data Services offers advanced solutions in data analytics, mobile and web application development, and business strategy. Transform your data into strategic decisions.'}
        keywords="Data Analysis, Big Data, Software Development, App Development, Business Intelligence"
      />
      <HomeSection language={language} />

      {/* Sección de Formación - Diseño Estático con Cuadros */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white py-24 sm:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.22em] text-bds-violet mb-4">
              {language === 'es' ? 'Academia de Datos BDS' : 'BDS Data Academy'}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight">
              {coursesTitle}
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Aprende con proyectos reales. Desde dashboards interactivos hasta automatización de procesos, todo basado en casos del mundo real.'
                : 'Learn with real projects. From interactive dashboards to process automation, all based on real-world cases.'}
            </p>
          </div>

          {/* Layout con Imagen y Cuadros */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imágenes Estáticas en Columna */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={Dashboard}
                    alt="Dashboard Analytics Training 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={Dashboard3}
                    alt="Dashboard Analytics Training 3"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Cuadros de Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-6"
            >
              {courseCards.map((card, index) => (
                <motion.div
                  key={card.title.en}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-lg hover:border-bds-violet hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-950 mb-2">
                        {card.title[language]}
                      </h3>
                      {card.highlight && (
                        <span className="inline-flex rounded-full border border-bds-violet bg-bds-violet/10 px-3 py-1 text-xs font-semibold text-bds-violet">
                          {language === 'es' ? 'Certificado Udemy Disponible' : 'Udemy Certificate Available'}
                        </span>
                      )}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bds-violet/10 text-bds-violet ml-4">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    {card.description[language]}
                  </p>
                </motion.div>
              ))}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => navigate('/academia')}
                  className="inline-flex items-center justify-center rounded-full bg-bds-aqua px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-bds-violet hover:text-white hover:scale-105"
                >
                  {language === 'es' ? 'Explorar Cursos' : 'Explore Courses'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-slate-950 py-24 sm:py-32 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--bds-aqua)]/80 mb-4">
              {language === 'es' ? 'Tu Socio Tecnológico en Data' : 'Your Technology Partner in Data'}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              {teamTitle}
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Nuestro equipo combina visión estratégica, ingeniería de datos y análisis profundo para resolver los retos más complejos de tu negocio.'
                : 'Our team combines strategic vision, data engineering and deep analytics to solve your business’s most complex challenges.'}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-800 bg-white/5 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--bds-aqua)]/10 text-[var(--bds-aqua)] mb-6">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                    {index === 0 ? (
                      <path d="M4 6h16M4 12h11M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                    ) : index === 1 ? (
                      <path d="M6 4h12l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                      <path d="M4 6h16M4 12h8m-8 6h6" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{card.title[language] || card.title.en}</h3>
                <p className="text-sm leading-7 text-slate-300">{card.description[language] || card.description.en}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center rounded-full bg-[var(--bds-aqua)] px-8 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[var(--bds-violet)]"
            >
              {language === 'es' ? 'Hablar con un Especialista' : 'Talk to a Specialist'}
            </button>
          </div>
        </div>
      </motion.section>

      {/* Sección: Portafolio Web Horizontal - Estilo Apple Showcase */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-24 sm:py-32 overflow-hidden border-t border-slate-100"
      >
        <div className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-bds-violet mb-4 font-bold">
              {language === 'es' ? 'Desarrollo Web de Alto Rendimiento' : 'High-Performance Web Development'}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight">
              {language === 'es' ? 'Proyectos que Marcan la Diferencia' : 'Projects That Make a Difference'}
            </h2>
          </div>
        </div>

        {/* Carrusel Horizontal de Ventanas Identicas */}
        <div className="relative">
          <motion.div 
            className="flex gap-8 px-6 md:px-20 pb-12 overflow-x-auto no-scrollbar"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { img: WebDesign01, title: 'Aramare Café', url: 'www.aramarecafe.com' },
              { img: WebDesign02, title: 'WeBuild Argentina', url: 'www.webuildarg.com' },
              { img: WebDesign03, title: 'Tu Turno en Línea', url: 'www.tuturnoenlinea.com' }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="flex-none w-[300px] md:w-[600px] group transition-all duration-500"
              >
                {/* Ventana de Safari Proporcionada */}
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 bg-white">
                  {/* Header Safari */}
                  <div className="h-10 bg-slate-50 flex items-center justify-between px-4 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium bg-white px-6 py-1 rounded-md border border-slate-100">
                      {project.url}
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Imagen con Aspect Ratio fijo (para que todas sean iguales) */}
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay Hover */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        to="/portfolio"
                        className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-bds-aqua transition-colors"
                      >
                        {language === 'es' ? 'Ver Detalles Técnicos' : 'View Tech Details'}
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 px-2">
                  <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    {idx === 0 ? 'E-commerce & Analytics' : idx === 1 ? 'Corporate Engineering' : 'Smart Scheduling System'}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Nueva Sección: Desarrollo de Aplicaciones Móviles */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-slate-50 py-24 sm:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.22em] text-bds-violet mb-4">
              {language === 'es' ? 'Desarrollo de Apps Móviles' : 'Mobile App Development'}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight">
              {language === 'es' ? 'Apps Publicadas en Tiendas Oficiales' : 'Apps Published on Official Stores'}
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Desarrollamos aplicaciones móviles nativas y multiplataforma, publicadas en Apple App Store y Google Play Store para llegar a millones de usuarios.'
                : 'We develop native and cross-platform mobile applications, published on Apple App Store and Google Play Store to reach millions of users.'}
            </p>
          </div>

          {/* Logos de Stores */}
          <div className="flex justify-center items-center gap-8">
            <motion.a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hover:scale-105 transition-transform"
            >
              <img
                src={AppStoreBadge}
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </motion.a>
            <motion.a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hover:scale-105 transition-transform"
            >
              <img
                src={GooglePlayBadge}
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </motion.a>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => navigate('/contacto')}
              className="inline-flex items-center justify-center rounded-full bg-bds-violet px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-bds-aqua hover:scale-105"
            >
              {language === 'es' ? 'Desarrollar Mi App' : 'Develop My App'}
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomePage;
