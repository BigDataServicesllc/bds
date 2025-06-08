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
    element: <App />, // App es el Layout
    children: [
      {
        index: true, // Ruta por defecto '/'
        element: <HomePage />, // Renderizará HomePage dentro del <Outlet> de App
      },
      {
        path: "servicios.html", // Ruta para /servicios.html
        element: <ServiceDetailPage />, // Renderizará ServiceDetailPage dentro del <Outlet>
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