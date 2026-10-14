import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="section-shell py-16">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-8 shadow-soft md:p-10">
        <h1 className="text-4xl font-extrabold tracking-[-0.05em] text-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-7 text-textMuted">This is a draft privacy policy for review and approval before publication. It should be checked by the responsible business or legal reviewer.</p>

        <div className="mt-8 space-y-8 text-textMuted">
          <section>
            <h2 className="text-2xl font-bold text-navy">Information collected</h2>
            <p className="mt-3 leading-7">We collect only the information necessary for the stated purposes of program enquiry, institutional discussion and communication.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Information submitted through enquiry forms</h2>
            <p className="mt-3 leading-7">This may include name, email, phone number, institution details, course information and message content when submitted through the website.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Purpose of processing</h2>
            <p className="mt-3 leading-7">Information is used to respond to enquiries, share relevant program information, improve the user experience and maintain communication with interested students and institutions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Data storage and protection</h2>
            <p className="mt-3 leading-7">Data should be stored securely, using appropriate credentials and access controls where a backend is configured.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Third-party services</h2>
            <p className="mt-3 leading-7">Any third-party providers must be reviewed for security and compliance before use.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-navy">Data retention</h2>
            <p className="mt-3 leading-7">Information should be retained only for as long as needed for the stated purpose and then deleted or archived in line with internal policy.</p>
          </section>
        </div>
      </div>
    </motion.main>
  );
}
