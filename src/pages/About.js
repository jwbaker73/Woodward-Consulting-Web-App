import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-primary mb-12"
          >
            The Legacy of <br />
            <span className="italic">The Craftsman.</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <div className="aspect-[3/4] bg-primary overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                alt="Woodward Founder" 
                className="w-full h-full object-cover opacity-70 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="prose prose-lg font-light text-muted leading-relaxed">
              <p className="text-2xl font-serif text-primary italic mb-8">
                Woodward Consulting was founded on a simple observation: the most enduring businesses are built on systems that feel invisible.
              </p>
              <p>
                In 1984, we began as a small operational firm helping local manufacturers transition from ledger books to their first digital databases. We learned then what remains true today: technology is only as good as the legacy it protects.
              </p>
              <p>
                Today, we serve global enterprises, but our approach remains artisanal. We don't believe in "off-the-shelf" solutions. Every client concierge, every inventory system, every decision dashboard we build is hand-engineered to fit the unique contours of your business.
              </p>
            </div>

            <div className="pt-12 border-t border-ink/10">
              <h2 className="text-3xl font-serif text-primary mb-8">Our Shared Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Precision", desc: "In an age of 'good enough,' we demand exactness in every line of code and every operational flow." },
                  { title: "Discretion", desc: "Your operational data is your most valuable asset. We treat it with the sanctity it deserves." },
                  { title: "Endurance", desc: "We build systems not for the next quarter, but for the next generation." },
                  { title: "Simplicity", desc: "Complexity is a sign of unfinished work. We engineer until only the essential remains." }
                ].map((value, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">{value.title}</h4>
                    <p className="text-sm text-muted font-light leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 bg-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl font-serif italic text-primary leading-tight">
            "We aren't just building software. We are building the infrastructure of your legacy."
          </p>
          <div className="mt-12 flex flex-col items-center">
            <div className="h-12 w-px bg-accent mb-6"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">The Woodward Standard</span>
          </div>
        </div>
      </section>
    </div>
  );
}