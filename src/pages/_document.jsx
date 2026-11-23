import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="stylesheet" href="/tailwind.css" />
      </Head>
      <body className="bg-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
