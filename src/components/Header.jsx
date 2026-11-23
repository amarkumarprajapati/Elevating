import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import website from '../data/company.json';



export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = website.navigation;

  const currentPath = router.asPath.split('?')[0].split('#')[0];

  return (
    <>
      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={website.logo}
              alt=""
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="brand-name">{website.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive ? 'text-[var(--accent)] font-bold' : 'text-slate-700 hover:text-[var(--accent)]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact/" className="btn-primary text-sm py-2.5 px-5">
              {website.enquiry}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                      isActive ? 'bg-white text-[var(--accent)] font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <Link
                  href="/contact/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center py-3 text-sm"
                >
                  {website.enquiry}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
