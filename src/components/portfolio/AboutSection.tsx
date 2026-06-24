const AboutSection = () => {
  return (
    <section
      id="sobre"
      style={{ padding: "5rem 2rem", background: "#fdfdc9" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9b6ab5",
            marginBottom: "0.5rem",
          }}
        >
          Quem sou
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "3rem",
            color: "#1a1235",
            lineHeight: 1.2,
          }}
        >
          Sobre mim
        </h2>

        <div className="about-grid">
          {/* Photo */}
          <div
            style={{
              aspectRatio: "1",
              borderRadius: "2rem",
              overflow: "hidden",
              background: "#e4cff0",
              border: "3px solid #c69fd5",
            }}
          >
            <img
              src="/img_portfolio.jpeg"
              alt="Maria Eduarda Zinatto"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Text */}
          <div>
            <p style={{ color: "#6b5f7a", marginBottom: "1rem", fontSize: "0.95rem" }}>
              Estudante de{" "}
              <strong style={{ color: "#1a1235" }}>Informática para Negócios</strong> na Fatec e
              formada como{" "}
              <strong style={{ color: "#1a1235" }}>Técnica em Desenvolvimento de Sistemas</strong>{" "}
              pela Etec.
            </p>
            <p style={{ color: "#6b5f7a", marginBottom: "1rem", fontSize: "0.95rem" }}>
              No <strong style={{ color: "#1a1235" }}>backend</strong> trabalho com Java e Spring
              Boot, construindo APIs REST robustas. No{" "}
              <strong style={{ color: "#1a1235" }}>frontend</strong>, desenvolvo interfaces modernas
              com React, sempre focando em usabilidade.
            </p>
            <p style={{ color: "#6b5f7a", marginBottom: "1rem", fontSize: "0.95rem" }}>
              Cofundadora da startup{" "}
              <strong style={{ color: "#1a1235" }}>VeloCidade</strong> — 2º lugar em competição de
              empreendedorismo.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                marginTop: "1.5rem",
                padding: "0.7rem 1.2rem",
                background: "#e4cff0",
                borderRadius: "0.75rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#1a1235",
              }}
            >
              ✦ Integrando programação e design para soluções funcionais
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;