import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import EnquiryForm from '../components/sections/EnquiryForm';
import { homePage, servicesPage, company } from '../data/data.js';

export default function Home() {
  const serviceSectionData = {
    title: 'WHAT WE CAN DO FOR YOU',
    kicker: 'SERVICES',
    cards: servicesPage.services_list.map((item) => [
      { text: item.name },
      { text: item.description },
    ]),
  };

  const enquiryBlock = {
    fields: [
      { label: 'Your Name (required)', name: 'your-name', type: 'text', required: true },
      { label: 'Your Email (required)', name: 'your-email', type: 'email', required: true },
      { label: 'Subject', name: 'your-subject', type: 'text', required: false },
      { label: 'Your Message', name: 'your-message', type: 'text', required: false },
    ],
    submit: 'Send',
  };

  return (
    <Layout title={homePage.title} description={homePage.about_summary}>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsSection />
        <ServicesSection section={serviceSectionData} />

        <section aria-labelledby="testimonials-title" className="py-12 sm:py-16 border-t border-slate-200">
          <header className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-700">Testimonials</p>
            <h2 id="testimonials-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              What our clients say
            </h2>
          </header>
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 pt-1 lg:grid lg:grid-cols-3">
            {homePage.testimonials.map(({ title, quote }, index) => (
              <article key={index} className="w-[86%] max-w-sm shrink-0 snap-start rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:w-auto lg:max-w-none">
                <header className="flex items-center gap-3 border-b border-stone-200 pb-4">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 pt-2 font-serif text-4xl text-purple-700">“</span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">Client testimonial</p>
                  </div>
                </header>
                <blockquote className="pt-4 text-[15px] italic leading-relaxed text-slate-600">“{quote}”</blockquote>
              </article>
            ))}
          </div>
        </section>

        {/* Quick Enquiry Section */}
        <section className="py-12 sm:py-16 border-t border-slate-200">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
              GET IN TOUCH
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {company.enquiry}
            </h2>
          </div>
          <EnquiryForm block={enquiryBlock} />
        </section>
      </div>
    </Layout>
  );
}
