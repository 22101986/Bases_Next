export const posts = [
  {
    "id": 1,
    "slug": "nextjs-14",
    "title": "Next.js 14 : Les Nouveautés Essentielles",
    "excerpt": "Découvrez les fonctionnalités révolutionnaires de la dernière version de Next.js",
    "date": "2024-05-20",
    "tags": [
      "Next.js",
      "React",
      "Performance"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Server Actions Stabilisées"
      },
      {
        "type": "paragraph",
        "text": "Next.js 14 stabilise les Server Actions, permettant d'exécuter du code serveur directement depuis les composants React sans créer manuellement des routes API."
      },
      {
        "type": "code",
        "language": "javascript",
        "content": "async function createUser(formData) {\n  'use server'\n  await db.user.create({\n    data: {\n      email: formData.get('email'),\n      name: formData.get('name')\n    }\n  })\n}"
      },
      {
        "type": "paragraph",
        "text": "Server Actions simplifient la logique côté backend, réduisant la complexité des apps modernes."
      },
      {
        "type": "heading",
        "text": "Améliorations des Performances"
      },
      {
        "type": "paragraph",
        "text": "Le compilateur Turbopack (encore en beta) promet des rebuilds jusqu'à 76% plus rapides que Webpack. Cela signifie un meilleur confort de développement et un déploiement accéléré."
      },
      {
        "type": "heading",
        "text": "Astuce"
      },
      {
        "type": "paragraph",
        "text": "Préférez Turbopack à Webpack sur vos nouveaux projets pour profiter de meilleurs temps de compilation."
      }
    ]
  },
  {
    "id": 2,
    "slug": "rsc-en-profondeur",
    "title": "React Server Components en profondeur",
    "excerpt": "Explorez le fonctionnement interne des React Server Components (RSC).",
    "date": "2024-05-18",
    "tags": [
      "React",
      "RSC",
      "Architecture"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Pourquoi les Server Components ?"
      },
      {
        "type": "paragraph",
        "text": "Ils permettent d’alléger le bundle client et d’accéder aux données directement depuis le serveur sans fetch côté client."
      },
      {
        "type": "image",
        "src": "/rsc-flow.png",
        "alt": "Flux des Server Components"
      },
      {
        "type": "code",
        "language": "tsx",
        "content": "'use client'\nimport React from 'react'\nimport ServerComponent from './ServerComponent'\n\nexport default function Page() {\n  return (\n    <div>\n      <ServerComponent />\n    </div>\n  )\n}"
      },
      {
        "type": "heading",
        "text": "Interopérabilité Client/Serveur"
      },
      {
        "type": "paragraph",
        "text": "Vous pouvez combiner des composants serveur et client dans un même arbre, ce qui offre un maximum de flexibilité."
      },
      {
        "type": "heading",
        "text": "Bonnes pratiques"
      },
      {
        "type": "paragraph",
        "text": "Utilisez les composants serveur pour tout ce qui est rendu initial basé sur des données, et les composants client pour l’interactivité."
      }
    ]
  },
  {
    "id": 3,
    "slug": "optimisation-nextjs",
    "title": "Optimiser les performances avec Next.js",
    "excerpt": "Améliorez la vitesse de votre app avec des techniques spécifiques à Next.js.",
    "date": "2024-04-02",
    "tags": [
      "Next.js",
      "Performance",
      "Optimisation"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Image Optimization"
      },
      {
        "type": "paragraph",
        "text": "Utilisez le composant `<Image>` de Next pour charger des images de manière performante."
      },
      {
        "type": "code",
        "language": "tsx",
        "content": "<Image src=\"/hero.jpg\" width={800} height={400} alt=\"Bannière\" priority />"
      },
      {
        "type": "paragraph",
        "text": "Ajoutez l’attribut `blurDataURL` pour améliorer le Largest Contentful Paint."
      },
      {
        "type": "heading",
        "text": "Turbopack et Compilation"
      },
      {
        "type": "paragraph",
        "text": "Le nouveau bundler de Next.js, Turbopack, accélère les builds et supporte HMR instantané."
      },
      {
        "type": "paragraph",
        "text": "Des tests montrent des améliorations de vitesse jusqu’à 76% comparé à Webpack sur de gros projets."
      }
    ]
  },
  {
    "id": 4,
    "slug": "routing-nextjs",
    "title": "Maîtriser le Routing App Router de Next.js",
    "excerpt": "Un guide complet sur le système de routing moderne avec App Router.",
    "date": "2024-03-25",
    "tags": [
      "Next.js",
      "Routing"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Structure basée sur les dossiers"
      },
      {
        "type": "paragraph",
        "text": "Chaque dossier dans `/app` représente une route, avec support natif pour layouts, templates et loading states."
      },
      {
        "type": "code",
        "language": "tsx",
        "content": "// app/blog/[slug]/page.tsx\nexport default function BlogPage({ params }) {\n  return <h1>Article : {params.slug}</h1>\n}"
      },
      {
        "type": "heading",
        "text": "Layout persistants"
      },
      {
        "type": "paragraph",
        "text": "Les layouts permettent de garder certaines parties de l’interface persistantes entre les pages."
      },
      {
        "type": "heading",
        "text": "Bon à savoir"
      },
      {
        "type": "paragraph",
        "text": "Utilisez les `loading.js` et `error.js` dans vos routes pour gérer les états transitoires ou erreurs côté UI."
      }
    ]
  },
  {
    "id": 5,
    "slug": "typescript-react-next",
    "title": "Utiliser TypeScript efficacement avec Next.js et React",
    "excerpt": "Un guide des bonnes pratiques pour le typage dans Next.js.",
    "date": "2024-03-01",
    "tags": [
      "TypeScript",
      "React",
      "Next.js"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Typage des props de composants"
      },
      {
        "type": "paragraph",
        "text": "Définissez vos interfaces pour les props afin de tirer parti du système de type."
      },
      {
        "type": "code",
        "language": "typescript",
        "content": "type Props = { title: string }\nconst Title: React.FC<Props> = ({ title }) => <h1>{title}</h1>"
      },
      {
        "type": "heading",
        "text": "Typage des fonctions Next"
      },
      {
        "type": "code",
        "language": "typescript",
        "content": "import { GetServerSideProps } from 'next'\n\nexport const getServerSideProps: GetServerSideProps = async () => {\n  return { props: { message: \"Hello\" } }\n}"
      },
      {
        "type": "heading",
        "text": "Astuce TS"
      },
      {
        "type": "paragraph",
        "text": "Utilisez `zod` pour valider et typer les données entrantes dans vos fonctions serveur."
      }
    ]
  },
  {
    "id": 6,
    "slug": "tailwind-next-integration",
    "title": "Tailwind CSS avec Next.js : Setup et bonnes pratiques",
    "excerpt": "Intégrez Tailwind dans vos projets Next.js avec efficacité.",
    "date": "2024-02-10",
    "tags": [
      "Tailwind",
      "Next.js",
      "CSS"
    ],
    "content": [
      {
        "type": "heading",
        "text": "Installation rapide"
      },
      {
        "type": "code",
        "language": "bash",
        "content": "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"
      },
      {
        "type": "heading",
        "text": "Configuration de base"
      },
      {
        "type": "code",
        "language": "javascript",
        "content": "// tailwind.config.js\nmodule.exports = {\n  content: [\"./app/**/*.{js,ts,jsx,tsx}\"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}"
      },
      {
        "type": "heading",
        "text": "Bonnes pratiques"
      },
      {
        "type": "paragraph",
        "text": "Voici quelques bonnes pratiques à suivre :"
      },
      {
        "type": "paragraph",
        "text": "- Utiliser des classes utilitaires dans les composants"
      },
      {
        "type": "paragraph",
        "text": "- Éviter le style inline"
      },
      {
        "type": "paragraph",
        "text": "- Tirer parti des variantes responsive et dark mode"
      },
      {
        "type": "heading",
        "text": "Composants Tailwind"
      },
      {
        "type": "paragraph",
        "text": "Créez des composants réutilisables comme `Button`, `Card`, etc. avec des classes prédéfinies pour plus de cohérence."
      }
    ]
  },
  {
    "title": "Comment créer des mises en page et des pages",
    "excerpt": "Comment créer des mises en page et des pages",
    "content": [
      {
        "type": "paragraph",
        "text": "Next.js utilise un routage basé sur un système de fichiers , ce qui signifie que vous pouvez utiliser des dossiers et des fichiers pour définir des itinéraires. Cette page vous guidera dans la création de mises en page et de pages, ainsi que dans l'établissement de liens entre elles."
      },
      {
        "type": "heading",
        "text": "Créer une page\n"
      },
      {
        "type": "paragraph",
        "text": "Une page est une interface utilisateur affichée selon un chemin spécifique. Pour créer une page, ajoutez un pagefichier dans le apprépertoire et exportez par défaut un composant React. Par exemple, pour créer une page d'index ( /)"
      },
      {
        "type": "code",
        "content": "export default function Page() {\n  return <h1>Hello Next.js!</h1>\n}",
        "language": "Typescript"
      }
    ],
    "tags": [
      "nouveau"
    ],
    "date": "2025-04-26",
    "id": 7,
    "slug": "comment-crer-des-mises-en-page-et-des-pages"
  },
  {
    "title": "REACT",
    "excerpt": "REACT",
    "content": [
      {
        "type": "heading",
        "text": "Démarrage rapide"
      },
      {
        "type": "paragraph",
        "text": "Bienvenue dans la documentation React ! Cette page vous présente 80 % des concepts React que vous utiliserez au quotidien."
      },
      {
        "type": "heading",
        "text": "Création et imbrication de composants"
      },
      {
        "type": "paragraph",
        "text": "Les applications React sont composées de composants . Un composant est un élément de l'interface utilisateur (UI) possédant sa propre logique et son apparence. Un composant peut être aussi petit qu'un bouton ou aussi grand qu'une page entière.\n\nLes composants React sont des fonctions JavaScript qui renvoient du balisage :"
      },
      {
        "type": "code",
        "content": "function MyButton() {\n  return (\n    <button>I'm a button</button>\n  );\n}",
        "language": "js"
      },
      {
        "type": "paragraph",
        "text": "Maintenant que vous avez déclaré MyButton, vous pouvez l'imbriquer dans un autre composant :"
      },
      {
        "type": "code",
        "content": "export default function MyApp() {\n  return (\n    <div>\n      <h1>Welcome to my app</h1>\n      <MyButton />\n    </div>\n  );\n}",
        "language": "js"
      },
      {
        "type": "paragraph",
        "text": "Notez que le nom <MyButton />commence par une majuscule. C'est ainsi que vous savez qu'il s'agit d'un composant React. Les noms de composants React doivent toujours commencer par une majuscule, tandis que les balises HTML doivent être en minuscules."
      }
    ],
    "tags": [
      "nouveau ",
      "REACT"
    ],
    "date": "2025-04-26",
    "id": 8,
    "slug": "react"
  },
  {
    "title": "Next.js (routeur d'applications)",
    "excerpt": "Next.js (routeur d'applications)",
    "content": [
      {
        "type": "paragraph",
        "text": "App Router de Next.js est un framework React qui tire pleinement parti de l'architecture de React pour permettre des applications React full-stack."
      },
      {
        "type": "code",
        "content": "npx create-next-app@latest",
        "language": "bash"
      },
      {
        "type": "paragraph",
        "text": "Next.js est maintenu par Vercel . Vous pouvez déployer une application Next.js sur n'importe quel hébergeur prenant en charge les conteneurs Node.js ou Docker, ou sur votre propre serveur. Next.js prend également en charge l'exportation statique , qui ne nécessite pas de serveur."
      }
    ],
    "tags": [],
    "date": "2025-04-26",
    "id": 9,
    "slug": "nextjs-routeur-dapplications"
  },
  {
    "title": "Comment utiliser les outils de débogage avec Next.js",
    "excerpt": "Comment utiliser les outils de débogage avec Next.js",
    "content": [
      {
        "type": "paragraph",
        "text": "Cette documentation explique comment vous pouvez déboguer votre code frontend et backend Next.js avec une prise en charge complète des cartes sources à l'aide du débogueur VS Code.Outils de développement Chrome, ou Firefox DevTools.\n\nTout débogueur compatible avec Node.js peut également être utilisé pour déboguer une application Next.js. Pour plus de détails, consultez le Guide de débogage Node.js.."
      },
      {
        "type": "heading",
        "text": "Débogage avec VS Code"
      },
      {
        "type": "paragraph",
        "text": "Créez un fichier nommé .vscode/launch.jsonà la racine de votre projet avec le contenu suivant :"
      },
      {
        "type": "code",
        "content": "{\n  \"version\": \"0.2.0\",\n  \"configurations\": [\n    {\n      \"name\": \"Next.js: debug server-side\",\n      \"type\": \"node-terminal\",\n      \"request\": \"launch\",\n      \"command\": \"npm run dev\"\n    },\n    {\n      \"name\": \"Next.js: debug client-side\",\n      \"type\": \"chrome\",\n      \"request\": \"launch\",\n      \"url\": \"http://localhost:3000\"\n    },\n    {\n      \"name\": \"Next.js: debug client-side (Firefox)\",\n      \"type\": \"firefox\",\n      \"request\": \"launch\",\n      \"url\": \"http://localhost:3000\",\n      \"reAttach\": true,\n      \"pathMappings\": [\n        {\n          \"url\": \"webpack://_N_E\",\n          \"path\": \"${workspaceFolder}\"\n        }\n      ]\n    },\n    {\n      \"name\": \"Next.js: debug full stack\",\n      \"type\": \"node\",\n      \"request\": \"launch\",\n      \"program\": \"${workspaceFolder}/node_modules/next/dist/bin/next\",\n      \"runtimeArgs\": [\"--inspect\"],\n      \"skipFiles\": [\"<node_internals>/**\"],\n      \"serverReadyAction\": {\n        \"action\": \"debugWithEdge\",\n        \"killOnServerStop\": true,\n        \"pattern\": \"- Local:.+(https?://.+)\",\n        \"uriFormat\": \"%s\",\n        \"webRoot\": \"${workspaceFolder}\"\n      }\n    }\n  ]\n}",
        "language": "json"
      },
      {
        "type": "paragraph",
        "text": "Remarque : pour utiliser le débogage Firefox dans VS Code, vous devez installer l' extension Firefox Debugger.\n\nnpm run devpeut être remplacé par yarn devsi vous utilisez Yarn ou pnpm devsi vous utilisez pnpm.\n\nDans la configuration « Next.js : debug full stack », serverReadyAction.actionspécifiez le navigateur à ouvrir lorsque le serveur est prêt. debugWithEdgeCela signifie lancer le navigateur Edge. Si vous utilisez Chrome, définissez cette valeur sur debugWithChrome.\n\nSi vous modifiez le numéro de port sur lequel votre application démarre, remplacez le 3000in http://localhost:3000par le port que vous utilisez à la place.\n\nSi vous exécutez Next.js depuis un répertoire autre que la racine (par exemple, si vous utilisez Turborepo), vous devez ajouter cwddes tâches de débogage côté serveur et de la pile complète. Par exemple, \"cwd\": \"${workspaceFolder}/apps/web\".\n\nAccédez maintenant au panneau Débogage ( Ctrl+Shift+Dsur Windows/Linux, ⇧+⌘+Dsur macOS), sélectionnez une configuration de lancement, puis appuyez F5ou sélectionnez Débogage : Démarrer le débogage dans la palette de commandes pour démarrer votre session de débogage.\n\n"
      },
      {
        "type": "heading",
        "text": "Utilisation du débogueur dans Jetbrains WebStorm\n"
      },
      {
        "type": "paragraph",
        "text": "Cliquez sur le menu déroulant de la configuration d'exécution, puis cliquez sur Edit Configurations.... Créez une JavaScript Debugconfiguration de débogage avec http://localhost:3000l'URL . Personnalisez-la à votre convenance (par exemple, navigateur pour le débogage, stockage en tant que fichier projet), puis cliquez sur OK. Exécutez cette configuration de débogage ; le navigateur sélectionné devrait s'ouvrir automatiquement. À ce stade, vous devriez avoir deux applications en mode débogage : l'application nœud NextJS et l'application client/navigateur."
      },
      {
        "type": "heading",
        "text": "Débogage avec les DevTools du navigateur"
      },
      {
        "type": "heading",
        "text": "\nCode côté client"
      },
      {
        "type": "paragraph",
        "text": "Démarrez votre serveur de développement comme d'habitude en exécutant next dev, npm run dev, ou yarn dev. Une fois le serveur démarré, ouvrez http://localhost:3000(ou votre URL alternative) dans votre navigateur préféré.\n\nPour Chrome :\n\nOuvrez les outils de développement de Chrome ( Ctrl+Shift+Jsur Windows/Linux, ⌥+⌘+Isur macOS)\nAccédez à l' onglet Sources\nPour Firefox :\n\nOuvrez les outils de développement de Firefox ( Ctrl+Shift+Isur Windows/Linux, ⌥+⌘+Isur macOS)\nAccédez à l' onglet Débogueur\nDans l'un ou l'autre navigateur, chaque fois que votre code côté client atteint undebuggerL'exécution du code sera interrompue et le fichier correspondant apparaîtra dans la zone de débogage. Vous pouvez également rechercher des fichiers pour définir manuellement des points d'arrêt :\n\nDans Chrome : appuyez Ctrl+Psur Windows/Linux ou ⌘+Psur macOS\nDans Firefox : appuyez Ctrl+Psur Windows/Linux ou ⌘+Psur macOS, ou utilisez l’arborescence des fichiers dans le panneau de gauche\nNotez que lors de la recherche, vos fichiers sources auront des chemins commençant par webpack://_N_E/./.\n\n"
      },
      {
        "type": "heading",
        "text": "Code côté serveur\n"
      },
      {
        "type": "paragraph",
        "text": "Pour déboguer le code Next.js côté serveur avec les DevTools du navigateur, vous devez passer le--inspectdrapeau au processus Node.js sous-jacent :"
      },
      {
        "type": "code",
        "content": "NODE_OPTIONS='--inspect' next dev",
        "language": "_>Terminal"
      },
      {
        "type": "paragraph",
        "text": "Bon à savoir : utilisez-le NODE_OPTIONS='--inspect=0.0.0.0'pour autoriser l'accès au débogage à distance en dehors de localhost, par exemple lors de l'exécution de l'application dans un conteneur Docker.\n\nSi vous utilisez npm run devou yarn devalors vous devez mettre à jour le devscript sur votre package.json:"
      },
      {
        "type": "code",
        "content": "{\n  \"scripts\": {\n    \"dev\": \"NODE_OPTIONS='--inspect' next dev\"\n  }\n}",
        "language": "json"
      },
      {
        "type": "paragraph",
        "text": "Le lancement du serveur de développement Next.js avec l' --inspectindicateur ressemblera à ceci :"
      },
      {
        "type": "code",
        "content": "Debugger listening on ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95\nFor help, see: https://nodejs.org/en/docs/inspector\nready - started server on 0.0.0.0:3000, url: http://localhost:3000",
        "language": "_>terminal"
      },
      {
        "type": "paragraph",
        "text": "Pour Chrome :\n\nOuvrez un nouvel onglet et visitezchrome://inspect\nCliquez sur Configurer... pour vous assurer que les deux ports de débogage sont répertoriés\nAjoutez les deux localhost:9229et localhost:9230s'ils ne sont pas déjà présents\nRecherchez votre application Next.js dans la section Cible distante\nCliquez sur Inspecter pour ouvrir une fenêtre DevTools distincte\nAccédez à l' onglet Sources\nPour Firefox :\n\nOuvrez un nouvel onglet et visitezabout:debugging\nCliquez sur ce Firefox dans la barre latérale gauche\nSous Cibles distantes , recherchez votre application Next.js\nCliquez sur Inspecter pour ouvrir le débogueur\nAccédez à l' onglet Débogueur\nLe débogage du code côté serveur fonctionne de la même manière que le débogage côté client. Lors de la recherche de fichiers ( Ctrl+P/ ⌘+P), vos fichiers sources auront des chemins commençant par webpack://{application-name}/./(où {application-name}sera remplacé par le nom de votre application, selon votre package.jsonfichier)."
      }
    ],
    "tags": [
      "Next.js ",
      "débogage"
    ],
    "date": "2025-04-27",
    "id": 10,
    "slug": "comment-utiliser-les-outils-de-dbogage-avec-nextjs"
  }
];