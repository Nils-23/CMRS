import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Expect the following environment variables to be set for SMTP auth
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE(optional)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : undefined;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('SMTP environment variables are not fully configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure ?? (smtpPort === 465),
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Website Contact <${smtpUser}>`,
      to: 'info@risingstarminerals.com',
      replyTo: email,
      subject: `[COMRS] ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in contact form handler:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


