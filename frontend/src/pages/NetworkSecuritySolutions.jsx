import { motion } from 'framer-motion';
import { FiShield, FiGlobe, FiLock, FiServer, FiCloud, FiMail, FiEye, FiWifi, FiUsers, FiDatabase, FiLayers, FiCheckCircle } from 'react-icons/fi';
import heroImage from '../assets/network-security.jpg'; // Add your hero image

const NetworkSecuritySolutions = () => {
  const networkingSolutions = [
    {
      icon: <FiGlobe className="text-4xl" />,
      title: "Edge Level Connectivity Solutions",
      description: "WAN, INTRANET & VPN solutions for seamless connectivity across your organization.",
      features: ["Wide Area Network", "Intranet Solutions", "Virtual Private Network"]
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "Enterprise-Wide Access Network",
      description: "Comprehensive network access solutions designed for enterprise-scale operations.",
      features: ["Scalable Architecture", "High Availability", "Load Balancing"]
    },
    {
      icon: <FiDatabase className="text-4xl" />,
      title: "Storage Area Networking",
      description: "Advanced SAN solutions for efficient data storage and management.",
      features: ["High-Speed Data Transfer", "Centralized Storage", "Data Redundancy"]
    },
    {
      icon: <FiServer className="text-4xl" />,
      title: "High-Performance Datacentre Networking",
      description: "Cutting-edge datacentre networking solutions for optimal performance.",
      features: ["Low Latency", "High Throughput", "Scalable Infrastructure"]
    },
    {
      icon: <FiWifi className="text-4xl" />,
      title: "Wireless Solutions",
      description: "Indoor and outdoor wireless connectivity solutions for seamless mobility.",
      features: ["Indoor Coverage", "Outdoor Solutions", "Seamless Roaming"]
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Collaboration & Unified Communication",
      description: "Integrated communication solutions to enhance team collaboration.",
      features: ["Video Conferencing", "Voice Solutions", "Team Collaboration"]
    }
  ];

  const securitySolutions = [
    {
      icon: <FiShield className="text-4xl" />,
      title: "Edge Level Security Solutions",
      description: "Firewall, UTM & Application access security for perimeter protection.",
      features: ["Next-Gen Firewalls", "Unified Threat Management", "Application Security"]
    },
    {
      icon: <FiLock className="text-4xl" />,
      title: "LAN Level Security",
      description: "Application, DLP, Data security & IPS for internal network protection.",
      features: ["Data Loss Prevention", "Intrusion Prevention", "Application Control"]
    },
    {
      icon: <FiServer className="text-4xl" />,
      title: "Host-Level Protection",
      description: "AV, Malware protection & Ransomware protection for endpoint security.",
      features: ["Antivirus Protection", "Malware Defense", "Ransomware Protection"]
    },
    {
      icon: <FiCloud className="text-4xl" />,
      title: "Cloud Security Solutions",
      description: "Comprehensive security solutions for cloud-based infrastructure.",
      features: ["Cloud Access Security", "Data Encryption", "Compliance Management"]
    },
    {
      icon: <FiMail className="text-4xl" />,
      title: "Email Security Solutions",
      description: "Advanced email security to protect against phishing and spam attacks.",
      features: ["Spam Filtering", "Phishing Protection", "Email Encryption"]
    },
    {
      icon: <FiEye className="text-4xl" />,
      title: "Surveillance & Analytics",
      description: "High-end surveillance and analytic solutions for comprehensive monitoring.",
      features: ["Video Analytics", "Real-time Monitoring", "Threat Detection"]
    }
  ];

  const benefits = [
    "Secure, robust, scalable, and high-performance network infrastructure",
    "Minimized maintenance and downtime challenges",
    "Optimized network performance with proper device layout",
    "End-to-end infrastructure and network management",
    "Complete network architecture consultation and design",
    "Comprehensive security and management systems"
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
                Network & Security Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To achieve the best in IT infrastructure, one needs a secure, robust, scalable, and high-performance network. We provide comprehensive solutions to overcome maintenance and downtime challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  GET STARTED
                </a>
                <a href="#solutions" className="btn-secondary">
                  VIEW SOLUTIONS
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
                alt="Network Security" 
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              End-to-End Network Architecture
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Pacer intensively and constantly evaluates the customer's business and IT requirements. Based on thorough research and analysis, Pacer takes an end-to-end approach to infrastructure and network management, providing complete consultation in designing network architecture that goes beyond basics like switches and routers to include security and management systems.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start bg-gray-50 p-6 rounded-lg"
              >
                <FiCheckCircle className="text-2xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                <p className="text-gray-600 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Networking Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive suite of solutions catering to core business and IT networking needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkingSolutions.map((solution, index) => (
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
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
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

      {/* Security Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Security Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Multi-layered security solutions to protect your entire IT infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all"
                  style={{ backgroundColor: '#1E3A8A', color: 'white' }}
                >
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
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
                Ready to Secure Your Network?
              </h2>
              <p className="text-lg opacity-90">
                Let's discuss how we can help protect your IT infrastructure
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
                style={{ '--hover-color': '#00BFA5' }}
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

export default NetworkSecuritySolutions;