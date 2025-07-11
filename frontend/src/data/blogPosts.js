// RUTA: frontend/src/data/blogPosts.js

// Para un blog real, podrías obtener estos datos de un CMS (Content Management System)
// Por ahora, los definimos aquí para que sea fácil empezar.

export const blogPostsData = [
  {
    slug: '5-errores-comunes-en-power-bi', // URL amigable (sin espacios ni acentos)
    title: { es: 'Los 5 Errores Más Comunes al Empezar en Power BI (y Cómo Evitarlos)', en: 'The 5 Most Common Mistakes When Starting in Power BI (and How to Avoid Them)' },
    author: 'Big Data Services',
    date: '2024-05-15',
    category: { es: 'Power BI', en: 'Power BI' },
    image: '/images/blog/power-bi-errors.jpg', // Necesitarás crear esta imagen
    excerpt: {
      es: 'Empezar con una nueva herramienta puede ser abrumador. Descubre los tropiezos más habituales que enfrentan los principiantes en Power BI y aprende a construir reportes sólidos desde el primer día.',
      en: 'Starting with a new tool can be overwhelming. Discover the most common pitfalls beginners face in Power BI and learn to build solid reports from day one.',
    },
    // Contenido completo del post en HTML.
    content: {
      es: `
        <p class="mb-4">Power BI es una herramienta increíblemente poderosa, pero su flexibilidad también puede llevar a cometer errores que afecten el rendimiento y la claridad de tus informes. Aquí te presentamos los 5 más comunes:</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">1. No Modelar los Datos</h2>
        <p class="mb-4">El error más grande es cargar datos directamente y empezar a crear visualizaciones sin antes definir relaciones, tipos de datos y jerarquías en la vista de Modelo. Un buen modelo de datos es la base de un reporte rápido y preciso. Sin él, tus medidas DAX serán complejas y el rendimiento se verá afectado.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">2. Abusar de las Columnas Calculadas</h2>
        <p class="mb-4">Las columnas calculadas son útiles, pero se almacenan en memoria y aumentan el tamaño del archivo. Siempre que sea posible, es preferible crear transformaciones en Power Query o, mejor aún, usar Medidas (Measures). Las medidas se calculan al momento de la interacción y son mucho más eficientes.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">3. Ignorar el Contexto de Filtro</h2>
        <p class="mb-4">DAX, el lenguaje de fórmulas de Power BI, opera bajo un "contexto de filtro". No entender cómo las interacciones en tus gráficos modifican este contexto es la causa principal de que las medidas devuelvan resultados inesperados. Dedica tiempo a aprender sobre <code>CALCULATE</code> y cómo manipula el contexto.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">4. Sobrecargar los Reportes con Visualizaciones</h2>
        <p class="mb-4">Menos es más. Un reporte efectivo cuenta una historia clara. Evita llenar la página con docenas de gráficos que confunden al usuario. Enfócate en los KPIs más importantes y usa varias páginas para detallar diferentes áreas del análisis.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">5. No Optimizar las Consultas en Power Query</h2>
        <p class="mb-4">Antes de cargar los datos, asegúrate de que estás filtrando las filas y eliminando las columnas que no necesitas directamente en Power Query. Cargar millones de filas o cientos de columnas innecesarias hará que la actualización de tu reporte sea extremadamente lenta.</p>
      `,
      en: `
        <p class="mb-4">Power BI is an incredibly powerful tool, but its flexibility can also lead to mistakes that affect the performance and clarity of your reports. Here are the 5 most common ones:</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">1. Not Modeling the Data</h2>
        <p class="mb-4">The biggest mistake is loading data directly and starting to create visualizations without first defining relationships, data types, and hierarchies in the Model view. A good data model is the foundation of a fast and accurate report. Without it, your DAX measures will be complex, and performance will suffer.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">2. Overusing Calculated Columns</h2>
        <p class="mb-4">Calculated columns are useful, but they are stored in memory and increase the file size. Whenever possible, it's better to create transformations in Power Query or, even better, use Measures. Measures are calculated at the time of interaction and are much more efficient.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">3. Ignoring Filter Context</h2>
        <p class="mb-4">DAX, Power BI's formula language, operates under a "filter context." Not understanding how interactions in your charts modify this context is the main reason measures return unexpected results. Spend time learning about <code>CALCULATE</code> and how it manipulates context.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">4. Overloading Reports with Visualizations</h2>
        <p class="mb-4">Less is more. An effective report tells a clear story. Avoid filling the page with dozens of charts that confuse the user. Focus on the most important KPIs and use multiple pages to detail different areas of analysis.</p>
        <h2 class="text-2xl font-bold mt-6 mb-3">5. Not Optimizing Queries in Power Query</h2>
        <p class="mb-4">Before loading the data, make sure you are filtering rows and removing columns you don't need directly in Power Query. Loading millions of unnecessary rows or hundreds of columns will make your report refresh extremely slow.</p>
      `
    }
  },

  // -- INICIO BLOQUE CODIGO --//
{
  // --- 1. CONFIGURACIÓN DEL POST (lo más importante) ---
  slug: 'importancia-de-visualizar-datos-para-decisiones',
  title: {
    es: 'La importancia de visualizar datos para tomar mejores decisiones',
    en: 'The Importance of Visualizing Data to Make Better Decisions',
  },
  author: 'Michael Ortiz',
  date: '2025-06-25',
  category: {
    es: 'Visualización de Datos',
    en: 'Data Visualization',
  },

  // --- 2. LA IMAGEN ---
  image: '/images/blog/visualizacion-datos-decisiones.jpg',

  // --- 3. EL TEXTO CORTO (para la tarjeta en la home y el índice del blog) ---
  excerpt: {
    es: 'Tomar decisiones acertadas comienza con entender bien los datos. Descubrí cómo una buena visualización puede transformar tu negocio.',
    en: 'Smart decisions start with understanding data clearly. Learn how good visualizations can transform your business.',
  },

  // --- 4. EL CONTENIDO COMPLETO (el cuerpo del artículo) ---
  content: {
    es: `
      <p>En un mundo donde cada clic, cada compra y cada interacción genera datos, la capacidad de tomar decisiones inteligentes ya no depende solo de la intuición o la experiencia: depende de cómo entendemos esa enorme cantidad de información. Y ahí es donde la visualización de datos juega un rol clave.</p>

      <p>Como economista y consultor en análisis de datos, me he encontrado una y otra vez con equipos que tienen los datos correctos… pero no las herramientas adecuadas para interpretarlos. El resultado: decisiones lentas, imprecisas o directamente equivocadas.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Por qué importa tanto visualizar bien los datos?</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Detectamos oportunidades y riesgos en segundos.</li>
        <li>Mejoramos la comunicación entre áreas, incluso sin formación técnica.</li>
        <li>Tomamos decisiones basadas en evidencia, no en suposiciones.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Ejemplos prácticos</h2>

      <h3 class="text-xl font-semibold mt-4 mb-2">1. Ventas por canal con alertas automáticas</h3>
      <p>Un cliente no tenía visibilidad de qué canales estaban por debajo del presupuesto. Creamos un dashboard con alertas por email si las ventas bajaban de cierto umbral. Resultado: acciones correctivas inmediatas y una mejora del 12% en dos meses.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2">2. Reclasificación de gastos en tiempo real</h3>
      <p>Visualizamos la evolución del gasto por centro de costo. Al permitir comentarios directos sobre el dashboard, logramos una mejor planificación presupuestaria.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2">3. Comparación de rendimiento de productos</h3>
      <p>Para una empresa de alimentos, diseñamos una visualización de ingresos vs presupuesto por SKU. Esto ayudó a ajustar estrategias de pricing y distribución.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué herramientas uso?</h2>
      <p>Trabajo principalmente con <strong>Power BI</strong>, <strong>Tableau</strong> y <strong>Databricks</strong>. Pero más allá de la herramienta, lo clave es entender al usuario final. Una visualización útil es la que impulsa decisiones claras.</p>

      <div class="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-800">
        <p><strong>¿Querés mejorar tus decisiones basadas en datos?</strong><br>
        Estoy armando esta sección de blogs para compartir ideas y casos reales. Si querés aplicar estas prácticas en tu negocio, escribime o seguí explorando los contenidos que voy a ir publicando.</p>
      </div>
    `,
    en: `
      <p>In a world where every click, purchase, and interaction generates data, smart decision-making no longer relies solely on intuition or experience — it depends on how well we understand that information. This is where data visualization becomes essential.</p>

      <p>As an economist and data consultant, I've often worked with teams that had the right data but lacked the tools to interpret it. The result: slow, imprecise, or outright wrong decisions.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">Why is effective data visualization so important?</h2>
      <ul class="list-disc list-inside mb-4">
        <li>We can identify opportunities and risks instantly.</li>
        <li>We improve communication across teams — even non-technical ones.</li>
        <li>We make evidence-based decisions, not guesses.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Real-life examples</h2>

      <h3 class="text-xl font-semibold mt-4 mb-2">1. Sales channels with automated alerts</h3>
      <p>A client lacked visibility on which channels were underperforming. We built a dashboard with email alerts when sales dropped below a threshold. The result: corrective action in real time and a 12% improvement in two months.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2">2. Real-time expense reclassification</h3>
      <p>We visualized spending trends by cost center and enabled teams to leave direct comments, leading to more accurate and helpful budgeting decisions.</p>

      <h3 class="text-xl font-semibold mt-4 mb-2">3. Product performance comparison</h3>
      <p>For a food company, we created a revenue vs. budget visualization by SKU. It helped them fine-tune pricing and distribution strategies.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">What tools do I use?</h2>
      <p>I work mainly with <strong>Power BI</strong>, <strong>Tableau</strong>, and <strong>Databricks</strong>. But beyond the tool itself, the key is understanding the end user. A good visualization empowers clear, confident decisions.</p>

      <div class="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-800">
        <p><strong>Want to improve your data-driven decision making?</strong><br>
        I'm building this blog to share ideas and real cases. If you want to see how this could work for your business, feel free to reach out or keep exploring the content here.</p>
      </div>
    `
  }
}, // <-- ¡No olvides la coma si vas a añadir otro post después!
// -- FIN BLOQUE CODIGO --//
// -- INICIO BLOQUE CODIGO --//
{
  // --- 1. CONFIGURACIÓN DEL POST (lo más importante) ---
  slug: 'que-es-dbt-y-por-que-deberias-usarlo',
  title: {
    es: '¿Qué es dbt y por qué deberías usarlo?',
    en: 'What Is dbt and Why Should You Use It?',
  },
  author: 'Diego Rojas',
  date: '2025-06-25',
  category: {
    es: 'Modelado de Datos',
    en: 'Data Modeling',
  },

  // --- 2. LA IMAGEN ---
  image: '/images/blog/dbt-modelado-transformaciones.png',

  // --- 3. EL TEXTO CORTO (para la tarjeta en la home y el índice del blog) ---
  excerpt: {
    es: 'Descubrí cómo dbt está revolucionando el mundo del modelado de datos con una propuesta clara: transformar datos con SQL, control de versiones y mejores prácticas.',
    en: 'Discover how dbt is transforming the data modeling world by bringing SQL, version control, and best practices into your analytics workflow.',
  },
  content: {
    es: `
      <p>Si trabajás con datos, probablemente ya escuchaste hablar de <strong>dbt (data build tool)</strong>. Esta herramienta se ha convertido en una pieza clave en el stack moderno de analítica, especialmente para quienes quieren aplicar buenas prácticas de desarrollo a sus procesos de transformación de datos.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué es dbt?</h2>
      <p>dbt es una herramienta de código abierto que permite a los analistas y desarrolladores transformar datos usando SQL de forma estructurada, versionada y automatizable. No reemplaza tu warehouse ni tu herramienta de visualización: se ubica en el medio, justo donde transformás los datos en información útil.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Por qué usar dbt?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Transformaciones SQL organizadas:</strong> Escribís modelos como archivos .sql, que se convierten en tablas o vistas en tu base de datos.</li>
        <li><strong>Control de versiones:</strong> Todo se gestiona con Git, lo que permite trabajar en equipo sin sobrescribir trabajo.</li>
        <li><strong>Automatización y pruebas:</strong> Podés agregar tests y documentación directamente en tu código, y ejecutar pipelines automáticos.</li>
        <li><strong>Transparencia:</strong> dbt genera documentación visual para entender cómo se relacionan tus modelos.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Un ejemplo real</h2>
      <p>En un proyecto reciente, usé dbt para estructurar un flujo de datos financieros: desde la limpieza de los registros contables hasta la agregación por categoría y la generación de métricas comparables mes a mes. dbt no solo hizo más claro el proceso, sino que permitió a otros analistas entender y mejorar el trabajo rápidamente.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Quién debería usarlo?</h2>
      <p>Si trabajás con SQL y querés escalar tu flujo de trabajo de transformación de datos, dbt es para vos. Es ideal para equipos de analítica, BI y data engineering que quieran trabajar de forma más colaborativa y confiable.</p>

      <div class="mt-8 p-4 border-l-4 border-orange-500 bg-orange-50 text-orange-800">
        <p><strong>¿Te interesa implementar dbt en tus proyectos?</strong><br>
        Estoy trabajando con empresas que quieren profesionalizar su stack de datos. Si querés saber más, escribime o seguí explorando este blog donde compartiré más ejemplos, consejos y mejores prácticas.</p>
      </div>
    `,
    en: `
      <p>If you work with data, chances are you've already heard about <strong>dbt (data build tool)</strong>. This open-source tool has become essential in the modern analytics stack, especially for teams who want to apply software development best practices to data transformations.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">What is dbt?</h2>
      <p>dbt allows analysts and data engineers to transform data using SQL in a structured, version-controlled, and automated way. It doesn't replace your warehouse or your BI tool — it sits in the middle, where raw data is turned into useful insights.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">Why should you use dbt?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Structured SQL transformations:</strong> You write models as .sql files that generate tables or views in your database.</li>
        <li><strong>Version control with Git:</strong> Collaborate without conflicts, just like in software development.</li>
        <li><strong>Automation and testing:</strong> Add tests and documentation directly in the code and run everything in pipelines.</li>
        <li><strong>Transparency:</strong> dbt auto-generates visual documentation of your data model.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">A real-world example</h2>
      <p>In a recent financial project, I used dbt to structure the full data flow: from cleaning accounting records to aggregating them by category and generating monthly KPIs. dbt not only made the process clearer but also easier for others to understand and collaborate on.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">Who should use dbt?</h2>
      <p>If you work with SQL and want to scale your data transformation process, dbt is for you. It's ideal for analytics, BI, and data engineering teams looking for a more reliable and collaborative way to work.</p>

      <div class="mt-8 p-4 border-l-4 border-orange-500 bg-orange-50 text-orange-800">
        <p><strong>Interested in bringing dbt into your projects?</strong><br>
        I'm currently helping companies level up their data stacks with dbt. If you’d like to learn more, feel free to reach out or keep exploring this blog for more use cases, tips, and best practices.</p>
      </div>
    `
  }
},
// -- INICIO BLOQUE CODIGO --//
{
  // --- 1. CONFIGURACIÓN DEL POST (lo más importante) ---
  slug: 'python-vs-excel-cuando-dejar-la-hoja-de-calculo',
  title: {
    es: 'Python vs. Excel: ¿Cuándo Dejar la Hoja de Cálculo?',
    en: 'Python vs. Excel: When Should You Move Beyond Spreadsheets?',
  },
  author: 'Michael Ortiz',
  date: '2024-03-20',
  category: {
    es: 'Automatización de Datos',
    en: 'Data Automation',
  },

  // --- 2. LA IMAGEN ---
  image: '/images/blog/python-vs-excel.jpg',

  // --- 3. EL TEXTO CORTO (para la tarjeta en la home y el índice del blog) ---
  excerpt: {
    es: 'Excel es una gran herramienta, pero tiene límites. Te cuento cuándo conviene dar el salto a Python para escalar, automatizar y ganar precisión.',
    en: 'Excel is a great tool, but it has its limits. Learn when it’s time to switch to Python to scale, automate, and gain precision.',
  },

  // --- 4. EL CONTENIDO COMPLETO (el cuerpo del artículo) ---
  content: {
    es: `
      <p>Durante años, Excel fue la herramienta por excelencia para análisis y reportes. Y lo sigue siendo en muchos casos. Pero a medida que los datos crecen y las necesidades se vuelven más complejas, llega un punto donde Excel deja de ser suficiente. Ahí es donde entra Python.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué ventajas ofrece Python frente a Excel?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Automatización:</strong> Python permite automatizar tareas repetitivas como consolidar archivos, limpiar datos o enviar reportes.</li>
        <li><strong>Manejo de grandes volúmenes:</strong> Excel se vuelve lento con datasets grandes; Python, en cambio, puede manejar millones de registros con librerías como pandas o numpy.</li>
        <li><strong>Reproducibilidad:</strong> Un script en Python siempre ejecuta los mismos pasos, eliminando el error humano.</li>
        <li><strong>Escalabilidad:</strong> Podés integrar Python con bases de datos, APIs y otras herramientas para armar pipelines robustos.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Cuándo deberías dar el salto?</h2>
      <p>Si alguna de estas situaciones te resulta familiar, probablemente sea momento de incorporar Python:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Tenés múltiples archivos que necesitás procesar cada mes.</li>
        <li>El archivo de Excel ya pesa demasiado y se cuelga.</li>
        <li>Querés generar reportes automáticos sin intervención manual.</li>
        <li>Estás trabajando con datos que vienen de APIs o bases de datos.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Un caso concreto</h2>
      <p>En un proyecto reciente, ayudé a migrar un reporte mensual que combinaba más de 40 archivos Excel a un script en Python. El proceso, que antes tomaba 3 horas al mes, ahora se resuelve en 3 minutos… con cero errores.</p>

      <div class="mt-8 p-4 border-l-4 border-green-500 bg-green-50 text-green-800">
        <p><strong>No se trata de Excel vs Python, sino de cuándo usar cada uno.</strong><br>
        Excel sigue siendo útil para tareas exploratorias o rápidas, pero cuando querés escalar, automatizar y tener control total sobre tus datos, Python es el siguiente paso natural.</p>
      </div>
    `,
    en: `
      <p>For years, Excel has been the go-to tool for analysis and reporting. And in many cases, it still works great. But as data volumes grow and needs become more complex, Excel starts to show its limitations. That’s where Python comes in.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">What does Python offer that Excel doesn’t?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Automation:</strong> Python lets you automate repetitive tasks like file consolidation, data cleaning, or report generation.</li>
        <li><strong>Handling large datasets:</strong> Excel becomes sluggish with big files; Python (using libraries like pandas or numpy) handles millions of records smoothly.</li>
        <li><strong>Reproducibility:</strong> A Python script runs the same way every time — no manual errors.</li>
        <li><strong>Scalability:</strong> Python integrates with databases, APIs, and other tools to build robust data pipelines.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">When should you make the switch?</h2>
      <p>If any of these sound familiar, it may be time to consider Python:</p>
      <ul class="list-disc list-inside mb-4">
        <li>You work with multiple files that need processing every month.</li>
        <li>Your Excel files are getting too heavy and slow.</li>
        <li>You want to generate reports automatically with no manual steps.</li>
        <li>You’re working with APIs or databases and need better integration.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">A real-life example</h2>
      <p>In a recent project, I helped migrate a monthly report that combined over 40 Excel files into a single Python script. What used to take 3 hours now runs in 3 minutes — with zero errors.</p>

      <div class="mt-8 p-4 border-l-4 border-green-500 bg-green-50 text-green-800">
        <p><strong>It’s not about Excel vs. Python — it’s about knowing when to use each.</strong><br>
        Excel is great for quick exploration, but when you need scale, automation, and full control, Python is the natural next step.</p>
      </div>
    `
  }
},
// -- INICIO BLOQUE CODIGO --//
{
  // --- 1. CONFIGURACIÓN DEL POST (lo más importante) ---
  slug: 'diferencias-data-engineer-data-analyst-data-scientist',
  title: {
    es: 'Diferencias entre Data Engineer, Data Analyst y Data Scientist',
    en: 'Differences Between Data Engineer, Data Analyst and Data Scientist',
  },
  author: 'Michael Ortiz',
  date: '2024-01-23',
  category: {
    es: 'Carrera en Datos',
    en: 'Data Careers',
  },

  // --- 2. LA IMAGEN ---
  image: '/images/blog/perfiles-datos-comparacion.jpg',

  // --- 3. EL TEXTO CORTO (para la tarjeta en la home y el índice del blog) ---
  excerpt: {
    es: '¿Sabes realmente qué hace un Data Engineer, un Data Analyst y un Data Scientist? Aquí te explico sus diferencias, responsabilidades y cuándo necesitas a cada uno.',
    en: 'Do you really know what a Data Engineer, Data Analyst, and Data Scientist do? Here’s a breakdown of their roles, responsibilities, and when to hire each.',
  },

  // --- 4. EL CONTENIDO COMPLETO (el cuerpo del artículo) ---
  content: {
    es: `
      <p>En el mundo de los datos, es común confundir los distintos perfiles que componen un equipo. Aunque todos trabajan con datos, cada uno cumple un rol muy específico. Conocer sus diferencias puede ayudarte a formar un equipo más eficiente y a desarrollar tu carrera de manera más enfocada.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">1. Data Engineer</h2>
      <p>El <strong>Data Engineer</strong> es quien construye y mantiene la infraestructura que permite almacenar y mover los datos. Su trabajo está más cerca de la ingeniería de software que del análisis de datos.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Lenguajes comunes:</strong> Python, SQL, Scala</li>
        <li><strong>Herramientas:</strong> Airflow, Spark, Kafka, Snowflake</li>
        <li><strong>Responsabilidades:</strong> diseñar pipelines de datos, asegurar la calidad, gestionar bases de datos y arquitecturas cloud</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">2. Data Analyst</h2>
      <p>El <strong>Data Analyst</strong> transforma los datos en informes claros y útiles. Su foco está en el negocio: analiza, visualiza y comunica insights para facilitar la toma de decisiones.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Lenguajes comunes:</strong> SQL, Python, Excel</li>
        <li><strong>Herramientas:</strong> Power BI, Tableau, Google Sheets</li>
        <li><strong>Responsabilidades:</strong> crear dashboards, realizar análisis ad-hoc, generar reportes y proponer mejoras basadas en datos</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">3. Data Scientist</h2>
      <p>El <strong>Data Scientist</strong> se especializa en construir modelos predictivos o de clasificación. Utiliza estadística, machine learning y programación para resolver problemas complejos y descubrir patrones ocultos.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Lenguajes comunes:</strong> Python, R</li>
        <li><strong>Herramientas:</strong> scikit-learn, TensorFlow, Jupyter, Databricks</li>
        <li><strong>Responsabilidades:</strong> desarrollar modelos, validar hipótesis, trabajar con datos no estructurados y experimentación</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Cuál necesitas en tu equipo?</h2>
      <p>Dependerá del objetivo:</p>
      <ul class="list-disc list-inside mb-4">
        <li>¿Quieres automatizar procesos de datos? Necesitas un <strong>Data Engineer</strong>.</li>
        <li>¿Necesitas entender qué está pasando en tu negocio? Contrata un <strong>Data Analyst</strong>.</li>
        <li>¿Buscas predecir el comportamiento futuro? Un <strong>Data Scientist</strong> es la mejor opción.</li>
      </ul>

      <div class="mt-8 p-4 border-l-4 border-cyan-500 bg-cyan-50 text-cyan-800">
        <p><strong>Conclusión:</strong><br>
        No todos los roles de datos hacen lo mismo. Conocer sus diferencias puede marcar la diferencia al armar tu equipo o al planear tu camino profesional.</p>
      </div>
    `,
    en: `
      <p>In the data world, it's easy to confuse the various roles that make up a team. Although all work with data, each one has a very specific focus. Knowing the differences will help you build a stronger team or shape your own career path.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">1. Data Engineer</h2>
      <p>The <strong>Data Engineer</strong> builds and maintains the infrastructure that stores and moves data. Their role is closer to software engineering than analytics.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Common languages:</strong> Python, SQL, Scala</li>
        <li><strong>Tools:</strong> Airflow, Spark, Kafka, Snowflake</li>
        <li><strong>Responsibilities:</strong> building pipelines, ensuring data quality, managing databases and cloud architecture</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">2. Data Analyst</h2>
      <p>The <strong>Data Analyst</strong> turns raw data into clear, actionable insights. Their focus is on the business: analyzing, visualizing, and communicating to support decisions.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Common languages:</strong> SQL, Python, Excel</li>
        <li><strong>Tools:</strong> Power BI, Tableau, Google Sheets</li>
        <li><strong>Responsibilities:</strong> creating dashboards, conducting ad-hoc analysis, producing reports and suggesting improvements</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">3. Data Scientist</h2>
      <p>The <strong>Data Scientist</strong> builds predictive or classification models using statistics, machine learning, and programming to solve complex problems.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Common languages:</strong> Python, R</li>
        <li><strong>Tools:</strong> scikit-learn, TensorFlow, Jupyter, Databricks</li>
        <li><strong>Responsibilities:</strong> developing models, testing hypotheses, working with unstructured data and experimentation</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Which one do you need?</h2>
      <p>It depends on your goal:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Want to automate data workflows? You need a <strong>Data Engineer</strong>.</li>
        <li>Want to understand what’s happening in your business? Hire a <strong>Data Analyst</strong>.</li>
        <li>Looking to predict future behavior? Go with a <strong>Data Scientist</strong>.</li>
      </ul>

      <div class="mt-8 p-4 border-l-4 border-cyan-500 bg-cyan-50 text-cyan-800">
        <p><strong>In summary:</strong><br>
        Not all data roles are the same. Knowing the difference can help you build smarter teams and make better career decisions.</p>
      </div>
    `
  }
}, 
// -- INICIO BLOQUE CODIGO --//
{
  slug: 'stack-moderno-de-datos-para-startups',
  title: {
    es: 'Cómo armar un stack moderno de datos para tu empresa o startup',
    en: 'How to Build a Modern Data Stack for Your Company or Startup',
  },
  author: 'Michael Ortiz',
  date: '2025-06-25',
  category: {
    es: 'Arquitectura de Datos',
    en: 'Data Architecture',
  },
  image: '/images/blog/stack-datos-startup.jpg',
  excerpt: {
    es: '¿Estás empezando a trabajar con datos en tu empresa? Te explico cómo armar un stack moderno de forma simple, escalable y sin gastar una fortuna.',
    en: 'Just getting started with data in your company? Here’s how to build a modern, scalable data stack without breaking the bank.',
  },
  content: {
    es: `
      <p>Armar una infraestructura de datos puede parecer complejo, pero hoy en día hay muchas herramientas que permiten construir un stack moderno, escalable y accesible, incluso para startups o empresas pequeñas.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">¿Qué es un stack moderno de datos?</h2>
      <p>Es un conjunto de herramientas que te permite extraer, transformar, almacenar y visualizar datos de forma ágil y automatizada.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">Componentes clave del stack</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Almacenamiento:</strong> BigQuery, Snowflake o PostgreSQL</li>
        <li><strong>Transformación:</strong> dbt</li>
        <li><strong>Orquestación:</strong> Airbyte o Fivetran para ETL/ELT</li>
        <li><strong>Visualización:</strong> Power BI, Metabase o Looker</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Recomendaciones para empezar</h2>
      <p>Comienza con lo básico: una buena base de datos en la nube y dashboards simples. A medida que escales, incorpora automatización con dbt y orquestación.</p>

      <div class="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-800">
        <p><strong>No necesitas ser una gran empresa para tener un stack profesional.</strong><br>
        Con las herramientas adecuadas y una estrategia clara, podés empezar a tomar decisiones basadas en datos desde el día uno.</p>
      </div>
    `,
    en: `
      <p>Building a data infrastructure might sound complex, but today there are many tools that allow you to create a modern, scalable, and accessible stack — even for small companies and startups.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">What is a modern data stack?</h2>
      <p>It’s a set of tools that lets you extract, transform, store, and visualize data quickly and automatically.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">Core components</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Storage:</strong> BigQuery, Snowflake, or PostgreSQL</li>
        <li><strong>Transformation:</strong> dbt</li>
        <li><strong>Orchestration:</strong> Airbyte or Fivetran for ETL/ELT</li>
        <li><strong>Visualization:</strong> Power BI, Metabase, or Looker</li>
      </ul>

      <h2 class="text-2xl font-bold mt-6 mb-3">Tips to get started</h2>
      <p>Start simple: a cloud database and basic dashboards. As your business grows, add dbt and orchestration tools for automation.</p>

      <div class="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-800">
        <p><strong>You don’t need to be a big company to have a professional data stack.</strong><br>
        With the right tools and a clear strategy, you can make data-driven decisions from day one.</p>
      </div>
    `
  }
},
// -- FIN BLOQUE CODIGO --//
// -- INICIO BLOQUE CODIGO --//
{
  slug: 'errores-comunes-al-crear-dashboards',
  title: {
    es: 'Errores comunes al implementar dashboards (y cómo evitarlos)',
    en: 'Common Mistakes When Creating Dashboards (And How to Avoid Them)',
  },
  author: 'Michael Ortiz',
  date: '2025-06-25',
  category: {
    es: 'Visualización de Datos',
    en: 'Data Visualization',
  },
  image: '/images/blog/errores-dashboards.jpg',
  excerpt: {
    es: 'Un buen dashboard debe ayudar a tomar decisiones, no confundir. Descubre los errores más comunes y cómo solucionarlos desde el diseño.',
    en: 'A good dashboard should help, not confuse. Learn the most common mistakes and how to fix them through smarter design.',
  },
  content: {
    es: `
      <p>Muchos dashboards fallan no por falta de datos, sino por exceso de información mal presentada. Aquí te comparto los errores más frecuentes y cómo evitarlos.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">1. Mostrar todo en una sola página</h2>
      <p>Un dashboard no es un repositorio. Si todo está visible al mismo tiempo, el usuario no sabe dónde mirar. Usa secciones, filtros y jerarquía visual.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">2. Métricas sin contexto</h2>
      <p>Mostrar una cifra sin compararla contra un objetivo, histórico o benchmark puede llevar a conclusiones erróneas. Siempre da contexto.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">3. Visualizaciones innecesarias</h2>
      <p>No todo necesita un gráfico de pastel o un mapa. Elige la visualización que mejor cuente la historia. A veces una tabla bien filtrada es suficiente.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">4. No conocer al usuario final</h2>
      <p>Diseñar para uno mismo es un error común. Pregunta quién lo va a usar, qué decisiones va a tomar y cómo prefiere navegar.</p>

      <div class="mt-8 p-4 border-l-4 border-red-500 bg-red-50 text-red-800">
        <p><strong>Un dashboard bien hecho puede transformar un equipo.</strong><br>
        Tomate el tiempo de diseñarlo con intención y con el usuario final en mente.</p>
      </div>
    `,
    en: `
      <p>Many dashboards fail not because of missing data, but because of too much information poorly displayed. Here are the most common mistakes — and how to avoid them.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">1. Showing everything on one screen</h2>
      <p>A dashboard isn’t a data dump. If everything is visible at once, users won’t know where to look. Use sections, filters, and visual hierarchy.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">2. Metrics with no context</h2>
      <p>Displaying a number without comparing it to a target, history, or benchmark can be misleading. Always add context.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">3. Unnecessary visualizations</h2>
      <p>Not everything needs a pie chart or a map. Choose the visualization that best tells the story. Sometimes, a filtered table is the best choice.</p>

      <h2 class="text-2xl font-bold mt-6 mb-3">4. Ignoring the end user</h2>
      <p>Designing for yourself is a common mistake. Ask who will use it, what decisions they need to make, and how they prefer to interact with data.</p>

      <div class="mt-8 p-4 border-l-4 border-red-500 bg-red-50 text-red-800">
        <p><strong>A well-designed dashboard can transform a team.</strong><br>
        Take the time to design with intention — and with your users in mind.</p>
      </div>
    `
  }
},
// -- FIN BLOQUE CODIGO --//




];