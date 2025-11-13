import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiShield, FiZap, FiLayers, FiDollarSign, FiCheckCircle, FiAward, FiUsers, FiClock, FiSettings, FiBarChart } from 'react-icons/fi';
import heroImage from '../assets/consulting-service.jpg'; // Add your hero image
import home from '../assets/SaaS-2.png';


const ConsultingServices = () => {
  const infrastructureNeeds = [
    {
      icon: <FiShield className="text-2xl" />,
      title: "Structured and Reliable",
      description: "Minimal downtime with robust infrastructure design"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Business Aligned",
      description: "Meeting evolving business and customer requirements"
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Simple Yet High Performance",
      description: "Streamlined infrastructure with optimal performance"
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: "Future-Ready",
      description: "Building on investments while incorporating latest technologies"
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Effective",
      description: "Better and economical solutions with lower TCO"
    },
    {
      icon: <FiSettings className="text-2xl" />,
      title: "Easy Management",
      description: "Managed with minimal business intervention"
    },
    {
      icon: <FiBarChart className="text-2xl" />,
      title: "Scalable",
      description: "Better scalability as your business grows"
    },
    {
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Best Practices",
      description: "Adheres to IT policies and industry best practices"
    }
  ];

  const services = [
    {
      icon: <FiTarget className="text-4xl" />,
      title: "IT Infrastructure Planning",
      description: "Strategic planning for server consolidation, virtualization, and network infrastructure to ensure successful implementation.",
      features: [
        "Infrastructure Assessment",
        "Strategic Roadmap Development",
        "Technology Selection",
        "Risk Analysis"
      ]
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "Infrastructure Design",
      description: "Comprehensive design solutions that bridge the gap between your current infrastructure and intended vision.",
      features: [
        "Architecture Design",
        "Solution Blueprint",
        "Scalability Planning",
        "Performance Optimization"
      ]
    },
    {
      icon: <FiSettings className="text-4xl" />,
      title: "Implementation Consulting",
      description: "End-to-end expertise in implementing IT infrastructure solutions aligned with your business goals.",
      features: [
        "Implementation Planning",
        "Deployment Strategy",
        "Migration Support",
        "Quality Assurance"
      ]
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: "Technical Advisory",
      description: "Expert technical guidance and practical advice to deliver optimal performance, reliability, and security.",
      features: [
        "Technical Expertise",
        "Best Practice Guidance",
        "Performance Tuning",
        "Security Advisory"
      ]
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Infrastructure Optimization",
      description: "Continuous improvement strategies to enhance infrastructure performance and reduce operational costs.",
      features: [
        "Performance Analysis",
        "Cost Optimization",
        "Resource Utilization",
        "Efficiency Improvement"
      ]
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Business-Centric Approach",
      description: "Understanding your business vision and designing solutions that help you reach your goals.",
      features: [
        "Business Analysis",
        "Vision Alignment",
        "Strategic Planning",
        "Continuous Support"
      ]
    }
  ];

  const ourApproach = [
    {
      step: "1",
      title: "Understand Business Vision",
      description: "We start by understanding the vision for your business and your strategic objectives"
    },
    {
      step: "2",
      title: "Analyze Current State",
      description: "Comprehensive analysis of where your infrastructure is currently and identify gaps"
    },
    {
      step: "3",
      title: "Design Solution",
      description: "Design a tailored solution that helps you reach your intended vision"
    },
    {
      step: "4",
      title: "Implement & Support",
      description: "Assist in implementation and provide ongoing technical expertise and guidance"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                Our Offering
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1E3A8A' }}>
                Consulting Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Strategic IT infrastructure consulting with a business-centric approach. We help you plan, design, and build simple, agile, high-performance, and scalable IT infrastructure that supports your business objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  GET STARTED
                </a>
                <a href="#services" className="btn-secondary">
                  OUR APPROACH
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={heroImage}
                alt="Consulting Services" 
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              The Foundation of Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Strong ICT Infrastructure Planning
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Be it server consolidation, virtualization or network infrastructure, the planning and strategy around IT infrastructure determine whether the implementation will succeed or fail; a strong ICT Infrastructure foundation helps the business to succeed.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              In a fast-changing business landscape, organizations rely on their IT infrastructure to support their business objectives. Planning, building and maintaining a simple, agile, high-performance and scalable IT infrastructure are the needs of the day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Needs Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Modern IT Infrastructure Requirements
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Organizations today are looking for IT Infrastructure that matches these essential parameters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {infrastructureNeeds.map((need, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {need.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {need.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {need.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Approach Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Business-Centric Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Pacer offers a business-centric approach to IT Infrastructure planning, development, and maintenance. We have end-to-end expertise to assist you in making the choice that's best for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ourApproach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                    style={{ backgroundColor: '#00BFA5', color: 'white' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#1E3A8A' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
                {index < ourApproach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="#00BFA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Our Consulting Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive consulting services to help you achieve your IT infrastructure goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all"
                  style={{ backgroundColor: index % 2 === 0 ? '#00BFA5' : '#1E3A8A', color: 'white' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="flex-shrink-0" style={{ color: '#00BFA5' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Delivery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Technical Expertise & Practical Advice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide technical expertise and practical advice required to deliver optimal performance, reliability, security, and access to the IT infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}> Structured and reliable with minimal downtime</h4>
                    {/* <p className="text-gray-600 text-sm">Complete consulting, planning, and implementation support</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>      Evolving business (including user/customer) requirements are met in all possible ways</h4>
                  
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>      Is simple and yet high performance</h4>
                   
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>      Builds on IT investments while incorporating the latest technologies and adheres to IT policies and best practice guidelines</h4>
                    
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>           Offers better and economical solutions</h4>
                   
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>          Can be managed with least business/management intervention</h4>
                   
                  </div>
                </div>
                  <div className="flex items-start gap-4">
                  <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#1E3A8A' }}>       Offers better scalability as the business grows</h4>
                   
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={home} 
                alt="Value Delivery" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="contact" className="py-16" style={{ backgroundColor: '#00BFA5' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto"
          >
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg opacity-90">
                Let's discuss your vision and design a solution that helps you succeed
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="bg-white font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                style={{ color: '#00BFA5' }}
              >
                CONTACT US
              </a>
              <a 
                href="tel:+918042823000" 
                className="border-2 border-white text-white hover:bg-white font-semibold py-3 px-8 rounded-md transition-all"
                onMouseEnter={(e) => e.target.style.color = '#00BFA5'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                CALL NOW
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default ConsultingServices;