// src/app/api/contact/route.js
import nodemailer from "nodemailer";
import { saveContactForm } from "@/lib/firebaseService";

export async function POST(req) {
  try {
    const { firstName, lastName, phone, email, message, attachments } = await req.json();

    if (!firstName || !email) {
      return new Response(JSON.stringify({ success: false, message: "Missing required fields" }), { status: 400 });
    }

    // Save to Firestore with attachments info
    try {
      const formData = {
        firstName,
        lastName,
        phone,
        email,
        message,
        attachments: attachments || [],
        submittedAt: new Date().toISOString()
      };
      
      await saveContactForm(formData);
    } catch (error) {
      console.error("❌ Error saving to Firestore:", error);
      // Continue with email sending even if Firestore save fails
    }

    // ✅ Set up NodeMailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format attachments for email
    let attachmentsHtml = '';
    if (attachments && attachments.length > 0) {
      attachmentsHtml = `
        <h3>Attachments:</h3>
        <ul>
          ${attachments.map(file => `
            <li>
              <a href="${file.url}" target="_blank">${file.name}</a> 
              (${file.type.split('/')[1]}, ${(file.size / 1024).toFixed(1)} KB)
            </li>
          `).join('')}
        </ul>
      `;
    }

    // ✅ Send Confirmation Email to User
    await transporter.sendMail({
      from: `"GLC Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting GLC",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #cc5803;">Thank You for Contacting GLC</h1>
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
          <p>Here's a summary of your inquiry:</p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
            ${attachments && attachments.length > 0 ? `<li><strong>Attachments:</strong> ${attachments.length} file(s)</li>` : ''}
          </ul>
          <p>Best Regards,<br>GLC Team</p>
        </div>
      `,
    });

    // ✅ Send Notification Email to Internal Recipients
    await transporter.sendMail({
      from: `"GLC Support" <${process.env.SMTP_USER}>`,
      to: process.env.INTERNAL_RECIPIENTS,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #cc5803;">New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          ${attachmentsHtml}
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Form submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error("❌ Error Processing Form:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to process your request." }), { status: 500 });
  }
}

// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { firstName, lastName, phone, email, message } = await req.json();

//     if (!firstName || !email || !message) {
//       return new Response(JSON.stringify({ success: false, message: "Missing required fields" }), { status: 400 });
//     }

//     // ✅ Set up NodeMailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // ✅ Send Confirmation Email to User
//     await transporter.sendMail({
//       from: `"GLC Support" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: "Thank You for Contacting GLC",
//       text: `Dear ${firstName},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest Regards,\nGLC Team`,
//     });

//     // ✅ Send Notification Email to Internal Recipients
//     await transporter.sendMail({
//       from: `"GLC Support" <${process.env.SMTP_USER}>`,
//       to: process.env.INTERNAL_RECIPIENTS,
//       subject: "New Contact Form Submission",
//       text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     });

//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
//   } catch (error) {
//     console.error("❌ Error Sending Email:", error);
//     return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), { status: 500 });
//   }
// }
