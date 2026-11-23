import Link from 'next/link';
import Layout from '../components/Layout';
import { History, ShieldCheck, Target, ArrowRight, UserCheck } from 'lucide-react';

const ABOUT_US_DATA = {
  title: 'About Us – Intal Elevators',
  history: {
    headline: 'Intal Elevators is a global supplier of elevator solutions',
    description: 'Intal Elevators is formed by a group of highly experienced vertical transportation professionals with individual experience of around 40 years in India and abroad.',
  },
  mission: {
    headline: 'Elevator quality and safety to enhance your life',
    description: 'We regard our work ethics in highest nature, to be productive and pro-active in our projects to be accountable for all work undertaken by Intal Elevators.',
  },
  vision: {
    headline: 'We offer only customer-oriented logistic solutions',
    description: 'We regard our work ethics in highest nature, to be productive and pro-active in our projects to be accountable for all work undertaken by Intal Elevators.',
  },
  team: [
    {
      name: 'SURYAKANT MOGAL',
      role: 'Senior Supervisor Electrical',
      experience: 'About 40 years.',
      bio: 'Suryakant an electrical engineer is a focused and simplified member of our organization.',
    },
    {
      name: 'MANGESH FANSE',
      role: 'Electrical Engineer',
      experience: 'About 15 years.',
      bio: 'Mangesh an electrical engineer is an focused and simplified member of our organization.',
    },
    {
      name: 'NILESH SANKPAL',
      role: 'Senior Technician Elevator',
      experience: 'About 17 years.',
      bio: 'Nilesh an electrical engineer is an focused and simplified member of our organization.',
    },
    {
      name: 'MANOJ NARE',
      role: 'Senior Supervisor Electrical',
      experience: 'About 10 years.',
      bio: 'Suryakant an electrical engineer is an focused and simplified member of our organization.',
    },
    {
      name: 'AMOL GOSAVI',
      role: 'Senior Technician Elevator',
      experience: 'About 09 years.',
      bio: 'Mangesh an electrical engineer is an focused and simplified member of our organization.',
    },
  ],
};

export default function AboutUs() {
  const pillars = [
    {
      kicker: 'HISTORY',
      title: ABOUT_US_DATA.history.headline,
      description: ABOUT_US_DATA.history.description,
      badge: '40+ Years Experience',
      Icon: History,
      accent: 'text-amber-500 bg-amber-50 border-amber-100',
      btnText: 'MORE INFO',
      btnHref: '/services/',
    },
    {
      kicker: 'MISSION',
      title: ABOUT_US_DATA.mission.headline,
      description: ABOUT_US_DATA.mission.description,
      badge: 'Quality & Safety',
      Icon: ShieldCheck,
      accent: 'text-blue-500 bg-blue-50 border-blue-100',
      btnText: 'MORE INFO',
      btnHref: '/products/',
    },
    {
      kicker: 'VISION',
      title: ABOUT_US_DATA.vision.headline,
      description: ABOUT_US_DATA.vision.description,
      badge: 'Customer First',
      Icon: Target,
      accent: 'text-emerald-500 bg-emerald-50 border-emerald-100',
      btnText: 'MORE INFO',
      btnHref: '/contact/',
    },
  ];

  return (
    <Layout title={ABOUT_US_DATA.title} description={ABOUT_US_DATA.history.description}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">ABOUT US</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Company Overview
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl">
            Backed by over four decades of engineering leadership, delivering certified vertical transportation across Maharashtra and beyond.
          </p>
        </div>

        {/* Pillars Cards (History, Mission, Vision) */}
        <section aria-label="Company Pillars">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.kicker}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.accent} shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                      {item.kicker}
                    </p>

                    <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <Link
                      href={item.btnHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors uppercase tracking-wider group/btn"
                    >
                      <span>{item.btnText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section aria-labelledby="team-heading" className="pt-4">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              MEET OUR TEAM
            </p>
            <h2 id="team-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our Professional Staff
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              Specialized electrical and elevator engineers with verified certifications and decades of technical experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_DATA.team.map((member, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Avatar and Experience */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100 flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-base font-bold tracking-tight text-slate-900 mb-1 group-hover:text-brand-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    Verified Engineer
                  </span>
                  <span className="text-slate-400 font-medium">Intal Elevators</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
