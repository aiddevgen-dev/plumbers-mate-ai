import { getBlogPosts } from "@/lib/sheets";
import { BlogCard } from "@/components/BlogCard";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Plumber's Mate AI",
  description: "Insights, tips, and strategies to help plumbers grow their business with AI.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 text-center">
        {/* Sink background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blog-hero.png')",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,20,40,0.72) 0%, rgba(13,22,40,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-primary/20">
              <span>📰</span> Blog Posts
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
            <span className="gradient-text">Latest News</span>{" "}
            <em className="heading-italic font-light gradient-text">
              Articles
            </em>
          </h1>
          <p className="text-sm sm:text-base max-w-md mx-auto text-dark-muted">
            Stay up to date with the latest improvements and new features
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No posts found.</p>
              <p className="text-white/30 text-sm mt-2">
                Connect your Google Sheet to display blog posts.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {posts.map((post, i) => (
                <BlogCard key={`${post.slug}-${i}`} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
