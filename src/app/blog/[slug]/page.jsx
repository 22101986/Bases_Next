import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import Image from 'next/image';

export default function ArticlePage({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-12">
        <div className="flex gap-2 mb-4">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        
        <div className="text-gray-500 dark:text-gray-400 mb-8">
          Publié le {new Date(post.date).toLocaleDateString('fr-FR')}
        </div>
      </header>

      <div className="space-y-6">
        {post.content.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return (
                <h2 
                  key={index} 
                  className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200"
                >
                  {section.text}
                </h2>
              );
              
            case 'paragraph':
              return (
                <p 
                  key={index} 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {section.text}
                </p>
              );
              
            case 'code':
              return (
                <div key={index} className="my-6">
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{section.content}</code>
                  </pre>
                  {section.language && (
                    <div className="text-right mt-1 text-xs text-gray-500">
                      {section.language}
                    </div>
                  )}
                </div>
              );
              
            case 'image':
              return (
                <div key={index} className="my-8">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                      src={section.src}
                      alt={section.alt || 'Image illustrative'}
                      fill
                      className="object-contain"
                      sizes="(max-width: 600px) 80vw, 600px"
                      priority={index === 0}
                    />
                  </div>
                  {section.alt && (
                    <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      {section.alt}
                    </p>
                  )}
                </div>
              );
              
            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                  {section.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );
              
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug
  }));
}