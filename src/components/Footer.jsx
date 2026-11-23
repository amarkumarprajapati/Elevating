import Link from 'next/link';
import { company } from '../data/data.js';

function FooterItem({ text, group }) {
  if (text === company.email) {
    return (
      <a href={'mailto:' + company.email} className="hover:text-purple-700 transition">
        {text}
      </a>
    );
  }
  if (company.phone && text.includes(company.phone.replace(/\D/g, '').slice(-10))) {
    return (
      <a href={'tel:' + company.phone.replace(/\s/g, '')} className="hover:text-purple-700 transition">
        {text}
      </a>
    );
  }
  const menu = company.navigation.find((item) => item.label.toLowerCase() === group.toLowerCase());
  const href = text === 'Blog' ? '/hello-world/' : menu?.href;
  return href ? (
    <Link href={href} className="hover:text-purple-700 transition">
      {text}
    </Link>
  ) : (
    <span>{text}</span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Brand name */}
        <div className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 pb-8 mb-10 border-b border-slate-200">
          {company.name}
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {company.footer.map(([heading, ...items]) => (
            <div key={heading.text}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                {heading.text}
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item.text}>
                    <FooterItem text={item.text} group={heading.text} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div>{company.copyright}</div>
          <div>{company.details.slice(0, 2).join(' · ')}</div>
          <div>{company.attribution}</div>
        </div>
      </div>
    </footer>
  );
}
