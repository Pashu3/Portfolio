import Link from "next/link";
import { Reveal } from "./Reveal";
import { getAllPostMeta } from "@/lib/posts";

export function Writing() {
  const POSTS = getAllPostMeta();
  return (
    <section id="writing" className="relative w-full py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                /writing
              </div>
              <h2
                className="mt-3 display text-text"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
              >
                Notes from the build.
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:inline">
              {POSTS.length} posts
            </span>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/writing/${post.slug}`}
                className="group grid grid-cols-1 items-baseline gap-4 px-2 py-7 transition-colors hover:bg-bg-elev md:grid-cols-12"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:col-span-2">
                  {post.date}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-sans text-xl leading-snug tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-text-muted">
                    {post.blurb}
                  </p>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:col-span-2">
                  {post.readTime}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim transition-colors group-hover:text-accent md:col-span-1 md:text-right">
                  read →
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
