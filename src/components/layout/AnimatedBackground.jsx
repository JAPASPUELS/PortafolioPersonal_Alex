import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/**
 * ============================================================================
 * Componente: AnimatedBackground (Fondo Atmosférico Dinámico: Noche & Día)
 * Explicación: Renderiza el entorno visual de Minecraft según el tema activo:
 * - Modo Oscuro (Noche Bedrock): Cielo estrellado con cuadrícula y partículas de EXP/Nether.
 * - Modo Claro (Día Overworld): Cielo azul diurno con nubes cuadradas flotantes que
 *   se desplazan lentamente en el horizonte como en el juego real.
 * ============================================================================
 */
const AnimatedBackground = () => {
  const { isDark } = useTheme();

  // Partículas para el modo oscuro (orbes de EXP y polvo de portal)
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: ((i % 3) + 1) * 3,
    left: `${(i * 4) % 100}%`,
    initialY: `${(i * 7) % 100}vh`,
    duration: 12 + (i % 8) * 2,
    delay: (i % 5) * 1.5,
    colorClass:
      i % 3 === 0
        ? 'bg-[#55ff55]/30 shadow-[0_0_8px_#55ff55]'
        : i % 3 === 1
        ? 'bg-[#55ffff]/25 shadow-[0_0_8px_#55ffff]'
        : 'bg-[#a355ff]/20 shadow-[0_0_8px_#a355ff]',
  }));

  // Nubes cúbicas para el modo claro (Overworld)
  const clouds = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${12 + i * 14}%`,
    width: 120 + (i % 3) * 60,
    height: 36 + (i % 2) * 16,
    duration: 40 + i * 15,
    delay: i * 8,
    opacity: 0.75 + (i % 3) * 0.1,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* ======================================================================
          Sección: Cielo Base Dinámico
          ====================================================================== */}
      {isDark ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0f] via-[#14121a] to-[#09080c] transition-colors duration-700" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#4b8feb] via-[#75b0fb] to-[#99c8fc] transition-colors duration-700" />
      )}

      {/* ======================================================================
          Sección: Cuadrícula de Bloques de Minecraft (32x32)
          ====================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ======================================================================
          Sección: Elementos Atmosféricos Según el Tema
          ====================================================================== */}
      {isDark ? (
        // Partículas cúbicas flotantes nocturnas
        particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.colorClass}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.initialY,
              imageRendering: 'pixelated',
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))
      ) : (
        // Nubes cúbicas flotantes diurnas tipo Minecraft
        clouds.map((c) => (
          <motion.div
            key={c.id}
            className="absolute bg-white border-2 border-[#e0e8f5] shadow-[inset_0_-4px_0_#ccd6e8]"
            style={{
              top: c.top,
              width: `${c.width}px`,
              height: `${c.height}px`,
              opacity: c.opacity,
              imageRendering: 'pixelated',
            }}
            initial={{ x: '-150px' }}
            animate={{ x: '105vw' }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))
      )}

      {/* ======================================================================
          Sección: Viñeta Periférica
          ====================================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]'
            : 'bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.15)_100%)]'
        }`}
      />
    </div>
  );
};

export default AnimatedBackground;