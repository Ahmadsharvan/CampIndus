import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="section-shell py-16">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-8 shadow-soft md:p-10">
        <h1 className="text-4xl font-extrabold tracking-[-0.05em] text-navy">Terms and Conditions</h1>
        <p className="mt-4 text-sm leading-7 text-textMuted">This draft should be reviewed by the appropriate legal or business reviewer before publication and should not be treated as final legal wording.</p>

        <div className="mt-8 space-y-8 text-textMuted">
          <section>
            <h2 className="text-2xl font-bold text-navy">Website use</h2>
            <p className="mt-3 leading-7">This website is intended for informational and enquiry purposes. Users should use it in a responsible and lawful manner.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Program descriptions</h2>
            <p className="mt-3 leading-7">Program outlines are illustrative and intended to communicate the general learning focus. Details may vary based on institutional requirements and implementation approach.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Enquiries and registrations</h2>
            <p className="mt-3 leading-7">Submitting an enquiry does not create a binding agreement or guarantee participation until confirmed in writing by the relevant team.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Accuracy of information</h2>
            <p className="mt-3 leading-7">CampIndus aims to keep content accurate and up to date, but information may change as programs, schedules or requirements are refined.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Limitation of responsibility</h2>
            <p className="mt-3 leading-7">CampIndus is not liable for damages arising from reliance on website content, external links or non-confirmed program information.</p>
          </section>
        </div>
      </div>
    </motion.main>
  );
}
