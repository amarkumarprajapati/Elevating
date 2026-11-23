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
    if (group.every((block) => block.type === 'heading')) {
      result.push({
        kicker: group.length > 1 ? group.slice(0, -1).map((b) => b.text).join(' ') : null,
        title: group.at(-1).text,
        cards: [],
      });
    } else {
      if (!result.length) result.push({ title: '', cards: [] });
      result[result.length - 1].cards.push(group);
    }
  }
  return result;
}

export default function SourcePage({ page, slug }) {
  const isHome = slug === 'home';
  const photos = isHome ? page.groups[0].filter((item) => item.type === 'image') : [];
  const groups = photos.length ? page.groups.slice(1) : page.groups;
  const contentSections = sections(groups);

  if (slug === 'services' && contentSections.length > 1) {
    const [, equipment, ...items] = contentSections;
    equipment.cards = items.map((item) => [{ type: 'text', text: item.title }]);
    contentSections.splice(2);
  }

  const description = groups.flat().find((block) => block.type === 'text')?.text || page.title;

  return (
    <>
      <SeoHead title={page.title} canonicalUrl={page.url} description={description} />

      {/* Hero on home, PageHeader on other pages */}
      {isHome ? <HeroSection /> : <PageHeader title={page.title.split(' – ')[0]} />}

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHome ? (
          <>
            <ProductsSection />
            <ServicesSection section={contentSections[1]} />
            <ContentSection
              section={contentSections.find((sec) => sec.cards.flat().some((b) => b.type === 'form'))}
              title={company.enquiry}
            />
          </>
        ) : (
          contentSections.map((section, i) => {
            if (slug === 'products') return <ProductsSection key={i} />;
            if (slug === 'services' && i === 0) return <ServicesSection key={i} section={section} />;
            return <ContentSection key={i} section={section} />;
          })
        )}
      </div>
    </>
  );
}
