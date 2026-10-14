import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { contactInfo } from '../data/site';

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20">
      <section className="section-shell py-12 md:py-16">
        <div className="rounded-[24px] bg-sky p-5 sm:rounded-[30px] sm:p-7 md:p-10">
          <div className="max-w-2xl">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-navy md:text-5xl">Let&apos;s Start a Conversation.</h1>
            <p className="mt-5 text-lg leading-8 text-textMuted">Whether you represent a college, are exploring programs as a student or are interested in an industry partnership, we would be glad to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="card-surface p-6">
              <Mail className="mb-4 h-6 w-6 text-electric" />
              <h3 className="text-xl font-bold text-navy">Email</h3>
              <p className="mt-2 text-base text-textMuted">{contactInfo.email}</p>
            </div>
            <div className="card-surface p-6">
              <Phone className="mb-4 h-6 w-6 text-electric" />
              <h3 className="text-xl font-bold text-navy">Phone</h3>
              <p className="mt-2 text-base text-textMuted">{contactInfo.phone}</p>
            </div>
            <div className="card-surface p-6">
              <MapPin className="mb-4 h-6 w-6 text-electric" />
              <h3 className="text-xl font-bold text-navy">Location</h3>
              <p className="mt-2 text-base text-textMuted">{contactInfo.location}</p>
            </div>
          </div>

          <div className="card-surface bg-white p-5 sm:p-6 md:p-10">
            <h2 className="text-2xl font-extrabold tracking-[-0.05em] text-navy sm:text-3xl">Send an enquiry</h2>
            <form className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="flex flex-col text-sm font-medium text-textDark">Name<input className="mt-2 rounded-xl border border-borderSoft px-4 py-3" placeholder="Your name" required /></label>
              <label className="flex flex-col text-sm font-medium text-textDark">Email<input type="email" className="mt-2 rounded-xl border border-borderSoft px-4 py-3" placeholder="Email address" required /></label>
              <label className="flex flex-col text-sm font-medium text-textDark">Phone<input className="mt-2 rounded-xl border border-borderSoft px-4 py-3" placeholder="Phone number" /></label>
              <label className="flex flex-col text-sm font-medium text-textDark">Interest<select className="mt-2 rounded-xl border border-borderSoft px-4 py-3" defaultValue=""><option value="" disabled>Select interest</option><option>College partnership</option><option>Student program</option><option>General enquiry</option><option>Industry collaboration</option></select></label>
              <label className="flex flex-col text-sm font-medium text-textDark md:col-span-2">Message<textarea className="mt-2 min-h-[130px] rounded-xl border border-borderSoft px-4 py-3" placeholder="Tell us more" required /></label>
              <div className="md:col-span-2"><Button type="submit" variant="primary" className="w-full md:w-auto" icon>Send Message</Button></div>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
