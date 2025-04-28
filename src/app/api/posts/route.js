import { posts } from '@/data/posts';
import { writeFileSync } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const newPost = await request.json();
    
    const newId = Math.max(...posts.map(p => p.id), 0) + 1;
    
    const slug = newPost.title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    
    const fullPost = {
      ...newPost,
      id: newId,
      slug,
      date: new Date().toISOString().split('T')[0]
    };
    
    posts.push(fullPost);
    
    if (process.env.NODE_ENV === 'development') {
      const filePath = path.join(process.cwd(), 'src', 'data', 'posts.js');
      const content = `export const posts = ${JSON.stringify(posts, null, 2)};`;
      writeFileSync(filePath, content);
    }
    
    return new Response(JSON.stringify(fullPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Erreur lors de la création' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}