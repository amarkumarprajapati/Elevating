import Link from 'next/link';

const COMPANY = {
  name: 'Intal Elevators',
  tagline: 'Authorized elevator company registered with relevant state and municipal authorities in Maharashtra.',
  logo: '/images/source/2020/11/Intal-logo.png',
  email: 'intalelevator@gmail.com',
  phone: '+91 8007455441',
  address: 'Opposite 333, Near Chatrapati Shivaji School, Ulhasnagar - 421004, Maharashtra, India.',
  copyright: '© 2026 Intal Elevators. All rights reserved.',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Products', href: '/products/' },
    { label: 'Services', href: '/services/' },
    { label: 'Awards & Certificates', href: '/awards-and-certificates/' },
    { label: 'Contact Us', href: '/contact/' },
  ],
  services: [
    'Installations of New Lifts',
    'Annual Maintenance Contracts (AMC)',
    'Elevator Modernization & Repairs',
    'Electrical Contracting & PWD Work',
    'Technical Consultations',
    'Supply of Lift Components',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY.logo}
                alt=""
                className="h-9 w-auto object-contain brightness-200"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="inline-block px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-purple-300 font-semibold">
                PWD Certified Wiremen
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {COMPANY.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Key Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {COMPANY.services.map((svc) => (
                <li key={svc}>
                  <Link href="/services/" className="hover:text-purple-400 transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Office
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              <p>{COMPANY.address}</p>
              <p>
                <span className="text-slate-300 font-medium">Phone: </span>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-white hover:text-purple-300 font-semibold">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">Email: </span>
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-purple-300">
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-xs text-slate-500 pt-1">Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{COMPANY.copyright}</div>
          <div>Thane • Kalyan • Ulhasnagar • Mumbai Region</div>
        </div>
      </div>
    </footer>
  );
}
