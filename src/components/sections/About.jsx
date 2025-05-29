import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: 'ASP.NET Core', icon: 'aspnet', color: 'from-purple-600 to-purple-400', bgColor: 'bg-purple-800', borderColor: 'border-purple-600' },
    { name: 'Laravel', icon: 'laravel', color: 'from-red-600 to-red-400', bgColor: 'bg-red-800', borderColor: 'border-red-600' },
    { name: 'Node.js', icon: 'node', color: 'from-green-600 to-green-400', bgColor: 'bg-green-800', borderColor: 'border-green-600' },
    { name: 'Go', icon: 'go', color: 'from-cyan-600 to-blue-400', bgColor: 'bg-cyan-800', borderColor: 'border-cyan-600' },
    { name: 'Angular', icon: 'angular', color: 'from-red-600 to-red-400', bgColor: 'bg-red-800', borderColor: 'border-red-600' },
    { name: 'React', icon: 'react', color: 'from-blue-600 to-blue-400', bgColor: 'bg-blue-800', borderColor: 'border-blue-600' },
    { name: 'PostgreSQL', icon: 'postgresql', color: 'from-blue-700 to-blue-500', bgColor: 'bg-blue-900', borderColor: 'border-blue-700' },
    { name: 'MySQL', icon: 'mysql', color: 'from-orange-600 to-yellow-400', bgColor: 'bg-orange-800', borderColor: 'border-orange-600' },
    { name: 'SQLite', icon: 'sqlite', color: 'from-gray-600 to-gray-400', bgColor: 'bg-gray-800', borderColor: 'border-gray-600' },
    { name: 'MariaDB', icon: 'mariadb', color: 'from-blue-800 to-blue-600', bgColor: 'bg-blue-900', borderColor: 'border-blue-800' },
    { name: 'Oracle', icon: 'oracle', color: 'from-red-700 to-red-500', bgColor: 'bg-red-900', borderColor: 'border-red-700' },
    { name: 'PHP', icon: 'php2', color: 'from-indigo-600 to-purple-400', bgColor: 'bg-indigo-800', borderColor: 'border-indigo-600' },
    { name: 'Java', icon: 'java', color: 'from-orange-600 to-red-400', bgColor: 'bg-orange-800', borderColor: 'border-orange-600' },
    { name: 'JavaScript', icon: 'javascript', color: 'from-yellow-600 to-yellow-400', bgColor: 'bg-yellow-800', borderColor: 'border-yellow-600' },
    { name: 'C#', icon: 'cSharp', color: 'from-purple-600 to-purple-400', bgColor: 'bg-purple-800', borderColor: 'border-purple-600' },
    { name: 'GitHub', icon: 'github', color: 'from-gray-700 to-gray-500', bgColor: 'bg-gray-800', borderColor: 'border-gray-600' },
    { name: 'Trello', icon: 'trello', color: 'from-blue-600 to-blue-400', bgColor: 'bg-blue-800', borderColor: 'border-blue-600' },
    { name: 'ClickUp', icon: 'clickup', color: 'from-pink-600 to-purple-400', bgColor: 'bg-pink-800', borderColor: 'border-pink-600' },
  ];

  const certificates = [
    'Business Intelligence Foundation Learner',
    'Lifelong Learning',
    'AWS Academy Graduate - AWS Academy Cloud Foundations',
    'Networking Academy Learn-A-Thon 2024',
    'AI Fundamentals with IBM SkillsBuild',
    'Artificial Intelligence Fundamentals IBM',
    'Introduction to Cybersecurity'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const certificateVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" ref={ref} className="min-h-screen text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor principal con glassmorphism mejorado */}
        <motion.div
          className="relative border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10"
          >
            {/* Título principal */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sobre mí
              </h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
              {/* Perfil Profesional */}
              <motion.div variants={itemVariants} className="xl:col-span-1">
                <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Perfil Profesional
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify mb-6">
                    Soy estudiante de Ing. en Software de la Universidad Técnica del
                    Norte, con una sólida base en desarrollo de software y una pasión
                    por crear aplicaciones móviles y web escalables. Me encanta aprender
                    nuevas tecnologías y mejorar mis habilidades constantemente.
                  </p>

                  {/* Formación Académica */}
                  <h4 className="text-lg font-semibold mb-3 text-cyan-400">Formación Académica</h4>
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-white text-sm">Ingeniería en Software</h5>
                        <p className="text-gray-400 text-xs">Universidad Técnica del Norte (En curso)</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Habilidades Técnicas */}
              <motion.div variants={itemVariants} className="xl:col-span-2">
                <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Habilidades Técnicas
                  </h3>
                  
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {technicalSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          group relative overflow-hidden
                          ${skill.bgColor} ${skill.borderColor}
                          border px-3 py-2 rounded-xl
                          cursor-pointer transition-all duration-300
                          hover:border-opacity-80
                        `}
                        style={{ transitionDelay: `${index * 30}ms` }}
                      >
                        {/* Efecto de brillo en hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <img 
                            src={`/assets/${skill.icon}.svg`}
                            alt={`${skill.name} logo`}
                            className="w-5 h-5 flex-shrink-0"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <span className="text-xs font-medium text-white text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Estadísticas */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { label: "Lenguajes", value: "6+", icon: "💻" },
                { label: "Frameworks", value: "4+", icon: "🚀" },
                { label: "Bases de Datos", value: "6+", icon: "🗄️" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;