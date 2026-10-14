import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Program } from '../data/programs';

export function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div
      className="program-card-perspective h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link
        to={`/programs/${program.id}`}
        className={`program-card group relative flex h-full min-h-[275px] flex-col overflow-hidden rounded-[26px] border border-white/80 p-6 shadow-soft ${program.accent}`}
      >
        <span className="program-card-glow pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/70 blur-3xl transition-transform duration-500 group-hover:scale-150" />
        <div className="relative flex items-start justify-between">
          <div className="program-icon-frame flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur-sm">
            <img
              src={program.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <span className="rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy/70">
            {program.category}
          </span>
        </div>

        <div className="relative mt-6 flex flex-1 flex-col">
          <h3 className="text-xl font-bold tracking-[-0.03em] text-navy">{program.title}</h3>
          <p className="mt-2 text-sm leading-6 text-textMuted">{program.shortDescription}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            Explore program
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-electric transition-all duration-300 group-hover:bg-electric group-hover:text-white">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
