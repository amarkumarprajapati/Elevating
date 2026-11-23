import Link from 'next/link';

export default function PageHeader({ title }) {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-3">
          <Link href="/" className="hover:text-purple-700 transition">
            Home
          </Link>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span aria-current="page" className="text-slate-900 font-semibold">{title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {title}
        </h1>
        <div aria-hidden="true" className="w-12 h-1 bg-purple-700 mt-4 rounded-full" />
      </div>
    </section>
  );
}
