// RUTA: frontend/src/data/services.js
// NUEVO ARCHIVO

// Este es nuestro único archivo de verdad para los datos de los servicios.
// CAMBIO IMPORTANTE: He añadido un 'id' único para cada servicio.
export const servicesData = [
  { 
    id: 'consultoria', // ID único para la URL
    title: { es: 'Consultoría Estratégica', en: 'Strategic Consulting' }, 
    description: { es: 'Analizamos tu modelo de negocio y tus datos para diseñar una hoja de ruta clara y alcanzable. Alineamos la tecnología con tus metas comerciales para un impacto real.', en: 'We analyze your business model and data to design a clear, achievable roadmap. We align technology with your business goals for a real impact.' },
    image: '/images/consulting.jpeg',
    details: { es: 'Nuestra consultoría va más allá de la tecnología. Trabajamos contigo para entender tus desafíos, identificar oportunidades y crear una estrategia de datos que genere valor tangible, optimizando procesos y abriendo nuevas vías de negocio.', en: 'Our consulting goes beyond technology. We work with you to understand your challenges, identify opportunities, and create a data strategy that generates tangible value, optimizing processes and opening new business avenues.' }
  },
  { 
    id: 'netsuite',
    title: { es: 'Integración Oracle NetSuite', en: 'Oracle NetSuite Integration' }, 
    description: { es: 'Conectamos Oracle NetSuite con tus sistemas críticos (ERP, CRM) para romper los silos de información, sincronizar datos y darte una visión 360° de tu negocio en tiempo real.', en: 'We connect Oracle NetSuite with your critical systems (ERP, CRM) to break information silos, sync data, and give you a real-time 360° view of your business.' },
    image: '/images/netsuite.jpeg',
    details: { es: 'Con nuestro conector, la integración es fluida y robusta. Automatizamos el flujo de datos entre NetSuite y tus otras plataformas, asegurando consistencia, eliminando errores manuales y proporcionando a tus equipos la información que necesitan, cuando la necesitan.', en: 'With our connector, integration is seamless and robust. We automate the data flow between NetSuite and your other platforms, ensuring consistency, eliminating manual errors, and providing your teams with the information they need, when they need it.' }
  },
  { 
    id: 'ingenieria',
    title: { es: 'Ingeniería de Datos', en: 'Data Engineering' }, 
    description: { es: 'Diseñamos y construimos la columna vertebral de tu ecosistema de datos. Desde pipelines robustos (ETL/ELT) hasta data lakes y data warehouses en la nube (AWS, Azure, GCP).', en: 'We design and build the backbone of your data ecosystem. From robust pipelines (ETL/ELT) to cloud-based data lakes and warehouses (AWS, Azure, GCP).' },
    image: '/images/engineering.jpeg',
    details: { es: 'Construimos infraestructuras de datos escalables y seguras. Nos especializamos en arquitecturas cloud-native que no solo manejan grandes volúmenes de datos hoy, sino que están preparadas para crecer con tu negocio mañana.', en: 'We build scalable and secure data infrastructures. We specialize in cloud-native architectures that not only handle large volumes of data today but are also prepared to grow with your business tomorrow.' }
  },
  { 
    id: 'visualizacion',
    title: { es: 'Visualización de Datos', en: 'Data Visualization' }, 
    description: { es: 'Convertimos hojas de cálculo y bases de datos complejas en dashboards interactivos e intuitivos (Power BI, Tableau) que permiten a tus equipos explorar insights y tomar decisiones más inteligentes.', en: 'We turn complex spreadsheets and databases into interactive, intuitive dashboards (Power BI, Tableau) that empower your teams to explore insights and make smarter decisions.' },
    image: '/images/visualization.jpeg',
    details: { es: 'Creamos historias con tus datos. Nuestros dashboards no son solo gráficos, son herramientas de negocio que responden preguntas críticas, revelan tendencias ocultas y democratizan el acceso a la información en toda tu organización.', en: 'We create stories with your data. Our dashboards are not just charts; they are business tools that answer critical questions, reveal hidden trends, and democratize access to information throughout your organization.' }
  },
];