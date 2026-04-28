import { Reveal } from "./Reveal";

type Role = {
  period: string;
  company: string;
  role: string;
  body: string;
  bullets?: string[];
};

const ROLES: Role[] = [
  {
    period: "current —",
    company: "syndie.io",
    role: "Full-stack Engineer",
    body: "Working across frontend and backend systems, building applications that need to stay reliable as complexity grows.",
    bullets: [
      "Shipping end-to-end features — Next.js on top, NestJS (Node) and MongoDB behind. The kind where the bug at 3am could land on either side of the wire.",
      "Working on systems that need to hold up under real usage — not the ideal-traffic graph in the design doc, but the spike on Tuesday afternoon for reasons no one can explain.",
      "Contributing to architecture decisions on system design, maintainability, and predictable behavior. The boring choices that pay back later.",
      "Pushing for clean abstractions over clever ones. Long-term stability over the short-term flex.",
    ],
  },
  {
    period: "2024 — 2025",
    company: "Relish Development & Solutions",
    role: "Frontend Developer",
    body: "Shipping production work across many parallel projects — frontend-first, backend close at hand when the boundaries blurred.",
    bullets: [
      "Built admin dashboards, product management systems, and e-commerce modules — each project with its own data shape, edge cases, and idea of what 'fast enough' means.",
      "Owned UI/UX work end-to-end — designs, page structure, and the kind of frontend adaptability that survives a redesign mid-sprint.",
      "Wrote scalable, component-driven interfaces — design tokens, accessible patterns, and structure that holds up when a fifth feature lands on the same screen.",
      "Built a multilingual cross-platform kiosk app on Electron + React Native. Helped on the backend in Django/PostgreSQL when the seam between sides got fuzzy.",
    ],
  },
  {
    period: "2023",
    company: "One Convergence",
    role: "Software Developer Intern",
    body: "Worked across the stack on internal tooling. First time owning a feature end-to-end — design discussion, code review, deploy. Learned what good engineering hygiene looks like.",
  },
  {
    period: "2023",
    company: "Menorah AI",
    role: "Python Developer Intern",
    body: "Python work on small ML pipelines and data utilities. Took the lesson that data quality is most of the job, and never forgot it.",
  },
  {
    period: "2020 — 2024",
    company: "B V Raju Institute of Technology",
    role: "B.Tech, Computer Science · CGPA 9.01",
    body: "Research publication, DSA certification, and a habit of organizing things that taught me how to ship under a deadline.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                /cv
              </div>
              <h2 className="mt-3 display text-text" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
                Where I&apos;ve been.
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/in/mali-pashupathi/"
              target="_blank"
              rel="noreferrer"
              className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim hover:text-text md:block"
            >
              full résumé · linkedin →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-[15px] leading-relaxed text-text-muted">
              <span className="italic-serif text-text">
                I value simplicity over cleverness
              </span>{" "}
              and long-term reliability over short-term speed. Most of what I
              find interesting now lives in system design, multi-tenant
              architectures, authorization boundaries, and infrastructure that
              behaves consistently under real-world constraints.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
              I&apos;m good at: shipping clean full-stack systems, picking the
              boring-but-correct tool, and explaining tradeoffs to
              non-technical people without making them feel dumb.
            </p>

            <div className="mt-8 border border-border bg-bg-elev p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                stack i reach for
              </div>
              <ul className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Tailwind",
                  "React Native",
                  "Electron",
                  "Node",
                  "NestJS",
                  "Python",
                  "Django",
                  "FastAPI",
                  "MongoDB",
                  "PostgreSQL",
                ].map((t) => (
                  <li
                    key={t}
                    className="border border-border-soft px-2 py-1 text-text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="space-y-8 md:col-span-8">
            {ROLES.map((r, i) => (
              <Reveal key={`${r.period}-${r.company}`} delay={i * 80}>
                <div className="grid grid-cols-1 gap-4 border-t border-border pt-6 md:grid-cols-12">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:col-span-3">
                    {r.period}
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-sans text-xl tracking-tight text-text">
                        {r.company}
                      </h3>
                      <span className="italic-serif text-text-muted">
                        — {r.role}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-text-muted">
                      {r.body}
                    </p>
                    {r.bullets && (
                      <ul className="mt-4 max-w-xl space-y-2.5 text-[14.5px] leading-relaxed text-text-muted">
                        {r.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span
                              className="mt-2.5 inline-block h-1 w-1 shrink-0 bg-accent"
                              aria-hidden
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
