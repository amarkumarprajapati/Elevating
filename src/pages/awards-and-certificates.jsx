import Link from 'next/link';
import Layout from '../components/Layout';

const CERTIFICATES = [
  {
    title: 'Registered Lift Contractor',
    authority: 'Government of Maharashtra - Public Works Department (PWD)',
    description: 'Officially registered and authorized contractor for vertical transportation installations, structural alterations, and maintenance across Mumbai and Thane regions.',
    badge: 'Govt. Authorized',
    status: 'Active License',
  },
  {
    title: 'PWD Certified Wiremen & Electricians',
    authority: 'Licensing Board of Maharashtra',
    description: 'All field electricians and installation engineers hold government-issued wireman certificates ensuring rigorous adherence to Indian Electrical Safety Codes.',
    badge: 'Certified Workforce',
    status: 'Verified Credentials',
  },
  {
    title: 'Elevator Safety & Inspection Compliance',
    authority: 'State Elevator Inspectorate',
    description: 'Complete compliance with statutory periodic safety inspections, load testing, emergency braking systems, and electrical earthing standards.',
    badge: 'Safety Compliant',
    status: 'Annual Renewal',
  },
  {
    title: 'Electrical Contracting License',
    authority: 'Industries, Energy & Labour Department',
    description: 'Licensed to undertake domestic, commercial, and high-load industrial electrical infrastructure projects including main panel assembly and breaker distribution.',
    badge: 'Class-1 Contractor',
    status: 'Fully Licensed',
  },
];

export default function AwardsAndCertificates() {
  return (
    <Layout title="Awards and Certificates – Intal Elevators" description="Authorizations, government certifications, and licenses achieved by Intal Elevators.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
            ACCREDITATIONS & LICENSES
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Authorized Elevator Engineering & Contracting
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Intal Elevators is an authorized elevator company registered with all relevant state and municipal authorities in Maharashtra. Our technical workforce holds verified PWD licenses and certified wireman credentials.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
                  {cert.badge}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  ✓ {cert.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-3">
                Issued by: {cert.authority}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note / Callout */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Need verification documents for your society or tender?</h4>
            <p className="text-xs text-slate-600 mt-1">We provide verified copies of contractor registration and wireman licenses on request.</p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm px-5 py-2.5 rounded-md transition whitespace-nowrap"
          >
            Request Documents
          </Link>
        </div>
      </div>
    </Layout>
  );
}
