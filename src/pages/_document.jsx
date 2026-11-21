import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="stylesheet" href="/tailwind.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cabinet+Grotesk:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-gold-500 selection:text-navy-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
