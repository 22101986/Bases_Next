import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const subscribersPath = path.join(process.cwd(), 'src', 'data', 'subscribers.json');

export async function GET() {
  try {
    let subscribers = [];
    if (fs.existsSync(subscribersPath)) {
      const fileData = fs.readFileSync(subscribersPath, 'utf8');
      subscribers = JSON.parse(fileData);
    }
    return NextResponse.json({ count: subscribers.length }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre d\'abonnés:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}