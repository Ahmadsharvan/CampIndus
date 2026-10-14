import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqs } from '../data/faqs';

const developmentAreas = [
  { title: 'Workplace confidence', image: '/program-icons/workplace-readiness.png' },
  { title: 'Digital productivity', image: '/program-icons/excel.png' },
  { title: 'Data interpretation', image: '/program-icons/power-bi.png' },
  { title: 'Communication', image: '/program-icons/communication.png' },
  { title: 'Business thinking', image: '/program-icons/business-simulations.png' },
  { title: 'Career preparation', image: '/program-icons/career-preparation.png' },
];
const journey = ['Discover relevant skills', 'Learn core concepts', 'Practice through challenges', 'Complete assessments', 'Review feedback and improve'];

export default function ForStudents() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">For Students</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-navy md:text-5xl">Your Degree Opens Doors. Your Skills Move You Forward.</h1>
            <p className="mt-5 text-lg leading-8 text-textMuted">Develop practical skills, build professional confidence and prepare for the expectations of the workplace with CampIndus.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/programs" variant="primary" icon>Explore Learning Programs</Button>
              <Button to="/contact" variant="secondary">Get Program Information</Button>
            </div>
          </div>
          <img src="/for-student.jpg" alt="Student wearing a graduation cap" className="h-64 w-full rounded-[24px] object-cover shadow-soft sm:h-80 lg:h-[390px] lg:rounded-[28px]" />
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {developmentAreas.map((item) => (
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
        <div className="card-surface p-5 sm:p-6 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-navy">Student learning journey</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {journey.map((step, index) => (
              <div key={step} className="rounded-2xl border border-borderSoft bg-slate-50 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-electric text-sm font-bold text-white">{index + 1}</div>
                <p className="text-sm leading-6 text-textMuted">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="card-surface section-glow p-8 md:p-10">
          <h3 className="text-2xl font-bold text-navy">What students can expect</h3>
          <ul className="mt-6 grid gap-4 text-base text-textMuted sm:grid-cols-2 lg:grid-cols-3">
            {['Practical activities', 'Guided exercises', 'Collaborative learning', 'Relevant case studies', 'Structured feedback', 'Opportunities to practice professional communication'].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/75 p-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-electric" /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="card-surface bg-white p-8 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-navy">Student enquiry form</h2>
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-textDark">Full name<input className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="Your full name" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Email<input type="email" className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="your@email.com" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Phone number<input className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="Phone number" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">College or institution<input className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="College or institution" required /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Course or degree<input className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="Course or degree" /></label>
            <label className="flex flex-col text-sm font-medium text-textDark">Year of study<input className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="Year" /></label>
            <label className="flex flex-col text-sm font-medium text-textDark md:col-span-2">Program of interest<select className="mt-2 rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" defaultValue=""><option value="" disabled>Select a program</option><option>Workplace Readiness</option><option>Excel</option><option>Power BI</option><option>AI Tools</option><option>Business Simulations</option><option>Communication</option><option>Career Preparation</option></select></label>
            <label className="flex flex-col text-sm font-medium text-textDark md:col-span-2">Message<textarea className="mt-2 min-h-[110px] rounded-xl border border-borderSoft bg-slate-50 px-4 py-3" placeholder="Tell us what you'd like to learn" /></label>
            <label className="flex items-center gap-2 text-sm text-textDark md:col-span-2"><input type="checkbox" required /> I agree to be contacted for program information.</label>
            <div className="md:col-span-2"><Button type="submit" variant="primary" className="w-full md:w-auto" icon>Submit Enquiry</Button></div>
          </form>
        </div>
      </section>

      <section id="faqs" className="section-shell scroll-mt-28 py-10">
        <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-navy">Frequently asked questions</h2>
        <div className="mt-6"><FAQAccordion items={faqs} /></div>
      </section>
    </motion.main>
  );
}
