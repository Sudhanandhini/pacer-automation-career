const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// @route   POST /api/applications
// @desc    Submit job application
// @access  Public
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, qualification, experience, message } = req.body;

    // Validation
    if (!name || !email || !phone || !position || !qualification || !experience) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload your resume' });
    }

    const resumePath = req.file.path;

    // Insert application
    const [result] = await db.query(
      'INSERT INTO job_applications (name, email, phone, position, qualification, experience, resume, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, phone, position, qualification, experience, resumePath, message || '']
    );

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: result.insertId
    });
  } catch (error) {
    console.error('Submit application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/applications
// @desc    Get all applications - Admin only
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM job_applications ORDER BY created_at DESC');

    res.json({
      success: true,
      count: rows.length,
      applications: rows
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/applications/:id
// @desc    Get single application
// @access  Private
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM job_applications WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json({
      success: true,
      application: rows[0]
    });
  } catch (error) {
    console.error('Get application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/applications/:id/status
// @desc    Update application status
// @access  Private
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = ['pending', 'reviewed', 'shortlisted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const [existing] = await db.query('SELECT * FROM job_applications WHERE id = ?', [req.params.id]);

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }

    await db.query('UPDATE job_applications SET status = ? WHERE id = ?', [status, req.params.id]);

    res.json({
      success: true,
      message: 'Application status updated successfully'
    });
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/applications/:id
// @desc    Delete application
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const [existing] = await db.query('SELECT * FROM job_applications WHERE id = ?', [req.params.id]);

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Delete resume file
    const fs = require('fs');
    if (fs.existsSync(existing[0].resume)) {
      fs.unlinkSync(existing[0].resume);
    }

    await db.query('DELETE FROM job_applications WHERE id = ?', [req.params.id]);

    res.json({
      success: true,
      message: 'Application deleted successfully'
    });
  } catch (error) {
    console.error('Delete application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;