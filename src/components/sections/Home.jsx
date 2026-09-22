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
 * Explicación: Sección de bienvenida temática con título monumental, marco de ítem
 * para el retrato, Splash Text rotado interactivo 100% traducible en tiempo real
 * (ES/EN) y botones de menú de juego con soporte para temas claro y oscuro.
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
   * Explicación: Cicla al siguiente Splash Text al hacer clic en él y reproduce
   * el tintineo del orbe de experiencia.
   */
  const handleSplashClick = () => {
    playMinecraftExp();
    setSplashIndex((prev) => (prev + 1) % splashList.length);
  };

  /**
   * Método: navigateToSection
   * Explicación: Realiza scroll suave hacia la sección destino con sonido de botón.
   * @param {string} sectionId - Identificador del elemento en el DOM
   */
  const navigateToSection = (sectionId) => {
    playMinecraftClick();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Frase actual del Splash Text acorde al idioma activo
  const currentSplash = splashList[splashIndex % splashList.length];

  return (
    <SectionWrapper className="flex items-center justify-center pt-24 pb-20" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 max-w-4xl text-center flex flex-col items-center"
      >
        {/* ====================================================================
            Sección: Marco del Ítem (Avatar del Desarrollador)
            ==================================================================== */}
        <motion.div variants={fadeInUp} className="mb-6 relative">
          <div className="relative p-2 sm:p-2.5 bg-[#4a2e18] border-4 border-[#241408] shadow-[0_0_20px_rgba(0,0,0,0.6)] inline-block">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-[#785b3b] border-2 border-black overflow-hidden shadow-inner">
              <img
                src="/assets/Perfil.jpg"
                alt="Alexander Paspuels"
                className="w-full h-full object-cover object-[center_top] filter contrast-105"
              />
            </div>
            {/* Placa con el rol debajo del marco con texto traducido */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1c1a24] border border-black px-2.5 sm:px-3 py-0.5 text-xs font-['VT323'] text-[#55ffff] whitespace-nowrap shadow-md">
              {t.home.roleBadge || "Ing. Alex Paspuels"}
            </div>
          </div>
        </motion.div>

        {/* ====================================================================
            Sección: Título Monumental y Splash Text Traducible
            Contenedor con overflow-visible para permitir que el texto inclinado
            de Minecraft se dibuje sin ser recortado por los bordes.
            ==================================================================== */}
        <motion.div variants={fadeInUp} className="relative mb-6 sm:mb-8 max-w-full px-2 overflow-visible">
          <h1 className="font-['VT323'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight sm:tracking-wider text-white mc-text-shadow leading-none break-words select-none">
            ALEXANDER PASPUELS
          </h1>

          {/* Contenedor del Splash Text con amplio margen vertical y lateral libre de recortes */}
          <div className="relative mt-3 sm:mt-5 py-2 sm:py-3 px-4 sm:px-8 overflow-visible flex items-center justify-center">
            <div
              onClick={handleSplashClick}
              className="mc-splash-text cursor-pointer text-base sm:text-2xl md:text-3xl font-bold select-none hover:scale-105 transition-transform max-w-full text-center px-3 py-1"
              title={t.about.clickToInspect || "Click to change"}
            >
              {currentSplash}
            </div>
          </div>
        </motion.div>

        {/* ====================================================================
            Sección: Subtítulo Descriptivo Sensible al Tema
            ==================================================================== */}
        <motion.p
          variants={fadeInUp}
          className={`text-sm sm:text-base md:text-xl font-sans max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow px-2 ${
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-md mb-10 sm:mb-12 px-2"
        >
          <button
            onClick={() => navigateToSection('projects')}
            className="mc-btn mc-btn-green w-full py-2 sm:py-2.5 text-lg sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.projects || t.navbar.projects}</span>
          </button>

          <button
            onClick={() => navigateToSection('about')}
            className="mc-btn w-full py-2 sm:py-2.5 text-lg sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.about || t.navbar.about}</span>
          </button>

          <button
            onClick={() => navigateToSection('experience')}
            className="mc-btn w-full py-2 sm:py-2.5 text-lg sm:text-xl flex items-center justify-center gap-2"
          >
            <span>{t.home.actions?.experience || t.navbar.experience}</span>
          </button>

          <button
            onClick={() => navigateToSection('contact')}
            className="mc-btn w-full py-2 sm:py-2.5 text-lg sm:text-xl flex items-center justify-center gap-2"
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
          className={`cursor-pointer flex flex-col items-center gap-1 font-['VT323'] text-xl animate-bounce hover:scale-105 transition-all ${
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
