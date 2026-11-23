import Link from 'next/link';
import company from '../data/company.json';

function FooterItem({ text, group }) {
  if (text === company.email) return <a href={'mailto:' + company.email}>{text}</a>;
  if (company.phone && text.includes(company.phone.replace(/\D/g, '').slice(-10))) return <a href={'tel:' + company.phone.replace(/\s/g, '')}>{text}</a>;
  const menu = company.navigation.find(item => item.label.toLowerCase() === group.toLowerCase());
  const href = text === 'Blog' ? '/hello-world/' : menu?.href;
  return href ? <Link href={href}>{text}</Link> : text;
}

export default function Footer() {
  return <footer className="site-footer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="footer-brand">{company.name}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {company.footer.map(([heading, ...items]) => <section key={heading.text}>
          <h2 className="font-bold mb-3">{heading.text}</h2>
          <ul className="space-y-2 text-slate-700">{items.map(item => <li key={item.text}><FooterItem text={item.text} group={heading.text} /></li>)}</ul>
        </section>)}
      </div>
      <div className="mt-8 pt-4 border-t border-slate-300 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <span>{company.copyright}</span><span>{company.details.slice(0,2).join(' · ')}</span><span>{company.attribution}</span>
      </div>
    </div>
  </footer>;
}
