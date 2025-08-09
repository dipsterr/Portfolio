import { motion } from 'framer-motion'

const Experience = () => {
  const experienceItems = [
    {
      icon: "🚀",
      title: "Led 8+ ADP implementations",
      description: "Across payroll & time modules — scoping to go-live.",
      highlight: "Implementation Expert"
    },
    {
      icon: "🔗",
      title: "Built integration adapters",
      description: "Using REST APIs and automated ETL jobs for HR data (1k–5k employees).",
      highlight: "Integration Specialist"
    },
    {
      icon: "⚡",
      title: "Reduced manual payroll adjustments",
      description: "By automating reconciliation and validation scripts.",
      highlight: "Automation Pro"
    },
    {
      icon: "📚",
      title: "Delivered client training",
      description: "Runbooks, and monitoring dashboards.",
      highlight: "Training & Support"
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <span className="text-2xl">💼</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 soft-shadow"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Technical Consultant
            </h3>
            <p className="text-xl text-indigo-600 font-semibold mb-2">
              ADP (Workforce Software)
            </p>
            <p className="text-neutral-600">
              Current Role
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
