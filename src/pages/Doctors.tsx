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
    <main className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-gray-900"
        >
          Our Doctors
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          At Joji Medical Centre, we have a team of highly qualified and experienced doctors who are committed to providing you with the best possible care.
        </motion.p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer max-w-sm w-full"
            >
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-lg">{doctor.specialty}</p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="text-lg font-medium">{doctor.rating}</span>
                </div>
                <p className="text-base text-gray-500">{doctor.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Doctors;


