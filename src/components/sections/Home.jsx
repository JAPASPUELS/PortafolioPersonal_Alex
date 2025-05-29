import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <SectionWrapper className="flex items-center justify-center" id="home">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <img 
            src="/assets/Perfil.jpg" 
            alt="Avatar" 
            className="w-60 h-60 rounded-full mx-auto mb-6 border-4 border-accent object-cover object-[center_top]"
          />
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hola!, Soy Alex
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Desarrollador apasionado por la tecnología y la construcción de aplicaciones escalables, seguras y eficientes.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center text-accent text-3xl animate-bounce text-cyan-50"
        >
          <span>Desliza hacia abajo</span>
          <ChevronDown className="w-6 h-6 mt-2" />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Home;
