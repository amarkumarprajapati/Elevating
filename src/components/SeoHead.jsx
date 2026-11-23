import Head from 'next/head';
import siteData from '../data/site.json';

const { website } = siteData;

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/hero.jpg',
  keywords = 'Escalators, Passenger Elevators, Elevating Systems, Home Elevators, Car Elevators, Lift Installation, AMC Elevator Maintenance, Thane, Maharashtra, Intal Elevators',
  schemaType = 'LocalBusiness',
  schemaData = null,
}) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || website.url).replace(/\/$/, '');
  const fullCanonical = canonicalUrl || siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Comprehensive Rich Schema for Google Search, Maps, Knowledge Graph, and AI Answer Engines
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: 'Intal Elevators',
    alternateName: ['Intal Elevators Maharashtra', 'Intal Lifts & Escalators'],
    url: siteUrl,
    logo: `${siteUrl}/images/intal-logo.png`,
    image: fullOgImage,
    telephone: website.contact.phone,
    email: website.contact.email,
    description: description,
    knowsAbout: [
      'Escalators',
      'Passenger Elevators',
      'Car Elevators',
      'Goods Elevators',
      'Stretcher Elevators',
      'Dumbwaiters',
      'Elevator Modernization',
      'Annual Maintenance Contracts (AMC)',
      'PWD Electrical Contracting',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opposite 333, Near chatrapati shivaji school',
      addressLocality: 'Ulhasnagar',
      addressRegion: 'Maharashtra',
      postalCode: '421004',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.2215',
      longitude: '73.1645',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Thane' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      { '@type': 'City', name: 'Kalyan' },
      { '@type': 'City', name: 'Ulhasnagar' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Pen' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elevator & Escalator Products and Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Escalators',
            description: 'Heavy duty commercial and public transit escalators designed for safety, continuous operation and energy efficiency.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Passenger Elevators',
            description: 'High-speed passenger elevator systems engineered for comfort, speed and safety across residential and commercial towers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Annual Maintenance Contract (AMC)',
            description: 'Routine servicing, genuine parts replacement, and 24/7 breakdown assistance.',
          },
        },
      ],
    },
    priceRange: '₹₹₹',
    ...schemaData,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullCanonical} />

      {/* Favicon & Logo for Browser Tabs and Google Search SERP snippets */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/images/icon.png" />

      {/* Google SEO & AI Overviews / Search Crawling Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Ulhasnagar, Thane, Maharashtra" />
      <meta name="geo.position" content="19.2215;73.1645" />
      <meta name="ICBM" content="19.2215, 73.1645" />

      {/* Open Graph Meta */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Intal Elevators" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Intal Elevators & Escalators Maharashtra" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Schema for Google & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
      />
    </Head>
  );
}
