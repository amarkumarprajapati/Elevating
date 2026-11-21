import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import siteData from '../helper/site.json';

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

      {/* Hero Section */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        {/* Real Architectural Background Image with Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg-live.jpg"
            alt={website.name}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
                <img src="/images/intal-logo.png" alt="Intal Logo" className="h-4 w-auto object-contain brightness-125" />
                <span>{website.name} · Maharashtra</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Elevating Standards in <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
                  Safety, Speed &amp; Comfort.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                {home.history_summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link href="/products/" className="btn-gold text-base py-3.5 px-7">
                  Explore Products
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact/" className="btn-outline text-base py-3.5 px-7">
                  Contact Us
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-xl">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-display text-2xl sm:text-3xl font-black text-gold-400">40+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">Years Experience</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-display text-2xl sm:text-3xl font-black text-gold-400">100%</div>
                  <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">Authorized Co.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-display text-2xl sm:text-3xl font-black text-gold-400">
                    {website.business_hours.sunday === 'CLOSED' ? 'Mon-Sat' : 'Daily'}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">{website.business_hours.monday_to_saturday}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold-500/30 to-blue-500/20 blur-sm"></div>

                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-navy-900 shadow-2xl">
                  <div className="relative h-96 sm:h-[440px]">
                    <img
                      src="/images/hero.jpg"
                      alt={website.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                    <div className="absolute top-4 right-4 bg-navy-950/90 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      ✓ {website.name}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Address</div>
                          <div className="text-xs sm:text-sm font-bold text-white mt-0.5 line-clamp-1">{website.contact.address}</div>
                        </div>
                        <div className="text-right pl-3 shrink-0">
                          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Call</div>
                          <a href={`tel:${website.contact.phone}`} className="text-xs sm:text-sm font-bold text-gold-400 hover:underline">
                            {website.contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-navy-950 border-2 border-gold-500 p-4 rounded-xl shadow-2xl items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center font-black">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">{website.name}</div>
                    <div className="text-[11px] text-slate-400">Quality Workmanship &amp; Service Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Promises Strip from JSON footer services */}
      <div className="bg-navy-900 border-b border-white/10 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {website.footer_links.services.map((srvTitle, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{srvTitle}</h4>
                  <p className="text-xs text-slate-400">Quality Workmanship</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Solutions Section Dynamically from JSON */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold mb-3">Featured Solutions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight mb-4">
              Solutions Provided By {website.name}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We help architects, owners and builders add value to any building type – from first sketches in planning to operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.featured_solutions.map((sol, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-lift hover:border-gold-500/50 transition-all flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-navy-900">
                  <span className="absolute top-4 left-4 z-10 text-xs font-bold text-gold-400 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded border border-gold-500/30">
                    Solution {sol.number}
                  </span>
                  <img
                    src={getSolutionImage(sol.name)}
                    alt={sol.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
                      {sol.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {sol.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/contact/?product=${encodeURIComponent(sol.name)}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      Enquire Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products/" className="btn-navy">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Company Split Section from JSON */}
      <section className="py-20 lg:py-28 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge-gold mb-3">About Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight mb-6">
                {pages.about_us.history.headline}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                {home.about_summary}
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {home.history_summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {website.footer_links.services.map((srvItem, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-sm font-semibold text-navy-950">
                    <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{srvItem}</span>
                  </div>
                ))}
              </div>

              <Link href="/about-us/" className="btn-navy">
                Learn More About Our Team
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-navy-900 border border-slate-200">
                <img
                  src="/images/hero.jpg"
                  alt={website.name}
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-navy-950 border-2 border-gold-500 text-white p-6 rounded-xl shadow-2xl text-center">
                <div className="font-display text-4xl font-black text-gold-500">40+</div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-300 mt-1">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Across the Region from JSON */}
      <section className="py-20 lg:py-28 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold-dark mb-3">Our Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Projects in Maharashtra Region
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Situated in the Thane, Maharashtra Region we have undertaken major projects throughout District.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-navy-900 rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <h3 className="font-display text-2xl font-bold text-white">Ongoing Projects</h3>
                <span className="badge-gold-dark">Active Sites</span>
              </div>
              <ul className="space-y-4">
                {home.projects.ongoing.map((proj, idx) => (
                  <li key={idx} className="p-4 rounded-lg bg-white/5 border-l-4 border-gold-500 flex flex-col gap-1">
                    <span className="font-bold text-base text-white">{proj.name}</span>
                    <span className="text-sm text-gold-400 font-medium">{proj.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <h3 className="font-display text-2xl font-bold text-white">Upcoming Projects</h3>
                <span className="badge-gold-dark">Contracted</span>
              </div>
              <ul className="space-y-3">
                {home.projects.upcoming.map((proj, idx) => (
                  <li key={idx} className="p-3.5 rounded-lg bg-white/5 border-l-4 border-gold-500/60 flex items-center justify-between">
                    <span className="font-semibold text-white">{proj.name}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/10 px-2.5 py-1 rounded">
                      {proj.location}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spectrum from JSON */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold mb-3">Services Spectrum</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight mb-4">
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
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold-500 hover:shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-gold-600 tracking-wider mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-950 capitalize mb-3">
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
            <Link href="/services/" className="btn-navy text-sm sm:text-base">
              Explore All {pages.services.services_list.length} Services &amp; AMC
              <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Inquiry CTA from JSON */}
      <section className="py-14 bg-gradient-to-r from-navy-950 to-navy-900 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">
              {pages.contact.heading}
            </h3>
            <p className="text-slate-400 text-sm">
              {website.contact.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${website.contact.phone}`} className="btn-gold">
              Call {website.contact.phone}
            </a>
            <Link href="/contact/" className="btn-outline">
              {pages.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
