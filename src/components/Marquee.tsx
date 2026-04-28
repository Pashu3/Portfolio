const ITEMS = [
  "● full-stack engineer · hyderabad, in",
  "currently @ syndie.io",
  "next.js · typescript · react",
  "python · django · postgres",
  "system design · multi-tenant · authz",
  "simplicity over cleverness",
  "long-term reliability over short-term speed",
  "open to thoughtful conversations",
];

export function Marquee() {
  const items = [...ITEMS, ...ITEMS]; // duplicate for seamless loop
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-bg py-4">
      <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="text-text-dim">·</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
