const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { sendApplicationEmail } = require('../services/emailService');

// @route   POST /api/applications
// @desc    Submit job application (sends email with resume attachment)
// @access  Public
router.post('/', upload.single('resume'), async (req, res) => {
  console.log('\n========== NEW APPLICATION SUBMISSION ==========');
  console.log('📥 Request Body:', req.body);
  console.log('📎 File Info:', req.file ? {
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    buffer: req.file.buffer ? 'Buffer exists' : 'No buffer'
  } : 'NO FILE RECEIVED');

  try {
    const { name, email, phone, position, qualification, experience, message } = req.body;

    // Validation
    if (!name || !email || !phone || !position || !qualification || !experience) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false,
        message: 'Please provide all required fields' 
      });
    }

    if (!req.file) {
      console.log('❌ Validation failed: No file uploaded');
      return res.status(400).json({ 
        success: false,
        message: 'Please upload your resume' 
      });
    }

    // Prepare application data
    const applicationData = {
      name,
      email,
      phone,
      position,
      qualification,
      experience,
      message: message || ''
    };

    console.log('✅ Validation passed');
    console.log('📧 Attempting to send email...');

    // Send email with resume attachment
    try {
      const emailResult = await sendApplicationEmail(applicationData, req.file);
      console.log('✅ Email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('❌ EMAIL ERROR:', emailError);
      console.error('Error name:', emailError.name);
      console.error('Error message:', emailError.message);
      console.error('Error stack:', emailError.stack);
      
      return res.status(500).json({ 
        success: false,
        message: `Failed to send email: ${emailError.message}. Please contact jobs@pacerautomation.com directly.`
      });
    }

    // Store application in database
    console.log('💾 Saving to database...');
    try {
      const [result] = await db.query(
        'INSERT INTO job_applications (name, email, phone, position, qualification, experience, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())',
        [name, email, phone, position, qualification, experience, message || '']
      );
      console.log('✅ Database save successful. Application ID:', result.insertId);
    } catch (dbError) {
      console.error('❌ DATABASE ERROR:', dbError);
      // Continue anyway since email was sent
    }

    console.log('========== APPLICATION SUBMISSION COMPLETE ==========\n');

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! You will receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('❌ UNEXPECTED ERROR:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    res.status(500).json({ 
      success: false,
      message: 'Server error. Please try again later.' 
    });
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