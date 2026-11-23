import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PartnersSection from './sections/PartnersSection';
import { company } from '../data/data.js';

export default function Layout({
  children,
  title = company.name,
  description = company.tagline,
  showPartners = true,
}) {
  const fullTitle = title.includes(company.name) ? title : `${title} – ${company.name}`;
  const siteUrl = 'https://intalelevators.com';

  return (
    <div lang="en-IN" className="antialiased min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/tailwind.css" />
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6d28d9" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: company.name,
              description: company.tagline,
              telephone: company.phone,
              email: company.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Opposite 333, Near Chatrapati Shivaji School',
                addressLocality: 'Ulhasnagar',
                addressRegion: 'Maharashtra',
                postalCode: '421004',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </Head>

      <Header />

      <main className="flex-grow">{children}</main>

      {showPartners && <PartnersSection />}

      <Footer />
    </div>
  );
}
