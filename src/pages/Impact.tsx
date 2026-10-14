import { motion } from 'framer-motion';
import { BarChart3, Target } from 'lucide-react';
import { Button } from '../components/Button';
import { impactMetrics } from '../data/impact';

export default function Impact() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(125deg,#061A33_0%,#0A3765_58%,#075DA0_100%)] py-16 text-white">
        <div className="pointer-events-none absolute -right-24 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-cyan-200/15 bg-cyan-300/10" />
        <div className="pointer-events-none absolute right-[16%] top-8 -z-10 h-64 w-64 rounded-full bg-electric/25 blur-[90px]" />
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100">Our Impact</div>
            <h1 className="text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">Turning Learning into Practical Capability.</h1>
            <p className="mt-5 text-lg leading-8 text-blue-50">CampIndus focuses on the skills, confidence and practical experience that help students prepare for professional environments.</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Access to industry-relevant learning', 'Practical programs designed for real workplace expectations.'],
            ['Hands-on practice', 'Application-based exercises and guided experience.'],
            ['Practical assessments', 'Build habits of reflection and improvement.'],
            ['Continuous feedback', 'Learning becomes more targeted and actionable.'],
          ].map(([title, text]) => (
            <div key={title} className="card-surface p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky text-electric"><Target className="h-5 w-5" /></div>
              <h3 className="text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-textMuted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="overflow-hidden rounded-[30px] border border-borderSoft bg-[linear-gradient(145deg,#F4F8FF_0%,#FFFFFF_60%,#EAF7F2_100%)] p-8 shadow-soft md:p-10">
          <div className="mb-8 flex flex-col gap-3 border-b border-borderSoft pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Measured with care</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] text-navy">Impact dashboard</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-textMuted">Only verified data should be displayed publicly. Placeholder values are shown until confirmed metrics are available.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white bg-white/90 p-5 shadow-[0_12px_30px_rgba(11,43,82,0.07)]">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-textMuted">{metric.label}</div>
                <div className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-navy">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            ['Program participation', 'Demonstration data only'],
            ['Assessment completion', 'Demonstration data only'],
            ['Skill development', 'Demonstration data only'],
            ['Learner satisfaction', 'Demonstration data only'],
            ['Institutional feedback', 'Demonstration data only'],
          ].map(([title, label]) => (
            <div key={title} className="rounded-[22px] border border-borderSoft bg-white p-5 shadow-soft">
              <BarChart3 className="mb-4 h-5 w-5 text-electric" />
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm text-textMuted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="rounded-[30px] bg-sky p-8 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-navy">Stories and case studies</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ['Institution or program', 'Placeholder story'],
              ['Challenge', 'Document the learner or institutional need.'],
              ['Intervention', 'Describe the practical program or workshop.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-borderSoft bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-textMuted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="rounded-[28px] bg-navy p-8 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">Create a practical learning experience for your students.</h2>
          <div className="mt-8 flex justify-center">
            <Button to="/for-colleges" variant="primary" className="bg-electric" icon>Partner With Us</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
