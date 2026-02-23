const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

console.log('\n📧 ===== INITIALIZING EMAIL SERVICE =====');
<<<<<<< HEAD
console.log('EMAIL_HOST:', process.env.EMAIL_HOST || 'smtp.gmail.com');
console.log('EMAIL_PORT:', process.env.EMAIL_PORT || 587);
=======
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = Number(process.env.EMAIL_PORT || 587);
const EMAIL_SECURE = String(process.env.EMAIL_SECURE || '').toLowerCase() === 'true' || EMAIL_PORT === 465;

console.log('EMAIL_HOST:', EMAIL_HOST);
console.log('EMAIL_PORT:', EMAIL_PORT);
console.log('EMAIL_SECURE:', EMAIL_SECURE);
>>>>>>> 2986b93 (change)
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ SET' : '❌ NOT SET');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? `✓ SET (${process.env.EMAIL_PASS.length} chars)` : '❌ NOT SET');
console.log('EMAIL_TO:', process.env.EMAIL_TO ? '✓ SET' : '❌ NOT SET');
console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('========================================\n');

// Email transporter for contact form - optimized for Gmail
const transporter = nodemailer.createTransport({
<<<<<<< HEAD
  service: 'gmail', // Use Gmail service directly
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS (not SSL)
=======
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
>>>>>>> 2986b93 (change)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 10000,
  socketTimeout: 15000,
  pool: {
    maxConnections: 1,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5
  },
  logger: true,
  debug: true
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Email transporter error:', error);
    console.error('Code:', error.code);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Health check - GET endpoint
router.get('/send-email', (req, res) => {
  res.status(405).json({
    error: 'Method Not Allowed',
    message: 'This endpoint requires a POST request',
    correctUsage: 'Send a POST request to /api/send-email with form data'
  });
});

// Send email endpoint
router.post('/send-email', async (req, res) => {
  try {
    const { name, email, website, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Please provide all required fields (name, email, subject, message)'
      });
    }

    // Email to company ONLY (no auto-reply to user)
    const mailOptionsToCompany = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #14b8a6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #14b8a6; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #14b8a6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${website ? `
              <div class="field">
                <div class="label">Website:</div>
                <div class="value">${website}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email to company only
    await transporter.sendMail(mailOptionsToCompany);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('❌ Error sending email:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    console.error('Full error:', error);
    
    // Log environment variables (without sensitive data)
    console.log('📧 Email Config Check:');
    console.log('EMAIL_HOST:', process.env.EMAIL_HOST || 'NOT SET');
    console.log('EMAIL_PORT:', process.env.EMAIL_PORT || 'NOT SET');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ SET' : '❌ NOT SET');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? `✓ SET (length: ${process.env.EMAIL_PASS.length})` : '❌ NOT SET');
    console.log('EMAIL_TO:', process.env.EMAIL_TO ? '✓ SET' : '❌ NOT SET');
    
    let errorMessage = error.message;
    let errorDetails = {};
    
    // Provide helpful error messages based on error code
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      errorMessage = 'Email credentials not configured';
      errorDetails.suggestion = 'Add EMAIL_USER and EMAIL_PASS to .env file';
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed';
      errorDetails.suggestion = 'Verify EMAIL_USER and EMAIL_PASS. Gmail requires App Password (not regular password). Enable 2FA on Gmail account.';
    } else if (error.code === 'ESOCKET' || error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Cannot connect to email server';
      errorDetails.suggestion = `Check EMAIL_HOST (${process.env.EMAIL_HOST}) and EMAIL_PORT (${process.env.EMAIL_PORT}). Firewall may be blocking SMTP.`;
    } else if (error.code === 'EINVAL') {
      errorMessage = 'Invalid email configuration';
      errorDetails.suggestion = 'Check EMAIL_HOST, EMAIL_PORT, EMAIL_USER format';
    }
    
    res.status(500).json({
      error: 'Failed to send email',
      message: errorMessage,
      code: error.code,
      fullError: error.message,
      ...errorDetails
    });
  }
});

