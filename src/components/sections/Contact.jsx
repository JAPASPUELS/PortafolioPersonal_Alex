import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "../../utils/animations";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      type: "Email",
      value: "paspuelalexander@gmail.com",
      href: "mailto:paspuelalexander@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/alexander-paspuel-sanchez/",
      href: "https://linkedin.com/in/alexander-paspuel-sanchez/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
    },
    {
      type: "WhatsApp / Teléfono",
      value: "+593 96 066 2261",
      href: "https://wa.me/593960662261",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || "Contacto desde Portfolio"
    );
    const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
Asunto: ${formData.subject}

Mensaje:
${formData.message}
    `);

    window.open(
      `mailto:paspuelalexander@gmail.com?subject=${subject}&body=${body}`
    );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contenedor principal con glassmorphism */}
        <motion.div
          className="relative border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10"
          >
            {/* Título principal */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4"
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Formulario de contacto */}
              <motion.div variants={itemVariants} className="p-6 md:p-8 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.contact.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/60 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/60 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/60 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/60 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>{t.contact.submitButton}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </form>
              </motion.div>

              {/* Información de contacto directo */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t.contact.infoTitle}
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.type}
                      href={contact.href}
                      target={
                        contact.type.includes("LinkedIn") ||
                        contact.type.includes("WhatsApp")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        contact.type.includes("LinkedIn") ||
                        contact.type.includes("WhatsApp")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`block p-4 ${contact.bgColor} ${contact.borderColor} border rounded-xl backdrop-blur-sm transition-all duration-300 group cursor-pointer`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {contact.type}
                          </h4>
                          <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {contact.value}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-800/20 border border-slate-700/40 rounded-xl text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t.contact.locationNotice}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer del contacto */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-slate-700/30 text-center"
            >
              <p className="text-gray-400 mb-4">
                {t.contact.footerText}
              </p>
              <div className="flex justify-center space-x-6">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.type}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-r ${contact.color} text-white hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {contact.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
