const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
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

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Pacer Careers API is running' });
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