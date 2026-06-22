import { motion } from 'motion/react';

interface LifestyleProps {
  t: any;
}

export function Lifestyle({ t }: LifestyleProps) {
  return (
    <section className="py-24 px-6 bg-cream border-t border-taupe/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 aspect-square rounded-full overflow-hidden border-8 border-taupe/20 relative shadow-md"
        >
          <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781307557/Gemini_Generated_Image_ggqi5gggqi5gggqi_efgwtt.png" alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl text-brown-deep mb-6 leading-tight">
            {t.lifestyle.title}
          </h2>
          <p className="text-lg text-text-dark/80 leading-relaxed font-light mb-6">
            {t.lifestyle.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
