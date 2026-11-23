import Block from './ContentBlock';

export function SectionHeading({ title, kicker }) {
  if (!title) return null;
  return (
    <header className="section-heading">
      {kicker && <p className="kicker-label">{kicker}</p>}
      <div className="header-text-group"><h2>{title}</h2></div>
    </header>
  );
}


export default function ContentSection({ section, layout, title = section.title }) {
  return (
    <section className={`source-section layout-${layout}`}>
      <SectionHeading title={title} kicker={section.kicker} />
      <div className="source-grid">
        {section.cards.map((card, i) => (
          <div className="source-card" key={i}>
            {card.map((block, j) => <Block key={j} block={block} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
