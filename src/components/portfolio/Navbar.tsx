import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        background: "rgba(253,253,201,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(198,159,213,0.3)",
        transition: "box-shadow 0.3s",
        boxShadow: isScrolled ? "0 2px 16px rgba(26,18,53,0.07)" : "none",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "1.2rem",
          color: "#1a1235",
          textDecoration: "none",
        }}
      >
        <span style={{ color: "#9b6ab5" }}>ME</span> Zinatto
      </a>

      {/* Desktop Navigation */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
        className="nav-desktop"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#6b5f7a",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#9b6ab5")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#6b5f7a")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#1a1235",
        }}
        className="nav-mobile-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "#fdfdc9",
            borderBottom: "1px solid rgba(198,159,213,0.3)",
            padding: "1rem 2rem",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.6rem 0",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#6b5f7a",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;