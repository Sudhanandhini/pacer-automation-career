const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// OAuth2 client setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// Send via Gmail HTTP API (bypasses cPanel SMTP proxy)
async function sendViaGmailAPI(mailOptions) {
  const builder = nodemailer.createTransport({ streamTransport: true, newline: 'unix', buffer: true });
  const info = await builder.sendMail(mailOptions);
  const rawMime = info.message.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  const result = await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: rawMime },
  });
  return result.data;
}

// Health check
router.get('/send-email', (req, res) => {
  res.status(405).json({
    error: 'Method Not Allowed',
    message: 'This endpoint requires a POST request',
    correctUsage: 'Send a POST request to /api/send-email with form data'
  });
});

// Send contact form email
router.post('/send-email', async (req, res) => {
  try {
    const { name, email, website, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Please provide all required fields (name, email, subject, message)'
      });
    }

    await sendViaGmailAPI({
      from: `"Pacer Careers Contact" <${process.env.EMAIL_USER}>`,
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
              </div>` : ''}
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
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('❌ Error sending contact email:', error.message);
    res.status(500).json({
      error: 'Failed to send email',
      message: error.message,
      code: error.code
    });
  }
});

// Email config status
router.get('/email-status', (req, res) => {
  res.status(200).json({
    status: 'Email Service Status',
    type: 'Gmail OAuth2',
    configured: {
      GMAIL_CLIENT_ID: !!process.env.GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET: !!process.env.GMAIL_CLIENT_SECRET,
      GMAIL_REFRESH_TOKEN: !!process.env.GMAIL_REFRESH_TOKEN,
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_TO: !!process.env.EMAIL_TO,
    }
  });
});

// Test email connection — sends a real test mail via Gmail API
async function handleTestEmail(_req, res) {
  try {
    await sendViaGmailAPI({
      from: `"Pacer Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Gmail API Test',
      html: '<p>Gmail API connection is working.</p>',
    });
    res.status(200).json({
      status: 'SUCCESS',
      message: 'Gmail API connection verified',
      user: process.env.EMAIL_USER
    });
  } catch (error) {
    console.error('❌ Test email error:', error.message);
    res.status(500).json({
      status: 'ERROR',
      message: error.message,
      code: error.code
    });
  }
}

router.get('/test-email', handleTestEmail);
router.post('/test-email', handleTestEmail);

module.exports = router;
