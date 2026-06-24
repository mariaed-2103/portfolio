import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-8 bg-navy text-wisteria-light flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[0.82rem]">
      <p className="tracking-wide">
        © {currentYear} – Desenvolvido por <span className="font-semibold text-white">Maria Eduarda Zinatto</span>
      </p>
      
      <div className="flex items-center gap-5">
        <a 
          href="https://github.com/mariaed-2103" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-wisteria-light hover:text-wisteria transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a 
          href="https://linkedin.com/in/maria-eduarda-zinatto-94a6881a2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-wisteria-light hover:text-wisteria transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a 
          href="mailto:mariaedzinattoo@gmail.com"
          className="text-wisteria-light hover:text-wisteria transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;