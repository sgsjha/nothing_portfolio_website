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

  {/* Experience timeline extracted to its own component */}
      </div>
    </section>
  );
}
