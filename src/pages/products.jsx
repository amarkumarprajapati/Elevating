import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import PageHeader from '../components/PageHeader';
import siteData from '../helper/site.json';

const { pages, website } = siteData;
const { products } = pages;

const allProducts = [...products.elevators, ...products.escalators];

const getImageForProduct = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('passenger')) return '/images/passenger.jpg';
  if (lower.includes('car')) return '/images/car.jpg';
  if (lower.includes('escalator')) return '/images/escalator.jpg';
  return '/images/hero.jpg';
};

export default function Products() {
  return (
    <>
      <SeoHead
        title="Products – Escalators & Elevating Solutions | Intal Elevators Maharashtra"
        description="Explore Intal Elevators passenger elevators, escalators, car elevators, and industrial goods lifts engineered for safety, speed, and comfort in Maharashtra."
        canonicalUrl={products.url}
        keywords="Escalators, Passenger Elevators, Home Elevators, Car Elevators, Goods Elevators, Stretcher Elevators, Dumbwaiters, Intal Elevators"
      />

      <PageHeader
        title={products.title.split('–')[0].trim()}
      />

      {/* Main Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-2xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-navy-950">
                    <span className="absolute top-4 left-4 z-10 text-xs font-bold text-gold-400 bg-navy-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/30">
                      Solution {String(idx + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={getImageForProduct(item.name)}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display text-2xl font-black text-navy-950 tracking-tight mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                      <span>Quality &amp; Safety Compliance Standard</span>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <Link
                    href={`/contact/?product=${encodeURIComponent(item.name)}`}
                    className="btn-navy w-full text-xs sm:text-sm py-3 px-4 justify-between"
                  >
                    <span>Request Quotation</span>
                    <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Custom Configuration Banner */}
      <section className="py-14 bg-navy-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Need a custom dimension or architectural specification?</h3>
            <p className="text-sm text-slate-400">Our engineering consultants design solutions tailored to your building blueprints.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact/" className="btn-primary-gold text-sm py-3 px-6">
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
