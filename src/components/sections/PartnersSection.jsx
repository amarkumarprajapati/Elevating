import React, { useRef } from 'react';

// Partner SVG Logos matching the reference image cleanly with subtle brand styling
const WorldConnectLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-purple-700 transition-colors">
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
    <span className="text-base font-extrabold tracking-tight text-slate-800 group-hover:text-purple-700 transition-colors">
      World Connect
    </span>
  </div>
);

const StatusGroupLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex flex-col items-center justify-center gap-0.5 text-slate-700 group-hover:text-purple-700 transition-colors">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 6v12l-8-6-8 6V9z" />
        <path d="M12 9l5 4v4l-5-4-5 4v-4z" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="text-base font-semibold leading-tight text-slate-800 group-hover:text-purple-700 transition-colors">
        Status Group
      </span>
      <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
        Finance Company
      </span>
    </div>
  </div>
);

const CapitalLogo = () => (
  <div className="flex items-center gap-3">
    <div className="flex items-end gap-1 h-7">
      <span className="w-1 h-3.5 bg-slate-700 rounded-xs group-hover:bg-purple-700 transition-colors" />
      <span className="w-1 h-5 bg-slate-800 rounded-xs group-hover:bg-purple-700 transition-colors" />
      <span className="w-1 h-7 bg-slate-600 rounded-xs group-hover:bg-purple-700 transition-colors" />
      <span className="w-1 h-4 bg-slate-700 rounded-xs group-hover:bg-purple-700 transition-colors" />
    </div>
    <span className="text-base font-bold tracking-[0.22em] text-slate-800 group-hover:text-purple-700 transition-colors">
      CAPITAL
    </span>
  </div>
);

const FinanceLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex items-end gap-1 h-7">
      <span className="w-1.5 h-7 bg-slate-700 rounded-xs group-hover:bg-purple-700 transition-colors" />
      <span className="w-1.5 h-5 bg-slate-500 rounded-xs group-hover:bg-purple-700 transition-colors" />
      <span className="w-1.5 h-3 bg-slate-400 rounded-xs group-hover:bg-purple-700 transition-colors" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-base font-bold text-slate-800 leading-tight group-hover:text-purple-700 transition-colors">
        Finance
      </span>
      <span className="text-[10px] lowercase tracking-wider text-slate-400 font-medium">
        strategy and planning
      </span>
    </div>
  </div>
);

const VertexLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-7 h-7 rounded bg-purple-100 flex items-center justify-center text-purple-700 font-black text-sm">
      <svg className="w-4 h-4 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22" />
      </svg>
    </div>
    <span className="text-base font-bold tracking-tight text-slate-800 group-hover:text-purple-700 transition-colors">
      VERTEX ELEVATORS
    </span>
  </div>
);

const MetroLiftLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex items-center justify-center w-7 h-7 border-2 border-slate-700 rounded text-slate-700 group-hover:border-purple-700 group-hover:text-purple-700 transition-colors">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 15l5-5 5 5" />
        <path d="M7 9l5-5 5 5" />
      </svg>
    </div>
    <span className="text-base font-semibold tracking-wider uppercase text-slate-800 group-hover:text-purple-700 transition-colors">
      Metro Lift
    </span>
  </div>
);

const PARTNERS = [
  { id: 1, name: 'World Connect', Component: WorldConnectLogo },
  { id: 2, name: 'Status Group', Component: StatusGroupLogo },
  { id: 3, name: 'CAPITAL', Component: CapitalLogo },
  { id: 4, name: 'Finance Strategy & Planning', Component: FinanceLogo },
  { id: 5, name: 'Vertex Elevators', Component: VertexLogo },
  { id: 6, name: 'Metro Lift', Component: MetroLiftLogo },
];

export default function PartnersSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section aria-labelledby="partners-heading" className="w-full bg-slate-50/70 py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <p
            id="partners-heading"
            className="text-xs font-bold uppercase tracking-wider text-purple-700"
          >
            PARTNERS
          </p>

          {/* Navigation arrow buttons matching the preview */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll partners left"
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll partners right"
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Continuous auto-scrolling track + manual scrollable */}
        <div className="relative overflow-hidden group/track">
          {/* Subtle fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

          {/* Marquee animation track with pause on hover */}
          <div
            ref={scrollRef}
            className="flex items-center gap-12 sm:gap-16 overflow-x-auto scrollbar-none py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicated for seamless infinite marquee loop */}
            <div className="flex items-center gap-12 sm:gap-16 shrink-0 animate-marquee group-hover/track:[animation-play-state:paused]">
              {PARTNERS.map(({ id, name, Component }) => (
                <div
                  key={`p1-${id}`}
                  className="group flex items-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                  title={name}
                >
                  <Component />
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="flex items-center gap-12 sm:gap-16 shrink-0 animate-marquee group-hover/track:[animation-play-state:paused]"
            >
              {PARTNERS.map(({ id, name, Component }) => (
                <div
                  key={`p2-${id}`}
                  className="group flex items-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                  title={name}
                >
                  <Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
