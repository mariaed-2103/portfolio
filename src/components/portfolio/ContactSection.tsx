import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Vamos Conversar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou aberta a novas oportunidades e sempre disposta a trocar ideias sobre tecnologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-navy">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-navy">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-navy">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-up animation-delay-200">
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <h3 className="text-xl font-semibold mb-6 text-navy">
                Outras formas de contato
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mariaedzinattoo@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-sm text-muted-foreground">mariaedzinattoo@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+5517991870837" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Telefone</p>
                    <p className="text-sm text-muted-foreground">(17) 99187-0837</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/mariaed-2103" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Github className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/mariaed-2103</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/maria-eduarda-zinatto-94a6881a2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Maria Eduarda Zinatto</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
