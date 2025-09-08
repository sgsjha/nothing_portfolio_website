import { Button } from "@/components/ui/button";
import { nothing } from "@/app/font";
import Spline from "@splinetool/react-spline/next";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black dotted-bg">
      <div className="absolute top-20 left-20 w-16 h-16 border border-white/20 rounded-full float-animation" />
      <div className="absolute top-40 right-32 w-8 h-8 bg-white/10 rounded-full float-animation-delayed" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-white/30 rounded-full float-animation-slow" />
      <div className="absolute top-1/2 right-20 w-6 h-6 bg-white/5 rounded-full float-animation" />
      <div className="absolute bottom-20 right-1/3 w-10 h-10 border border-white/15 rounded-full float-animation-delayed" />

      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-126 h-[40rem] model-container rounded-2xl">
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/5hbfuX6XwdvzbH8h/scene.splinecode" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white -translate-x-32 md:-translate-x-64">
        <div className="mb-8">
          <h1
            className={`text-6xl md:text-8xl ${nothing.className} font-bold mb-8 md:mb-10 tracking-wider text-glow text-4xl`}
          >
            <span
              className={`${nothing.className} nothing-glyph`}
              data-text={"SARTHAK"}
              style={{ animationDelay: "0s" }}
            >
              SARTHAK
            </span>
            <span className="mx-2" />
            <span
              className={`${nothing.className} nothing-glyph`}
              data-text={"JHA"}
              style={{ animationDelay: "0.2s" }}
            >
              JHA
            </span>
          </h1>
          <h2
            className={`text-4xl md:text-6xl ${nothing.className} font-bold mb-6 tracking-wider text-glow`}
          >
            <span>{"Here's why "}</span>
            <span
              className={`${nothing.className} nothing-glyph`}
              data-text={"NOTHING"}
              style={{ animationDelay: "0.4s" }}
            >
              NOTHING
            </span>
            <span>{" should "}</span>
            <span
              className={`${nothing.className} nothing-glyph`}
              data-text={"hire me"}
              style={{ animationDelay: "0.6s" }}
            >
              hire me
            </span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/70 mb-8 font-mono tracking-wide">
          {"Building transparent solutions for Nothing"}
        </p>

        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 font-mono tracking-wider px-8 py-6 text-lg glow-accent"
        >
          DISCOVER MY WORK
        </Button>
      </div>
    </section>
  );
}
