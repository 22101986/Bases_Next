'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewArticlePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: [],
    tags: []
  });
  const [currentTag, setCurrentTag] = useState('');
  const [currentContent, setCurrentContent] = useState({
    type: 'paragraph',
    text: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
        }),
      });

      if (response.ok) {
        router.push('/blog');
      } else {
        console.error('Erreur lors de la création de l\'article');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleAddContent = () => {
    if (!currentContent.text) return;
    
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, currentContent]
    }));
    setCurrentContent({ type: 'paragraph', text: '' });
  };

  const handleAddTag = () => {
    if (!currentTag) return;
    
    setFormData(prev => ({
      ...prev,
      tags: [...prev.tags, currentTag]
    }));
    setCurrentTag('');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Nouvel Article</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Titre
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Extrait
          </label>
          <textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ajouter un tag"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Ajouter
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium">
                {tag}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    tags: prev.tags.filter((_, i) => i !== index)
                  }))}
                  className="ml-1 text-blue-600 dark:text-blue-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Contenu de l'article
          </label>
          
          <div className="mb-4 space-y-4 border rounded-lg p-4">
            {formData.content.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                {item.type === 'heading' && (
                  <h3 className="text-xl font-bold">{item.text}</h3>
                )}
                {item.type === 'paragraph' && (
                  <p>{item.text}</p>
                )}
                {item.type === 'code' && (
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{item.content}</code>
                    {item.language && <div className="text-right text-xs text-gray-400">{item.language}</div>}
                  </pre>
                )}
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    content: prev.content.filter((_, i) => i !== index)
                  }))}
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Type de contenu
              </label>
              <select
                id="contentType"
                value={currentContent.type}
                onChange={(e) => setCurrentContent({ ...currentContent, type: e.target.value, text: '' })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="paragraph">Paragraphe</option>
                <option value="heading">Titre</option>
                <option value="code">Code</option>
              </select>
            </div>
            
            {currentContent.type === 'code' ? (
              <div>
                <label htmlFor="codeContent" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Code
                </label>
                <textarea
                  id="codeContent"
                  value={currentContent.content || ''}
                  onChange={(e) => setCurrentContent({ ...currentContent, content: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 font-mono"
                  rows={6}
                />
                <input
                  type="text"
                  value={currentContent.language || ''}
                  onChange={(e) => setCurrentContent({ ...currentContent, language: e.target.value })}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Langage (optionnel)"
                />
              </div>
            ) : (
              <div>
                <label htmlFor="textContent" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {currentContent.type === 'heading' ? 'Titre' : 'Texte'}
                </label>
                <textarea
                  id="textContent"
                  value={currentContent.text}
                  onChange={(e) => setCurrentContent({ ...currentContent, text: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
                  rows={currentContent.type === 'heading' ? 2 : 4}
                />
              </div>
            )}
            
            <button
              type="button"
              onClick={handleAddContent}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Ajouter au contenu
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
        >
          Publier l'article
        </button>
      </form>
    </div>
  );
}