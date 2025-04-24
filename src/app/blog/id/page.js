import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';

export default function Post({ params }) {
  const post = posts.find(p => p.id === Number(params.id));
  
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <p>{post.content}</p>
    </article>
  );
}