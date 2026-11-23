import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';

const WEBSITE = {
  name: 'Intal Elevators',
  logo: '/images/source/2020/11/Intal-logo.png',
  phone: '+91 8007455441',
  email: 'intalelevator@gmail.com',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Products', href: '/products/' },
    { label: 'Services', href: '/services/' },
    { label: 'Awards & Certificates', href: '/awards-and-certificates/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = router.asPath.split('?')[0].split('#')[0];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 font-sans shadow-xs">
      {/* 1. Top Utility Row (Light themed with project colors and Inter font) */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-slate-600">
          <div className="flex items-center gap-5">
            <span className="text-slate-500 font-medium">Authorized Elevator Contractor & Engineers</span>
            <span className="text-slate-300">•</span>
            <Link href="/contact/" className="hover:text-purple-700 font-medium transition-colors">
              FAQ
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact/" className="hover:text-purple-700 font-medium transition-colors">
              Help Desk
            </Link>
          </div>

          {/* Social Icons in project brand purple */}
          <div className="flex items-center gap-3.5 text-purple-700">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-900 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-purple-900 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-purple-900 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Middle Brand & Info Row (Clean typography in Inter, project brand purple accents) */}
      <div className="bg-white border-b border-slate-200/80 py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand matching project font and style */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={WEBSITE.logo}
              alt={WEBSITE.name}
              width={44}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {WEBSITE.name}
              </span>
              <span className="text-[11px] font-semibold text-purple-700 tracking-wider uppercase">
                Elevator Solutions & Services
              </span>
            </div>
          </Link>

          {/* Three Details Columns styled with brand icons and typography */}
          <div className="flex items-center gap-8 text-xs">
            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <Clock className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 font-medium">Sunday CLOSED</span>
                <span className="font-bold text-slate-900 tracking-tight">MON - SAT 8.00 - 18.00</span>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <Phone className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 font-medium">Call Us Anytime</span>
                <a href={`tel:${WEBSITE.phone.replace(/\s/g, '')}`} className="font-bold text-slate-900 hover:text-purple-700 transition-colors tracking-tight">
                  {WEBSITE.phone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 max-w-[280px]">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <MapPin className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 font-medium leading-tight">Opposite 333, Near chatrapati shivaji school,</span>
                <span className="font-bold text-slate-900 tracking-tight">Ulhasnagar - 421004.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile Logo display */}
        <Link href="/" className="lg:hidden flex items-center gap-2.5">
          <img
            src={WEBSITE.logo}
            alt={WEBSITE.name}
            width={34}
            height={34}
            className="h-8 w-auto object-contain"
          />
          <span className="text-lg font-bold text-slate-900">
            {WEBSITE.name}
          </span>
        </Link>

        {/* Desktop Links (Inter sans, clean brand hover state) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {WEBSITE.navigation.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== '/' && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold py-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-purple-700 border-purple-700 font-bold'
                    : 'text-slate-700 border-transparent hover:text-purple-700 hover:border-slate-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-xs transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
          aria-label="Toggle navigation menu"
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
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2">
          {WEBSITE.navigation.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== '/' && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  isActive ? 'bg-purple-50 text-purple-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact/"
              className="block text-center bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
