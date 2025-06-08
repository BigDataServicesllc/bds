import React, { useState } from 'react';
import axios from 'axios'; // Importamos axios

const ContactSection = ({ language }) => {
  // --- CONFIGURACIÓN ---
  // PEGA AQUÍ LA URL ÚNICA QUE TE DIO FORMSPREE
  const FORM_ENDPOINT = 'https://formspree.io/f/manjeqwr'; 

  // --- ESTADO DEL FORMULARIO ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  // --- MANEJADORES ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post(FORM_ENDPOINT, formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  // --- TEXTOS ---
  const contactContent = {
    title: { es: 'Hablemos de tu Proyecto', en: "Let's Talk About Your Project" },
    description: { es: '¿Listo para transformar tus datos en valor? Déjanos un mensaje.', en: 'Ready to transform your data into value? Leave us a message.'},
    form: {
      name: { es: 'Nombre Completo', en: 'Full Name' },
      email: { es: 'Correo Electrónico', en: 'Email Address' },
      message: { es: '¿Cómo podemos ayudarte?', en: 'How can we help?' },
      button: { es: 'Enviar Mensaje', en: 'Send Message' },
      sending: { es: 'Enviando...', en: 'Sending...' },
    },
    successMessage: { es: '¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.', en: 'Thank you! Your message has been sent. We will get in touch soon.'},
    errorMessage: { es: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.', en: 'There was an error sending your message. Please try again.'},
  };

  // Si el formulario ya se envió con éxito, mostramos solo el mensaje de éxito.
  if (status === 'success') {
    return (
      <section id="contact" className="py-20 sm:py-24 border-t-2 border-gray-800">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                {language === 'es' ? 'Mensaje Enviado' : 'Message Sent'}
            </h2>
            <p className="text-lg text-green-400">{contactContent.successMessage[language]}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-24 border-t-2 border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          {contactContent.title[language]}
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          {contactContent.description[language]}
        </p>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {contactContent.form.name[language]}
                </label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {contactContent.form.email[language]}
                </label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {contactContent.form.message[language]}
              </label>
              <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 disabled:bg-gray-500 disabled:cursor-not-allowed">
                {status === 'sending' ? contactContent.form.sending[language] : contactContent.form.button[language]}
              </button>
            </div>
            {status === 'error' && <p className="text-center text-red-500 mt-4">{contactContent.errorMessage[language]}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;