import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { playMinecraftClick, playMinecraftExp } from "../../utils/audio";

/**
 * ============================================================================
 * Constante: projectBaseData
 * Explicación: Datos base de los proyectos (imágenes, repositorios y tecnologías)
 * que se enriquecen dinámicamente con los textos traducidos del diccionario i18n.
 * ============================================================================
 */
const projectBaseData = [
  {
    id: 1,
    image: "/images/LoginEcobooks.png",
    icon: "🌱",
    codeLink: "https://github.com/JAPASPUELS/EcoBooks_Jetstream.git",
    technologies: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Bootstrap"],
    rarityKey: "legendary",
    rarityColor: "#ffaa00",
  },
  {
    id: 2,
    image: "/images/plannify.png",
    icon: "📱",
    codeLink: "https://github.com/JAPASPUELS/App_de_Gestion_Plannify.git",
    technologies: ["Kotlin", "Android", "SQLite", "Material Design"],
    rarityKey: "epic",
    rarityColor: "#c77dff",
  },
];

/**
 * ============================================================================
 * Componente: Projects (Cofre de Proyectos & Mesa de Crafteo)
 * Explicación: Presenta las aplicaciones como ítems de inventario con Lore,
 * encantamientos de arquitectura, tecnologías de crafteo y enlaces a GitHub,
 * totalmente adaptado al modo Claro/Oscuro e internacionalizado (ES/EN).
 * ============================================================================
 */
