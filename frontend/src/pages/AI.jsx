import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Sparkles, BarChart, Shield, Zap, Database, Cloud, GitBranch, Layers, Bot, ChevronRight, ArrowRight } from 'lucide-react';

const AI = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs for predictive analytics and automation",
      features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants to enhance customer experience",
      features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "24/7 Availability"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Advanced image and video analysis for quality control and security applications",
      features: ["Object Detection", "Facial Recognition", "OCR Solutions", "Video Analytics"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics",
      features: ["Data Mining", "Business Intelligence", "Real-time Analytics", "Data Visualization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent process automation and RPA",
      features: ["Workflow Automation", "Document Processing", "Task Automation", "Integration Services"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Services",
      description: "Scalable cloud-based AI solutions for enterprise deployment",
      features: ["Model Deployment", "API Services", "Auto-scaling", "Performance Monitoring"]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Medical Diagnosis Assistant",
      description: "AI-powered diagnostic tools that help doctors identify diseases faster and more accurately",
      impact: "40% reduction in diagnosis time",
      icon: "🏥"
    },
    {
      industry: "Finance",
      title: "Fraud Detection System",
      description: "Real-time transaction monitoring and anomaly detection to prevent financial fraud",
      impact: "95% fraud detection accuracy",
      icon: "💰"
    },
    {
      industry: "Retail",
      title: "Personalized Shopping Experience",
      description: "AI-driven product recommendations and inventory management systems",
      impact: "30% increase in sales conversion",
      icon: "🛍️"
    },
    {
      industry: "Manufacturing",
      title: "Quality Control Automation",
      description: "Computer vision systems for detecting defects and ensuring product quality",
      impact: "60% reduction in defects",
      icon: "🏭"
    }
  ];

  const processSteps = [
    { step: 1, title: "Discovery", desc: "Understand your business needs and challenges" },
    { step: 2, title: "Design", desc: "Create custom AI solutions tailored to your requirements" },
    { step: 3, title: "Development", desc: "Build and train AI models using cutting-edge technologies" },
    { step: 4, title: "Deployment", desc: "Seamlessly integrate AI solutions into your infrastructure" },
    { step: 5, title: "Optimization", desc: "Continuously improve and scale your AI systems" }
  ];

  return (
    <div className=" bg-gray-50">
      {/* Hero Section */}
      <section className="relative  flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cfd5d4] via-dark to-[#575d67] opacity-90"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-[#00BFA5] mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Solutions That Transform
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize your business operations and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00BFA5] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
              >
                <a href="/contact">Get AI Consultation </a><ChevronRight className="inline ml-2" />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#00BFA5] transition-all font-semibold"
              >
                View Case Studies
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-[#00BFA5] mb-4 group-hover:text-secondary transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4 mr-2 text-[#00BFA5]" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{useCase.icon}</span>
                  <div>
                    <span className="text-[#00BFA5] text-sm font-semibold">{useCase.industry}</span>
                    <h3 className="text-xl font-semibold text-dark">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-[#00BFA5]/10 rounded-lg p-3 inline-block">
                  <p className="text-[#00BFA5] font-semibold">{useCase.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to ensure successful AI adoption
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#00BFA5] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-center max-w-xs">{item.desc}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-16 h-0.5 bg-gray-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Powered by Leading Technologies</h2>
            <p className="text-xl text-gray-600">We leverage the best AI frameworks and tools</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['TensorFlow', 'PyTorch', 'OpenAI', 'AWS AI', 'Azure ML', 'Google AI'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all text-center"
              >
                <Cpu className="w-8 h-8 text-[#00BFA5] mx-auto mb-2" />
                <p className="font-semibold text-dark">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-secondary to-[#00BFA5]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold"
              >
                Schedule AI Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition-all font-semibold"
              >
                Download AI Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AI;