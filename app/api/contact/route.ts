import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Mail sunucusu eski SSL kullanıyor — legacy renegotiation'a izin ver
        rejectUnauthorized: false,
        ciphers: "SSLv3",
        secureOptions:
          crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
          crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
        minVersion: "TLSv1" as any,
      },
    });

    // Email to company (notification)
    await transporter.sendMail({
      from: `"Rasyatek Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || "info@rasyatek.com",
      replyTo: email,
      subject: `[Web İletişim] ${subject || "Yeni Talep"} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0060aa, #00b4d8); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Yeni İletişim Formu</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">rasyatek.com web sitesinden gönderildi</p>
          </div>
          <div style="background: #f8fafc; padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; width: 120px; vertical-align: top;">Ad / Firma</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; vertical-align: top;">E-posta</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b;"><a href="mailto:${escapeHtml(email)}" style="color: #0060aa;">${escapeHtml(email)}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; vertical-align: top;">Telefon</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b;">${escapeHtml(phone)}</td>
              </tr>` : ""}
              ${subject ? `
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; vertical-align: top;">Talep Türü</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b;">${escapeHtml(subject)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; vertical-align: top;">Mesaj</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1e293b; white-space: pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Rasyatek Mühendislik" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Talebinizi aldık - Rasyatek Mühendislik",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0060aa, #00b4d8); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Talebiniz Alındı</h1>
          </div>
          <div style="background: #fff; padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 14px; color: #334155; line-height: 1.6;">
              Sayın <strong>${escapeHtml(name)}</strong>,
            </p>
            <p style="font-size: 14px; color: #334155; line-height: 1.6;">
              İletişim formunuz başarıyla tarafımıza ulaşmıştır. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8;">
              Bu e-posta, rasyatek.com web sitesindeki iletişim formunuz üzerine otomatik olarak gönderilmiştir.
            </p>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 8px;">
              Rasyatek Mühendislik Yatırım Ltd. Şti.<br/>
              Tel: +90 (553) 770 91 20<br/>
              E-posta: info@rasyatek.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
