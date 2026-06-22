import { motion } from 'motion/react';

interface HeroProps {
  t: any;
  onOpenForm?: () => void;
}

export function Hero({ t, onOpenForm }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://res.cloudinary.com/dr78wne7t/video/upload/v1781571442/Hacer_un_video_de_esta_villa_y_s4o7qx.mp4" 
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dr78wne7t/image/upload/v1781570307/WhatsApp_Image_2026-05-28_at_11.50.11_AM_syulb7.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/30 to-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl leading-tight text-white mb-6 max-w-4xl mx-auto"
        >
          {t.hero.headline}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-text-dark/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {t.hero.sub}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button 
            onClick={onOpenForm}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="md:hidden bg-brown-warm text-cream hover:bg-brown-deep px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
