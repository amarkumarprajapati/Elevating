import Link from 'next/link';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { productsPage } from '../data/data.js';

const allProducts = [
  ...productsPage.elevators.map((p) => ({ ...p, category: 'Elevator' })),
  ...productsPage.escalators.map((p) => ({ ...p, category: 'Escalator' })),
];

function getProductImage(name) {
  const lower = name.toLowerCase();
  if (lower.includes('passenger')) return '/images/passenger-lift-light-02.png';
  if (lower.includes('car')) return '/images/car-lift-light-01.png';
  if (lower.includes('escalator')) return '/images/escalator.jpg';
  if (lower.includes('home')) return '/images/source/2020/11/aditya-chinchure-FRrI46igcqs-unsplash-1024x694-1.jpg';
  if (lower.includes('goods')) return '/images/source/2020/11/robert-v-ruggiero-BG-iyXjJiLs-unsplash-1024x683-1.jpg';
  if (lower.includes('stretcher')) return '/images/source/2020/11/simon-rae-3NM3XQ7h1WQ-unsplash-1024x768-1.jpg';
  return '/images/source/2020/11/bruno-kelzer-dendZhhfkTc-unsplash-1024x683-1.jpg';
}

function formatTitle(text) {
  const cleaned = text.replace(/^\d+[\.\s]+/, '');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export default function Products() {
  return (
    <Layout title={productsPage.title} description="Explore Intal Elevators complete catalog of elevator and escalator solutions.">
      <PageHeader title="Products" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {allProducts.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 rounded-sm mb-4">
                <img
                  src={getProductImage(item.name)}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">
                {item.category}
              </span>

              <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                {formatTitle(item.name)}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>

              <div>
                <Link
                  href={{ pathname: '/contact/', query: { product: item.name } }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 border-b border-blue-200 hover:border-blue-600 pb-0.5 transition"
                >
                  <span>Learn more</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
