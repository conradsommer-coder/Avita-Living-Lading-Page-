import { motion } from 'motion/react';

interface TeddaSectionProps {
  t: any;
}

export function TeddaSection({ t }: TeddaSectionProps) {
  return (
    <section className="py-24 px-6 bg-brown-warm text-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1781141049/Logo-Camel_opj5p1.png"
              alt="Tedda Farm Club" 
              className="h-16 md:h-20 w-auto opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-sm font-sans tracking-widest uppercase mb-4 text-taupe">{t.tedda.title}</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-cream/90">
            {t.tedda.desc}
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-5xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl relative aspect-video bg-brown-deep/30 border border-white/10"
        >
          <video 
            src="https://res.cloudinary.com/dr78wne7t/video/upload/v1781572596/Video_21-03-23_8_42_54_k1h8vz.mov"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.tedda.amenities.map((amenity: any, i: number) => {
            const images = [
              "https://res.cloudinary.com/dr78wne7t/image/upload/v1781307543/ChatGPT_Image_Jun_12_2026_03_13_54_PM_ifcwfc.png",
              "https://res.cloudinary.com/dr78wne7t/image/upload/v1781307555/Gemini_Generated_Image_3lt4mn3lt4mn3lt4_ka2dh2.png",
              "https://res.cloudinary.com/dr78wne7t/image/upload/v1781307541/ChatGPT_Image_Jun_12_2026_03_20_37_PM_xytbnc.png",
              "https://res.cloudinary.com/dr78wne7t/image/upload/v1781895006/ChatGPT_Image_Jun_19_2026_11_49_52_AM_auvh2s.png"
            ];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-brown-deep/20 rounded-xl overflow-hidden border border-cream/5 hover:border-cream/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={images[i]} 
                    alt={amenity.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 right-6 text-xl font-serif text-cream">{amenity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm font-light text-cream/80 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
