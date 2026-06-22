import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
}

export function BrochureModal({ isOpen, onClose, t }: BrochureModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      // Simulate form submission
      setIsSubmitted(true);
      // Optional: reset form and close after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-cream w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-taupe hover:text-brown-deep transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-brown-warm/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brown-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-brown-deep mb-2">{t.form.success}</h3>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-serif text-brown-deep mb-3">{t.form.title}</h3>
                  <p className="text-text-dark/70 mb-8 font-light">{t.form.desc}</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-brown-warm transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder={t.form.email}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-brown-warm transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder={t.form.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-brown-warm transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder={t.form.message}
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-taupe/30 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-brown-warm transition-colors resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-brown-warm hover:bg-brown-deep text-cream py-4 rounded-lg font-medium tracking-wide transition-colors mt-4 shadow-sm"
                    >
                      {t.form.submit}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
