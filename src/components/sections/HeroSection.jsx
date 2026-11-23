import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const heroSlides = [
  {
    kicker: 'PASSENGER ELEVATORS',
    title: 'Elevating Every Journey.',
    description: 'Experience comfort, safety and elegance with our modern passenger elevator solutions.',
    primaryBtn: { text: 'Explore Elevators', href: '/products/' },
    secondaryBtn: { text: 'Get a Quote', href: '/contact/' },
    image: '/images/passenger-lift-light-02.png',
  },
  {
    kicker: 'PASSENGER ELEVATORS',
    title: 'Precision In Every Detail.',
    description: 'Engineered for smooth vertical transportation, superior efficiency and timeless architectural appeal.',
    primaryBtn: { text: 'Explore Elevators', href: '/products/' },
    secondaryBtn: { text: 'Get a Quote', href: '/contact/' },
    image: '/images/passenger.jpg',
  },
  {
    kicker: 'CAR & HEAVY LIFTS',
    title: 'Heavy-Duty Reliability.',
    description: 'Robust vehicle and freight elevators built with cutting-edge engineering and seamless automation.',
    primaryBtn: { text: 'Explore Elevators', href: '/products/' },
    secondaryBtn: { text: 'Get a Quote', href: '/contact/' },
    image: '/images/car-lift-light-01.png',
  },
  {
    kicker: 'AUTOMOTIVE SOLUTIONS',
    title: 'Engineered For Space.',
    description: 'Maximize parking efficiency and building capacity with our specialized automobile lift designs.',
    primaryBtn: { text: 'Explore Elevators', href: '/products/' },
    secondaryBtn: { text: 'Get a Quote', href: '/contact/' },
    image: '/images/car.jpg',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = heroSlides[index];

  const goTo = useCallback((next) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(next);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const handlePrev = () => goTo(index === 0 ? heroSlides.length - 1 : index - 1);
  const handleNext = useCallback(() => goTo(index === heroSlides.length - 1 ? 0 : index + 1), [index, goTo]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative w-full min-h-[540px] md:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-50">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          key={current.image}
          src={current.image}
          alt={current.title}
          fetchPriority="high"
          className={`w-full h-full object-cover object-right md:object-center transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col justify-between min-h-[540px] md:min-h-[640px] lg:min-h-[720px]">
        <div
          className={`max-w-xl my-auto transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-brand-600" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-600 uppercase">
              {current.kicker}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-5">
            {current.title.replace('.', '')}
            <span className="text-brand-600">.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
            {current.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={current.primaryBtn.href}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>{current.primaryBtn.text}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href={current.secondaryBtn.href}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-900 text-slate-900 hover:text-white border-2 border-slate-300 hover:border-slate-900 text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full transition-all duration-300 group"
            >
              <span>{current.secondaryBtn.text}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-slate-200/60 mt-auto">
          {/* Counter */}
          <div className="flex flex-col gap-1.5 min-w-[70px]">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-navy-900 tracking-tight">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-semibold text-slate-500">
                {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
            <div className="w-20 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((index + 1) / heroSlides.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto py-1">
            {heroSlides.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`relative w-16 sm:w-20 h-11 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                  i === index
                    ? 'border-brand-600 ring-2 ring-brand-600/30 scale-105'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
