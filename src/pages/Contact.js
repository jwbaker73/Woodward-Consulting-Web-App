import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = React.useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-secondary mb-6 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-primary mb-12"
          >
            Contact <br />
            <span className="italic">Us.</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">Direct Channels</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-secondary/10 flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Mailing Address</h4>
                    <p className="text-primary font-serif text-xl leading-relaxed">
                      813 Oak St, Suite 10-1087<br />
                      Conway, AR 72032
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-secondary/10 flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Email</h4>
                    <p className="text-primary font-serif text-xl">info@woodwardconsulting.net</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-secondary/10 flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Phone</h4>
                    <p className="text-primary font-serif text-xl">(501) 588-4659</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-ink/10">
              <p className="text-muted font-light leading-relaxed">
                Whether you have a specific operational challenge or simply wish to learn more about our methodology, our team is available for discrete inquiries.
              </p>
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
                <h2 className="text-3xl font-serif text-primary mb-4">Message Sent</h2>
                <p className="text-muted font-light">We have received your inquiry and will respond shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-xs uppercase tracking-widest font-bold text-primary hover:text-secondary transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-ink/10 py-3 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full btn-primary py-6 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}