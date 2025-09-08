import { Badge } from "@/components/ui/badge";
import { nothing } from "@/app/font";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "Swift"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Figma"],
    },
    {
      category: "DevOps & Tools",
      skills: ["AWS", "Jira", "GitHub Copilot", "Git & GitHub", "Bitbucket"],
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "Firebase", "REST APIs", "MySQL", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span
            className={`text-4xl md:text-5xl font-mono font-bold text-center mb-12 tracking-wider text-white ${nothing.className}`}
          >
            SKILLS
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-mono font-bold text-white tracking-wide border-b border-white/20 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-mono border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/20">
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-white tracking-wide">
            EXPERIENCE TIMELINE
          </h3>
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
              <div className="text-white/50 font-mono text-sm min-w-[100px]">
                2024-NOW
              </div>
              <div className="flex-1">
                <h4 className="text-white font-mono font-bold mb-2">
                  Senior Full-Stack Developer
                </h4>
                <p className="text-white/70 text-sm">
                  Leading mobile-first development initiatives, optimizing
                  performance across platforms
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
              <div className="text-white/50 font-mono text-sm min-w-[100px]">
                2022-2024
              </div>
              <div className="flex-1">
                <h4 className="text-white font-mono font-bold mb-2">
                  Frontend Architect
                </h4>
                <p className="text-white/70 text-sm">
                  Built scalable component systems, reduced bundle sizes by 40%
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
              <div className="text-white/50 font-mono text-sm min-w-[100px]">
                2020-2022
              </div>
              <div className="flex-1">
                <h4 className="text-white font-mono font-bold mb-2">
                  React Developer
                </h4>
                <p className="text-white/70 text-sm">
                  Specialized in performance optimization and user experience
                  enhancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
