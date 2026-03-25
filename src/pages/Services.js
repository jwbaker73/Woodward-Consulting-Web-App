import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, FileText, BarChart3, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-primary mb-12"
          >
            Operational <br />
            <span className="italic">Excellence.</span>
          </motion.h1>
          <p className="text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between legacy craftsmanship and modern efficiency. 
            Our services are designed to protect your heritage while engineering your future.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bento-card min-h-[400px] group"
            >
              <Bot size={40} className="text-accent mb-8 group-hover:text-paper" />
              <div>
                <h3 className="text-3xl font-serif mb-4">Automated Client Concierge</h3>
                <p className="text-muted group-hover:text-paper/80 font-light max-w-md">
                  Intelligent intake systems that qualify leads and schedule consultations 
                  while you focus on high-value strategy. We ensure every client feels the 
                  Woodward standard from the first interaction.
                </p>
              </div>
              <ArrowRight className="self-end opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bento-card group"
            >
              <FileText size={40} className="text-accent mb-8 group-hover:text-paper" />
              <div>
                <h3 className="text-2xl font-serif mb-4">Paperless Precision</h3>
                <p className="text-sm text-muted group-hover:text-paper/80 font-light">
                  Digitizing legacy workflows with secure, cloud-native document management. 
                  Transition from physical archives to instant, searchable intelligence.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bento-card group"
            >
              <BarChart3 size={40} className="text-accent mb-8 group-hover:text-paper" />
              <div>
                <h3 className="text-2xl font-serif mb-4">Decision Intelligence</h3>
                <p className="text-sm text-muted group-hover:text-paper/80 font-light">
                  Real-time analytics dashboards that turn raw data into actionable legacy strategy. 
                  Visualize your operational health at a glance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bento-card min-h-[400px] group"
            >
              <Truck size={40} className="text-accent mb-8 group-hover:text-paper" />
              <div>
                <h3 className="text-3xl font-serif mb-4">Fleet & Inventory Oversight</h3>
                <p className="text-muted group-hover:text-paper/80 font-light max-w-md">
                  End-to-end tracking systems for physical assets, ensuring nothing is lost 
                  in the transition to digital. Precision management for the physical world.
                </p>
              </div>
              <ArrowRight className="self-end opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-primary text-paper text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Ready to engineer your legacy?</h2>
          <p className="text-paper/60 font-light mb-12">
            Every transformation begins with a single consultation. Let's discuss how 
            Woodward can bring simplicity to your operations.
          </p>
          <Link to="/consult" className="btn-outline border-paper text-paper hover:bg-paper hover:text-primary inline-block">
            Begin Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}