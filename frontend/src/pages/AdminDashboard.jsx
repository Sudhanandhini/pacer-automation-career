import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, LogOut, Menu, X } from 'lucide-react';
import JobOpeningsSection from '../components/admin/JobOpeningsSection';
import ApplicationsSection from '../components/admin/ApplicationsSection';
import axios from 'axios';

// 🔹 production API base
const PROD_API_URL = 'https://pacerautomation.com/api';

// 🔹 choose API URL based on environment (same pattern as AdminLogin.jsx)
const API_URL =
  import.meta.env.VITE_API_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : PROD_API_URL);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('openings');
  const [adminData, setAdminData] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    const admin = JSON.parse(localStorage.getItem('adminData') || '{}');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    setAdminData(admin);
    
    // Verify token
    verifyToken(token);
  }, [navigate]);

  const verifyToken = async (token) => {
    try {
      await axios.get(`${API_URL}/admin/verify`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#00BFA5] rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Pacer Automation</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, <span className="font-semibold">{adminData?.username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-gray-600 mb-2">
                  Welcome, <span className="font-semibold">{adminData?.username}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all justify-center"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Section Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-2 mb-8 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setActiveSection('openings')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all ${
              activeSection === 'openings'
                ? 'bg-[#00BFA5] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-semibold">Current Openings</span>
          </button>
          <button
            onClick={() => setActiveSection('applications')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all ${
              activeSection === 'applications'
                ? 'bg-[#00BFA5] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-semibold">Job Applications</span>
          </button>
        </div>

        {/* Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === 'openings' ? (
            <JobOpeningsSection />
          ) : (
            <ApplicationsSection />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;