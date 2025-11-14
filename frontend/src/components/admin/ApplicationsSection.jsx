import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Phone, Calendar, Download, Trash2, Eye, X, CheckCircle } from 'lucide-react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const ApplicationsSection = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/applications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.success) {
        setApplications(response.data.applications);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setSelectedApplication(null);
  };

  const handleUpdateStatus = async (applicationId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(
        `${API_URL}/applications/${applicationId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      alert('Status updated successfully!');
      fetchApplications();
      if (selectedApplication && selectedApplication.id === applicationId) {
        setSelectedApplication({ ...selectedApplication, status });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  const handleDelete = async (applicationId) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_URL}/applications/${applicationId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert('Application deleted successfully!');
      fetchApplications();
      if (showDetailsModal) {
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Error deleting application');
    }
  };

  const handleDownloadResume = (resumePath) => {
    const baseURL = 'http://localhost:5000';
    window.open(`${baseURL}/${resumePath}`, '_blank');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'shortlisted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredApplications = filterStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === filterStatus);

  const statusCounts = {
    all: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    shortlisted: applications.filter(app => app.status === 'shortlisted').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00BFA5]"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Job Applications</h2>
            <p className="text-gray-600 mt-1">Total Applications: {applications.length}</p>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Applications' },
            { key: 'pending', label: 'Pending' },
            { key: 'reviewed', label: 'Reviewed' },
            { key: 'shortlisted', label: 'Shortlisted' },
            { key: 'rejected', label: 'Rejected' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filterStatus === key
                  ? 'bg-[#00BFA5] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label} ({statusCounts[key]})
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No applications found</p>
          </div>
        ) : (
          filteredApplications.map((application) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{application.name}</h3>
                      <p className="text-gray-600 mt-1">Applied for: <span className="font-medium">{application.position}</span></p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(application.status)}`}>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {application.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {application.phone}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-gray-400" />
                      {application.qualification}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {application.experience}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Applied on: {new Date(application.created_at).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0 lg:ml-4">
                  <button
                    onClick={() => handleViewDetails(application)}
                    className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  {/* <button
                    onClick={() => handleDownloadResume(application.resume)}
                    className="flex items-center space-x-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </button> */}
                  <button
                    onClick={() => handleDelete(application.id)}
                    className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Application Details Modal */}
      {showDetailsModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-3xl w-full my-8 relative max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Application Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Applicant Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Applicant Information</h3>
                <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Address</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone Number</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Position Applied</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Qualification</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-800">{selectedApplication.experience}</p>
                  </div>
                </div>
              </div>

              {/* Message */}
              {selectedApplication.message && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Message</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedApplication.message}</p>
                  </div>
                </div>
              )}

              {/* Application Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Update Status</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['pending', 'reviewed', 'shortlisted', 'rejected'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleUpdateStatus(selectedApplication.id, status)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedApplication.status === status
                          ? getStatusColor(status)
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                {/* <button
                  onClick={() => handleDownloadResume(selectedApplication.resume)}
                  className="flex-1 bg-[#00BFA5] text-white py-3 px-6 rounded-lg hover:bg-[#00BFA5]/90 transition-all font-semibold flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button> */}
                <button
                  onClick={() => handleDelete(selectedApplication.id)}
                  className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-all font-semibold flex items-center justify-center"
                >
                  <Trash2 className="w-5 h-5 mr-2" />
                  Delete Application
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsSection;