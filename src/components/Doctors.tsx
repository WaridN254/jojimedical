
import { motion } from 'framer-motion';

const Doctors = () => {
  

  const doctors = [

    {
      name: 'Dr. Jonathan',
      specialty: 'General Doctor',
      image: '/doc.jpg',
      rating: 4.9,
      experience: '15+ years'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-blue-600 font-medium">Categories Doctor</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Find the Right Doctor
              <br />
              for Your Needs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-md"
            >
              Whether you need a general consultation, specialist care or mental health support, we have the right doctor for you.
            </motion.p>
          </div>

        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
                <p className="text-sm text-gray-500">{doctor.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;