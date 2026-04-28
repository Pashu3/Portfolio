export function Footer() {
  return (
    <footer className="relative w-full border-t border-border bg-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:flex-row md:items-center">
        <div>© 2026 pashupathi mali · built in next, no template</div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          all systems nominal
        </div>
        <a
          href="#top"
          className="hover:text-text"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
