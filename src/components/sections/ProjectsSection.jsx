import Link from 'next/link';

const PROJECT_GROUPS = [
  {
    status: 'Ongoing Projects',
    description: 'Current site installations actively in progress and approaching final inspection stages.',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    projects: [
      {
        name: 'Shivalik Lok Dhara CHS',
        location: 'Kalyan, Maharashtra',
        scope: 'Passenger Elevator Installation',
        progress: 'First and second phases complete. Third phase nearing testing & handover.',
        image: '/images/passenger-lift-light-02.png',
      },
      {
        name: 'Sky Developers',
        location: 'Malad, Mumbai',
        scope: 'Commercial Elevator Infrastructure',
        progress: 'Mechanical erection completed; control panel wiring and testing in progress.',
        image: '/images/passenger.jpg',
      },
    ],
  },
  {
    status: 'Upcoming Projects',
    description: 'Contracts scheduled for execution, bringing modern vertical transportation to residential and commercial developments.',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    projects: [
      {
        name: 'Nandi Lok Dhara CHS',
        location: 'Kalyan',
        scope: 'Passenger Lifts',
        image: '/images/passenger-lift-light-02.png',
      },
      {
        name: 'Ashoka CHS',
        location: 'Kalyan',
        scope: 'Residential Elevator Replacement',
        image: '/images/source/2020/11/aditya-chinchure-FRrI46igcqs-unsplash-1024x694-1.jpg',
      },
      {
        name: 'Maimoon CHS',
        location: 'Kalyan',
        scope: 'Shaft Modernization & Installation',
        image: '/images/passenger.jpg',
      },
      {
        name: 'Wange Developers',
        location: 'Pen, Raigad',
        scope: 'Multiple Residential Elevators',
        image: '/images/source/2020/11/robert-v-ruggiero-BG-iyXjJiLs-unsplash-1024x683-1.jpg',
      },
      {
        name: 'Narayan Developers',
        location: 'Pen, Raigad',
        scope: 'Commercial Complex Lifts',
        image: '/images/car-lift-light-01.png',
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-16 py-16 sm:py-20">
      {PROJECT_GROUPS.map(({ status, description, badgeColor, projects }) => (
        <section key={status} aria-label={status}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200 gap-2">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {status}
                </h2>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${badgeColor}`}>
                  {projects.length} Sites
                </span>
              </div>
              {description && (
                <p className="mt-1 text-sm text-slate-500 max-w-xl">{description}</p>
              )}
            </div>
            <Link
              href="/contact/"
              className="text-xs font-semibold text-purple-700 hover:text-purple-800 transition uppercase tracking-wider self-start sm:self-auto"
            >
              Consult for Your Project →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <article
                key={proj.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>{proj.location}</span>
                      <span className="font-medium text-purple-700">{proj.scope}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {proj.name}
                    </h3>

                    {proj.progress && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-2.5 rounded border border-slate-100">
                        {proj.progress}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Contractor: Intal Elevators</span>
                    <Link
                      href="/contact/"
                      className="font-medium text-purple-700 hover:underline"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
