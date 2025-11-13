import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Fingerprint, Eye, Server, Key, Database, Cloud, Bug, Network, Monitor, ChevronRight, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import home4 from "../assets/SaaS-4.png"


const CyberSecurity = () => {
  const [activeService, setActiveService] = useState(0);
  const [threats, setThreats] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const securityServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Network Security",
      description: "Comprehensive protection for your network infrastructure against cyber threats",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Network Monitoring"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Endpoint Protection",
      description: "Advanced security for all devices connected to your network",
      features: ["Anti-malware", "Device Encryption", "Patch Management", "Zero-day Protection"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring",
      description: "24/7 monitoring and incident response services",
      features: ["SOC Services", "Threat Intelligence", "Log Management", "Real-time Alerts"]
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Identity Management",
      description: "Secure identity and access management solutions",
      features: ["Multi-factor Authentication", "Single Sign-On", "Privileged Access Management", "Identity Governance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Protect your cloud infrastructure and applications",
      features: ["CASB Solutions", "Cloud Workload Protection", "Container Security", "API Security"]
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Vulnerability Assessment",
      description: "Identify and remediate security vulnerabilities",
      features: ["Penetration Testing", "Security Audits", "Risk Assessment", "Compliance Testing"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "< 5min", label: "Response Time" },
    { number: "500+", label: "Protected Organizations" }
  ];

  const threatTypes = [
    { name: "Malware", percentage: 45, icon: <Bug className="w-5 h-5" /> },
    { name: "Phishing", percentage: 30, icon: <AlertTriangle className="w-5 h-5" /> },
    { name: "DDoS", percentage: 15, icon: <Network className="w-5 h-5" /> },
    { name: "Ransomware", percentage: 10, icon: <Lock className="w-5 h-5" /> }
  ];

  const complianceStandards = [
    "ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS", "NIST"
  ];

  const securityProcess = [
    { phase: "Assess", description: "Comprehensive security assessment of your infrastructure" },
    { phase: "Design", description: "Custom security architecture tailored to your needs" },
    { phase: "Implement", description: "Deploy advanced security solutions and controls" },
    { phase: "Monitor", description: "Continuous monitoring and threat detection" },
    { phase: "Respond", description: "Rapid incident response and remediation" },
    { phase: "Improve", description: "Ongoing security optimization and updates" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-[#00BFA5] opacity-95"></div>
        
       
         <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,191,165,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,165,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div> 

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
           
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cybersecurity Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade security solutions and 24/7 threat monitoring
            </p>
             <div className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center bg-red-500/20 text-red-300 px-6 py-3 rounded-full"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">{threats.toLocaleString()} threats blocked today</span>
              </motion.div>
            </div> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00BFA5] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                <a href="/contact">Get Security Assessment</a> <ChevronRight className="inline ml-2" />
              </motion.button>
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition-all font-semibold"
              >
                View Security Solutions
              </motion.button> 
            </div>
          </motion.div>
        </div>
      </section> */}

       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Shield className="w-20 h-20 text-[#00BFA5] mx-auto mb-6" /> */}
            <h1 className="text-4xl md:text-3xl font-bold text-black mb-6">
              Cybersecurity Excellence
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade security solutions and 24/7 threat monitoring
            </p>
            {/* <div className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center bg-red-500/20 text-red-300 px-6 py-3 rounded-full"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">{threats.toLocaleString()} threats blocked today</span>
              </motion.div>
            </div> */}
            <div className=" gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00BFA5] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                <a href="/contact">Get Security Assessment</a> <ChevronRight className="inline ml-2" />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition-all font-semibold"
              >
                View Security Solutions
              </motion.button> */}
            </div>
          </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <img 
                      src={home4}
                      alt="About Us" 
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#00BFA5] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Security Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security solutions to protect your organization from evolving cyber threats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(index)}
                className="group cursor-pointer"
              >
                <div className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  activeService === index ? 'border-[#00BFA5]' : 'border-transparent'
                }`}>
                  <div className="text-[#00BFA5] mb-4 group-hover:text-secondary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2 text-[#00BFA5]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark mb-6">Current Threat Landscape</h2>
              <p className="text-gray-600 mb-8">
                Stay protected against the most common cyber threats targeting organizations today
              </p>
              
              <div className="space-y-4">
                {threatTypes.map((threat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="text-secondary mr-2">{threat.icon}</div>
                        <span className="font-semibold text-dark">{threat.name}</span>
                      </div>
                      <span className="text-[#00BFA5] font-semibold">{threat.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${threat.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#00BFA5] h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary to-[#5a6362] rounded-lg p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Real-time Protection</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Monitor className="w-6 h-6 mr-3" />
                    <span>Continuous monitoring of network traffic</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3" />
                    <span>Instant threat detection and alerts</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    <span>Automated threat response</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-6 h-6 mr-3" />
                    <span>Threat intelligence database</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Our Security Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to cybersecurity that evolves with your needs
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BFA5] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-3 mt-4">{step.phase}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you meet regulatory requirements and industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#00BFA5] hover:text-white group transition-all cursor-pointer"
              >
                <Key className="w-8 h-8 mx-auto mb-3 text-[#00BFA5] group-hover:text-white" />
                <p className="font-semibold">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-dark to-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-[#00BFA5] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Wait for a Breach to Happen
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment and protect your organization today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00BFA5] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                Get Free Security Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition-all font-semibold"
              >
                Schedule Expert Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default CyberSecurity;