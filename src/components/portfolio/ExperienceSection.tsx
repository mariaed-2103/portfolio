import { GraduationCap, Briefcase, Award, Rocket } from "lucide-react";

interface TimelineItem {
  type: "education" | "experience" | "course" | "project";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  {
    type: "experience",
    title: "Desenvolvedor Full Stack (Freelance)",
    organization: "Analytics Polaris",
    period: "Outubro 2025 – Dezembro 2025",
    description: "Desenvolvimento de plataforma web utilizando Java, Spring Boot e React. Criação de APIs REST, integração front-end e back-end e construção de interfaces responsivas com Tailwind CSS.",
  },
  {
    type: "experience",
    title: "Desenvolvedora Fullstack",
    organization: "Sistema Gestor",
    period: "Junho 2025 – Agosto 2025",
    description: "Triagem de chamadas para equipe de suporte. Desenvolvimento de páginas internas com foco em integração e usabilidade. Testes de notas fiscais eletrônicas.",
  },
  {
    type: "experience",
    title: "Criação de Sites e Landing Pages",
    organization: "Agência Starten Comunicação",
    period: "Agosto 2024 – Fevereiro 2025",
    description: "Desenvolvimento de sites institucionais e landing pages responsivas em WordPress. Personalização de temas e plugins, com foco em UX e performance.",
  },
  {
    type: "education",
    title: "Graduação em Informática para Negócios",
    organization: "Fatec Profª Olga Malluk da Silva",
    period: "2024 - 2026",
    description: "Cursando com foco em desenvolvimento de software e gestão de negócios.",
  },
  {
    type: "education",
    title: "Técnico em Desenvolvimento de Sistemas",
    organization: "Etec Philadelpho Gouvêa Netto",
    period: "2021 - 2023",
    description: "Ensino médio integrado ao técnico. Desenvolvimento de TCC integrando HTML, Java, PHP e PhpMyAdmin.",
  },
  {
    type: "project",
    title: "Startup VeloCidade",
    organization: "Cofundadora",
    period: "2025",
    description: "Solução em mobilidade urbana e gestão inteligente. 2º lugar em competição de empreendedorismo.",
  },
];

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "experience":
      return <Briefcase className="w-5 h-5" />;
    case "course":
      return <Award className="w-5 h-5" />;
    case "project":
      return <Rocket className="w-5 h-5" />;
  }
};

const getLabel = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education":
      return "Formação";
    case "experience":
      return "Experiência";
    case "course":
      return "Curso";
    case "project":
      return "Projeto";
  }
};

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Experiência & Formação</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada de aprendizado e experiências profissionais
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:-translate-x-0.5" />
          
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 animate-fade-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 mt-6 md:mt-8 ring-4 ring-background" />
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`bg-card p-6 rounded-2xl border border-border card-hover ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } max-w-lg`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/20 text-navy rounded-full">
                        {getIcon(item.type)}
                        {getLabel(item.type)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1 text-navy">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-1">{item.organization}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.period}</p>
                    
                    {item.description && (
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
