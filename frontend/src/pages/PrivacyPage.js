// RUTA: frontend/src/pages/PrivacyPage.js

import React from "react";
import SEO from "../components/SEO";
import { useOutletContext } from "react-router-dom";

const PrivacyPage = () => {
  const { language } = useOutletContext();
  const isSpanish = language === "es";

  // 🔧 Ajustes visuales comunes a ambas versiones
  const containerClasses =
    "bg-white min-h-screen pt-36 pb-20"; // antes pt-28

  const contentClasses =
    "container mx-auto px-4 md:px-8 max-w-4xl text-gray-700";

  const titleClasses =
    "text-3xl md:text-4xl font-bold mb-6 text-bds-text-main";

  const subtitleClasses =
    "text-xl font-semibold mt-6 mb-2 text-bds-text-main";

  if (!isSpanish) {
    return (
      <div className={containerClasses}>
        <SEO title="Privacy Policy" description="Privacy policy and data protection guidelines for Big Data Services." />
        <div className={contentClasses}>
          <h1 className={titleClasses}>Privacy Policy</h1>

          <p className="mb-4">
            This Privacy Policy explains how Big Data Services collects, uses
            and protects personal information related to this website and our
            services.
          </p>

          <h2 className={subtitleClasses}>Information we collect</h2>
          <p className="mb-3">
            We may collect information you voluntarily provide, such as your
            name and email address when you contact us by email or register for
            a training. We may also use analytical tools (such as web analytics)
            to obtain aggregated, non-identifiable usage statistics.
          </p>

          <h2 className={subtitleClasses}>How we use your information</h2>
          <p className="mb-3">
            We use the information only to respond to your inquiries, provide
            our services, manage training registrations and improve our content.
            We do not sell your data to third parties.
          </p>

          <h2 className={subtitleClasses}>Service providers</h2>
          <p className="mb-3">
            We may use third-party providers for hosting, email delivery or
            analytics. These providers process data only on our behalf and under
            confidentiality obligations.
          </p>

          <h2 className={subtitleClasses}>Your rights and choices</h2>
          <p className="mb-3">
            You may request access, correction or deletion of your personal data
            by contacting us at{" "}
            <a
              href="mailto:info@bigdata-services.com"
              className="text-bds-blue underline"
            >
              info@bigdata-services.com
            </a>
            . We will evaluate each request according to applicable law.
          </p>

          <h2 className={subtitleClasses}>Changes to this Policy</h2>
          <p className="mb-3">
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page.
          </p>
        </div>
      </div>
    );
  }

  // ⭐ Español
  return (
    <div className={containerClasses}>
      <SEO title="Política de Privacidad" description="Política de privacidad y protección de datos para Big Data Services." />
      <div className={contentClasses}>
        <h1 className={titleClasses}>Política de Privacidad</h1>

        <p className="mb-4">
          En esta Política de Privacidad explicamos cómo Big Data Services
          recopila, utiliza y protege la información personal relacionada con
          este sitio web y con nuestros servicios.
        </p>

        <h2 className={subtitleClasses}>Información que recopilamos</h2>
        <p className="mb-3">
          Podemos recopilar datos que nos proporcionás de forma directa, como tu
          nombre y correo electrónico cuando nos escribís, solicitás
          información o te inscribís en una capacitación. También podemos
          utilizar herramientas de analítica web para obtener estadísticas de
          uso agregadas y no identificables.
        </p>

        <h2 className={subtitleClasses}>Cómo utilizamos tus datos</h2>
        <p className="mb-3">
          Utilizamos la información únicamente para responder tus consultas,
          prestar nuestros servicios, gestionar inscripciones y mejorar el
          contenido que ofrecemos. No vendemos tus datos a terceros.
        </p>

        <h2 className={subtitleClasses}>Proveedores de servicios</h2>
        <p className="mb-3">
          Podemos apoyarnos en proveedores externos para hosting, envío de
          correos o analítica. Estos proveedores tratan los datos únicamente por
          cuenta nuestra y bajo compromisos de confidencialidad.
        </p>

        <h2 className={subtitleClasses}>Tus derechos y opciones</h2>
        <p className="mb-3">
          Podés solicitarnos acceso, corrección o eliminación de tus datos
          personales escribiendo a{" "}
          <a
            href="mailto:info@bigdata-services.com"
            className="text-bds-blue underline"
          >
            info@bigdata-services.com
          </a>
          . Evaluaremos cada solicitud de acuerdo con la normativa aplicable.
        </p>

        <h2 className={subtitleClasses}>Cambios en esta política</h2>
        <p className="mb-3">
          Podemos actualizar esta Política de Privacidad en cualquier momento.
          La versión vigente será siempre la que figure publicada en esta
          página.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
