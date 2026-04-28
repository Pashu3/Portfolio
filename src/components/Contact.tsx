import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-border bg-bg-elev py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            /contact
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="display text-text"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Let&apos;s build
            <br />
            <span className="italic-serif text-accent">something that lasts.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal delay={160} className="md:col-span-7">
            <p className="max-w-xl text-[17px] leading-relaxed text-text-muted">
              Open to thoughtful conversations around engineering and
              infrastructure. Email is the fastest — I read everything and
              reply to most things within a day or two.
            </p>
            <a
              href="mailto:hello@pashupathimali.com"
              className="mt-8 inline-block font-sans tracking-tight text-text"
              style={{ fontSize: "clamp(1.25rem, 2.6vw, 2rem)", letterSpacing: "-0.02em" }}
            >
              <span className="link-draw">hello@pashupathimali.com</span>
            </a>
          </Reveal>

          <Reveal delay={240} className="md:col-span-5">
            <ul className="space-y-3 font-mono text-[13px]">
              <ContactRow
                label="linkedin"
                handle="/in/mali-pashupathi"
                href="https://www.linkedin.com/in/mali-pashupathi/"
              />
              <ContactRow
                label="github"
                handle="@Pashu3"
                href="https://github.com/Pashu3"
              />
              <ContactRow
                label="x / twitter"
                handle="@pashupathi_03"
                href="https://x.com/pashupathi_03"
              />
              <ContactRow
                label="product hunt"
                handle="@pashupathi"
                href="https://www.producthunt.com/@pashupathi"
              />
              <ContactRow
                label="reddit"
                handle="u/Pashupathi-03"
                href="https://www.reddit.com/user/Pashupathi-03"
              />
              <ContactRow label="based" handle="hyderabad, in" href="#" />
            </ul>

            <div className="mt-10 border border-border bg-bg p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                open to
              </div>
              <ul className="mt-3 space-y-2 text-[14px] text-text-muted">
                <OpenTo>full-time engineering roles</OpenTo>
                <OpenTo>infrastructure / systems consulting</OpenTo>
                <OpenTo>thoughtful conversations on architecture</OpenTo>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  handle,
  href,
}: {
  label: string;
  handle: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex items-center justify-between border-b border-border-soft py-3 text-text-muted transition-colors hover:text-text"
      >
        <span className="uppercase tracking-[0.18em] text-text-dim">
          {label}
        </span>
        <span className="flex items-center gap-2 text-text">
          {handle}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </li>
  );
}

function OpenTo({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-accent" />
      <span>{children}</span>
    </li>
  );
}
