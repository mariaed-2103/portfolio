interface TimelineItem {
  type: "education" | "experience" | "course" | "project";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  {
    type: "experience",
    title: "Desenvolvedora Fullstack",
    organization: "Empro — Estágio Atual",
    period: "2026 – Presente",
    description:
      "Atuação no desenvolvimento e manutenção de sistemas governamentais internos da Prefeitura Municipal e colaboração ativa com equipes de produto.",
  },
  {
    type: "experience",
    title: "Desenvolvedora Full Stack (Freelance)",
    organization: "Analytics Polaris",
    period: "Out 2025 – Dez 2025",
    description:
      "Plataforma web com Java, Spring Boot e React. APIs REST, integração full stack e interfaces responsivas com Tailwind CSS.",
  },
  {
    type: "experience",
    title: "Desenvolvedora Fullstack",
    organization: "Sistema Gestor",
    period: "Jun 2025 – Ago 2025",
    description:
      "Desenvolvimento de páginas internas, integração de sistemas e testes de notas fiscais eletrônicas.",
  },
  {
    type: "experience",
    title: "Criação de Sites e Landing Pages",
    organization: "Agência Starten Comunicação",
    period: "Ago 2024 – Fev 2025",
    description:
      "Sites institucionais e landing pages responsivas em WordPress. Foco em UX e performance.",
  },
  {
    type: "education",
    title: "Informática para Negócios",
    organization: "Fatec Profª Olga Malluk da Silva",
    period: "2024 – 2026",
  },
  {
    type: "education",
    title: "Técnico em Desenvolvimento de Sistemas",
    organization: "Etec Philadelpho Gouvêa Netto",
    period: "2021 – 2023",
    description:
      "Ensino médio integrado ao técnico. Foco em desenvolvimento de software, programação e banco de dados.",
  },
  {
    type: "project",
    title: "Startup VeloCidade",
    organization: "Cofundadora",
    period: "2025",
    description:
      "Solução em mobilidade urbana e gestão inteligente. 2º lugar em competição de empreendedorismo.",
  },
];

const getLabel = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education": return "Formação";
    case "experience": return "Experiência";
    case "course": return "Curso";
    case "project": return "Projeto";
  }
};

const ExperienceSection = () => {
  return (
    <section
      id="experiencia"
      style={{ padding: "5rem 2rem", background: "#f7f0fc" }}
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
          Trajetória
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
          Experiência &amp; Formação
        </h2>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: "2rem",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, #c69fd5, #e4cff0)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {timelineItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                style={{
                  position: "relative",
                  paddingBottom: index === timelineItems.length - 1 ? 0 : "2.5rem",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2.44rem",
                    top: "0.4rem",
                    width: "10px",
                    height: "10px",
                    background: "#9b6ab5",
                    borderRadius: "50%",
                    border: "2px solid #fdfdc9",
                  }}
                />

                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.65rem",
                    background: "#c69fd5",
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#1a1235",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {getLabel(item.type)}
                </span>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.15rem",
                    color: "#1a1235",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#9b6ab5",
                    fontStyle: "normal",
                    marginBottom: "0.15rem",
                  }}
                >
                  {item.organization}
                </p>

                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#6b5f7a",
                    marginBottom: item.description ? "0.5rem" : 0,
                  }}
                >
                  {item.period}
                </p>

                {item.description && (
                  <p style={{ fontSize: "0.85rem", color: "#6b5f7a", maxWidth: "520px" }}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;