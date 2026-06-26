import { useState } from "react";
import { Github } from "lucide-react";

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
      "Desenvolvimento Full Stack em parceria com o supervisor — plataforma de métricas para o Mercado Livre com Java, Spring Boot e React.",
    impact: "Entrega bem-sucedida das funcionalidades de análise, garantindo aprovação do cliente a cada sprint.",
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
      "Solução de mobilidade urbana concebida do zero como cofundadora — produto, pitch e validação de mercado.",
    impact: "2º lugar em competição — aprendi a vender uma ideia tão bem quanto sei construí-la.",
    technologies: ["Produto", "UX", "Empreendedorismo"],
  },
];

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <li className={`ps-item${open ? " open" : ""}`}>
      <div className="ps-row" onClick={() => setOpen(!open)}>
        <span className="ps-num">{num}</span>
        <span className="ps-name">{project.title}</span>
        <div className="ps-right">
          <div className="ps-techs">
            {project.technologies.slice(0, 2).map((t) => (
              <span key={t} className="ps-tag">{t}</span>
            ))}
          </div>
          <span className="ps-arrow">{open ? "×" : "+"}</span>
        </div>
      </div>

      <div className="ps-expand">
        <div className="ps-expand-inner">
          <p className="ps-desc">{project.description}</p>
          <div className="ps-impact">✦ {project.impact}</div>
          {project.codeLinks && (
            <div className="ps-links">
              {project.codeLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-link"
                >
                  <Github size={11} />
                  ⇗ {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="projects-section">
      <div className="section-inner">
        <div className="ps-header">
          <div>
            <span className="section-label">Portfólio</span>
            <h2 className="section-title">Projetos</h2>
          </div>
          <span className="ps-count">0{projects.length} projetos</span>
        </div>

        <ul className="ps-list">
          {projects.map((project, i) => (
            <ProjectItem key={project.title} project={project} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;