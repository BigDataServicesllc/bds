// RUTA: frontend/src/index.js - MODIFICADO

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CourseDetailPage from './pages/CourseDetailPage';
// --- NUEVAS IMPORTACIONES ---
import BlogIndexPage from './pages/BlogIndexPage';
import PostDetailPage from './pages/PostDetailPage';
// -------------------------
import './styles.css'; 
import Modal from 'react-modal';

Modal.setAppElement('#root');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "servicios/:serviceId", element: <ServiceDetailPage /> },
      { path: "cursos/:courseId", element: <CourseDetailPage /> },
      // --- NUEVAS RUTAS ---
      { path: "blog", element: <BlogIndexPage /> },
      { path: "blog/:postSlug", element: <PostDetailPage /> },
      // ------------------
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);