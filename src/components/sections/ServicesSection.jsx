import Link from 'next/link';
import {
  Zap,
  Package,
  Users,
  Building2,
  CalendarCheck,
  FileBadge,
  Headphones,
  Award,
  HardHat,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const serviceIconsMap = {
  'ELECTRICAL CONTRACTORS': { Icon: Zap, accent: 'text-amber-500 bg-amber-50 border-amber-100' },
  'SUPPLY OF LIFT COMPONENTS': { Icon: Package, accent: 'text-blue-500 bg-blue-50 border-blue-100' },
  'ELECTRICAL ASSISTANTS': { Icon: Users, accent: 'text-indigo-500 bg-indigo-50 border-indigo-100' },
  'INSTALLATIONS OF NEW LIFTS': { Icon: Building2, accent: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
  'ANNUAL MAINTENANCE CONTRACTS': { Icon: CalendarCheck, accent: 'text-purple-500 bg-purple-50 border-purple-100' },
  'PWD LICENCE WORK': { Icon: FileBadge, accent: 'text-rose-500 bg-rose-50 border-rose-100' },
  'TECHNICAL CONSULTATIONS': { Icon: Headphones, accent: 'text-cyan-500 bg-cyan-50 border-cyan-100' },
  "ACCREDITED ELECTRICIANS WITH WIREMAN'S LICENSES": { Icon: Award, accent: 'text-teal-500 bg-teal-50 border-teal-100' },
  'GENERAL WORKERS': { Icon: HardHat, accent: 'text-orange-500 bg-orange-50 border-orange-100' },
  'ALL KIND OF MAJOR AND MINOR REPAIRS': { Icon: Wrench, accent: 'text-red-500 bg-red-50 border-red-100' },
  'QUALIFIED INSTALLATION ELECTRICIANS': { Icon: ShieldCheck, accent: 'text-brand-600 bg-brand-50 border-brand-100' },
};

export default function ServicesSection({ section }) {
  const cards = section?.cards || [];

  return (
    <section aria-labelledby="services-overview-heading" className="py-16 sm:py-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
        <div>

          <h2 id="services-overview-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            {section.title || 'What we can do for you'}
          </h2>

        </div>


      </div>

      {/* Modern Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {cards.map((card, idx) => {
          const title = card[0]?.text || '';
          const description = card[1]?.text || '';
          const iconMeta = serviceIconsMap[title] || {
            Icon: Zap,
            accent: 'text-brand-600 bg-brand-50 border-brand-100',
          };
          const { Icon, accent } = iconMeta;

          return (
            <div
              key={idx}
              className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col flex-grow">
                {/* Icon & Counter */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${accent} shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title with exact min-height so descriptions start at identical positions */}
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900 mb-3 uppercase leading-snug group-hover:text-brand-700 transition-colors duration-200 min-h-[48px] flex items-start">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {description}
                </p>
              </div>

              {/* Action Link pinned flush to bottom */}
              <div className="pt-5 mt-5 border-t border-slate-100">
                <Link
                  href={{ pathname: '/contact/', query: { product: title } }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors uppercase tracking-wider group/link"
                >
                  <span>Enquire service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
