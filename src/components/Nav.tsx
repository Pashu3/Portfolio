import Link from "next/link";

export function Nav({ subpage = false }: { subpage?: boolean }) {
  const home = subpage ? "/" : "#top";
  const work = subpage ? "/#work" : "#work";
  const cv = subpage ? "/#experience" : "#experience";
  const writing = subpage ? "/#writing" : "#writing";
  const contact = subpage ? "/#contact" : "#contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-soft bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={home} className="font-mono text-sm tracking-tight text-text">
          pashupathi<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-7 font-mono text-[12px] text-text-muted md:flex">
          <li><Link href={work} className="hover:text-text transition-colors">/work</Link></li>
          <li><Link href={cv} className="hover:text-text transition-colors">/cv</Link></li>
          <li><Link href={writing} className="hover:text-text transition-colors">/writing</Link></li>
          <li><Link href={contact} className="hover:text-text transition-colors">/contact</Link></li>
        </ul>

        <Link href={contact} className="group flex items-center gap-2 font-mono text-[12px] text-text">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-dot" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          available
        </Link>
      </div>
    </nav>
  );
}
