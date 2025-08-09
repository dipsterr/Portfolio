import { motion } from 'framer-motion'
import Experience from './Experience'
import Education from './Education'

const ExperienceEducation = () => {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden">
            <Experience />
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Experience Section */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-8"
                >
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                      Experience
                    </h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
                  </div>

                  <div className="bg-white rounded-3xl p-8 lg:p-12 soft-shadow">
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

                    <div className="space-y-6">
                      {[
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
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
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
                          
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Education Section */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-8"
                >
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                      Education
                    </h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
                  </div>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-200" />
                    
                    <div className="space-y-12">
                      {[
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
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
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
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Mobile Only */}
      <section id="education" className="py-20 bg-neutral-50 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Education />
        </div>
      </section>
    </>
  )
}

export default ExperienceEducation
