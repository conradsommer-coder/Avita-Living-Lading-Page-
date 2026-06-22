import { motion } from 'motion/react';

interface CollectionProps {
  t: any;
  onOpenForm?: () => void;
}

export function Collection({ t, onOpenForm }: CollectionProps) {
  return (
    <section className="py-24 md:py-36 px-6 relative bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl text-brown-deep mb-6 leading-tight">
              {t.collection.title}
            </h2>
            <p className="text-lg text-text-dark/80 leading-relaxed font-light mb-8">
              {t.collection.body}
            </p>
            <motion.button 
              onClick={onOpenForm}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-brown-warm hover:bg-brown-deep text-cream px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 inline-block"
            >
              {t.nav.cta}
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 border-l border-taupe px-8"
          >
            {t.collection.villas.map((villa: string, i: number) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-olive"></span>
                <span className="font-serif italic text-lg text-brown-warm">{villa}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4 }}
           className="w-full rounded-2xl overflow-hidden shadow-2xl relative bg-cream border border-taupe/50"
        >
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781723121/ChatGPT_Image_Jun_17_2026_12_03_33_PM_dbqksq.png" 
            alt="Ávita Villas Plan" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
