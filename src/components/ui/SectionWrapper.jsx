import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

const SectionWrapper = ({ children, className = "", ...props }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={`min-h-screen py-20 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;