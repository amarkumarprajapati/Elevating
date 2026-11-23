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
  const cleaned = text.replace(/^\d+[.\s]+/, '');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export default function Products() {
  return (
    <Layout title={productsPage.title} description="Explore Intal Elevators complete catalog of elevator and escalator solutions.">
      <PageHeader title="Products" description="Discover our complete range of elevator and escalator solutions designed for every building type." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {allProducts.map((item, idx) => (
            <div key={idx} className="flex flex-col group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={getProductImage(item.name)}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-full self-start mb-3">
                  {item.category}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2">
                  {formatTitle(item.name)}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                  {item.description}
                </p>

                <div>
                  <Link
                    href={{ pathname: '/contact/', query: { product: item.name } }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors duration-200 group/link"
                  >
                    <span>Get a quote</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
