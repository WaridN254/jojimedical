import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'PERSONAL',
      links: [
        'Our Services',
        'Online Consultation',
        'Medication Orders',
        'Policies & Terms'
      ]
    },
    {
      title: 'BUSINESS',
      links: [
        'Medical Services',
        'Healthcare Marketplace',
        'Partner App',
        'Clinic Portal'
      ]
    },
    {
      title: 'ABOUT',
      links: [
        'About Us',
        'News & Articles',
        'Privacy Policy',
        'Customer Service'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">JJ</span>
              </div>
              <span className="text-xl font-bold">Joji Medical Center</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Seamless Healthcare,
              <br />
              Anytime, Anywhere.
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Manage your health effortlessly in one app. Consult doctors, order medications, and access various healthcare services at your fingertips.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'linkedin', 'youtube'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-sm">
                    {social === 'twitter' && '𝕏'}
                    {social === 'instagram' && '📷'}
                    {social === 'linkedin' && '💼'}
                    {social === 'youtube' && '📺'}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-sm tracking-wider mb-6 text-gray-300">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">©</span>
              </div>
              <span className="text-gray-400 text-sm">
                Joji Medical Center 2025. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;