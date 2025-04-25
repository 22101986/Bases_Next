export const posts = [
  {
    id: 1,
    slug: 'nextjs-14',
    title: "Next.js 14 : Les Nouveautés Essentielles",
    excerpt: "Découvrez les fonctionnalités révolutionnaires de la dernière version de Next.js",
    date: "2024-05-20",
    tags: ["Next.js", "React", "Performance"],
    content: [
      { type: "heading", text: "Server Actions Stabilisées" },
      { type: "paragraph", text: "Next.js 14 stabilise les Server Actions, permettant d'exécuter du code serveur directement depuis les composants React sans créer manuellement des routes API." },
      { type: "code", language: "javascript", content: `async function createUser(formData) {
  'use server'
  await db.user.create({
    data: {
      email: formData.get('email'),
      name: formData.get('name')
    }
  })
}` },
      { type: "paragraph", text: "Server Actions simplifient la logique côté backend, réduisant la complexité des apps modernes." },
      { type: "heading", text: "Améliorations des Performances" },
      { type: "paragraph", text: "Le compilateur Turbopack (encore en beta) promet des rebuilds jusqu'à 76% plus rapides que Webpack. Cela signifie un meilleur confort de développement et un déploiement accéléré." },
      { type: "heading", text: "Astuce" },
      { type: "paragraph", text: "Préférez Turbopack à Webpack sur vos nouveaux projets pour profiter de meilleurs temps de compilation."}
    ]
  },
  {
    id: 2,
    slug: 'rsc-en-profondeur',
    title: "React Server Components en profondeur",
    excerpt: "Explorez le fonctionnement interne des React Server Components (RSC).",
    date: "2024-05-18",
    tags: ["React", "RSC", "Architecture"],
    content: [
      { type: "heading", text: "Pourquoi les Server Components ?" },
      { type: "paragraph", text: "Ils permettent d’alléger le bundle client et d’accéder aux données directement depuis le serveur sans fetch côté client." },
      { type: "image", src: "/rsc-flow.png", alt: "Flux des Server Components" },
      { type: "code", language: "tsx", content: `'use client'
import React from 'react'
import ServerComponent from './ServerComponent'

export default function Page() {
  return (
    <div>
      <ServerComponent />
    </div>
  )
}` },
      { type: "heading", text: "Interopérabilité Client/Serveur" },
      { type: "paragraph", text: "Vous pouvez combiner des composants serveur et client dans un même arbre, ce qui offre un maximum de flexibilité." },
      { type: "heading", text: "Bonnes pratiques" },
      { type: "paragraph", text: "Utilisez les composants serveur pour tout ce qui est rendu initial basé sur des données, et les composants client pour l’interactivité." }
    ]
  },
  {
    id: 3,
    slug: 'optimisation-nextjs',
    title: "Optimiser les performances avec Next.js",
    excerpt: "Améliorez la vitesse de votre app avec des techniques spécifiques à Next.js.",
    date: "2024-04-02",
    tags: ["Next.js", "Performance", "Optimisation"],
    content: [
      { type: "heading", text: "Image Optimization" },
      { type: "paragraph", text: "Utilisez le composant `<Image>` de Next pour charger des images de manière performante." },
      { type: "code", language: "tsx", content: `<Image src="/hero.jpg" width={800} height={400} alt="Bannière" priority />` },
      { type: "paragraph", text: "Ajoutez l’attribut `blurDataURL` pour améliorer le Largest Contentful Paint." },
      { type: "heading", text: "Turbopack et Compilation" },
      { type: "paragraph", text: "Le nouveau bundler de Next.js, Turbopack, accélère les builds et supporte HMR instantané." },
      { type: "paragraph", text: "Des tests montrent des améliorations de vitesse jusqu’à 76% comparé à Webpack sur de gros projets." }
    ]
  },
  {
    id: 4,
    slug: 'routing-nextjs',
    title: "Maîtriser le Routing App Router de Next.js",
    excerpt: "Un guide complet sur le système de routing moderne avec App Router.",
    date: "2024-03-25",
    tags: ["Next.js", "Routing"],
    content: [
      { type: "heading", text: "Structure basée sur les dossiers" },
      { type: "paragraph", text: "Chaque dossier dans `/app` représente une route, avec support natif pour layouts, templates et loading states." },
      { type: "code", language: "tsx", content: `// app/blog/[slug]/page.tsx
export default function BlogPage({ params }) {
  return <h1>Article : {params.slug}</h1>
}` },
      { type: "heading", text: "Layout persistants" },
      { type: "paragraph", text: "Les layouts permettent de garder certaines parties de l’interface persistantes entre les pages." },
      { type: "heading", text: "Bon à savoir" },
      { type: "paragraph", text: "Utilisez les `loading.js` et `error.js` dans vos routes pour gérer les états transitoires ou erreurs côté UI."}
    ]
  },
  {
    id: 5,
    slug: 'typescript-react-next',
    title: "Utiliser TypeScript efficacement avec Next.js et React",
    excerpt: "Un guide des bonnes pratiques pour le typage dans Next.js.",
    date: "2024-03-01",
    tags: ["TypeScript", "React", "Next.js"],
    content: [
      { type: "heading", text: "Typage des props de composants" },
      { type: "paragraph", text: "Définissez vos interfaces pour les props afin de tirer parti du système de type." },
      { type: "code", language: "typescript", content: `type Props = { title: string }
const Title: React.FC<Props> = ({ title }) => <h1>{title}</h1>` },
      { type: "heading", text: "Typage des fonctions Next" },
      { type: "code", language: "typescript", content: `import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { message: "Hello" } }
}` }, 
{      type: "heading", text: "Astuce TS" },
      { type: "paragraph", text: "Utilisez `zod` pour valider et typer les données entrantes dans vos fonctions serveur." }
    ]
  },
  {
    id: 6,
    slug: 'tailwind-next-integration',
    title: "Tailwind CSS avec Next.js : Setup et bonnes pratiques",
    excerpt: "Intégrez Tailwind dans vos projets Next.js avec efficacité.",
    date: "2024-02-10",
    tags: ["Tailwind", "Next.js", "CSS"],
    content: [
      { type: "heading", text: "Installation rapide" },
      { type: "code", language: "bash", content: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p` },
      { type: "heading", text: "Configuration de base" },
      { type: "code", language: "javascript", content: `// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}` },
      { type: "heading", text: "Bonnes pratiques" },
      { type: "paragraph", text: "Voici quelques bonnes pratiques à suivre :" },
      { type: "paragraph", text: "- Utiliser des classes utilitaires dans les composants" },
      { type: "paragraph", text: "- Éviter le style inline" },
      { type: "paragraph", text: "- Tirer parti des variantes responsive et dark mode" },
      { type: "heading", text: "Composants Tailwind" },
      { type: "paragraph", text: "Créez des composants réutilisables comme `Button`, `Card`, etc. avec des classes prédéfinies pour plus de cohérence." }
    ]
  }
];
