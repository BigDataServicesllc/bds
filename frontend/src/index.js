import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
// 1. Importamos las herramientas del router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Importamos nuestros estilos y componentes
import './styles.css'; // O index.css si es tu caso
import App from './App';
import Modal from 'react-modal';

// Configuración de accesibilidad para el modal
Modal.setAppElement('#root');

// 2. Creamos el mapa de rutas de nuestra aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App es ahora el layout principal
    children: [ // Sus "hijos" son las páginas que se renderizarán en el <Outlet>
      {
        index: true, // Esta es la ruta por defecto (equivale a path: '/')
        element: <HomePage />,
      },
      {
        path: "servicios", // La ruta será /servicios
        element: <ServiceDetailPage />,
      },
    ]
  },
]);

// 3. Le decimos a React que renderice el Router, no directamente el App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);