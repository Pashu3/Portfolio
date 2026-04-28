import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full pt-32 pb-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow row */}
        <Reveal>
          <div className="mb-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            <span>[ building · routeplex ]</span>
            <span className="hidden md:inline">currently @ syndie.io · gmt+5:30</span>
            <span>2026 —</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={80}>
          <h1 className="display text-text" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Full-stack engineer
            <br />
            <span className="italic-serif text-text-muted">
              building systems that hold up in production.
            </span>
          </h1>
        </Reveal>

        {/* Sub + CTA row */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal delay={160} className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-text-muted">
              I&apos;m Pashupathi — a full-stack engineer at{" "}
              <a
                href="https://syndie.io"
                target="_blank"
                rel="noreferrer"
                className="link-draw text-text"
              >
                syndie.io
              </a>
              , working across the stack — from interfaces on top to the
              systems behind them.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
              I focus on system design, multi-tenant architectures, and
              authorization boundaries — building software that stays
              predictable as complexity grows.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
              I value simplicity over cleverness, and long-term reliability
              over short-term speed.
            </p>
          </Reveal>

          <Reveal delay={240} className="md:col-span-5">
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href="#work"
                className="group flex items-center gap-3 border border-border bg-bg-elev px-6 py-3.5 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                see the work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 px-6 py-3.5 font-mono text-sm text-text-muted transition-colors hover:text-text"
              >
                or get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stat row at the bottom */}
        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
            <Stat label="currently at" value="syndie.io" />
            <Stat label="role" value="full-stack engineer" />
            <Stat label="focus" value="systems · architecture" />
            <Stat label="based in" value="hyderabad, in" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
        {label}
      </div>
      <div className="mt-2 font-sans text-2xl text-text">{value}</div>
    </div>
  );
}
