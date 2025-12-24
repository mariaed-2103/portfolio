import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Plataforma Analytics Polaris",
    description: "Plataforma web completa desenvolvida com Java e Spring Boot no backend e React no frontend. APIs REST, integração full stack e interfaces responsivas.",
    technologies: ["Java", "Spring Boot", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/mariaed-2103",
  },
  {
    title: "Sistema Gestor - Páginas Internas",
    description: "Desenvolvimento de páginas internas focadas em integração e usabilidade. Testes de documentos fiscais eletrônicos (DANFE, XML, TXT).",
    technologies: ["Java", "Spring Boot", "React"],
    githubUrl: "https://github.com/mariaed-2103",
  },
  {
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites institucionais e landing pages responsivas em WordPress com personalização de temas e plugins.",
    technologies: ["WordPress", "HTML", "CSS", "PHP"],
    githubUrl: "https://github.com/mariaed-2103",
  },
  {
    title: "TCC - Sistema Web Integrado",
    description: "Trabalho de Conclusão de Curso desenvolvendo sistema web integrando HTML, Java, PHP e PhpMyAdmin, com foco em usabilidade.",
    technologies: ["HTML", "Java", "PHP", "MySQL"],
    githubUrl: "https://github.com/mariaed-2103/projetos-ensino-medio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada profissional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-navy">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-navy rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
