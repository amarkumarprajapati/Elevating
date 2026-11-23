import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EnquiryForm from '../components/sections/EnquiryForm';

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
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-700">Testimonials</p>
            <h2 id="testimonials-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              What our clients say
            </h2>
          </header>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ title, quote }, index) => (
              <article key={index} className="rounded-2xl bg-white border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all duration-300">
                <header className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-100">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-50 font-serif text-3xl text-purple-700">
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

        {/* Clean, Human-Crafted Quick Enquiry Section */}
        <section aria-labelledby="enquiry-heading" className="py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                GET IN TOUCH
              </p>
              <h2 id="enquiry-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                Enquire Now
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Have a question about our elevators or need a quote for an installation or maintenance contract? Fill in your details and our team will get in touch with you shortly.
              </p>

              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">Phone: </span>
                  <a href={`tel:${HOME_PAGE_DATA.phone.replace(/\s/g, '')}`} className="text-purple-700 font-medium hover:underline">
                    {HOME_PAGE_DATA.phone}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Email: </span>
                  <a href={`mailto:${HOME_PAGE_DATA.email}`} className="text-purple-700 font-medium hover:underline">
                    {HOME_PAGE_DATA.email}
                  </a>
                </div>
                <div className="text-slate-500 text-xs pt-1">
                  Working hours: Monday – Saturday (8:00 AM – 6:00 PM)
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
