const AboutSection = () => {
  return (
    <section id="sobre" style={{ padding: "4rem 2rem", background: "#fdfdc9" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9b6ab5",
            marginBottom: "0.35rem",
            display: "block",
          }}
        >
          Quem sou
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1a1235",
            lineHeight: 1.1,
            marginBottom: "2.5rem",
          }}
        >
          Sobre mim
        </h2>

        <div className="about-grid">
          {/* Coluna esquerda: foto + chips */}
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: "1.75rem",
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                marginTop: "1rem",
              }}
            >
              {[
                { label: "Desenvolvedora Full-Stack", main: true },
                { label: "Código & UI/UX Design", main: false },
                { label: "Sempre aprendendo", main: false },
              ].map((chip) => (
                <span
                  key={chip.label}
                  style={{
                    padding: "0.4rem 0.9rem",
                    background: chip.main ? "#c69fd5" : "#e4cff0",
                    borderRadius: "100px",
                    fontSize: "0.71rem",
                    fontWeight: 700,
                    color: "#1a1235",
                    textAlign: "center",
                    letterSpacing: "0.02em",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna direita: texto */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              paddingTop: "0.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: 1.75,
                color: "#6b5f7a",
                fontFamily: "'Montserrat', sans-serif",
                margin: 0,
              }}
            >
              Oi, sou a <strong style={{ color: "#1a1235" }}>Maria Eduarda</strong>, tenho 20 anos,
              e sou desenvolvedora full stack júnior. Gosto de criar soluções para profissionais de
              diferentes áreas — o que me faz crescer constantemente.
            </p>

            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: 1.75,
                color: "#6b5f7a",
                fontFamily: "'Montserrat', sans-serif",
                margin: 0,
              }}
            >
              Minha base é <strong style={{ color: "#1a1235" }}>Java e Spring Boot</strong>, com o
              dia a dia em{" "}
              <strong style={{ color: "#1a1235" }}>PHP, PL/SQL, Bootstrap e React</strong>. Estou
              no 6º e último período de{" "}
              <strong style={{ color: "#1a1235" }}>Informática para Negócios</strong> na Fatec e
              sou técnica em Desenvolvimento de Sistemas formada pela{" "}
              <strong style={{ color: "#1a1235" }}>Etec Philadelpho Gouvêa Netto</strong>.
            </p>

            <p
              style={{
                fontSize: "0.83rem",
                color: "#9b6ab5",
                fontStyle: "italic",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              ✦ Para mim, programar é pensar fora da caixa e expandir meu repertório para além do que já conheço.
            </p>

            <div
              style={{
                width: "2.5rem",
                height: "2px",
                background: "#c69fd5",
                borderRadius: "2px",
              }}
            />

            <div className="values-grid">
              {["Detalhista", "Colaborativa", "Visão empreendedora", "Dedicada"].map(
                (valor) => (
                  <div
                    key={valor}
                    style={{
                      padding: "0.65rem 0.9rem",
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
                    <span style={{ color: "#9b6ab5", fontSize: "0.6rem" }}>◆</span>
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
          grid-template-columns: 280px 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
        }
        @media (max-width: 680px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-grid > div:first-child img,
          .about-grid > div:first-child > div:first-child {
            max-width: 220px;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;