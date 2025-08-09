import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <span className="text-2xl">💬</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-50 rounded-3xl p-8 lg:p-12 soft-shadow text-center relative overflow-hidden"
        >
          {/* Floating contact icons */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-indigo-200 rounded-full opacity-30 animate-pulse" />
          <div className="absolute top-8 right-6 w-4 h-4 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000" />
          <div className="absolute bottom-6 left-8 w-6 h-6 bg-indigo-300 rounded-full opacity-30 animate-pulse delay-500" />
          
          <p className="text-lg lg:text-xl text-neutral-700 mb-8 leading-relaxed">
            Interested in working together or exploring similar roles? Email me at{' '}
            <a 
              href="mailto:your.email@example.com" 
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200 relative group"
            >
              your.email@example.com
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
            </a>{' '}
            or connect on LinkedIn:{' '}
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200 relative group"
            >
              linkedin.com/in/yourprofile
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
            </a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 soft-shadow relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>📧</span>
                <span>Send Email</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-200 soft-shadow relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🔗</span>
                <span>Connect on LinkedIn</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
          
          <div className="pt-8 border-t border-neutral-200 relative">
            {/* Decorative line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
            
            <p className="text-neutral-600 mb-4 flex items-center justify-center space-x-2">
              <span>📄</span>
              <span>Download my resume:</span>
            </p>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block bg-neutral-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-neutral-700 transition-all duration-200 soft-shadow relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>⬇️</span>
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
