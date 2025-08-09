import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Time & Attendance Integration",
      description: "Integrated ADP with third-party time system using REST APIs with robust shift mapping and daily sync. Reduced manual adjustments by ~75%.",
      tags: ["APIs", "Integration", "ADP"],
      icon: "⏰",
      highlight: "75% Reduction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Payroll Automation & Reconciliation",
      description: "Built scheduled reconciliation scripts to validate payroll files and flag anomalies before processing.",
      tags: ["SQL", "Automation", "Monitoring"],
      icon: "💰",
      highlight: "Automated",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Employee Data Migration",
      description: "Implemented ETL pipelines to migrate 5k employee records into ADP with field mapping & validations.",
      tags: ["ETL", "Data Migration", "Validation"],
      icon: "📊",
      highlight: "5k Records",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-3xl p-6 lg:p-8 soft-shadow hover-lift overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {project.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full group-hover:bg-indigo-200 transition-colors duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
