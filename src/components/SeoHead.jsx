import Head from 'next/head';
import { company as website } from '../data/data.js';

export default function SeoHead({ title, description, canonicalUrl }) {
  const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || canonicalUrl).origin;
  const canonical = new URL(new URL(canonicalUrl).pathname, origin).href;
  const image = new URL(website.hero, origin).href;
  const schema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: website.name, url: origin, logo: new URL(website.logo, origin).href,
    telephone: website.phone, email: website.email, description, image,
  };
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
  </Head>;
}
