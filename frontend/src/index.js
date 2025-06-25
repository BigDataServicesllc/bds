// RUTA: frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importaciones de páginas
import App from './App';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CourseDetailPage from './pages/CourseDetailPage'; // <-- Asegúrate de que esta línea esté

import './styles.css'; 
import Modal from 'react-modal';

Modal.setAppElement('#root');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "servicios/:serviceId",
        element: <ServiceDetailPage />,
      },
      // --- LÍNEA AÑADIDA ---
      // Esta es la nueva ruta para las páginas de detalle de los cursos.
      {
        path: "cursos/:courseId",
        element: <CourseDetailPage />,
      },
      // ---------------------
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);