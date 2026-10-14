import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProgramCard } from '../components/ProgramCard';
import { programs } from '../data/programs';

const categories = ['All', 'Foundation', 'Digital Skills', 'Analytics', 'Future Skills', 'Experiential Learning', 'Professional Skills', 'Career Growth'];

export default function Programs() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const search = query.trim().toLowerCase();
      const matchesSearch = !search
        || program.title.toLowerCase().includes(search)
        || program.shortDescription.toLowerCase().includes(search)
        || program.category.toLowerCase().includes(search);
      const matchesCategory = category === 'All' || program.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [category, query]);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-24">
      <section className="section-shell pt-8 md:pt-12">
        <div className="programs-hero-frame relative isolate overflow-hidden rounded-[34px] px-6 py-12 text-white md:px-12 md:py-16 lg:px-16">
          <div className="programs-hero-orbit absolute -right-24 -top-36 -z-10 h-[430px] w-[430px] rounded-full border border-white/20 bg-blue-300/10" />
          <div className="absolute right-[13%] top-10 -z-10 h-64 w-64 rounded-full bg-cyan-300/25 blur-[90px]" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="programs-hero-content max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-electric px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_rgba(22,119,255,0.3)]">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Our Learning Programs
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] md:text-6xl">
              Skills that move
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-sky-200 bg-clip-text text-transparent">careers forward.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white md:text-lg">
              Explore practical, industry-aligned learning experiences that turn knowledge into confidence, capability and workplace readiness.
            </p>
            <a href="#program-catalogue" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-200">
              Explore the catalogue <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="program-catalogue" className="section-shell scroll-mt-28 pt-14 md:pt-20">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Find your next skill</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.05em] text-navy md:text-4xl">Learning built for what&apos;s next</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-textMuted">Choose a focus area to discover hands-on learning paths for students and institutions.</p>
          </div>
          <div className="text-sm font-semibold text-textMuted">
            <span className="text-navy">{filteredPrograms.length}</span> {filteredPrograms.length === 1 ? 'program' : 'programs'}
          </div>
        </div>

        <div className="rounded-[26px] border border-white bg-white/90 p-4 shadow-[0_18px_50px_rgba(11,43,82,0.08)] backdrop-blur md:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <label className="relative block w-full xl:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-textMuted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
                autoComplete="off"
                className="form-control relative z-10 w-full rounded-full border border-borderSoft bg-paleBlue/70 py-3.5 pl-11 pr-4 text-sm text-navy outline-none transition focus:border-electric focus:bg-white focus:ring-4 focus:ring-electric/10"
                placeholder="Search programs or skills"
                aria-label="Search programs"
              />
            </label>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 xl:flex-wrap xl:justify-end" role="group" aria-label="Filter programs by category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    category === item
                      ? 'border-navy bg-navy text-white shadow-md'
                      : 'border-borderSoft bg-white text-textMuted hover:-translate-y-0.5 hover:border-electric/40 hover:text-electric'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.035 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPrograms.length === 0 ? (
          <div className="mt-8 rounded-[28px] border border-dashed border-borderSoft bg-white p-12 text-center shadow-soft">
            <Search className="mx-auto h-8 w-8 text-electric" />
            <h3 className="mt-4 font-heading text-xl font-bold text-navy">No matching programs</h3>
            <p className="mt-2 text-sm text-textMuted">Try a different keyword or choose another category.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
              className="mt-5 rounded-full bg-sky px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-electric hover:text-white"
            >
              Clear filters
            </button>
          </div>
        ) : null}
      </section>
    </motion.main>
  );
}
