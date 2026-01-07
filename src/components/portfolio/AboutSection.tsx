import { Code2, Sparkles, BookOpen, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Avatar */}
          <div className="relative animate-fade-up">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/30 to-accent/50 rounded-3xl p-8 flex items-center justify-center">
                  <div className="w-full h-full bg-muted rounded-2xl overflow-hidden">
                      <img
                          src="/img_portfolio.jpg"
                          alt="Foto de perfil"
                          className="w-full h-full object-cover"
                      />
                  </div>
              </div>


              {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-card p-4 rounded-xl shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-navy">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Boas práticas</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-up animation-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              Sobre Mim
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Estudante de <strong className="text-foreground">Informática para Negócios</strong> na Fatec 
                e formada como <strong className="text-foreground">Técnica em Desenvolvimento de Sistemas</strong> pela Etec, 
                com experiência prática em desenvolvimento web e UI/UX.
              </p>
              
              <p>
                No <strong className="text-foreground">backend</strong>, trabalho com Java, Spring Boot, C# e ASP.NET, 
                construindo APIs REST robustas. No <strong className="text-foreground">frontend</strong>, desenvolvo 
                interfaces modernas com React e WordPress, sempre focando em usabilidade e performance.
              </p>
              
              <p>
                Cofundadora da startup <strong className="text-foreground">VeloCidade</strong>, premiada em 2º lugar 
                em competição de empreendedorismo, destacando capacidade de aprendizado rápido, organização e visão empreendedora.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-navy">Visão Empreendedora</p>
                <p className="text-sm text-muted-foreground">
                  Integrando programação e design para soluções funcionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
