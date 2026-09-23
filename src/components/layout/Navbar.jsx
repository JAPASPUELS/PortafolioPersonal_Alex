import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { playMinecraftClick, playMinecraftExp, toggleMute, getMuteState } from "../../utils/audio";
// Componente de Bandera Nacional de Ecuador en formato pixel art de Minecraft
import EcuadorMinecraftFlag from "../ui/EcuadorMinecraftFlag";

/**
 * ============================================================================
 * Constante: navSectionKeys
 * Explicación: Define las 5 ranuras de inventario rápido (Hotbar) con sus
 * respectivos identificadores de sección, iconos temáticos y atajos numéricos.
 * ============================================================================
 */
const navSectionKeys = [
  { id: "home", key: "home", icon: "🏰", slotNum: "1" },
  { id: "about", key: "about", icon: "👤", slotNum: "2" },
  { id: "projects", key: "projects", icon: "🗡️", slotNum: "3" },
  { id: "experience", key: "experience", icon: "📜", slotNum: "4" },
  { id: "contact", key: "contact", icon: "✉️", slotNum: "5" },
];

/**
 * ============================================================================
 * Componente: Navbar (HUD Superior y Hotbar de Minecraft)
 * Explicación: Barra de navegación completa optimizada para celulares y pantallas grandes:
 * - HUD superior: Estado de salud del jugador, bandera tricolor, nivel de EXP de scroll,
 *   y botones compactos para alternar tema Día/Noche, sonido ambiental e idioma.
 * - Hotbar inferior: Ranuras de acceso directo con adaptación fluida a pantallas pequeñas (320px+).
 * ============================================================================
 */
