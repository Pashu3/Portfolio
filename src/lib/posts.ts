import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  iso: string;
  readTime: string;
  category: string;
  blurb: string;
};

export type Post = PostMeta & {
  /** Raw MDX source, ready to feed to <MDXRemote source={...} />. */
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "writing");

function readPostFromFile(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    iso: data.iso,
    readTime: data.readTime,
    category: data.category,
    blurb: data.blurb,
    content,
  };
}

/** All posts, fully loaded with MDX source, sorted newest first by `iso`. */
export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((f) => readPostFromFile(f.replace(/\.mdx$/, "")));
  return posts.sort((a, b) => (a.iso < b.iso ? 1 : -1));
}

/** Lightweight metadata-only list for index pages and listings. */
export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  try {
    return readPostFromFile(slug);
  } catch {
    return undefined;
  }
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
