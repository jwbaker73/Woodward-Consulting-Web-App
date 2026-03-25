import React from 'react';
import { motion } from 'motion/react';

export default function Terms() {
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
          Terms & <span className="italic">Conditions.</span>
        </motion.h1>

        <div className="prose prose-ink max-w-none space-y-12 text-muted font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Woodward Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Woodward Consulting's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Disclaimer</h2>
            <p>
              The materials on Woodward Consulting's website are provided "as is". Woodward Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Limitations</h2>
            <p>
              In no event shall Woodward Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Woodward Consulting's Internet site, even if Woodward Consulting or a Woodward Consulting authorized representative has been notified orally or in writing of the possibility of such damage.
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