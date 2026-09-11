import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const navSections = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "contact", key: "contact" },
];

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(navSections[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-cyan-950/80 backdrop-blur-md z-50 border-b border-cyan-950/80"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 hidden sm:block"
            >
              {t.navbar.brand}
            </motion.div>
            <img
              src="/assets/ecuador-flag-icon.svg"
              alt="Bandera de Ecuador"
              className="w-8 h-8 ml-2"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Menú en escritorio */}
            <div className="hidden md:flex space-x-6">
              {navSections.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-colors font-medium text-sm lg:text-base ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-white hover:text-cyan-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.navbar[item.key]}
                </motion.button>
              ))}
            </div>

            {/* Botón de cambio de idioma a la derecha */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Cambiar idioma / Change language"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-bold shadow-sm shadow-cyan-500/20 cursor-pointer"
            >
              <Languages className="w-4 h-4 text-cyan-400" />
              <span>{language.toUpperCase()}</span>
            </motion.button>

            {/* Botón hamburguesa con animación */}
            <motion.button
              className="md:hidden text-white ml-2 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ rotate: 90, scale: 0.9 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ☰
            </motion.button>
          </div>
        </div>

        {/* Menú desplegable móvil con animación */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2 px-4 pb-4">
                {navSections.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => scrollToSection(item.id), 300);
                    }}
                    className={`px-4 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? "text-cyan-500 bg-accent/10 font-semibold"
                        : "text-white hover:text-cyan-300"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.navbar[item.key]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
