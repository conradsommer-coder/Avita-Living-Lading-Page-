import { useState } from 'react';
import { translations, Language } from './i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { VillaInside } from './components/VillaInside';
import { Lifestyle } from './components/Lifestyle';
import { TeddaSection } from './components/TeddaSection';
import { Location } from './components/Location';
import { Passion } from './components/Passion';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = translations[lang];

  return (
    <main className="min-h-screen font-sans selection:bg-olive/30 overflow-x-hidden">
      <Navbar lang={lang} onToggleLang={toggleLanguage} t={t} onOpenForm={() => setIsFormOpen(true)} />
      <Hero t={t} onOpenForm={() => setIsFormOpen(true)} />
      <Collection t={t} onOpenForm={() => setIsFormOpen(true)} />
      <VillaInside t={t} onOpenForm={() => setIsFormOpen(true)} />
      <Lifestyle t={t} />
      <TeddaSection t={t} />
      <Location t={t} />
      <Passion t={t} />
      <FooterCTA t={t} onOpenForm={() => setIsFormOpen(true)} />
      <Footer t={t} />
      
      <BrochureModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} t={t} />
    </main>
  );
}

