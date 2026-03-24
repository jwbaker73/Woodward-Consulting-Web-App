import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Legacy', path: '/legacy' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight font-bold text-primary">Woodward</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary -mt-1">Consulting</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `nav-link relative py-2 ${isActive ? 'text-primary' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/consult" className="btn-primary py-3 px-6">Consultation</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={({ isActive }) => `text-2xl font-serif ${isActive ? 'text-accent' : 'text-primary'}`}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/consult" onClick={() => setIsMenuOpen(false)} className="btn-primary">Begin Consultation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-paper py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl tracking-tight font-bold">Woodward</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Consulting</span>
            </div>
            <p className="text-paper/60 max-w-sm font-light leading-relaxed">
              Engineering operational excellence for the modern enterprise. 
              Protecting the legacy of craftsmanship through intelligent automation.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-secondary">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/legacy" className="hover:text-accent transition-colors">Legacy</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/consult" className="hover:text-accent transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-secondary">Connect</h4>
            <div className="flex space-x-6">
              <Linkedin size={20} className="hover:text-accent cursor-pointer" />
              <Twitter size={20} className="hover:text-accent cursor-pointer" />
              <Instagram size={20} className="hover:text-accent cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-paper/40 font-bold">
          <span>© 2026 Woodward Consulting. All Rights Reserved.</span>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-paper cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-paper cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
