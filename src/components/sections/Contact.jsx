import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { playMinecraftClick, playMinecraftExp } from "../../utils/audio";

/**
 * ============================================================================
 * Constante: contactChannels
 * Explicación: Canales de comunicación directa con iconos vectoriales oficiales
 * de cada plataforma (Email, LinkedIn, WhatsApp) y etiquetas de acción claras.
 * ============================================================================
 */
const contactChannels = [
  {
    id: "email",
    titleEs: "Correo Electrónico",
    titleEn: "Email Address",
    value: "paspuelalexander@gmail.com",
    href: "mailto:paspuelalexander@gmail.com",
    actionEs: "Enviar Correo",
    actionEn: "Send Email",
    color: "#ff5555",
    icon: (
      <svg className="w-6 h-6 text-[#ff5555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    titleEs: "Perfil Profesional",
    titleEn: "Professional Profile",
    value: "alexander-paspuel-sanchez",
    href: "https://linkedin.com/in/alexander-paspuel-sanchez/",
    actionEs: "Conectar en LinkedIn",
    actionEn: "Connect on LinkedIn",
    color: "#00a0dc",
    icon: (
      <svg className="w-6 h-6 text-[#00a0dc]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    titleEs: "WhatsApp Directo",
    titleEn: "Direct WhatsApp",
    value: "+593 96 066 2261",
    href: "https://wa.me/593960662261",
    actionEs: "Chatear por WhatsApp",
    actionEn: "Chat on WhatsApp",
    color: "#25d366",
    icon: (
      <svg className="w-6 h-6 text-[#25d366]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
];

/**
 * ============================================================================
 * Componente: Contact (Terminal de Comandos & Directorio de Enlaces)
 * Explicación: Facilita el contacto directo mediante logos oficiales y enlaces
 * directos a Email, LinkedIn y WhatsApp, complementado con un formulario interactivo
 * de chat estilizado como la consola de Minecraft.
 * ============================================================================
 */
const Contact = () => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  /**
   * Método: handleInputChange
   * Explicación: Captura los valores ingresados en los campos del formulario.
   * @param {Event} e - Evento de cambio del input
   */
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Método: handleSubmit
   * Explicación: Envía el mensaje mediante cliente de correo con formato de comando /tell.
   * @param {Event} e - Evento de envío
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    playMinecraftExp();

    const subject = encodeURIComponent(
      formData.subject || "Contacto desde Portafolio Minecraft"
    );
    const body = encodeURIComponent(
      `[MENSAJE /tell Alex]\nNombre / Sender: ${formData.name}\nEmail: ${formData.email}\nAsunto / Subject: ${formData.subject}\n\nMensaje / Message:\n${formData.message}`
    );

    window.open(`mailto:paspuelalexander@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  /**
   * Método: handleCopyEmail
   * Explicación: Copia el correo electrónico al portapapeles del usuario con confirmación auditiva.
   */
  const handleCopyEmail = () => {
    playMinecraftClick();
    navigator.clipboard.writeText("paspuelalexander@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen px-2.5 sm:px-4 py-16 sm:py-20 pb-32 sm:pb-36">
      <div className="max-w-6xl mx-auto">
        
        {/* ====================================================================
            Sección: Título Temático
            ==================================================================== */}
        <div className="text-center mb-8 sm:mb-10">
          <span
            className={`font-['VT323'] text-lg sm:text-xl mc-text-shadow ${
              isDark ? "text-[#55ff55]" : "text-[#185e13]"
            }`}
          >
            {t.contact.subtitleTag || "[ CHAT DE COMANDOS // /TELL ALEX ]"}
          </span>
          <h2
            className={`font-['VT323'] text-4xl sm:text-5xl md:text-6xl mc-text-shadow mt-1 ${
              isDark ? "text-white" : "text-[#1b1924]"
            }`}
          >
            {t.contact.title.toUpperCase()}
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-[#55ff55] mx-auto mt-2 shadow-[0_0_8px_#55ff55]" />
        </div>

        {/* ====================================================================
            Sección: Panel GUI de Contacto Adaptable a Móviles
            ==================================================================== */}
        <div className="mc-panel-theme p-3.5 sm:p-6 md:p-8 relative">
          
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Columna Izquierda (5 cols): Canales de Enlace Directo */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📖</span>
                  <h3 className="font-['VT323'] text-2xl sm:text-3xl text-[#ffff55] mc-text-shadow">
                    {t.contact.directBookTitle || "Libro de Contactos (Direct)"}
                  </h3>
                </div>
                <p
                  className={`text-sm font-sans leading-relaxed mb-6 ${
                    isDark ? "text-[#cccccc]" : "text-[#1a1a1a]"
                  }`}
                >
                  {t.contact.directBookDesc}
                </p>

                {/* Lista de Canales con Logos Oficiales y Botones de Acción */}
                <div className="space-y-3">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.id}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playMinecraftClick()}
                      className="block mc-card-inner p-4 hover:border-[#55ffff] transition-all duration-200 shadow-inner group hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        {/* Ranura con el Icono Oficial */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 mc-slot-theme flex items-center justify-center flex-shrink-0">
                            {channel.icon}
                          </div>
                          <div>
                            <span
                              className={`font-['VT323'] text-xl block leading-tight group-hover:text-[#55ffff] ${
                                isDark ? "text-white" : "text-[#111111]"
                              }`}
                            >
                              {language === 'en' ? channel.titleEn : channel.titleEs}
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? "text-[#aaaaaa]" : "text-[#555555]"
                              }`}
                            >
                              {channel.value}
                            </span>
                          </div>
                        </div>

                        {/* Badge de Acción en lugar de nombres de minerales */}
                        <span 
                          className="text-[11px] font-mono px-2 py-1 border border-black group-hover:bg-[#55ffff] group-hover:text-black transition-colors whitespace-nowrap"
                          style={{ backgroundColor: isDark ? '#23202e' : '#f0f0f0', color: isDark ? '#ffffff' : '#000000' }}
                        >
                          {language === 'en' ? channel.actionEn : channel.actionEs} ↗
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Botón de Copia Rápida de Email */}
              <div className="mc-card-inner p-4 text-center">
                <span
                  className={`font-['VT323'] text-sm block mb-2 ${
                    isDark ? "text-[#888888]" : "text-[#444444]"
                  }`}
                >
                  {t.contact.quickCopyTitle || "COPIA RÁPIDA DE COORDENADAS DE EMAIL"}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="mc-btn w-full py-2 text-base flex items-center justify-center gap-2"
                >
                  <span>📋</span>
                  <span>
                    {copied
                      ? t.contact.copiedEmailBtn || "¡COPIADO AL PORTAPAPELES!"
                      : t.contact.copyEmailBtn || "COPIAR EMAIL"}
                  </span>
                </button>
              </div>

            </div>

            {/* Columna Derecha (7 cols): Terminal de Chat de Comandos Adaptable */}
            <div className="lg:col-span-7 mc-card-inner p-4 sm:p-6 shadow-inner">
              
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#55ff55] rounded-full inline-block animate-pulse" />
                  <span className="font-['VT323'] text-xl text-[#55ff55] mc-text-shadow">
                    {t.contact.terminalTitle || "Terminal /msg Alex [Online]"}
                  </span>
                </div>
                <span
                  className={`text-xs font-mono ${
                    isDark ? "text-[#888888]" : "text-[#444444]"
                  }`}
                >
                  {t.contact.serverLabel || "Servidor: Ibarra_EC"}
                </span>
              </div>

              {/* Formulario Estilo Consola */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block font-['VT323'] text-lg text-[#55ffff] mb-1">
                    {t.contact.labelSender || "> Nombre del Emisor (Player ID):"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholderSender || "Tech Recruiter / Company"}
                    className={`w-full border-2 border-black px-3.5 py-2 font-mono text-sm focus:outline-none focus:border-[#55ffff] shadow-inner ${
                      isDark ? "bg-[#1b1924] text-white" : "bg-[#f2f2f2] text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-['VT323'] text-lg text-[#55ffff] mb-1">
                    {t.contact.labelEmail || "> Correo de Retorno (Frecuencia):"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholderEmail || "example@company.com"}
                    className={`w-full border-2 border-black px-3.5 py-2 font-mono text-sm focus:outline-none focus:border-[#55ffff] shadow-inner ${
                      isDark ? "bg-[#1b1924] text-white" : "bg-[#f2f2f2] text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-['VT323'] text-lg text-[#55ffff] mb-1">
                    {t.contact.labelSubject || "> Asunto de la Misión:"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholderSubject || "Job proposal / Project"}
                    className={`w-full border-2 border-black px-3.5 py-2 font-mono text-sm focus:outline-none focus:border-[#55ffff] shadow-inner ${
                      isDark ? "bg-[#1b1924] text-white" : "bg-[#f2f2f2] text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-['VT323'] text-lg text-[#55ffff] mb-1">
                    {t.contact.labelMessage || "> Mensaje de Chat (/tell):"}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholderMessage || "Write mission details here..."}
                    className={`w-full border-2 border-black px-3.5 py-2 font-mono text-sm focus:outline-none focus:border-[#55ffff] shadow-inner resize-none ${
                      isDark ? "bg-[#1b1924] text-white" : "bg-[#f2f2f2] text-black"
                    }`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="mc-btn mc-btn-green w-full py-3 text-xl flex items-center justify-center gap-2"
                  >
                    <span>✉️</span>
                    <span>{t.contact.submitButton || "EJECUTAR / ENVIAR MENSAJE"}</span>
                  </button>
                </div>

              </form>

            </div>

          </div>

          {/* Pie de página con créditos */}
          <div
            className={`mt-10 pt-4 border-t-2 border-black text-center font-mono text-xs ${
              isDark ? "text-[#888888]" : "text-[#444444]"
            }`}
          >
            <p>{t.contact.footerCredits}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
