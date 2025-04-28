import fs from 'fs';
import path from 'path';

const subscribersPath = path.join(process.cwd() ,'src', 'data', 'subscribers.json');

export async function saveSubscriber(email) {
  console.log('Chemin du fichier:', subscribersPath);
  
  try {
    if (!fs.existsSync(path.dirname(subscribersPath))) {
      fs.mkdirSync(path.dirname(subscribersPath), { recursive: true });
    }

    let subscribers = [];
    
    if (fs.existsSync(subscribersPath)) {
      const fileData = fs.readFileSync(subscribersPath, 'utf8');
      subscribers = JSON.parse(fileData);
    }

    if (subscribers.includes(email)) {
      console.log('Email déjà existant');
      return;
    }
    console.log(subscribers);
    subscribers.push(email);
    fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
    console.log('Email sauvegardé avec succès');
  } catch (err) {
    console.error('Erreur dans saveSubscriber:', err);
    throw new Error('Erreur lors de la sauvegarde');
  }
}