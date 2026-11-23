import SeoHead from '../components/SeoHead';
import PageHeader from '../components/PageHeader';
import siteData from '../data/site.json';

const { website } = siteData;
const { contact } = website;

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact Us – Intal Elevators Ulhasnagar, Thane | Inquire Now"
        description="Contact Intal Elevators at Opposite 333, Near chatrapati shivaji school, Ulhasnagar - 421004. Phone: +91 8007455441. Email: intalelevator@gmail.com."
        canonicalUrl="https://intalelevators.com/contact/"
      />

      <PageHeader title="Contact Us" />

      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-xs text-slate-500 mb-1">Direct support &amp; emergency consultations:</p>
                  <a href={`tel:${contact.phone}`} className="font-display text-lg font-black text-primary-600 hover:text-primary-700">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Official Email</h3>
                  <p className="text-xs text-slate-500 mb-1">For tender inquiries &amp; project plans:</p>
                  <a href={`mailto:${contact.email}`} className="font-semibold text-primary-600 hover:text-primary-700">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Office Location</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-sm text-slate-600">
                    Monday to Saturday: {website.business_hours.monday_to_saturday}<br />
                    Sunday: {website.business_hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Quotation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-soft">
                <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                  Request a Quotation or Consultation
                </h3>
                <p className="text-sm text-slate-600 mb-8">
                  Fill in your details below and an elevator specialist from our Ulhasnagar office will contact you promptly.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your inquiry has been sent to Intal Elevators. We will call you back shortly.'); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Service Requirement
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm transition-all">
                      <option>New Elevator Installation</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Lift Modernization &amp; Repairs</option>
                      <option>PWD &amp; Electrical Contracting</option>
                      <option>Supply of Lift Components</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details &amp; Building Location
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Number of floors, passenger capacity, building type, or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm transition-all"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-base font-bold">
                    Submit Inquiry Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
