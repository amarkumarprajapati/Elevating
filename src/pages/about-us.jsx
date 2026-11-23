import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { aboutUsPage } from '../data/data.js';

export default function AboutUs() {
  return (
    <Layout title={aboutUsPage.title} description={aboutUsPage.history.description}>
      <PageHeader title="About Us" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Company Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
              OUR STORY
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {aboutUsPage.history.headline}
            </h2>
          </div>
          <div className="md:col-span-2 text-slate-600 leading-relaxed text-base sm:text-lg">
            {aboutUsPage.history.description}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-slate-200">
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{aboutUsPage.mission.headline}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{aboutUsPage.mission.description}</p>
          </div>
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{aboutUsPage.vision.headline}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{aboutUsPage.vision.description}</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="pt-12 border-t border-slate-200">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
              EXPERIENCE & TALENT
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Our Professional Staff
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutUsPage.team.map((member, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-200 bg-white">
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                {member.role && (
                  <p className="text-sm font-semibold text-purple-700 mb-2">{member.role}</p>
                )}
                <p className="text-xs font-medium text-slate-500 mb-3">
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
