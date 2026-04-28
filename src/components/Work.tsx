import Link from "next/link";
import { Reveal } from "./Reveal";
import { PROJECTS, type Project } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative w-full pt-20 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                /work
              </div>
              <h2
                className="mt-3 display text-text"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
              >
                Selected work.
              </h2>
            </div>
            <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:block">
              {PROJECTS.length} shown · case studies inside
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="card-hover group block h-full border border-border bg-bg-elev p-7"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
          [{project.num}] · {project.year}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim transition-colors group-hover:text-accent">
          case study →
        </span>
      </div>

      <h3
        className="mt-6 font-sans text-2xl tracking-tight text-text"
        style={{ letterSpacing: "-0.02em" }}
      >
        {project.title}
      </h3>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-muted">
        <span className="italic-serif text-text">{project.card.problem}</span>{" "}
        {project.card.built}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.card.tech.map((t) => (
          <li
            key={t}
            className="border border-border-soft px-2.5 py-1 font-mono text-[11px] text-text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
