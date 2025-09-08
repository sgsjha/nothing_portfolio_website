import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="py-12 px-4 border-t border-white/20 bg-black dotted-bg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/70 font-mono text-sm tracking-wider mb-2">© 2025 • BUILT WITH NOTHING IN MIND</p>
              <p className="text-white/50 font-mono text-xs tracking-wider">TRANSPARENT • MINIMAL • FUNCTIONAL</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
              <span className="text-white/50 font-mono text-xs tracking-wider">INSPIRED BY NOTHING</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
