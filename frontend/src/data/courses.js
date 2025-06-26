// RUTA: frontend/src/data/courses.js

export const coursesData = [
  {
    id: 'futbol-y-datos-power-bi',
    image: '/images/futbol-y-datos-power-bi.jpg',
    title: { es: 'Fútbol y Datos: Tu Primer Dashboard en Power BI', en: 'Football & Data: Your First Dashboard in Power BI' },
    shortDescription: {
      es: '¡Nuestro curso más popular! Transforma tu pasión por el fútbol en una habilidad profesional creando un dashboard interactivo con datos reales de la Premier League.',
      en: 'Our most popular course! Turn your passion for football into a professional skill by creating an interactive dashboard with real Premier League data.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: 'https://www.udemy.com/course/futbol-y-datos-construye-tu-primer-dashboard-en-power-bi/learn/lecture/46038939#overview',
    details: {
      main: {
        es: '¿Te apasiona el fútbol y quieres aprender a visualizar datos de manera efectiva? En "Fútbol y Datos", te enseñaré a crear un dashboard interactivo utilizando datos reales de la English Premier League. No necesitas experiencia previa en Power BI; este curso es perfecto para todos, desde aficionados al deporte hasta profesionales en busca de nuevas habilidades. Aprenderás a interpretar y comunicar información de manera efectiva, transformando datos en historias visuales que capturan la atención.',
        en: 'Passionate about football and want to learn how to visualize data effectively? In "Football & Data", I will teach you to create an interactive dashboard using real data from the English Premier League. No prior Power BI experience is needed; this course is perfect for everyone, from sports fans to professionals seeking new skills. You will learn to interpret and communicate information effectively, turning data into captivating visual stories.',
      },
      topics: [
        { es: 'Conexión a Bases de Datos y consultas SQL con CTE', en: 'Database Connection and SQL queries with CTE' },
        { es: 'Creación de Medidas de Performance y con Time Intelligence', en: 'Creating Performance and Time Intelligence Measures' },
        { es: 'Uso de Tarjetas Dinámicas y Formatos Condicionales', en: 'Using Dynamic Cards and Conditional Formatting' },
        { es: 'Diseño de Mockups y construcción de Gráficos Dinámicos', en: 'Mockup Design and building Dynamic Charts' },
        { es: 'Entendiendo el contexto de filtro de Power BI', en: 'Understanding Power BI\'s filter context' },
        { es: 'Buenas prácticas y consejos profesionales', en: 'Best practices and professional tips' },
      ],
      targetAudience: {
        es: 'Estudiantes, profesionales del análisis, marketing, periodismo deportivo y cualquier aficionado al fútbol que quiera aprender Power BI de una forma divertida.',
        en: 'Students, professionals in analysis, marketing, sports journalism, and any football fan who wants to learn Power BI in a fun way.',
      }
    }
  },
  {
    id: 'analisis-ventas-power-bi',
    image: '/images/analisis-ventas-power-bi.jpg', 
    title: { es: 'Análisis de Ventas en Power BI: Caso PS5', en: 'Sales Analysis in Power BI: PS5 Case Study' },
    shortDescription: {
      es: 'Combina tu pasión por los videojuegos y los datos. Aprende a crear un análisis de ventas avanzado en Power BI utilizando un caso real del mundo del gaming.',
      en: 'Combine your passion for video games and data. Learn to create an advanced sales analysis in Power BI using a real-world gaming case study.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: 'https://www.udemy.com/course/gaming-y-datos-analisis-avanzado-de-ventas-de-ps5-en-power/learn/lecture/46370003#overview',
    details: {
      main: {
        es: 'En este curso aprenderás a transformar datos de ventas de consolas PlayStation 5 en poderosas visualizaciones y análisis estratégicos. Cubriremos desde consultas avanzadas en SQL y medidas de Time Intelligence, hasta el diseño de layouts profesionales con navegación dinámica y formatos condicionales para resaltar la información clave. Estarás equipado para tomar decisiones informadas basadas en datos.',
        en: 'In this course, you will learn to transform PlayStation 5 console sales data into powerful visualizations and strategic analyses. We will cover everything from advanced SQL queries and Time Intelligence measures to designing professional layouts with dynamic navigation and conditional formatting to highlight key information. You will be equipped to make informed, data-driven decisions.',
      },
      topics: [
        { es: 'Conexión a Bases de Datos y creación de columnas calculadas', en: 'Database Connection and creating calculated columns' },
        { es: 'Medidas avanzadas con Time Intelligence', en: 'Advanced measures with Time Intelligence' },
        { es: 'Diseño de Layouts profesionales y navegación de páginas', en: 'Designing professional Layouts and page navigation' },
        { es: 'Configuración de botones y slicers sincronizados', en: 'Configuring custom buttons and synchronized slicers' },
        { es: 'Aplicación de formatos condicionales en tablas y tarjetas', en: 'Applying conditional formatting in tables and cards' },
        { es: 'Creación de Gráficos Dinámicos para análisis de tendencias', en: 'Creating Dynamic Charts for trend analysis' },
      ],
      targetAudience: {
        es: 'Analistas de datos, entusiastas del gaming y cualquier persona interesada en aprender a utilizar Power BI para el análisis de ventas en un contexto práctico.',
        en: 'Data analysts, gaming enthusiasts, and anyone interested in learning to use Power BI for sales analysis in a practical context.',
      }
    }
  },
  {
    id: 'excel-elemental-empresas',
    image: '/images/excel-elemental-empresas.jpg',
    title: { es: 'Excel Elemental para Empresas', en: 'Essential Excel for Business' },
    shortDescription: {
      es: 'Domina la herramienta esencial de cualquier oficina. Aprende desde cero a manejar hojas de cálculo, crear tablas dinámicas y gráficos para ser más productivo.',
      en: 'Master the essential tool of any office. Learn from scratch to manage spreadsheets, create pivot tables, and charts to be more productive.',
    },
    duration: { es: '4 horas de video', en: '4 hours of video' },
    udemyLink: 'https://www.udemy.com/course/excel-elemental-para-empresas/learn/lecture/49232135#overview',
    details: {
      main: {
        es: 'Este curso está diseñado para principiantes que buscan entender cómo utilizar Excel de manera eficiente para mejorar su productividad en el trabajo. A través de ejemplos prácticos y fáciles de seguir, aprenderás a manejar hojas de cálculo, organizar datos, realizar cálculos básicos, crear gráficos y tablas dinámicas, y mucho más. Aplicarás fórmulas clave como SUMA, PROMEDIO y la función SI para automatizar tus tareas.',
        en: 'This course is designed for beginners looking to understand how to use Excel efficiently to improve their productivity at work. Through practical and easy-to-follow examples, you will learn to manage spreadsheets, organize data, perform basic calculations, create charts and pivot tables, and much more. You will apply key formulas like SUM, AVERAGE, and the IF function to automate your tasks.',
      },
      topics: [
        { es: 'Operaciones y navegación básica en Excel', en: 'Basic operations and navigation in Excel' },
        { es: 'Uso de fórmulas y funciones esenciales (SUMA, PROMEDIO, SI)', en: 'Using essential formulas and functions (SUM, AVERAGE, IF)' },
        { es: 'Creación y formato de Tablas Dinámicas', en: 'Creating and formatting Pivot Tables' },
        { es: 'Diseño de Gráficos para presentar datos', en: 'Designing Charts to present data' },
        { es: 'Funciones anidadas y combinadas', en: 'Nested and combined functions' },
        { es: 'Construcción de tu primer Dashboard de control', en: 'Building your first control Dashboard' },
      ],
      targetAudience: {
        es: 'Estudiantes, profesionales de todas las áreas y cualquier persona que desee construir una base sólida en Excel para mejorar su desempeño laboral.',
        en: 'Students, professionals from all fields, and anyone who wants to build a solid foundation in Excel to improve their job performance.',
      }
    }
  },
  {
    id: 'fundamentos-power-bi',
    image: '/images/fundamentos-power-bi.jpg',
    title: { es: 'Fundamentos de Power BI', en: 'Power BI Fundamentals' },
    shortDescription: {
      es: 'Iníciate en el mundo del Business Intelligence. Aprende a conectar datos, crear visualizaciones interactivas y construir tus primeros informes profesionales.',
      en: 'Start in the world of Business Intelligence. Learn to connect data, create interactive visualizations, and build your first professional reports.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'Este curso es tu punto de partida para dominar Power BI. Te llevaremos paso a paso desde la conexión de tus primeras fuentes de datos (como Excel o CSV) hasta la publicación de un informe interactivo. Entenderás la interfaz, cómo transformar datos en Power Query y cómo utilizar las visualizaciones más comunes para contar una historia clara con tus datos.',
        en: 'This course is your starting point to mastering Power BI. We will take you step-by-step from connecting your first data sources (like Excel or CSV) to publishing an interactive report. You will understand the interface, how to transform data in Power Query, and how to use the most common visualizations to tell a clear story with your data.',
      },
      topics: [
        { es: 'Introducción a la interfaz de Power BI Desktop', en: 'Introduction to the Power BI Desktop interface' },
        { es: 'Conexión a fuentes de datos (Excel, CSV, Web)', en: 'Connecting to data sources (Excel, CSV, Web)' },
        { es: 'Transformación y limpieza básica de datos en Power Query', en: 'Basic data transformation and cleaning in Power Query' },
        { es: 'Creación de visualizaciones (barras, líneas, tarjetas, mapas)', en: 'Creating visualizations (bars, lines, cards, maps)' },
        { es: 'Uso de filtros y segmentaciones de datos (slicers)', en: 'Using filters and data slicers' },
        { es: 'Publicación de informes en Power BI Service', en: 'Publishing reports to Power BI Service' },
      ],
      targetAudience: {
        es: 'Profesionales de cualquier área que deseen empezar a analizar sus propios datos de forma visual y sin necesidad de conocimientos técnicos previos.',
        en: 'Professionals from any field who want to start analyzing their own data visually, without prior technical knowledge.',
      }
    }
  },
  {
    id: 'dbt-fundamentals',
    image: '/images/dbt-fundamentals.jpg',
    title: { es: 'dbt Fundamentals', en: 'dbt Fundamentals' },
    shortDescription: {
      es: 'Aprende a transformar datos directamente en tu data warehouse. Domina los conceptos de dbt para construir flujos de datos robustos, testeados y documentados.',
      en: 'Learn to transform data directly in your data warehouse. Master dbt concepts to build robust, tested, and documented data pipelines.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'Curso introductorio para aprender los conceptos clave de dbt, desde la instalación y configuración de tu primer proyecto hasta la creación de modelos de transformación que siguen las mejores prácticas de la ingeniería de software. Entenderás por qué dbt se ha convertido en el estándar de la industria para la capa de transformación.',
        en: 'Introductory course to learn the key concepts of dbt, from installing and setting up your first project to creating transformation models that follow software engineering best practices. You will understand why dbt has become the industry standard for the transformation layer.',
      },
      topics: [
        { es: 'Configuración de un proyecto dbt y conexión al warehouse', en: 'Setting up a dbt project and connecting to the warehouse' },
        { es: 'Creación de tus primeros modelos (models)', en: 'Creating your first models' },
        { es: 'Definición de fuentes (sources) y uso de `ref()`', en: 'Defining sources and using `ref()`' },
        { es: 'Implementación de pruebas de datos (tests) para asegurar calidad', en: 'Implementing data tests to ensure quality' },
        { es: 'Documentación de tu proyecto para colaboración', en: 'Documenting your project for collaboration' },
        { es: 'Materializaciones: Vistas vs. Tablas', en: 'Materializations: Views vs. Tables' },
      ],
      targetAudience: {
        es: 'Analistas de datos, ingenieros de datos y cualquier profesional que trabaje con SQL y quiera aplicar principios de ingeniería de software a sus transformaciones.',
        en: 'Data analysts, data engineers, and any professional working with SQL who wants to apply software engineering principles to their transformations.',
      }
    }
  },
  {
    id: 'dbt-advanced',
    image: '/images/dbt-advanced.jpg',
    title: { es: 'dbt Advanced', en: 'dbt Advanced' },
    shortDescription: {
      es: 'Lleva tus habilidades en dbt al siguiente nivel. Aprende a crear macros, optimizar el rendimiento y gestionar proyectos complejos a escala empresarial.',
      en: 'Take your dbt skills to the next level. Learn to create macros, optimize performance, and manage complex projects at an enterprise scale.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'Este curso avanzado está enfocado en la optimización de modelos, el uso de macros en Jinja para no repetir código, la gestión de paquetes y las estrategias de orquestación. Está diseñado para llevar los flujos de transformación a escala empresarial, garantizando rendimiento, mantenibilidad y buenas prácticas.',
        en: 'This advanced course focuses on model optimization, using Jinja macros to avoid repeating code, package management, and orchestration strategies. It is designed to scale transformation workflows to an enterprise level, ensuring performance, maintainability, and best practices.',
      },
      topics: [
        { es: 'Desarrollo de macros personalizadas con Jinja', en: 'Developing custom macros with Jinja' },
        { es: 'Estrategias de materialización incremental', en: 'Incremental materialization strategies' },
        { es: 'Optimización de rendimiento y análisis de costos', en: 'Performance optimization and cost analysis' },
        { es: 'Uso de "hooks" y operaciones pre/post', en: 'Using hooks and pre/post operations' },
        { es: 'Gestión de paquetes y dependencias de dbt', en: 'Managing dbt packages and dependencies' },
        { es: 'Integración con orquestadores como Airflow', en: 'Integration with orchestrators like Airflow' },
      ],
      targetAudience: {
        es: 'Ingenieros y analistas de datos con experiencia en dbt que buscan profundizar en sus funcionalidades avanzadas para gestionar proyectos complejos.',
        en: 'Data engineers and analysts with dbt experience looking to delve into its advanced features to manage complex projects.',
      }
    }
  },
  {
    id: 'manejo-sql',
    image: '/images/manejo-sql.jpg',
    title: { es: 'Manejo de SQL para Análisis de Datos', en: 'SQL for Data Analysis' },
    shortDescription: {
      es: 'Aprende el lenguaje de los datos. Domina las consultas SQL para extraer, filtrar y agregar información de bases de datos de forma eficiente.',
      en: 'Learn the language of data. Master SQL queries to efficiently extract, filter, and aggregate information from databases.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'SQL es la habilidad fundamental para cualquier rol en el mundo de los datos. En este curso, aprenderás desde las consultas más básicas hasta operaciones complejas como los JOINs y las funciones de agregación. A través de ejercicios prácticos, ganarás la confianza para interactuar con bases de datos relacionales y extraer los insights que tu negocio necesita.',
        en: 'SQL is the fundamental skill for any role in the data world. In this course, you will learn from the most basic queries to complex operations like JOINs and aggregate functions. Through practical exercises, you will gain the confidence to interact with relational databases and extract the insights your business needs.',
      },
      topics: [
        { es: 'Consultas `SELECT` con cláusulas `WHERE`, `ORDER BY` y `LIMIT`', en: '`SELECT` queries with `WHERE`, `ORDER BY`, and `LIMIT` clauses' },
        { es: 'Funciones de agregación (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`)', en: 'Aggregate functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`)' },
        { es: 'Agrupación de datos con `GROUP BY`', en: 'Grouping data with `GROUP BY`' },
        { es: 'Combinación de tablas con `INNER JOIN` y `LEFT JOIN`', en: 'Combining tables with `INNER JOIN` and `LEFT JOIN`' },
        { es: 'Subconsultas (subqueries) para análisis complejos', en: 'Subqueries for complex analysis' },
        { es: 'Expresiones `CASE` para lógica condicional', en: '`CASE` expressions for conditional logic' },
      ],
      targetAudience: {
        es: 'Futuros analistas, científicos de datos, profesionales de marketing, y cualquiera que necesite consultar bases de datos sin depender de un equipo técnico.',
        en: 'Aspiring analysts, data scientists, marketing professionals, and anyone who needs to query databases without relying on a technical team.',
      }
    }
  },
  {
    id: 'github-basico',
    image: '/images/github-basico.jpg',
    title: { es: 'GitHub Básico para Equipos de Datos', en: 'Basic GitHub for Data Teams' },
    shortDescription: {
      es: 'Deja de nombrar archivos como "reporte_final_v2_final.xlsx". Aprende a versionar tu código, colaborar en equipo y gestionar tus proyectos de datos con Git y GitHub.',
      en: 'Stop naming files like "report_final_v2_final.xlsx". Learn to version your code, collaborate as a team, and manage your data projects with Git and GitHub.',
    },
    duration: { es: '3 horas de video', en: '3 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'El control de versiones es una práctica esencial, también en el mundo de los datos. Este curso te introduce a los conceptos fundamentales de Git y GitHub, enfocándose en el flujo de trabajo de un analista o científico de datos. Aprenderás a guardar tu trabajo, volver a versiones anteriores y colaborar en scripts de SQL, notebooks de Python y proyectos de BI.',
        en: 'Version control is an essential practice, also in the data world. This course introduces you to the fundamental concepts of Git and GitHub, focusing on the workflow of a data analyst or scientist. You will learn to save your work, revert to previous versions, and collaborate on SQL scripts, Python notebooks, and BI projects.',
      },
      topics: [
        { es: 'Conceptos clave: Repositorio, Commit, Branch, Merge', en: 'Key concepts: Repository, Commit, Branch, Merge' },
        { es: 'Flujo de trabajo básico: `clone`, `add`, `commit`, `push`', en: 'Basic workflow: `clone`, `add`, `commit`, `push`' },
        { es: 'Creación y gestión de ramas (branches) para trabajar en paralelo', en: 'Creating and managing branches to work in parallel' },
        { es: 'Resolución de conflictos de merge básicos', en: 'Resolving basic merge conflicts' },
        { es: 'Uso de `.gitignore` para ignorar archivos sensibles o temporales', en: 'Using `.gitignore` to ignore sensitive or temporary files' },
        { es: 'Colaboración a través de Pull Requests', en: 'Collaboration through Pull Requests' },
      ],
      targetAudience: {
        es: 'Analistas, científicos de datos y cualquier profesional que escriba código (SQL, Python, R) y quiera adoptar buenas prácticas de control de versiones.',
        en: 'Analysts, data scientists, and any professional who writes code (SQL, Python, R) and wants to adopt best practices for version control.',
      }
    }
  },
  {
    id: 'programacion-python',
    image: '/images/programacion-python.jpg',
    title: { es: 'Programación Básica con Python', en: 'Basic Programming with Python' },
    shortDescription: {
      es: 'Inicia tu camino como programador. Aprende los fundamentos de Python, el lenguaje líder en ciencia de datos, inteligencia artificial y desarrollo web.',
      en: 'Start your journey as a programmer. Learn the fundamentals of Python, the leading language in data science, artificial intelligence, and web development.',
    },
    duration: { es: '3-4 horas de video', en: '3-4 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'Este curso está diseñado para personas sin experiencia previa en programación. Te enseñaremos los pilares del lenguaje Python, desde variables y tipos de datos, hasta bucles y funciones. Con una aproximación práctica, escribirás tus primeros programas y construirás una base sólida para especializarte en áreas como el análisis de datos o el desarrollo de aplicaciones.',
        en: 'This course is designed for people with no prior programming experience. We will teach you the pillars of the Python language, from variables and data types to loops and functions. With a hands-on approach, you will write your first programs and build a solid foundation to specialize in areas like data analysis or application development.',
      },
      topics: [
        { es: 'Variables y tipos de datos (números, strings, booleanos)', en: 'Variables and data types (numbers, strings, booleans)' },
        { es: 'Estructuras de datos: Listas, Tuplas y Diccionarios', en: 'Data structures: Lists, Tuples, and Dictionaries' },
        { es: 'Operadores lógicos y de comparación', en: 'Logical and comparison operators' },
        { es: 'Control de flujo con `if`, `elif` y `else`', en: 'Flow control with `if`, `elif`, and `else`' },
        { es: 'Bucles `for` y `while` para iterar tareas', en: '`for` and `while` loops to iterate tasks' },
        { es: 'Creación y uso de funciones para organizar el código', en: 'Creating and using functions to organize code' },
      ],
      targetAudience: {
        es: 'Principiantes absolutos, estudiantes, y profesionales que deseen aprender a programar desde cero con un lenguaje versátil y de alta demanda.',
        en: 'Absolute beginners, students, and professionals who want to learn to program from scratch with a versatile and high-demand language.',
      }
    }
  },
  {
    id: 'modelos-predictivos-python',
    image: '/images/modelos-predictivos-python.jpg',
    title: { es: 'Modelos Predictivos con Python', en: 'Predictive Models with Python' },
    shortDescription: {
      es: 'Aprende a predecir el futuro con datos. Construye, entrena y evalúa tus primeros modelos de Machine Learning utilizando Python, Pandas y Scikit-learn.',
      en: 'Learn to predict the future with data. Build, train, and evaluate your first Machine Learning models using Python, Pandas, and Scikit-learn.',
    },
    duration: { es: '3-4 horas de video', en: '3-4 hours of video' },
    udemyLink: null,
    details: {
      main: {
        es: 'Adéntrate en el emocionante mundo del Machine Learning. Este curso práctico te guiará a través del ciclo de vida completo de un proyecto de modelado predictivo. Aprenderás a limpiar y preparar datos, seleccionar las características adecuadas, entrenar modelos clásicos como la Regresión Lineal y los Árboles de Decisión, y a medir su rendimiento de forma correcta para evitar errores comunes.',
        en: 'Enter the exciting world of Machine Learning. This practical course will guide you through the complete lifecycle of a predictive modeling project. You will learn to clean and prepare data, select the right features, train classic models like Linear Regression and Decision Trees, and correctly measure their performance to avoid common mistakes.',
      },
      topics: [
        { es: 'Introducción al ciclo de vida del Machine Learning', en: 'Introduction to the Machine Learning lifecycle' },
        { es: 'Manipulación y limpieza de datos con Pandas', en: 'Data manipulation and cleaning with Pandas' },
        { es: 'Modelos de Regresión para predecir valores numéricos', en: 'Regression models to predict numerical values' },
        { es: 'Modelos de Clasificación para predecir categorías', en: 'Classification models to predict categories' },
        { es: 'División de datos: set de entrenamiento y prueba', en: 'Data splitting: training and testing sets' },
        { es: 'Métricas de evaluación de modelos (Accuracy, R-squared, etc.)', en: 'Model evaluation metrics (Accuracy, R-squared, etc.)' },
      ],
      targetAudience: {
        es: 'Estudiantes y profesionales con conocimientos básicos de Python que deseen iniciarse en el campo del Machine Learning y la ciencia de datos.',
        en: 'Students and professionals with basic Python knowledge who want to get started in the field of Machine Learning and data science.',
      }
    }
  },
];