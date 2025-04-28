'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchSubscribersCount = async () => {
      try {
        const response = await fetch('/api/subscribe/count');
        const data = await response.json();
        if (response.ok) {
          setSubscribersCount(data.count);
        }
      } catch (err) {
        console.error('Erreur lors de la récupération du nombre d\'abonnés:', err);
      }
    };

    fetchSubscribersCount();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Envoi de la requête avec email:', data.email);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      console.log('Réponse reçue:', response);
      const result = await response.json();
      console.log('Résultat:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Erreur serveur');
      }

      setIsSubscribed(true);
      // Mettre à jour le nombre d'abonnés après une inscription réussie
      setSubscribersCount(prev => prev + 1);
    } catch (err) {
      console.error('Erreur complète:', err);
      setError(err.message || 'Erreur lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <p className="text-green-700 dark:text-green-300">
          Merci pour votre inscription! Vous recevrez bientôt nos articles.
        </p>
      </div>
    );
  }

  return (
    <div className="card bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6">
      <h3 className="text-xl font-bold mb-3">Abonnez-vous</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {subscribersCount} personnes sont déjà abonnées à notre newsletter.
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <div className="flex">
            <input
              type="email"
              {...register('email', { 
                required: 'Email requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email invalide'
                }
              })}
              placeholder="Votre email"
              className="flex-grow px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              OK
            </button>
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
          {error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}