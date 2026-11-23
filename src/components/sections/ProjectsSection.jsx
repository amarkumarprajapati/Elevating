import Link from 'next/link';

const PROJECT_GROUPS = [
  {
    status: 'Ongoing Projects',
    projects: [
      {
        name: 'Shivalik Lok Dhara CHS',
        progress: '1st & 2nd phase completed • 3rd about to finish',
        image: '/images/passenger-lift-light-02.png',
      },
      {
        name: 'Sky Developers',
        progress: 'About to complete soon',
        image: '/images/passenger.jpg',
      },
    ],
  },
  {
    status: 'Upcoming Projects',
    projects: [
      {
        name: 'Nandi Lok Dhara CHS',
        image: '/images/passenger-lift-light-02.png',
      },
      {
        name: 'Ashoka CHS',
        image: '/images/source/2020/11/aditya-chinchure-FRrI46igcqs-unsplash-1024x694-1.jpg',
      },
      {
        name: 'Maimoon CHS',
        image: '/images/passenger.jpg',
      },
      {
        name: 'Wange Developers',
        image: '/images/source/2020/11/robert-v-ruggiero-BG-iyXjJiLs-unsplash-1024x683-1.jpg',
      },
      {
        name: 'Narayan Developers',
        image: '/images/car-lift-light-01.png',
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-16 py-16 sm:py-20">
      {PROJECT_GROUPS.map(({ status, projects }) => (
        <section key={status} aria-label={status} className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center gap-3 pb-3 ">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {status}
            </h2>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <article
                key={proj.name}
                className="group flex flex-col justify-between rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition overflow-hidden"
              >
                <div>
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {proj.name}
                    </h3>

                    {/* Progress note only when present */}
                    {proj.progress && (
                      <p className="mt-2.5 text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 leading-relaxed">
                        {proj.progress}
                      </p>
                    )}
                  </div>
                </div>

                {/* Clean Bottom Action */}
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Intal Elevators</span>
                  <Link
                    href={{ pathname: '/contact/', query: { product: proj.name } }}
                    className="font-semibold text-purple-700 hover:text-purple-800 transition"
                  >
                    Enquire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
