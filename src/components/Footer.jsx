import Link from 'next/link';
import siteData from '../helper/site.json';

const { website } = siteData;

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Official Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block bg-white/95 p-2 rounded-lg mb-5 shadow-md">
              <img
                src="/images/intal-logo.png"
                alt={website.name}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Formed by vertical transportation professionals with over 40 years of individual expertise in India and abroad. Engineered for comfort, safety, and speed.
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                ✓ Authorized Elevator Company
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                ✓ PWD Licensed &amp; Accredited Wiremen
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display text-white text-base font-bold uppercase tracking-wider mb-5">
              Elevator Products
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {website.footer_links.products.map((p, idx) => (
                <li key={idx}>
                  <Link href="/products/" className="hover:text-gold-400 transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-white text-base font-bold uppercase tracking-wider mb-5">
              Engineering Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {website.footer_links.services.map((s, idx) => (
                <li key={idx}>
                  <Link href="/services/" className="hover:text-gold-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-display text-white text-base font-bold uppercase tracking-wider mb-5">
              Headquarters
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-3.5">
              <p className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{website.contact.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${website.contact.phone}`} className="hover:text-gold-400 font-semibold text-white">
                  {website.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${website.contact.email}`} className="hover:text-gold-400">
                  {website.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{website.copyright}. All rights reserved.</p>
          <p>Official Elevator Engineering &amp; Electrical Contracting Partner | Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
