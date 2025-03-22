import { footerSection } from '@/lib/content/footer';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent"
      >
        {footerSection.title}
      </a>
    </footer>
  );
};

export default Footer;
