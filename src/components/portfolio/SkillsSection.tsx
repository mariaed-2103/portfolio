const skills = [
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "PHP", category: "Backend" },
  { name: "SQL Server", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "IntelliJ", category: "Tools" },
  { name: "VSCode", category: "Tools" },
  { name: "WordPress", category: "Frontend" },
];

const SkillsSection = () => {
  return (
    <section
      id="habilidades"
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
          Tecnologias
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
          Habilidades
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {skills.map((skill) => (
            <SkillChip key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillChip = ({ name }: { name: string }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "0.5rem 1.2rem",
        background: hovered ? "#c69fd5" : "#fff",
        border: `1.5px solid ${hovered ? "#c69fd5" : "rgba(198,159,213,0.3)"}`,
        borderRadius: "100px",
        fontSize: "0.82rem",
        fontWeight: 600,
        color: "#1a1235",
        transition: "all 0.2s",
        cursor: "default",
      }}
    >
      {name}
    </span>
  );
};

import React from "react";
export default SkillsSection;