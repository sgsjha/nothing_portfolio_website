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
                Built with Nothing in mind (Literally)
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
                {/* Download resume button (file should live in /public/resume.pdf) */}
                <a
                  href="/Sarthak Jha Nothing CV.pdf"
                  download="Sarthak_Jha_Nothing_CV.pdf"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black hover:bg-white/90 font-mono tracking-wider px-6 py-3 text-sm md:text-base rounded-md glow-accent"
                >
                  DOWNLOAD RESUME
                </a>

                {/* Icon links: email, linkedin, github */}
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:sarthakjhaa11@gmail.com"
                    aria-label="Email"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 ring-1 ring-white/6 transition-transform transform hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sarthak-jha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 ring-1 ring-white/6 transition-transform transform hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0H12v2h.07c.62-1.18 2.14-2.42 4.43-2.42C21.3 7.58 24 10.17 24 14.68V22h-5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.48V22h-5V8z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/sgsjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 ring-1 ring-white/6 transition-transform transform hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.96 3.22 9.15 7.69 10.63.56.1.77-.24.77-.53 0-.26-.01-.95-.01-1.86-3.13.68-3.79-1.5-3.79-1.5-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.01 1.72 2.65 1.22 3.29.93.1-.72.39-1.22.71-1.5-2.5-.28-5.12-1.25-5.12-5.57 0-1.23.44-2.23 1.15-3.02-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.08 1.15a10.68 10.68 0 0 1 2.8-.38c.95 0 1.9.13 2.8.38 2.13-1.45 3.07-1.15 3.07-1.15.62 1.52.24 2.64.12 2.92.72.8 1.15 1.8 1.15 3.02 0 4.33-2.63 5.29-5.14 5.57.4.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.12 0 .29.2.64.78.53C20.03 20.91 23.25 16.72 23.25 11.76 23.25 5.48 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Built with subsection — larger, pill UI */}
              <div className="mt-6 flex flex-wrap items-center justify-center xl:justify-start gap-4">
                <span className="text-sm md:text-base font-mono text-white/70 uppercase tracking-wider">
                  Built with
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono px-3 py-1.5 bg-gradient-to-r from-white/5 via-white/7 to-white/5 rounded-full text-white/90 ring-1 ring-white/5 backdrop-blur-sm transition-transform transform hover:scale-105">
                    React.js
                  </span>
                  <span className="text-sm font-mono px-3 py-1.5 bg-gradient-to-r from-white/5 via-white/7 to-white/5 rounded-full text-white/90 ring-1 ring-white/5 backdrop-blur-sm transition-transform transform hover:scale-105">
                    Next.js
                  </span>
                  <span className="text-sm font-mono px-3 py-1.5 bg-gradient-to-r from-white/5 via-white/7 to-white/5 rounded-full text-white/90 ring-1 ring-white/5 backdrop-blur-sm transition-transform transform hover:scale-105">
                    TypeScript
                  </span>
                  <span className="text-sm font-mono px-3 py-1.5 bg-gradient-to-r from-white/5 via-white/7 to-white/5 rounded-full text-white/90 ring-1 ring-white/5 backdrop-blur-sm transition-transform transform hover:scale-105">
                    Tailwind CSS
                  </span>
                </div>
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
