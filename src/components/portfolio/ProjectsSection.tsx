import { Button } from "@/components/ui/button";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

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
    {
        title: "Calculadora",
        description:
            "Aplicação de calculadora desenvolvida em React, com foco em componentização, estilização moderna em CSS e boas práticas de UI/UX.",
        technologies: ["React", "CSS"],
        codeLinks: [
            {
                label: "Ver Código",
                url: "https://github.com/mariaed-2103/calculadora-react",
            },
        ],
    },
];

const ProjectCard = ({ project }: { project: Project }) => (
    <article className="group bg-card rounded-2xl p-6 border border-border card-hover flex flex-col h-full">
        <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-navy">
                {project.title}
            </h3>

            <p className="text-muted-foreground mb-4 flex-1 leading-relaxed line-clamp-4">
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

            <div className="flex gap-3 flex-wrap mt-auto">
                {project.codeLinks &&
                    project.codeLinks.map((link) => (
                        <Button key={link.url} variant="outline" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                {link.label}
                            </a>
                        </Button>
                    ))}
            </div>
        </div>
    </article>
);

const ProjectsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        skipSnaps: false,
        slidesToScroll: 1,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section id="projetos" className="section-padding bg-secondary/30">
            <div className="container-narrow">
                <div className="text-center mb-12 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        Projetos
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi durante minha jornada profissional
                    </p>
                </div>

                <div className="relative animate-fade-up animation-delay-200">
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4 justify-end mb-6">
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className="carousel-nav-button"
                            aria-label="Projeto anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className="carousel-nav-button"
                            aria-label="Próximo projeto"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.title}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)]"
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    selectedIndex === index
                                        ? "bg-primary w-6"
                                        : "bg-border hover:bg-primary/50"
                                }`}
                                aria-label={`Ir para projeto ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
