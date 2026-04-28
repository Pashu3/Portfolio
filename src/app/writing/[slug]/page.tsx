import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { mdxComponents } from "@/components/MDXComponents";
import { getAllPostMeta, getPost, getPostSlugs } from "@/lib/posts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} · Pashupathi Mali`,
    description: post.blurb,
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allMeta = getAllPostMeta();
  const idx = allMeta.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? allMeta[idx - 1] : null;
  const next = idx < allMeta.length - 1 ? allMeta[idx + 1] : null;

  return (
    <>
      <Nav subpage />
      <main className="relative z-10">
        <article className="relative w-full pt-32 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                <Link href="/#writing" className="hover:text-text transition-colors">
                  ← /writing
                </Link>
                <span>{post.category.toLowerCase()}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                {post.date} · {post.readTime} read
              </div>
              <h1
                className="mt-4 display text-text"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
              >
                {post.title}
              </h1>
              <p
                className="mt-5 italic-serif text-text-muted"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", lineHeight: 1.4 }}
              >
                {post.blurb}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 border-t border-border pt-10">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-20 border-t border-border pt-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                  written by
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                  <span className="text-text">Pashupathi Mali</span> — full-stack
                  engineer at syndie.io.{" "}
                  <Link href="/#contact" className="link-draw text-text">
                    Get in touch
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <nav className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                {prev ? (
                  <PostNavLink direction="prev" post={prev} />
                ) : (
                  <span />
                )}
                {next ? (
                  <PostNavLink direction="next" post={next} />
                ) : (
                  <span />
                )}
              </nav>
            </Reveal>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}

function PostNavLink({
  direction,
  post,
}: {
  direction: "prev" | "next";
  post: { slug: string; title: string };
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/writing/${post.slug}`}
      className={`card-hover group block border border-border bg-bg-elev p-6 ${
        isNext ? "md:text-right" : ""
      }`}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
        {isNext ? "next →" : "← previous"}
      </div>
      <div className="mt-2 font-sans text-base tracking-tight text-text">
        {post.title}
      </div>
    </Link>
  );
}
