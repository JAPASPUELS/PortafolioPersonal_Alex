import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { playMinecraftClick } from "../../utils/audio";

/**
 * ============================================================================
 * Componente: Experience (Libro de Misiones & Expediciones)
 * Explicación: Renderiza la trayectoria laboral como un Quest Log de misiones
 * completadas y activas, adaptándose a los temas Claro y Oscuro y traduciéndose
 * por completo entre Español e Inglés.
 * ============================================================================
 */
const Experience = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = t.experience.items;

  /**
   * Método: handleLinkClick
   * Explicación: Reproduce sonido de click al abrir el enlace externo de la empresa.
   */
  const handleLinkClick = () => {
    playMinecraftClick();
  };

  return (
    <section id="experience" ref={ref} className="min-h-screen px-2.5 sm:px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ====================================================================
            Sección: Título Temático
            ==================================================================== */}
        <div className="text-center mb-8 sm:mb-10">
          <span
            className={`font-['VT323'] text-lg sm:text-xl mc-text-shadow ${
              isDark ? "text-[#ffaa00]" : "text-[#995c00]"
            }`}
          >
            {t.experience.subtitleTag || "[ LIBRO DE MISIONES // QUEST LOG & EXP ]"}
          </span>
          <h2
            className={`font-['VT323'] text-4xl sm:text-5xl md:text-6xl mc-text-shadow mt-1 ${
              isDark ? "text-white" : "text-[#1b1924]"
            }`}
          >
            {t.experience.title.toUpperCase()}
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-[#ffaa00] mx-auto mt-2 shadow-[0_0_8px_#ffaa00]" />
        </div>

        {/* ====================================================================
            Sección: Panel GUI de Misiones Adaptable al Tema y Móviles
            ==================================================================== */}
        <div className="mc-panel-theme p-3.5 sm:p-6 md:p-8 relative">
          
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="mc-card-inner p-4 sm:p-6 shadow-2xl relative"
              >
                {/* Cabecera de la Misión con distribución flexible */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#23202e] border-2 border-black flex items-center justify-center text-xl sm:text-2xl shadow-inner flex-shrink-0">
                      {exp.icon || "🏢"}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-['VT323'] text-2xl sm:text-3xl text-[#55ffff] mc-text-shadow">
                          {exp.company}
                        </span>
                        <span className="bg-[#246b22] text-[#ffffa0] border border-black px-1.5 sm:px-2 py-0.5 text-xs font-mono">
                          {t.experience.inProgress || "Misión en Progreso"}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-semibold font-sans ${
                          isDark ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Coordenadas de la Misión y Período */}
                  <div className="text-left sm:text-right font-mono text-xs pl-13 sm:pl-0">
                    <div className="text-[#ffaa00] font-bold">📍 {exp.location}</div>
                    <div className={isDark ? "text-[#888888]" : "text-[#444444]"}>{exp.period}</div>
                  </div>
                </div>

                {/* Resumen de la Misión */}
                <p
                  className={`text-sm sm:text-base font-sans leading-relaxed mb-6 ${
                    isDark ? "text-[#d8d8d8]" : "text-[#222222]"
                  }`}
                >
                  {exp.description}
                </p>

                {/* Subsección: Objetivos Cumplidos */}
                <div className="mb-6">
                  <span className="font-['VT323'] text-xl text-[#55ff55] mc-text-shadow block mb-2">
                    {t.experience.achievementsTitle || "✦ Objetivos de Misión Cumplidos:"}
                  </span>
                  <div className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm font-sans p-2.5 border border-black/80 ${
                          isDark ? "bg-[#1a1822] text-[#cccccc]" : "bg-[#ebebeb] text-[#1a1a1a]"
                        }`}
                      >
                        <span className="text-[#55ff55] font-mono font-bold flex-shrink-0">
                          [✔]
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsección: Herramientas y Encantamientos */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
                  <div>
                    <span
                      className={`font-['VT323'] text-base block mb-1.5 ${
                        isDark ? "text-[#aaaaaa]" : "text-[#444444]"
                      }`}
                    >
                      {t.experience.toolsTitle || "Herramientas y Encantamientos:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#2a2736] border border-black px-2.5 py-0.5 text-xs font-mono text-[#55ffff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="mc-btn text-base py-1.5 px-4 flex items-center gap-2"
                    >
                      <span>🌐</span>
                      <span>{t.experience.visitWebsite || "Sitio Oficial"}</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Estadísticas de la Expedición */}
          <div className="mt-8 pt-6 border-t-2 border-black grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#55ff55]">100%</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.experience.stats.teamworkDesc}
              </p>
            </div>
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#55ffff]">Full Stack</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.experience.stats.fullstackDesc}
              </p>
            </div>
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#ffaa00]">24/7</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.experience.uptime || "Alta Disponibilidad en Producción"}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
