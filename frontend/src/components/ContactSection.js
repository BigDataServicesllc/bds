import React from 'react';
 
const ContactSection = ({ language }) => {
  const contactContent = {
    title_es: 'Contacto',
    title_en: 'Contact Us',
    description_es: '¿Listo para transformar tus datos en valor? Contáctanos hoy mismo.',
    description_en: 'Ready to transform your data into value? Contact us today.',
    form: {
      name_es: 'Nombre',
      name_en: 'Name',
      email_es: 'Correo Electrónico',
      email_en: 'Email',
      message_es: 'Mensaje',
      message_en: 'Message',
      button_es: 'Enviar Mensaje',
      button_en: 'Send Message',
    },
  };
 
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {language === 'es' ? contactContent.title_es : contactContent.title_en}
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          {language === 'es' ? contactContent.description_es : contactContent.description_en}
        </p>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                {language === 'es' ? contactContent.form.name_es : contactContent.form.name_en}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white transition-all"
                placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                {language === 'es' ? contactContent.form.email_es : contactContent.form.email_en}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white transition-all"
                placeholder={language === 'es' ? 'tu@ejemplo.com' : 'your@example.com'}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                {language === 'es' ? contactContent.form.message_es : contactContent.form.message_en}
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white transition-all resize-none"
                placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              {language === 'es' ? contactContent.form.button_es : contactContent.form.button_en}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
 
export default ContactSection;