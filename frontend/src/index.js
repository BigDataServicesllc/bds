// RUTA: frontend/src/index.js
// CÓDIGO MODIFICADO

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles.css'; 
import App from './App';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
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
        // CAMBIO CLAVE: Añadimos "/:serviceId" para crear una ruta dinámica.
        // Ahora aceptará URLs como /servicios/consultoria, /servicios/netsuite, etc.
        path: "servicios/:serviceId",
        element: <ServiceDetailPage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);