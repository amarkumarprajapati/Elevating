import Link from 'next/link';
import { company } from '../data/data.js';

function FooterItem({ text, group }) {
  if (text === company.email) {
    return (
      <a href={'mailto:' + company.email} className="hover:text-brand-600 transition-colors duration-200">
        {text}
      </a>
    );
  }
  if (company.phone && text.includes(company.phone.replace(/\D/g, '').slice(-10))) {
    return (
      <a href={'tel:' + company.phone.replace(/\s/g, '')} className="hover:text-brand-600 transition-colors duration-200">
        {text}
      </a>
    );
  }
  const menu = company.navigation.find((item) => item.label.toLowerCase() === group.toLowerCase());
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
            src={company.logo}
            alt=""
            className="h-10 w-auto object-contain brightness-200"
          />
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {company.name}
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {company.footer.map(([heading, ...items]) => (
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
          <div>{company.copyright}</div>
          <div>{company.details.slice(0, 2).join(' · ')}</div>
          <div>{company.attribution}</div>
        </div>
      </div>
    </footer>
  );
}
