import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import PageHeader from '../components/PageHeader';
import siteData from '../helper/site.json';

const { pages } = siteData;
const { services } = pages;

export default function Services() {
  return (
    <>
      <SeoHead
        title="Services – Lift Installation, AMC & Electrical Contracting | Intal Elevators"
        description="Comprehensive elevator services: new installations, AMC, PWD license electrical works, component supply, and accredited wireman solutions in Thane & Maharashtra."
        canonicalUrl={services.url}
        keywords="Elevator installation, Elevator AMC, Lift maintenance, PWD electrical contractors, Lift components, Intal Elevators Thane"
      />

      <PageHeader
        title={services.title.split('–')[0].trim()}
      />

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.services_list.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center font-display font-black text-base mb-6 border border-gold-500/30">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-xl font-black text-navy-950 capitalize mb-3">
                    {srv.name.toLowerCase()}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/contact/?service=${encodeURIComponent(srv.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 transition-colors"
                  >
                    <span>Inquire Service</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium">Licensed Work</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Tools Grid */}
      <section className="py-16 lg:py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-gold mb-2">Modern Infrastructure</span>
            <h2 className="font-display text-3xl font-black text-navy-950 tracking-tight">
              Electrical Equipment &amp; Testing Gear
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We own and maintain complete workshop facilities and high-precision diagnostic instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.electrical_equipment.map((eq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3.5 shadow-sm hover:border-gold-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-950 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-bold text-navy-950 leading-snug">
                  {eq}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
