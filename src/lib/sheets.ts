/**
 * Fetches blog posts from the Python FastAPI backend.
 *
 * The backend reads from Google Sheets and exposes:
 *   GET /api/blogs          → all posts
 *   GET /api/blogs/{slug}   → single post
 *
 * Set BACKEND_URL in .env.local (default: http://localhost:8000)
 */

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image?: string;
  tldr?: string;
  intro?: string;
  content?: string;
};

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8000";

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Backend responded ${res.status} for /api/blogs`);
      return [];
    }

    return res.json() as Promise<BlogPost[]>;
  } catch (err) {
    console.error("Could not reach backend:", err);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (res.status === 404) return null;

    if (!res.ok) {
      console.error(`Backend responded ${res.status} for /api/blogs/${slug}`);
      return null;
    }

    return res.json() as Promise<BlogPost>;
  } catch (err) {
    console.error("Could not reach backend:", err);
    return null;
  }
}