// Diagnostic endpoint - check email configuration
router.get('/email-status', (req, res) => {
  res.status(200).json({
    status: 'Email Service Status',
    configured: {
      EMAIL_HOST: !!process.env.EMAIL_HOST,
      EMAIL_PORT: !!process.env.EMAIL_PORT,
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      EMAIL_TO: !!process.env.EMAIL_TO
    },
    details: {
      host: process.env.EMAIL_HOST || 'NOT SET (will use smtp.gmail.com)',
      port: process.env.EMAIL_PORT || 'NOT SET (will use 587)',
      user: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
      passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
      passNoSpaces: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '').length : 0,
      to: process.env.EMAIL_TO || 'NOT SET'
    },
    note: 'If any value shows NOT SET, add it to your .env file on the server'
  });
});

// Test email connection - GET version (easy to test from browser)
router.get('/test-email', async (req, res) => {
  try {
    console.log('\n🧪 Testing email connection (GET)...');
    console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
    console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'NOT SET');
    
    // Test transporter
    const testTransporter = nodemailer.createTransport({
<<<<<<< HEAD
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
=======
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_SECURE,
>>>>>>> 2986b93 (change)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      connectionTimeout: 10000,
      socketTimeout: 15000
    });

    // Verify connection
    const verified = await testTransporter.verify();
    
    if (verified) {
      console.log('✅ Email connection test PASSED');
      res.status(200).json({
        status: 'SUCCESS ✅',
        message: 'Email server connection verified successfully!',
        verified: true,
        server: 'smtp.gmail.com',
        user: process.env.EMAIL_USER,
        credentials: 'Valid Gmail App Password detected'
      });
    } else {
      console.log('❌ Email connection test FAILED');
      res.status(500).json({
        status: 'FAILED ❌',
        message: 'Email server verification failed',
        verified: false
      });
    }
  } catch (error) {
    console.error('❌ Test email error:', error.message);
    res.status(500).json({
      status: 'ERROR ❌',
      message: error.message,
      code: error.code,
      errorDetails: {
        name: error.name,
        message: error.message,
        code: error.code
      },
      suggestion: error.code === 'EAUTH' 
        ? 'Authentication failed. Check Gmail App Password (remove spaces)' 
        : error.code === 'ESOCKET' || error.code === 'ETIMEDOUT'
        ? 'Cannot reach Gmail server. Check firewall/network'
        : 'Check email configuration'
    });
  }
});

// Test email connection - POST version
router.post('/test-email', async (req, res) => {
  try {
    console.log('\n🧪 Testing email connection (POST)...');
    console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
    console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'NOT SET');
    
    // Test transporter
    const testTransporter = nodemailer.createTransport({
<<<<<<< HEAD
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
=======
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_SECURE,
>>>>>>> 2986b93 (change)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      connectionTimeout: 10000,
      socketTimeout: 15000
    });

    // Verify connection
    const verified = await testTransporter.verify();
    
    if (verified) {
      console.log('✅ Email connection test PASSED');
      res.status(200).json({
        status: 'SUCCESS ✅',
        message: 'Email server connection verified successfully!',
        verified: true,
        server: 'smtp.gmail.com',
        user: process.env.EMAIL_USER,
        credentials: 'Valid Gmail App Password detected'
      });
    } else {
      console.log('❌ Email connection test FAILED');
      res.status(500).json({
        status: 'FAILED ❌',
        message: 'Email server verification failed',
        verified: false
      });
    }
  } catch (error) {
    console.error('❌ Test email error:', error.message);
    res.status(500).json({
      status: 'ERROR ❌',
      message: error.message,
      code: error.code,
      errorDetails: {
        name: error.name,
        message: error.message,
        code: error.code
      },
      suggestion: error.code === 'EAUTH' 
        ? 'Authentication failed. Check Gmail App Password (remove spaces)' 
        : error.code === 'ESOCKET' || error.code === 'ETIMEDOUT'
        ? 'Cannot reach Gmail server. Check firewall/network'
        : 'Check email configuration'
    });
  }
});


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 2986b93 (change)
