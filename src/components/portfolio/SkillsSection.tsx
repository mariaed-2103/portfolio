import React, { useState } from "react";

type Category = "all" | "backend" | "frontend" | "database" | "tools";

interface Skill {
  name: string;
  tier: "main" | "familiar";
  cat: Category;
}

const skills: Skill[] = [
  // main
  { name: "Java", tier: "main", cat: "backend" },
  { name: "Spring Boot", tier: "main", cat: "backend" },
  { name: "PHP", tier: "main", cat: "backend" },
  { name: "REST APIs", tier: "main", cat: "backend" },
  { name: "React", tier: "main", cat: "frontend" },
  { name: "HTML & CSS", tier: "main", cat: "frontend" },
  { name: "SQL Server", tier: "main", cat: "database" },
  { name: "Git & GitHub", tier: "main", cat: "tools" },
  { name: "IntelliJ", tier: "main", cat: "tools" },
  { name: "VS Code", tier: "main", cat: "tools" },
  { name: "Postman", tier: "main", cat: "tools" },
  // familiar
  { name: "TypeScript", tier: "familiar", cat: "frontend" },
  { name: "Tailwind CSS", tier: "familiar", cat: "frontend" },
  { name: "WordPress", tier: "familiar", cat: "frontend" },
  { name: "MySQL", tier: "familiar", cat: "database" },
  { name: "Firebase", tier: "familiar", cat: "database" },
  { name: "Flutter", tier: "familiar", cat: "tools" },
  { name: "Dart", tier: "familiar", cat: "tools" },
];

const filters: { label: string; value: Category }[] = [
  { label: "Tudo", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Frontend", value: "frontend" },
  { label: "Banco de dados", value: "database" },
  { label: "Ferramentas", value: "tools" },
];

const SkillChip = ({ skill }: { skill: Skill }) => {
  if (skill.tier === "main") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "7px 16px",
          borderRadius: "100px",
          fontSize: "0.82rem",
          fontWeight: 600,
          background: "var(--navy)",
          color: "var(--lemon)",
          fontFamily: "'Montserrat', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "7px 16px",
        borderRadius: "100px",
        fontSize: "0.82rem",
        fontWeight: 600,
        background: "transparent",
        color: "var(--muted)",
        border: "1.5px solid rgba(198,159,213,0.45)",
        fontFamily: "'Montserrat', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {skill.name}
    </span>
  );
};

const SkillsSection = () => {
  const [active, setActive] = useState<Category>("all");

  const visible = (tier: "main" | "familiar") =>
    skills.filter(
      (s) => s.tier === tier && (active === "all" || s.cat === active)
    );

  const mainSkills = visible("main");
  const familiarSkills = visible("familiar");

  return (
    <section
      id="habilidades"
      style={{ padding: "5rem 2rem", background: "var(--section-soft)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <p className="section-label">Tecnologias</p>
        <h2 className="section-title">Habilidades</h2>

        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--muted)",
            marginBottom: "2rem",
            maxWidth: "580px",
            lineHeight: 1.7,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Tecnologias com as quais já trabalhei — separadas entre as que tenho
          mais afinidade e as que já toquei mas não uso no dia a dia.
        </p>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "1.75rem",
            alignItems: "center",
          }}
        >
          {[
            { label: "Tenho mais afinidade", filled: true },
            { label: "Já tive contato", filled: false },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--muted)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: item.filled
                    ? "var(--navy)"
                    : "rgba(198,159,213,0.4)",
                  border: item.filled
                    ? "none"
                    : "1.5px solid rgba(198,159,213,0.5)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "2.25rem",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                border: active === f.value
                  ? "1.5px solid var(--navy)"
                  : "1.5px solid rgba(198,159,213,0.4)",
                background: active === f.value ? "var(--navy)" : "transparent",
                color: active === f.value ? "var(--lemon)" : "var(--muted)",
                transition: "all 0.15s",
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {mainSkills.length > 0 && (
            <div>
              <GroupLabel>Tenho mais afinidade</GroupLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {mainSkills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </div>
            </div>
          )}

          {familiarSkills.length > 0 && (
            <div>
              <GroupLabel>Já tive contato</GroupLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {familiarSkills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </div>
            </div>
          )}

          {mainSkills.length === 0 && familiarSkills.length === 0 && (
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Nenhuma tecnologia nessa categoria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const GroupLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0.85rem",
    }}
  >
    <span
      style={{
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--wisteria-dark)",
        fontFamily: "'Montserrat', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
    <span
      style={{
        flex: 1,
        height: "1px",
        background: "rgba(198,159,213,0.25)",
      }}
    />
  </div>
);

export default SkillsSection;