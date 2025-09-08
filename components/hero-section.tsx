import { Button } from "@/components/ui/button";
import { nothing } from "@/app/font";
import Spline from "@splinetool/react-spline/next";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh bg-black dotted-bg overflow-hidden pt-14 md:pt-0 scroll-mt-14"
    >
      {/* subtle orbs (hidden on small to avoid clutter) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute top-20 left-20 w-16 h-16 border border-white/20 rounded-full float-animation" />
        <div className="hidden md:block absolute top-40 right-32 w-8 h-8 bg-white/10 rounded-full float-animation-delayed" />
        <div className="hidden md:block absolute bottom-32 left-1/4 w-12 h-12 border border-white/30 rounded-full float-animation-slow" />
        <div className="hidden xl:block absolute top-1/2 right-20 w-6 h-6 bg-white/5 rounded-full float-animation" />
        <div className="hidden xl:block absolute bottom-20 right-1/3 w-10 h-10 border border-white/15 rounded-full float-animation-delayed" />
      </div>

      <div className="relative container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* 1 col until xl, 2 cols on xl+ */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12 items-center text-center xl:text-left">
          {/* TEXT FIRST on sm/md; left column on xl */}
          <div className="order-1 xl:order-1 text-white">
            <div className="mx-auto xl:mx-0 max-w-3xl xl:max-w-[42rem]">
              {/* NAME — single line */}
              <h1
                className={`${nothing.className} font-bold text-glow leading-none mb-4
                            whitespace-nowrap
                            tracking-normal sm:tracking-wide xl:tracking-wider
                            text-[clamp(1.4rem,8vw,5.75rem)] md:text-[clamp(1.6rem,7vw,5.75rem)]`}
              >
                <span
                  className="nothing-glyph align-middle"
                  data-text="SARTHAK"
                  style={{ animationDelay: "0s" }}
                >
                  SARTHAK
                </span>
                <span className="mx-2" />
                <span
                  className="nothing-glyph align-middle"
                  data-text="JHA"
                  style={{ animationDelay: "0.2s" }}
                >
                  JHA
                </span>
              </h1>

              <h2
                className={`${nothing.className} font-bold tracking-wider text-glow leading-tight
                            text-[clamp(1rem,5.5vw,3.25rem)] md:text-[clamp(1.1rem,4.5vw,3.25rem)]`}
              >
                <span>Here&apos;s why </span>
                <span
                  className="nothing-glyph"
                  data-text="NOTHING"
                  style={{ animationDelay: "0.4s" }}
                >
                  NOTHING
                </span>
                <span> should </span>
                <span
                  className="nothing-glyph"
                  data-text="hire me"
                  style={{ animationDelay: "0.6s" }}
                >
                  hire me
                </span>
              </h2>

              <p className="text-white/70 font-mono tracking-wide mt-6 mb-8 text-base sm:text-lg md:text-xl">
                Building transparent solutions for Nothing
              </p>

              <div className="flex justify-center xl:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-mono tracking-wider px-8 py-6 text-base md:text-lg glow-accent"
                >
                  DISCOVER MY WORK
                </Button>
              </div>
            </div>
          </div>

          {/* MODEL SECOND on sm/md; right column on xl */}
          <div className="order-2 xl:order-2 flex justify-center xl:justify-end">
            <div
              className="
                relative
                w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem] xl:w-[30rem] 2xl:w-[34rem]
                aspect-[3/4] sm:aspect-[4/5] md:aspect-[1/1] xl:aspect-[9/16]
                rounded-2xl overflow-hidden model-container
              "
              aria-label="Nothing Phone 3D model"
            >
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/5hbfuX6XwdvzbH8h/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
