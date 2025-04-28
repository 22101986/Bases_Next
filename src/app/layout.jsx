import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="container mx-auto px-6 py-4 flex justify-end">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}