import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EnquiryForm from '../components/sections/EnquiryForm';
import { Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES_LIST = [
  {
    name: 'ELECTRICAL CONTRACTORS',
    description: 'Our electrical contractors are well trained and experienced in installing and maintaining electrical systems including wiring, breaker boxes, switches and other machinery.',
  },
  {
    name: 'SUPPLY OF LIFT COMPONENTS',
    description: 'We get the right product delivered to you at the right time when you need it the most saving your precious time and money.',
  },
  {
    name: 'ELECTRICAL ASSISTANTS',
    description: 'The skilled assistants for electricians to help in all their work. This makes the work of electricians way much easier to execute and complete it with zero errors.',
  },
  {
    name: 'INSTALLATIONS OF NEW LIFTS',
    description: 'In need of a new installation or be it a complete alteration of your existing building or a structural architecture we offer dynamic solutions that meets your requirements.',
  },
  {
    name: 'ANNUAL MAINTENANCE CONTRACTS',
    description: 'An elevator requires time to time servicing so that the elevators runs smoothly. We provide the annual maintenance contracts for elevators that includes best in class servicing.',
  },
  {
    name: 'PWD LICENCE WORK',
    description: "Upgradation and maintenance of roads that include national highways, major district roads, village roads and also construction of bridges, flyovers and ROB's in the state.",
  },
  {
    name: 'TECHNICAL CONSULTATIONS',
    description: "Expertise panel of professionals who are experienced in delivering exceptional service in technical supports, performing trouble shoot functions or any client's issues.",
  },
  {
    name: "ACCREDITED ELECTRICIANS WITH WIREMAN'S LICENSES",
    description: "All the workers and contractors working with us are highly trained professional and have the required wireman's licence and permit to work in the industry.",
  },
  {
    name: 'GENERAL WORKERS',
    description: 'Skilled workers for the general duties like cleaning and preparing a job site, loading, unloading and delivering materials and are experienced in using a variety of tools.',
  },
  {
    name: 'ALL KIND OF MAJOR AND MINOR REPAIRS',
    description: 'Elevators can be in need of minute or little major repairs at any time. We provide you the option for service even if you have not subscribed to annual maintenance contracts.',
  },
  {
    name: 'QUALIFIED INSTALLATION ELECTRICIANS',
    description: 'Be assured of the installation service as we have trained and experience professionals in the field job.',
  },
];

const TESTIMONIALS = [
  {
    title: 'Responsible & Reliable!',
    quote: 'Intal Elevators delivered exceptional craftsmanship on our residential lift installation. Timely delivery and seamless operation throughout.',
  },
  {
    title: 'Top-tier Engineering',
    quote: 'Their technical consultation and annual maintenance contracts gave our commercial building complete peace of mind. Outstanding customer service.',
  },
  {
    title: 'Professional Workforce',
    quote: 'The team of certified electricians and supervisors worked with meticulous safety standards. Highly recommend them across Maharashtra.',
  },
];

const HOME_PAGE_DATA = {
  title: 'Intal Elevators – Elevator Solutions in Thane, Maharashtra',
  description: 'Intal Elevators is an authorized elevator contractor offering passenger, car, home, goods, and stretcher elevators with complete installation and maintenance services.',
  phone: '+91 8007455441',
  email: 'intalelevator@gmail.com',
};

export default function Home() {
  const serviceSectionData = {
    title: 'What we can do for you',
    kicker: 'SERVICES',
    cards: SERVICES_LIST.map((item) => [
      { text: item.name },
      { text: item.description },
    ]),
  };

  return (
    <Layout title={HOME_PAGE_DATA.title} description={HOME_PAGE_DATA.description}>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsSection />
        <ServicesSection section={serviceSectionData} />
        <ProjectsSection />

        {/* Testimonials */}
        <section aria-labelledby="testimonials-title" className="py-16 sm:py-20">
          <header className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">Testimonials</p>
            <h2 id="testimonials-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              What our clients say
            </h2>
          </header>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ title, quote }, index) => (
              <article key={index} className="rounded-2xl bg-white border border-slate-100 hover:border-slate-200 p-7 shadow-sm hover:shadow-md transition-all duration-300">
                <header className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-100">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-3xl text-brand-600">
                    &ldquo;
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">Client testimonial</p>
                  </div>
                </header>
                <blockquote className="text-sm italic leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</blockquote>
              </article>
            ))}
          </div>
        </section>

        {/* Modern Quick Enquiry Section */}
        <section aria-labelledby="enquiry-section-heading" className="py-16 sm:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
                    Quick Assistance
                  </span>
                  <h2 id="enquiry-section-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Get an Instant Quote or Consultation
                  </h2>
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Have questions about elevator capacity, structural alterations, or AMC pricing? Select your required service and submit your details for an immediate response.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Free on-site inspection & technical feasibility</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Authorized contractor with verified PWD wiremen</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Fast turnaround & 24/7 emergency repair support</span>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-6 border-t border-slate-700/60 flex flex-wrap gap-4 text-sm">
                  <a
                    href={`tel:${HOME_PAGE_DATA.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-400" />
                    <span>{HOME_PAGE_DATA.phone}</span>
                  </a>
                  <a
                    href={`mailto:${HOME_PAGE_DATA.email}`}
                    className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-400" />
                    <span>{HOME_PAGE_DATA.email}</span>
                  </a>
                </div>
              </div>

              {/* Right Column Interactive Form Card */}
              <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-9 shadow-xl border border-slate-100">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
