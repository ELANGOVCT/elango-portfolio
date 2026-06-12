import { useEffect, useState } from "react";
import { Star, GitFork, BookMarked, Users } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { SectionHeader } from "./About";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type Profile = {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

const USER = "ELANGOVCT";

export function GithubSection() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch(`https://api.github.com/users/${USER}`).then((r) =>
        r.ok ? r.json() : Promise.reject()
      ),
      fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=6`).then((r) =>
        r.ok ? r.json() : Promise.reject()
      ),
    ])
      .then(([p, r]) => {
        if (cancelled) return;
        setProfile(p);
        setRepos(r);
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const languages = Array.from(
    new Set((repos ?? []).map((r) => r.language).filter(Boolean))
  ) as string[];

  return (
    <section id="github" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="GitHub" title="Live from my repositories." />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-4">
              {profile ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  loading="lazy"
                  width={72}
                  height={72}
                  className="h-18 w-18 rounded-2xl ring-2 ring-white/10"
                />
              ) : (
                <div className="h-[72px] w-[72px] animate-pulse rounded-2xl bg-white/5" />
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  <a
                    href={`https://github.com/${USER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate font-display text-lg font-semibold hover:text-gradient"
                  >
                    @{USER}
                  </a>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {profile?.bio ?? "Building practical software solutions."}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Stat icon={BookMarked} label="Repos" value={profile?.public_repos} />
              <Stat icon={Users} label="Followers" value={profile?.followers} />
              <Stat icon={Users} label="Following" value={profile?.following} />
            </div>

            {languages.length > 0 && (
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Languages
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {languages.map((l) => (
                    <span
                      key={l}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px]"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={`https://github.com/${USER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition hover:scale-[1.02]"
            >
              <GithubIcon className="h-4 w-4" /> Visit GitHub
            </a>
          </div>

          <div className="grid gap-4">
            {error && (
              <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
                Couldn't load repositories right now. Visit{" "}
                <a
                  href={`https://github.com/${USER}`}
                  className="text-gradient"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/{USER}
                </a>
                .
              </div>
            )}
            {!repos &&
              !error &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass h-24 animate-pulse rounded-2xl" />
              ))}
            {repos?.slice(0, 6).map((r) => (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="glass hover-lift block rounded-2xl p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 truncate font-display font-semibold">{r.name}</div>
                  <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                    {r.language && (
                      <span className="rounded-md border border-white/10 px-1.5 py-0.5 font-mono">
                        {r.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" /> {r.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {r.forks_count}
                    </span>
                  </div>
                </div>
                {r.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {r.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Star;
  label: string;
  value?: number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <Icon className="mx-auto h-4 w-4 text-[oklch(0.78_0.16_250)]" />
      <div className="mt-1 font-display text-lg font-bold">
        {value === undefined ? "—" : value}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
