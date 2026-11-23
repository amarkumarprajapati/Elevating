import { SectionHeading } from './ContentSection';
import Block from './ContentBlock';

export default function ServicesSection({ section }) {
  return (
    <section className="source-section layout-services">
      <SectionHeading title={section.title} kicker={section.kicker} />
      <div className="service-list">
      {section.cards.map((card, j) => (
        <details key={j}>
          <summary>{card[0].text}</summary>
          {card.slice(1).map((block, k) => <Block key={k} block={block} />)}
        </details>
      ))}
    </div>
    </section>
  );
}
