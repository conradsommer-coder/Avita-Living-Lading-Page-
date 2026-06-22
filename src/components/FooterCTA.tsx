import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterCTAProps {
  t: any;
  onOpenForm?: () => void;
}

export function FooterCTA({ t, onOpenForm }: FooterCTAProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-32 px-6 bg-brown-deep text-cream">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-cream mb-4">{t.footerCTA.title}</h2>
          <div className="space-y-2 text-cream/70 font-light text-sm">
            <p>{t.footerCTA.contact1}</p>
            <p>{t.footerCTA.contact2}</p>
            <p className="mt-4 pt-4 border-t border-taupe/30 inline-block text-cream/90 tracking-widest font-medium">
              {t.footerCTA.web}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 w-full bg-cream rounded-xl p-8"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-brown-warm/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brown-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-brown-deep mb-2">{t.form.success}</h3>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4" 
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-xs font-medium text-brown-warm mb-1 uppercase tracking-wider">{t.form.name}</label>
                  <input type="text" required className="w-full bg-transparent border-b border-taupe/50 pb-2 text-brown-deep focus:outline-none focus:border-brown-deep transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brown-warm mb-1 uppercase tracking-wider">{t.form.email}</label>
                  <input type="email" required className="w-full bg-transparent border-b border-taupe/50 pb-2 text-brown-deep focus:outline-none focus:border-brown-deep transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brown-warm mb-1 uppercase tracking-wider">{t.form.phone}</label>
                  <input type="tel" required className="w-full bg-transparent border-b border-taupe/50 pb-2 text-brown-deep focus:outline-none focus:border-brown-deep transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brown-warm mb-1 uppercase tracking-wider">{t.form.message}</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-taupe/50 pb-2 text-brown-deep focus:outline-none focus:border-brown-deep transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full mt-6 bg-brown-warm hover:bg-brown-deep text-cream py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-colors">
                  {t.form.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
