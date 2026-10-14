import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';

const principles = [
  { title: 'Practicality', image: '/principle-icons/practicality.png' },
  { title: 'Relevance', image: '/principle-icons/relevance.png' },
  { title: 'Continuous improvement', image: '/principle-icons/continuous-improvement.png' },
  { title: 'Collaboration', image: '/principle-icons/collaboration.png' },
  { title: 'Accessibility', image: '/principle-icons/accessibility.png' },
  { title: 'Accountability', image: '/principle-icons/accountability.png' },
];

export default function About() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="section-shell py-12 md:py-16">
        <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(125deg,#071D3A_0%,#0B3D70_62%,#1677FF_140%)] p-6 text-white shadow-[0_24px_60px_rgba(7,29,58,0.2)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100">About CampIndus</div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">Connecting Education with the World of Work.</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">CampIndus exists to make the transition from campus learning to professional life more practical, confident and meaningful.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" alt="Students working together in a workshop" className="h-[350px] w-full rounded-[28px] border border-white/20 object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <SectionHeading eyebrow="The Challenge" title="Academic knowledge is only the beginning." description="Students also need opportunities to apply what they learn, communicate professionally, work in teams, solve practical problems and understand workplace expectations." className="max-w-none" titleClassName="lg:whitespace-nowrap lg:text-[clamp(1.5rem,2.5vw,2.25rem)]" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: 'Apply knowledge', text: 'Connect learning to real tasks, scenarios and business contexts.' },
            { title: 'Build confidence', text: 'Practice communication, presentation and decision-making with guidance.' },
            { title: 'Understand expectations', text: 'Learn how professional culture, teamwork and accountability work together.' },
          ].map((item) => (
            <div key={item.title} className="card-surface p-6">
              <Target className="mb-4 h-8 w-8 text-electric" />
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-textMuted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <SectionHeading eyebrow="Our Approach" title="A practical path from learning to readiness" className="max-w-none" titleClassName="lg:whitespace-nowrap lg:text-[clamp(1.5rem,2.5vw,2.25rem)]" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Learn', 'Build foundational knowledge and context.'],
            ['Practice', 'Work through practical challenges and real scenarios.'],
            ['Assess', 'Show understanding through structured feedback and reflection.'],
            ['Improve', 'Apply guidance to refine skills and confidence.'],
          ].map(([label, text], index) => (
            <div key={label} className="card-surface p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky text-electric font-bold">{index + 1}</div>
              <h3 className="text-xl font-bold text-navy">{label}</h3>
              <p className="mt-3 text-sm leading-7 text-textMuted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="mission-vision-card mission-card-mission rounded-[24px] p-7 md:p-8">
            <div className="eyebrow relative z-10">Mission</div>
            <h3 className="mission-vision-copy relative z-10 mt-3 text-xl font-extrabold leading-snug tracking-[-0.035em] text-navy md:text-2xl">&quot;To bridge the campus-to-corporate gap through practical, industry-led learning and meaningful career preparation&quot;</h3>
          </div>
          <div className="mission-vision-card mission-card-vision rounded-[24px] p-7 md:p-8">
            <div className="eyebrow relative z-10">Vision</div>
            <h3 className="mission-vision-copy relative z-10 mt-3 text-xl font-extrabold leading-snug tracking-[-0.035em] text-navy md:text-2xl">&quot;To contribute to a workforce where students enter professional environments with stronger skills, confidence and readiness&quot;</h3>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <SectionHeading eyebrow="What makes us different" title="Designed to complement academic growth" className="max-w-none" titleClassName="lg:whitespace-nowrap lg:text-[clamp(1.5rem,2.5vw,2.25rem)]" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            'Practical learning instead of theory alone',
            'Industry-relevant challenges',
            'Hands-on assessments',
            'Student feedback loops',
            'Institution-specific learning needs',
            'Career-focused outcomes',
          ].map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-borderSoft bg-white p-5 shadow-soft">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-electric" />
              <p className="text-base text-textMuted">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <SectionHeading eyebrow="Our principles" title="A learning model built around growth" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="card-surface p-6">
              <img src={principle.image} alt="" aria-hidden="true" className="mb-4 h-14 w-14 object-contain" />
              <h3 className="text-xl font-bold text-navy">{principle.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="rounded-[30px] bg-navy p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">Let&apos;s make learning more connected to industry.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/programs" variant="primary" className="bg-electric" icon>Explore Our Programs</Button>
            <Button to="/for-colleges" variant="secondary" className="border border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy" icon>Partner With CampIndus</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
