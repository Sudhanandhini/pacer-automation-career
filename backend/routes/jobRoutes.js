const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/jobs
// @desc    Get all active job openings
// @access  Public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM job_openings WHERE is_active = true ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      count: rows.length,
      jobs: rows
    });
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/jobs/all
// @desc    Get all job openings (including inactive) - Admin only
// @access  Private
router.get('/all', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM job_openings ORDER BY created_at DESC');

    res.json({
      success: true,
      count: rows.length,
      jobs: rows
    });
  } catch (error) {
    console.error('Get all jobs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/jobs/:id
// @desc    Get single job opening
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM job_openings WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json({
      success: true,
      job: rows[0]
    });
  } catch (error) {
    console.error('Get job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/jobs
// @desc    Create new job opening
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, department, location, type, experience, description } = req.body;

    // Validation
    if (!title || !department || !location || !experience || !description) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const [result] = await db.query(
      'INSERT INTO job_openings (title, department, location, type, experience, description) VALUES (?, ?, ?, ?, ?, ?)',
      [title, department, location, type || 'Full-time', experience, description]
    );

    res.status(201).json({
      success: true,
      message: 'Job opening created successfully',
      jobId: result.insertId
    });
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/jobs/:id
// @desc    Update job opening
// @access  Private
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, department, location, type, experience, description, is_active } = req.body;

    // Check if job exists
    const [existing] = await db.query('SELECT * FROM job_openings WHERE id = ?', [req.params.id]);

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Update job
    await db.query(
      'UPDATE job_openings SET title = ?, department = ?, location = ?, type = ?, experience = ?, description = ?, is_active = ? WHERE id = ?',
      [title, department, location, type, experience, description, is_active !== undefined ? is_active : existing[0].is_active, req.params.id]
    );

    res.json({
      success: true,
      message: 'Job opening updated successfully'
    });
  } catch (error) {
    console.error('Update job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/jobs/:id
// @desc    Delete job opening
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const [existing] = await db.query('SELECT * FROM job_openings WHERE id = ?', [req.params.id]);

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }

    await db.query('DELETE FROM job_openings WHERE id = ?', [req.params.id]);

    res.json({
      success: true,
      message: 'Job opening deleted successfully'
    });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;