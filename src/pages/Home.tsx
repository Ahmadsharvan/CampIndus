import { BookOpenText, Briefcase, ChartColumn, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Sparkles, UserRoundCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import { ProgramCard } from '../components/ProgramCard';
import { SectionHeading } from '../components/SectionHeading';
import { programs } from '../data/programs';
import { stats } from '../data/site';

const featureCards = [
  { icon: BookOpenText, title: 'Industry-Led Learning', description: 'Programs designed with real-world expectations in mind.' },
  { icon: Briefcase, title: 'Hands-On Experience', description: 'Work on challenges that feel relevant to modern workplaces.' },
  { icon: ChartColumn, title: 'Practical Assessments', description: 'Build skills with structured feedback and reflection.' },
  { icon: Sparkles, title: 'Student Feedback Driven', description: 'Improve learning experiences through active feedback loops.' },
  { icon: UserRoundCheck, title: 'Career Acceleration', description: 'Grow confidence, skills and readiness with purpose.' },
];

const imageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
export default function Home() {
  const programsTrackRef = useRef<HTMLDivElement>(null);
  const [showHeroDetails, setShowHeroDetails] = useState(false);

  const slidePrograms = (direction: 'previous' | 'next') => {
    const track = programsTrackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction === 'next' ? track.clientWidth * 0.8 : -track.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(22,119,255,0.06),_transparent_35%),_#fff]">
        <div className="section-shell py-8 md:py-12 lg:py-16">
          <div className="rounded-[32px] bg-[linear-gradient(90deg,#0B2B52_0%,#0D3B6C_100%)] px-5 py-6 text-white shadow-soft md:px-8 lg:px-10 lg:py-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_1.1fr]">
              <div className="max-w-xl">
                <div className="mb-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-200">Campus to Corporate</div>
                <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[4rem]">
                  Bridging Campus Learning <br /> with <span className="text-electric">Corporate Expectations</span>
                </h1>
                <button
                  type="button"
                  aria-expanded={showHeroDetails}
                  onClick={() => setShowHeroDetails((visible) => !visible)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
                >
                  {showHeroDetails ? 'Hide about CampIndus' : 'Discover CampIndus'}
                  <ChevronDown className={`h-4 w-4 ${showHeroDetails ? 'rotate-180' : ''}`} />
                </button>
                {showHeroDetails ? (
                  <div className="home-intro-copy mt-4 max-w-lg rounded-2xl border border-white/30 bg-white/90 p-5 text-navy shadow-inner">
                    <p className="text-sm leading-7 md:text-base">
                      CampIndus is an industry-readiness and career-acceleration initiative that bridges the gap between campus learning and corporate expectations.
                    </p>
                    <p className="mt-3 text-sm leading-7 md:text-base">
                      We partner with MBA, undergraduate and engineering colleges to build confidence, practical skills and career readiness.
                    </p>
                  </div>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button to="/programs" variant="primary" className="px-6 py-3.5" icon>Explore Programs</Button>
                  <Button to="/for-colleges" variant="secondary" className="border border-white/40 bg-white/10 px-6 py-3.5 text-white hover:bg-white hover:text-navy" icon>Partner With Us</Button>
                </div>
              </div>

              <div className="home-photo-wrap relative">
                <div className="absolute inset-0 -z-10 rounded-[26px] bg-blue-400/20 blur-3xl" />
                <img src={imageUrl} alt="Students collaborating at a workshop" className="home-faded-photo h-64 w-full rounded-[24px] object-cover sm:h-80 lg:h-[500px] lg:rounded-[28px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell -mt-2 pb-8">
          <div className="grid gap-4 rounded-[24px] border border-borderSoft bg-white p-4 shadow-soft md:grid-cols-2 xl:grid-cols-5">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-borderSoft bg-slate-50 p-4 text-left">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-textMuted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="section-shell py-16 md:py-20">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Our Programs" title="Programs for Every Career Stage" description="From foundational workplace skills to practical digital tools and career preparation, our programs help students become more confident, capable and industry-ready." />
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button to="/programs" variant="primary" icon>View All Programs</Button>
          </div>
        </div>
        <div className="programs-carousel-frame grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-1 rounded-[24px] border border-white bg-gradient-to-br from-sky/80 via-white to-lavender/70 p-2 shadow-[0_24px_60px_rgba(11,43,82,0.1)] sm:grid-cols-[40px_minmax(0,1fr)_40px] sm:gap-3 sm:rounded-[30px] sm:p-5">
          <button
            type="button"
            onClick={() => slidePrograms('previous')}
            aria-label="Show previous programs"
            className="carousel-arrow"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={programsTrackRef}
            className="programs-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 sm:gap-5"
            aria-label="CampIndus learning programs"
          >
            {programs.map((program) => (
              <div key={program.id} className="w-full shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => slidePrograms('next')}
            aria-label="Show more programs"
            className="carousel-arrow"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#08264b_0%,#0e385f_100%)] py-16 text-white md:py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow text-blue-200">Our Impact</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">Building a Future-Ready Workforce</h2>
            </div>
            <Link to="/impact" className="text-sm font-semibold text-blue-200 transition-colors hover:text-white">See our approach →</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[18px] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-electric">
                  {stat.icon === 'school' ? <BookOpenText className="h-5 w-5" /> : stat.icon === 'users' ? <Briefcase className="h-5 w-5" /> : stat.icon === 'briefcase' ? <CheckCircle2 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </div>
                <div className="text-3xl font-black tracking-[-0.06em] text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="home-photo-wrap">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" alt="Students working together in a workshop" className="home-faded-photo h-64 w-full rounded-[24px] object-cover sm:h-80 lg:h-[420px] lg:rounded-[30px]" />
          </div>
          <div>
            <div className="eyebrow">About CampIndus</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-navy md:text-[2.7rem]">Preparing Students for What&apos;s Next</h2>
            <p className="mt-4 text-lg leading-8 text-textMuted">We help bridge the gap between academic learning and industry expectations through practical training, real-world projects, structured assessments and expert mentorship.</p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="rounded-[30px] border border-borderSoft bg-white p-8 text-center shadow-soft lg:p-12">
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-navy md:text-4xl">Let&apos;s Build an Industry-Ready Campus.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-textMuted md:text-lg">Partner with CampIndus to bring practical, industry-aligned learning experiences to your students.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/for-colleges" variant="primary" icon>Partner With Us</Button>
            <Button to="/contact" variant="secondary" icon>Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </>
  );
}
