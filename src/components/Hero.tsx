import { motion } from 'framer-motion';
import './Hero.css'; // Importing CSS for parallax effect

const Hero = () => {
  return (
    <section className="hero-parallax bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-black-900 mb-6 text-center text-shadow-lg"
          >
            Seamless Hospital Booking
            <br />
            <span className="text-gray-700">Joji Medical Center</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Book appointments easily with top hospitals and trusted doctors.
            <br />
            Get fast access to medical services and expert care.
          </motion.p>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* <img
              className=" h-auto rounded-2xl "
              src="/lolo.png"
              alt="Healthcare professionals"
            />  */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;