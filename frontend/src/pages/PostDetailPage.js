// RUTA: frontend/src/pages/PostDetailPage.js
// Esta página muestra el detalle de un artículo del blog.
// Ajustes aplicados:
// 1. Hero oscuro completo sin línea blanca bajo el header.
// 2. Mayor separación entre título/autor y la imagen.
// 3. Layout más ancho (max-w-5xl) para aprovechar la pantalla.
// 4. Texto del artículo con color gris oscuro y buen interlineado.
// 5. Más espacio inferior para que el CTA no se pegue al footer.

import React from 'react';
import { useParams, useOutletContext, Navigate, Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';

const PostDetailPage = () => {
  const { language } = useOutletContext();
  const { postSlug } = useParams();
  const post = blogPostsData.find((p) => p.slug === postSlug);

  if (!post) return <Navigate to="/blog" replace />;

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    // Añadimos padding inferior para que el CTA no se pegue al footer
    <div className="bg-white min-h-screen pb-32">

      {/* ============================================================
          HERO DEL ARTÍCULO — COLOR OSCURO (MISMO QUE BLOG INDEX)
      ============================================================ */}
      <section className="pt-40 pb-12 bg-[#173B3A] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/blog"
            className="text-gray-300 hover:text-[#06E8D1] transition inline-flex items-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {language === 'es' ? 'Volver al Blog' : 'Back to Blog'}
          </Link>

          <p className="text-[#06E8D1] font-semibold text-sm mb-2">
            {post.category[language]}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {post.title[language]}
          </h1>

          <p className="text-gray-300 text-sm mb-8">
            {language === 'es' ? 'Por' : 'By'} {post.author} • {formattedDate}
          </p>
        </div>
      </section>

      {/* ============================================================
          CONTENIDO DEL ARTÍCULO
      ============================================================ */}
      <section className="container mx-auto px-4 max-w-5xl">
        {/* Imagen con espacio arriba (ANTES pisaba el título) */}
        <img
          src={post.image}
          alt={post.title[language]}
          className="w-full rounded-2xl shadow-xl my-12"
        />

        {/* Contenido del artículo 
            NOTA: evitamos las clases avanzadas de `prose-*` que te
            estaban rompiendo el render y usamos un estilo más simple. */}
        <div
          className="max-w-none mb-24 text-gray-800 text-base md:text-lg leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content[language] }}
        />
      </section>

      {/* ============================================================
          CTA FINAL
      ============================================================ */}
      <div className="text-center mt-4 py-12 bg-gray-900 text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
        <h3 className="text-3xl font-bold mb-2">
          {language === 'es'
            ? '¿Necesitas ayuda con tus datos?'
            : 'Need help with your data?'}
        </h3>
        <p className="text-gray-300 mb-6">
          {language === 'es'
            ? 'Hablemos sobre cómo nuestras soluciones pueden impulsar tu negocio.'
            : "Let's talk about how our solutions can boost your business."}
        </p>

        <Link
          to="/#contact"
          className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105"
        >
          {language === 'es' ? 'Contáctanos' : 'Contact Us'}
        </Link>
      </div>
    </div>
  );
};

export default PostDetailPage;
