import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import aboutImage from '../assets/SaaS-5.png';

const AboutCompanySection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={aboutImage}
                alt="IT Solutions" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full -z-10 blur-3xl opacity-20"
              style={{ backgroundColor: '#00BFA5' }}
            ></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span 
              className="inline-block font-bold text-sm uppercase tracking-wide mb-4"
              style={{ color: '#00BFA5' }}
            >
              About Company
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              We Provide IT Solutions That Help You Succeed
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
             At Pacer Automation, we are committed to excellence in delivering innovative IT infrastructure solutions since 1989. Backed by decades of expertise, our skilled team ensures seamless, secure, and reliable systems tailored to every client’s needs. Driven by integrity, continuous learning, and a passion for service, we empower organizations to achieve lasting value and success through technology.
            </p>

            {/* <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <FiCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Simple & Agile
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We deliver straightforward, flexible IT infrastructure solutions that adapt quickly to your business needs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  <FiCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    High-Performance & Scalable
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions are designed for optimal performance with the ability to scale seamlessly as your business grows.
                  </p>
                </div>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;