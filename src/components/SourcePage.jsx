import SeoHead from './SeoHead';
import PageHeader from './PageHeader';
import HeroSection from './sections/HeroSection';
import ProductsSection from './sections/ProductsSection';
import ServicesSection from './sections/ServicesSection';
import ContentSection from './sections/ContentSection';
import { company } from '../data/data.js';

function sections(groups) {
  const result = [];
  for (const group of groups) {
    if (group.every(block => block.type === 'heading')) {
      result.push({ kicker: group.length > 1 ? group.slice(0, -1).map(block => block.text).join(' ') : null, title: group.at(-1).text, cards: [] });
    } else {
      if (!result.length) result.push({ title: '', cards: [] });
      result[result.length - 1].cards.push(group);
    }
  }
  return result;
}

const layouts = {
  'about-us': ['story', 'team'],
  contact: ['contact'],
  'hello-world': ['article'],
};

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
  return (
    <>
      <SeoHead title={page.title} canonicalUrl={page.url} description={description} />
      {photos.length ? <HeroSection images={photos} /> : <PageHeader title={page.title.split(' – ')[0]} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHome ? (
          <>
            <ProductsSection section={contentSections[0]} featured />
            <ServicesSection section={contentSections[1]} />
            <ContentSection section={contentSections.find(section => section.cards.flat().some(block => block.type === 'form'))} layout="enquiry" title={company.enquiry} />
          </>
        ) : contentSections.map((section, i) => {
          if (slug === 'products') return <ProductsSection key={i} section={section} />;
          if (slug === 'services' && i === 0) return <ServicesSection key={i} section={section} />;
          return <ContentSection key={i} section={section} layout={layouts[slug]?.[i] || 'equipment'} />;
        })}
      </div>
    </>
  );
}
