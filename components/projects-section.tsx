import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { nothing } from "@/app/font";

export default function ProjectsSection() {
  const projects = [
    {
      title: "StudySync ",
      description:
        "AI-powered academic management platform with OpenAI integration for intelligent study planning",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "OpenAI API",
        "Firebase",
        "Vercel",
      ],
      link: "https://study-sync-ochre.vercel.app/",
      github: "https://github.com/sgsjha/StudySync",
      featured: true,
    },
    {
      title: "Formula 1 Fastest Lap Simulator",
      description:
        "Stunning web app that lets users simulate fastest laps in F1 sessions, compare drivers and view live telemetry.",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Open F1 API",
        "Vercel",
      ],
      link: "https://f1-fastest-lap-simulator-web-app.vercel.app/home",
      github: "https://github.com/sgsjha/F1_FastestLap_Simulator_WebApp",
      featured: true,
    },
    {
      title: "Crypto Dashboard",
      description:
        "Real-time cryptocurrency market analytics with anomaly detection and interactive charts.",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "CoinGecko API",
        "Vercel",
      ],
      link: "https://vec-task-v4.vercel.app/",
      github: "https://github.com/sgsjha/Crypto-Analytics-Dashboard",
      featured: true,
    },
    {
      title: "Simon Says Game iOS",
      description:
        "Native iOS memory game built with Swift and UIKit, featuring immersive sound design.",
      tech: ["Swift", "UIKit", "Core Animation", "Game Design", "XCode"],
      link: null,
      github: "https://github.com/sgsjha/Simon-Game",
      featured: true,
    },
    {
      title: "AI-Powered Code Optimizer",
      description:
        "Machine learning tool that analyzes and optimizes React components for better performance and maintainability.",
      tech: ["Python", "TensorFlow", "AST", "React"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Cross-Platform Mobile App",
      description:
        "React Native app with 4.8★ rating, 100k+ downloads, and seamless iOS/Android experience.",
      tech: ["React Native", "TypeScript", "Redux", "Firebase"],
      link: "#",
      github: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span
            className={`text-4xl md:text-5xl font-mono font-bold text-center mb-12 tracking-wider text-white ${nothing.className}`}
          >
            PROJECTS
          </span>
        </h2>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8">
            <h3
              className={`text-2xl font-mono font-bold text-white tracking-wide ${nothing.className}`}
            >
              Some of my favourite projects
            </h3>

            <a
              href="https://github.com/sgsjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              More on GitHub
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border-white/20 hover:border-white/50 transition-all duration-300 group h-full"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-mono text-xl tracking-wide text-white group-hover:text-white transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 text-xs"
                    >
                      FEATURED
                    </Badge>
                  </div>
                  <CardDescription className="text-white/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-mono border-white/30 text-white/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono bg-transparent border border-white/20 text-white text-sm px-2 py-1 rounded-full hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="sr-only">View live:</span>
                        <span>LIVE</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-mono bg-transparent border border-white/10 text-white/40 text-sm px-2 py-1 rounded-full opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE</span>
                      </span>
                    )}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono bg-transparent border border-white/20 text-white text-sm px-2 py-1 rounded-full hover:bg-white/10"
                      >
                        <Github className="w-4 h-4" />
                        <span>CODE</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-mono bg-transparent border border-white/10 text-white/40 text-sm px-2 py-1 rounded-full opacity-50 cursor-not-allowed">
                        <Github className="w-4 h-4" />
                        <span>CODE</span>
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other projects removed — all listed projects are now featured */}
      </div>
    </section>
  );
}
