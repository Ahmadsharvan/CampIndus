import { motion } from 'framer-motion';
import { ChevronRight, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';

const offerings = [
  { title: 'Industry-readiness programs', image: '/program-icons/workplace-readiness.png' },
  { title: 'Digital skills workshops', image: '/program-icons/excel.png' },
  { title: 'Practical business simulations', image: '/program-icons/business-simulations.png' },
  { title: 'Communication development', image: '/program-icons/communication.png' },
  { title: 'Career preparation', image: '/program-icons/career-preparation.png' },
  { title: 'Assessment and feedback', image: '/program-icons/power-bi.png' },
];
const benefits = ['Practical learning experiences', 'Better alignment with workplace expectations', 'Structured student assessments', 'Actionable feedback', 'Flexible program selection', 'Collaborative planning'];

export default function ForColleges() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">For Educational Institutions</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-navy md:text-5xl">Build an Industry-Ready Campus.</h1>
            <p className="mt-5 text-lg leading-8 text-textMuted">Partner with CampIndus to complement academic learning with structured, practical, industry-aligned training experiences.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" icon>Request a Partnership Discussion</Button>
              <Button to="/programs" variant="secondary">Explore Programs</Button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Faculty member guiding students" className="h-64 w-full rounded-[24px] object-cover shadow-soft sm:h-80 lg:h-[390px] lg:rounded-[28px]" />
        </div>
      </section>

      <section className="section-shell py-10">
        <SectionHeading eyebrow="Institutional priorities" title="Common challenges institutions want to address" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            'Improving practical skill development',
            'Preparing students for workplace expectations',
            'Strengthening professional confidence',
            'Supporting digital and business tool proficiency',
            'Offering relevant career preparation',
            'Understanding student learning progress',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-borderSoft bg-white p-5 shadow-soft">
              <ChevronRight className="mb-4 h-5 w-5 text-electric" />
              <p className="text-base text-textMuted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <SectionHeading eyebrow="Our offering" title="Structured support for institutional learning goals" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item) => (
            <div key={item.title} className="card-surface p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky p-2">
                <img src={item.image} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <SectionHeading eyebrow="Partnership model" title="A clear and collaborative process" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Understand requirements', 'Assess institutional goals and student needs.'],
            ['Design a learning plan', 'Create a relevant and practical program structure.'],
            ['Deliver learning', 'Run sessions with guided activities and feedback.'],
            ['Review outcomes', 'Assess progress and refine learning plans.'],
          ].map(([title, text], index) => (
            <div key={title} className="card-surface p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky font-bold text-electric">{index + 1}</div>
              <h3 className="text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-textMuted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <SectionHeading eyebrow="Institutional benefits" title="A practical learning partner for campus growth" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-borderSoft bg-white p-5 shadow-soft">
              <Users className="mt-1 h-5 w-5 text-electric" />
              <p className="text-base text-textMuted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="card-surface bg-sky p-5 sm:p-6 md:p-10">
          <SectionHeading eyebrow="Partnership enquiry" title="Let’s prepare students for what comes next." />
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-textDark">Institution name<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="Institution name" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Institution type<select className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" defaultValue="" required><option value="" disabled>Select type</option><option>Engineering College</option><option>Undergraduate College</option><option>MBA or Management Institution</option><option>University</option><option>Other</option></select></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Contact person<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="Full name" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Designation<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="Designation" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Email<input type="email" className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="name@institution.edu" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Phone number<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="Phone number" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">City and state<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="City and state" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Approx. number of students<input className="mt-2 rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="e.g. 500" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark md:col-span-2">Programs of interest<textarea className="mt-2 min-h-[110px] rounded-xl border border-borderSoft bg-white px-4 py-3" placeholder="Share programs of interest" /></label>
            <label className="flex items-center gap-2 text-sm text-textDark md:col-span-2"><input type="checkbox" required /> I agree to be contacted for partnership discussion.</label>
            <div className="md:col-span-2"><Button type="submit" variant="primary" className="w-full md:w-auto" icon>Submit Enquiry</Button></div>
          </form>
        </div>
      </section>
    </motion.main>
  );
}
