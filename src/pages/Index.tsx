import Navbar from "@/components/portfolio/Navbar.tsx";
import HeroSection from "@/components/portfolio/HeroSection.tsx";
import AboutSection from "@/components/portfolio/AboutSection.tsx";
import SkillsSection from "@/components/portfolio/SkillsSection.tsx";
import ProjectsSection from "@/components/portfolio/ProjectsSection.tsx";
import ExperienceSection from "@/components/portfolio/ExperienceSection.tsx";
import ContactSection from "@/components/portfolio/ContactSection.tsx";
import Footer from "@/components/portfolio/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