const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  /**
   * Método: useEffect (Monitoreo de Scroll, Atajos Numéricos y Audio)
   * Explicación: Monitorea la posición del scroll para actualizar el nivel de EXP,
   * detecta la sección visible en el viewport y escucha los números del 1 al 5
   * para saltar rápidamente entre ranuras de la Hotbar.
   */
  useEffect(() => {
    setIsMuted(getMuteState());

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const scrollPosition = window.scrollY + 200;
      navSectionKeys.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    const handleKeyDown = (e) => {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= navSectionKeys.length) {
        const target = navSectionKeys[num - 1];
        if (target) {
          playMinecraftClick();
          scrollToSection(target.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /**
   * Método: scrollToSection
   * Explicación: Desplaza suavemente la ventana hacia la sección deseada emitiendo un sonido de clic.
   * @param {string} sectionId - ID del contenedor destino
   */
  const scrollToSection = (sectionId) => {
    playMinecraftClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Método: handleThemeToggle
   * Explicación: Alterna entre el tema Claro (Día Overworld) y Oscuro (Noche Bedrock) con feedback auditivo.
   */
  const handleThemeToggle = () => {
    playMinecraftClick();
    toggleTheme();
  };

  /**
   * Método: handleSoundToggle
   * Explicación: Conmuta el estado de silencio global y emite sonido de EXP si se desmutea.
   */
  const handleSoundToggle = () => {
    const newState = toggleMute();
    setIsMuted(newState);
    if (!newState) {
      playMinecraftExp();
    }
  };

  /**
   * Método: handleLanguageToggle
   * Explicación: Cambia entre Español e Inglés con sonido de clic.
   */
  const handleLanguageToggle = () => {
    playMinecraftClick();
    toggleLanguage();
  };

  return (
    <>
      {/* ======================================================================
          Sección: HUD Superior Fijo (Stats de Jugador y Botones de Control)
          Ajustado para evitar desbordamiento horizontal en celulares de 320px+.
          ====================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b-2 border-black select-none transition-colors duration-300 w-full max-w-full ${
          isDark ? "bg-[#14121a]/90 backdrop-blur-md" : "bg-[#c6c6c6]/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-1.5 sm:gap-4 w-full">
          
          {/* Subsección: Identificador del Jugador, Bandera y Corazones */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-shrink">
            {/* Bandera Nacional de Ecuador adaptada a pantallas pequeñas */}
            <EcuadorMinecraftFlag className="w-7 h-5 sm:w-11 sm:h-8 flex-shrink-0" />

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                <span
                  className={`font-['VT323'] text-base sm:text-xl tracking-wide sm:tracking-wider leading-none truncate max-w-[85px] min-[360px]:max-w-[120px] sm:max-w-none ${
                    isDark ? "text-[#e0e0e0] mc-text-shadow" : "text-[#1a1a1a]"
                  }`}
                >
                  {t.navbar.playerTag || "Alex_Paspuels"}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-1 py-0.2 bg-[#201d2a] text-[#55ffff] border border-black hidden sm:inline flex-shrink-0">
                  EC
                </span>
              </div>
              {/* Barra de vida en corazones (compacta en celulares) */}
              <div
                className="flex items-center gap-0.5 text-[9px] sm:text-xs text-[#ff3333] select-none leading-none mt-0.5"
                title={t.navbar.healthTooltip || "Vida: 10/10"}
              >
                <span>❤️</span><span>❤️</span><span>❤️</span>
                <span className="hidden min-[360px]:inline">❤️</span>
                <span className="hidden min-[360px]:inline">❤️</span>
              </div>
            </div>
          </div>

          {/* Subsección: Barra de Experiencia de Scroll (Visible en tablet y PC) */}
          <div className="flex-1 max-w-md hidden sm:flex flex-col items-center px-4">
            <span className="font-['VT323'] text-xl text-[#55ff55] mc-text-shadow leading-none mb-1">
              {t.navbar.level || "Lv. 26"}
            </span>
            <div className="w-full h-3 bg-[#0a0a0c] border border-black p-0.5 rounded-[1px] shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#388e3c] via-[#55ff55] to-[#76ff03] transition-all duration-150 rounded-[1px]"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>

          {/* Subsección: Botones de Configuración (Tema, Audio e Idioma) */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Botón de Tema Claro / Oscuro */}
            <button
              onClick={handleThemeToggle}
              title={isDark ? t.navbar.themeDay : t.navbar.themeNight}
              className="mc-btn text-xs sm:text-base py-1 px-1.5 sm:px-2.5 flex items-center gap-1"
            >
              <span>{isDark ? "☀️" : "🌙"}</span>
              <span className="hidden md:inline text-xs font-mono">
                {isDark ? "DÍA" : "NOCHE"}
              </span>
            </button>

            {/* Botón de Sonido Mute/Unmute */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? t.navbar.soundUnmute : t.navbar.soundMute}
              className="mc-btn text-xs sm:text-base py-1 px-1.5 sm:px-2.5 flex items-center gap-1"
            >
              <span>{isMuted ? "🔇" : "🔊"}</span>
            </button>

            {/* Botón de Idioma (ES / EN) */}
            <button
              onClick={handleLanguageToggle}
              title="Cambiar idioma / Switch language"
              className="mc-btn text-xs sm:text-base py-1 px-1.5 sm:px-2.5 flex items-center gap-1"
            >
              <span className="text-[#55ffff]">🌐</span>
              <span className="font-bold">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          Sección: Hotbar Inferior Adaptable a Móviles (5 Ranuras Rápidas)
          Diseñada para caber con holgura en pantallas de 320px de ancho.
          ====================================================================== */}
      <nav
        aria-label="Minecraft Hotbar"
        className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 select-none max-w-[98vw] pb-[env(safe-area-inset-bottom)]"
      >
        <div
          className={`flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 border-2 border-black rounded-[2px] shadow-2xl transition-colors duration-300 ${
            isDark ? "bg-[#404040]" : "bg-[#8f8f8f]"
          }`}
        >
          {navSectionKeys.map((item) => {
            const isActive = activeSection === item.id;
            const slotLabel = t.navbar.slots?.[item.key] || t.navbar[item.key];

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-14 sm:h-14 flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-[#6b6b6b] border-2 border-white shadow-[0_0_10px_#ffffff]"
                    : "mc-slot-theme hover:border-gray-300"
                }`}
              >
                {/* Número de acceso rápido */}
                <span className="absolute top-0.5 left-1 font-['VT323'] text-[11px] sm:text-sm text-[#ffff55] mc-text-shadow leading-none">
                  {item.slotNum}
                </span>

                {/* Icono de la ranura */}
                <span className="text-base min-[380px]:text-lg sm:text-2xl filter drop-shadow">
                  {item.icon}
                </span>

                {/* Tooltip visible en pantallas medianas y grandes */}
                <span className="mc-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-0.5 whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none transition-opacity text-xs sm:text-sm hidden sm:block">
                  {slotLabel}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
