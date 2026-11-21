import Link from 'next/link';

export default function PageHeader({ title }) {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
          <Link href="/" className="hover:text-amber-700 transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span aria-current="page" className="text-slate-700">{title}</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
          {title}
        </h1>
        <div aria-hidden="true" className="w-10 h-1 bg-amber-500 mt-3 rounded-full" />
      </div>
    </section>
  );
}
