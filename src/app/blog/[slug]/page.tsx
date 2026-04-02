import { getBlogPost, getBlogPosts } from "@/lib/sheets";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stripHtml, formatDate } from "@/lib/utils";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Plumber's Mate AI`,
    description: stripHtml(post.tldr ?? post.intro ?? "").slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getBlogPost(slug),
    getBlogPosts(),
  ]);

  if (!post) notFound();

  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 4);
  const validImage =
    post.image && (post.image.startsWith("http://") || post.image.startsWith("https://"))
      ? post.image
      : null;

  return (
    <>
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors text-dark-muted hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Date */}
          {post.date && (
            <p className="text-xs font-medium mb-3 uppercase tracking-wider text-dark-muted">
              {formatDate(post.date)}
            </p>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* TLDR */}
          {post.tldr && (
            <div
              className="prose-blog rounded-xl px-5 py-4 mb-8 text-sm leading-relaxed bg-dark-card border border-dark-border"
            >
              <span className="font-bold text-white block mb-2">TL;DR</span>
              <div dangerouslySetInnerHTML={{ __html: post.tldr }} />
            </div>
          )}

          {/* Hero image */}
          {validImage && (
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8">
              <Image
                src={validImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Intro */}
          {post.intro && (
            <div
              className="prose-blog text-base sm:text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: post.intro }}
            />
          )}

          {/* Main content */}
          {post.content && (
            <div
              className="prose-blog mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* CTA box */}
          <div
            className="rounded-2xl p-6 sm:p-8 text-center mb-14 border border-dark-border"
            style={{
              background: "linear-gradient(135deg, #0a1933 0%, #0d1f3c 100%)",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to put this into action?
            </h3>
            <p className="text-sm mb-5 text-dark-muted">
              Let Plumber&apos;s Mate AI handle calls, bookings, and follow-ups 24/7 — so you don&apos;t have to.
            </p>
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-black font-bold text-sm bg-primary hover:brightness-90 transition-all"
            >
              Book a Free Demo <span>↗</span>
            </Link>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-5">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block rounded-xl p-4 transition-colors group bg-dark-card border border-dark-border"
                  >
                    <p className="text-xs font-medium mb-1.5 uppercase tracking-wider text-dark-muted">
                      {p.date}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors leading-snug">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FAQ />
    </>
  );
}
