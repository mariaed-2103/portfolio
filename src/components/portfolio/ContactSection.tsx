import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/mariaedzinattoo@gmail.com",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                toast.success("Mensagem enviada com sucesso! 💌");
                form.reset();
            } else {
                toast.error("Erro ao enviar mensagem. Tente novamente.");
            }
        } catch (error) {
            toast.error("Erro de conexão. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="section-padding bg-secondary/30">
            <div className="container-narrow">

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* CONFIGURAÇÕES FORMSUBMIT */}
                    <input type="hidden" name="_subject" value="Contato pelo Portfólio" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div>
                        <Input name="name" placeholder="Seu nome" required />
                    </div>

                    <div>
                        <Input name="email" type="email" placeholder="Seu email" required />
                    </div>

                    <div>
                        <Textarea name="message" placeholder="Sua mensagem" required />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Enviar Mensagem
                            </>
                        )}
                    </Button>
                </form>

            </div>
        </section>
    );
};

export default ContactSection;
