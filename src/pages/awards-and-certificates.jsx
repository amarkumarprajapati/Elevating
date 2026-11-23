import Layout from '../components/Layout';

const AWARDS_PAGE_DATA = {
  title: 'Awards and Certificates – Intal Elevators',
};

export default function AwardsAndCertificates() {
  return (
    <Layout title={AWARDS_PAGE_DATA.title} description="Awards, certifications, and licenses achieved by Intal Elevators.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
            ACCREDITATIONS & LICENSES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-6">
            Authorized Elevator Engineering & Contracting
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
            Intal Elevators is an authorized elevator company registered with all relevant state and municipal authorities in Maharashtra. Our technical workforce holds verified PWD licenses and certified wireman credentials.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold transition-all duration-200 hover:shadow-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Registered Lift Contractor
            </span>
            <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-800 text-sm font-semibold transition-all duration-200 hover:shadow-sm">
              <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              PWD Certified Wiremen
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
