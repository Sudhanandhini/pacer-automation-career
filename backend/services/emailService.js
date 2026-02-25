// emailservice.js
// -----------------------------------------------------
//  Gmail OAuth2 Email Service for Pacer Automation
//  Complete Production-Ready Rewrite
// -----------------------------------------------------

const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// -----------------------------------------------------
// 1. Setup OAuth2 Client
// -----------------------------------------------------
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// -----------------------------------------------------
// 2. Send via Gmail HTTP API (bypasses cPanel SMTP proxy)
// -----------------------------------------------------
async function sendViaGmailAPI(mailOptions) {
  // Build raw MIME using nodemailer stream transport (no SMTP connection)
  const builder = nodemailer.createTransport({ streamTransport: true, newline: "unix", buffer: true });
  const info = await builder.sendMail(mailOptions);
  const rawMime = info.message.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  const result = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: rawMime },
  });
  return result.data;
}

// -----------------------------------------------------
// 3. Main Job Application Email (sent to HR)
// -----------------------------------------------------
async function sendApplicationEmail(applicationData, resumeFile) {
  try {
    const result = await sendViaGmailAPI({
      from: `"Pacer Careers Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "pacerautomationcareer@gmail.com",
      replyTo: applicationData.email,
      subject: `New Job Application - ${applicationData.position}`,
      html: generateApplicationHTML(applicationData, resumeFile),
      attachments: resumeFile
        ? [{ filename: resumeFile.originalname, content: resumeFile.buffer, contentType: resumeFile.mimetype }]
        : [],
    });

    console.log("✅ Application email sent to HR");
    console.log("Message ID:", result.id);

    // non-blocking confirmation email
    sendConfirmationEmail(applicationData).catch((e) =>
      console.error("⚠ Confirmation email failed:", e.message)
    );

    return { success: true, messageId: result.id };
  } catch (error) {
    console.error("❌ Error sending application email:", error.message);
    throw error;
  }
}

// -----------------------------------------------------
// 4. Confirmation Email (sent to applicant)
// -----------------------------------------------------
async function sendConfirmationEmail(applicationData) {
  try {
    await sendViaGmailAPI({
      from: `"Pacer Automation HR Team" <${process.env.EMAIL_USER}>`,
      to: applicationData.email,
      subject: "Application Received - Pacer Automation",
      html: generateConfirmationHTML(applicationData),
    });

    console.log("✅ Confirmation email sent to applicant");
  } catch (error) {
    console.error("⚠ Error sending confirmation email:", error.message);
  }
}

// -----------------------------------------------------
// 5. EMAIL HTML TEMPLATES
// -----------------------------------------------------

function generateApplicationHTML(applicationData, resumeFile) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; padding:20px;">
      <div style="background: linear-gradient(135deg,#00BFA5,#1E3A8A); padding:30px; border-radius:10px 10px 0 0;">
        <h1 style="color:white; margin:0;">New Job Application</h1>
      </div>

      <div style="background:white; padding:30px; border:1px solid #e0e0e0;">
        <h2 style="color:#1E3A8A;">${applicationData.position}</h2>

        <div style="padding:20px; background:#f8f9fa; border-radius:8px;">
          <h3 style="margin-top:0; color:#1E3A8A;">Applicant Details</h3>
          <table style="width:100%">
            <tr><td><b>Name:</b></td><td>${applicationData.name}</td></tr>
            <tr><td><b>Email:</b></td><td>${applicationData.email}</td></tr>
            <tr><td><b>Phone:</b></td><td>${applicationData.phone}</td></tr>
            <tr><td><b>Qualification:</b></td><td>${applicationData.qualification}</td></tr>
            <tr><td><b>Experience:</b></td><td>${applicationData.experience}</td></tr>
          </table>
        </div>

        ${
          applicationData.message
            ? `
          <div style="background:#e8f5e9; padding:20px; border-left:4px solid #00BFA5; margin-top:20px;">
            <h4 style="margin-top:0; color:#1E3A8A;">Message:</h4>
            <p>${applicationData.message}</p>
          </div>`
            : ""
        }

        <div style="background:#fff3cd; padding:15px; margin-top:20px;">
          <b>Resume Attached:</b> ${
            resumeFile ? resumeFile.originalname : "No File"
          }
        </div>
      </div>

      <div style="background:#f5f5f5; padding:15px; text-align:center;">
        <p style="font-size:12px; color:#777;">
          Submitted on ${new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          })} IST
        </p>
      </div>
    </div>
  `;
}

function generateConfirmationHTML(applicationData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; padding:20px;">
      <div style="background: linear-gradient(135deg,#00BFA5,#1E3A8A); padding:30px; border-radius:10px 10px 0 0; text-align:center;">
        <h1 style="color:white;">Application Received ✓</h1>
      </div>

      <div style="background:white; padding:30px; border:1px solid #e0e0e0;">
        <h2 style="color:#1E3A8A;">Dear ${applicationData.name},</h2>
        <p>Thank you for applying for the <b>${applicationData.position}</b> role at Pacer Automation!</p>

        <div style="background:#e8f5e9; padding:20px; border-radius:8px;">
          <p>
            • We have received your application<br>
            • Our HR team will review your profile<br>
            • If shortlisted, we will contact you within 7–10 business days
          </p>
        </div>

        <p>Visit our website:  
        <a href="https://pacerautomation.com" style="color:#00BFA5;">pacerautomation.com</a>
        </p>

        <p style="margin-top:30px; font-size:14px; color:#666;">
          Best Regards,<br>
          HR Team — Pacer Automation
        </p>
      </div>

      <div style="background:#f5f5f5; padding:15px; text-align:center;">
        <p style="font-size:11px; color:#999;">This is an automated email, please do not reply.</p>
      </div>
    </div>
  `;
}

// -----------------------------------------------------
// 6. Export
// -----------------------------------------------------
module.exports = {
  sendApplicationEmail,
};