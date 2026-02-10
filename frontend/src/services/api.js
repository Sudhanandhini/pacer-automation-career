// frontend/src/services/api.js
import axios from 'axios';

export const API_URL = 'https://pacerautomation.com';

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// attach token to protected requests (dashboard, applications, etc.)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const adminAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
  verify: () => api.get('/admin/verify'),
};

export const jobsAPI = {
  getAll: () => api.get('/jobs'),
};

export default api;
