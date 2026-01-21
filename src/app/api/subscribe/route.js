// src/app/api/subscribe/route.js
import nodemailer from "nodemailer";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

export async function POST(req) {
  try {
    const { email, subscriptionType } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ success: false, message: "Email is required" }), { status: 400 });
    }

    // Save to Firestore
    try {
      const db = getFirestore(getApp());
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        subscriptionType: subscriptionType || 'auctions',
        subscribedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("❌ Error saving to Firestore:", error);
      // Continue with email sending even if Firestore save fails
    }

    // Set up NodeMailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send confirmation email to the subscriber
    await transporter.sendMail({
      from: `"GLC Auctions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Subscribing to GLC Auction Updates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #cc5803;">Thank You for Subscribing!</h1>
          <p>Dear Valued Customer,</p>
          <p>Thank you for subscribing to Global Liquidation Company's auction updates. You'll now be among the first to hear about our upcoming auctions and exclusive liquidation events.</p>
          <p>We look forward to sharing our exceptional collection of art, antiques, and rare rugs with you.</p>
          <p>Best Regards,<br>The GLC Team</p>
        </div>
      `,
    });

    // Send notification email to internal team
    await transporter.sendMail({
      from: `"GLC Website" <${process.env.SMTP_USER}>`,
      to: process.env.INTERNAL_RECIPIENTS,
      subject: "New Auction Updates Subscriber",
      text: `New subscriber for auction updates: ${email}`,
    });

    return new Response(JSON.stringify({ success: true, message: "Subscription successful!" }), { status: 200 });
  } catch (error) {
    console.error("❌ Error Processing Subscription:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to process your subscription." }), { status: 500 });
  }
}