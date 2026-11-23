import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import EnquiryForm from '../components/sections/EnquiryForm';
import { contactPage, company } from '../data/data.js';

export default function Contact() {
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
    <Layout title={contactPage.title} description="Contact Intal Elevators for quotes, consultations, and lift servicing.">
      <PageHeader title="Contact" description="Get in touch with our team for quotes, consultations, or any elevator service enquiries." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Info Column */}
          <div className="space-y-6">
            <div className="mb-2">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {contactPage.heading}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Office & Headquarters</h3>
                    <p className="text-sm text-slate-600">{company.details[4]} {company.details[5]}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Direct Phone & Email</h3>
                    <p className="text-sm text-slate-600 mb-1">
                      Phone: <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-brand-700 font-medium hover:text-brand-800 transition-colors">{company.phone}</a>
                    </p>
                    <p className="text-sm text-slate-600">
                      Email: <a href={`mailto:${company.email}`} className="text-brand-700 font-medium hover:text-brand-800 transition-colors">{company.email}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Business Hours</h3>
                    <p className="text-sm text-slate-600">{company.details[1]}</p>
                    <p className="text-sm text-slate-600">{company.details[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us an Enquiry</h3>
            <p className="text-sm text-slate-500 mb-6">Fill in the details below and we&apos;ll get back to you.</p>
            <EnquiryForm block={enquiryBlock} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
