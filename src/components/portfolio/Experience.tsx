import { GraduationCap, Trophy, BadgeCheck, Users } from "lucide-react";
import { SectionHeader } from "./About";

const achievements = [
  "1st Prize — INNOVATE 2K25 National Level Project Competition",
  "Selected in AICTE Productization Fellowship Round 1",
  "Project Showcase at Vadiva Design and Tech Fest",
  "Symposium Participant at SRM Institute of Science and Technology",
  "Symposium Participant at Veltech Hightech Engineering College",
];

const certifications = [
  { name: "Programming in Java", by: "NPTEL — IIT Kharagpur" },
  { name: "AI Fundamentals", by: "IBM SkillsBuild" },
  { name: "Customer Engagement", by: "IBM SkillsBuild" },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Journey" title="Education, awards & leadership." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Education */}
          <div className="glass hover-lift rounded-3xl p-6 lg:col-span-1">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">Education</h3>
            <div className="mt-4 text-sm">
              <div className="font-medium">Velammal Institute of Technology</div>
              <div className="mt-1 text-muted-foreground">
                B.E. Computer Science and Engineering
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs">
                <span className="rounded-full bg-white/5 px-2.5 py-1">CGPA 8.61</span>
                <span className="rounded-full bg-white/5 px-2.5 py-1">2023 – 2027</span>
              </div>
            </div>
          </div>

          {/* Timeline / Achievements */}
          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Achievements</h3>
            </div>
            <ol className="relative mt-6 space-y-5 border-l border-white/10 pl-6">
              {achievements.map((a) => (
                <li key={a} className="relative">
                  <span className="absolute -left-[29px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-brand ring-4 ring-[oklch(0.16_0.03_270)]" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground">{a}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]"
                >
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.by}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="glass hover-lift rounded-3xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">Leadership</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Symposium & Cultural Event Organizing Committee Member (2025-2026)
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              <li>• Event coordination</li>
              <li>• Team collaboration</li>
              <li>• Technical event management</li>
              <li>• Student engagement activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
