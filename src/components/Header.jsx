import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import siteData from '../helper/site.json';

const { website } = siteData;

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = website.navigation_menu.map((item) => ({
    label: item.label,
    href: new URL(item.url).pathname,
  }));

  const currentPath = router.asPath.split('?')[0].split('#')[0];

  return (
    <>
      {/* Top Bar for Business Hours, Address & Contact from website */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {website.contact.address}
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon - Sat: {website.business_hours.monday_to_saturday} ({website.business_hours.sunday})
            </span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a href={`tel:${website.contact.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {website.contact.phone}
            </a>
            <span className="text-white/20">|</span>
            <a href={`mailto:${website.contact.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {website.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation with Official Site Logo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/intal-logo.png"
              alt={website.name}
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links from JSON */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive ? 'text-navy-950 font-bold' : 'text-slate-600 hover:text-navy-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact/" className="btn-gold text-sm py-2.5 px-5">
              Get Quote
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
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => {
                const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-base font-semibold ${
                      isActive ? 'bg-amber-50 text-gold-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
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
                  className="btn-gold w-full text-center py-3"
                >
                  Contact &amp; Request Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
