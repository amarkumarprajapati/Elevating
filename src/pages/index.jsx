import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EnquiryForm from '../components/sections/EnquiryForm';
import { homePage, servicesPage, company } from '../data/data.js';

export default function Home() {
  const serviceSectionData = {
    title: 'What we can do for you',
    kicker: 'SERVICES',
    cards: servicesPage.services_list.map((item) => [
      { text: item.name },
      { text: item.description },
    ]),
  };

  const enquiryBlock = {
    fields: [
      { label: 'Full Name', name: 'your-name', type: 'text', required: true },
      { label: 'Email Address', name: 'your-email', type: 'email', required: true },
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
        <ProjectsSection />

        {/* Testimonials */}
        <section aria-labelledby="testimonials-title" className="py-16 sm:py-20">
          <header className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">Testimonials</p>
            <h2 id="testimonials-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              What our clients say
            </h2>
          </header>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homePage.testimonials.map(({ title, quote }, index) => (
              <article key={index} className="rounded-2xl bg-white border border-slate-100 hover:border-slate-200 p-7 shadow-sm hover:shadow-md transition-all duration-300">
                <header className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-100">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-3xl text-brand-600">
                    &ldquo;
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">Client testimonial</p>
                  </div>
                </header>
                <blockquote className="text-sm italic leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</blockquote>
              </article>
            ))}
          </div>
        </section>

        {/* Quick Enquiry */}
        <section className="py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                {company.enquiry}
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-md">
                Have a question about our elevator solutions? Send us a message and our team will get back to you promptly.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <EnquiryForm block={enquiryBlock} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
