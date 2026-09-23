import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { playMinecraftClick, playMinecraftExp } from '../../utils/audio';

/**
 * ============================================================================
 * Componente: Home (Pantalla de Inicio Estilo Menú de Minecraft)
 * Explicación: Sección de bienvenida temática con título monumental adaptable,
 * marco de ítem para el retrato del desarrollador, Splash Text rotado interactivo
 * 100% traducible en tiempo real (ES/EN) con separación vertical dedicada para
 * evitar colisiones con el subtítulo, y botones de menú de juego con soporte
 * para temas claro y oscuro, optimizado para celulares pequeños (320px+).
 * ============================================================================
 */
const Home = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [splashIndex, setSplashIndex] = useState(0);

  // Lista de frases del Splash Text extraída del diccionario de traducción activo
  const splashList = t.home.splashTexts || [
    "¡Ingeniero de Software Fullstack!",
    "¡Arquitectura Cloud & AWS Foundations!",
  ];

  /**
   * Método: handleSplashClick
   * Explicación: Avanza a la siguiente frase del Splash Text al hacer clic en él y reproduce
   * el tintineo característico del orbe de experiencia.
   */
  const handleSplashClick = () => {
    playMinecraftExp();
    setSplashIndex((prev) => (prev + 1) % splashList.length);
  };

  /**
   * Método: navigateToSection
   * Explicación: Realiza scroll suave hacia la sección deseada emitiendo un sonido de botón.
   * @param {string} sectionId - Identificador del contenedor DOM de destino
   */
  const navigateToSection = (sectionId) => {
    playMinecraftClick();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Frase actual del Splash Text acorde al idioma activo
  const currentSplash = splashList[splashIndex % splashList.length];

  return (
    <SectionWrapper className="flex items-center justify-center pt-20 pb-20 sm:pt-24 sm:pb-24 w-full max-w-full overflow-hidden" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto px-2 sm:px-4 text-center flex flex-col items-center"
      >
        {/* ====================================================================
            Sección: Marco del Ítem (Avatar del Desarrollador)
            ==================================================================== */}
        <motion.div variants={fadeInUp} className="mb-5 sm:mb-6 relative">
          <div className="relative p-1.5 sm:p-2.5 bg-[#4a2e18] border-4 border-[#241408] shadow-[0_0_20px_rgba(0,0,0,0.6)] inline-block">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-[#785b3b] border-2 border-black overflow-hidden shadow-inner">
              <img
                src="/assets/Perfil.jpg"
                alt="Alexander Paspuels"
                className="w-full h-full object-cover object-[center_top] filter contrast-105"
              />
            </div>
            {/* Placa con el rol debajo del marco con texto traducido */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1c1a24] border border-black px-2 sm:px-3 py-0.5 text-[11px] sm:text-xs font-['VT323'] text-[#55ffff] whitespace-nowrap shadow-md">
              {t.home.roleBadge || "Ing. Alex Paspuels"}
            </div>
          </div>
        </motion.div>

        {/* ====================================================================
            Sección: Título Monumental de Minecraft
            Explicación: Encabezado principal con escala fluida para dispositivos móviles.
            ==================================================================== */}
        <motion.div variants={fadeInUp} className="relative w-full max-w-full px-1">
          <h1 className="font-['VT323'] text-3xl min-[360px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-normal sm:tracking-wider text-white mc-text-shadow leading-tight sm:leading-none break-words select-none max-w-full">
            ALEXANDER PASPUELS
          </h1>
        </motion.div>

        {/* ====================================================================
            Sección: Contenedor Aislado del Splash Text Traducible
            Explicación: Posee altura mínima (min-h-[56px] sm:min-h-[72px]) y márgenes
            verticales amplios (my-3 sm:my-5, py-3 sm:py-5) para alojar el texto
            rotado a -10° sin que sus letras inferiores invadan o queden tapadas
            por el subtítulo inferior.
            ==================================================================== */}
        <motion.div
          variants={fadeInUp}
          className="relative z-10 my-3 sm:my-5 py-3 sm:py-5 px-3 sm:px-6 flex items-center justify-center w-full max-w-full overflow-visible min-h-[56px] sm:min-h-[72px]"
        >
          <div
            onClick={handleSplashClick}
            className="mc-splash-text cursor-pointer text-xs min-[360px]:text-sm min-[480px]:text-lg sm:text-2xl md:text-3xl font-bold select-none hover:scale-105 transition-transform max-w-[85vw] text-center px-3 py-1.5 leading-snug"
            title={t.about.clickToInspect || "Click to change"}
          >
            {currentSplash}
          </div>
        </motion.div>

        {/* ====================================================================
            Sección: Subtítulo Descriptivo Sensible al Tema
            Explicación: Ubicado debajo del Splash Text con espacio despejado
            garantizado (mt-2 sm:mt-3 mb-8 sm:mb-12) para evitar cualquier solapamiento.
            ==================================================================== */}
        <motion.p
          variants={fadeInUp}
          className={`relative z-0 text-xs sm:text-base md:text-xl font-sans max-w-2xl mx-auto mt-2 sm:mt-3 mb-8 sm:mb-12 leading-relaxed drop-shadow px-2 break-words ${
            isDark ? "text-[#d0d0d0]" : "text-[#101014] font-medium"
          }`}
        >
          {t.home.subtitle}
        </motion.p>

        {/* ====================================================================
            Sección: Menú de Acciones (Botones de Piedra Bilingües y Responsivos)
            ==================================================================== */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xs sm:max-w-md mb-8 sm:mb-12 px-2"
        >
          <button
            onClick={() => navigateToSection('projects')}
            className="mc-btn mc-btn-green w-full py-2 sm:py-2.5 text-base sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.projects || t.navbar.projects}</span>
          </button>

          <button
            onClick={() => navigateToSection('about')}
            className="mc-btn w-full py-2 sm:py-2.5 text-base sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.about || t.navbar.about}</span>
          </button>

          <button
            onClick={() => navigateToSection('experience')}
            className="mc-btn w-full py-2 sm:py-2.5 text-base sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.experience || t.navbar.experience}</span>
          </button>

          <button
            onClick={() => navigateToSection('contact')}
            className="mc-btn w-full py-2 sm:py-2.5 text-base sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.contact || t.navbar.contact}</span>
          </button>
        </motion.div>

        {/* ====================================================================
            Sección: Indicador de Desplazamiento
            ==================================================================== */}
        <motion.div
          variants={fadeInUp}
          onClick={() => navigateToSection('about')}
          className={`cursor-pointer flex flex-col items-center gap-1 font-['VT323'] text-lg sm:text-xl animate-bounce hover:scale-105 transition-all select-none ${
            isDark ? "text-[#55ff55]" : "text-[#1a4e15] font-bold"
          }`}
        >
          <span>▼ {t.home.scrollDown} ▼</span>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Home;
