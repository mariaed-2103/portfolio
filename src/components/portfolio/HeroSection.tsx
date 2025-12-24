import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container-narrow text-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-navy bg-primary/20 rounded-full">
            Desenvolvedora Full Stack
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100 text-navy">
          Desenvolvedora Full Stack focada em construir{" "}
          <span className="gradient-text">aplicações escaláveis</span> e eficientes
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
          Java · Spring Boot · React · WordPress
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
          <Button variant="hero" size="xl" asChild>
            <a href="#projetos">
              Ver Projetos
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#contato">
              <Mail className="mr-2" />
              Entrar em Contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
