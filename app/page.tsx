import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageFade } from "@/components/animations/PageFade";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16 flex-1 flex flex-col">
        <PageFade>
          <main className="w-full">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </PageFade>
      </div>
      <Footer />
    </>
  );
}
