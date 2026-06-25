import React from "react";

interface Skill {
  name: string;
  level: number;
  tier: "love" | "work" | "familiar";
  heart?: boolean;
}

interface SkillGroup {
  label: string;
  skills: Skill[];
}

const backendSkills: SkillGroup = {
  label: "Backend",
  skills: [
    { name: "Java", level: 88, tier: "love", heart: true },
    { name: "Spring Boot", level: 82, tier: "love", heart: true },
    { name: "PHP", level: 65, tier: "work" },
    { name: "REST APIs", level: 80, tier: "work" },
  ],
};

const frontendSkills: SkillGroup = {
  label: "Frontend",
  skills: [
    { name: "React", level: 78, tier: "love", heart: true },
    { name: "HTML & CSS", level: 85, tier: "work" },
    { name: "TypeScript", level: 65, tier: "work" },
    { name: "Tailwind CSS", level: 72, tier: "work" },
    { name: "WordPress", level: 58, tier: "familiar" },
  ],
};

const dbSkills: SkillGroup = {
  label: "Banco de Dados",
  skills: [
    { name: "SQL Server", level: 70, tier: "work" },
    { name: "MySQL", level: 52, tier: "familiar" },
    { name: "Firebase", level: 42, tier: "familiar" },
  ],
};

const tools = ["Git & GitHub", "Postman", "IntelliJ", "VS Code"];
const toolsFamiliar = ["Flutter", "Dart"];

const tierStyle = {
  love: { bg: "#9b6ab5", color: "#fff", label: "Amo" },
  work: { bg: "#e4cff0", color: "#1a1235", label: "Trabalho" },
  familiar: { bg: "transparent", color: "#6b5f7a", label: "Conheço", border: "1.5px solid rgba(198,159,213,0.5)" },
};

const barColor = {
  love: "#9b6ab5",
  work: "#c69fd5",
  familiar: "#e4cff0",
};

const SkillRow = ({ skill }: { skill: Skill }) => {
  const t = tierStyle[skill.tier];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: "0.8rem",
            fontWeight: skill.tier === "familiar" ? 600 : 700,
            color: skill.tier === "familiar" ? "#6b5f7a" : "#1a1235",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {skill.name}
          {skill.heart && (
            <span style={{ color: "#9b6ab5", marginLeft: "0.3rem", fontSize: "0.75rem" }}>♥</span>
          )}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "0.15rem 0.5rem",
            borderRadius: "100px",
            background: t.bg,
            color: t.color,
            border: (t as any).border ?? "none",
            fontFamily: "'Montserrat', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          {t.label}
        </span>
      </div>
      <div
        style={{
          height: "5px",
          background: "rgba(198,159,213,0.2)",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${skill.level}%`,
            background: barColor[skill.tier],
            borderRadius: "100px",
          }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({
  group,
  children,
}: {
  group?: SkillGroup;
  children?: React.ReactNode;
}) => (
  <div
    style={{
      background: "#fff",
      border: "1.5px solid rgba(198,159,213,0.25)",
      borderRadius: "1rem",
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.85rem",
    }}
  >
    {group && (
      <>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9b6ab5",
            paddingBottom: "0.6rem",
            borderBottom: "1px solid rgba(198,159,213,0.2)",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {group.label}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {group.skills.map((s) => (
            <SkillRow key={s.name} skill={s} />
          ))}
        </div>
      </>
    )}
    {children}
  </div>
);

const SkillsSection = () => {
  return (
    <section id="habilidades" style={{ padding: "5rem 2rem", background: "#f7f0fc" }}>
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
          Tecnologias
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "1rem",
            color: "#1a1235",
            lineHeight: 1.2,
          }}
        >
          Habilidades
        </h2>

        <p
          style={{
            fontSize: "0.88rem",
            color: "#6b5f7a",
            marginBottom: "2rem",
            maxWidth: "600px",
          }}
        >
          Nem toda tecnologia que conheço uso com a mesma profundidade — e tá tudo bem com isso.
          Aqui é honesto: o que domino, o que uso no dia a dia e o que já explorei.
        </p>

        {/* Legenda */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {[
            { color: "#9b6ab5", label: "Amo & domino", border: false },
            { color: "#c69fd5", label: "Uso no trabalho", border: false },
            { color: "#e4cff0", label: "Já trabalhei / conheço", border: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#6b5f7a",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: item.color,
                  border: item.border ? "1.5px solid #c69fd5" : "none",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Grid 3 colunas */}
        <div className="skills-grid">
          <SkillCard group={backendSkills} />
          <SkillCard group={frontendSkills} />

          {/* Coluna 3: Banco + Ferramentas */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <SkillCard group={dbSkills} />

            {/* Ferramentas */}
            <div
              style={{
                background: "#fff",
                border: "1.5px solid rgba(198,159,213,0.25)",
                borderRadius: "1rem",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9b6ab5",
                  paddingBottom: "0.6rem",
                  borderBottom: "1px solid rgba(198,159,213,0.2)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Ferramentas
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tools.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.25rem 0.65rem",
                      background: "#e4cff0",
                      borderRadius: "100px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#1a1235",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
                {toolsFamiliar.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.25rem 0.65rem",
                      background: "transparent",
                      border: "1.5px solid rgba(198,159,213,0.4)",
                      borderRadius: "100px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#6b5f7a",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 800px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;