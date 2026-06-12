import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./About";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

export function Contact() {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        map[String(issue.path[0])] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    setSending(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`
    );
    setTimeout(() => {
      window.location.href = `mailto:elangovct@gmail.com?subject=${subject}&body=${body}`;
      setSending(false);
      toast.success("Opening your email app…");
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great."
          sub="Open to internships, full-time roles, and collaborations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="space-y-5">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value="elangovct@gmail.com"
                href="mailto:elangovct@gmail.com"
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value="+91 76394 16988"
                href="tel:+917639416988"
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Tamil Nadu, India"
              />
              <ContactRow
                icon={<GithubIcon className="h-4 w-4" />}
                label="GitHub"
                value="github.com/ELANGOVCT"
                href="https://github.com/ELANGOVCT"
              />
              <ContactRow
                icon={<LinkedinIcon className="h-4 w-4" />}
                label="LinkedIn"
                value="linkedin.com/in/elango-c"
                href="https://linkedin.com/in/elango-c-150740359"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <Field
              label="Message"
              name="message"
              textarea
              className="mt-4"
              error={errors.message}
            />
            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon, label, value, href,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition hover:translate-x-1">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label, name, type = "text", textarea, className, error,
}: {
  label: string; name: string; type?: string; textarea?: boolean; className?: string; error?: string;
}) {
  const base =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[oklch(0.66_0.21_260)]";
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} placeholder={`Your ${label.toLowerCase()}…`} className={base} />
      ) : (
        <input name={name} type={type} placeholder={`Your ${label.toLowerCase()}…`} className={base} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
