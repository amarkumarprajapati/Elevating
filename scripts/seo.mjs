import fs from 'node:fs';
import env from '@next/env';

const { loadEnvConfig } = env;
loadEnvConfig(process.cwd());

const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://intalelevators.com').origin;

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about-us/', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/', priority: '0.9', changefreq: 'weekly' },
  { path: '/awards-and-certificates/', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.9', changefreq: 'monthly' },
];

const today = new Date().toISOString().split('T')[0];

const urls = routes.map((item) => `  <url>
    <loc>${origin}${item.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemapXml);

const robotsTxt = `User-agent: *
Allow: /

# Sitemaps for Google Indexing
Sitemap: ${origin}/sitemap.xml
`;

fs.writeFileSync('public/robots.txt', robotsTxt);
console.log('✓ Google SEO sitemap.xml and robots.txt successfully generated.');
