import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ============================================================================
 * Contexto: ThemeContext
 * Explicación: Gestiona el estado del tema global (Oscuro: Noche / Bedrock,
 * Claro: Día / Overworld de Minecraft) y sincroniza la clase en el <html>
 * persistiendo la preferencia en localStorage.
 * ============================================================================
 */
const ThemeContext = createContext();

/**
 * Componente Proveedor: ThemeProvider
 * Explicación: Envuelve la aplicación proveyendo el tema actual y la función
 * para alternar entre modo Claro y Oscuro.
 * @param {Object} props - Propiedades del componente (children)
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  /**
   * Método: useEffect (Sincronización con el DOM)
   * Explicación: Aplica la clase 'light' o 'dark' directamente al elemento
   * document.documentElement para que las reglas CSS de Tailwind y custom actúen.
   */
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignorar restricciones en entornos aislados
    }

    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  /**
   * Método: toggleTheme
   * Explicación: Alterna el tema entre 'dark' (Noche/Bedrock) y 'light' (Día/Overworld).
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook personalizado: useTheme
 * Explicación: Facilita el consumo del contexto de tema en cualquier componente.
 * @returns {Object} Objeto con theme, toggleTheme, isDark
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};
