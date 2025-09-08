import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Download, MapPin, Clock } from "lucide-react";
import { nothing } from "@/app/font";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 tracking-wider text-white">
          <span
            className={`text-4xl md:text-5xl font-mono font-bold text-center mb-12 tracking-wider text-white ${nothing.className}`}
          >
            CONTACT
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono font-bold text-white mb-4 tracking-wide">
                I feel excited to contribue to Nothing
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If you have reached the end of this website, Thank you for your
                time!{" "}
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                If you are from{" "}
                <span className={nothing.className}>NOTHING</span>, feel free to
                reach out :)
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
                <span className="font-mono">Available to work in the UK</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <Clock className="w-5 h-5" />
                <span className="font-mono">BST Timezone</span>
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
                <a
                  href="mailto:sarthakjhaa11@gmail.com"
                  aria-label="Send email"
                  className="w-full inline-flex items-center justify-center text-center font-mono bg-white text-black hover:bg-white/90 glow-accent px-4 py-3 rounded"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  SEND EMAIL
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/sgsjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-mono bg-transparent border border-white/30 text-white px-3 py-2 rounded hover:bg-white/10"
                  >
                    <Github className="w-5 h-5" />
                    GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarthak-jhaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-mono bg-transparent border border-white/30 text-white px-3 py-2 rounded hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5" />
                    LINKEDIN
                  </a>
                </div>

                <a
                  href="/Sarthak Jha Nothing CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sarthak_Jha_Nothing_CV.pdf"
                  className="w-full inline-flex items-center justify-center text-center font-mono bg-white text-black hover:bg-white/90 glow-accent px-4 py-3 rounded"
                >
                  <Download className="w-5 h-5 mr-3" />
                  DOWNLOAD RESUME
                </a>
              </div>

              <div className="pt-6 border-t border-white/20 text-center">
                <p className="text-white/50 font-mono text-xs tracking-wider">
                  LOOK FORWARD TO HEARING FROM YOU!
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
