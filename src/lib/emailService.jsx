import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendNewArticleNotification(article, subscribers) {
  try {
    const mailOptions = {
      from: `"Votre Blog Technique" <${process.env.EMAIL_USER}>`,
      subject: `Nouvel article: ${article.title}`,
      text: `Bonjour,\n\nUn nouvel article a été publié: "${article.title}".\n\n${article.excerpt}\n\nLire l'article: ${article.url}\n\nPour vous désabonner, cliquez ici: ${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Nouvel article: ${article.title}</h1>
          <p>Bonjour,</p>
          <p>Un nouvel article a été publié sur notre blog technique:</p>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h2 style="margin-top: 0;">${article.title}</h2>
            <p>${article.excerpt}</p>
          </div>
          
          <a href="${article.url}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 15px 0;">
            Lire l'article complet
          </a>
          
          <p style="font-size: 0.8em; color: #6b7280;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe" style="color: #6b7280;">
              Se désabonner
            </a>
          </p>
        </div>
      `,
    };

    const activeSubscribers = subscribers.filter(sub => sub.isActive);
    for (const subscriber of activeSubscribers) {
      await transporter.sendMail({
        ...mailOptions,
        to: subscriber.email,
      });
      console.log(`Notification envoyée à ${subscriber.email}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    throw error;
  }
}