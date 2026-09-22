import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ui/ErrorBoundary';
import AnimatedBackground from './components/layout/AnimatedBackground';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

/**
 * ============================================================================
 * Componente Principal: App
 * Explicación: Punto de entrada de la aplicación. Configura los proveedores de
 * contexto para Internacionalización (LanguageProvider) y Temas Claro/Oscuro
 * (ThemeProvider), así como el fondo animado procedural y las secciones del portafolio.
 * ============================================================================
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <div className="relative min-h-screen transition-colors duration-300">
            {/* Fondo dinámico sensible al tema (Noche Bedrock vs Día Overworld) */}
            <AnimatedBackground />
            
            {/* Barra de navegación HUD y Hotbar de Minecraft */}
            <Navbar />
            
            {/* Contenedor principal de las secciones de aventura */}
            <main>
              <Home />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;