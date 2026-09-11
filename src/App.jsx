import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ui/ErrorBoundary';
import AnimatedBackground from './components/layout/AnimatedBackground';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="relative">
          <AnimatedBackground />
          <Navbar />
          <main>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;