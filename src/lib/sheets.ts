/**
 * Fetches blog posts from the Python FastAPI backend.
 *
 * The backend reads from Google Sheets and exposes:
 *   GET /api/blogs          → all posts
 *   GET /api/blogs/{slug}   → single post
 *
 * Set BACKEND_URL in .env.local (default: http://localhost:8000)
 *
 * Uses React cache() to deduplicate identical requests within a single
 * server render (e.g. generateMetadata + page component both call getBlogPost).
 * ISR revalidates cached pages every 60 seconds.
 */

import { cache } from "react";

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

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs`, {
      next: { revalidate: 60 },
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
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs/${slug}`, {
      next: { revalidate: 60 },
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
});
