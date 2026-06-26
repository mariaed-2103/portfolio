import { Github } from "lucide-react";
import { useState } from "react";

interface CodeLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  codeLinks?: CodeLink[];
}

const projects: Project[] = [
  {
    title: "Plataforma Analytics Polaris",
    description:
      "Full stack do zero ao deploy — backend Java + Spring Boot, frontend React, como freelance real com cliente.",
    impact: "Entregue no prazo, com aprovação do cliente em todas as sprints.",
    technologies: ["Java", "Spring Boot", "React", "Tailwind CSS"],
  },
  {
    title: "Plataforma Clube da Fábrica",
    description:
      "Projeto interdisciplinar full stack com backend e frontend separados, comunicando via APIs REST.",
    impact: "Aprendi na prática o que significa ter um contrato de API de verdade.",
    technologies: ["Java", "Spring Boot", "React"],
    codeLinks: [
      { label: "Frontend", url: "https://github.com/mariaed-2103/clubedafabrica2025" },
      { label: "Backend", url: "https://github.com/mariaed-2103/clubedafabricaBackend2025" },
    ],
  },
  {
    title: "TCC — MindfulHarmony",
    description:
      "Sistema web de saúde mental — integração entre HTML, Java, PHP e PhpMyAdmin com foco em usabilidade.",
    impact: "Primeiro projeto onde fui responsável pela arquitetura completa.",
    technologies: ["Java", "PHP", "HTML", "PhpMyAdmin"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/TCC-MindfulHarmony" },
    ],
  },
  {
    title: "Kanban Web",
    description:
      "App de tarefas em React com foco em componentização, estado e renderização condicional.",
    impact: "Ainda uso como template de referência nos meus projetos React.",
    technologies: ["React", "JavaScript", "CSS"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/Kanban-em-React-para-iniciantes" },
    ],
  },
  {
    title: "FitFoco",
    description:
      "App mobile de treinos com interface reativa, estado e persistência offline em Flutter.",
    impact: "Primeira vez com mobile — saí sabendo que consigo aprender qualquer stack.",
    technologies: ["Flutter", "Dart", "Firebase"],
    codeLinks: [
      { label: "Código", url: "https://github.com/mariaed-2103/LP3-FocoFit" },
    ],
  },
  {
    title: "Startup VeloCidade",
    description:
      "Solução de mobilidade urbana criada do zero como cofundadora — produto, pitch e validação.",
    impact: "2º lugar em competição — aprendi a vender uma ideia tanto quanto a construí-la.",
    technologies: ["Produto", "UX", "Empreendedorismo"],
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
        borderRadius: "1.1rem",
        padding: "1.25rem",
        border: "1.5px solid rgba(198,159,213,0.3)",
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        height: "100%",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 10px 28px rgba(198,159,213,0.2)" : "none",
      }}
    >
      {/* Título */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#1a1235",
          lineHeight: 1.35,
        }}
      >
        {project.title}
      </div>

      {/* Descrição — flex:1 empurra o bloco inferior para o fundo */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "#6b5f7a",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Bloco inferior: impacto + tags + links sempre alinhados */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
        {/* Impacto */}
        <div
          style={{
            padding: "0.55rem 0.75rem",
            background: "#f7f0fc",
            borderLeft: "2.5px solid #c69fd5",
            borderRadius: "0 0.5rem 0.5rem 0",
            fontSize: "0.75rem",
            color: "#6b5f7a",
            lineHeight: 1.5,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          ✦ {project.impact}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "0.18rem 0.55rem",
                background: "#e4cff0",
                borderRadius: "100px",
                fontSize: "0.68rem",
                fontWeight: 600,
                color: "#1a1235",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.codeLinks && (
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {project.codeLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#9b6ab5",
                  textDecoration: "none",
                  border: "1.5px solid #c69fd5",
                  borderRadius: "100px",
                  padding: "0.25rem 0.65rem",
                  transition: "all 0.2s",
                  fontFamily: "'Montserrat', sans-serif",
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
                <Github size={11} />
                ⇗ {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" style={{ padding: "5rem 2rem", background: "#fdfdc9" }}>
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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.1rem;
        }
        @media (max-width: 800px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;