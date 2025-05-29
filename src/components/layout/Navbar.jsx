import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "experience", label: "Experiencia" },
    { id: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(navItems[index].id);
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
              Mi Portafolio
            </motion.div>
            <img
              src="/assets/ecuador-flag-icon.svg"
              alt="Bandera de Ecuador"
              className="w-8 h-8 ml-2"
            />
          </div>

          {/* Menú en escritorio */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-500 bg-accent/10"
                    : "text-white hover:text-accent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Botón hamburguesa con animación */}
          <motion.button
            className="md:hidden text-white ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ rotate: 90, scale: 0.9 }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ☰
          </motion.button>
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
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => scrollToSection(item.id), 300);
                    }}
                    className={`px-4 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? "text-cyan-500 bg-accent/10"
                        : "text-white hover:text-accent"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
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
