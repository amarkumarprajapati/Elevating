import Link from 'next/link';
import SeoHead from '../components/SeoHead';
import PageHeader from '../components/PageHeader';
import siteData from '../helper/site.json';

const { pages } = siteData;
const { about_us, home } = pages;

export default function AboutUs() {
  return (
    <>
      <SeoHead
        title="About Us – Intal Elevators | 40+ Years Experience in Maharashtra"
        description="Meet the elevator professionals at Intal Elevators. Founded by vertical transportation experts with 40 years individual experience in India and abroad."
        canonicalUrl={about_us.url}
        keywords="About Intal Elevators, Elevator company Thane, Vertical transportation Maharashtra, Lift engineers"
      />

      <PageHeader
        title={about_us.title.split('–')[0].trim()}
      />

      {/* History & Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge-gold mb-3">Company Heritage</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight mb-6">
                {about_us.history.headline}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {about_us.history.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {home.about_summary}
              </p>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="badge-gold mb-2">Mission &amp; Vision</span>
                <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
                  {about_us.mission.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {about_us.mission.description}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-navy-900 border border-slate-200">
                <img
                  src="/images/passenger.jpg"
                  alt="Intal Elevators Quality Workmanship"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Staff */}
      <section className="py-16 lg:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-gold mb-2">Leadership &amp; Field Staff</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              Experienced Engineering Personnel
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Our seasoned engineers, senior supervisors, and licensed technicians bring decades of dedicated vertical transportation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about_us.team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-navy-950 text-gold-400 font-display text-2xl font-black flex items-center justify-center mx-auto mb-5 border-2 border-gold-500 shadow-md">
                    {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <h3 className="font-display text-xl font-black text-navy-950 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    {member.role || 'Senior Elevator Specialist'}
                  </div>
                  <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Experience: {member.experience}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
