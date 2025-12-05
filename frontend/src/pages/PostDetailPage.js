// RUTA: frontend/src/pages/PostDetailPage.js
// Página de detalle de un post del blog: muestra el artículo completo y un CTA final.

import React from 'react';
import { useParams, useOutletContext, Navigate, Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';

const PostDetailPage = () => {
  const { language } = useOutletContext();
  const { postSlug } = useParams();
  const post = blogPostsData.find((p) => p.slug === postSlug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-gray-50 pt-28 text-gray-800">
      {/* ------------------------------------------------------------------ */}
      {/* HERO SUPERIOR CON FONDO VERDE OSCURO                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#173B3A] text-white">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <Link
            to="/blog"
            className="text-gray-300 hover:text-bds-aqua transition-colors duration-200 inline-flex items-center mb-4"
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
            {isSpanish ? 'Volver al Blog' : 'Back to Blog'}
          </Link>

          <p className="text-sm font-semibold text-bds-aqua mb-2">
            {post.category[language]}
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            {post.title[language]}
          </h1>

          <p className="text-gray-300 text-sm">
            {isSpanish ? 'Por' : 'By'} {post.author} • {formattedDate}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTENIDO DEL POST DENTRO DE TARJETA BLANCA                         */}
      {/* ------------------------------------------------------------------ */}
      <main className="container mx-auto px-4 pb-16">
        <article className="max-w-3xl mx-auto -mt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Imagen */}
          <div className="w-full h-auto">
            <img
              src={post.image}
              alt={post.title[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto del artículo */}
          <div className="px-6 md:px-10 py-10">
            <div
              className="prose prose-lg max-w-none prose-headings:text-bds-text-main prose-p:text-gray-700"
              // El contenido viene como HTML ya formateado desde blogPostsData
              dangerouslySetInnerHTML={{ __html: post.content[language] }}
            />
          </div>
        </article>

        {/* ---------------------------------------------------------------- */}
        {/* CTA FINAL                                                        */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center mt-16 py-12 bg-gray-900 text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold mb-2">
            {isSpanish
              ? '¿Necesitas ayuda con tus datos?'
              : 'Need help with your data?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {isSpanish
              ? 'Hablemos sobre cómo nuestras soluciones pueden impulsar tu negocio.'
              : "Let's talk about how our solutions can boost your business."}
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-bds-aqua text-primary-dark text-base font-semibold rounded-lg shadow-lg hover:bg-bds-blue hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {isSpanish ? 'Contáctanos' : 'Contact Us'}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PostDetailPage;
