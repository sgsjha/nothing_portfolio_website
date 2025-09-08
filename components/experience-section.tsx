import { nothing } from "@/app/font";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h3
          className={`text-4xl md:text-5xl font-mono font-bold text-center mb-12 tracking-wider text-white ${nothing.className}`}
        >
          EXPERIENCE
        </h3>
        <div className="space-y-8">
          <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
            <div className="text-white/50 font-mono text-sm min-w-[100px]">
              Jul 2025 - Sep 2025
            </div>
            <div className="flex-1">
              <h4 className="text-white font-mono font-bold mb-2">
                Software Engineering Intern
              </h4>
              <p className="text-white/70 text-sm">
                VEC, Univeristy of Liverpool
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
            <div className="text-white/50 font-mono text-sm min-w-[100px]">
              Jan 2024 - June 2025
            </div>
            <div className="flex-1">
              <h4 className="text-white font-mono font-bold mb-2">
                Computer Science Teaching Assistant
              </h4>
              <p className="text-white/70 text-sm">University of Liverpool</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
            <div className="text-white/50 font-mono text-sm min-w-[100px]">
              Feb 2025 - April 2025
            </div>
            <div className="flex-1">
              <h4 className="text-white font-mono font-bold mb-2">
                Programming Lecturer
              </h4>
              <p className="text-white/70 text-sm">
                Wirral Metropolitan College
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 glass-card border-white/10 rounded-lg">
            <div className="text-white/50 font-mono text-sm min-w-[100px]">
              July 2024 - April 2025
            </div>
            <div className="flex-1">
              <h4 className="text-white font-mono font-bold mb-2">
                Software Engineering Intern (iOS)
              </h4>
              <p className="text-white/70 text-sm">Chamberly AB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
