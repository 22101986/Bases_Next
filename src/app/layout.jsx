import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}