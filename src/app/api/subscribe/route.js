import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();
    

    if (!global.subscribers) global.subscribers = [];
    global.subscribers.push(email);

    await resend.emails.send({
      from: 'h.pierrache@gmail.com',
      to: email,
      subject: 'Confirmation d\'abonnement',
      html: `<p>Merci de votre abonnement ! Vous recevrez nos prochains articles.</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}