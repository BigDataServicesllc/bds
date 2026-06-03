
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import PortfolioPage from './pages/PortfolioPage';
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AboutPage from "./pages/AboutPage";
import FlowFinanzasLanding from "./pages/FlowFinanzasLanding";

import './styles.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flowfinanzas",
    element: <FlowFinanzasLanding />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
  {
    path: "/terminos",
    element: <TermsPage />
  },
  {
    path: "/privacidad",
    element: <PrivacyPage />
  },
  {
    path: "/nosotros",
    element: <AboutPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);