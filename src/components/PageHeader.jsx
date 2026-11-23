import Link from 'next/link';

export default function PageHeader({ title }) {
  return (
    <section className="interior-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span aria-current="page" className="text-primary-800 font-semibold">{title}</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          {title}
        </h1>
        <div aria-hidden="true" className="w-12 h-1 bg-primary-600 mt-4 rounded-full" />
      </div>
    </section>
  );
}
