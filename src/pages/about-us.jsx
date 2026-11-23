import Link from 'next/link';
import Layout from '../components/Layout';
import { History, Shield, Eye, ArrowRight } from 'lucide-react';

const ABOUT_US_DATA = {
  title: 'About Us – Intal Elevators',
  history: {
    headline: '40+ Years of Vertical Transportation Leadership',
    description: 'Intal Elevators was founded by senior vertical transportation professionals possessing over four decades of individual expertise across Maharashtra, India, and abroad. From residential co-operative housing societies to large-scale commercial installations, we have built a reputation for reliable engineering, punctual handover, and meticulous safety standards.',
  },
  mission: {
    headline: 'Safety, Quality & Reliability in Every Step',
    description: 'Our primary objective is to deliver dependable, safe, and whisper-quiet vertical mobility solutions. We hold ourselves accountable to strict regulatory standards, utilizing only genuine OEM parts and government-licensed electrical wiremen on every project.',
  },
  vision: {
    headline: 'Client-Oriented Engineering & Lifelong Service',
    description: 'We believe building an elevator is just the beginning of a lifelong partnership. Through rigorous annual maintenance contracts (AMC), rapid-response troubleshooting, and transparent pricing, we keep people moving with peace of mind.',
  },
  team: [
    {
      name: 'Suryakant Mogal',
      role: 'Senior Supervisor Electrical',
      experience: '40+ Years Experience',
      bio: 'Senior electrical engineer with extensive expertise directing complex elevator electrical circuitry, main supply distribution panels, and high-rise shaft installations.',
    },
    {
      name: 'Mangesh Fanse',
      role: 'Lead Electrical Engineer',
      experience: '15 Years Experience',
      bio: 'Specialist in elevator drive automation, variable frequency controllers (VFD), microprocessor logic boards, and safety circuit diagnostics.',
    },
    {
      name: 'Nilesh Sankpal',
      role: 'Senior Technician Elevator',
      experience: '17 Years Experience',
      bio: 'Expert field technician supervising mechanical traction alignment, guide rail installations, overspeed governor testing, and emergency cabin braking systems.',
    },
    {
      name: 'Manoj Nare',
      role: 'Senior Supervisor Electrical',
      experience: '10 Years Experience',
      bio: 'Oversees site execution, wireman compliance, conduit routing, and periodic statutory inspection clearances with local municipal authorities.',
    },
    {
      name: 'Amol Gosavi',
      role: 'Senior Technician Elevator',
      experience: '9 Years Experience',
      bio: 'Skilled in elevator modernization, preventative maintenance servicing, door operator adjustments, and rapid emergency breakdown response.',
    },
  ],
};

export default function AboutUs() {
  const pillars = [
    {
      kicker: 'OUR HISTORY',
      title: ABOUT_US_DATA.history.headline,
      description: ABOUT_US_DATA.history.description,
      Icon: History,
      btnText: 'Explore Our Services',
      btnHref: '/services/',
    },
    {
      kicker: 'OUR MISSION',
      title: ABOUT_US_DATA.mission.headline,
      description: ABOUT_US_DATA.mission.description,
      Icon: Shield,
      btnText: 'View Product Range',
      btnHref: '/products/',
    },
    {
      kicker: 'OUR VISION',
      title: ABOUT_US_DATA.vision.headline,
      description: ABOUT_US_DATA.vision.description,
      Icon: Eye,
      btnText: 'Get in Touch',
      btnHref: '/contact/',
    },
  ];

  return (
    <Layout title={ABOUT_US_DATA.title} description="Learn about Intal Elevators history, leadership, mission, and experienced technical staff in Maharashtra.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">ABOUT US</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            About Intal Elevators
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Registered elevator contractor offering domestic, commercial, and industrial vertical transport engineering across Thane, Kalyan, and Mumbai regions.
          </p>
        </div>

        {/* Pillars: History, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const { Icon } = item;
            return (
              <div
                key={item.kicker}
                className="flex flex-col justify-between p-7 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
              >
                <div>
                  <div className="w-11 h-11 mb-5 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                    {item.kicker}
                  </p>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={item.btnHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800 transition"
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <section className="pt-4">
          <div className="mb-6 pb-2 border-b border-slate-200">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Technical Staff & Engineering Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Experienced, government-licensed wiremen and elevator technicians leading our projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_DATA.team.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                    {member.experience}
                  </span>
                </div>

                <p className="text-xs font-semibold text-purple-700 mb-3">
                  {member.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
