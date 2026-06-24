import { Github } from "lucide-react";
import { useState } from "react";

interface CodeLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeLinks?: CodeLink[];
}

const projects: Project[] = [
  {
    title: "Plataforma Analytics Polaris",
    description:
      "Plataforma web completa com Java e Spring Boot no backend e React no frontend. APIs REST e interfaces responsivas.",
    technologies: ["Java", "Spring Boot", "React", "Tailwind CSS"],
  },
  {
    title: "Plataforma Clube da Fábrica",
    description:
      "Projeto interdisciplinar full stack com Java Spring Boot e React, aplicando APIs REST e integração entre camadas.",
    technologies: ["Java", "Spring Boot", "React"],
    codeLinks: [
      { label: "Frontend", url: "https://github.com/mariaed-2103/clubedafabrica2025" },
      { label: "Backend", url: "https://github.com/mariaed-2103/clubedafabricaBackend2025" },
    ],
  },
  {
    title: "Kanban Web",
    description:
      "Aplicação Kanban em React focada em componentização, estado e renderização condicional.",
    technologies: ["React", "JavaScript", "CSS"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/Kanban-em-React-para-iniciantes" },
    ],
  },
  {
    title: "TCC — Sistema Web Integrado",
    description:
      "Sistema web integrando HTML, Java, PHP e PhpMyAdmin com foco em usabilidade — MindfulHarmony.",
    technologies: ["HTML", "Java", "PHP", "PhpMyAdmin"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/TCC-MindfulHarmony" },
    ],
  },
  {
    title: "Calculadora React",
    description:
      "Calculadora com foco em componentização e boas práticas de UI/UX em React.",
    technologies: ["React", "CSS"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/calculadora-react" },
    ],
  },
  {
    title: "FitFoco",
    description:
      "App mobile para registro de treinos com interface reativa, gerenciamento de estado e persistência offline.",
    technologies: ["Flutter", "Dart", "Firebase"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/LP3-FocoFit" },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "1.25rem",
        padding: "1.5rem",
        border: "1.5px solid rgba(198,159,213,0.3)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 12px 32px rgba(198,159,213,0.25)" : "none",
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: 1.3,
          color: "#1a1235",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: "0.83rem",
          color: "#6b5f7a",
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "0.2rem 0.65rem",
              background: "#e4cff0",
              borderRadius: "100px",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#1a1235",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {project.codeLinks && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.codeLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#9b6ab5",
                textDecoration: "none",
                border: "1.5px solid #c69fd5",
                borderRadius: "100px",
                padding: "0.3rem 0.75rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#9b6ab5";
                el.style.borderColor = "#9b6ab5";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.borderColor = "#c69fd5";
                el.style.color = "#9b6ab5";
              }}
            >
              <Github size={12} />
              ⇗ {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projetos"
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
          Portfólio
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
          Projetos
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;