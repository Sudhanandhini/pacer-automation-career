import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiShield, FiPackage, FiUsers, FiTrendingUp, FiCheckCircle, FiTarget, FiAward, FiClock } from 'react-icons/fi';
import { MdComputer, MdStorage, MdSecurity, MdPeople } from 'react-icons/md';
import heroImage from '../assets/infrastructure.jpg'; // Add your hero image
import home from '../assets/infrastructure.jpg';

const InfrastructureManagement = () => {
  const services = [
    {
      icon: <MdComputer className="text-4xl" />,
      title: "End-user Systems Management",
      description: "Comprehensive management of desktop, laptops, operating systems and applications to ensure optimal end-user experience.",
      features: [
        "Desktop & Laptop Management",
        "Operating System Support",
        "Application Management",
        "End-user Support"
      ],
      color: '#00BFA5'
    },
    {
      icon: <MdStorage className="text-4xl" />,
      title: "Server & Storage Management",
      description: "Complete server hardware and storage availability management with focus on operating system and service reliability.",
      features: [
        "Server Hardware Management",
        "Storage Availability",
        "Operating System Support",
        "Service Availability Monitoring"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <MdSecurity className="text-4xl" />,
      title: "Network and Security Management",
      description: "Comprehensive network infrastructure and security management covering WAN, firewall, routers, switching and wireless.",
      features: [
        "WAN Link Management",
        "Firewall/Router Configuration",
        "Switching Infrastructure",
        "Wireless Network Management"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiPackage className="text-4xl" />,
      title: "Application Management",
      description: "Configuration, availability and support for critical business applications ensuring seamless operations.",
      features: [
        "AD/DNS/DHCP Management",
        "Exchange & SharePoint Support",
        "SQL Database Management",
        "Fileserver & Backup Systems"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <MdPeople className="text-4xl" />,
      title: "Technical Manpower Services",
      description: "Dedicated onsite technical and on-call manpower deployment to support your IT infrastructure needs.",
      features: [
        "Onsite Technical Support",
        "On-call Support Services",
        "Dedicated Resource Deployment",
        "Flexible Engagement Models"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Consulting & Advisory Services",
      description: "High-end consulting in designing and deploying new technologies with technical advisory to align IT with business needs.",
      features: [
        "Technology Consulting",
        "System Integration",
        "Technical Advisory",
        "Strategic IT Planning"
      ],
      color: '#1E3A8A'
    }
  ];

  const challenges = [
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Technology Adaptation",
      description: "Rapid changes in technologies require continuous adaptation and updates"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Cost Optimization",
      description: "SMB/SME segments face cost escalations from continuous technology changes"
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Optimal Infrastructure",
      description: "Deploying and managing IT infrastructure aligned with business needs"
    },
    {
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Vendor Management",
      description: "Managing wide range of vendors and ever-changing technologies"
    }
  ];

  const benefits = [
    "20 YEARS of expertise in ITFMS domain with proven delivery models",

"Understands the importance and elements of IT Infrastructure",

"Focus on reducing reactive support calls with a proactive approach",

"Adhere to the best practices framework",

"Design and delivering tailor made services to specific business needs.",
"Holistic view of the complete IT ecosystem of the customer, while delivering services.",
"Primary focus on customer's business values and not just IT infrastructure",
"Highly trained and committed team"
   
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
                Infrastructure Management Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprehensive IT Infrastructure Management Services that focus on deploying and managing technologies following industry best practices at an optimized cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  GET STARTED
                </a>
                <a href="#services" className="btn-secondary">
                  VIEW SERVICES
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
                alt="Infrastructure Management" 
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Challenge Section */}
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
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Today's Competitive Business Environment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              In today's competitive business environment, irrespective of their size, organizations are dependent on IT to run their core business efficiently. With a wide range of vendors and ever-changing technologies, businesses are often faced with many choices while deploying and managing the most optimal IT infrastructure that is aligned with their business needs.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The challenge lies in adapting to rapid changes in technologies. The SMB/SME segment is far more vulnerable to cost escalations arising from the need to continuously adapt to changes, and to ensure that their IT systems are better equipped to handle their business needs.
            </p>
          </motion.div>

          {/* Challenges Grid */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {challenge.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Why Choose Pacer Automation?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To address these challenges, Pacer Automation offers a comprehensive suite of IT Infrastructure Management Services, which focus on deploying and managing technologies, following industry best practices at an optimized cost.
              </p>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
                Key Benefits:
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
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
                alt="Solution" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section> 

      {/* Modular Services Approach */}
      {/* <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              Enhanced Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Modular Services Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Flexible, scalable infrastructure management services tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 ">
        <div className="container mx-auto px-4">
             <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              Enhanced Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Modular Services Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Flexible, scalable infrastructure management services tailored to your business needs
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
                  style={{ backgroundColor: service.color, color: 'white' }}
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

      {/* Why Choose Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Why Choose Pacer Automation?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FiAward />,
                title: "Industry Expertise",
                desc: "Proven track record since 1989 in IT infrastructure management"
              },
              {
                icon: <FiTarget />,
                title: "Business Aligned",
                desc: "IT solutions perfectly aligned with your business objectives"
              },
              {
                icon: <FiClock />,
                title: "24/7 Support",
                desc: "Round-the-clock monitoring and support for your infrastructure"
              },
              {
                icon: <FiTrendingUp />,
                title: "Cost Optimized",
                desc: "Best practices implementation at optimized costs"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Delivery Model */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#1E3A8A' }}>
              Our Service Delivery Model
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  1
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>Assessment</h4>
                <p className="text-sm text-gray-600">Comprehensive infrastructure assessment and gap analysis</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  2
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>Implementation</h4>
                <p className="text-sm text-gray-600">Deployment of services following best practices</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  3
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>Management</h4>
                <p className="text-sm text-gray-600">Ongoing monitoring, support and optimization</p>
              </div>
            </div>
          </motion.div>
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
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-lg opacity-90">
                Let's discuss how our infrastructure management services can help your business
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

export default InfrastructureManagement;