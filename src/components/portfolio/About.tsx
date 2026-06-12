import { GraduationCap, Award, FolderKanban, BadgeCheck } from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.61", icon: GraduationCap },
  { label: "Projects", value: "3+", icon: FolderKanban },
  { label: "Certifications", value: "3+", icon: BadgeCheck },
  { label: "National Awards", value: "1", icon: Award },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="About" title="A builder, learner, competitor." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a Computer Science Engineering student at{" "}
              <span className="text-foreground">Velammal Institute of Technology</span> with a CGPA of{" "}
              <span className="text-foreground">8.61</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I specialize in <span className="text-foreground">Java development</span>, Python
              programming, Machine Learning, Web Development, and problem solving.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My goal is to become a Software Engineer capable of building scalable applications and
              intelligent systems that solve real-world challenges.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I continuously improve through projects, certifications, hackathons, and national-level
              competitions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass hover-lift relative overflow-hidden rounded-2xl p-5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="glass inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}
