import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { company } from '../data/data.js';

export default function Layout({
  children,
  title = company.name,
  description = company.tagline,
}) {
  const fullTitle = title.includes(company.name) ? title : `${title} – ${company.name}`;

  return (
    <div lang="en-IN" className="antialiased min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/tailwind.css" />
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
