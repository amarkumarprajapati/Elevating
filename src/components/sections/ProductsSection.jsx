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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {featuredProducts.map((item, i) => (
          <div key={i} className="flex flex-col group">
            {/* Card image */}
            <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 rounded-sm mb-5">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-slate-900 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 flex-grow">
              {item.description}
            </p>

            {/* Action link */}
            <div>
              <Link
                href={{ pathname: '/contact/', query: { product: item.query } }}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 border-b border-blue-200 hover:border-blue-600 pb-0.5 transition"
              >
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
