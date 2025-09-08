import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Transparent UI System",
      description:
        "A glassmorphism component library inspired by Nothing's design philosophy. Built with React and TypeScript, featuring 50+ components with full accessibility support.",
      tech: ["React", "TypeScript", "Tailwind", "Storybook"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Mobile Performance Optimizer",
      description:
        "Tool that reduces app bundle size by 40% using advanced tree-shaking and code splitting techniques. Used by 100+ developers.",
      tech: ["Node.js", "Webpack", "Performance", "CLI"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Real-time Collaboration Platform",
      description: "WebRTC-based platform for seamless team communication with 99.9% uptime and sub-50ms latency.",
      tech: ["WebRTC", "Socket.io", "React", "Redis"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Nothing-Style Design System",
      description:
        "Complete design system recreating Nothing's aesthetic with 40+ components, dark mode support, and full documentation.",
      tech: ["React", "CSS-in-JS", "Design Tokens", "Figma"],
      link: "#",
      github: "#",
      featured: false,
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
      description: "React Native app with 4.8★ rating, 100k+ downloads, and seamless iOS/Android experience.",
      tech: ["React Native", "TypeScript", "Redux", "Firebase"],
      link: "#",
      github: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span className="dotted-text text-glow" data-text="PROJECTS">
            PROJECTS
          </span>
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl font-mono font-bold text-white mb-8 tracking-wide">FEATURED WORK</h3>
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
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-xs">
                      FEATURED
                    </Badge>
                  </div>
                  <CardDescription className="text-white/70 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono border-white/30 text-white/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-mono bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VIEW LIVE
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 font-mono bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      CODE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-mono font-bold text-white mb-8 tracking-wide">OTHER PROJECTS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-white/30 transition-colors group">
                <CardHeader>
                  <CardTitle className="font-mono text-lg tracking-wide text-white group-hover:text-white transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono border-white/20 text-white/70">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs font-mono border-white/20 text-white/50">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 font-mono text-white/80 hover:text-white hover:bg-white/10 p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 font-mono text-white/80 hover:text-white hover:bg-white/10 p-2"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
