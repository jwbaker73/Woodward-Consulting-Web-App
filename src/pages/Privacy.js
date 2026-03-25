import React from 'react';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block"
        >
          Legal
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-primary mb-16"
        >
          Privacy <span className="italic">Policy.</span>
        </motion.h1>

        <div className="prose prose-ink max-w-none space-y-12 text-muted font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">Introduction</h2>
            <p>
              At Woodward Consulting, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li>Usage Data includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="pt-12 border-t border-ink/10 text-xs uppercase tracking-widest font-bold">
            Last Updated: March 24, 2026
          </section>
        </div>
      </div>
    </div>
  );
}