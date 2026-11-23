import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import siteData from '../data/site.json';

const { pages, website } = siteData;
const { home } = pages;

// Map image dynamically based on solution name
const getSolutionImage = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('passenger') || lower.includes('passanger')) return '/images/passenger.jpg';
  if (lower.includes('car')) return '/images/car.jpg';
  if (lower.includes('escalator')) return '/images/escalator.jpg';
  return '/images/hero.jpg';
};

export default function Home() {
  return (
    <>
      <SeoHead
        title="Intal Elevators – Escalators & Elevating Solutions Manufacturer in Maharashtra"
        description="Escalators, passenger elevators, and custom elevating systems manufactured and installed by Intal Elevators across Thane, Kalyan & Maharashtra. 40+ years expertise, AMC & PWD licensed."
        canonicalUrl={home.url}
        keywords="Escalators, Elevating, Elevators in Thane, Passenger Elevators, Car Elevators, Escalator manufacturer Maharashtra, Lift installation, AMC elevator servicing"
      />

      <section className="home-hero">
        <img className="home-hero-photo" src="/images/hero.jpg" alt="" fetchPriority="high" />
        <div className="home-hero-copy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="hero-location">Intal Elevators &middot; Maharashtra</p>
          <h1>Elevators &amp;<br />escalators.</h1>
          <p className="hero-summary">Manufacturing, installation and maintenance for buildings across Maharashtra. Over 40 years of experience in vertical transport.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products/" className="btn-primary">Explore products</Link>
            <Link href="/services/" className="hero-services">Our services</Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-7">
          <h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Our product range</h2>
          <Link className="catalog-link" href="/products/">View all products</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {home.featured_solutions.map((solution) => (
            <Link key={solution.name} className="product-tile" href={`/contact/?product=${encodeURIComponent(solution.name)}`}>
              <img src={getSolutionImage(solution.name)} alt="" loading="lazy" />
              <h3>{solution.name.toLowerCase().replace('passanger', 'passenger')}</h3>
              <span className="catalog-link">Enquire about this product</span>
            </Link>
          ))}
        </div>
      </section>
      {/* Projects Across the Region - Clean Modern Corporate Cards */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-blue mb-3">
              Regional Footprint
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight mb-4 text-slate-900">
              Projects in Maharashtra Region
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Situated in the Thane and Mumbai Metropolitan Region, we have undertaken landmark elevator installations throughout the district.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ongoing Projects Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Ongoing Projects</h3>
                      <p className="text-xs text-slate-500">Under execution &amp; testing</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Active Sites
                  </span>
                </div>

                <ul className="space-y-4">
                  {home.projects.ongoing.map((proj, idx) => (
                    <li key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="font-bold text-base text-slate-900">{proj.name}</span>
                      </div>
                      <span className="text-xs text-emerald-700 bg-emerald-100/60 font-semibold px-2.5 py-1 rounded-md sm:self-center self-start">
                        {proj.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Certified On-site Engineers Assigned</span>
                <span className="text-emerald-600 font-bold">100% Safety Compliance</span>
              </div>
            </div>

            {/* Upcoming Projects Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Upcoming Projects</h3>
                      <p className="text-xs text-slate-500">Contracted &amp; scheduled installation</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                    Contracted
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {home.projects.upcoming.map((proj, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-primary-300 transition-all flex flex-col justify-between gap-2">
                      <span className="font-semibold text-slate-900 text-sm">{proj.name}</span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary-700">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{proj.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Across Thane, Kalyan, Pen &amp; Mumbai</span>
                <Link href="/contact/" className="text-primary-600 hover:text-primary-700 font-bold hover:underline">
                  Inquire For Your Site →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spectrum */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-blue mb-3">Services Spectrum</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {pages.services.title.split('–')[0].trim()}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We pride ourselves on quality workmanship and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.services.services_list.slice(0, 6).map((srv, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-slate-200 bg-white hover:border-primary-400 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-primary-600 tracking-wider mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 capitalize mb-3">
                    {srv.name.toLowerCase()}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/" className="btn-primary text-sm sm:text-base">
              Explore All {pages.services.services_list.length} Services &amp; AMC
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Inquiry CTA - Light Blue Contrast Banner */}
      <section className="py-14 bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2 text-white">
              {pages.contact.heading}
            </h3>
            <p className="text-slate-100 text-sm max-w-xl">
              {website.contact.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${website.contact.phone}`} className="btn-accent">
              Call {website.contact.phone}
            </a>
            <Link href="/contact/" className="btn-outline-white">
              {pages.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
