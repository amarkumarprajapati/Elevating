import Layout from '../components/Layout';
import Link from 'next/link';
import {
  Wrench,
  Package,
  Users,
  Building,
  Calendar,
  FileCheck,
  Headphones,
  Award,
  HardHat,
  Shield,
  Zap,
  Hammer,
  Building2,
  Gauge,
  Drill,
  ArrowRight,
} from 'lucide-react';

const SERVICES_DATA = {
  title: 'Services – Intal Elevators',
  services_list: [
    {
      name: 'ELECTRICAL CONTRACTORS',
      description: 'Certified electrical contracting for residential, commercial, and industrial facilities including main panel distribution, wiring, breaker boxes, and machinery.',
      Icon: Zap,
    },
    {
      name: 'INSTALLATIONS OF NEW LIFTS',
      description: 'Turnkey elevator installation for newly constructed buildings, redevelopment projects, and structural architectural alterations matching precise site dimensions.',
      Icon: Building,
    },
    {
      name: 'ANNUAL MAINTENANCE CONTRACTS',
      description: 'Comprehensive AMC packages with scheduled monthly inspections, oiling, safety testing, and emergency breakdown attendance to guarantee maximum uptime.',
      Icon: Calendar,
    },
    {
      name: 'ALL KIND OF REPAIRS & MODERNIZATION',
      description: 'Rapid-response troubleshooting and repairs for motors, control panels, door operators, ropes, and guide shoes, including modernization of legacy elevators.',
      Icon: Wrench,
    },
    {
      name: 'PWD LICENCE WORK',
      description: 'Authorized execution of electrical and lift works in accordance with Maharashtra PWD standards, municipal approvals, and statutory safety licensing.',
      Icon: FileCheck,
    },
    {
      name: 'TECHNICAL CONSULTATIONS',
      description: 'Expert engineering assessments on traffic analysis, structural shaft feasibility, electrical load planning, and equipment selection for architects and builders.',
      Icon: Headphones,
    },
    {
      name: "PWD LICENSED WIREMEN & ELECTRICIANS",
      description: 'Every project is staffed with government-certified wiremen holding official licenses, ensuring complete electrical safety and zero-compromise code adherence.',
      Icon: Award,
    },
    {
      name: 'SUPPLY OF LIFT COMPONENTS',
      description: 'Direct procurement and timely delivery of genuine OEM elevator parts, buttons, safety switches, cabin interiors, and traction components at competitive pricing.',
      Icon: Package,
    },
    {
      name: 'ELECTRICAL ASSISTANTS & SUPPORT',
      description: 'Skilled electrical teams and apprentices assisting senior engineers for swift project execution, neat conduit routing, and clean site handover.',
      Icon: Users,
    },
    {
      name: 'GENERAL WORKERS & RIGGERS',
      description: 'Dedicated rigging and material handling crews experienced in scaffold erection, heavy motor lifting, shaft preparation, and safe job site clearing.',
      Icon: HardHat,
    },
    {
      name: 'SAFETY & TESTING INSPECTIONS',
      description: 'Pre-commissioning load tests, overspeed governor checks, emergency alarm verifications, and safety certificate assistance for local authority approvals.',
      Icon: Shield,
    },
  ],
  electrical_equipment: [
    {
      name: 'Hand Tools & Rigging Gear',
      desc: 'Heavy-duty scaffolding, chain pulley blocks, pullers, ladder systems, and alignment jigs.',
      Icon: Hammer,
    },
    {
      name: 'Dedicated Workshop Facility',
      desc: 'In-house assembly, fabrication, panel wiring, and replacement component servicing setup.',
      Icon: Building2,
    },
    {
      name: 'Electrical Testing & Metering',
      desc: 'Digital insulation testers (meggers), clamp meters, tachometers, and phase rotation indicators.',
      Icon: Gauge,
    },
    {
      name: 'Industrial Power Tools',
      desc: 'Heavy rotary hammer drills, magnetic drills, angle grinders, and metal cutting saws.',
      Icon: Drill,
    },
  ],
};

export default function Services() {
  return (
    <Layout title={SERVICES_DATA.title} description="Comprehensive elevator and electrical engineering services across Maharashtra.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">SERVICES</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            What We Provide
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Reliable, safe, and end-to-end vertical transportation and electrical contracting services engineered to the highest industry standards.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.services_list.map((service, i) => {
            const { Icon } = service;
            return (
              <div
                key={i}
                className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
              >
                <div>
                  <div className="w-11 h-11 mb-4 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-sm font-bold tracking-tight text-slate-900 mb-2 uppercase leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={{ pathname: '/contact/', query: { product: service.name } }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800 transition"
                  >
                    <span>Enquire for Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Electrical Equipment Section */}
        <section className="pt-4">
          <div className="mb-6 pb-2 border-b border-slate-200">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Infrastructure & Workshop Equipment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Our certified technical crews work with professional-grade machinery and safety rigging equipment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.electrical_equipment.map((eq, i) => {
              const { Icon } = eq;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50"
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {eq.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
