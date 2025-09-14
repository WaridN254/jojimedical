import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-blue-600 font-medium">About Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            We provide exceptional care with a
            <br />
            <span className="text-gray-600">patient-first approach,</span>
            <span className="text-gray-400"> advanced facilities,</span>
            <br />
            <span className="text-gray-400">and expert doctors for high-quality treatments.</span>
          </motion.h2>
        </div>

        {/* Mobile App Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl mb-20"
        >
          <img
            src="/mani.jpg"
            alt="ElizaCare mobile app"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '41+', label: 'Our Hospitals', icon: '🏥' },
            { number: '12.5K+', label: 'Medical Personnel', icon: '👨‍⚕️' },
            { number: '8.76M+', label: 'Patients Served', icon: '👥' },
            { number: '400+', label: 'Insurance Partners', icon: '🛡️' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;