import { motion } from 'framer-motion';

const PatientStories = () => {
  const stories = [
    {
      title: "Beating Cancer - David's Inspiring Fight",
      description: "David was diagnosed with stage 3 colon cancer his world turned upside...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "Cancer Treatment"
    },
    {
      title: "A Safe Delivery - Maria's Journey to Motherhood",
      description: "Maria was experiencing complications during her pregnancy, but with our expert team...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Maternity Care"
    },
    {
      title: "Walking Again - Tom's Rehabilitation Success",
      description: "After a severe accident, Tom thought he'd never walk again. With multiple fractures, he learned he...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Rehabilitation"
    },
    {
      title: "Overcoming Anxiety - Sarah's Mental Health Breakthrough",
      description: "For years, Sarah struggled with anxiety that affected her daily life. Seeking help...",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      category: "Mental Health"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-900 bg-opacity-50 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium">Patient Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Our Patients, Their Journeys
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-md"
            >
              About care, comfort and support. Hear from our patients as they share their recovery stories with us.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-white bg-opacity-10 text-white px-6 py-3 rounded-full hover:bg-opacity-20 transition-all"
          >
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Featured Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-black"
          >
            <h3 className="text-2xl font-bold mb-4">
              A Second Chance at Life:
              <br />
              Lisa's Recovery Journey
            </h3>
            <p className="mb-6 text-black text-opacity-80">
              For Lisa, life took an unexpected turn when she was diagnosed with a rare heart condition. The news was devastating, but she refused to give up. With the support of her family and the expert team at ElizaCare, she embarked on a challenging journey toward recovery.
            </p>
            <p className="mb-8 text-black text-opacity-80">
              At ElizaCare, Lisa underwent a minimally invasive heart procedure performed by our world-class cardiologists. The state-of-the-art facilities and compassionate care helped her regain strength.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <span>Read More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
              alt="Lisa's recovery story"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-400 font-medium mb-2 uppercase tracking-wide">
                  {story.category}
                </div>
                <h3 className="text-white font-bold mb-3 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;