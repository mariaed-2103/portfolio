import { 
  Database, 
  Server, 
  Layout, 
  Code2, 
  GitBranch,
  Palette,
  Wrench
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Java", "Spring Boot", "C#", "ASP.NET Core", "PHP"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "HTML", "CSS", "WordPress"],
  },
  {
    title: "Banco de Dados",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL Server"],
  },
  {
    title: "Ferramentas",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Figma", "Postman"],
  },
  {
    title: "Design",
    icon: <Palette className="w-5 h-5" />,
    skills: ["UI/UX Design", "Prototipagem", "Figma"],
  },
];

const getSkillIcon = (skill: string) => {
  const icons: Record<string, React.ReactNode> = {
    "Java": <span className="text-lg font-bold">☕</span>,
    "Spring Boot": <span className="text-lg">🍃</span>,
    "C#": <Code2 className="w-6 h-6" />,
    "ASP.NET Core": <span className="text-lg font-bold text-purple-600">.NET</span>,
    "PHP": <span className="text-lg font-bold text-indigo-600">PHP</span>,
    "React": <span className="text-lg">⚛️</span>,
    "HTML": <span className="text-lg font-bold text-orange-500">{"</>"}</span>,
    "CSS": <span className="text-lg font-bold text-blue-500">{"#"}</span>,
    "WordPress": <span className="text-lg">📝</span>,
    "SQL Server": <Database className="w-6 h-6" />,
    "Git": <GitBranch className="w-6 h-6" />,
    "GitHub": <span className="text-lg">🐙</span>,
    "VS Code": <span className="text-lg">💻</span>,
    "IntelliJ": <span className="text-lg">🧠</span>,
    "Figma": <span className="text-lg">🎨</span>,
    "Postman": <span className="text-lg">📮</span>,
    "UI/UX Design": <Palette className="w-6 h-6" />,
    "Prototipagem": <Layout className="w-6 h-6" />,
  };
  return icons[skill] || <Code2 className="w-6 h-6" />;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para construir aplicações modernas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-up bg-card rounded-2xl p-6 border border-border card-hover"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-navy">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="text-foreground/80">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
