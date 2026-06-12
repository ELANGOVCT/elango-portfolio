import {
  Code2, Globe, Server, Database, Brain, BookOpen, Wrench,
} from "lucide-react";
import { SectionHeader } from "./About";

type Group = {
  title: string;
  icon: typeof Code2;
  items: { name: string; level: number }[];
};

const groups: Group[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "React.js", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Spring Boot", level: 80 },
      { name: "Java (Backend)", level: 88 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [{ name: "MySQL", level: 82 }],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    items: [
      { name: "Scikit-Learn", level: 80 },
      { name: "Data Analysis", level: 78 },
      { name: "AI Integration", level: 80 },
      { name: "LLM APIs", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 80 },
      { name: "Vercel", level: 80 },
    ],
  },
];

const coreSubjects = [
  "Data Structures", "Algorithms", "Object Oriented Programming",
  "DBMS", "Operating Systems", "Computer Networks",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Skills" title="Tech I work with every day." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="glass hover-lift rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-brand"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">Core CS Subjects</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {coreSubjects.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
