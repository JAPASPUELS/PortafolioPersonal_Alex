import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "EcoBooks",
      description:
        "Plataforma web para llevar la contabilidad de la empresa. Sistema completo con gestión de usuarios, productos, facturacion, inventario, control de proveedores y panel administrativo.",
      image: "public/images/LoginEcobooks.png",
      technologies: [
        {
          name: "Laravel",
          color: "from-red-600 to-red-400",
          bgColor: "bg-red-800",
          borderColor: "border-red-600",
        },
        {
          name: "PHP",
          color: "from-indigo-600 to-purple-400",
          bgColor: "bg-indigo-800",
          borderColor: "border-indigo-600",
        },
        {
          name: "JavaScript",
          color: "from-yellow-600 to-yellow-400",
          bgColor: "bg-yellow-800",
          borderColor: "border-yellow-600",
        },
        {
          name: "Postgres",
          color: "from-orange-600 to-yellow-400",
          bgColor: "bg-orange-800",
          borderColor: "border-orange-600",
        },
        {
          name: "Bootstrap",
          color: "from-purple-600 to-purple-400",
          bgColor: "bg-purple-800",
          borderColor: "border-purple-600",
        },
      ],
      codeLink: "https://github.com/JAPASPUELS/EcoBooks_Jetstream.git",
      type: "web",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Plannify",
      description:
        "Aplicación móvil nativa para Android enfocada en la planificación y gestión de tareas personales. Interfaz intuitiva con categorización de tareas y seguimiento de progreso.",
      image: "public/images/plannify.png",
      technologies: [
        {
          name: "Kotlin",
          color: "from-orange-600 to-orange-400",
          bgColor: "bg-orange-800",
          borderColor: "border-orange-600",
        },
        {
          name: "Android",
          color: "from-green-600 to-green-400",
          bgColor: "bg-green-800",
          borderColor: "border-green-600",
        },
        {
          name: "SQLite",
          color: "from-gray-600 to-gray-400",
          bgColor: "bg-gray-800",
          borderColor: "border-gray-600",
        },
        {
          name: "Material Design",
          color: "from-blue-600 to-blue-400",
          bgColor: "bg-blue-800",
          borderColor: "border-blue-600",
        },
      ],
      codeLink: "https://github.com/JAPASPUELS/App_de_Gestion_Plannify.git",
      type: "mobile",
      icon: "📱",
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

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
      id="projects"
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
                Proyectos
              </h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Grid de proyectos */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 mb-12"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectCardVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)",
                  }}
                  className="group relative bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden h-full"
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Imagen del proyecto */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} - Screenshot del proyecto`}
                      className="w-full h-full object-cover object-[60%_20%]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                    {/* Badge del tipo de proyecto */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          project.type === "web"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                            : "bg-green-500/20 text-green-300 border border-green-400/30"
                        }`}
                      >
                        {project.type === "web" ? "Web App" : "Mobile App"}
                      </span>
                    </div>

                    {/* Icono del proyecto */}
                    <div className="absolute top-4 right-4 text-2xl">
                      {project.icon}
                    </div>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-cyan-400">
                        Tecnologías:
                      </h4>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            variants={techVariants}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                            }}
                            className={`
                              group/tech relative overflow-hidden
                              ${tech.bgColor} ${tech.borderColor}
                              border px-3 py-1 rounded-lg
                              cursor-pointer transition-all duration-300
                              hover:border-opacity-80
                            `}
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-20 transition-opacity duration-300`}
                            />
                            <span className="text-xs font-medium text-white relative z-10">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Botones de acción */}
                    <div className="gap-3">
                      <motion.a
                        href={project.codeLink}
                        className="flex items-center justify-center gap-2 border-2 border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 hover:border-slate-500 hover:bg-slate-700/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/assets/github.svg"
                          alt="GitHub"
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm font-medium">
                          Ver Repositorio
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Estadísticas de proyectos */}
            <motion.div
              variants={itemVariants}
              className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: "Proyectos", value: "2+", icon: "🚀" },
                { label: "Tecnologías", value: "9+", icon: "⚡" },
                { label: "Plataformas", value: "2", icon: "💻" },
                { label: "En desarrollo", value: "∞", icon: "🔄" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(51, 65, 85, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
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

export default Projects;
