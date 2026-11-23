import Link from 'next/link';

export default function PageHeader({ title, description }) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-brand-50/30 to-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-700 transition-colors duration-200">
            Home
          </Link>
          <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span aria-current="page" className="text-slate-900 font-semibold">{title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">{description}</p>
        )}
        <div aria-hidden="true" className="w-14 h-1 bg-brand-600 mt-6 rounded-full" />
      </div>
    </section>
  );
}
