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
      "Desenvolvimento Full Stack colaborativo, atuando diretamente em parceria com o supervisor no desenvolvimento de uma plataforma de métricas para o Mercado Livre com Java, Spring Boot e React.",
    impact: "Entrega bem-sucedida das funcionalidades de análise, garantindo a aprovação do cliente a cada sprint.",
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
      "Solução de mobilidade urbana concebida do zero como cofundadora, atuando diretamente no desenvolvimento do produto, pitch e validação de mercado.",
    impact: "Conquista do 2º lugar em competição — onde aprendi a vender uma ideia tão bem quanto sei construí-la.",
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
        // Mudança para CSS Grid dentro do card para controlar rigidamente o fluxo vertical
        display: "grid",
        gridTemplateRows: "auto 1fr auto", 
        gap: "0.65rem",
        height: "100%",
        boxSizing: "border-box",
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

      {/* Descrição — Definimos uma min-height estimada para descrições curtas respirarem */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "#6b5f7a",
          lineHeight: 1.6,
          margin: 0,
          display: "flex",
          alignItems: "flex-start",
          minHeight: "4.5rem", // Garante que textos menores (como do FitFoco) ocupem o espaço de 3 linhas, alinhando o bloco de baixo
        }}
      >
        {project.description}
      </p>

      {/* Bloco inferior: impacto + tags + links sempre alinhados no fundo */}
      <div style={{ display: "grid", gridTemplateRows: "auto auto 1.8rem", gap: "0.65rem", alignItems: "end" }}>
        {/* Impacto — Altura mínima para evitar que 1 linha vs 2 linhas desalinhem as tags abaixo */}
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
            minHeight: "2.2rem", 
            display: "flex",
            alignItems: "center"
          }}
        >
          ✦ {project.impact}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", minHeight: "2.2rem", alignItems: "center" }}>
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

        {/* Links — Agora fixados no final usando o grid container */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", height: "100%", alignItems: "center" }}>
          {project.codeLinks ? (
            project.codeLinks.map((link) => (
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
            ))
          ) : (
            /* Div fantasma para manter a ocupação de espaço caso não existam botões */
            <div style={{ height: "1.5rem" }} />
          )}
        </div>
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