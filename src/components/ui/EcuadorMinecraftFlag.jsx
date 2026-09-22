/**
 * ============================================================================
 * Componente: EcuadorMinecraftFlag (Bandera de Ecuador Estilo Minecraft Banner)
 * Explicación: Renderiza la bandera nacional de Ecuador utilizando una estética
 * de píxeles y estandarte (Banner) de Minecraft con escala ampliada y nítida:
 * - Colores oficiales adaptados a la paleta de tintes del juego (Amarillo Diente de León,
 *   Azul Lapislázuli y Rojo Rosa/Redstone).
 * - Proporción 2:1:1 tradicional con escudo nacional en pixel art detallado.
 * - Bisel y contorno negro pixel-perfect característico de las interfaces de bloques.
 * ============================================================================
 */
const EcuadorMinecraftFlag = ({ className = "w-10 h-7 sm:w-11 sm:h-8" }) => {
  return (
    <div
      className={`relative inline-flex flex-col border-2 border-black shadow-[0_3px_6px_rgba(0,0,0,0.65)] select-none flex-shrink-0 hover:scale-105 transition-transform ${className}`}
      title="Ecuador (Servidor Origen / Location)"
      style={{ imageRendering: "pixelated" }}
    >
      {/* 
        Sección: Franja Amarilla Superior (50% de la altura total)
        Paleta: Amarillo Diente de León de Minecraft (#fed83d) con textura de píxeles
      */}
      <div className="w-full h-1/2 bg-[#fed83d] relative overflow-hidden flex items-center justify-center">
        {/* Píxeles sutiles de textura de lana */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:4px_4px]" />
      </div>

      {/* 
        Sección: Franja Azul Intermedia (25% de la altura total)
        Paleta: Azul Lapislázuli de Minecraft (#3c44aa)
      */}
      <div className="w-full h-1/4 bg-[#3c44aa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:4px_4px]" />
      </div>

      {/* 
        Sección: Franja Roja Inferior (25% de la altura total)
        Paleta: Rojo Rosa / Redstone de Minecraft (#ba2f27)
      */}
      <div className="w-full h-1/4 bg-[#ba2f27] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:4px_4px]" />
      </div>

      {/* 
        Sección: Escudo Nacional Pixelado Central (Coat of Arms Pixel Art)
        Representación en 8-bits ampliada del cóndor andino y el óvalo patrio
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4 h-5 bg-[#85572b] border border-[#2a1708] rounded-[1px] flex flex-col items-center justify-center shadow-md">
          {/* Alas y cabeza del cóndor andino */}
          <div className="w-3.5 h-1 bg-[#331e0f] mb-0.5 flex justify-center">
            <div className="w-1 h-0.5 bg-[#ffffff]" />
          </div>
          {/* Óvalo interior tricolor patrio */}
          <div className="w-2.5 h-2 bg-[#4ba3e3] border-[0.5px] border-[#ffd54f] flex flex-col items-center justify-center">
            {/* Montaña y sol en pixel art */}
            <div className="w-1 h-0.5 bg-[#ffffff] rounded-full" />
            <div className="w-1.5 h-0.5 bg-[#2e7d32]" />
          </div>
        </div>
      </div>

      {/* 
        Sección: Borde Biselado Interior de Relieve
        Aporta el efecto 3D característico de los ítems de inventario
      */}
      <div className="absolute inset-0 border-t-2 border-l-2 border-white/40 pointer-events-none" />
      <div className="absolute inset-0 border-b-2 border-r-2 border-black/50 pointer-events-none" />
    </div>
  );
};

export default EcuadorMinecraftFlag;
