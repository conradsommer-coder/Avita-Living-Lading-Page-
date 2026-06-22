import { Language } from '../i18n';
import { motion } from 'motion/react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  t: any;
  onOpenForm: () => void;
}

export function Navbar({ lang, onToggleLang, t, onOpenForm }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-taupe/30 px-6 lg:px-12 py-4 flex items-center justify-between"
    >
      <div className="flex-1 flex justify-start">
        <button 
          onClick={onToggleLang}
          className="text-sm tracking-widest uppercase text-brown-warm hover:text-brown-deep transition-colors"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <h1 className="text-3xl md:text-4xl tracking-widest font-medium">ÀVITA</h1>
      </div>

      <div className="flex-1 flex justify-end">
        <motion.button 
          onClick={onOpenForm}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="hidden md:inline-flex bg-brown-warm hover:bg-brown-deep text-cream px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
        >
          {t.nav.cta}
        </motion.button>
      </div>
    </motion.nav>
  );
}
