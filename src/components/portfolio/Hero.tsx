import { Download, Mail, FolderGit2, MapPin, Sparkles } from "lucide-react";
import { Typewriter } from "./Typewriter";
import heroImg from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-[10%] -z-10 h-72 w-72 rounded-full bg-[oklch(0.66_0.21_260)] opacity-30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 right-[5%] -z-10 h-80 w-80 rounded-full bg-[oklch(0.62_0.24_305)] opacity-30 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.78_0.16_250)]" />
            Open to SDE / Full Stack / AI roles · 2026
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            ELANGO C
          </h1>

          <p className="mt-4 min-h-[2.5rem] text-lg font-medium sm:text-xl">
            <Typewriter
              className="text-gradient"
              phrases={[
                "Software Developer",
                "Full Stack Java Developer",
                "AI Enthusiast",
              ]}
            />
          </p>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Building practical software solutions using <span className="text-foreground">Java</span>,{" "}
            <span className="text-foreground">AI</span>, and{" "}
            <span className="text-foreground">modern web technologies</span>.
          </p>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Final-year Computer Science Engineering student with hands-on experience in Java, Python,
            Machine Learning, and Full Stack Development. National-level project competition winner
            passionate about creating impactful technology solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/elango-resume.txt"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:ring-glow"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:ring-glow"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Tamil Nadu, India
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 ring-glow">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-70"
              style={{ background: "var(--gradient-brand-soft)" }}
            />
            <img
              src={heroImg}
              alt="Abstract developer illustration"
              width={1024}
              height={1024}
              className="h-auto w-full animate-float-slow"
            />
            <div className="absolute left-4 top-4 glass rounded-xl px-3 py-1.5 font-mono text-[11px]">
              <span className="text-[oklch(0.78_0.16_250)]">$</span> ./elango --build
            </div>
            <div className="absolute bottom-4 right-4 glass rounded-xl px-3 py-1.5 text-[11px]">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
