import { posts } from '@/data/posts';

export async function POST(request) {
  try {
    const newPost = await request.json();
    
    // Générer un nouvel ID
    const newId = Math.max(...posts.map(p => p.id)) + 1;
    
    // Créer le slug à partir du titre
    const slug = newPost.title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    
    const fullPost = {
      ...newPost,
      id: newId,
      slug
    };
    
    posts.push(fullPost);
    
    return new Response(JSON.stringify(fullPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur lors de la création' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}