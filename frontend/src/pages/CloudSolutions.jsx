import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCloud,
  FiServer,
  FiLayers,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
  FiDatabase,
  FiLock,
  FiRefreshCw,
  FiUsers
} from 'react-icons/fi';
import { MdCloudQueue } from 'react-icons/md';
import heroImage from '../assets/cloud-solutions.jpg';

const CloudSolutions = () => {
  const cloudServices = [
    {
      icon: <FiCloud className="text-4xl" />,
      title: "SaaS Solutions",
      subtitle: "Software as a Service",
      description:
        "Ready-to-use cloud applications that enhance productivity and collaboration across your organization.",
      features: [
        "Microsoft Office 365",
        "Google Workspace",
        "Cloud CRM Solutions",
        "Cloud Active Directory"
      ],
      color: "#00BFA5"
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "PaaS Solutions",
      subtitle: "Platform as a Service",
      description:
        "Cloud platforms for developing, running, and managing applications without infrastructure complexity.",
      features: [
        "Microsoft Azure Platform",
        "Managed SQL Services",
        "Application Hosting",
        "Development Environments"
      ],
      color: "#1E3A8A"
    },
    {
      icon: <FiServer className="text-4xl" />,
      title: "IaaS Solutions",
      subtitle: "Infrastructure as a Service",
      description:
        "Scalable computing resources including storage, networking, and virtual machines on demand.",
      features: [
        "Microsoft Azure Infrastructure",
        "Cloud Storage Solutions",
        "Cloud Backup Services",
        "Cloud Disaster Recovery"
      ],
      color: "#00BFA5"
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: "Private Cloud",
      description:
        "Dedicated cloud infrastructure providing enhanced security and control for your organization.",
      features: [
        "Dedicated Resources",
        "Enhanced Security",
        "Full Control & Customization",
        "Compliance Ready"
      ],
      color: "#1E3A8A"
    },
    {
      icon: <MdCloudQueue className="text-4xl" />,
      title: "Hybrid Cloud",
      description:
        "Best of both worlds - combining private and public cloud for optimal flexibility and performance.",
      features: [
        "Flexible Architecture",
        "Workload Optimization",
        "Seamless Integration",
        "Cost Optimization"
      ],
      color: "#00BFA5"
    }
  ];

  const benefits = [
    {
      icon: <FiZap className="text-3xl" />,
      title: "Speed to Innovation",
      description: "Accelerate innovation and quickly adapt to changing business needs"
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Faster Time to Revenue",
      description: "Rapid deployment enabling quicker time to market and revenue generation"
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: "Agile Business Processes",
      description: "Transform business processes with cloud-native agility and flexibility"
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: "New Insights",
      description: "Derive new insights from data and unlock new opportunities"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Enhanced Customer Experience",
      description: "Build richer, more meaningful customer experiences"
    },
    {
      icon: <FiLock className="text-3xl" />,
      title: "Enterprise Security",
      description: "Enterprise-grade security and compliance built into cloud solutions"
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
              <span
                className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
                style={{ color: '#00BFA5' }}
              >
                Our Offering
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: '#1E3A8A' }}
              >
                Cloud Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your business with cloud computing solutions that drive innovation, accelerate
                processes, and create meaningful customer experiences. Our expert engineers design scalable
                solutions best suited for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  GET STARTED
                </a>
                <a href="#solutions" className="btn-secondary">
                  EXPLORE SOLUTIONS
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
                alt="Cloud Solutions"
                className="w-full rounded-lg object-cover max-h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Cloud Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span
              className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
              style={{ color: '#00BFA5' }}
            >
              The Future is Cloud
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Why Cloud Computing?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Cloud computing is today the most sought after because businesses recognize its innate advantages,
              such as speed in innovation, business processes, and time to revenue. We help customers adopt cloud
              as part of a foundation to derive new insights, unlock new opportunities and build new models for
              creating richer, more meaningful customer experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section */}
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
              Our Cloud Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive cloud services to meet all your business needs
            </p>
          </motion.div>

          {/* IMPORTANT: use auto-rows-fr to make cards equal height; each card is h-full flex flex-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ backgroundColor: service.color, color: 'white' }}
                >
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    {service.title}
                  </h3>

                  {service.subtitle && (
                    <p className="text-sm mb-3" style={{ color: '#00BFA5' }}>
                      {service.subtitle}
                    </p>
                  )}

                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FiCheckCircle className="flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* optional CTA area if needed - kept at bottom to preserve alignment */}
                {/* <div className="mt-6">
                  <a className="text-sm font-semibold" href="/contact" style={{ color: '#00BFA5' }}>Learn more →</a>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
