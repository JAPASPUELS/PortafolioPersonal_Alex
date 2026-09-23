import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { playMinecraftClick, playMinecraftExp } from '../../utils/audio';

/**
 * ============================================================================
 * Constante: technicalSkills
 * Explicación: Colección de habilidades técnicas clasificadas como ítems de
 * inventario de Minecraft con niveles de encantamiento romano (III, IV, V).
 * ============================================================================
 */
const technicalSkills = [
  { name: 'ASP.NET Core', icon: 'cSharp', level: 'V', type: 'Backend' },
  { name: 'Laravel', icon: 'laravel', level: 'V', type: 'Framework' },
  { name: 'Node.js', icon: 'node', level: 'IV', type: 'Runtime' },
  { name: 'Go', icon: 'go', level: 'III', type: 'Backend' },
  { name: 'React', icon: 'react', level: 'V', type: 'Frontend' },
  { name: 'Angular', icon: 'angular', level: 'IV', type: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 'IV', type: 'Lenguaje' },
  { name: 'Python', icon: 'python', level: 'IV', type: 'Lenguaje' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 'V', type: 'Database' },
  { name: 'MySQL', icon: 'mysql', level: 'V', type: 'Database' },
  { name: 'SQLite', icon: 'sqlite', level: 'IV', type: 'Database' },
  { name: 'MariaDB', icon: 'mariadb', level: 'IV', type: 'Database' },
  { name: 'Oracle', icon: 'oracle', level: 'III', type: 'Database' },
  { name: 'PHP', icon: 'php2', level: 'V', type: 'Lenguaje' },
  { name: 'Java', icon: 'java', level: 'V', type: 'Lenguaje' },
  { name: 'JavaScript', icon: 'javascript', level: 'V', type: 'Lenguaje' },
  { name: 'C#', icon: 'cSharp', level: 'IV', type: 'Lenguaje' },
  { name: 'GitHub', icon: 'github', level: 'V', type: 'VCS & CI/CD' },
  { name: 'Trello', icon: 'trello', level: 'V', type: 'Management' },
  { name: 'ClickUp', icon: 'trello', level: 'IV', type: 'Management' },
];

/**
 * ============================================================================
 * Componente: About (Estadísticas del Jugador, Inventario & Logros)
 * Explicación: Reinterpreta el perfil profesional como la interfaz de inventario
 * y libro de logros de Minecraft con total soporte para temas Claro/Oscuro
 * y adaptación minuciosa para evitar desbordamientos en celulares pequeños (320px+).
 * ============================================================================
 */
