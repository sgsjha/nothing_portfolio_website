import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Zap, Target, Layers, Cpu } from "lucide-react";

export default function AboutSection() {
  const principles = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Mindset",
      description: "Optimizing for performance and user experience",
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
      icon: Layers,
      title: "Transparent Architecture",
      description: "Clear, understandable system design",
    },
    {
      icon: Cpu,
      title: "Innovation Driven",
      description: "Pushing boundaries with cutting-edge tech",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span className="dotted-text text-glow" data-text="ABOUT">
            ABOUT
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="font-mono text-2xl tracking-wide text-white">
                Why Nothing?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                I'm passionate about creating transparent, minimalist solutions
                that prioritize user experience. My development philosophy
                aligns perfectly with Nothing's commitment to removing
                unnecessary complexity.
              </p>
              <p className="text-white/70 leading-relaxed">
                With 5+ years of experience in mobile and web development, I
                specialize in performance optimization, clean architecture, and
                creating intuitive user interfaces that feel effortless.
              </p>
              <p className="text-white/70 leading-relaxed">
                I believe in building technology that's honest, transparent, and
                genuinely useful - just like Nothing's approach to design.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="font-mono text-2xl tracking-wide text-white">
                My Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                Every line of code should serve a purpose. I focus on creating
                solutions that are not just functional, but elegant and
                maintainable.
              </p>
              <p className="text-white/70 leading-relaxed">
                From React Native apps to complex web platforms, I've
                consistently delivered products that users love and developers
                can easily maintain.
              </p>
              <div className="pt-4">
                <div className="text-white font-mono text-sm mb-2">
                  CORE METRICS:
                </div>
                <div className="grid grid-cols-2 gap-4 text-white/70 font-mono text-sm">
                  <div>• 40% Bundle Size Reduction</div>
                  <div>• 99.9% Uptime Achievement</div>
                  <div>• 50ms Average Load Time</div>
                  <div>• 100% Accessibility Score</div>
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
