/**
 * ============================================================================
 * Módulo: Sintetizador de Audio Procedural estilo Minecraft (Web Audio API)
 * Provee efectos sonoros característicos (click de botón, sonido de experiencia)
 * sin requerir la carga de archivos de audio externos pesados.
 * ============================================================================
 */

// Estado global de sonido silenciado/activado
let isMuted = false;

// Instancia perezosa del contexto de audio del navegador
let audioCtx = null;

/**
 * Método: getAudioContext
 * Explicación: Inicializa y recupera el AudioContext del navegador en respuesta
 * a una interacción del usuario, cumpliendo con las políticas de autoplay.
 * @returns {AudioContext | null}
 */
const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

/**
 * Método: playMinecraftClick
 * Explicación: Sintetiza el clásico "click" seco de madera o piedra de los
 * botones e interfaces de Minecraft utilizando un golpe rápido de onda cuadrada
 * con caída exponencial de ganancia.
 */
export const playMinecraftClick = () => {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Tipo de onda cuadrada para textura retro pixelada
    osc.type = 'square';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);

    // Caída rápida de volumen para simular el impacto del botón
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Si el navegador bloquea audio, continuar silenciosamente
  }
};

/**
 * Método: playMinecraftExp
 * Explicación: Sintetiza el tintineo agudo característico del orbe de experiencia (EXP)
 * de Minecraft al subir de nivel o activar un logro.
 */
export const playMinecraftExp = () => {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Tono alto y brillante tipo campanilla de 8 bits
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch {
    // Continuar silenciosamente ante cualquier restricción de audio
  }
};

/**
 * Método: toggleMute
 * Explicación: Alterna el estado de silencio global y lo persiste en localStorage.
 * @returns {boolean} Nuevo estado de silencio (true = muteado)
 */
export const toggleMute = () => {
  isMuted = !isMuted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('mc_sound_muted', isMuted ? 'true' : 'false');
  }
  return isMuted;
};

/**
 * Método: getMuteState
 * Explicación: Consulta si el audio está silenciado actualmente.
 * @returns {boolean}
 */
export const getMuteState = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('mc_sound_muted');
    if (saved !== null) {
      isMuted = saved === 'true';
    }
  }
  return isMuted;
};
