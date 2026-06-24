"use client";

import type React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    border: "1.5px solid rgba(198,159,213,0.3)",
    borderRadius: "0.75rem",
    background: "#fff",
    color: "#1a1235",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#1a1235",
    display: "block",
    marginBottom: "0.35rem",
  };

  return (
    <section id="contato" style={{ padding: "5rem 2rem", background: "#fdfdc9" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9b6ab5",
            marginBottom: "0.5rem",
          }}
        >
          Vamos conversar?
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "3rem",
            color: "#1a1235",
            lineHeight: 1.2,
          }}
        >
          Contato
        </h2>

        <div className="contact-grid">
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>Nome</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#9b6ab5")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(198,159,213,0.3)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#9b6ab5")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(198,159,213,0.3)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Sua mensagem..."
                rows={5}
                style={{ ...inputStyle, resize: "none", height: "120px" }}
                onFocus={(e) => (e.target.style.borderColor = "#9b6ab5")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(198,159,213,0.3)")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "100px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                background: isSubmitting ? "#9b6ab5" : "#1a1235",
                color: "#fdfdc9",
                border: "2px solid #1a1235",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={15} />
                  Enviar →
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { href: "mailto:mariaedzinattoo@gmail.com", icon: <Mail size={18} />, label: "mariaedzinattoo@gmail.com" },
              { href: "tel:+5517991870837", icon: <Phone size={18} />, label: "(17) 99187-0837" },
              { href: "https://github.com/mariaed-2103", icon: <Github size={18} />, label: "github.com/mariaed-2103", external: true },
              { href: "https://linkedin.com/in/maria-eduarda-zinatto-94a6881a2", icon: <Linkedin size={18} />, label: "LinkedIn", external: true },
            ].map((item) => (
              <ContactLink key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

const ContactLink = ({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        padding: "1rem 1.25rem",
        background: hovered ? "#e4cff0" : "#fff",
        border: `1.5px solid ${hovered ? "#c69fd5" : "rgba(198,159,213,0.3)"}`,
        borderRadius: "1rem",
        textDecoration: "none",
        color: "#1a1235",
        fontSize: "0.88rem",
        fontWeight: 600,
        transition: "all 0.2s",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          background: "#e4cff0",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#9b6ab5",
        }}
      >
        {icon}
      </div>
      {label}
    </a>
  );
};

export default ContactSection;