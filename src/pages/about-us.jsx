import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { aboutUsPage } from '../data/data.js';

export default function AboutUs() {
  return (
    <Layout title={aboutUsPage.title} description={aboutUsPage.history.description}>
      <PageHeader title="About Us" description="Learn about our journey, mission, and the expert team behind Intal Elevators." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* Company Overview */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              OUR STORY
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {aboutUsPage.history.headline}
            </h2>
          </div>
          <div className="md:col-span-2 text-slate-600 leading-relaxed text-base sm:text-lg">
            {aboutUsPage.history.description}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{aboutUsPage.mission.headline}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{aboutUsPage.mission.description}</p>
          </div>
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{aboutUsPage.vision.headline}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{aboutUsPage.vision.description}</p>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              EXPERIENCE & TALENT
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our Professional Staff
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutUsPage.team.map((member, i) => (
              <div key={i} className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mb-5">
                  <span className="text-xl font-bold text-brand-700">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{member.name}</h4>
                {member.role && (
                  <p className="text-sm font-medium text-brand-600 mb-3">{member.role}</p>
                )}
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Experience: {member.experience}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
