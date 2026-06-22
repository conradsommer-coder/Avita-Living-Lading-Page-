import { motion } from 'motion/react';

interface PassionProps {
  t: any;
}

export function Passion({ t }: PassionProps) {
  return (
    <section className="py-32 px-6 bg-cream text-center">
      <div className="max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-brown-deep mb-8"
        >
          {t.passion.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-text-dark/80 leading-relaxed font-light"
        >
          {t.passion.body}
        </motion.p>
      </div>

      {/* Partners Strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="pt-16 border-t border-taupe/30 max-w-5xl mx-auto"
      >
        <div className="flex justify-center mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-500">
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781716465/Screenshot_2026-06-17_at_10.13.56_a.m._czcztj.png" 
            alt="Partners" 
            className="w-full max-w-4xl h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
