import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/sections/ServicesSection';
import { servicesPage } from '../data/data.js';

export default function Services() {
  const serviceSectionData = {
    title: 'Our comprehensive services',
    kicker: 'WHAT WE PROVIDE',
    cards: servicesPage.services_list.map((item) => [
      { text: item.name },
      { text: item.description },
    ]),
  };

  return (
    <Layout title={servicesPage.title} description="Comprehensive elevator and electrical engineering services across Maharashtra.">
      <PageHeader title="Services" description="From installation to maintenance, we provide end-to-end elevator and electrical engineering solutions." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServicesSection section={serviceSectionData} />

        {/* Equipment & Infrastructure */}
        <section className="py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              EQUIPMENT & INFRASTRUCTURE
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Electrical Testing & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesPage.electrical_equipment.map((eq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm text-slate-800 text-sm font-medium flex items-center gap-3 transition-all duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0" />
                <span>{eq}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
