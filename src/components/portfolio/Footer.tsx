const Footer = () => {
  return (
    <footer className="py-[1.5rem] px-[2rem] bg-[#1a1235] text-[#e4cff0] flex flex-row items-center justify-between gap-4 [font-family:'Montserrat',sans-serif] text-[0.82rem]">
      <p className="tracking-wide">
        © 2026 Maria Eduarda Zinatto
      </p>
      
      <div className="flex items-center gap-[1.25rem]">
        <a 
          href="https://github.com/mariaed-2103" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4cff0] hover:text-[#c69fd5] transition-colors underline"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/maria-eduarda-zinatto-94a6881a2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4cff0] hover:text-[#c69fd5] transition-colors underline"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:mariaedzinattoo@gmail.com"
          className="text-[#e4cff0] hover:text-[#c69fd5] transition-colors underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;