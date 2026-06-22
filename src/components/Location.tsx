import { motion } from 'motion/react';

interface LocationProps {
  t: any;
}

export function Location({ t }: LocationProps) {
  return (
    <section className="py-24 px-6 bg-taupe/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans tracking-widest uppercase mb-4 text-brown-warm"
          >
            {t.location.suptitle}
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-brown-deep mb-4"
          >
            {t.location.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-dark/80 max-w-2xl mx-auto font-light"
          >
            {t.location.body}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-xl overflow-hidden border border-taupe/50 relative shadow-lg bg-cream group cursor-pointer"
        >
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781897429/ChatGPT_Image_Jun_19_2026_12_29_44_PM_gbwn3f.png" 
            alt="Master Plan" 
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110" 
            referrerPolicy="no-referrer" 
          />
        </motion.div>
      </div>
    </section>
  );
}
