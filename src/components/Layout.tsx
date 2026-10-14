import { ArrowRight, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navItems, contactInfo } from '../data/site';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-borderSoft/80 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_35px_rgba(11,43,82,0.08)]' : ''}`}>
      <div className="flex w-full items-center justify-between gap-3 px-3 py-1.5 sm:gap-4 sm:py-2 md:px-5 lg:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="CampIndus home">
          <span className="logo-reflection block">
            <img src="/campindus-logo.png" alt="CampIndus logo" className="h-14 w-36 max-w-[58vw] object-contain sm:h-16 sm:w-40 md:h-[110px] md:w-[250px]" />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric hover:shadow-lg">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSoft bg-white text-navy transition-colors hover:border-electric hover:text-electric xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-borderSoft bg-white xl:hidden">
          <div className="mx-auto max-w-[1400px] space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `block rounded-xl px-4 py-3 text-base font-medium ${isActive ? 'bg-sky text-electric' : 'text-textDark hover:bg-slate-50'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-footerNavy text-slate-200">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-start">
              <span className="logo-reflection block">
                <img src="/campindus-logo.png" alt="CampIndus logo" className="h-[84px] w-[190px] rounded-xl bg-white p-2 object-contain md:h-[96px] md:w-[220px]" />
              </span>
            </div>
            <p className="footer-brand-description max-w-md text-sm leading-7 text-slate-300">CampIndus helps students bridge campus learning with workplace expectations through practical and relevant learning experiences.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/for-colleges">For Colleges</Link></li>
              <li><Link to="/for-students">For Students</Link></li>
              <li><Link to="/for-students#faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Programs</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/programs/workplace-readiness">Workplace Readiness</Link></li>
              <li><Link to="/programs/excel">Excel</Link></li>
              <li><Link to="/programs/power-bi">Power BI</Link></li>
              <li><Link to="/programs/ai-tools">AI Tools</Link></li>
              <li><Link to="/programs/career-preparation">Career Preparation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <a aria-label="LinkedIn" href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href={contactInfo.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <span>© {new Date().getFullYear()} CampIndus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-textDark">
      <Header />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16, rotateX: 0.6 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
