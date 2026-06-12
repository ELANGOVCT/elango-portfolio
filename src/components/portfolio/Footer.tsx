import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
            EC
          </span>
          <p className="text-sm text-muted-foreground">
            Designed and developed by <span className="text-foreground">Elango C</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Social href="https://github.com/ELANGOVCT" label="GitHub"><GithubIcon className="h-4 w-4" /></Social>
          <Social href="https://linkedin.com/in/elango-c-150740359" label="LinkedIn"><LinkedinIcon className="h-4 w-4" /></Social>
          <Social href="mailto:elangovct@gmail.com" label="Email"><Mail className="h-4 w-4" /></Social>
          <a
            href="#top"
            className="glass ml-2 inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs transition hover:ring-glow"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass grid h-10 w-10 place-items-center rounded-full transition hover:ring-glow"
    >
      {children}
    </a>
  );
}
