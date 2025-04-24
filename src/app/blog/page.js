import { posts } from '@/data/posts';
import Link from 'next/link';

export default function Blog() {
  return (
    <section>
      <h2>Articles récents</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}