import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Download, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50 dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span className="dotted-text text-glow" data-text="CONTACT">
            CONTACT
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono font-bold text-white mb-4 tracking-wide">
                Let's Build Something Transparent
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Ready to create solutions that prioritize user experience and
                remove unnecessary complexity? I'm always interested in
                discussing innovative projects and opportunities.
              </p>
              <p className="text-white/70 leading-relaxed">
                Whether it's a mobile app, web platform, or performance
                optimization challenge, let's explore how we can build something
                meaningful together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <MapPin className="w-5 h-5" />
                <span className="font-mono">Available Worldwide (Remote)</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Clock className="w-5 h-5" />
                <span className="font-mono">UTC+0 Timezone</span>
              </div>
            </div>
          </div>

          <Card className="bg-black/80 backdrop-filter backdrop-blur-20 border-white/20">
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-xl font-mono font-bold text-white mb-2">
                  Get In Touch
                </h4>
                <p className="text-white/70 text-sm">
                  Choose your preferred method
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full font-mono bg-white text-black hover:bg-white/90 glow-accent"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  SEND EMAIL
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-mono bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GITHUB
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-mono bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LINKEDIN
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-mono bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Download className="w-5 h-5 mr-3" />
                  DOWNLOAD RESUME
                </Button>
              </div>

              <div className="pt-6 border-t border-white/20 text-center">
                <p className="text-white/50 font-mono text-xs tracking-wider">
                  RESPONSE TIME: 24 HOURS
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/80 backdrop-filter backdrop-blur-20 border-white/20 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-mono text-sm tracking-wide">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
