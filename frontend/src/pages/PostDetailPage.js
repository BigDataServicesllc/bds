// RUTA: frontend/src/pages/PostDetailPage.js
// DESCRIPCIÓN:
// Esta página muestra el detalle de un artículo del blog.
// 1) Lee el `slug` desde la URL (/blog/:postSlug).
// 2) Busca el post correspondiente en `blogPostsData`.
// 3) Si no lo encuentra, redirige al índice del blog.
// 4) Si lo encuentra, muestra título, categoría, autor, fecha, imagen
//    y el contenido completo del post.
// 5) Al final incluye un CTA ("Contáctanos") para llevar al usuario
//    a la sección de contacto en la Home.

import React from 'react';
import { useParams, useOutletContext, Navigate, Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';

const PostDetailPage = () => {
  const { language, onNavigate } = useOutletContext();
  const { postSlug } = useParams();

  // Buscamos el post por su slug (parte final de la URL)
  const post = blogPostsData.find(p => p.slug === postSlug);

  // Si no existe el post, volvemos al índice del blog
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  // Formateamos la fecha según el idioma
  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    // Layout principal de la página de detalle del post
    <div className="bg-white min-h-screen pt-28 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Header del artículo: breadcrumb, categoría, título, autor y fecha */}
          <header className="mb-8">
            <Link
              to="/blog"
              className="text-gray-500 hover:text-accent transition-colors duration-300 inline-flex items-center mb-4"
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

            <p className="text-accent font-semibold">
              {post.category[language]}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              {post.title[language]}
            </h1>

            <p className="text-gray-500">
              {language === 'es' ? 'Por' : 'By'} {post.author} • {formattedDate}
            </p>
          </header>

          {/* Imagen principal del post */}
          <img
            src={post.image}
            alt={post.title[language]}
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />

          {/* Contenido del artículo (HTML generado desde blogPostsData) */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content[language] }}
          />
        </article>

        {/* CTA final para llevar al usuario a la sección de contacto */}
        <div className="text-center mt-16 py-12 bg-gray-900 text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
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
    </div> // <-- Aquí termina el layout principal de la página de detalle del post
  );
};

export default PostDetailPage;
