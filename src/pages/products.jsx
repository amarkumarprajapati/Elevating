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
  MoveRight,
} from 'lucide-react';

const PRODUCTS_DATA = {
  title: 'Products – Intal Elevators',
  elevators: [
    {
      name: 'PASSENGER ELEVATOR',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
    {
      name: 'HOME ELEVATORS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
    {
      name: 'CAR ELEVATORS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
    {
      name: 'GOODS ELEVATORS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
    {
      name: 'STRETCHER ELEVATORS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
    {
      name: 'DUMB WAITERS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
  ],
  escalators: [
    {
      name: 'ESCALATORS',
      description: 'Intal Elevators is formed by group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
    },
  ],
};

function getProductIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes('passenger')) {
    return {
      Icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    };
  }
  if (lower.includes('car')) {
    return {
      Icon: Car,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
    };
  }
  if (lower.includes('stretcher')) {
    return {
      Icon: Bed,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100',
    };
  }
  if (lower.includes('home')) {
    return {
      Icon: Home,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
    };
  }
  if (lower.includes('goods')) {
    return {
      Icon: Boxes,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
    };
  }
  if (lower.includes('dumb')) {
    return {
      Icon: UtensilsCrossed,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
    };
  }
  if (lower.includes('escalator')) {
    return {
      Icon: ArrowUpRight,
      color: 'text-brand-600',
      bgColor: 'bg-brand-50',
      borderColor: 'border-brand-100',
    };
  }
  return {
    Icon: Users,
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    borderColor: 'border-brand-100',
  };
}

function ProductCard({ product }) {
  const { Icon, color, bgColor, borderColor } = getProductIcon(product.name);

  return (
    <div className="group flex flex-col justify-between">
      <div>
        {/* Package Icon Container */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 mb-5 rounded-2xl flex items-center justify-center ${bgColor} border ${borderColor} shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}
        >
          <Icon className={`w-8 h-8 sm:w-9 sm:h-9 ${color} stroke-[1.8]`} />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 mb-2 group-hover:text-brand-700 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {product.description}
        </p>
      </div>

      {/* Link */}
      <div>
        <Link
          href={{ pathname: '/contact/', query: { product: product.name } }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors duration-200 group/link"
        >
          <span>Get a quote</span>
          <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Layout title={PRODUCTS_DATA.title} description="Explore Intal Elevators complete catalog of elevator and escalator solutions.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-16">
        {/* Elevators Section */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">OUR</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Elevators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {PRODUCTS_DATA.elevators.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </section>

        {/* Escalators Section */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">OUR</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Escalator
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {PRODUCTS_DATA.escalators.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
