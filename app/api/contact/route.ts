import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botField } = body;

    // Honeypot check
    if (botField) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // You can change this to a verified domain if you have one
      to: 'apehendurance2@gmail.com', // As seen in ContactSection.tsx
      subject: subject || `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
