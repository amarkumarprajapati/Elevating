import Layout from '../components/Layout';
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
  Hammer,
  Factory,
  Gauge,
  Drill,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const SERVICES_DATA = {
  title: 'Services – Intal Elevators',
  services_list: [
    {
      name: 'ELECTRICAL CONTRACTORS',
      description: 'Our electrical contractors are well trained and experienced in installing and maintaining electrical systems including wiring, breaker boxes, switches and other machinery.',
      Icon: Zap,
      accent: 'text-amber-500 bg-amber-50/80 border-amber-100',
    },
    {
      name: 'SUPPLY OF LIFT COMPONENTS',
      description: 'We get the right product delivered to you at the right time when you need it the most saving your precious time and money.',
      Icon: Package,
      accent: 'text-blue-500 bg-blue-50/80 border-blue-100',
    },
    {
      name: 'ELECTRICAL ASSISTANTS',
      description: 'The skilled assistants for electricians to help in all their work. This makes the work of electricians way much easier to execute and complete it with zero errors.',
      Icon: Users,
      accent: 'text-indigo-500 bg-indigo-50/80 border-indigo-100',
    },
    {
      name: 'INSTALLATIONS OF NEW LIFTS',
      description: 'In need of a new installation or be it a complete alteration of your existing building or a structural architecture we offer dynamic solutions that meets your requirements.',
      Icon: Building2,
      accent: 'text-emerald-500 bg-emerald-50/80 border-emerald-100',
    },
    {
      name: 'ANNUAL MAINTENANCE CONTRACTS',
      description: 'An elevator requires time to time servicing so that the elevators runs smoothly. We provide the annual maintenance contracts for elevators that includes best in class servicing.',
      Icon: CalendarCheck,
      accent: 'text-purple-500 bg-purple-50/80 border-purple-100',
    },
    {
      name: 'PWD LICENCE WORK',
      description: "Upgradation and maintenance of roads that include national highways, major district roads, village roads and also construction of bridges, flyovers and ROB's in the state.",
      Icon: FileBadge,
      accent: 'text-rose-500 bg-rose-50/80 border-rose-100',
    },
    {
      name: 'TECHNICAL CONSULTATIONS',
      description: "Expertise panel of professionals who are experienced in delivering exceptional service in technical supports, performing trouble shoot functions or any client's issues.",
      Icon: Headphones,
      accent: 'text-cyan-500 bg-cyan-50/80 border-cyan-100',
    },
    {
      name: "ACCREDITED ELECTRICIANS WITH WIREMAN'S LICENSES",
      description: "All the workers and contractors working with us are highly trained professional and have the required wireman's licence and permit to work in the industry.",
      Icon: Award,
      accent: 'text-teal-500 bg-teal-50/80 border-teal-100',
    },
    {
      name: 'GENERAL WORKERS',
      description: 'Skilled workers for the general duties like cleaning and preparing a job site, loading, unloading and delivering materials and are experienced in using a variety of tools.',
      Icon: HardHat,
      accent: 'text-orange-500 bg-orange-50/80 border-orange-100',
    },
    {
      name: 'ALL KIND OF MAJOR AND MINOR REPAIRS',
      description: 'Elevators can be in need of minute or little major repairs at any time. We provide you the option for service even if you have not subscribed to annual maintenance contracts.',
      Icon: Wrench,
      accent: 'text-red-500 bg-red-50/80 border-red-100',
    },
    {
      name: 'QUALIFIED INSTALLATION ELECTRICIANS',
      description: 'Be assured of the installation service as we have trained and experience professionals in the field job.',
      Icon: ShieldCheck,
      accent: 'text-brand-600 bg-brand-50/80 border-brand-100',
    },
  ],
  electrical_equipment: [
    {
      name: 'All hand tools, Scaffolding, ladders, Pullers, Chain Blocks etc',
      Icon: Hammer,
      accent: 'text-amber-500 bg-amber-50/80 border-amber-100',
    },
    {
      name: 'Workshop',
      Icon: Factory,
      accent: 'text-blue-500 bg-blue-50/80 border-blue-100',
    },
    {
      name: 'Electrical testing equipment',
      Icon: Gauge,
      accent: 'text-emerald-500 bg-emerald-50/80 border-emerald-100',
    },
    {
      name: 'Electrical tools i.e (Drilling machines, Grinders, jigsaws, Testing tools etc)',
      Icon: Drill,
      accent: 'text-purple-500 bg-purple-50/80 border-purple-100',
    },
  ],
};

export default function Services() {
  return (
    <Layout title={SERVICES_DATA.title} description="Comprehensive elevator and electrical engineering services across Maharashtra.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">SERVICES</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            We Provide
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl">
            Reliable, safe, and end-to-end vertical transportation and electrical contracting services engineered to the highest industry standards.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.services_list.map((service, i) => {
            const { Icon } = service;
            return (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 mb-5 rounded-2xl flex items-center justify-center border ${service.accent} shadow-xs group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 mb-3 uppercase leading-snug group-hover:text-brand-700 transition-colors duration-200 min-h-[40px] flex items-center">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href={{ pathname: '/contact/', query: { product: service.name } }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors uppercase tracking-wider group/link"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Electrical Equipment Section */}
        <section className="pt-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              EQUIPMENT & INFRASTRUCTURE
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Electrical Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.electrical_equipment.map((eq, i) => {
              const { Icon } = eq;
              return (
                <div
                  key={i}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center sm:text-left"
                >
                  <div>
                    <div
                      className={`w-14 h-14 mb-4 rounded-2xl flex items-center justify-center border ${eq.accent} shadow-xs group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0`}
                    >
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-brand-700 transition-colors duration-200">
                      {eq.name}
                    </h3>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Industrial Grade
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
