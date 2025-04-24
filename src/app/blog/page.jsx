import Link from 'next/link';
import { posts } from '@/data/posts';

export default function BlogList() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Mes Articles
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article 
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            </div>
            
            <div className="p-6">
              <div className="flex gap-2 mb-3 flex-wrap">
                {post.tags?.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {post.excerpt || post.content.substring(0, 100)}...
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                
                <Link
                  href={`/blog/nextjs-14`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
                >
                  Lire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}