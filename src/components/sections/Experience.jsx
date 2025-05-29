import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      company: "Debisoft C.A.",
      position: "Desarrollador (Practicante)",
      location: "Ibarra, Ecuador",
      period: "2024",
      type: "Prácticas Profesionales",
      link: "https://debi.ec",
      description:
        "Participé en proyectos de desarrollo tanto en frontend como backend, trabajando en equipo y aplicando metodologías ágiles.",
      technologies: [
        "CodeIgniter",
        "Angular",
        "PostgreSQL",
        "JavaScript",
        "C#",
      ],
      achievements: [
        "Desarrollo de funcionalidades completas de extremo a extremo",
        "Colaboración efectiva con el equipo de desarrollo",
        "Implementación de mejores prácticas de código",
        "Participación en reuniones de planificación y revisión",
      ],
      skills: [
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Resolución de problemas",
        "Adaptabilidad",
      ],
      icon: "💼",
      color: "from-blue-600 to-cyan-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
    },
    {
      id: 2,
      company: "EcoLimpieza",
      position: "Desarrollador (Freelance)",
      location: "Proyecto independiente",
      period: "2024",
      type: "Proyecto Freelance",
      link: "https://www.facebook.com/productosecolimpiezaec/",
      description:
        "Desarrollo del sistema EcoBooks, una aplicación de gestión contable diseñada para llevar la contabilidad de la empresa. Sistema completo con funcionalidades de facturación, reportes y administración financiera, control de inventario, registro de proveedores.",
      technologies: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Bootstrap"],
      achievements: [
        "Diseño y desarrollo completo del sistema EcoBooks",
        "Implementación de módulos de gestión contable",
        "Desarrollo de reportes financieros automatizados",
        "Entrega exitosa del proyecto dentro del plazo establecido",
      ],
      skills: [
        "Gestión de proyectos",
        "Comunicación con cliente",
        "Análisis de requerimientos",
        "Autonomía",
      ],
      icon: "🚀",
      color: "from-green-600 to-emerald-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contenedor principal con glassmorphism */}
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
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Experiencia Profesional
              </h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Timeline de experiencias */}
            <div className="relative">
              {/* Línea de tiempo central continua */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-blue-400 opacity-30" />

              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={cardVariants}
                    className={`relative ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:col-start-2"
                    }`}
                  >
                    {/* Punto de la línea de tiempo */}
                    <motion.div
                      className={`absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-2 border-slate-900 z-10 ${
                        index % 2 === 0
                          ? "left-4 md:right-0 md:left-auto md:transform md:translate-x-2"
                          : "left-4 md:left-0 md:transform md:-translate-x-2"
                      } top-8`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    />

                    {/* Tarjeta de experiencia */}
                    <motion.div
                      className={`ml-12 md:ml-0 p-6 ${exp.bgColor} ${exp.borderColor} border rounded-xl backdrop-blur-sm`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header de la experiencia */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2 md:mb-0">
                          <span className="text-2xl">{exp.icon}</span>
                          <div>
                            <h3
                              className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                            >
                              {exp.position}
                            </h3>
                            <p className="text-white font-semibold">
                              {exp.company}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                          >
                            {exp.type}
                          </span>
                          <p className="text-gray-400 text-sm mt-1">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                        {exp.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Logros */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Logros Principales
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start space-x-2 text-gray-300 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -10 }
                                }
                                transition={{
                                  delay: 1 + index * 0.2 + i * 0.1,
                                }}
                              >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Habilidades desarrolladas */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Habilidades Blandas
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs border border-slate-600/50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                                }
                                transition={{
                                  delay: 1.2 + index * 0.2 + i * 0.1,
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(51, 65, 85, 0.7)",
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tecnologías utilizadas */}
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <h4 className="text-sm font-semibold mb-3 text-gray-400">
                          Tecnologías Utilizadas
                        </h4>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              variants={techVariants}
                              className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs font-medium`}
                              whileHover={{ scale: 1.1 }}
                              style={{
                                transitionDelay: `${
                                  1.5 + index * 0.2 + i * 0.05
                                }s`,
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                      {exp.link && (
                        <div className="mt-6 text-center">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-300 hover:text-white hover:bg-cyan-600 rounded-lg transition-colors duration-300"
                          >
                            🌐 Visitar sitio web
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary estadístico */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-slate-700/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-2xl font-bold text-white mb-1">2+</div>
                  <div className="text-gray-400 text-sm">
                    Proyectos Completados
                  </div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.9, duration: 0.6 }}
                >
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-white mb-1">
                    Full Stack
                  </div>
                  <div className="text-gray-400 text-sm">
                    Desarrollo Completo
                  </div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Trabajo en Equipo</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
