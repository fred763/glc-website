import nodemailer from "nodemailer";
import { saveAuctionRegistration } from "@/lib/firebaseService";

export async function POST(req) {
  try {
    const formData = await req.json();
    const { firstName, lastName, phone, email } = formData;

    if (!firstName || !lastName || !phone || !email) {
      return new Response(JSON.stringify({ success: false, message: "Missing required fields" }), { status: 400 });
    }

    // Save to Firestore
    try {
      const registrationData = {
        ...formData,
        submittedAt: new Date().toISOString()
      };
      
      await saveAuctionRegistration(registrationData);
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

    // Format interests for email
    const interests = formData.interestedIn || [];
    const interestsHtml = interests.length > 0 
      ? `<p><strong>Interests:</strong> ${interests.join(', ')}</p>` 
      : '<p><strong>Interests:</strong> None specified</p>';

    // ✅ Send Confirmation Email to User
    await transporter.sendMail({
      from: `"GLC Auctions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Auction Registration Confirmation - Global Liquidation Company",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #cc5803;">Thank You for Registering for GLC Auctions</h1>
          <p>Dear ${firstName},</p>
          <p>Thank you for registering for our upcoming auctions. We have added you to our notification list and will keep you informed about future events.</p>
          <p>Here's a summary of your registration:</p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Preferred Contact Method:</strong> ${formData.preferredContact || 'Email'}</li>
            <li><strong>Interests:</strong> ${interests.length > 0 ? interests.join(', ') : 'None specified'}</li>
          </ul>
          <p>If you have any questions or need to update your preferences, please contact us.</p>
          <p>Best Regards,<br>GLC Auctions Team</p>
        </div>
      `,
    });

    // ✅ Send Notification Email to Internal Recipients
    await transporter.sendMail({
      from: `"GLC Auctions" <${process.env.SMTP_USER}>`,
      to: process.env.INTERNAL_RECIPIENTS,
      subject: "New Auction Registration",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #cc5803;">New Auction Registration</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${interestsHtml}
          <p><strong>Preferred Contact:</strong> ${formData.preferredContact || 'Email'}</p>
          <p><strong>Address:</strong> ${formData.address ? `${formData.address}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}` : 'Not provided'}</p>
          <p><strong>Additional Information:</strong> ${formData.additionalInfo || 'None provided'}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Registration submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error("❌ Error Processing Registration:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to process your registration." }), { status: 500 });
  }
}