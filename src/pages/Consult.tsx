import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Consult() {
  const [formState, setFormState] = React.useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block"
            >
              The First Step
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-serif text-primary mb-8"
            >
              Begin Your <br />
              <span className="italic">Legacy Consultation.</span>
            </motion.h1>
            <p className="text-lg text-muted font-light leading-relaxed max-w-md mb-12">
              Our intake process is as precise as our engineering. Please provide the details of your operational friction, and our concierge will reach out within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Direct Inquiry</h4>
                <p className="text-primary font-serif text-xl">concierge@woodward.consulting</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Global Headquarters</h4>
                <p className="text-primary font-serif text-xl">1200 Heritage Way, Suite 400<br />Boston, MA 02108</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-paper p-12 shadow-2xl shadow-ink/5"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mb-8">
                  <Send className="text-primary" />
                </div>
                <h2 className="text-3xl font-serif text-primary mb-4">Inquiry Received</h2>
                <p className="text-muted font-light">Our concierge is reviewing your request. Expect a response shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                      placeholder="Arthur Woodward"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Corporate Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                      placeholder="arthur@legacy.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Primary Operational Friction</label>
                  <select className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light appearance-none">
                    <option>Automated Client Concierge</option>
                    <option>Paperless Precision (Digitization)</option>
                    <option>Decision Intelligence (Analytics)</option>
                    <option>Fleet & Inventory Oversight</option>
                    <option>Other / Bespoke Transformation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Brief Description of Needs</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                    placeholder="Tell us about the legacy you are protecting..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full btn-primary py-6 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                  <Send size={16} />
                </button>
                
                <p className="text-[10px] text-center text-muted uppercase tracking-widest font-medium">
                  By submitting, you agree to our privacy standards.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
