import { homePage } from '../../data/data';

export default function ProjectsSection() {
  return (
    <div className="space-y-16 bg-white py-12 sm:py-16">
      {homePage.projectGroups.map(({ status, projects }) => (
        <section key={status} aria-label={status + ' projects'}>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {status} <span className="text-purple-700">Projects</span>
          </h2>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, progress }) => (
              <article key={name}>
                <img src="/images/passenger-lift-light-02.png" alt="" loading="lazy" className="mb-5 aspect-[16/10] w-full rounded-sm object-cover" />
                <h3 className="text-xl font-medium tracking-tight text-slate-900 sm:text-2xl">{name}</h3>
                {progress && <p className="mt-3 leading-relaxed text-slate-600">{progress}</p>}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
