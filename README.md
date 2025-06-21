# Big Data Services - Frontend Web Application

Este proyecto corresponde al frontend de la aplicación de Big Data Services, una consultora especializada en el desarrollo de soluciones basadas en datos. La aplicación fue desarrollada usando **React** y **Tailwind CSS**, y está preparada para despliegue mediante contenedores Docker.

## 📁 Estructura del Proyecto

```bash
BDS/
│
├── app/
│   └── index.html              # Archivo base HTML (posiblemente placeholder)
│
├── frontend/
│   ├── node_modules/           # Dependencias de npm
│   ├── public/                 # Archivos públicos y estáticos
│   │   ├── index.html
│   │   ├── favicon.*           # Favicons del sitio
│   │   └── manifest.*          # Archivos de manifiesto para PWA
│   ├── src/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── CallToActionSection.js
│   │   │   ├── ContactSection.js
│   │   │   ├── HomeSection.js
│   │   │   ├── LayoutFooter.js
│   │   │   ├── LayoutHeader.js
│   │   │   ├── LearningSection.js
│   │   │   └── ServicesSection.js
│   │   ├── pages/              # Páginas principales del sitio
│   │   │   ├── HomePage.js
│   │   │   └── ServiceDetailPage.js
│   │   ├── App.js              # Componente principal de la aplicación
│   │   └── index.js            # Punto de entrada
│   ├── styles.css              # Estilos generales
│   ├── tailwind.config.js      # Configuración de Tailwind CSS
│   ├── postcss.config.js       # Configuración de PostCSS
│   ├── package.json            # Dependencias y scripts de npm
│   ├── package-lock.json
│   ├── Dockerfile              # Imagen Docker de la aplicación
│   └── docker-compose.yml      # Orquestador para levantar la app en contenedor
