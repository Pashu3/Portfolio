import type { ComponentPropsWithoutRef } from "react";

/**
 * Component map passed to <MDXRemote />. Every element below mirrors the
 * styling that lived in the previous block-renderer 1:1, so MDX-authored
 * posts render identically to the prior data-driven posts.
 */
export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      {...props}
      className="mt-12 font-sans text-text"
      style={{
        fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="mt-12 font-sans text-text"
      style={{
        fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
        letterSpacing: "-0.01em",
        lineHeight: 1.25,
      }}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="mt-10 font-sans text-text"
      style={{
        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
      }}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="mt-6 text-[17px] leading-[1.7] text-text-muted" />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="link-draw text-text" />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong {...props} className="text-text" />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em {...props} className="italic-serif text-text" />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="my-10 border-l-2 border-accent pl-6 italic-serif text-text"
      style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: 1.4 }}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="mt-6 space-y-3 text-[17px] leading-[1.7] text-text-muted" />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="mt-6 list-decimal space-y-3 pl-6 text-[17px] leading-[1.7] text-text-muted marker:text-text-dim"
    />
  ),
  li: ({ children, ...rest }: ComponentPropsWithoutRef<"li">) => (
    <li {...rest} className="flex items-start gap-3">
      <span className="mt-3 inline-block h-1 w-1 shrink-0 bg-accent" aria-hidden />
      <span>{children}</span>
    </li>
  ),
  // Block code: <pre><code>...</code></pre>. Style the pre, leave code as-is.
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto border border-border bg-bg-elev p-5 font-mono text-[12.5px] leading-[1.6] text-text"
    />
  ),
  // Inline code (NOT inside a <pre>).
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="border border-border-soft bg-bg-elev px-1.5 py-0.5 font-mono text-[0.92em] text-text"
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr {...props} className="my-12 border-t border-border" />
  ),
};
