import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Zap,
  Target,
  Layers,
  Cpu,
  GitBranch,
  BookOpenCheck,
} from "lucide-react";

import { nothing } from "@/app/font";

export default function AboutSection() {
  const principles = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Writing readable, scalable and maintainable code",
    },
    {
      icon: Smartphone,
      title: "Responsive Design Expert",
      description: "Optimizing for every screen size",
    },
    {
      icon: Zap,
      title: "Performance Obsessed",
      description: "Every millisecond matters in user experience",
    },
    {
      icon: Target,
      title: "User-Centric Design",
      description: "Building interfaces that feel effortless",
    },
    {
      icon: GitBranch,
      title: "Cross-Functional Collaborator",
      description: "Working seamlessly with devs, designers, and marketing",
    },
    {
      icon: BookOpenCheck,
      title: "Constant Learner",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span
            className={`dotted-text text-glow ${nothing.className}`}
            data-text="ABOUT"
          >
            ABOUT
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="font-mono text-2xl tracking-wide text-white">
                Why Nothing?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 h-full flex flex-col justify-between">
              <p className="text-white/70 leading-relaxed">
                I want to work at Nothing because I’ve been fascinated by your
                vision since the first phone launch, which stood out in a
                saturated Android smartphone market. I also owned a pair of
                <span
                  className={`${nothing.className} text-glow font-bold inline-block mx-2`}
                >
                  NOTHING EAR
                </span>
                earbuds, and I’ve always admired how you make technology feel
                unique, expressive, and design-led.
              </p>
              <p className="text-white/70 leading-relaxed">
                I’ve also developed projects like StudySync and the Formula 1
                Fastest Lap Simulator, which strengthened my skills in full -
                stack software development, UI/UX design, and more expertise I’d
                love to bring to a team that shares my passion for innovation.
              </p>
              <p className="text-white/70 leading-relaxed">
                Looking for a role where I can contribute to something
                meaningful, grow both personally and professionally, gain
                mentorship from top developers, and what better place than
                Nothing for the same.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 h-full">
            <CardHeader>
              <CardTitle className="font-mono text-2xl tracking-wide text-white">
                Who am I?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 h-full flex flex-col justify-between">
              <p className="text-white/70 leading-relaxed">
                I’m a Computer Science graduate from the University of Liverpool
                with experience as a Software Engineering Intern at VEC, where
                I’ve built scalable front-end features using React, TypeScript,
                Next.js, MongoDB and AWS.
              </p>
              <p className="text-white/70 leading-relaxed">
                I possess many software development skills including as you will
                see, however my biggest weapon is my{" "}
                <span
                  className={`${nothing.className} text-glow font-bold inline-block mx-2`}
                >
                  ADAPTABILITY
                </span>
                . The power to figure things out. I might not have the answer
                today, but I will in a few hours.
              </p>
              <div className="pt-4">
                <div className="text-white font-mono text-sm mb-2">
                  CORE METRICS:
                </div>
                <div className="grid grid-cols-2 gap-4 text-white/70 font-mono text-sm">
                  <div>• £4,000. Scholarship for Academic Excellence</div>
                  <div>• Best Teaching Assistant Award by Department of CS</div>
                  <div>• UI/UX Certification from Meta</div>
                  <div>• Multitude of Projects on GitHub</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 glass-card border-white/10 rounded-lg hover:border-white/30 transition-colors"
            >
              <principle.icon className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-mono font-bold text-lg text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
