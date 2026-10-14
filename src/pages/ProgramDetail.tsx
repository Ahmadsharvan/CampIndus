import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { programs } from '../data/programs';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((item) => item.id === id);

  if (!program) {
    return (
      <section className="section-shell py-20 text-center">
        <h1 className="text-4xl font-extrabold text-navy">Program not found</h1>
        <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-electric"> <ArrowLeft className="h-4 w-4" /> View all programs</Link>
      </section>
    );
  }

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="section-shell py-12 md:py-16">
        <div className="mb-6">
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-electric"><ArrowLeft className="h-4 w-4" /> Back to programs</Link>
        </div>
        <div className="rounded-[30px] border border-borderSoft bg-white p-6 shadow-soft md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="eyebrow">{program.category}</div>
              <h1 className="mt-2 text-4xl font-extrabold tracking-[-0.06em] text-navy md:text-5xl">{program.title}</h1>
              <p className="mt-5 text-lg leading-8 text-textMuted">{program.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" icon>Enquire Now</Button>
                <Button to="/programs" variant="secondary">Explore More</Button>
              </div>
            </div>
            <div className={`rounded-[28px] ${program.accent} p-8`}>
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
                <img src={program.image} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Program overview</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-textMuted">
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-electric" /> Practical, workplace-aligned learning.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-electric" /> Hands-on assessments and guided reflection.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-electric" /> Flexible delivery based on institutional needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {program.highlights && program.learningApproach && program.outcome ? (
        <>
          <section className="section-shell py-6">
            <div>
              <h2 className="text-2xl font-bold text-navy md:text-3xl">Program Highlights</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {program.highlights.map((highlight) => (
                  <article key={highlight.title} className="card-surface p-5 sm:p-6">
                    <CheckCircle2 className="mb-4 h-6 w-6 text-electric" />
                    <h3 className="text-lg font-bold text-navy">{highlight.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-textMuted">{highlight.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section-shell py-6">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="card-surface p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-navy">Learning Approach</h2>
                <p className="mt-4 text-base leading-8 text-textMuted">{program.learningApproach}</p>
              </article>
              <article className="rounded-[22px] bg-sky p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-navy">Program Outcome</h2>
                <p className="mt-4 text-base leading-8 text-textMuted">{program.outcome}</p>
              </article>
            </div>
          </section>
        </>
      ) : (
        <section className="section-shell py-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-8">
              <h2 className="text-2xl font-bold text-navy">Topics included</h2>
              <ul className="mt-6 space-y-3">
                {program.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-base text-textMuted"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-electric" /> {topic}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-8">
              <h2 className="text-2xl font-bold text-navy">Program structure</h2>
              <ul className="mt-6 space-y-3 text-base text-textMuted">
                <li>• Practical learning sessions and guided exercises</li>
                <li>• Assessments and structured feedback</li>
                <li>• Career-oriented reflection and improvement</li>
                <li>• Delivery and duration can be tailored after discussion</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
}
