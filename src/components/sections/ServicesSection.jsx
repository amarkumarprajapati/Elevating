import Block from './ContentBlock';

export default function ServicesSection({ section }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mb-10">
        {section.kicker && (
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            {section.kicker}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          {section.title}
        </h2>
      </div>

      <div className="space-y-1">
        {section.cards.map((card, j) => (
          <details key={j} className="group rounded-xl border border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50/50 transition-all duration-200">
            <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none px-6 py-5 hover:text-brand-700 transition-colors duration-200">
              <span className="text-sm sm:text-base">{card[0].text}</span>
              <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-lg font-normal transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed max-w-3xl">
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
