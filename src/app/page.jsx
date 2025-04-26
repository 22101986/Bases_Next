import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Bienvenue</span> sur mon blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez des articles techniques sur Next.js, React et le développement web moderne.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Carte Article Vedette */}
          <div className="card group">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                Nouveau
              </span>
              <h3 className="text-xl font-bold mb-2">Maîtrisez Next.js 14</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Apprenez les nouvelles fonctionnalités de la dernière version.
              </p>
              <Link 
                href="/blog/nextjs-14" 
                className="btn-primary inline-flex items-center"
              >
                Lire l'article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/blog" 
            className="btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            Explorer tous les articles
            <svg className="w-5 h-5 ml-3 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}