import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="bg-gray-200 dark antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
