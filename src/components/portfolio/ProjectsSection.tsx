import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

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
            "Plataforma web completa desenvolvida com Java e Spring Boot no backend e React no frontend. APIs REST, integração full stack e interfaces responsivas.",
        technologies: ["Java", "Spring Boot", "React", "Tailwind CSS"],
    },
    {
        title: "Plataforma do Clube da Fábrica",
        description:
            "Projeto interdisciplinar desenvolvido na faculdade com foco em arquitetura full stack. Atuei no desenvolvimento de uma plataforma web utilizando Java Spring Boot no back-end e React no front-end, aplicando conceitos de APIs REST, componentização e integração entre camadas.",
        technologies: ["Java", "Spring Boot", "React"],
        codeLinks: [
            {
                label: "Frontend",
                url: "https://github.com/mariaed-2103/clubedafabrica2025",
            },
            {
                label: "Backend",
                url: "https://github.com/mariaed-2103/clubedafabricaBackend2025",
            },
        ],
    },
    {
        title: "Kanban Web",
        description:
            "Aplicação de Kanban desenvolvida durante um curso de React para iniciantes, com foco em organização de tarefas e estados. O projeto reforçou conceitos fundamentais como componentes, estado, props e renderização condicional.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        codeLinks: [
            {
                label: "Ver Código",
                url: "https://github.com/mariaed-2103/Kanban-em-React-para-iniciantes",
            },
        ],
    },
    {
        title: "TCC - Sistema Web Integrado",
        description:
            "Trabalho de Conclusão de Curso desenvolvendo sistema web integrando HTML, Java, PHP e PhpMyAdmin, com foco em usabilidade.",
        technologies: ["HTML", "Java", "PHP", "PhpMyAdmin"],
        codeLinks: [
            {
                label: "Ver Código",
                url: "https://github.com/mariaed-2103/TCC-MindfulHarmony",
            },
        ],
    },
];

const ProjectsSection = () => {
    return (
        <section id="projetos" className="section-padding bg-secondary/30">
            <div className="container-narrow">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        Projetos
                    </h2>
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

                                {/* 🔒 Altura padronizada */}
                                <p className="text-muted-foreground mb-4 min-h-[120px]">
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

                                {project.codeLinks && (
                                    <div className="flex gap-3 flex-wrap">
                                        {project.codeLinks.map((link) => (
                                            <Button
                                                key={link.url}
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    {link.label}
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
