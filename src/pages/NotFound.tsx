import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="rounded-[28px] border border-borderSoft bg-white p-10 text-center shadow-soft">
        <div className="text-7xl font-black tracking-[-0.08em] text-electric">404</div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-navy">Page not found</h1>
        <p className="mt-3 text-base text-textMuted">The page you are looking for may have moved or no longer exists.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
      </div>
    </main>
  );
}
