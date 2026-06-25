const AboutSection = () => {
  return (
    <section id="sobre" style={{ padding: "5rem 2rem", background: "#fdfdc9" }}>
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
          {/* Coluna esquerda: foto + chips */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                aspectRatio: "1",
                borderRadius: "1.5rem",
                overflow: "hidden",
                background: "#e4cff0",
                border: "2.5px solid #c69fd5",
              }}
            >
              <img
                src="/img_portfolio.jpeg"
                alt="Maria Eduarda Zinatto"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { label: "Backend com alma frontend", highlight: true },
                { label: "Curiosa por natureza", highlight: false },
                { label: "Sempre aprendendo", highlight: false },
              ].map((chip) => (
                <span
                  key={chip.label}
                  style={{
                    padding: "0.35rem 0.85rem",
                    background: chip.highlight ? "#c69fd5" : "#e4cff0",
                    borderRadius: "100px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#1a1235",
                    textAlign: "center",
                    letterSpacing: "0.03em",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna direita: texto */}
          <div style={{ display: "flex", flexDirection: "column", paddingTop: "0.25rem" }}>
            <p style={{ color: "#6b5f7a", fontSize: "0.92rem", marginBottom: "0.9rem" }}>
              Sou a <strong style={{ color: "#1a1235" }}>Maria Eduarda</strong>, desenvolvedora
              full stack apaixonada por resolver problemas reais com código limpo e interfaces que
              fazem sentido pra quem usa.
            </p>
            <p style={{ color: "#6b5f7a", fontSize: "0.92rem", marginBottom: "0.9rem" }}>
              Minha base é sólida em{" "}
              <strong style={{ color: "#1a1235" }}>Java e Spring Boot</strong> — onde me sinto mais
              em casa — mas o dia a dia me fez crescer muito com{" "}
              <strong style={{ color: "#1a1235" }}>PHP e SQL Server</strong>, integrando sistemas
              legados e aprendendo a transitar entre mundos diferentes.
            </p>
            <p style={{ color: "#6b5f7a", fontSize: "0.92rem", marginBottom: "1.25rem" }}>
              Estudante de{" "}
              <strong style={{ color: "#1a1235" }}>Informática para Negócios</strong> na Fatec,
              formada como Técnica em Desenvolvimento de Sistemas pela Etec. Cofundadora da startup{" "}
              <strong style={{ color: "#1a1235" }}>VeloCidade</strong> — 2º lugar em competição de
              empreendedorismo.
            </p>

            {/* Citação */}
            <div
              style={{
                padding: "0.9rem 1.1rem",
                background: "#fff",
                borderLeft: "3px solid #c69fd5",
                borderRadius: "0 0.75rem 0.75rem 0",
                fontSize: "0.88rem",
                color: "#6b5f7a",
                fontStyle: "italic",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              ✦ Programar, pra mim, é entender o problema antes de abrir o editor. Gosto de pensar
              no usuário primeiro.
            </div>

            {/* Grid de valores */}
            <div className="values-grid">
              {["Detalhista", "Colaborativa", "Visão de produto", "Foco em usabilidade"].map(
                (valor) => (
                  <div
                    key={valor}
                    style={{
                      padding: "0.65rem 0.85rem",
                      background: "#fff",
                      border: "1.5px solid rgba(198,159,213,0.3)",
                      borderRadius: "0.75rem",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#1a1235",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span style={{ color: "#9b6ab5" }}>◆</span>
                    {valor}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;