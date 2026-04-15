// RUTA: frontend/src/pages/TermsPage.js

import React from "react";
import SEO from "../components/SEO";
import { useOutletContext } from "react-router-dom";

const TermsPage = () => {
  const { language } = useOutletContext();
  const isSpanish = language === "es";

  // 🔧 Ajuste principal: más espacio para que el header fijo no tape contenido
  const containerClasses =
    "bg-white min-h-screen pt-36 pb-20"; // antes pt-28 pb-16

  const contentClasses =
    "container mx-auto px-4 md:px-8 max-w-4xl text-gray-700";

  const titleClasses =
    "text-3xl md:text-4xl font-bold mb-6 text-bds-text-main"; // fuerza color visible

  const subtitleClasses = "text-xl font-semibold mt-6 mb-2 text-bds-text-main";

  if (!isSpanish) {
    // ⭐ Versión en inglés
    return (
      <div className={containerClasses}>
        <SEO title="Terms & Conditions" description="Terms and conditions for using the Big Data Services website." />
        <div className={contentClasses}>
          <h1 className={titleClasses}>Terms & Conditions</h1>

          <p className="mb-4">
            These Terms & Conditions govern the use of the Big Data Services
            website, content and related services (including training programs
            and consulting).
          </p>

          <h2 className={subtitleClasses}>Use of the site</h2>
          <p className="mb-3">
            You agree to use this site in a lawful way and not to perform any
            action that could damage, overload or impair the proper operation of
            the website or its security.
          </p>

          <h2 className={subtitleClasses}>No guarantees</h2>
          <p className="mb-3">
            The information provided is for general information purposes and
            does not constitute financial, legal or technical advice. Big Data
            Services makes reasonable efforts to keep the content up to date,
            but does not guarantee its completeness or accuracy.
          </p>

          <h2 className={subtitleClasses}>Limitation of liability</h2>
          <p className="mb-3">
            Big Data Services is not responsible for any direct or indirect
            damage derived from the use or inability to use the website, its
            content or any external link.
          </p>

          <h2 className={subtitleClasses}>Changes to these terms</h2>
          <p className="mb-3">
            We may update these Terms from time to time. The latest version will
            always be available on this page and will apply from the date of
            publication.
          </p>

          <h2 className={subtitleClasses}>Contact</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at{" "}
            <a
              href="mailto:info@bigdata-services.com"
              className="text-bds-blue underline"
            >
              info@bigdata-services.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ⭐ Versión en español
  return (
    <div className={containerClasses}>
      <SEO title="Términos y Condiciones" description="Términos y condiciones para el uso del sitio de Big Data Services." />
      <div className={contentClasses}>
        <h1 className={titleClasses}>Términos y Condiciones</h1>

        <p className="mb-4">
          Estos Términos y Condiciones regulan el uso del sitio web y de los
          servicios relacionados de Big Data Services (incluyendo contenidos,
          formaciones y servicios de consultoría).
        </p>

        <h2 className={subtitleClasses}>Uso del sitio</h2>
        <p className="mb-3">
          Te comprometes a utilizar este sitio de forma lícita y a no realizar
          ninguna acción que pueda dañar, sobrecargar o impedir el correcto
          funcionamiento del sitio web o su seguridad.
        </p>

        <h2 className={subtitleClasses}>Contenido</h2>
        <p className="mb-3">
          La información publicada tiene fines exclusivamente informativos y no
          constituye asesoramiento financiero, legal ni técnico. Big Data
          Services realiza esfuerzos razonables para mantener el contenido
          actualizado, pero no garantiza su exactitud o integridad.
        </p>

        <h2 className={subtitleClasses}>Propiedad intelectual</h2>
        <p className="mb-3">
          Todos los textos, gráficos, logotipos, recursos descargables y
          materiales de formación son propiedad de Big Data Services o se
          utilizan con la licencia correspondiente. No está permitido copiarlos,
          modificarlos o redistribuirlos sin autorización previa por escrito.
        </p>

        <h2 className={subtitleClasses}>Limitación de responsabilidad</h2>
        <p className="mb-3">
          Big Data Services no será responsable por daños directos o indirectos
          derivados del uso o imposibilidad de uso del sitio, de su contenido o
          de enlaces externos.
        </p>

        <h2 className={subtitleClasses}>Modificaciones de los términos</h2>
        <p className="mb-3">
          Podemos actualizar estos Términos y Condiciones en cualquier momento.
          La versión vigente será siempre la publicada en esta página y se
          aplicará desde la fecha de su publicación.
        </p>

        <h2 className={subtitleClasses}>Contacto</h2>
        <p>
          Si tenés dudas sobre estos Términos y Condiciones, escribinos a{" "}
          <a
            href="mailto:info@bigdata-services.com"
            className="text-bds-blue underline"
          >
            info@bigdata-services.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
