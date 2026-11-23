import Link from 'next/link';

export const featuredProducts = [
  {
    title: 'Passenger Elevators',
    description: 'Smooth, whisper-quiet passenger elevators for residential societies, commercial complexes, and retail buildings with energy-saving VFD traction drives.',
    image: '/images/passenger-lift-light-02.png',
    query: 'Passenger Elevator',
    features: ['Machine Room-Less (MRL) options', 'Smooth leveling & ARD emergency rescue', 'Customized cabin stainless steel aesthetics'],
  },
  {
    title: 'Escalators & Moving Walks',
    description: 'High-traffic commercial escalators with synchronized handrails, microprocessor safety interlocks, and energy-saving eco-mode operation.',
    image: '/images/escalator.jpg',
    query: 'Escalators',
    features: ['High transit passenger capacity', 'Heavy-duty step chains & comb lighting', 'Automated fault diagnostics'],
  },
  {
    title: 'Car & Goods Elevators',
    description: 'Heavy-payload vertical lifting systems engineered for multi-level automobile parking, factory loading docks, and warehouse freight handling.',
    image: '/images/car-lift-light-01.png',
    query: 'Car Elevators',
    features: ['Reinforced platform & checker plate flooring', 'Bi-parting automatic heavy doors', 'Capacities up to 5,000 kg+'],
  },
];

export default function ProductsSection() {
  return (
    <section aria-labelledby="featured-products-title" className="py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-3 border-b border-slate-200 gap-2">
        <div>
          <h2 id="featured-products-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Elevator & Lift Solutions
          </h2>
        </div>
        <Link
          href="/products/"
          className="text-xs font-semibold text-purple-700 hover:text-purple-800 transition uppercase tracking-wider"
        >
          View Full Product Catalog →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredProducts.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-500 mb-2">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={{ pathname: '/contact/', query: { product: item.query } }}
                  className="text-xs font-semibold text-purple-700 hover:text-purple-800 transition"
                >
                  Request Technical Quote →
                </Link>
                <span className="text-[11px] text-slate-400">Custom Built</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
