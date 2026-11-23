import Link from 'next/link';
import Block from './ContentBlock';
import { company as website } from '../../data/data.js';

function getProductImage(headingText) {
  const lower = headingText.toLowerCase();
  if (lower.includes('passenger') || lower.includes('passanger')) return '/images/passenger.jpg';
  if (lower.includes('car')) return '/images/car.jpg';
  if (lower.includes('escalator')) return '/images/escalator.jpg';
  if (lower.includes('home')) return '/images/source/2020/11/aditya-chinchure-FRrI46igcqs-unsplash-1024x694-1.jpg';
  if (lower.includes('goods')) return '/images/source/2020/11/robert-v-ruggiero-BG-iyXjJiLs-unsplash-1024x683-1.jpg';
  if (lower.includes('stretcher')) return '/images/source/2020/11/simon-rae-3NM3XQ7h1WQ-unsplash-1024x768-1.jpg';
  if (lower.includes('dumb') || lower.includes('waiter')) return '/images/source/2020/11/bruno-kelzer-dendZhhfkTc-unsplash-1024x683-1.jpg';
  return '/images/hero.jpg';
}

export default function ProductsSection({ section, featured = false }) {
  const contact = website.navigation.find(item => item.href === '/contact/')?.href;
  return (
    <section className={featured ? 'source-section layout-featured-products featured-products' : 'source-section layout-catalogue'}>
      <header className="products-header">
        <p className="kicker-label">What we offer</p>
        <div className="header-text-group">
          <h2>Explore our new building solutions</h2>
          <p className="section-subtext">We have solutions for every project type, building scale, and use case – from affordable residential to the world’s most ambitious structures. All built with connectivity and sustainability at their core.</p>
        </div>
      </header>
      <div className="source-grid">
        {section.cards.map((card, i) => {
          const heading = card.find(block => block.type === 'heading');
          const needsImage = heading && !card.some(block => block.type === 'image');
          return (
            <div className="source-card" key={i}>
              {needsImage && <img className="import-photo" loading="lazy" src={getProductImage(heading.text)} alt="" />}
              {card.map((block, j) => <Block key={j} block={block} />)}
              <Link className="catalog-link" href={{ pathname: contact, query: { product: heading?.text || card[0].text } }}>Learn more</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
