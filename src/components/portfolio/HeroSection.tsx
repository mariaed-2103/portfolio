import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
        background: "#fdfdc9",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          background: "#e4cff0",
          borderRadius: "50%",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "320px",
          height: "320px",
          background: "#c69fd5",
          borderRadius: "50%",
          opacity: 0.2,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
        <span
          style={{
            display: "inline-block",
            padding: "0.35rem 1rem",
            background: "#c69fd5",
            color: "#1a1235",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderRadius: "100px",
            marginBottom: "1.5rem",
          }}
        >
          Disponível para novas oportunidades
        </span>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            color: "#1a1235",
          }}
        >
          Desenvolvedora
          <br />
          <em style={{ color: "#9b6ab5" }}>Full Stack</em>
          <br />
          com visão de produto
        </h1>

        <p
          style={{
            fontSize: "0.92rem",
            color: "#6b5f7a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "2.5rem",
          }}
        >
          Java · Spring Boot · React 
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projetos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "100px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              background: "#1a1235",
              color: "#fdfdc9",
              border: "2px solid #1a1235",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#9b6ab5";
              el.style.borderColor = "#9b6ab5";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1a1235";
              el.style.borderColor = "#1a1235";
            }}
          >
            Ver Projetos
            <ArrowRight size={16} />
          </a>

          <a
            href="#contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "100px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              background: "transparent",
              color: "#1a1235",
              border: "2px solid #1a1235",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1a1235";
              el.style.color = "#fdfdc9";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#1a1235";
            }}
          >
            <Mail size={16} />
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;