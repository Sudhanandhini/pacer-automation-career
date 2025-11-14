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

// Send application email with resume attachment
const sendApplicationEmail = async (applicationData, resumeFile) => {
  try {
    const mailOptions = {
      from: `"Pacer Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'support@sunsys.in',
      subject: `New Job Application - ${applicationData.position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00BFA5;">New Job Application Received</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1E3A8A;">Applicant Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 40%;">Full Name:</td>
                <td style="padding: 8px 0;">${applicationData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;">${applicationData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;">${applicationData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Position:</td>
                <td style="padding: 8px 0;">${applicationData.position}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Qualification:</td>
                <td style="padding: 8px 0;">${applicationData.qualification}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Experience:</td>
                <td style="padding: 8px 0;">${applicationData.experience}</td>
              </tr>
            </table>
          </div>
          
          ${applicationData.message ? `
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00BFA5; margin: 20px 0;">
              <h4 style="margin-top: 0;">Additional Message:</h4>
              <p style="margin-bottom: 0; line-height: 1.6;">${applicationData.message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              <strong>Resume attached:</strong> ${resumeFile ? resumeFile.originalname : 'No file'}
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 10px;">
              This application was submitted through the Pacer Automation career page.
            </p>
          </div>
        </div>
      `,
      attachments: resumeFile ? [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
        },
      ] : [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  sendApplicationEmail,
};
