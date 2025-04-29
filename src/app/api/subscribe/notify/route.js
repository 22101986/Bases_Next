import { NextResponse } from 'next/server';
import { subscribers } from '@/lib/newsletter';
import { sendNewArticleNotification } from '@/lib/emailService';

export async function POST(request) {
  try {
    const { articleTitle, articleExcerpt, articleUrl } = await request.json();

    // Envoyer les notifications
    await sendNewArticleNotification({
      title: articleTitle,
      excerpt: articleExcerpt,
      url: articleUrl
    }, subscribers);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur dans l\'API de notification:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'envoi des notifications' },
      { status: 500 }
    );
  }
}