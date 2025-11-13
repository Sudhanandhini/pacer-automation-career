import { motion } from 'framer-motion';
import { FiMonitor, FiCpu, FiLayers, FiSmartphone, FiSettings, FiPackage, FiCheckCircle, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi';
import { MdDesktopMac, MdLaptopMac } from 'react-icons/md';
import heroImage from '../assets/home.png'; // Add your hero image
import microsoftLogo from '../assets/home.png';
import citrixLogo from '../assets/home.png';
import vmwareLogo from '../assets/home.png';
import ciscoLogo from '../assets/home.png';
import hpLogo from '../assets/home.png';

const UserComputing = () => {
  const solutions = [
    {
      icon: <MdDesktopMac className="text-4xl" />,
      title: "Desktops, Laptops & Thin Clients",
      description: "Comprehensive range of computing devices tailored to meet diverse organizational needs and user requirements.",
      features: [
        "Desktop Solutions",
        "Laptop Configurations",
        "Thin Client Deployments",
        "Hardware Optimization"
      ]
    },
    {
      icon: <FiCpu className="text-4xl" />,
      title: "High-End Graphics Workstations",
      description: "Powerful workstations designed for demanding graphics-intensive applications and professional workflows.",
      features: [
        "Professional Graphics Cards",
        "High-Performance Processing",
        "Large Memory Capacity",
        "Optimized for CAD/CAM"
      ]
    },
    {
      icon: <FiPackage className="text-4xl" />,
      title: "Computer-Aided Engineering",
      description: "Specialized solutions for engineering applications requiring advanced computing capabilities.",
      features: [
        "CAE Software Integration",
        "Simulation Tools",
        "Design Optimization",
        "Performance Analysis"
      ]
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "Client Virtualization",
      description: "Virtual desktop infrastructure (VDI) solutions for enhanced flexibility and centralized management.",
      features: [
        "Virtual Desktop Infrastructure",
        "Application Virtualization",
        "Desktop as a Service",
        "Remote Access Solutions"
      ]
    },
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: "Mobility Solutions",
      description: "Enable workforce mobility with secure access to applications and data from anywhere.",
      features: [
        "Mobile Device Management",
        "BYOD Solutions",
        "Mobile Application Access",
        "Secure Remote Connectivity"
      ]
    },
    {
      icon: <FiSettings className="text-4xl" />,
      title: "Client Management Solutions",
      description: "Comprehensive client management tools to streamline device deployment and maintenance.",
      features: [
        "Endpoint Management",
        "Patch Management",
        "Software Distribution",
        "Asset Management"
      ]
    }
  ];

  const additionalSolution = {
    icon: <FiPackage className="text-4xl" />,
    title: "Application Management Solutions",
    description: "Efficient application lifecycle management to ensure optimal performance and availability.",
    features: [
      "Application Deployment",
      "Version Control",
      "License Management",
      "Performance Monitoring"
    ]
  };

  const benefits = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Improved User Experience",
      description: "Simple, standard, and streamlined computing processes and interfaces for end users"
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Enhanced Availability",
      description: "Improved service availability providing users with tools to succeed in dynamic workplaces"
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Agile Workplace",
      description: "Efficient, collaborative, and agile workplace designed for your unique requirements"
    }
  ];

  const partners = [
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Citrix", logo: citrixLogo },
    { name: "VMware", logo: vmwareLogo },
    { name: "Cisco", logo: ciscoLogo },
    { name: "HP", logo: hpLogo }
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
                User Computing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering your workforce with simple, standard, and streamlined computing solutions. We design efficient, collaborative, and agile workplaces tailored to your unique requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
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
                alt="User Computing" 
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Delivering Excellence in End-User Computing
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
             The end user computing experience should improve availability and service, and provide users with tools to succeed in the dynamic workplace of today.
Depending on your unique requirements and end-user needs, Pacer can design, build, and manage an efficient, collaborative and agile workplace. PACER uses well-defined frameworks, tools, and solution accelerators that make the transformation process easier.
We also leverage strong alliances with technology partners, such as Microsoft, Citrix, VMware, Cisco, and HP to be able to offer the best possible solutions.

            </p>
          </motion.div>

          {/* Benefits Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Our Approach Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Well-Defined Frameworks & Tools
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on your unique requirements and end-user needs, Pacer can design, build, and manage an efficient, collaborative, and agile workplace.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                PACER uses well-defined frameworks, tools, and solution accelerators that make the transformation process easier.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <p className="text-gray-600">Customized solutions based on unique requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <p className="text-gray-600">Proven frameworks and methodologies</p>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <p className="text-gray-600">End-to-end design, build, and management</p>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                  <p className="text-gray-600">Solution accelerators for faster transformation</p>
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
                src="/api/placeholder/600/400" 
                alt="Our Approach" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Solutions Section */}
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
              Our Solutions & Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive user computing solutions to empower your workforce
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
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

            {/* Additional Solution - Application Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all"
                style={{ backgroundColor: '#1E3A8A', color: 'white' }}
              >
                {additionalSolution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                {additionalSolution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {additionalSolution.description}
              </p>
              <ul className="space-y-2">
                {additionalSolution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="flex-shrink-0" style={{ color: '#00BFA5' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Our Technology Partners
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage strong alliances with leading technology partners to offer the best possible solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ width: '180px', height: '100px' }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
                Transform Your Workplace Today
              </h2>
              <p className="text-lg opacity-90">
                Let's design an efficient, collaborative, and agile computing environment
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

export default UserComputing;