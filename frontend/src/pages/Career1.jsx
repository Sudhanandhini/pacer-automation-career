
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Award, MapPin, Clock, Mail, Send, ChevronRight } from 'lucide-react';
import home from "../assets/SaaS-4.png";
import home1 from "../assets/SaaS-5.png";




const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    message: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const openPositions = [
    {
      title: "Service Desk Engineer (Mac OS)",
      department: "Support",
      location: "Bengaluru",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Provide first-line support for macOS clients, resolve incidents, and assist end-users with hardware/software issues."
    },
    {
      title: "Desktop Engineer",
      department: "Support",
      location: "Bengaluru",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Maintain and troubleshoot desktop environments, image builds, software deployment and hardware lifecycle management."
    },
    {
      title: "Network Engineer",
      department: "Network",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3-6 years",
      description:
        "Design, implement and support LAN/WAN, switch/router/firewall configurations and network monitoring."
    },
    {
      title: "Microsoft 365 & Azure Specialist",
      department: "Cloud",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-6 years",
      description:
        "Design, deploy and manage Microsoft 365 and Azure services including tenant administration, migration and governance."
    },
    {
      title: "Team Lead / Operations Manager",
      department: "Operations",
      location: "Bengaluru",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead a technical operations team, manage SLAs, coordinate projects and ensure smooth day-to-day service delivery."
    },
    {
      title: "Windows Server & Application Specialist",
      department: "Infrastructure",
      location: "Bengaluru",
      type: "Full-time",
      experience: "4-7 years",
      description:
        "Administer Windows Server platforms, application deployment, patching, AD/Group Policy, and performance tuning."
    }
  ];


  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career paths and professional development programs"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    }
  ];

  return (
    <div>
      {/* Hero Section */}


      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A8A]">
                Build Your Career With Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Join a team of innovators working on cutting-edge enterprise solutions.
                We're looking for talented individuals who share our passion for technology and excellence.
              </p>

         <div className="flex flex-col sm:flex-row gap-4">
                      <button className=" text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105" 
      style={{backgroundColor:'#00BFA5'}}>
                        <a href="/contact">Build your Career <ChevronRight className="inline ml-2" /></a>
                      </button>
                     
                    </div> 
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={home} alt="Alliance" className="w-full rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Current Openings Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect role that matches your skills and aspirations
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{position.description}</p>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      {/* <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.experience}
                      </span> */}
                      <span className="hidden md:inline-flex items-center ml-3 px-2 py-1 rounded bg-gray-100 text-xs text-gray-600">
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all"
                      onClick={() =>
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4 mt-4">
              We also give the opportunity for fresh graduates who are interested in building their careers in IT Support and Services in various technologies. We train and build these young minds to become future specialists.</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                please feel free to apply{' '}
                <a href="mailto:jobs@pacerautomation.com" className="text-#00BFA5 hover:underline font-semibold">
                  jobs@pacerautomation.com
                </a>
              </p>
            </motion.div>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">  A lot of effort goes into identifying projects and opportunities that can excite young talent and add value to their skills while continuing to expose them to different functions and challenges. No Approval is required to explore new technology and work on the new domain. Pacer Provides every opportunity to their employees to enhance the core competency, and provide hands-on experience other domains.

            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {/* <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Apply Now
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                      required
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((pos, index) => (
                        <option key={index} value={pos.title}>{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume (PDF/DOC) *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#00BFA5 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-#00BFA5 text-white py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </motion.button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Or send your resume directly to:{' '}
                <a href="mailto:careers@pacerautomation.com" className="text-#00BFA5 hover:underline font-semibold">
                 jobs@pacerautomation.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>  */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={home1} alt="Alliance" className="w-full rounded-lg" />
            </motion.div>
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Pacer nurtures young talent building their career in an overall manner.  Pacer believes in education and training and wants to nurture young talent, who would imbibe their culture and grow up with the values of the company to be responsible and accomplish whatever assignment they put their mind and heart to.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A lot of effort goes into identifying projects and opportunities that can excite young talent and add value to their skills while continuing to expose them to different functions and challenges. No Approval is required to explore new technology and work on the new domain. Pacer Provides every opportunity to their employees to enhance the core competency, and provide hands-on experience in other domains.
              </p>

            </motion.div>

            {/* Right image */}

          </div>
        </div>
      </section>


    </div>
  );
};

export default Career;