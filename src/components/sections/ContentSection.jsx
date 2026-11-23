import Block from './ContentBlock';

export default function ContentSection({ section, title = section?.title }) {
  if (!section) return null;

  return (
    <section className="py-12 sm:py-16 border-t border-slate-200">
      {title && (
        <div className="mb-8">
          {section.kicker && (
            <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
              {section.kicker}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.cards.map((card, i) => (
          <div key={i} className="flex flex-col bg-white">
            {card.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
