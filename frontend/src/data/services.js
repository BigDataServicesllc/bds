// RUTA: frontend/src/data/services.js
// === CÓDIGO FINAL Y ALINEADO: TODOS LOS LOGOS COMO IMÁGENES PROFESIONALES ===

// 1. IMPORTAMOS LOS 9 ARCHIVOS DE LOGO (SVG, PNG, JPG)
//    Todos se tratarán como imágenes.
import awsLogo from '../assets/technologies/aws.svg';
import confluentLogo from '../assets/technologies/confluent.svg';
import dockerLogo from '../assets/technologies/docker.svg';
import githubLogo from '../assets/technologies/github.jpg';
import googleCloudLogo from '../assets/technologies/google_cloud.png';
import azureLogo from '../assets/technologies/Microsoft_azure.svg';
import oracleLogo from '../assets/technologies/oracle.svg';
import powerBiLogo from '../assets/technologies/power-bi.jpg';
import tableauLogo from '../assets/technologies/Tableau.png';
import dbtlogo from '../assets/technologies/dbt.jpg';
import pythonlogo from '../assets/technologies/python.jpg';

// El resto de la información de los servicios no cambia.
export const servicesData = [
  { 
    id: 'consultoria',
    title: { es: 'Consultoría Estratégica', en: 'Strategic Consulting' }, 
    description: { es: 'Analizamos tu modelo de negocio y tus datos para diseñar una hoja de ruta clara y alcanzable.', en: 'We analyze your business model and data to design a clear, achievable roadmap.' },
    image: '/images/consulting.jpeg',
    details: { 
        main: { es: 'Nuestra consultoría va más allá de la tecnología. Trabajamos contigo para entender tus desafíos, identificar oportunidades y crear una estrategia de datos que genere valor tangible, optimizando procesos y abriendo nuevas vías de negocio.', en: 'Our consulting goes beyond technology. We work with you to understand your challenges, identify opportunities, and create a data strategy that generates tangible value, optimizing processes and opening new business avenues.' },
        process: [
            { title: {es: 'Diagnóstico', en: 'Diagnosis'}, description: {es: 'Evaluamos tu madurez de datos actual.', en: 'We assess your current data maturity.'} },
            { title: {es: 'Estrategia', en: 'Strategy'}, description: {es: 'Diseñamos un plan de acción a medida.', en: 'We design a custom action plan.'} },
            { title: {es: 'Implementación', en: 'Implementation'}, description: {es: 'Te guiamos en la ejecución del plan.', en: 'We guide you through the plan execution.'} },
        ],
        tech: ['AWS','Confluent','Docker','Github','Google Cloud','Azure','Oracle','Power BI','Tableau','dbt','python'] 
    }
  },
  { 
    id: 'netsuite',
    title: { es: 'Integración Oracle NetSuite', en: 'Oracle NetSuite Integration' }, 
    description: { es: 'Conectamos Oracle NetSuite con tus sistemas críticos para darte una visión 360° de tu negocio.', en: 'We connect Oracle NetSuite with your critical systems to give you a 360° view of your business.' },
    image: '/images/netsuite.jpeg',
    details: { 
        main: { es: 'Con nuestro conector, la integración es fluida y robusta. Automatizamos el flujo de datos entre NetSuite y tus otras plataformas, asegurando consistencia, eliminando errores manuales y proporcionando a tus equipos la información que necesitan, cuando la necesitan.', en: 'With our connector, integration is seamless and robust. We automate the data flow between NetSuite and your other platforms, ensuring consistency, eliminating manual errors, and providing your teams with the information they need, when they need it.' },
        process: [
            { title: {es: 'Análisis', en: 'Analysis'}, description: {es: 'Identificamos los puntos de integración.', en: 'We identify integration points.'} },
            { title: {es: 'Desarrollo', en: 'Development'}, description: {es: 'Construimos y configuramos el conector.', en: 'We build and configure the connector.'} },
            { title: {es: 'Puesta en Marcha', en: 'Go-Live'}, description: {es: 'Aseguramos una transición sin fricciones.', en: 'We ensure a frictionless transition.'} },
        ],
        tech: ['AWS','Confluent','Docker','Github','Google Cloud','Azure','Oracle','Power BI','Tableau','dbt','python']
    }
  },
  { 
    id: 'ingenieria',
    title: { es: 'Ingeniería de Datos', en: 'Data Engineering' }, 
    description: { es: 'Diseñamos y construimos la columna vertebral de tu ecosistema de datos en la nube.', en: 'We design and build the backbone of your data ecosystem in the cloud.' },
    image: '/images/engineering.jpeg',
    details: { 
        main: { es: 'Construimos infraestructuras de datos escalables y seguras. Nos especializamos en arquitecturas cloud-native que no solo manejan grandes volúmenes de datos hoy, sino que están preparadas para crecer con tu negocio mañana.', en: 'We build scalable and secure data infrastructures. We specialize in cloud-native architectures that not only handle large volumes of data today but are also prepared to grow with your business tomorrow.' },
        process: [
            { title: {es: 'Arquitectura', en: 'Architecture'}, description: {es: 'Diseñamos la solución cloud ideal.', en: 'We design the ideal cloud solution.'} },
            { title: {es: 'Construcción', en: 'Build'}, description: {es: 'Desarrollamos los pipelines y data lakes.', en: 'We develop pipelines and data lakes.'} },
            { title: {es: 'Mantenimiento', en: 'Maintenance'}, description: {es: 'Monitoreamos y optimizamos el sistema.', en: 'We monitor and optimize the system.'} },
        ],
        tech: ['AWS','Confluent','Docker','Github','Google Cloud','Azure','Oracle','Power BI','Tableau','dbt','python']
    }
  },
  { 
    id: 'visualizacion',
    title: { es: 'Visualización de Datos', en: 'Data Visualization' }, 
    description: { es: 'Convertimos datos complejos en dashboards interactivos para tomar decisiones inteligentes.', en: 'We turn complex data into interactive dashboards for smarter decision-making.' },
    image: '/images/visualization.jpeg',
    details: { 
        main: { es: 'Creamos historias con tus datos. Nuestros dashboards no son solo gráficos, son herramientas de negocio que responden preguntas críticas, revelan tendencias ocultas y democratizan el acceso a la información en toda tu organización.', en: 'We create stories with your data. Our dashboards are not just charts; they are business tools that answer critical questions, reveal hidden trends, and democratize access to information throughout your organization.' },
        process: [
            { title: {es: 'Exploración', en: 'Exploration'}, description: {es: 'Entendemos tus KPIs y métricas clave.', en: 'We understand your key KPIs and metrics.'} },
            { title: {es: 'Diseño', en: 'Design'}, description: {es: 'Creamos prototipos de los dashboards.', en: 'We create dashboard prototypes.'} },
            { title: {es: 'Desarrollo', en: 'Development'}, description: {es: 'Construimos los dashboards finales.', en: 'We build the final dashboards.'} },
        ],
        tech: ['AWS','Confluent','Docker','Github','Google Cloud','Azure','Oracle','Power BI','Tableau','dbt','python']
    }
  },
];

// =========================================================================
// ====> EL CATÁLOGO DEFINITIVO USANDO <img> PARA TODOS LOS LOGOS <====
// =========================================================================
export const allTech = {
    'AWS': (props) => <img src={awsLogo} alt="AWS Logo" {...props} />,
    'Confluent': (props) => <img src={confluentLogo} alt="Confluent Logo" {...props} />,
    'Docker': (props) => <img src={dockerLogo} alt="Docker Logo" {...props} />,
    'Github': (props) => <img src={githubLogo} alt="Github Logo" {...props} />,
    'Google Cloud': (props) => <img src={googleCloudLogo} alt="Google Cloud Logo" {...props} />,
    'Azure': (props) => <img src={azureLogo} alt="Microsoft Azure Logo" {...props} />,
    'Oracle': (props) => <img src={oracleLogo} alt="Oracle Logo" {...props} />,
    'Power BI': (props) => <img src={powerBiLogo} alt="Power BI Logo" {...props} />,
    'Tableau': (props) => <img src={tableauLogo} alt="Tableau Logo" {...props} />,
    'dbt': (props) => <img src={dbtlogo} alt="dbt Logo" {...props} />,
    'python': (props) => <img src={pythonlogo} alt="Python Logo" {...props} />,
};