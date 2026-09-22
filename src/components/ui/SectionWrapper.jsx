import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

/**
 * ============================================================================
 * Componente: SectionWrapper
 * Explicación: Contenedor estructural reutilizable para cada sección de la aplicación.
 * Aplica márgenes y rellenos seguros para evitar que el contenido colisione con
 * el HUD superior fijo o la Hotbar inferior flotante en pantallas móviles y de escritorio.
 * ============================================================================
 */
const SectionWrapper = ({ children, className = "", ...props }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={`min-h-screen pt-20 pb-28 sm:pt-24 sm:pb-32 px-3 sm:px-6 w-full max-w-full overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;