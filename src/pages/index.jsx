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
