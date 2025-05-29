// src/components/ui/Icon.jsx
import { motion } from 'framer-motion';

const Icon = ({ 
  name, 
  size = 24, 
  className = "", 
  animate = false,
  color = "currentColor" 
}) => {
  const iconElement = (
    <svg
      width={size}
      height={size}
      className={`inline-block ${className}`}
      fill={color}
    >
      {/* <use href={`/assets/sprite.svg#${name}`} /> */}
      <use href={`/public/assets/${name}.svg`} />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {iconElement}
      </motion.div>
    );
  }

  return iconElement;
};

export default Icon;