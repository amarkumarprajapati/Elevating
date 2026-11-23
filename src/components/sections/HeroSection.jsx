import Link from 'next/link';
import { useState } from 'react';

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
  const current = heroSlides[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[540px] md:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-50">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          key={current.image}
          src={current.image}
          alt={current.title}
          fetchPriority="high"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/80 to-transparent" />
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col justify-between min-h-[540px] md:min-h-[640px] lg:min-h-[720px]">
        {/* Content */}
        <div className="max-w-xl my-auto">
          {/* Eyebrow Kicker */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-pink-600" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-pink-600 uppercase">
              {current.kicker}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
            {current.title.replace('.', '')}
            <span className="text-pink-600">.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
            {current.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={current.primaryBtn.href}
              className="inline-flex items-center gap-2 bg-[#0b1536] hover:bg-slate-800 text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full transition shadow-md group"
            >
              <span>{current.primaryBtn.text}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={current.secondaryBtn.href}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-900 text-slate-900 hover:text-white border-2 border-slate-900 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full transition group"
            >
              <span>{current.secondaryBtn.text}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Carousel controls bar */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-slate-200/60 mt-auto">
          {/* Slide counter */}
          <div className="flex flex-col gap-1.5 min-w-[70px]">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#0b1536] tracking-tight">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-semibold text-slate-500">
                {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
            <div className="w-20 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-600 to-rose-500 transition-all duration-300"
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
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`relative w-16 sm:w-20 h-11 sm:h-12 rounded-lg overflow-hidden border-2 transition shrink-0 ${
                  i === index
                    ? 'border-pink-600 ring-2 ring-pink-600/30 scale-105'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Prev/Next arrow buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center text-slate-800 text-lg transition"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-90 text-white shadow-md flex items-center justify-center text-lg transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
