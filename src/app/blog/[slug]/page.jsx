import { notFound } from 'next/navigation';
import Link from 'next/link';

// Simule une base de données d'articles
const articles = {
  "nextjs-14": {
    title: "Maîtrisez Next.js 14",
    date: "15 mai 2024",
    content: [
      {
        type: "paragraph",
        text: "Next.js 14 apporte des améliorations majeures qui révolutionnent le développement web. Voici les fonctionnalités clés :"
      },
      {
        type: "heading",
        text: "1. Server Actions stabilisées"
      },
      {
        type: "paragraph",
        text: "Les Server Actions permettent désormais des mutations de données directement depuis les composants sans créer d'API endpoints manuellement."
      },
      {
        type: "code",
        text: `// Exemple de Server Action
            async function createPost(formData) {
              'use server'
              await db.post.create({
                data: {
                  title: formData.get('title'),
                  content: formData.get('content')
                }
              })
            }`
      },
      {
        type: "heading",
        text: "2. Optimisations du compilateur"
      },
      {
        type: "paragraph",
        text: "Le nouveau compilateur Turbopack (beta) offre des temps de rebuild jusqu'à 76% plus rapides."
      }
    ],
    author: "Jean Dupont",
    tags: ["Next.js", "React", "Frontend"]
  }
};

export default function Article({ params }) {
  const article = articles[params.slug];
  
  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Retour aux articles
        </Link>
      </div>
      
      <header className="mb-12">
        <div className="flex items-center space-x-4 mb-4">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500">
          <span>Par {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {article.content.map((section, index) => (
          <div key={index}>
            {section.type === 'heading' && (
              <h2 className="text-2xl font-bold mt-8 mb-4">{section.text}</h2>
            )}
            {section.type === 'paragraph' && (
              <p className="mb-6 leading-relaxed">{section.text}</p>
            )}
            {section.type === 'code' && (
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                <code>{section.text}</code>
              </pre>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 border-t pt-8">
        <h3 className="text-xl font-bold mb-4">Partager cet article</h3>
        <div className="flex space-x-4">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <span className="sr-only">Twitter</span>
            {/* Icône Twitter */}
          </button>
          {/* Ajoutez d'autres boutons de partage */}
        </div>
      </div>
    </article>
  );
}