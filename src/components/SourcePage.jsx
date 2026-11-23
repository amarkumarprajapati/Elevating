import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SeoHead from './SeoHead';
import PageHeader from './PageHeader';
import PartnerStrip from './PartnerStrip';
import website from '../data/company.json';

const route = name => website.navigation.find(item => item.href === '/' + name + '/')?.href;
const label = name => website.navigation.find(item => item.href === route(name))?.label;

function GalleryHero({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <section className="gallery-hero">
      <div className="gallery-layout">
        <div className="gallery-intro">
          <h1>{website.name}</h1>
          <p>{website.tagline}</p>
          <div className="gallery-links">
            <Link href={route('products')} className="btn-primary">{label('products')}</Link>
            <Link href={route('services')} className="secondary-action">{label('services')}</Link>
          </div>
        </div>
        <div className="gallery-visual">
          <img key={images[index].src} className="gallery-photo" src={images[index].src} alt={images[index].alt} fetchPriority="high" />
          {images.length > 1 && <div className="gallery-picker" role="group" aria-label="Photo gallery">
            {images.map((image, i) => <button key={image.src} type="button" aria-label={`Show photo ${i + 1} of ${images.length}`} aria-pressed={i === index} onClick={() => setIndex(i)}>
              <img src={image.src} alt="" />
            </button>)}
          </div>}
        </div>
      </div>
    </section>
  );
}

function Enquiry({ block }) {
  const { query } = useRouter();
  function compose(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = block.fields.map(field => field.label + ': ' + fields.get(field.name)).join('\n');
    window.location.href = 'mailto:' + website.email + '?subject=' + encodeURIComponent(website.enquiry) + '&body=' + encodeURIComponent(body);
  }
  return <form onSubmit={compose} className="space-y-4">
    {block.fields.map(field => <label key={field.name} className="block text-sm font-semibold">{field.label}
      <input className="mt-1 block w-full rounded-md border border-slate-300 p-3" type={field.type} name={field.name} required={field.required} defaultValue={field.name.includes('message') && typeof query.product === 'string' ? query.product : ''} />
    </label>)}
    <button className="btn-primary">{block.submit} via email</button>
  </form>;
}

function Block({ block }) {
  if (block.type === 'image') return <img className="import-photo" loading="lazy" src={block.src} alt={block.alt} />;
  if (block.type === 'map') return <iframe title="Location map" loading="lazy" src={block.src} className="w-full h-72" />;
  if (block.type === 'heading') return <h3>{block.text}</h3>;
  if (block.type === 'form') return <Enquiry block={block} />;
  return <p>{block.text}</p>;
}

function sections(groups) {
  const result = [];
  for (const group of groups) {
    if (group.every(block => block.type === 'heading')) result.push({ kicker: group.length > 1 ? group.slice(0, -1).map(block => block.text).join(' ') : null, title: group.at(-1).text, cards: [] });
    else {
      if (!result.length) result.push({ title: '', cards: [] });
      result[result.length - 1].cards.push(group);
    }
  }
  return result;
}

const layouts = {
  home: ['featured-products', 'services', 'testimonials', 'projects', 'projects', 'enquiry', 'faq', 'partners'],
  'about-us': ['story', 'team'],
  products: ['catalogue', 'catalogue'],
  services: ['services'],
  contact: ['contact'],
  'hello-world': ['article'],
};

function ContentSection({ section, layout }) {
  const { cards } = section;
  if (layout === 'partners') return <PartnerStrip title={section.title} logos={cards.flat().filter(block => block.type === 'image')} />;
  const disclosure = layout === 'services' || layout === 'faq';
  const projectImage = layout === 'projects' && cards[0]?.find(block => block.type === 'image');
  const title = layout === 'enquiry' ? website.enquiry : section.title || (layout === 'featured-products' && label('products'));
  return <section className={`source-section layout-${layout} ${layout === 'featured-products' ? layout : ''}`}>
    {title && <header className="section-heading">
      {section.kicker && <p>{section.kicker.toLowerCase()}</p>}
      <h2>{title === title.toUpperCase() ? title.toLowerCase() : title}</h2>
    </header>}
    {projectImage && <img className="project-cover" src={projectImage.src} alt={projectImage.alt} loading="lazy" />}
    {disclosure ? <div className="service-list">{cards.map((card, j) => <details key={j}>
      <summary>{card[0].text}</summary>
      {card.slice(1).map((block, k) => <Block key={k} block={block} />)}
    </details>)}</div> : <div className="source-grid">{cards.map((card, j) => (
      <div className="source-card" key={j}>
        {card.map((block, k) => projectImage && block.src === projectImage.src ? null : <Block key={k} block={block} />)}
        {layout === 'catalogue' && <Link className="catalog-link" href={{ pathname: route('contact'), query: { product: card[0].text } }}>{website.enquiry}</Link>}
      </div>
    ))}</div>}
  </section>;
}

export default function SourcePage({ page, slug }) {
  const isHome = slug === 'home';
  const photos = isHome ? page.groups[0].filter(item => item.type === 'image') : [];
  const groups = photos.length ? page.groups.slice(1) : page.groups;
  const contentSections = sections(groups);
  if (slug === 'services' && contentSections.length > 1) {
    const [, equipment, ...items] = contentSections;
    equipment.cards = items.map(item => [{ type: 'text', text: item.title }]);
    contentSections.splice(2);
  }
  const description = groups.flat().find(block => block.type === 'text')?.text || page.title;
  return <>
    <SeoHead title={page.title} canonicalUrl={page.url} description={description} />
    {photos.length ? <GalleryHero images={photos} /> : <PageHeader title={page.title.split(' – ')[0]} />}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {contentSections.map((section, i) => <ContentSection key={i} section={section} layout={layouts[slug]?.[i] || 'equipment'} />)}
    </div>
  </>;
}