const Projects = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProjectId, setActiveProjectId] = useState(1);

  // Proyecto base activo y su correspondiente objeto de traducción
  const baseActive = projectBaseData.find((p) => p.id === activeProjectId) || projectBaseData[0];
  const translatedItem = t.projects.items.find((item) => item.id === activeProjectId) || t.projects.items[0];

  /**
   * Método: handleSelectProject
   * Explicación: Selecciona un proyecto de la lista y emite sonido de experiencia.
   * @param {number} id - Identificador del proyecto
   */
  const handleSelectProject = (id) => {
    playMinecraftExp();
    setActiveProjectId(id);
  };

  /**
   * Método: handleActionClick
   * Explicación: Emite el click sonoro de botón al hacer clic en ver repositorio.
   */
  const handleActionClick = () => {
    playMinecraftClick();
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen px-2.5 sm:px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ====================================================================
            Sección: Título Temático
            ==================================================================== */}
        <div className="text-center mb-8 sm:mb-10">
          <span
            className={`font-['VT323'] text-lg sm:text-xl mc-text-shadow ${
              isDark ? "text-[#55ffff]" : "text-[#0d6978]"
            }`}
          >
            {t.projects.subtitleTag || "[ COFRE DE PROYECTOS // RECETAS CRAFTEADAS ]"}
          </span>
          <h2
            className={`font-['VT323'] text-4xl sm:text-5xl md:text-6xl mc-text-shadow mt-1 ${
              isDark ? "text-white" : "text-[#1b1924]"
            }`}
          >
            {t.projects.title.toUpperCase()}
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-[#55ffff] mx-auto mt-2 shadow-[0_0_8px_#55ffff]" />
        </div>

        {/* ====================================================================
            Sección: Selector de Ítems / Pestañas de Proyectos Responsivas
            ==================================================================== */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {projectBaseData.map((project) => {
            const isSelected = project.id === activeProjectId;
            const projectText = t.projects.items.find((item) => item.id === project.id) || {};
            return (
              <button
                key={project.id}
                onClick={() => handleSelectProject(project.id)}
                className={`mc-btn text-base sm:text-xl py-2 px-3.5 sm:px-5 flex items-center justify-center gap-2 transition-transform w-full sm:w-auto ${
                  isSelected ? "bg-[#387a31] text-[#ffff55] border-white scale-102 sm:scale-105" : ""
                }`}
              >
                <span>{project.icon}</span>
                <span>{projectText.title || "Project"}</span>
                <span className="text-xs px-1.5 py-0.5 bg-black/40 text-[#55ffff] font-mono">
                  {projectText.type || "App"}
                </span>
              </button>
            );
          })}
        </div>

        {/* ====================================================================
            Sección: Panel de Inspección de Lore Adaptable a Móviles
            ==================================================================== */}
        <div className="mc-panel-theme p-3.5 sm:p-6 md:p-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda (7 cols): Captura del Ítem */}
            <div className="lg:col-span-7">
              <div className="p-3 mc-card-inner shadow-2xl relative">
                <div className="absolute top-5 left-5 z-10 bg-[#14121a]/90 border border-black px-2.5 py-1 text-xs font-['VT323'] text-[#55ff55]">
                  {t.projects.previewLabel || "✦ Render del Proyecto"}
                </div>

                <div className="aspect-[16/10] bg-[#0c0b0f] border-2 border-black overflow-hidden flex items-center justify-center">
                  <img
                    src={baseActive.image}
                    alt={translatedItem.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Columna Derecha (5 cols): Ficha de Lore y Encantamientos */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="mc-tooltip p-5 border-2 border-[#a355ff] shadow-2xl">
                
                {/* Nombre y Rareza */}
                <div className="border-b border-[#3b1263] pb-3 mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['VT323'] text-3xl text-[#55ffff] mc-text-shadow">
                      {translatedItem.title}
                    </h3>
                    <span 
                      className="text-xs font-mono px-2 py-0.5 border border-black"
                      style={{ color: baseActive.rarityColor, backgroundColor: '#1b092c' }}
                    >
                      {t.projects.rarity?.[baseActive.rarityKey] || "Item Legendario"}
                    </span>
                  </div>
                  <p className="text-xs text-[#d0a5ff] font-mono mt-0.5">
                    {translatedItem.type} • {t.projects.stableVersion || "Versión 1.0 Estable"}
                  </p>
                </div>

                {/* Descripción Funcional */}
                <p className="text-sm text-[#d8d8d8] font-sans leading-relaxed mb-4">
                  {translatedItem.description}
                </p>

                {/* Encantamientos del Software */}
                <div className="mb-4">
                  <span className="font-['VT323'] text-lg text-[#ffff55] block mb-1">
                    {t.projects.enchantmentsTitle || "Encantamientos del Software:"}
                  </span>
                  <ul className="space-y-1">
                    {(translatedItem.enchantments || []).map((ench) => (
                      <li key={ench} className="text-xs sm:text-sm text-[#55ff55] font-mono flex items-center gap-1.5">
                        <span className="text-[#a355ff]">◆</span> {ench}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredientes de Crafteo (Stack) */}
                <div>
                  <span className="font-['VT323'] text-lg text-[#aaaaaa] block mb-1.5">
                    {t.projects.ingredientsTitle || "Ingredientes de Crafteo:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {baseActive.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#201c2b] border border-black px-2 py-0.5 text-xs text-white font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Botón de Acción a GitHub */}
              <div className="mt-6">
                <a
                  href={baseActive.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleActionClick}
                  className="mc-btn mc-btn-green w-full py-3 text-xl flex items-center justify-center gap-2"
                >
                  <span>🗡️</span>
                  <span>{t.projects.viewCode}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Subsección: Estadísticas Globales del Cofre */}
          <div className="mt-10 pt-6 border-t-2 border-black grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#55ffff]">02</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.projects.stats.projects}
              </p>
            </div>
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#55ff55]">10+</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.projects.stats.technologies}
              </p>
            </div>
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#ffff55]">02</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.projects.stats.platforms}
              </p>
            </div>
            <div className="mc-card-inner p-3">
              <span className="font-['VT323'] text-2xl text-[#ff5555]">100%</span>
              <p className={`text-xs font-sans ${isDark ? "text-[#888888]" : "text-[#444444]"}`}>
                {t.projects.stats.inDevelopment}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
