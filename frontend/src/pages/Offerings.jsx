import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiShield, FiMonitor, FiTool, FiUsers } from 'react-icons/fi';

const Offerings = () => {
  const services = [
    {
      icon: <FiServer className="text-4xl" />,
      title: 'Immense Infrastructure Management Services',
      description: 'Comprehensive infrastructure management solutions to keep your IT systems running smoothly and efficiently.'
    },
    
    {
      icon: <FiCloud className="text-4xl" />,
      title: 'Cloud Solutions',
      description: 'Modern cloud infrastructure services to accelerate your digital transformation journey.'
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: 'Network and Security Solutions',
      description: 'Enterprise-grade network and security solutions to protect your critical business assets.'
    },
    {
      icon: <FiMonitor className="text-4xl" />,
      title: 'User Computing',
      description: 'End-user computing solutions that enhance productivity and user experience.'
    },
    {
      icon: <FiTool className="text-4xl" />,
      title: 'Implementations and Migration Services',
      description: 'Seamless implementation and migration services to ensure smooth transitions.'
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: 'Consulting Services',
      description: 'Expert IT consulting services to help you make informed technology decisions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Our Offerings
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive IT infrastructure solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-[#00BFA5]/10 rounded-lg flex items-center justify-center mb-6 text-[#00BFA5] group-hover:bg-[#00BFA5] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-[#00BFA5] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your IT infrastructure?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how our solutions can help your business grow.
            </p>
            <button className="bg-white text-[#00BFA5] hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Offerings;
