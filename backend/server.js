const express = require('express');
const cors = require('cors');
const path = require('path');
const { loadEnv } = require('./config/env');

loadEnv();

const app = express();

// CORS Configuration - Allow both local development and production domains
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
      'https://pacerautomation.com',
      'https://www.pacerautomation.com'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MySQL Connection
const db = require('./config/db');

// Import Routes
const adminRoutes = require('./routes/adminRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const emailRoutes = require('./routes/emailRoutes'); // ADD THIS

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api', emailRoutes); // ADD THIS

// Base API route - Health check
app.get('/api', (req, res) => {
  res.json({
    message: 'Pacer Careers API is running',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api',
      email: {
        sendEmail: 'POST /api/send-email',
        testEmail: 'POST /api/test-email',
        status: 'GET /api/email-status'
      },
      jobs: {
        list: 'GET /api/jobs',
        create: 'POST /api/jobs (admin)',
        update: 'PUT /api/jobs/:id (admin)',
        delete: 'DELETE /api/jobs/:id (admin)'
      },
      applications: {
        submit: 'POST /api/applications',
        list: 'GET /api/applications (admin)',
        getOne: 'GET /api/applications/:id (admin)',
        updateStatus: 'PUT /api/applications/:id/status (admin)'
      },
      admin: {
        login: 'POST /api/admin/login',
        verify: 'GET /api/admin/verify'
      }
    },
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Pacer Careers API is running' });
});

// 404 Handler - Route not found
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    method: req.method,
    message: `${req.method} ${req.path} is not a valid endpoint`,
    availableEndpoints: 'GET /api'
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the process using this port or set a different PORT.`);
    console.error(`Find the PID using PowerShell: netstat -ano | findstr :${PORT}`);
    console.error('Then kill it: taskkill /PID <PID> /F  OR in PowerShell: Stop-Process -Id <PID> -Force');
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});
