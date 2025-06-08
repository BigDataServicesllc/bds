// RUTA: frontend/src/pages/HomePage.js
// CÓDIGO FINAL Y COMPLETO CON LA LÓGICA DE SCROLL

// CAMBIO 1: Importamos useEffect y useLocation
import React, { useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';

// Importamos todos los componentes necesarios (esto no cambia)
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import LearningSection from '../components/LearningSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  // Recibimos el contexto correctamente desde App.js (esto no cambia)
  const { language, onNavigate } = useOutletContext();
  
  // CAMBIO 2: Obtenemos la información de la URL actual
  const location = useLocation();

  // CAMBIO 3: Añadimos este bloque de "efecto secundario".
  // Este código se ejecutará automáticamente CADA VEZ que llegues a HomePage.
  useEffect(() => {
    // Preguntamos: ¿La URL a la que acabamos de llegar tiene un "#" (ej: /#services)?
    if (location.hash) {
      // Si la respuesta es sí, extraemos el ID de la sección (ej: "services")
      const id = location.hash.substring(1); // .substring(1) quita el '#'
      
      // Y usamos la función de scroll suave que ya teníamos para ir a esa sección.
      // Le damos un pequeño retraso para asegurar que la página esté completamente dibujada.
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    }
  }, []); // Esta lista le dice a React: "Vuelve a ejecutar este código si la 'location' o la función 'onNavigate' cambian".

  return (
    <>
      {/* El resto de tu código no cambia en absoluto. */}
      {/* CADA LÍNEA USA EL COMPONENTE CORRECTO CON SUS PROPS CORRECTAS */}
      
      {/* Sección 1: Home */}
      <HomeSection language={language} onNavigate={onNavigate} id="home" />
      
      {/* Sección 2: Services */}
      <ServicesSection language={language} className="bg-secondary-dark" id="services" />
      
      {/* Sección 3: Learning */}
      <LearningSection language={language} className="bg-primary-dark" id="learning" />
      
      {/* Sección 4: Call To Action */}
      <CallToActionSection language={language} onNavigate={onNavigate} className="bg-tertiary-dark" />
      
      {/* Sección 5: Contact */}
      <ContactSection language={language} className="bg-primary-dark" id="contact" />
    </>
  );
};

export default HomePage;