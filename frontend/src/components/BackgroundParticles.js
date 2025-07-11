// RUTA: frontend/src/components/BackgroundParticles.js

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: '#ffffff' },
      links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.2, width: 1 },
      collisions: { enable: true },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="homepage-particles" // Le damos un ID único
      init={particlesInit}
      options={particlesOptions}
      // Estilos para que se quede fijo en el fondo y solo ocupe la altura de la pantalla
      className="absolute top-0 left-0 w-full h-screen z-0"
    />
  );
};

export default BackgroundParticles;