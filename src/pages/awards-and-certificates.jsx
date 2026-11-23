import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { awardsAndCertificatesPage } from '../data/data.js';

export default function AwardsAndCertificates() {
  return (
    <Layout title={awardsAndCertificatesPage.title} description="Awards, certifications, and licenses achieved by Intal Elevators.">
      <PageHeader title="Awards & Certificates" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
            ACCREDITATIONS & LICENSES
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            Authorized Elevator Engineering & Contracting
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Intal Elevators is an authorized elevator company registered with all relevant state and municipal authorities in Maharashtra. Our technical workforce holds verified PWD licenses and certified wireman credentials.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold">
              ✓ Registered Lift Contractor
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-sm font-semibold">
              ✓ PWD Certified Wiremen
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
