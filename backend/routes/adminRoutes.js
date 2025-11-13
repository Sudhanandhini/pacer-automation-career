// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // use bcryptjs
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // mysql2 promise pool

// POST /api/admin/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email & password are required' });
    }

    // Query DB (db is mysql2 promise pool)
    const [rows] = await db.query('SELECT * FROM admins WHERE email = ?', [email.trim()]);

    if (!rows || rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const admin = rows[0];

    // Compare password (admin.password should be bcrypt hash)
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Sign JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET || 'MY_SUPER_SECRET',
      { expiresIn: '24h' }
    );

    return res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username || null,
        email: admin.email,
        role: admin.role || 'admin'
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Simple token verify route (example)
router.get('/verify', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'MY_SUPER_SECRET');
    return res.json({ success: true, admin: payload });
  } catch (err) {
    console.error('Verify error:', err);
    return res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
