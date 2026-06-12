import { Target } from "lucide-react";
import { SectionHeader } from "./About";

const roadmap = [
  { title: "Data Structures & Algorithms", note: "Arrays, Trees, Graphs, DP" },
  { title: "Object Oriented Programming", note: "Design principles, SOLID" },
  { title: "Operating Systems", note: "Processes, memory, scheduling" },
  { title: "Computer Networks", note: "TCP/IP, HTTP, sockets" },
  { title: "DBMS", note: "SQL, normalization, indexing" },
  { title: "Full Stack Java Development", note: "Spring Boot, REST, JPA" },
];

export function Prep() {
  return (
    <section id="prep" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Placement Prep"
          title="Current focus areas."
          sub="A structured roadmap I'm following to stay interview-ready."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((r, i) => (
            <div key={r.title} className="glass hover-lift relative rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Target className="h-4 w-4 text-[oklch(0.78_0.16_250)]" />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full bg-gradient-brand"
                  style={{ width: `${60 + ((i * 7) % 30)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
