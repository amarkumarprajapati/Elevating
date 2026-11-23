import Link from 'next/link';

export const featuredProducts = [
  {
    title: 'Elevators',
    description: 'Passenger and goods elevators for every building type – with built-in connectivity and energy-efficient operation as standard.',
    image: '/images/passenger-lift-light-02.png',
    query: 'Elevators',
  },
  {
    title: 'Escalators and moving walks',
    description: 'Eco-efficient and connected escalators for retail, transit, and public environments – designed to reduce energy use, maximize uptime, and deliver smarter people flow.',
    image: '/images/escalator.jpg',
    query: 'Escalators and moving walks',
  },
  {
    title: 'Major projects',
    description: "Expert solutions for the world's most complex and ambitious construction projects.",
    image: '/images/source/2020/11/robert-v-ruggiero-BG-iyXjJiLs-unsplash-1024x683-1.jpg',
    query: 'Major projects',
  },
];

export default function ProductsSection() {
  return (
    <section aria-labelledby="featured-products-title" className="py-16 sm:py-20 lg:py-24">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">OUR SOLUTIONS</p>
        <h2 id="featured-products-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Products and project solutions
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {featuredProducts.map((item, i) => (
          <div key={i} className="flex flex-col group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Image */}
            <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <div>
                <Link
                  href={{ pathname: '/contact/', query: { product: item.query } }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors duration-200 group/link"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
