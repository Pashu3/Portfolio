import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import {
  PROJECTS,
  getProject,
  getProjectSlugs,
  type Project,
} from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — case study · Pashupathi Mali`,
    description: project.tagline,
  };
}

type SectionId =
  | "problem"
  | "architecture"
  | "features"
  | "decisions"
  | "tradeoffs"
  | "failures"
  | "stack"
  | "sdks"
  | "next";

function buildSectionNumbers(project: Project): Partial<Record<SectionId, string>> {
  const order: SectionId[] = ["problem"];
  if (project.architecture) order.push("architecture");
  if (project.features?.length) order.push("features");
  order.push("decisions", "tradeoffs", "failures", "stack");
  if (project.sdks?.length) order.push("sdks");
  if (project.next) order.push("next");

  const out: Partial<Record<SectionId, string>> = {};
  order.forEach((id, idx) => {
    out[id] = String(idx).padStart(2, "0");
  });
  return out;
}

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  const nums = buildSectionNumbers(project);

  return (
    <>
      <Nav subpage />
      <main className="relative z-10">
        <Header project={project} />
        <Lede project={project} num={nums.problem!} />
        {project.architecture && (
          <Architecture project={project} num={nums.architecture!} />
        )}
        {project.features?.length ? (
          <Features project={project} num={nums.features!} />
        ) : null}
        <Decisions project={project} num={nums.decisions!} />
        <Tradeoffs project={project} num={nums.tradeoffs!} />
        <Failures project={project} num={nums.failures!} />
        <Stack project={project} num={nums.stack!} />
        {project.sdks?.length ? (
          <SDKs project={project} num={nums.sdks!} />
        ) : null}
        <NextUp
          project={project}
          num={nums.next}
          prev={prev}
          next={next}
        />
        <Footer />
      </main>
    </>
  );
}

/* ------------------------------ HEADER ------------------------------ */

function Header({ project }: { project: Project }) {
  const isLive = project.meta.status === "live";
  return (
    <section className="relative w-full pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            <Link href="/#work" className="hover:text-text transition-colors">
              ← /work
            </Link>
            <span>case study · {project.num}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            {isLive ? (
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {project.meta.status}
                {project.liveUrl
                  ? ` · ${project.liveUrl.replace(/^https?:\/\//, "")}`
                  : ""}
              </>
            ) : (
              <>{project.meta.status}</>
            )}
          </div>
          <h1
            className="mt-4 display text-text"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            {project.title}
          </h1>
          <p
            className="mt-4 italic-serif text-text-muted"
            style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)" }}
          >
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
            <Meta label="role" value={project.meta.role} />
            <Meta label="period" value={project.meta.period} />
            <Meta label="status" value={project.meta.status} />
            {project.liveUrl ? (
              <Meta
                label="link"
                value={project.liveUrl.replace(/^https?:\/\//, "")}
                href={project.liveUrl}
              />
            ) : (
              <Meta label="link" value="—" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Meta({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
        {label}
      </div>
      <div className="mt-2 font-mono text-sm text-text">{value}</div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block transition-colors hover:text-accent"
      >
        {content}
      </a>
    );
  }
  return content;
}

/* ------------------------------ LEDE ------------------------------ */

function Lede({ project, num }: { project: Project; num: string }) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="problem" />
          <p
            className="mt-6 font-sans text-text"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            {project.problem}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ ARCHITECTURE ------------------------------ */

function Architecture({ project, num }: { project: Project; num: string }) {
  if (!project.architecture) return null;
  return (
    <section className="relative w-full border-t border-border bg-bg-elev py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="architecture" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            {project.architecture.text}
          </p>
        </Reveal>

        {project.architecture.diagram && (
          <Reveal delay={80}>
            <pre className="mt-10 overflow-x-auto border border-border bg-bg p-6 font-mono text-[11px] leading-[1.4] text-text-muted">
              {project.architecture.diagram}
            </pre>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------ FEATURES ------------------------------ */

function Features({ project, num }: { project: Project; num: string }) {
  if (!project.features?.length) return null;
  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="features" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            What it actually does in production.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {project.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div className="h-full bg-bg-elev p-7">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                    aria-hidden
                  />
                  <h3
                    className="font-sans text-text"
                    style={{
                      fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-text-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ DECISIONS ------------------------------ */

function Decisions({ project, num }: { project: Project; num: string }) {
  return (
    <section className="relative w-full border-t border-border bg-bg-elev py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="decisions" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            The calls that shaped this the most — and the reasoning that
            survived contact with reality.
          </p>
        </Reveal>

        <ul className="mt-12 space-y-10">
          {project.decisions.map((d, i) => (
            <Reveal key={d.n} delay={i * 60}>
              <li className="grid grid-cols-1 gap-4 border-t border-border pt-6 md:grid-cols-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:col-span-2">
                  [{d.n}]
                </div>
                <div className="md:col-span-10">
                  <h3
                    className="font-sans text-text"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-muted">
                    {d.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ TRADEOFFS ------------------------------ */

function Tradeoffs({ project, num }: { project: Project; num: string }) {
  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="tradeoffs" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            What this design gives up. Honest list.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {project.tradeoffs.map((t, i) => (
            <Reveal key={t.cost} delay={i * 60}>
              <div className="h-full bg-bg-elev p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-warn">
                  cost
                </div>
                <h3
                  className="mt-2 italic-serif text-text"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
                >
                  {t.cost}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-text-muted">
                  {t.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAILURES ------------------------------ */

function Failures({ project, num }: { project: Project; num: string }) {
  return (
    <section className="relative w-full border-t border-border bg-bg-elev py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="failures · lessons" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            Things I got wrong, and what changed.
          </p>
        </Reveal>

        <ul className="mt-12 space-y-12">
          {project.failures.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <li className="border-t border-border pt-6">
                <h3
                  className="italic-serif text-text"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
                >
                  {f.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-muted">
                  {f.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ STACK ------------------------------ */

function Stack({ project, num }: { project: Project; num: string }) {
  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="stack" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="border border-border-soft bg-bg-elev px-3 py-1.5 font-mono text-[12px] text-text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ SDKS ------------------------------ */

function SDKs({ project, num }: { project: Project; num: string }) {
  if (!project.sdks?.length) return null;
  return (
    <section className="relative w-full border-t border-border bg-bg-elev py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel num={num} label="sdks · libraries" />
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
            Use it from any language you&apos;re already in. Or just swap the
            base URL of your existing OpenAI client and keep going.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.sdks.map((sdk, i) => (
            <Reveal key={sdk.name} delay={i * 60}>
              <a
                href={sdk.url}
                target="_blank"
                rel="noreferrer"
                className="card-hover group block h-full border border-border bg-bg p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                    {sdk.name}
                  </div>
                  {sdk.badge && (
                    <span className="border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {sdk.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 font-mono text-[13px] text-accent">
                  $ {sdk.install}
                </div>
                <div className="mt-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim transition-colors group-hover:text-accent">
                  <span>{shortenUrl(sdk.url)}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {project.externalLinks?.length ? (
          <Reveal delay={120}>
            <div className="mt-12 border-t border-border pt-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                also see
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px]">
                {project.externalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-draw text-text transition-colors hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function shortenUrl(href: string) {
  try {
    const u = new URL(href);
    return u.host + u.pathname;
  } catch {
    return href;
  }
}

/* ------------------------------ NEXT ------------------------------ */

function NextUp({
  project,
  num,
  prev,
  next,
}: {
  project: Project;
  num: string | undefined;
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <section className="relative w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        {project.next && num && (
          <Reveal>
            <SectionLabel num={num} label="next" />
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-text-muted">
              {project.next}
            </p>
          </Reveal>
        )}

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border border-border bg-bg-elev px-6 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                visit {project.liveUrl.replace(/^https?:\/\//, "")}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
            <Link
              href="/#work"
              className="group flex items-center gap-3 px-6 py-3.5 font-mono text-sm text-text-muted transition-colors hover:text-text"
            >
              ← back to all work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <nav className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {prev ? <CaseNav direction="prev" project={prev} /> : <span />}
            {next ? <CaseNav direction="next" project={next} /> : <span />}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

function CaseNav({
  direction,
  project,
}: {
  direction: "prev" | "next";
  project: Project;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`card-hover group block border border-border bg-bg-elev p-6 ${
        isNext ? "md:text-right" : ""
      }`}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
        {isNext ? "next case →" : "← previous case"}
      </div>
      <div className="mt-2 font-sans text-base tracking-tight text-text">
        {project.title}
      </div>
    </Link>
  );
}

/* ------------------------------ SHARED ------------------------------ */

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
      <span className="text-accent">[{num}]</span>
      <span>{label}</span>
    </div>
  );
}
