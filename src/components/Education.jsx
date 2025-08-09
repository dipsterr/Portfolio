import { motion } from 'framer-motion'

const Education = () => {
  const educationItems = [
    {
      year: "2020",
      degree: "B.Tech in Computer Science",
      university: "University of Technology",
      description: "Graduated with honors, specialized in software engineering and database systems.",
      icon: "🎓",
      highlight: "Computer Science"
    },
    {
      year: "2016",
      degree: "High School Diploma",
      school: "St. Mary's High School",
      description: "Science stream with Mathematics and Computer Science as core subjects.",
      icon: "🏫",
      highlight: "Science Stream"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <span className="text-2xl">📚</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-200" />
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300" />
                
                {/* Content - Fixed height for consistency */}
                <div className="ml-16 bg-neutral-50 rounded-2xl p-6 soft-shadow hover-lift min-h-[200px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-2xl font-bold text-indigo-600">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-indigo-600 font-semibold mb-3">
                      {item.university || item.school}
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full self-start">
                    {item.highlight}
                  </span>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
