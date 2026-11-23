import Layout from '../components/Layout';
import EnquiryForm from '../components/sections/EnquiryForm';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';

const CONTACT_PAGE_DATA = {
  title: 'Contact – Intal Elevators',
  heading: 'WE WANT TO HEAR FROM YOU',
  phone: '+91 8007455441',
  email: 'intalelevator@gmail.com',
  address: 'Opposite 333, Near chatrapati shivaji school, Ulhasnagar - 421004, Maharashtra, India.',
  hours: [
    'MON - SAT 8.00 - 18.00',
    'Sunday CLOSED',
  ],
};

export default function Contact() {
  return (
    <Layout title={CONTACT_PAGE_DATA.title} description="Contact Intal Elevators for quotes, consultations, and lift servicing.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">GET IN TOUCH</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {CONTACT_PAGE_DATA.heading}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl">
            Reach out to our vertical transportation specialists for site inspections, quotes, or AMC support.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Office & Headquarters</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{CONTACT_PAGE_DATA.address}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Direct Phone & Email</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-1">
                    Phone:{' '}
                    <a href={`tel:${CONTACT_PAGE_DATA.phone.replace(/\s/g, '')}`} className="text-brand-700 font-semibold hover:text-brand-800 transition-colors">
                      {CONTACT_PAGE_DATA.phone}
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Email:{' '}
                    <a href={`mailto:${CONTACT_PAGE_DATA.email}`} className="text-brand-700 font-semibold hover:text-brand-800 transition-colors">
                      {CONTACT_PAGE_DATA.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Business Hours</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{CONTACT_PAGE_DATA.hours[0]}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{CONTACT_PAGE_DATA.hours[1]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us an Enquiry</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">Select your service and provide details for a prompt response.</p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
