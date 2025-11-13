import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Award, MapPin, Clock, Mail, Send, ChevronRight, X } from 'lucide-react';
import axios from 'axios';
import home from "../assets/SaaS-4.png";
import home1 from "../assets/SaaS-5.png";

const API_URL = 'http://localhost:5000/api';

const Career = () => {
  const [openPositions, setOpenPositions] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    qualification: '',
    experience: '',
    resume: null,
    message: ''
  });

  // Fetch job openings from API
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${API_URL}/jobs`);
      if (response.data.success) {
        setOpenPositions(response.data.jobs);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleApplyClick = (positionTitle) => {
    setSelectedPosition(positionTitle);
    setFormData({ ...formData, position: positionTitle });
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setShowApplicationForm(false);
    setSubmitSuccess(false);
    document.body.style.overflow = 'auto';
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      qualification: '',
      experience: '',
      resume: null,
      message: ''
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('qualification', formData.qualification);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('resume', formData.resume);

      const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          closeModal();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(error.response?.data?.message || 'Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                <button className="text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105" 
                  style={{backgroundColor:'#00BFA5'}}>
                  <a href="#positions">Explore Openings <ChevronRight className="inline ml-2" /></a>
                </button>
              </div> 
            </motion.div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect role that matches your skills and aspirations
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark group-hover:text-[#00BFA5] transition-colors">
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
                      <span className="hidden md:inline-flex items-center ml-3 px-2 py-1 rounded bg-gray-100 text-xs text-gray-600">
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white px-6 py-2 rounded-lg transition-all"
                      style={{backgroundColor:'#00BFA5'}}
                      onClick={() => handleApplyClick(position.title)}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto mt-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We also give the opportunity for fresh graduates who are interested in building their careers in IT Support and Services in various technologies. We train and build these young minds to become future specialists.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Please feel free to apply at{' '}
                <a href="mailto:jobs@pacerautomation.com" className="text-[#00BFA5] hover:underline font-semibold">
                  jobs@pacerautomation.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {!submitSuccess ? (
                <>
                  <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
                    Apply for {selectedPosition}
                  </h2>
                  
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Qualification *
                        </label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          placeholder="e.g., B.Tech, MCA, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                          required
                        />
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
                        placeholder="e.g., 2 years, Fresher, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Resume (PDF/DOC/DOCX) *
                      </label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum file size: 5MB</p>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent resize-none"
                        placeholder="Tell us why you're a great fit for this role..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-white py-4 px-6 rounded-lg transition-all flex items-center justify-center font-semibold disabled:opacity-50"
                      style={{backgroundColor:'#00BFA5'}}
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Application
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">Thank you for applying. We'll review your application and get back to you soon.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom Section */}
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
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Pacer nurtures young talent building their career in an overall manner. Pacer believes in education and training and wants to nurture young talent, who would imbibe their culture and grow up with the values of the company to be responsible and accomplish whatever assignment they put their mind and heart to.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A lot of effort goes into identifying projects and opportunities that can excite young talent and add value to their skills while continuing to expose them to different functions and challenges. No Approval is required to explore new technology and work on the new domain. Pacer Provides every opportunity to their employees to enhance the core competency, and provide hands-on experience in other domains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;