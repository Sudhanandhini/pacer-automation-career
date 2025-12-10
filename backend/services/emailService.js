const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter verification failed:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Send application email with resume attachment
const sendApplicationEmail = async (applicationData, resumeFile) => {
  try {
    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing. Please check EMAIL_USER and EMAIL_PASS in .env file');
    }

    const recipientEmail = process.env.EMAIL_TO || 'jobs@pacerautomation.com';

    const mailOptions = {
      from: `"Pacer Careers Portal" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: applicationData.email,
      subject: `New Job Application - ${applicationData.position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #00BFA5 0%, #1E3A8A 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Job Application</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="color: #1E3A8A; margin-top: 0; border-bottom: 2px solid #00BFA5; padding-bottom: 10px;">
              ${applicationData.position}
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E3A8A; margin-top: 0;">Applicant Details</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e0e0e0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555; width: 40%;">
                    <span style="color: #00BFA5;">●</span> Full Name:
                  </td>
                  <td style="padding: 12px 0; color: #333;">${applicationData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e0e0e0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">
                    <span style="color: #00BFA5;">●</span> Email:
                  </td>
                  <td style="padding: 12px 0;">
                    <a href="mailto:${applicationData.email}" style="color: #00BFA5; text-decoration: none;">
                      ${applicationData.email}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e0e0e0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">
                    <span style="color: #00BFA5;">●</span> Phone:
                  </td>
                  <td style="padding: 12px 0;">
                    <a href="tel:${applicationData.phone}" style="color: #00BFA5; text-decoration: none;">
                      ${applicationData.phone}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e0e0e0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">
                    <span style="color: #00BFA5;">●</span> Qualification:
                  </td>
                  <td style="padding: 12px 0; color: #333;">${applicationData.qualification}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e0e0e0;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">
                    <span style="color: #00BFA5;">●</span> Experience:
                  </td>
                  <td style="padding: 12px 0; color: #333;">${applicationData.experience}</td>
                </tr>
              </table>
            </div>
            
            ${applicationData.message ? `
              <div style="background-color: #e8f5e9; padding: 20px; border-left: 4px solid #00BFA5; border-radius: 4px; margin: 20px 0;">
                <h4 style="margin-top: 0; color: #1E3A8A;">📝 Additional Message:</h4>
                <p style="margin-bottom: 0; line-height: 1.6; color: #333;">${applicationData.message}</p>
              </div>
            ` : ''}
            
            <div style="background-color: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0; color: #856404;">
                <strong>📎 Resume Attached:</strong> ${resumeFile ? resumeFile.originalname : 'No file'}
              </p>
            </div>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This application was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Pacer Automation Career Portal | <a href="https://pacerautomation.com" style="color: #00BFA5;">pacerautomation.com</a>
            </p>
          </div>
        </div>
      `,
      attachments: resumeFile ? [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
          contentType: resumeFile.mimetype
        },
      ] : [],
    };

    // Send email to HR/Admin
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Application email sent successfully to:', recipientEmail);
    console.log('Message ID:', info.messageId);

    // Send confirmation email to applicant
    await sendConfirmationEmail(applicationData);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending application email:', error);
    throw error;
  }
};

// Send confirmation email to applicant
const sendConfirmationEmail = async (applicationData) => {
  try {
    const confirmationMailOptions = {
      from: `"Pacer Automation HR Team" <${process.env.EMAIL_USER}>`,
      to: applicationData.email,
      subject: 'Application Received - Pacer Automation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #00BFA5 0%, #1E3A8A 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Application Received ✓</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="color: #1E3A8A; margin-top: 0;">Dear ${applicationData.name},</h2>
            
            <p style="line-height: 1.8; color: #333; font-size: 16px;">
              Thank you for applying for the <strong style="color: #00BFA5;">${applicationData.position}</strong> position at Pacer Automation!
            </p>
            
            <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.6; color: #333;">
                ✓ We have successfully received your application and resume.<br>
                ✓ Our HR team will carefully review your profile.<br>
                ✓ If your qualifications match our requirements, we will contact you within 7-10 business days.
              </p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              In the meantime, feel free to explore more about us at 
              <a href="https://pacerautomation.com" style="color: #00BFA5; text-decoration: none;">pacerautomation.com</a>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px; margin: 5px 0;">
                <strong>Best regards,</strong><br>
                HR Team<br>
                Pacer Automation
              </p>
              <p style="color: #666; font-size: 12px; margin-top: 15px;">
                📧 <a href="mailto:jobs@pacerautomation.com" style="color: #00BFA5;">jobs@pacerautomation.com</a>
              </p>
            </div>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #999; font-size: 11px; margin: 0;">
              This is an automated confirmation email. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);
    console.log('✅ Confirmation email sent to applicant:', applicationData.email);
  } catch (error) {
    console.error('⚠️ Error sending confirmation email:', error);
    // Don't throw error - let the main application submission succeed
  }
};

module.exports = {
  sendApplicationEmail,
};