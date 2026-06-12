import { useMemo, useState } from "react";
import { ExternalLink, Trophy, Wrench } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { SectionHeader } from "./About";

type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  category: "AI/ML" | "Full Stack" | "AI/ML & Backend";
  achievement?: string;
  liveUrl?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "ECOCROP — Smart Crop Recommendation System",
    description:
      "Full-stack ML-powered crop recommendation system that analyzes soil nutrients, temperature, humidity, and rainfall data to recommend suitable crops.",
    features: [
      "Machine Learning prediction",
      "Crop recommendation engine",
      "Farmer SMS notification system",
      "Twilio API integration",
      "Real-time recommendations",
    ],
    tech: ["Java", "Python", "Scikit-Learn", "Twilio API", "JSON", "HTTPClient"],
    category: "AI/ML & Backend",
    achievement: "Winner — INNOVATE 2K25 National Level Project Competition",
  },
  {
    title: "ResumeGap Analyzer",
    description:
      "AI-powered ATS resume analyzer that compares resumes with job descriptions, calculates match scores, identifies missing skills, and generates personalized learning paths.",
    features: [
      "ATS score analysis",
      "Skill gap detection",
      "Learning recommendations",
      "Resume optimization",
    ],
    tech: ["Next.js", "React", "AI APIs", "Vercel"],
    category: "Full Stack",
    liveUrl: "https://v0-resume-skill-gap-analyzer-delta.vercel.app/",
  },
  {
    title: "AI Chatbot Assistant",
    description:
      "Intelligent conversational chatbot built using Python capable of answering user queries, maintaining context, and integrating with APIs.",
    features: ["Context retention", "API integrations", "Persistent storage"],
    tech: ["Python", "FastAPI", "OpenAI API", "SQLite"],
    category: "AI/ML",
    status: "Under Development",
  },
];

const filters = ["All", "Full Stack", "AI/ML", "AI/ML & Backend"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured work"
          sub="A selection of projects spanning full-stack, backend, and AI/ML."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                filter === f
                  ? "bg-gradient-brand text-brand-foreground shadow-[var(--shadow-glow)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.title}
              className="glass hover-lift group relative overflow-hidden rounded-3xl p-6 sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-25 blur-3xl transition group-hover:opacity-50"
                style={{ background: "var(--gradient-brand)" }}
              />

              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </span>
                {p.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-amber-300">
                    <Wrench className="h-3 w-3" /> {p.status}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold leading-tight sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-4 grid gap-1.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.achievement && (
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-sm">
                  <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span className="text-amber-100/90">{p.achievement}</span>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-brand-foreground transition hover:scale-105"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live demo
                  </a>
                )}
                <a
                  href="https://github.com/ELANGOVCT"
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition hover:ring-glow"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
