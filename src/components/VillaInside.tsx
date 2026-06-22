import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bed, Bath, UtensilsCrossed, Sunrise, Waves, X } from 'lucide-react';

interface VillaInsideProps {
  t: any;
  onOpenForm?: () => void;
}

export function VillaInside({ t, onOpenForm }: VillaInsideProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const icons = [
    <Bed className="w-5 h-5 text-brown-warm" />,
    <Bath className="w-5 h-5 text-brown-warm" />,
    <UtensilsCrossed className="w-5 h-5 text-brown-warm" />,
    <Sunrise className="w-5 h-5 text-brown-warm" />,
    <Waves className="w-5 h-5 text-brown-warm" />
  ];

  return (
    <section className="py-24 px-6 bg-taupe/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-brown-deep mb-6">
            {t.inside.title}
          </h2>
          <p className="text-lg text-text-dark/80 font-light leading-relaxed">
            {t.inside.desc}
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781898080/LIVING_VILLA_usxpz7.jpg" alt="Villa Living Room" className="w-full h-full object-cover rounded-xl aspect-[4/3] shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781898080/LIVING_VILLA_usxpz7.jpg')} />
          <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781898081/REC_VILLA_ohxja9.jpg" alt="Villa Bedroom" className="w-full h-full object-cover rounded-xl aspect-[4/3] shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781898081/REC_VILLA_ohxja9.jpg')} />
          <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781570309/villa1_1_vxtefn.jpg" alt="Villa Interior" className="w-full h-full object-cover rounded-xl aspect-[4/3] shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781570309/villa1_1_vxtefn.jpg')} />
          <div className="grid grid-rows-2 gap-4">
            <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781570310/villa2_1_vrgpc9.jpg" alt="Villa Rooftop" className="w-full h-full object-cover rounded-xl shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781570310/villa2_1_vrgpc9.jpg')} />
            <div className="grid grid-cols-2 gap-4">
              <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781570312/villa3_1_pnqn7h.jpg" alt="Villa Terrace" className="w-full h-full object-cover rounded-xl shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781570312/villa3_1_pnqn7h.jpg')} />
              <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781570313/villa4_1_vqgwk4.jpg" alt="Villa Pool" className="w-full h-full object-cover rounded-xl shadow-sm cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" onClick={() => setSelectedImage('https://res.cloudinary.com/dr78wne7t/image/upload/v1781570313/villa4_1_vqgwk4.jpg')} />
            </div>
          </div>
        </div>

        {/* Quick Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
          {t.inside.features.map((feature: string, i: number) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              className="flex items-center space-x-3 bg-cream px-6 py-3 rounded-full shadow-sm"
            >
              {icons[i]}
              <span className="text-sm font-medium tracking-wide text-brown-deep">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Specs Table */}
        <div className="max-w-4xl mx-auto bg-cream rounded-2xl shadow-xl overflow-hidden border border-taupe/30">
          <div className="bg-brown-warm text-cream px-8 py-5">
            <h3 className="text-xl font-serif tracking-wide">{t.inside.tableTitle}</h3>
          </div>
          <div className="px-8 py-6">
             <div className="grid grid-cols-3 font-semibold text-sm tracking-wider text-brown-deep uppercase border-b border-taupe/40 pb-4 mb-4">
               <div className="col-span-1">{t.inside.headers.concept}</div>
               <div className="text-right">{t.inside.headers.sqm}</div>
               <div className="text-right">{t.inside.headers.sqft}</div>
             </div>
             
             <div className="space-y-4">
               {t.inside.rows.map((row: any, i: number) => (
                 <div key={i} className="grid grid-cols-3 text-text-dark/80 text-sm font-light border-b border-taupe/10 pb-4">
                   <div className="col-span-1">{row.concept}</div>
                   <div className="text-right font-mono text-xs">{row.sqm}</div>
                   <div className="text-right font-mono text-xs">{row.sqft}</div>
                 </div>
               ))}
               
               {/* Total Row */}
               <div className="grid grid-cols-3 text-brown-deep font-bold text-sm pt-2">
                 <div className="col-span-1 uppercase tracking-widest">{t.inside.total.concept}</div>
                 <div className="text-right font-mono">{t.inside.total.sqm}</div>
                 <div className="text-right font-mono">{t.inside.total.sqft}</div>
               </div>
             </div>
          </div>
        </div>

        <p className="text-center text-xs text-text-dark/50 mt-12 max-w-2xl mx-auto">
          * {t.inside.legal}
        </p>

        <div className="mt-16 flex justify-center">
          <motion.button 
            onClick={onOpenForm}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-brown-warm hover:bg-brown-deep text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
          >
            {t.nav.cta}
          </motion.button>
        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          >
            <motion.button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Villa Gallery Enlarge"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
