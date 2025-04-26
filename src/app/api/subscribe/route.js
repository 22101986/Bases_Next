import { NextResponse } from 'next/server';
import { saveSubscriber } from '@/lib/newsletter';

export async function POST(request) {
  console.log('Requête reçue');
  try {
    const { email } = await request.json();
    console.log('Email reçu:', email);

    if (!email || !email.includes('@')) {
      console.log('Email invalide:', email);
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    console.log('Tentative de sauvegarde...');
    await saveSubscriber(email);
    console.log('Sauvegarde réussie');

    return NextResponse.json(
      { message: 'Inscription réussie!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur dans l\'API:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}