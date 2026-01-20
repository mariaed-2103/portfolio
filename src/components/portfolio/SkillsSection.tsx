const skills = [
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "VSCode", category: "Tools" },
    { name: "PHP", category: "Backend" },
    { name: "SQL Server", category: "Database" },
    { name: "Git e GitHub", category: "Tools" },
    { name: "REST APIs", category: "Backend" },
    { name: "Postman", category: "Tools" },
    { name: "IntelliJ", category: "Tools" },
];

const SkillsSection = () => {
    return (
        <section id="habilidades" className="section-padding">
            <div className="container-narrow">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        Habilidades
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Tecnologias e ferramentas que utilizo no dia a dia
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-200">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="px-6 py-3 bg-card border border-border rounded-full card-hover"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span className="font-medium text-navy">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
