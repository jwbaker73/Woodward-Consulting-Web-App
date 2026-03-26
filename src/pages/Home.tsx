import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, FileText, BarChart3, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block">Operational Excellence</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-primary">
              Simplicity <br />
              <span className="italic">Engineered.</span> <br />
              Legacy <br />
              <span className="italic">Protected.</span>
            </h1>
            <p className="text-lg text-muted max-w-md mb-10 font-light leading-relaxed">
              We transform complex operational friction into elegant, automated systems. 
              Modern tools, heritage values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consult" className="btn-primary">Begin Consultation</Link>
              <Link to="/legacy" className="btn-outline">Our Philosophy</Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] bg-primary overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-accent p-12 w-64 h-64 flex flex-col justify-end">
              <span className="text-4xl font-serif text-primary italic">Est. 1984</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Engineering the <br /><span className="italic">Essential.</span></h2>
              <p className="text-lg text-muted font-light leading-relaxed mb-10">
                From intelligent client intake to complex fleet oversight, we build the 
                infrastructure that allows your legacy to thrive in a digital world.
              </p>
              <Link to="/services" className="btn-outline inline-block">Explore Our Services</Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Bot size={24} />, title: "Automation" },
                { icon: <FileText size={24} />, title: "Digitization" },
                { icon: <BarChart3 size={24} />, title: "Analytics" },
                { icon: <Truck size={24} />, title: "Logistics" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-ink/5 flex flex-col items-center text-center hover:bg-primary hover:text-paper transition-all group">
                  <div className="text-accent mb-4 group-hover:text-paper">{item.icon}</div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Woodward Method */}
      <section className="py-32 px-6 bg-primary text-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block">Our Process</span>
            <h2 className="text-5xl font-serif mb-12">The Woodward Method</h2>
            
            <div className="space-y-12">
              {[
                { step: "01", title: "The Audit", desc: "We map your current friction points and legacy assets." },
                { step: "02", title: "The Blueprint", desc: "A bespoke architectural plan for your digital transformation." },
                { step: "03", title: "The Integration", desc: "Seamless deployment of automated systems with zero downtime." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8">
                  <span className="text-accent font-serif text-2xl italic">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-paper/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-secondary/20 p-8">
              <div className="w-full h-full border border-accent/30 flex items-center justify-center p-12 text-center">
                <p className="text-2xl font-serif italic leading-relaxed">
                  "True automation isn't about replacing the craftsman; it's about giving the craftsman a better tool."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
