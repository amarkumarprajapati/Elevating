import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import EnquiryForm from '../components/sections/EnquiryForm';
import { contactPage, company } from '../data/data.js';

export default function Contact() {
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
    <Layout title={contactPage.title} description="Contact Intal Elevators for quotes, consultations, and lift servicing.">
      <PageHeader title="Contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Information Column */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                {contactPage.heading}
              </h2>
            </div>

            <div className="space-y-6 text-sm text-slate-600">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">Office & Headquarters</h3>
                <p>{company.details[4]} {company.details[5]}</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">Direct Phone & Email</h3>
                <p className="mb-1">Phone: <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-purple-700 font-semibold">{company.phone}</a></p>
                <p>Email: <a href={`mailto:${company.email}`} className="text-purple-700 font-semibold">{company.email}</a></p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">Business Hours</h3>
                <p>{company.details[1]}</p>
                <p>{company.details[0]}</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us an Enquiry</h3>
            <EnquiryForm block={enquiryBlock} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
