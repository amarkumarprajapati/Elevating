import Link from 'next/link';
import Layout from '../components/Layout';
import {
  Users,
  Car,
  Bed,
  Home,
  Boxes,
  UtensilsCrossed,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

const PRODUCTS_DATA = {
  title: 'Products – Intal Elevators',
  elevators: [
    {
      name: 'PASSENGER ELEVATOR',
      description: 'Engineered for smooth vertical transportation in residential societies, commercial complexes, and retail spaces with energy-efficient traction systems.',
    },
    {
      name: 'HOME ELEVATORS',
      description: 'Compact, quiet, and luxury home lift solutions customized for bungalows, villas, and duplex apartments requiring minimal pit and headroom.',
    },
    {
      name: 'CAR ELEVATORS',
      description: 'Heavy-duty vehicle elevators with reinforced platforms, dual-side access, and automated leveling systems for multi-level car parks and showrooms.',
    },
    {
      name: 'GOODS ELEVATORS',
      description: 'Robust freight elevators built for factories, warehouses, and industrial units, engineered to handle heavy payloads with reliable durability.',
    },
    {
      name: 'STRETCHER ELEVATORS',
      description: 'Hygienic, smooth-ride hospital lifts designed with spacious cabins for medical stretchers, wheelchairs, and critical emergency patient transport.',
    },
    {
      name: 'DUMB WAITERS',
      description: 'Small food and goods service lifts for restaurants, hotels, hospitals, and residences to transport dishes, documents, and lightweight items quickly.',
    },
  ],
  escalators: [
    {
      name: 'ESCALATORS',
      description: 'High-traffic commercial escalators with synchronized handrails, safety sensor interlocks, and energy-saving frequency drives for malls and transit hubs.',
    },
  ],
};

function getProductIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes('passenger')) return Users;
  if (lower.includes('car')) return Car;
  if (lower.includes('stretcher')) return Bed;
  if (lower.includes('home')) return Home;
  if (lower.includes('goods')) return Boxes;
  if (lower.includes('dumb')) return UtensilsCrossed;
  if (lower.includes('escalator')) return ArrowUpRight;
  return Users;
}

function ProductCard({ product }) {
  const Icon = getProductIcon(product.name);

  return (
    <div className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition">
      <div>
        <div className="w-12 h-12 mb-4 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
          <Icon className="w-6 h-6 stroke-[1.8]" />
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">
          {product.name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {product.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <Link
          href={{ pathname: '/contact/', query: { product: product.name } }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800 transition"
        >
          <span>Get Specifications & Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Layout title={PRODUCTS_DATA.title} description="Explore Intal Elevators complete catalog of elevator and escalator solutions in Maharashtra.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        {/* Page Heading */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">CATALOG</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Elevators & Vertical Transportation
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl">
            Customizable elevator solutions for residential societies, commercial high-rises, healthcare centers, and industrial facilities.
          </p>
        </div>

        {/* Elevators */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Elevator Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.elevators.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </section>

        {/* Escalators */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Escalators & Moving Walks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.escalators.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
