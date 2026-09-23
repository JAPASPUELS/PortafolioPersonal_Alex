import { motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { playMinecraftClick } from "../../utils/audio";

/**
 * ============================================================================
 * Componente: Experience (Libro de Misiones & Expediciones)
 * Explicación: Renderiza la trayectoria laboral como un Quest Log de misiones
 * completadas y activas, adaptándose a temas Claro/Oscuro e impidiendo
 * cualquier desbordamiento de contenedores en teléfonos móviles (320px+).
 * ============================================================================
 */
const Experience = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);

  const experiences = t.experience.items;

  /**
   * Método: handleLinkClick
   * Explicación: Reproduce sonido de clic de piedra al interactuar con el enlace externo.
   */
  const handleLinkClick = () => {
    playMinecraftClick();
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen px-2 sm:px-4 pt-20 pb-28 sm:pt-24 sm:pb-32 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* ====================================================================
            Sección: Título Temático del Libro de Misiones
            ==================================================================== */}
        <div className="text-center mb-6 sm:mb-10 px-2">
          <span
            className={`font-['VT323'] text-base sm:text-xl mc-text-shadow ${
              isDark ? "text-[#ffaa00]" : "text-[#995c00]"
            }`}
          >
            {t.experience.subtitleTag || "[ LIBRO DE MISIONES // QUEST LOG & EXP ]"}
          </span>
          <h2
            className={`font-['VT323'] text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl mc-text-shadow mt-1 break-words ${
              isDark ? "text-white" : "text-[#1b1924]"
            }`}
          >
            {t.experience.title.toUpperCase()}
          </h2>
          <div className="w-20 sm:w-32 h-1.5 bg-[#ffaa00] mx-auto mt-2 shadow-[0_0_8px_#ffaa00]" />
        </div>

        {/* ====================================================================
            Sección: Panel GUI de Misiones Adaptable al Tema y Móviles
            ==================================================================== */}
        <div className="mc-panel-theme p-2.5 sm:p-6 md:p-8 relative w-full max-w-full">
          
          <div className="space-y-4 sm:space-y-8 w-full">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="mc-card-inner p-3 sm:p-6 shadow-2xl relative w-full min-w-0"
              >
                {/* Cabecera de la Misión con distribución flexible y protección de desborde */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b-2 border-black pb-3 sm:pb-4 mb-4 sm:mb-5">
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#23202e] border-2 border-black flex items-center justify-center text-lg sm:text-2xl shadow-inner flex-shrink-0 mt-0.5 sm:mt-0">
                      {exp.icon || "🏢"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-['VT323'] text-xl sm:text-3xl text-[#55ffff] mc-text-shadow break-words leading-tight">
                          {exp.company}
                        </span>
                        <span className="bg-[#246b22] text-[#ffffa0] border border-black px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-mono whitespace-nowrap">
                          {t.experience.inProgress || "Misión en Progreso"}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-semibold font-sans mt-0.5 break-words ${
                          isDark ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Coordenadas de la Misión y Período sin desbordes por márgenes */}
                  <div className="text-left sm:text-right font-mono text-[11px] sm:text-xs flex flex-wrap sm:flex-col items-center sm:items-end justify-between gap-1 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-black/20">
                    <div className="text-[#ffaa00] font-bold">📍 {exp.location}</div>
                    <div className={isDark ? "text-[#888888]" : "text-[#444444]"}>{exp.period}</div>
                  </div>
                </div>

                {/* Resumen de la Misión */}
                <p
                  className={`text-xs sm:text-base font-sans leading-relaxed mb-4 sm:mb-6 break-words ${
                    isDark ? "text-[#d8d8d8]" : "text-[#222222]"
                  }`}
                >
                  {exp.description}
                </p>

                {/* Subsección: Objetivos Cumplidos */}
                <div className="mb-4 sm:mb-6">
                  <span className="font-['VT323'] text-lg sm:text-xl text-[#55ff55] mc-text-shadow block mb-2">
                    {t.experience.achievementsTitle || "✦ Objetivos de Misión Cumplidos:"}
                  </span>
                  <div className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 text-xs sm:text-sm font-sans p-2 sm:p-2.5 border border-black/80 break-words ${
                          isDark ? "bg-[#1a1822] text-[#cccccc]" : "bg-[#ebebeb] text-[#1a1a1a]"
                        }`}
                      >
                        <span className="text-[#55ff55] font-mono font-bold flex-shrink-0">
                          [✔]
                        </span>
                        <span className="flex-1 min-w-0 break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsección: Herramientas y Encantamientos */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-black">
                  <div className="w-full sm:w-auto">
                    <span
                      className={`font-['VT323'] text-sm sm:text-base block mb-1.5 ${
                        isDark ? "text-[#aaaaaa]" : "text-[#444444]"
                      }`}
                    >
                      {t.experience.toolsTitle || "Herramientas y Encantamientos:"}
                    </span>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#2a2736] border border-black px-2 py-0.5 text-[10px] sm:text-xs font-mono text-[#55ffff]"
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
                      className="mc-btn text-sm sm:text-base py-1.5 px-3 sm:px-4 flex items-center justify-center gap-2 w-full sm:w-auto"
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
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-black grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center w-full">
            <div className="mc-card-inner p-2 sm:p-3 min-w-0">
              <span className="font-['VT323'] text-xl sm:text-2xl text-[#55ff55]">100%</span>
              <p className={`text-[10px] sm:text-xs font-sans leading-tight break-words ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.experience.stats.teamworkDesc}
              </p>
            </div>
            <div className="mc-card-inner p-2 sm:p-3 min-w-0">
              <span className="font-['VT323'] text-xl sm:text-2xl text-[#55ffff]">Full Stack</span>
              <p className={`text-[10px] sm:text-xs font-sans leading-tight break-words ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.experience.stats.fullstackDesc}
              </p>
            </div>
            <div className="mc-card-inner p-2 sm:p-3 min-w-0">
              <span className="font-['VT323'] text-xl sm:text-2xl text-[#ffaa00]">24/7</span>
              <p className={`text-[10px] sm:text-xs font-sans leading-tight break-words ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
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
