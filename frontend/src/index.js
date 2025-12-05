// RUTA: frontend/src/index.js - MODIFICADO

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CourseDetailPage from './pages/CourseDetailPage';
import BlogIndexPage from './pages/BlogIndexPage';
import PostDetailPage from './pages/PostDetailPage';
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

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
      { path: "blog", element: <BlogIndexPage /> },
      { path: "blog/:postSlug", element: <PostDetailPage /> },
      { path: "terminos", element: <TermsPage /> },
      { path: "privacidad", element: <PrivacyPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);