import Link from 'next/link';

const PROJECT_GROUPS = [
  {
    status: 'Ongoing',
    description: 'Projects currently in progress and nearing completion.',
    projects: [
      { name: 'Shivalik Lok Dhara Chs', progress: 'First and second phases complete. Third phase nearing completion.' },
      { name: 'Sky Developers Malad', progress: 'Nearing completion.' },
    ],
  },
  {
    status: 'Upcoming',
    description: 'Projects in the pipeline, bringing advanced elevator solutions to more spaces.',
    projects: [
      { name: 'Nandi Lok Dhara CHS Kalyan' },
      { name: 'Ashoka CHS Kalyan' },
      { name: 'Maimoon CHS Kalyan' },
      { name: 'Wange Developers Pen' },
      { name: 'Narayan Developers Pen' },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-20 py-16 sm:py-20">
      {PROJECT_GROUPS.map(({ status, description, projects }) => (
        <section key={status} aria-label={status + ' projects'}>
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              {status} PROJECTS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              {status} <span className="text-brand-700">Projects</span>
            </h2>
            {description && (
              <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">{description}</p>
            )}
          </div>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, progress }) => (
              <article
                key={name}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src="/images/passenger-lift-light-02.png"
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3">
                    {status}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2">{name}</h3>
                  {progress && <p className="text-sm leading-relaxed text-slate-600">{progress}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
