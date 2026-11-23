import Block from './ContentBlock';

export default function ServicesSection({ section }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-8">
        {section.kicker && (
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
            {section.kicker}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          {section.title}
        </h2>
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {section.cards.map((card, j) => (
          <details key={j} className="group py-4">
            <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none py-1 hover:text-purple-700 transition">
              <span>{card[0].text}</span>
              <span className="text-xl font-normal text-purple-700 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pt-3 pb-2 text-slate-600 text-sm leading-relaxed max-w-3xl">
              {card.slice(1).map((block, k) => (
                <Block key={k} block={block} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
