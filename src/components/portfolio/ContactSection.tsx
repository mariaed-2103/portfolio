"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react"
import { toast } from "sonner"

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.error("Erro ao enviar email:", error)
            toast.error("Erro ao enviar mensagem. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contato" className="section-padding bg-secondary/30">
            <div className="container-narrow">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        Vamos Conversar?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Estou aberta a novas oportunidades e sempre disposta a trocar ideias
                        sobre tecnologia
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* FORM */}
                    <div className="animate-fade-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-navy">
                                    Nome
                                </label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="h-12"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-navy">
                                    Email
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="h-12"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-navy">
                                    Mensagem
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                                disabled={isSubmitting}
                            >
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

                    {/* INFO */}
                    <div className="animate-fade-up animation-delay-200">
                        <div className="bg-card rounded-2xl p-8 border border-border h-full">
                            <h3 className="text-xl font-semibold mb-6 text-navy">
                                Outras formas de contato
                            </h3>

                            <div className="space-y-6">
                                <a
                                    href="mailto:mariaedzinattoo@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                                >
                                    <Mail />
                                    <span>Email</span>
                                </a>

                                <a
                                    href="tel:+5517991870837"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                                >
                                    <Phone />
                                    <span>Telefone</span>
                                </a>

                                <a
                                    href="https://github.com/mariaed-2103"
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                                >
                                    <Github />
                                    <span>GitHub</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/maria-eduarda-zinatto-94a6881a2"
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                                >
                                    <Linkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
}

export default ContactSection