const About = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  /**
   * Método: handleSkillClick
   * Explicación: Selecciona o deselecciona una habilidad del inventario reproduciendo sonido de clic.
   * @param {Object} skill - Objeto con datos de la habilidad seleccionada
   */
  const handleSkillClick = (skill) => {
    playMinecraftClick();
    setSelectedSkill(skill.name === selectedSkill?.name ? null : skill);
  };

  /**
   * Método: handleAdvancementClick
   * Explicación: Emite el tintineo de orbe de experiencia al inspeccionar un logro profesional.
   */
  const handleAdvancementClick = () => {
    playMinecraftExp();
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen px-2 sm:px-4 pt-20 pb-28 sm:pt-24 sm:pb-32 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* ====================================================================
            Sección: Encabezado de la Pantalla GUI
            ==================================================================== */}
        <div className="text-center mb-6 sm:mb-10 px-2">
          <span
            className={`font-['VT323'] text-base sm:text-xl mc-text-shadow ${
              isDark ? "text-[#55ff55]" : "text-[#185e13]"
            }`}
          >
            {t.about.subtitleTag || "[ ESTADÍSTICAS DEL JUGADOR // GUI PANEL ]"}
          </span>
          <h2
            className={`font-['VT323'] text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl mc-text-shadow mt-1 break-words ${
              isDark ? "text-white" : "text-[#1b1924]"
            }`}
          >
            {t.about.title.toUpperCase()}
          </h2>
          <div className="w-20 sm:w-32 h-1.5 bg-[#55ff55] mx-auto mt-2 shadow-[0_0_8px_#55ff55]" />
        </div>

        {/* ====================================================================
            Sección: Panel GUI Adaptable al Tema (Claro / Oscuro) y Responsivo
            ==================================================================== */}
        <div className="mc-panel-theme p-2.5 sm:p-6 md:p-8 relative w-full max-w-full">
          
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 w-full">
            
            {/* Columna Izquierda (5 cols): Lore del Personaje y Formación */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 w-full min-w-0">
              
              {/* Perfil Profesional */}
              <div className="mc-card-inner p-3.5 sm:p-5 shadow-inner w-full min-w-0">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xl">🛡️</span>
                  <h3 className="font-['VT323'] text-xl sm:text-2xl text-[#55ffff] mc-text-shadow">
                    {t.about.profileTitle}
                  </h3>
                </div>
                <p
                  className={`text-xs sm:text-base leading-relaxed font-sans break-words ${
                    isDark ? "text-[#cfcfcf]" : "text-[#1a1a1a]"
                  }`}
                >
                  {t.about.profileText}
                </p>
              </div>

              {/* Formación Académica */}
              <div className="mc-card-inner p-3.5 sm:p-5 shadow-inner w-full min-w-0">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xl">🎓</span>
                  <h4 className="font-['VT323'] text-xl sm:text-2xl text-[#ffaa00] mc-text-shadow">
                    {t.about.educationTitle}
                  </h4>
                </div>
                <div className="border-l-2 border-[#ffaa00] pl-3">
                  <h5
                    className={`font-bold text-sm sm:text-base break-words ${
                      isDark ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {t.about.degree}
                  </h5>
                  <p className="text-[#55ffff] text-xs sm:text-sm font-semibold break-words">
                    {t.about.university}
                  </p>
                  <p
                    className={`text-[11px] sm:text-xs mt-1 font-mono ${
                      isDark ? "text-[#888888]" : "text-[#4a4a4a]"
                    }`}
                  >
                    {t.about.educationDate}
                  </p>
                </div>
              </div>

              {/* Estadísticas Numéricas */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full min-w-0">
                {[
                  { label: t.about.stats.languages, value: "8+", icon: "💻" },
                  { label: t.about.stats.frameworks, value: "6+", icon: "🚀" },
                  { label: t.about.stats.databases, value: "6+", icon: "🗄️" },
                  { label: t.about.stats.certifications, value: "4", icon: "📜" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="mc-card-inner p-2 sm:p-3 text-center shadow-inner hover:border-[#55ff55] transition-colors min-w-0"
                  >
                    <div className="text-lg sm:text-xl mb-0.5">{stat.icon}</div>
                    <div className="font-['VT323'] text-2xl sm:text-3xl text-[#55ff55] mc-text-shadow leading-none">
                      {stat.value}
                    </div>
                    <div
                      className={`text-[10px] min-[360px]:text-xs mt-1 font-sans break-words ${
                        isDark ? "text-[#aaaaaa]" : "text-[#333333] font-medium"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Columna Derecha (7 cols): Inventario de Habilidades y Logros */}
            <div className="lg:col-span-7 flex flex-col justify-between w-full min-w-0">
              
              <div className="w-full min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⛏️</span>
                    <h3 className="font-['VT323'] text-xl sm:text-2xl text-[#55ff55] mc-text-shadow">
                      {t.about.skillsInventory || t.about.skillsTitle}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-mono ${
                      isDark ? "text-[#888888]" : "text-[#444444]"
                    }`}
                  >
                    {t.about.clickToInspect || "Click to inspect"}
                  </span>
                </div>

                {/* Rejilla de Ranuras de Inventario Adaptable a Móviles (min-w-0 estricto para evitar overflow) */}
                <div className="grid grid-cols-3 min-[380px]:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2.5 p-1.5 sm:p-3 mc-card-inner shadow-inner w-full">
                  {technicalSkills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill)}
                        className={`group relative aspect-square flex flex-col items-center justify-center p-1 sm:p-1.5 transition-all min-w-0 w-full overflow-hidden ${
                          isSelected ? "mc-slot-theme active scale-102 sm:scale-105" : "mc-slot-theme hover:scale-102 sm:hover:scale-105"
                        }`}
                        title={`${skill.name} - ${t.about.masteryLevel || "Level"} ${skill.level}`}
                      >
                        <span className="absolute bottom-0.5 right-1 font-['VT323'] text-[10px] sm:text-xs text-[#ffff55] mc-text-shadow leading-none">
                          {skill.level}
                        </span>

                        <img
                          src={`/assets/${skill.icon}.svg`}
                          alt={skill.name}
                          className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 sm:w-7 sm:h-7 object-contain filter group-hover:brightness-110 drop-shadow flex-shrink-0"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />

                        <span
                          className={`text-[9px] min-[360px]:text-[10px] font-sans truncate w-full text-center mt-0.5 sm:mt-1 leading-tight px-0.5 ${
                            isDark ? "text-[#e0e0e0]" : "text-[#1a1a1a] font-semibold"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Detalle Lore de la Habilidad Seleccionada */}
                {selectedSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mc-tooltip p-3 sm:p-4 mt-3 sm:mt-4 border-2 border-[#55ffff] w-full max-w-full break-words"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-[#55ffff] text-base sm:text-lg font-bold">
                        ✦ {selectedSkill.name}
                      </span>
                      <span className="text-[#ffff55] font-mono text-xs sm:text-sm">
                        {t.about.masteryLevel || "Mastery Level"} {selectedSkill.level}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#aaaaaa] mt-1 font-sans break-words">
                      {t.about.category || "Category:"} <span className="text-white font-medium">{selectedSkill.type}</span> • {t.about.activeProduction || "In active production"}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Subsección: Logros Desbloqueados (Advancements) */}
              <div className="mt-6 sm:mt-8 w-full min-w-0">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-xl">🏆</span>
                  <h3 className="font-['VT323'] text-xl sm:text-2xl text-[#ffaa00] mc-text-shadow">
                    {t.about.certificationsLog || t.about.certificationsTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
                  {t.about.certificates.map((cert) => (
                    <div
                      key={cert.title}
                      onClick={handleAdvancementClick}
                      className="mc-card-inner p-2.5 sm:p-3.5 hover:border-[#ffaa00] transition-colors cursor-pointer shadow-inner flex items-start gap-2.5 sm:gap-3 group w-full min-w-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 bg-[#252230] border border-black flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform mt-0.5">
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <span className="font-['VT323'] text-xs sm:text-sm text-[#ffff55] mc-text-shadow">
                            {t.about.advancementUnlocked || "ADVANCEMENT MADE!"}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono bg-[#2a2736] text-[#55ffff] px-1 sm:px-1.5 py-0.5 border border-black flex-shrink-0">
                            {cert.badge}
                          </span>
                        </div>
                        <h4
                          className={`font-bold text-xs sm:text-sm break-words mt-0.5 ${
                            isDark ? "text-white" : "text-[#111111]"
                          }`}
                        >
                          {cert.title}
                        </h4>
                        <p
                          className={`text-[10px] sm:text-[11px] font-sans break-words ${
                            isDark ? "text-[#aaaaaa]" : "text-[#444444]"
                          }`}
                        >
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;