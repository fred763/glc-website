import dotenv from "dotenv";
dotenv.config(); // ✅ Ensures environment variables are loaded

import nodemailer from "nodemailer";

const testEmail = async () => {
  console.log("📧 SMTP_USER:", process.env.SMTP_USER);
  console.log("🔑 SMTP_PASS:", process.env.SMTP_PASS);

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("❌ SMTP credentials are missing!");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"GLC Support" <${process.env.SMTP_USER}>`,
      to: "your-email@gmail.com",
      subject: "Test Email",
      text: "Hello! This is a test email from NodeMailer.",
    });

    console.log("✅ Test Email Sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error Sending Test Email:", error);
  }
};

testEmail();
