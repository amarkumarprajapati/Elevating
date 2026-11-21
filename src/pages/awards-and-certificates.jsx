import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import PageHeader from '../components/PageHeader';
import siteData from '../helper/site.json';

const { pages, website } = siteData;
const { awards_and_certificates } = pages;

export default function AwardsAndCertificates() {
  return (
    <>
      <SeoHead
        title="Awards & Certificates – Statutory Compliance & Licenses | Intal Elevators"
        description="Authorized elevator company registered with all relevant authorities in Maharashtra. PWD licensed works and accredited wiremen certifications."
        canonicalUrl={awards_and_certificates.url}
        keywords="PWD elevator license, Wireman license Maharashtra, Elevator safety compliance, Intal Elevators credentials"
      />

      <PageHeader
        title={awards_and_certificates.title.split('–')[0].trim()}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge-gold mb-3">Statutory Credentials</span>
              <h2 className="font-display text-3xl font-black text-navy-950 tracking-tight mb-6">
                Registered Elevator Company &amp; Electrical Contractor
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {pages.home.about_summary}
              </p>

              <div className="space-y-4 mb-8">
                {pages.services.services_list
                  .filter((s) => s.name.includes('LICENCE') || s.name.includes('CONTRACTORS') || s.name.includes('QUALIFIED'))
                  .map((cred, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <div>
                        <span className="font-bold text-navy-950 text-sm block capitalize">{cred.name.toLowerCase()}</span>
                        <span className="text-xs text-slate-500 leading-normal">{cred.description}</span>
                      </div>
                    </div>
                  ))}
              </div>

              <Link href="/contact/" className="btn-primary-gold">
                Request Tender Documentation
              </Link>
            </div>

            <div className="bg-navy-950 rounded-2xl p-10 text-white border-2 border-gold-500/50 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{website.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {pages.about_us.mission.description}
              </p>
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-gold-400 font-bold text-xs uppercase tracking-widest border border-gold-500/30">
                Thane &amp; Maharashtra Region
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
