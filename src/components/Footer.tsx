interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-cream border-t border-taupe/20 text-center text-xs tracking-wider text-brown-warm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-6 items-center">
        <span>{t.footer.copy}</span>
        <span className="hidden md:inline text-taupe">•</span>
        <a href="#" className="hover:text-brown-deep transition-colors">{t.footer.privacy}</a>
        <span className="hidden md:inline text-taupe">•</span>
        <a href="#" className="hover:text-brown-deep transition-colors">{t.footer.cookie}</a>
      </div>
    </footer>
  );
}
