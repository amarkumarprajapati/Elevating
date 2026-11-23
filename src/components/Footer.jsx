import Link from 'next/link';

const COMPANY = {
  name: 'Intal Elevators',
  logo: '/images/source/2020/11/Intal-logo.png',
  email: 'intalelevator@gmail.com',
  phone: '+91 8007455441',
  copyright: '© 2026 Intal Elevators',
  attribution: 'Powered by Butterfly Themes',
  details: [
    'Sunday CLOSED',
    'MON - SAT 8.00 - 18.00',
    'Call Us Anytime',
    '+91 8007455441',
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Products', href: '/products/' },
    { label: 'Services', href: '/services/' },
    { label: 'Awards and Certificates', href: '/awards-and-certificates/' },
    { label: 'Contact', href: '/contact/' },
  ],
  footer: [
    [
      { type: 'heading', text: 'CONTACT INFORMATION' },
      { type: 'text', text: 'intalelevator@gmail.com' },
      { type: 'text', text: 'Call Us: 8007455441' },
      { type: 'text', text: 'Opposite 333, Near chatrapati shivaji school, Ulhasnagar - 421004, Maharashtra, India.' },
    ],
    [
      { type: 'heading', text: 'About us' },
      { type: 'text', text: 'History' },
      { type: 'text', text: 'Our Staff' },
      { type: 'text', text: 'Our Partners' },
    ],
    [
      { type: 'heading', text: 'Services' },
      { type: 'text', text: 'Electrical Contractors' },
      { type: 'text', text: 'Installations of new lifts' },
      { type: 'text', text: 'Technical Consultations' },
      { type: 'text', text: 'Supply of lift components' },
    ],
    [
      { type: 'heading', text: 'Products' },
      { type: 'text', text: 'Passenger Elevator' },
      { type: 'text', text: 'Car Elevator' },
      { type: 'text', text: 'Stretcher Elevator' },
      { type: 'text', text: '& more...' },
    ],
  ],
};

function FooterItem({ text, group }) {
  if (text === COMPANY.email) {
    return (
      <a href={'mailto:' + COMPANY.email} className="hover:text-brand-600 transition-colors duration-200">
        {text}
      </a>
    );
  }
  if (COMPANY.phone && text.includes(COMPANY.phone.replace(/\D/g, '').slice(-10))) {
    return (
      <a href={'tel:' + COMPANY.phone.replace(/\s/g, '')} className="hover:text-brand-600 transition-colors duration-200">
        {text}
      </a>
    );
  }
  const menu = COMPANY.navigation.find((item) => item.label.toLowerCase() === group.toLowerCase());
  const href = menu?.href;
  return href ? (
    <Link href={href} className="hover:text-brand-600 transition-colors duration-200">
      {text}
    </Link>
  ) : (
    <span>{text}</span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand */}
        <div className="flex items-center gap-3 pb-10 mb-10 border-b border-slate-700/50">
          <img
            src={COMPANY.logo}
            alt=""
            className="h-10 w-auto object-contain brightness-200"
          />
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {COMPANY.name}
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {COMPANY.footer.map(([heading, ...items]) => (
            <div key={heading.text}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-5">
                {heading.text}
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {items.map((item) => (
                  <li key={item.text}>
                    <FooterItem text={item.text} group={heading.text} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>{COMPANY.copyright}</div>
          <div>{COMPANY.details.slice(0, 2).join(' · ')}</div>
          <div>{COMPANY.attribution}</div>
        </div>
      </div>
    </footer>
  );
}
